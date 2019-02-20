const { shouldFail } = require('openzeppelin-test-helpers');

const OwnershipRegistry = artifacts.require('OwnershipRegistry')

const ENTRY_ALREADY_EXISTS = 'ENTRY_ALREADY_EXISTS'
const UNAUTHORIZED_SENDER = 'UNAUTHORIZED_SENDER'
const INVALID_CASHFLOWID = 'INVALID_CASHFLOWID'


contract('OwnershipRegistry', (accounts) => {

  const recordCreatorObligor = accounts[0]
  const recordCreatorBeneficiary = accounts[1]
  const counterpartyObligor = accounts[2]
  const counterpartyBeneficiary = accounts[3]
  
  const cashflowIdBeneficiary = accounts[4]

  before(async () => {
    this.OwnershipRegistryInstance = await OwnershipRegistry.new()
    this.contractId = 'C123'
  })

  it('should register ownership of an asset', async () => {
    await this.OwnershipRegistryInstance.registerOwnership(
      web3.utils.toHex(this.contractId), 
      recordCreatorObligor, 
      recordCreatorBeneficiary, 
      counterpartyObligor, 
      counterpartyBeneficiary
    )

    const result = await this.OwnershipRegistryInstance.getContractOwnership(web3.utils.toHex(this.contractId))
    
    assert.equal(result[0], recordCreatorObligor)
    assert.equal(result[1], recordCreatorBeneficiary)
    assert.equal(result[2], counterpartyObligor)
    assert.equal(result[3], counterpartyBeneficiary)
  })

  it('should not register ownership of an already registered asset', async () => {
    await shouldFail.reverting.withMessage(
      this.OwnershipRegistryInstance.registerOwnership(
        web3.utils.toHex(this.contractId), 
        recordCreatorObligor, 
        recordCreatorBeneficiary, 
        counterpartyObligor, 
        counterpartyBeneficiary
      ),
      ENTRY_ALREADY_EXISTS
    )
  })

  it('should register beneficiary (of payments corresponding to a CashflowId)', async () => {
    const cashflowIdA = 5
    
    await this.OwnershipRegistryInstance.setBeneficiaryForCashflowId(
      web3.utils.toHex(this.contractId), 
      cashflowIdA, 
      cashflowIdBeneficiary,
      { from: recordCreatorBeneficiary }
    )
    
    const resultA = await this.OwnershipRegistryInstance.getCashflowBeneficiary(web3.utils.toHex(this.contractId), cashflowIdA)
    assert.equal(resultA, cashflowIdBeneficiary)


    const cashflowIdB = -5
    
    await this.OwnershipRegistryInstance.setBeneficiaryForCashflowId(
      web3.utils.toHex(this.contractId), 
      cashflowIdB, 
      cashflowIdBeneficiary,
      { from: counterpartyBeneficiary }
    )
    
    const resultB = await this.OwnershipRegistryInstance.getCashflowBeneficiary(web3.utils.toHex(this.contractId), cashflowIdB)
    assert.equal(resultB, cashflowIdBeneficiary)
  })

  it('should not register beneficiary (of payments corresponding to a CashflowId) for an authorized sender', async () => {
    const cashflowIdA = 5
    
    await shouldFail.reverting.withMessage(
      this.OwnershipRegistryInstance.setBeneficiaryForCashflowId(
        web3.utils.toHex(this.contractId), 
        cashflowIdA, 
        cashflowIdBeneficiary,
        { from: recordCreatorObligor }
      ),
      UNAUTHORIZED_SENDER
    )

    await shouldFail.reverting.withMessage(
      this.OwnershipRegistryInstance.setBeneficiaryForCashflowId(
        web3.utils.toHex(this.contractId), 
        cashflowIdA, 
        cashflowIdBeneficiary,
        { from: counterpartyObligor }
      ),
      UNAUTHORIZED_SENDER
    )

    await shouldFail.reverting.withMessage(
      this.OwnershipRegistryInstance.setBeneficiaryForCashflowId(
        web3.utils.toHex(this.contractId), 
        cashflowIdA, 
        cashflowIdBeneficiary,
        { from: counterpartyBeneficiary }
      ),
      UNAUTHORIZED_SENDER
    )

    const cashflowIdB = -5

    await shouldFail.reverting.withMessage(
      this.OwnershipRegistryInstance.setBeneficiaryForCashflowId(
        web3.utils.toHex(this.contractId), 
        cashflowIdB, 
        cashflowIdBeneficiary,
        { from: counterpartyObligor }
      ),
      UNAUTHORIZED_SENDER
    )
    
    await shouldFail.reverting.withMessage(
      this.OwnershipRegistryInstance.setBeneficiaryForCashflowId(
        web3.utils.toHex(this.contractId), 
        cashflowIdB, 
        cashflowIdBeneficiary,
        { from: recordCreatorObligor }
      ),
      UNAUTHORIZED_SENDER
    )

    await shouldFail.reverting.withMessage(
      this.OwnershipRegistryInstance.setBeneficiaryForCashflowId(
        web3.utils.toHex(this.contractId), 
        cashflowIdB, 
        cashflowIdBeneficiary,
        { from: recordCreatorBeneficiary }
      ),
      UNAUTHORIZED_SENDER
    )
  })

  it('should not overwrite beneficiary (of payments corresponding to a CashflowId)', async () => {
    const cashflowId = 5
    
    await shouldFail.reverting.withMessage(
      this.OwnershipRegistryInstance.setBeneficiaryForCashflowId(
        web3.utils.toHex(this.contractId), 
        cashflowId, 
        cashflowIdBeneficiary,
        { from: recordCreatorBeneficiary }
      ),
      ENTRY_ALREADY_EXISTS
    )
  })

  it('should not register beneficiary (of payments corresponding to a CashflowId) with an invalid CashflowId', async () => {
    const cashflowId = 0
    
    await shouldFail.reverting.withMessage(
      this.OwnershipRegistryInstance.setBeneficiaryForCashflowId(
        web3.utils.toHex(this.contractId), 
        cashflowId, 
        cashflowIdBeneficiary,
        { from: recordCreatorBeneficiary }
      ),
      INVALID_CASHFLOWID
    )
  })
})
