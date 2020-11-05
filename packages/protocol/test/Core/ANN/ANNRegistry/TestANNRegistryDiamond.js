/*jslint node*/
/*global before, beforeEach, describe, it, web3*/
const assert = require('assert');
const buidlerRuntime = require('@nomiclabs/buidler');
const { shouldFail } = require('openzeppelin-test-helpers');

const { getSnapshotTaker } = require('../../../helper/setupTestEnvironment');
const { generateSchedule, parseTerms, ZERO_ADDRESS } = require('../../../helper/utils/utils');

const ASSET_ALREADY_EXISTS = 'ASSET_ALREADY_EXISTS';
const UNAUTHORIZED_SENDER = 'UNAUTHORIZED_SENDER';


describe('ANNRegistry', () => {
  let actor, creatorObligor, creatorBeneficiary, counterpartyObligor, counterpartyBeneficiary, nobody;

  /** @param {any} self - `this` inside `before()` (and `it()`) */
  const snapshotTaker = (self) => getSnapshotTaker(buidlerRuntime, self, async () => {
    // code bellow runs right before the EVM snapshot gets taken

    [
      deployer, actor, creatorObligor, creatorBeneficiary, counterpartyObligor, counterpartyBeneficiary, nobody
    ] = self.accounts;

    self.assetId = 'ANN_01';
    self.ownership = { creatorObligor, creatorBeneficiary, counterpartyObligor, counterpartyBeneficiary };
    self.terms = require('../../../helper/terms/ANNTerms-complex.json');
    self.schedule = await generateSchedule(self.ANNEngineInstance, self.terms);
    self.state = await self.ANNEngineInstance.methods.computeInitialState(self.terms).call();
  });

  before(async () => {
    this.setupTestEnvironment = snapshotTaker(this);
    await this.setupTestEnvironment();
  });

  it('should register an asset', async () => {
    await this.AssetRegistryDiamondInstance.methods.registerAsset(
      web3.utils.toHex(this.assetId),
      this.terms,
      this.state,
      this.schedule,
      this.ownership,
      this.ANNEngineInstance.options.address,
      actor,
      ZERO_ADDRESS
    ).send({ from: actor });

    const storedTerms = await this.AssetRegistryDiamondInstance.methods.getTerms(web3.utils.toHex(this.assetId)).call();
    const storedState = await this.AssetRegistryDiamondInstance.methods.getState(web3.utils.toHex(this.assetId)).call();
    const storedOwnership = await this.AssetRegistryDiamondInstance.methods.getOwnership(web3.utils.toHex(this.assetId)).call();
    const storedEngineAddress = await this.AssetRegistryDiamondInstance.methods.getEngine(web3.utils.toHex(this.assetId)).call();

    assert.deepStrictEqual(parseTerms(storedTerms), parseTerms(Object.values({ ...this.terms })));
    assert.deepStrictEqual(storedState, this.state);
    assert.deepStrictEqual(storedEngineAddress, this.ANNEngineInstance.options.address);
    assert.strictEqual(storedOwnership.creatorObligor, creatorObligor);
    assert.strictEqual(storedOwnership.creatorBeneficiary, creatorBeneficiary);
    assert.strictEqual(storedOwnership.counterpartyObligor, counterpartyObligor);
    assert.strictEqual(storedOwnership.counterpartyBeneficiary, counterpartyBeneficiary);
  });

  it('should not overwrite an existing asset', async () => {
    await shouldFail.reverting.withMessage(
      this.AssetRegistryDiamondInstance.methods.registerAsset(
        web3.utils.toHex(this.assetId),
        this.terms,
        this.state,
        this.schedule,
        this.ownership,
        this.ANNEngineInstance.options.address,
        actor,
        ZERO_ADDRESS
      ).send({ from: actor }),
      'BaseContractFacet.setAsset: ' + ASSET_ALREADY_EXISTS
    );
  });

  it('should let the actor overwrite and update the terms, state of an asset', async () => {
    await this.AssetRegistryDiamondInstance.methods.setState(
      web3.utils.toHex(this.assetId),
      this.state,
    ).send({ from: actor });
  });

  it('should not let an unauthorized account overwrite and update the terms, state of an asset', async () => {
    await shouldFail.reverting.withMessage(
      this.AssetRegistryDiamondInstance.methods.setState(
        web3.utils.toHex(this.assetId),
        this.state,
      ).send({ from: nobody }),
      'BaseFacet.isAuthorized: ' + UNAUTHORIZED_SENDER
    );
  });
});
