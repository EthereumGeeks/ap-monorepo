const { shouldFail } = require('openzeppelin-test-helpers');

const { getDefaultTerms } = require('../helper/tests')
const { setupTestEnvironment } = require('../helper/setupTestEnvironment')

const ENTRY_ALREADY_EXISTS = 'ENTRY_ALREADY_EXISTS'
const UNAUTHORIZED_SENDER = 'UNAUTHORIZED_SENDER'


contract('EconomicsRegistry', (accounts) => {

  const actor = accounts[1]

  before(async () => {
    const instances = await setupTestEnvironment()
    Object.keys(instances).forEach((instance) => this[instance] = instances[instance])

    this.assetId = 'C123'
    this.terms = await getDefaultTerms()
    this.state = await this.PAMEngineInstance.computeInitialState(this.terms, {})
  })

  it('should register a contract', async () => {
    await this.EconomicsRegistryInstance.registerEconomics(
      web3.utils.toHex(this.assetId), 
      this.terms,
      this.state,
      actor
    )

    // const terms = await this.EconomicsRegistryInstance.getTerms(web3.utils.toHex(this.assetId))
    const state = await this.EconomicsRegistryInstance.getState(web3.utils.toHex(this.assetId))

    assert.deepEqual(state, this.state)
  })

  it('should not overwrite an existing contract', async () => {
    await shouldFail.reverting.withMessage(
      this.EconomicsRegistryInstance.registerEconomics(
        web3.utils.toHex(this.assetId), 
        this.terms,
        this.state,
        actor
      ),
      ENTRY_ALREADY_EXISTS
    )
  })

  it('should let the actor overwrite and update the terms, state and the eventId of a contract', async () => {
    await this.EconomicsRegistryInstance.setTerms(
      web3.utils.toHex(this.assetId), 
      this.terms,
      { from: actor }
    )

    await this.EconomicsRegistryInstance.setState(
      web3.utils.toHex(this.assetId), 
      this.state,
      { from: actor }
    )

    await this.EconomicsRegistryInstance.setEventId(
      web3.utils.toHex(this.assetId), 
      1,
      { from: actor }
    )
  })

  it('should not let an unauthorized account overwrite and update the terms, state and the eventId of a contract', async () => {
    await shouldFail.reverting.withMessage(
      this.EconomicsRegistryInstance.setTerms(
        web3.utils.toHex(this.assetId), 
        this.terms,
      ),
      UNAUTHORIZED_SENDER
    )

    await shouldFail.reverting.withMessage(
      this.EconomicsRegistryInstance.setState(
        web3.utils.toHex(this.assetId), 
        this.state,
      ),
      UNAUTHORIZED_SENDER
    )

    await shouldFail.reverting.withMessage(
      this.EconomicsRegistryInstance.setEventId(
        web3.utils.toHex(this.assetId), 
        1,
      ),
      UNAUTHORIZED_SENDER
    )
  })
})
