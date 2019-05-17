const { shouldFail } = require('openzeppelin-test-helpers');

const { setupTestEnvironment } = require('../helper/setupTestEnvironment')

const ENTRY_ALREADY_EXISTS = 'ENTRY_ALREADY_EXISTS'
const UNAUTHORIZED_SENDER = 'UNAUTHORIZED_SENDER'
const INVALID_CASHFLOWID = 'INVALID_CASHFLOWID'


contract('OwnershipRegistry', (accounts) => {

  const recordCreatorObligor = accounts[0]
  const recordCreatorBeneficiary = accounts[1]
  const counterpartyObligor = accounts[2]
  const counterpartyBeneficiary = accounts[3]
  
  const cashflowIdBeneficiary = accounts[4]
  const newCashflowBeneficiary = accounts[5]

  before(async () => {
    const instances = await setupTestEnvironment()
    Object.keys(instances).forEach((instance) => this[instance] = instances[instance])

    this.assetId = 'C123'
  })

  it('should register ownership of an asset', async () => {
    const ownership = { 
      recordCreatorObligor, 
      recordCreatorBeneficiary, 
      counterpartyObligor, 
      counterpartyBeneficiary
    }

    await this.OwnershipRegistryInstance.registerOwnership(
      web3.utils.toHex(this.assetId), 
      ownership
    )

    const storedOwnership = await this.OwnershipRegistryInstance.getOwnership(web3.utils.toHex(this.assetId))
    
    assert.equal(storedOwnership.recordCreatorObligor, recordCreatorObligor)
    assert.equal(storedOwnership.recordCreatorBeneficiary, recordCreatorBeneficiary)
    assert.equal(storedOwnership.counterpartyObligor, counterpartyObligor)
    assert.equal(storedOwnership.counterpartyBeneficiary, counterpartyBeneficiary)
  })

  it('should not register ownership of an already registered asset', async () => {
    const ownership = { 
      recordCreatorObligor, 
      recordCreatorBeneficiary, 
      counterpartyObligor, 
      counterpartyBeneficiary
    }

    await shouldFail.reverting.withMessage(
      this.OwnershipRegistryInstance.registerOwnership(
        web3.utils.toHex(this.assetId),
        ownership
      ),
      ENTRY_ALREADY_EXISTS
    )
  })

  it('should register beneficiary (of payments corresponding to a CashflowId)', async () => {
    const cashflowIdA = 5
    
    await this.OwnershipRegistryInstance.setBeneficiaryForCashflowId(
      web3.utils.toHex(this.assetId), 
      cashflowIdA, 
      cashflowIdBeneficiary,
      { from: recordCreatorBeneficiary }
    )
    
    const resultA = await this.OwnershipRegistryInstance.getCashflowBeneficiary(
      web3.utils.toHex(this.assetId), 
      cashflowIdA
    )
    assert.equal(resultA, cashflowIdBeneficiary)


    const cashflowIdB = -5
    
    await this.OwnershipRegistryInstance.setBeneficiaryForCashflowId(
      web3.utils.toHex(this.assetId), 
      cashflowIdB, 
      cashflowIdBeneficiary,
      { from: counterpartyBeneficiary }
    )
    
    const resultB = await this.OwnershipRegistryInstance.getCashflowBeneficiary(web3
      .utils.toHex(this.assetId), 
      cashflowIdB
    )
    assert.equal(resultB, cashflowIdBeneficiary)


    await this.OwnershipRegistryInstance.setBeneficiaryForCashflowId(
      web3.utils.toHex(this.assetId), 
      cashflowIdA, 
      newCashflowBeneficiary,
      { from: cashflowIdBeneficiary }
    )
    
    const resultC = await this.OwnershipRegistryInstance.getCashflowBeneficiary(
      web3.utils.toHex(this.assetId), 
      cashflowIdA
    )
    assert.equal(resultC, newCashflowBeneficiary)
  })

  it('should not register beneficiary (of payments corresponding to a CashflowId) for an authorized sender', async () => {
    const cashflowIdA = 5
    
    await shouldFail.reverting.withMessage(
      this.OwnershipRegistryInstance.setBeneficiaryForCashflowId(
        web3.utils.toHex(this.assetId), 
        cashflowIdA, 
        cashflowIdBeneficiary,
        { from: recordCreatorObligor }
      ),
      UNAUTHORIZED_SENDER
    )

    await shouldFail.reverting.withMessage(
      this.OwnershipRegistryInstance.setBeneficiaryForCashflowId(
        web3.utils.toHex(this.assetId), 
        cashflowIdA, 
        cashflowIdBeneficiary,
        { from: counterpartyObligor }
      ),
      UNAUTHORIZED_SENDER
    )

    await shouldFail.reverting.withMessage(
      this.OwnershipRegistryInstance.setBeneficiaryForCashflowId(
        web3.utils.toHex(this.assetId), 
        cashflowIdA, 
        cashflowIdBeneficiary,
        { from: counterpartyBeneficiary }
      ),
      UNAUTHORIZED_SENDER
    )

    const cashflowIdB = -5

    await shouldFail.reverting.withMessage(
      this.OwnershipRegistryInstance.setBeneficiaryForCashflowId(
        web3.utils.toHex(this.assetId), 
        cashflowIdB, 
        cashflowIdBeneficiary,
        { from: counterpartyObligor }
      ),
      UNAUTHORIZED_SENDER
    )
    
    await shouldFail.reverting.withMessage(
      this.OwnershipRegistryInstance.setBeneficiaryForCashflowId(
        web3.utils.toHex(this.assetId), 
        cashflowIdB, 
        cashflowIdBeneficiary,
        { from: recordCreatorObligor }
      ),
      UNAUTHORIZED_SENDER
    )

    await shouldFail.reverting.withMessage(
      this.OwnershipRegistryInstance.setBeneficiaryForCashflowId(
        web3.utils.toHex(this.assetId), 
        cashflowIdB, 
        cashflowIdBeneficiary,
        { from: recordCreatorBeneficiary }
      ),
      UNAUTHORIZED_SENDER
    )
  })

  it('should not register beneficiary with an invalid CashflowId', async () => {
    const cashflowId = 0
    
    await shouldFail.reverting.withMessage(
      this.OwnershipRegistryInstance.setBeneficiaryForCashflowId(
        web3.utils.toHex(this.assetId), 
        cashflowId, 
        cashflowIdBeneficiary,
        { from: recordCreatorBeneficiary }
      ),
      INVALID_CASHFLOWID
    )
  })
})
