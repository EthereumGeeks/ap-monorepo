/*jslint node*/
/*global before, beforeEach, describe, it, web3*/
const assert = require('assert');
const bre = require('@nomiclabs/buidler');
const { shouldFail } = require('openzeppelin-test-helpers');

const { getSnapshotTaker } = require('../../../helper/setupTestEnvironment');
const { generateSchedule, parseTerms, ZERO_ADDRESS } = require('../../../helper/utils');

const ASSET_ALREADY_EXISTS = 'ASSET_ALREADY_EXISTS';
const UNAUTHORIZED_SENDER = 'UNAUTHORIZED_SENDER';


describe('PAMRegistry', () => {
  let actor, creatorObligor, creatorBeneficiary, counterpartyObligor, counterpartyBeneficiary, nobody;

  /** @param {any} self - `this` inside `before()` (and `it()`) */
  const snapshotTaker = (self) => getSnapshotTaker(bre, self, async () => {
    // code bellow runs right before the EVM snapshot gets taken

    [
      /* deployer */, actor, creatorObligor, creatorBeneficiary, counterpartyObligor, counterpartyBeneficiary, nobody,
    ] = self.accounts;

    this.assetId = 'PAM_01';
    this.ownership = { creatorObligor, creatorBeneficiary, counterpartyObligor, counterpartyBeneficiary };
    this.terms = require('../../../helper/terms/PAMTerms-complex.json');
    this.schedule = await generateSchedule(this.PAMEngineInstance, this.terms);
    this.state = await this.PAMEngineInstance.methods.computeInitialState(this.terms).call();
  });

  before(async () => {
    this.setupTestEnvironment = snapshotTaker(this);
    await this.setupTestEnvironment();
  });

  it('should register an asset', async () => {
    await this.PAMRegistryInstance.methods.registerAsset(
      web3.utils.toHex(this.assetId),
      this.terms,
      this.state,
      this.schedule,
      this.ownership,
      this.PAMEngineInstance.options.address,
      actor,
      ZERO_ADDRESS
    ).send({ from: actor });

    const storedTerms = await this.PAMRegistryInstance.methods.getTerms(web3.utils.toHex(this.assetId)).call();
    const storedState = await this.PAMRegistryInstance.methods.getState(web3.utils.toHex(this.assetId)).call();
    const storedOwnership = await this.PAMRegistryInstance.methods.getOwnership(web3.utils.toHex(this.assetId)).call();
    const storedEngineAddress = await this.PAMRegistryInstance.methods.getEngine(web3.utils.toHex(this.assetId)).call();

    assert.deepEqual(parseTerms(storedTerms), parseTerms(Object.values({ ...this.terms })));
    assert.deepEqual(storedState, this.state);
    assert.deepEqual(storedEngineAddress, this.PAMEngineInstance.options.address);
    assert.equal(storedOwnership.creatorObligor, creatorObligor);
    assert.equal(storedOwnership.creatorBeneficiary, creatorBeneficiary);
    assert.equal(storedOwnership.counterpartyObligor, counterpartyObligor);
    assert.equal(storedOwnership.counterpartyBeneficiary, counterpartyBeneficiary);
  });

  it('should not overwrite an existing asset', async () => {
    await shouldFail.reverting.withMessage(
      this.PAMRegistryInstance.methods.registerAsset(
        web3.utils.toHex(this.assetId),
        this.terms,
        this.state,
        this.schedule,
        this.ownership,
        this.PAMEngineInstance.options.address,
        actor,
        ZERO_ADDRESS
      ).send({ from: actor }),
      'BaseRegistry.setAsset: ' + ASSET_ALREADY_EXISTS
    );
  });

  it('should let the actor overwrite and update the terms, state of an asset', async () => {
    await this.PAMRegistryInstance.methods.setState(
      web3.utils.toHex(this.assetId),
      this.state,
    ).send({ from: actor });
  });

  it('should not let an unauthorized account overwrite and update the terms, state of an asset', async () => {
    await shouldFail.reverting.withMessage(
      this.PAMRegistryInstance.methods.setState(
        web3.utils.toHex(this.assetId),
        this.state,
      ).send({ from: nobody }),
      'AccessControl.isAuthorized: ' + UNAUTHORIZED_SENDER
    );
  });
});
