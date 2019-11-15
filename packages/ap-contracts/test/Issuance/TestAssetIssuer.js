const ethUtil = require('ethereumjs-util');
const abi = require('ethereumjs-abi');

const { expectEvent } = require('openzeppelin-test-helpers');
const { parseTermsToLifecycleTerms, parseTermsToGeneratingTerms } = require('actus-solidity/test/helper/parser');

const AssetIssuer = artifacts.require('AssetIssuer.sol');

const { setupTestEnvironment, getDefaultTerms } = require('../helper/setupTestEnvironment');

contract('AssetIssuer', (accounts) => {
  const recordCreator = accounts[0];
  const counterparty = accounts[1];

  before(async () => {
    const instances = await setupTestEnvironment();
    Object.keys(instances).forEach((instance) => this[instance] = instances[instance]);

    this.terms = await getDefaultTerms();
    this.lifecycleTerms = parseTermsToLifecycleTerms(this.terms);
    this.generatingTerms = parseTermsToGeneratingTerms(this.terms);
    this.state = await this.PAMEngineInstance.computeInitialState(this.terms);
    this.protoEventSchedules = {
      nonCyclicProtoEventSchedule: await this.PAMEngineInstance.computeNonCyclicProtoEventScheduleSegment(this.generatingTerms, this.generatingTerms.contractDealDate, this.generatingTerms.maturityDate),
      cyclicIPProtoEventSchedule: await this.PAMEngineInstance.computeCyclicProtoEventScheduleSegment(this.generatingTerms, this.generatingTerms.contractDealDate, this.generatingTerms.maturityDate, 8),
      cyclicPRProtoEventSchedule: await this.PAMEngineInstance.computeCyclicProtoEventScheduleSegment(this.generatingTerms, this.generatingTerms.contractDealDate, this.generatingTerms.maturityDate, 15),
      cyclicSCProtoEventSchedule: await this.PAMEngineInstance.computeCyclicProtoEventScheduleSegment(this.generatingTerms, this.generatingTerms.contractDealDate, this.generatingTerms.maturityDate, 19),
      cyclicRRProtoEventSchedule: await this.PAMEngineInstance.computeCyclicProtoEventScheduleSegment(this.generatingTerms, this.generatingTerms.contractDealDate, this.generatingTerms.maturityDate, 18),
      cyclicFPProtoEventSchedule: await this.PAMEngineInstance.computeCyclicProtoEventScheduleSegment(this.generatingTerms, this.generatingTerms.contractDealDate, this.generatingTerms.maturityDate, 4),
      cyclicPYProtoEventSchedule: await this.PAMEngineInstance.computeCyclicProtoEventScheduleSegment(this.generatingTerms, this.generatingTerms.contractDealDate, this.generatingTerms.maturityDate, 11),
    };
  });

  it('should issue an asset from an order (without enhancement orders)', async () => {
    const orderData = { 
      termsHash: '0x0000000000000000000000000000000000000000000000000000000000000000',
      terms: this.lifecycleTerms,
      protoEventSchedules: this.protoEventSchedules,
      expirationDate: '11100000000',
      maker: recordCreator,
      taker: counterparty,
      engine: this.PAMEngineInstance.address,
      actor: this.AssetActorInstance.address,
      issuer: this.AssetIssuerInstance.address,
      enhancementOrder_1: {
        termsHash: '0x0000000000000000000000000000000000000000000000000000000000000000',
        terms: this.lifecycleTerms,
        protoEventSchedules: this.protoEventSchedules,
        maker: '0x0000000000000000000000000000000000000000',
        taker: '0x0000000000000000000000000000000000000000',
        makerSignature: '0x0',
        takerSignature: '0x0',
        salt: 0
      },
      enhancementOrder_2: {
        termsHash: '0x0000000000000000000000000000000000000000000000000000000000000000',
        terms: this.lifecycleTerms,
        protoEventSchedules: this.protoEventSchedules,
        maker: '0x0000000000000000000000000000000000000000',
        taker: '0x0000000000000000000000000000000000000000',
        makerSignature: '0x0',
        takerSignature: '0x0',
        salt: 0
      },
      makerSignature: null,
      takerSignature: null,
      salt: Math.floor(Math.random() * 1000000) 
    };
    
    // sign order
    const unfilledOrderAsTypedData = getUnfilledOrderDataAsTypedData(orderData, this.AssetIssuerInstance.address);
    const filledOrderAsTypedData = getFilledOrderDataAsTypedData(orderData, this.AssetIssuerInstance.address);
    orderData.makerSignature = await sign(unfilledOrderAsTypedData, recordCreator);
    orderData.takerSignature = await sign(filledOrderAsTypedData, counterparty);

    // sign enhancement order 1
    // const unfilledEnhancementOrderAsTypedData_1 = getUnfilledEnhancementOrderDataAsTypedData(orderData.enhancements[0], this.AssetIssuerInstance.address);
    // const filledEnhancementOrderAsTypedData_1 = getFilledEnhancementOrderDataAsTypedData(orderData.enhancements[0], this.AssetIssuerInstance.address);
    // orderData.enhancements[0].makerSignature = await sign(unfilledEnhancementOrderAsTypedData_1, recordCreator);
    // orderData.enhancements[0].takerSignature = await sign(filledEnhancementOrderAsTypedData_1, counterparty);

    // sign enhancement order 2
    // const unfilledEnhancementOrderAsTypedData_2 = getUnfilledEnhancementOrderDataAsTypedData(orderData.enhancements[1], this.AssetIssuerInstance.address);
    // const filledEnhancementOrderAsTypedData_2 = getFilledEnhancementOrderDataAsTypedData(orderData.enhancements[1], this.AssetIssuerInstance.address);
    // orderData.enhancements[1].makerSignature = await sign(unfilledEnhancementOrderAsTypedData_2, recordCreator);
    // orderData.enhancements[1].takerSignature = await sign(filledEnhancementOrderAsTypedData_2, counterparty);


    const { tx: txHash } = await this.AssetIssuerInstance.issueFromOrder(orderData);

  //   const assetId = getAssetIdFromOrderData(orderData);

  //   const storedTerms = await this.AssetRegistryInstance.getTerms(assetId);
  //   const storedOwnership = await this.AssetRegistryInstance.getOwnership(assetId);
  //   const storedEngineAddress = await this.AssetRegistryInstance.getEngineAddress(assetId);
    
  //   const storedNonCyclicProtoEventSchedule = [];
  //   for (let i = 0; i < 64; i++) {
  //     const protoEvent = await this.AssetRegistryInstance.getNonCyclicProtoEventAtIndex(
  //       web3.utils.toHex(assetId),
  //       i
  //     );

  //     storedNonCyclicProtoEventSchedule.push(protoEvent);
  //   }

  //   const storedCyclicIPProtoEventSchedule = [];
  //   for (let i = 0; i < 64; i++) {
  //     const protoEvent = await this.AssetRegistryInstance.getCyclicProtoEventAtIndex(
  //       web3.utils.toHex(assetId),
  //       8,
  //       i
  //     );
      
  //     storedCyclicIPProtoEventSchedule.push(protoEvent);
  //   }

  //   const storedCyclicPRProtoEventSchedule = [];
  //   for (let i = 0; i < 64; i++) {
  //     const protoEvent = await this.AssetRegistryInstance.getCyclicProtoEventAtIndex(
  //       web3.utils.toHex(assetId),
  //       15,
  //       i
  //     );
      
  //     storedCyclicPRProtoEventSchedule.push(protoEvent);
  //   }

  //   const storedCyclicSCProtoEventSchedule = [];
  //   for (let i = 0; i < 64; i++) {
  //     const protoEvent = await this.AssetRegistryInstance.getCyclicProtoEventAtIndex(
  //       web3.utils.toHex(assetId),
  //       19,
  //       i
  //     );
      
  //     storedCyclicSCProtoEventSchedule.push(protoEvent);
  //   }

  //   const storedCyclicRRProtoEventSchedule = [];
  //   for (let i = 0; i < 64; i++) {
  //     const protoEvent = await this.AssetRegistryInstance.getCyclicProtoEventAtIndex(
  //       web3.utils.toHex(assetId),
  //       18,
  //       i
  //     );
      
  //     storedCyclicRRProtoEventSchedule.push(protoEvent);
  //   }

  //   const storedCyclicFPProtoEventSchedule = [];
  //   for (let i = 0; i < 64; i++) {
  //     const protoEvent = await this.AssetRegistryInstance.getCyclicProtoEventAtIndex(
  //       web3.utils.toHex(assetId),
  //       4,
  //       i
  //     );
      
  //     storedCyclicFPProtoEventSchedule.push(protoEvent);
  //   }

  //   const storedCyclicPYProtoEventSchedule = [];
  //   for (let i = 0; i < 64; i++) {
  //     const protoEvent = await this.AssetRegistryInstance.getCyclicProtoEventAtIndex(
  //       web3.utils.toHex(assetId),
  //       11,
  //       i
  //     );
      
  //     storedCyclicPYProtoEventSchedule.push(protoEvent);
  //   }

  //   assert.equal(storedTerms['initialExchangeDate'], orderData.terms['initialExchangeDate']);
  //   assert.equal(storedEngineAddress, orderData.engineAddress);
  //   assert.equal(storedOwnership.recordCreatorObligor, recordCreator);
  //   assert.equal(storedOwnership.recordCreatorBeneficiary, recordCreator);
  //   assert.equal(storedOwnership.counterpartyObligor, counterparty);
  //   assert.equal(storedOwnership.counterpartyBeneficiary, counterparty);

  //   assert.deepEqual(storedNonCyclicProtoEventSchedule, this.protoEventSchedules.nonCyclicProtoEventSchedule);
  //   assert.deepEqual(storedCyclicIPProtoEventSchedule, this.protoEventSchedules.cyclicIPProtoEventSchedule);
  //   assert.deepEqual(storedCyclicPRProtoEventSchedule, this.protoEventSchedules.cyclicPRProtoEventSchedule);
  //   assert.deepEqual(storedCyclicSCProtoEventSchedule, this.protoEventSchedules.cyclicSCProtoEventSchedule);
  //   assert.deepEqual(storedCyclicRRProtoEventSchedule, this.protoEventSchedules.cyclicRRProtoEventSchedule);
  //   assert.deepEqual(storedCyclicFPProtoEventSchedule, this.protoEventSchedules.cyclicFPProtoEventSchedule);
  //   assert.deepEqual(storedCyclicPYProtoEventSchedule, this.protoEventSchedules.cyclicPYProtoEventSchedule);

  //   await expectEvent.inTransaction(txHash, AssetIssuer, 'AssetIssued', {
  //     assetId: assetId,
  //     recordCreator: recordCreator,
  //     counterparty: counterparty
  //   });
  });
});

const sign = (typedData, account) => {
  return new Promise((resolve, reject) => {
    web3.currentProvider.send({
      method: 'eth_signTypedData',
      params: [account, typedData],
      from: account,
      id: new Date().getSeconds()
    }, (error, result) => {
      if (error) { return reject(error) }
      resolve(result.result)
    });
  });
};

const getAssetIdFromOrderData = (orderData) => {
  return web3.utils.keccak256(
    web3.eth.abi.encodeParameters(
      ['bytes', 'bytes'],
      [orderData.signatures.makerSignature, orderData.signatures.takerSignature]
    )
  );
};

const getUnfilledOrderDataAsTypedData = (orderData, verifyingContractAddress) => {
  const lifecycleTermsHash = getTermsHash(orderData.terms);
  const protoEventSchedulesHash = getProtoEventSchedulesHash(orderData.protoEventSchedules);
  const enhancementOrderHash_1 = getDraftEnhancementOrderHash(orderData.enhancementOrder_1);
  const enhancementOrderHash_2 = getDraftEnhancementOrderHash(orderData.enhancementOrder_2);

  const typedData = {
    domain: {
      name: 'ACTUS Protocol',
      version: '1',
      chainId: 0,
      verifyingContract: verifyingContractAddress
    },
    types: {
      EIP712Domain: [
        { name: 'name', type: 'string' },
        { name: 'version', type: 'string' },
        { name: 'chainId', type: 'uint256' },
        { name: 'verifyingContract', type: 'address' }
      ],
      Order: [
        { name: 'termsHash', type: 'bytes32' },
        { name: 'lifecycleTermsHash', type: 'bytes32' },
        { name: 'protoEventSchedulesHash', type: 'bytes32' },
        { name: 'expirationDate', type: 'uint256' },
        { name: 'maker', type: 'address' },
        { name: 'engine', type: 'address' },
        { name: 'actor', type: 'address' },
        { name: 'issuer', type: 'address' },
        { name: 'enhancementOrderHash_1', type: 'bytes32' },
        { name: 'enhancementOrderHash_2', type: 'bytes32' },
        { name: 'salt', type: 'uint256' }
      ]
    },
    primaryType: 'Order',
    message: {
      termsHash: orderData.termsHash,
      lifecycleTermsHash: lifecycleTermsHash,
      protoEventSchedulesHash: protoEventSchedulesHash,
      expirationDate: orderData.expirationDate,
      maker: orderData.maker,
      engine: orderData.engine,
      actor: orderData.actor,
      issuer: orderData.issuer,
      enhancementOrderHash_1: enhancementOrderHash_1,
      enhancementOrderHash_2: enhancementOrderHash_2,
      salt: orderData.salt
    }
  };

  return typedData;
};

const getFilledOrderDataAsTypedData = (orderData, verifyingContractAddress) => {
  const verifyingContract = verifyingContractAddress;
  const termsHash = getTermsHash(orderData.terms);
  const protoEventSchedulesHash = getProtoEventSchedulesHash(orderData.protoEventSchedules);
  const enhancementOrderHash_1 = getDraftEnhancementOrderHash(orderData.enhancementOrder_1);
  const enhancementOrderHash_2 = getDraftEnhancementOrderHash(orderData.enhancementOrder_2);

  const typedData = {
    domain: {
      name: 'ACTUS Protocol',
      version: '1',
      chainId: 0,
      verifyingContract: verifyingContract
    },
    types: {
      EIP712Domain: [
        { name: 'name', type: 'string' },
        { name: 'version', type: 'string' },
        { name: 'chainId', type: 'uint256' },
        { name: 'verifyingContract', type: 'address' }
      ],
      Order: [
        { name: 'termsHash', type: 'bytes32' },
        { name: 'lifecycleTermsHash', type: 'bytes32' },
        { name: 'protoEventSchedulesHash', type: 'bytes32' },
        { name: 'expirationDate', type: 'uint256' },
        { name: 'maker', type: 'address' },
        { name: 'taker', type: 'address' },
        { name: 'engine', type: 'address' },
        { name: 'actor', type: 'address' },
        { name: 'issuer', type: 'address' },
        { name: 'enhancementOrderHash_1', type: 'bytes32' },
        { name: 'enhancementOrderHash_2', type: 'bytes32' },
        { name: 'salt', type: 'uint256' }
      ]
    },
    primaryType: 'Order',
    message: {
      termsHash,
      lifecycleTermsHash: termsHash,
      protoEventSchedulesHash,
      expirationDate: orderData.expirationDate,
      maker: orderData.maker,
      taker: orderData.taker,
      engine: orderData.engine,
      actor: orderData.actor,
      issuer: orderData.issuer,
      enhancementOrderHash_1: enhancementOrderHash_1,
      enhancementOrderHash_2: enhancementOrderHash_2,
      salt: orderData.salt
    }
  };

  return typedData;
};

const getUnfilledEnhancementOrderDataAsTypedData = (enhancementOrderData, verifyingContractAddress) => {
  const verifyingContract = verifyingContractAddress;
  const termsHash = getTermsHash(enhancementOrderData.terms);
  const protoEventSchedulesHash = getProtoEventSchedulesHash(enhancementOrderData.protoEventSchedules);

  const typedData = {
    domain: {
      name: 'ACTUS Protocol',
      version: '1',
      chainId: 0,
      verifyingContract: verifyingContract
    },
    types: {
      EIP712Domain: [
        { name: 'name', type: 'string' },
        { name: 'version', type: 'string' },
        { name: 'chainId', type: 'uint256' },
        { name: 'verifyingContract', type: 'address' }
      ],
      Order: [
        { name: 'termsHash', type: 'bytes32' },
        { name: 'lifecycleTermsHash', type: 'bytes32' },
        { name: 'protoEventSchedulesHash', type: 'bytes32' },
        { name: 'salt', type: 'uint256' }
      ]
    },
    primaryType: 'EnhancementOrder',
    message: {
      termsHash,
      lifecycleTermsHash: termsHash,
      protoEventSchedulesHash: protoEventSchedulesHash,
      salt: enhancementOrderData.salt
    }
  };

  return typedData;
}

const getFilledEnhancementOrderDataAsTypedData = (enhancementOrderData, verifyingContractAddress) => {
  const verifyingContract = verifyingContractAddress;
  const termsHash = getTermsHash(enhancementOrderData.terms);
  const protoEventSchedulesHash = getProtoEventSchedulesHash(enhancementOrderData.protoEventSchedules);

  const typedData = {
    domain: {
      name: 'ACTUS Protocol',
      version: '1',
      chainId: 0,
      verifyingContract: verifyingContract
    },
    types: {
      EIP712Domain: [
        { name: 'name', type: 'string' },
        { name: 'version', type: 'string' },
        { name: 'chainId', type: 'uint256' },
        { name: 'verifyingContract', type: 'address' }
      ],
      Order: [
        { name: 'termsHash', type: 'bytes32' },
        { name: 'lifecycleTermsHash', type: 'bytes32' },
        { name: 'protoEventSchedulesHash', type: 'bytes32' },
        { name: 'maker', type: 'address' },
        { name: 'taker', type: 'address' },
        { name: 'salt', type: 'uint256' }
      ]
    },
    primaryType: 'EnhancementOrder',
    message: {
      termsHash: termsHash,
      lifecycleTermsHash: termsHash,
      protoEventSchedulesHash: protoEventSchedulesHash,
      maker: enhancementOrderData.maker,
      taker: enhancementOrderData.taker,
      salt: enhancementOrderData.salt
    }
  };

  return typedData;
};

const getDraftEnhancementOrderHash = (enhancementOrder) => {
  const DRAFT_ENHANCEMENT_ORDER_TYPEHASH = web3.utils.keccak256(
    "EnhancementOrder(bytes32 termsHash,bytes32 lifecycleTermsHash,bytes32 protoEventSchedulesHash,uint256 salt)"
  );
  const lifecycleTermsHash = getTermsHash(enhancementOrder.terms);
  const protoEventSchedulesHash = getProtoEventSchedulesHash(enhancementOrder.protoEventSchedules);

  return web3.utils.keccak256(web3.eth.abi.encodeParameters(
    [
      'bytes32', 'bytes32', 'bytes32', 'bytes32', 'uint256'
    ],
    [
      DRAFT_ENHANCEMENT_ORDER_TYPEHASH,
      enhancementOrder.termsHash,
      lifecycleTermsHash,
      protoEventSchedulesHash,
      enhancementOrder.salt
    ]
  ));
};

const getTermsHash = (terms) => {
  return web3.utils.keccak256(web3.eth.abi.encodeParameter(
    LifecycleTermsABI, _toTuple(terms)
  ));
};

const getProtoEventSchedulesHash = (protoEventSchedules) => {
  return web3.utils.keccak256(web3.eth.abi.encodeParameters(
    [
      'bytes32[64]', 'bytes32[64]', 'bytes32[64]', 'bytes32[64]', 'bytes32[64]', 'bytes32[64]', 'bytes32[64]'
    ], 
    [
      protoEventSchedules.nonCyclicProtoEventSchedule,
      protoEventSchedules.cyclicIPProtoEventSchedule,
      protoEventSchedules.cyclicPRProtoEventSchedule,
      protoEventSchedules.cyclicRRProtoEventSchedule,
      protoEventSchedules.cyclicPYProtoEventSchedule,
      protoEventSchedules.cyclicSCProtoEventSchedule,
      protoEventSchedules.cyclicFPProtoEventSchedule
    ]
  ));
};

const _toTuple = (obj) => {
  if (!(obj instanceof Object)) { return []; }
  var output = [];
  var i = 0;
  Object.keys(obj).forEach((k) => {
    if (obj[k] instanceof Object) {
      output[i] = _toTuple(obj[k]);
    } else if (obj[k] instanceof Array) {
      let j1 = 0;
      let temp1 = [];
      obj[k].forEach((ak) => {
        temp1[j1] = _toTuple(obj[k]);
        j1++;
      });
      output[i] = temp1;
    } else {
      output[i] = obj[k];
    }
    i++;
  });
  return output;
};

const LifecycleTermsABI = {
  "components": [
    {
      "name": "calendar",
      "type": "uint8"
    },
    {
      "name": "contractRole",
      "type": "uint8"
    },
    {
      "name": "dayCountConvention",
      "type": "uint8"
    },
    {
      "name": "businessDayConvention",
      "type": "uint8"
    },
    {
      "name": "endOfMonthConvention",
      "type": "uint8"
    },
    {
      "name": "currency",
      "type": "address"
    },
    {
      "name": "scalingEffect",
      "type": "uint8"
    },
    {
      "name": "penaltyType",
      "type": "uint8"
    },
    {
      "name": "feeBasis",
      "type": "uint8"
    },
    {
      "name": "creditEventTypeCovered",
      "type": "uint8"
    },
    {
      "components": [
        {
          "name": "object",
          "type": "bytes32"
        },
        {
          "name": "contractReferenceType",
          "type": "uint8"
        },
        {
          "name": "contractReferenceRole",
          "type": "uint8"
        }
      ],
      "name": "contractStructure",
      "type": "tuple"
    },
    {
      "name": "statusDate",
      "type": "uint256"
    },
    {
      "name": "initialExchangeDate",
      "type": "uint256"
    },
    {
      "name": "maturityDate",
      "type": "uint256"
    },
    {
      "name": "terminationDate",
      "type": "uint256"
    },
    {
      "name": "purchaseDate",
      "type": "uint256"
    },
    {
      "name": "cycleAnchorDateOfInterestPayment",
      "type": "uint256"
    },
    {
      "name": "notionalPrincipal",
      "type": "int256"
    },
    {
      "name": "nominalInterestRate",
      "type": "int256"
    },
    {
      "name": "feeAccrued",
      "type": "int256"
    },
    {
      "name": "accruedInterest",
      "type": "int256"
    },
    {
      "name": "rateSpread",
      "type": "int256"
    },
    {
      "name": "feeRate",
      "type": "int256"
    },
    {
      "name": "nextResetRate",
      "type": "int256"
    },
    {
      "name": "penaltyRate",
      "type": "int256"
    },
    {
      "name": "premiumDiscountAtIED",
      "type": "int256"
    },
    {
      "name": "priceAtPurchaseDate",
      "type": "int256"
    },
    {
      "name": "nextPrincipalRedemptionPayment",
      "type": "int256"
    },
    {
      "name": "coverageOfCreditEnhancement",
      "type": "int256"
    },
    {
      "components": [
        {
          "name": "i",
          "type": "uint256"
        },
        {
          "name": "p",
          "type": "uint8"
        },
        {
          "name": "isSet",
          "type": "bool"
        }
      ],
      "name": "gracePeriod",
      "type": "tuple"
    },
    {
      "components": [
        {
          "name": "i",
          "type": "uint256"
        },
        {
          "name": "p",
          "type": "uint8"
        },
        {
          "name": "isSet",
          "type": "bool"
        }
      ],
      "name": "delinquencyPeriod",
      "type": "tuple"
    },
    {
      "name": "lifeCap",
      "type": "int256"
    },
    {
      "name": "lifeFloor",
      "type": "int256"
    },
    {
      "name": "periodCap",
      "type": "int256"
    },
    {
      "name": "periodFloor",
      "type": "int256"
    }
  ],
  "name": "terms",
  "type": "tuple"
};
