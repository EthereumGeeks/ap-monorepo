/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import BN from "bn.js";
import { Contract, ContractOptions } from "web3-eth-contract";
import { EventLog } from "web3-core";
import { EventEmitter } from "events";
import { ContractEvent, Callback, TransactionObject, BlockType } from "./types";

interface EventOptions {
  filter?: object;
  fromBlock?: BlockType;
  topics?: string[];
}

export class AssetRegistry extends Contract {
  constructor(
    jsonInterface: any[],
    address?: string,
    options?: ContractOptions
  );
  clone(): AssetRegistry;
  methods: {
    MAX_CYCLE_SIZE(): TransactionObject<string>;

    MAX_EVENT_SCHEDULE_SIZE(): TransactionObject<string>;

    ONE_POINT_ZERO(): TransactionObject<string>;

    PRECISION(): TransactionObject<string>;

    computeEventTimeForEvent(
      _event: string | number[],
      terms: {
        calendar: number | string;
        contractRole: number | string;
        dayCountConvention: number | string;
        businessDayConvention: number | string;
        endOfMonthConvention: number | string;
        scalingEffect: number | string;
        penaltyType: number | string;
        feeBasis: number | string;
        creditEventTypeCovered: number | string;
        currency: string;
        settlementCurrency: string;
        marketObjectCodeRateReset: string | number[];
        statusDate: number | string;
        maturityDate: number | string;
        notionalPrincipal: number | string;
        nominalInterestRate: number | string;
        feeAccrued: number | string;
        accruedInterest: number | string;
        rateMultiplier: number | string;
        rateSpread: number | string;
        feeRate: number | string;
        nextResetRate: number | string;
        penaltyRate: number | string;
        premiumDiscountAtIED: number | string;
        priceAtPurchaseDate: number | string;
        nextPrincipalRedemptionPayment: number | string;
        coverageOfCreditEnhancement: number | string;
        lifeCap: number | string;
        lifeFloor: number | string;
        periodCap: number | string;
        periodFloor: number | string;
        gracePeriod: { i: number | string; p: number | string; isSet: boolean };
        delinquencyPeriod: {
          i: number | string;
          p: number | string;
          isSet: boolean;
        };
        contractReference_1: {
          object: string | number[];
          _type: number | string;
          role: number | string;
        };
        contractReference_2: {
          object: string | number[];
          _type: number | string;
          role: number | string;
        };
      }
    ): TransactionObject<string>;

    decodeCollateralObject(
      object: string | number[]
    ): TransactionObject<{
      0: string;
      1: string;
    }>;

    decodeEvent(
      _event: string | number[]
    ): TransactionObject<{
      0: string;
      1: string;
    }>;

    deriveLifecycleTermsFromCustomTermsAndTemplateTerms(
      templateTerms: {
        calendar: number | string;
        contractRole: number | string;
        dayCountConvention: number | string;
        businessDayConvention: number | string;
        endOfMonthConvention: number | string;
        scalingEffect: number | string;
        penaltyType: number | string;
        feeBasis: number | string;
        creditEventTypeCovered: number | string;
        currency: string;
        settlementCurrency: string;
        marketObjectCodeRateReset: string | number[];
        statusDateOffset: number | string;
        maturityDateOffset: number | string;
        notionalPrincipal: number | string;
        nominalInterestRate: number | string;
        feeAccrued: number | string;
        accruedInterest: number | string;
        rateMultiplier: number | string;
        rateSpread: number | string;
        feeRate: number | string;
        nextResetRate: number | string;
        penaltyRate: number | string;
        premiumDiscountAtIED: number | string;
        priceAtPurchaseDate: number | string;
        nextPrincipalRedemptionPayment: number | string;
        coverageOfCreditEnhancement: number | string;
        lifeCap: number | string;
        lifeFloor: number | string;
        periodCap: number | string;
        periodFloor: number | string;
        gracePeriod: { i: number | string; p: number | string; isSet: boolean };
        delinquencyPeriod: {
          i: number | string;
          p: number | string;
          isSet: boolean;
        };
      },
      terms: {
        anchorDate: number | string;
        overwrittenAttributesMap: number | string;
        overwrittenTerms: {
          calendar: number | string;
          contractRole: number | string;
          dayCountConvention: number | string;
          businessDayConvention: number | string;
          endOfMonthConvention: number | string;
          scalingEffect: number | string;
          penaltyType: number | string;
          feeBasis: number | string;
          creditEventTypeCovered: number | string;
          currency: string;
          settlementCurrency: string;
          marketObjectCodeRateReset: string | number[];
          statusDate: number | string;
          maturityDate: number | string;
          notionalPrincipal: number | string;
          nominalInterestRate: number | string;
          feeAccrued: number | string;
          accruedInterest: number | string;
          rateMultiplier: number | string;
          rateSpread: number | string;
          feeRate: number | string;
          nextResetRate: number | string;
          penaltyRate: number | string;
          premiumDiscountAtIED: number | string;
          priceAtPurchaseDate: number | string;
          nextPrincipalRedemptionPayment: number | string;
          coverageOfCreditEnhancement: number | string;
          lifeCap: number | string;
          lifeFloor: number | string;
          periodCap: number | string;
          periodFloor: number | string;
          gracePeriod: {
            i: number | string;
            p: number | string;
            isSet: boolean;
          };
          delinquencyPeriod: {
            i: number | string;
            p: number | string;
            isSet: boolean;
          };
          contractReference_1: {
            object: string | number[];
            _type: number | string;
            role: number | string;
          };
          contractReference_2: {
            object: string | number[];
            _type: number | string;
            role: number | string;
          };
        };
      }
    ): TransactionObject<{
      calendar: string;
      contractRole: string;
      dayCountConvention: string;
      businessDayConvention: string;
      endOfMonthConvention: string;
      scalingEffect: string;
      penaltyType: string;
      feeBasis: string;
      creditEventTypeCovered: string;
      currency: string;
      settlementCurrency: string;
      marketObjectCodeRateReset: string;
      statusDate: string;
      maturityDate: string;
      notionalPrincipal: string;
      nominalInterestRate: string;
      feeAccrued: string;
      accruedInterest: string;
      rateMultiplier: string;
      rateSpread: string;
      feeRate: string;
      nextResetRate: string;
      penaltyRate: string;
      premiumDiscountAtIED: string;
      priceAtPurchaseDate: string;
      nextPrincipalRedemptionPayment: string;
      coverageOfCreditEnhancement: string;
      lifeCap: string;
      lifeFloor: string;
      periodCap: string;
      periodFloor: string;
      gracePeriod: { i: string; p: string; isSet: boolean };
      delinquencyPeriod: { i: string; p: string; isSet: boolean };
      contractReference_1: { object: string; _type: string; role: string };
      contractReference_2: { object: string; _type: string; role: string };
    }>;

    encodeCollateralAsObject(
      collateralToken: string,
      collateralAmount: number | string
    ): TransactionObject<string>;

    encodeEvent(
      eventType: number | string,
      scheduleTime: number | string
    ): TransactionObject<string>;

    getActor(assetId: string | number[]): TransactionObject<string>;

    getAnchorDate(assetId: string | number[]): TransactionObject<string>;

    getCashflowBeneficiary(
      assetId: string | number[],
      cashflowId: number | string
    ): TransactionObject<string>;

    getEngine(assetId: string | number[]): TransactionObject<string>;

    getEpochOffset(eventType: number | string): TransactionObject<string>;

    getFinalizedState(
      assetId: string | number[]
    ): TransactionObject<{
      contractPerformance: string;
      statusDate: string;
      nonPerformingDate: string;
      maturityDate: string;
      exerciseDate: string;
      terminationDate: string;
      notionalPrincipal: string;
      accruedInterest: string;
      feeAccrued: string;
      nominalInterestRate: string;
      interestScalingMultiplier: string;
      notionalScalingMultiplier: string;
      nextPrincipalRedemptionPayment: string;
      exerciseAmount: string;
    }>;

    getNextScheduleIndex(assetId: string | number[]): TransactionObject<string>;

    getNextScheduledEvent(
      assetId: string | number[]
    ): TransactionObject<string>;

    getNextUnderlyingEvent(
      assetId: string | number[]
    ): TransactionObject<string>;

    getOwnership(
      assetId: string | number[]
    ): TransactionObject<{
      creatorObligor: string;
      creatorBeneficiary: string;
      counterpartyObligor: string;
      counterpartyBeneficiary: string;
    }>;

    getPendingEvent(assetId: string | number[]): TransactionObject<string>;

    getState(
      assetId: string | number[]
    ): TransactionObject<{
      contractPerformance: string;
      statusDate: string;
      nonPerformingDate: string;
      maturityDate: string;
      exerciseDate: string;
      terminationDate: string;
      notionalPrincipal: string;
      accruedInterest: string;
      feeAccrued: string;
      nominalInterestRate: string;
      interestScalingMultiplier: string;
      notionalScalingMultiplier: string;
      nextPrincipalRedemptionPayment: string;
      exerciseAmount: string;
    }>;

    getTemplateId(assetId: string | number[]): TransactionObject<string>;

    getTerms(
      assetId: string | number[]
    ): TransactionObject<{
      calendar: string;
      contractRole: string;
      dayCountConvention: string;
      businessDayConvention: string;
      endOfMonthConvention: string;
      scalingEffect: string;
      penaltyType: string;
      feeBasis: string;
      creditEventTypeCovered: string;
      currency: string;
      settlementCurrency: string;
      marketObjectCodeRateReset: string;
      statusDate: string;
      maturityDate: string;
      notionalPrincipal: string;
      nominalInterestRate: string;
      feeAccrued: string;
      accruedInterest: string;
      rateMultiplier: string;
      rateSpread: string;
      feeRate: string;
      nextResetRate: string;
      penaltyRate: string;
      premiumDiscountAtIED: string;
      priceAtPurchaseDate: string;
      nextPrincipalRedemptionPayment: string;
      coverageOfCreditEnhancement: string;
      lifeCap: string;
      lifeFloor: string;
      periodCap: string;
      periodFloor: string;
      gracePeriod: { i: string; p: string; isSet: boolean };
      delinquencyPeriod: { i: string; p: string; isSet: boolean };
      contractReference_1: { object: string; _type: string; role: string };
      contractReference_2: { object: string; _type: string; role: string };
    }>;

    grantAccess(
      assetId: string | number[],
      methodSignature: string | number[],
      account: string
    ): TransactionObject<void>;

    hasAccess(
      assetId: string | number[],
      methodSignature: string | number[],
      account: string
    ): TransactionObject<boolean>;

    hasRootAccess(
      assetId: string | number[],
      account: string
    ): TransactionObject<boolean>;

    isEventSettled(
      assetId: string | number[],
      _event: string | number[]
    ): TransactionObject<boolean>;

    markEventAsSettled(
      assetId: string | number[],
      _event: string | number[]
    ): TransactionObject<void>;

    popNextScheduledEvent(
      assetId: string | number[]
    ): TransactionObject<string>;

    popPendingEvent(assetId: string | number[]): TransactionObject<string>;

    pushPendingEvent(
      assetId: string | number[],
      pendingEvent: string | number[]
    ): TransactionObject<void>;

    revokeAccess(
      assetId: string | number[],
      methodSignature: string | number[],
      account: string
    ): TransactionObject<void>;

    setActor(
      assetId: string | number[],
      actor: string
    ): TransactionObject<void>;

    setAnchorDate(
      assetId: string | number[],
      anchorDate: number | string
    ): TransactionObject<void>;

    setBeneficiaryForCashflowId(
      assetId: string | number[],
      cashflowId: number | string,
      beneficiary: string
    ): TransactionObject<void>;

    setCounterpartyBeneficiary(
      assetId: string | number[],
      newCounterpartyBeneficiary: string
    ): TransactionObject<void>;

    setCounterpartyObligor(
      assetId: string | number[],
      newCounterpartyObligor: string
    ): TransactionObject<void>;

    setCreatorBeneficiary(
      assetId: string | number[],
      newCreatorBeneficiary: string
    ): TransactionObject<void>;

    setCreatorObligor(
      assetId: string | number[],
      newCreatorObligor: string
    ): TransactionObject<void>;

    setCustomTerms(
      assetId: string | number[],
      terms: {
        anchorDate: number | string;
        overwrittenAttributesMap: number | string;
        overwrittenTerms: {
          calendar: number | string;
          contractRole: number | string;
          dayCountConvention: number | string;
          businessDayConvention: number | string;
          endOfMonthConvention: number | string;
          scalingEffect: number | string;
          penaltyType: number | string;
          feeBasis: number | string;
          creditEventTypeCovered: number | string;
          currency: string;
          settlementCurrency: string;
          marketObjectCodeRateReset: string | number[];
          statusDate: number | string;
          maturityDate: number | string;
          notionalPrincipal: number | string;
          nominalInterestRate: number | string;
          feeAccrued: number | string;
          accruedInterest: number | string;
          rateMultiplier: number | string;
          rateSpread: number | string;
          feeRate: number | string;
          nextResetRate: number | string;
          penaltyRate: number | string;
          premiumDiscountAtIED: number | string;
          priceAtPurchaseDate: number | string;
          nextPrincipalRedemptionPayment: number | string;
          coverageOfCreditEnhancement: number | string;
          lifeCap: number | string;
          lifeFloor: number | string;
          periodCap: number | string;
          periodFloor: number | string;
          gracePeriod: {
            i: number | string;
            p: number | string;
            isSet: boolean;
          };
          delinquencyPeriod: {
            i: number | string;
            p: number | string;
            isSet: boolean;
          };
          contractReference_1: {
            object: string | number[];
            _type: number | string;
            role: number | string;
          };
          contractReference_2: {
            object: string | number[];
            _type: number | string;
            role: number | string;
          };
        };
      }
    ): TransactionObject<void>;

    setEngine(
      assetId: string | number[],
      engine: string
    ): TransactionObject<void>;

    setFinalizedState(
      assetId: string | number[],
      state: {
        contractPerformance: number | string;
        statusDate: number | string;
        nonPerformingDate: number | string;
        maturityDate: number | string;
        exerciseDate: number | string;
        terminationDate: number | string;
        notionalPrincipal: number | string;
        accruedInterest: number | string;
        feeAccrued: number | string;
        nominalInterestRate: number | string;
        interestScalingMultiplier: number | string;
        notionalScalingMultiplier: number | string;
        nextPrincipalRedemptionPayment: number | string;
        exerciseAmount: number | string;
      }
    ): TransactionObject<void>;

    setState(
      assetId: string | number[],
      state: {
        contractPerformance: number | string;
        statusDate: number | string;
        nonPerformingDate: number | string;
        maturityDate: number | string;
        exerciseDate: number | string;
        terminationDate: number | string;
        notionalPrincipal: number | string;
        accruedInterest: number | string;
        feeAccrued: number | string;
        nominalInterestRate: number | string;
        interestScalingMultiplier: number | string;
        notionalScalingMultiplier: number | string;
        nextPrincipalRedemptionPayment: number | string;
        exerciseAmount: number | string;
      }
    ): TransactionObject<void>;

    templateRegistry(): TransactionObject<string>;

    isRegistered(assetId: string | number[]): TransactionObject<boolean>;

    registerAsset(
      assetId: string | number[],
      ownership: {
        creatorObligor: string;
        creatorBeneficiary: string;
        counterpartyObligor: string;
        counterpartyBeneficiary: string;
      },
      templateId: string | number[],
      terms: {
        anchorDate: number | string;
        overwrittenAttributesMap: number | string;
        overwrittenTerms: {
          calendar: number | string;
          contractRole: number | string;
          dayCountConvention: number | string;
          businessDayConvention: number | string;
          endOfMonthConvention: number | string;
          scalingEffect: number | string;
          penaltyType: number | string;
          feeBasis: number | string;
          creditEventTypeCovered: number | string;
          currency: string;
          settlementCurrency: string;
          marketObjectCodeRateReset: string | number[];
          statusDate: number | string;
          maturityDate: number | string;
          notionalPrincipal: number | string;
          nominalInterestRate: number | string;
          feeAccrued: number | string;
          accruedInterest: number | string;
          rateMultiplier: number | string;
          rateSpread: number | string;
          feeRate: number | string;
          nextResetRate: number | string;
          penaltyRate: number | string;
          premiumDiscountAtIED: number | string;
          priceAtPurchaseDate: number | string;
          nextPrincipalRedemptionPayment: number | string;
          coverageOfCreditEnhancement: number | string;
          lifeCap: number | string;
          lifeFloor: number | string;
          periodCap: number | string;
          periodFloor: number | string;
          gracePeriod: {
            i: number | string;
            p: number | string;
            isSet: boolean;
          };
          delinquencyPeriod: {
            i: number | string;
            p: number | string;
            isSet: boolean;
          };
          contractReference_1: {
            object: string | number[];
            _type: number | string;
            role: number | string;
          };
          contractReference_2: {
            object: string | number[];
            _type: number | string;
            role: number | string;
          };
        };
      },
      state: {
        contractPerformance: number | string;
        statusDate: number | string;
        nonPerformingDate: number | string;
        maturityDate: number | string;
        exerciseDate: number | string;
        terminationDate: number | string;
        notionalPrincipal: number | string;
        accruedInterest: number | string;
        feeAccrued: number | string;
        nominalInterestRate: number | string;
        interestScalingMultiplier: number | string;
        notionalScalingMultiplier: number | string;
        nextPrincipalRedemptionPayment: number | string;
        exerciseAmount: number | string;
      },
      engine: string,
      actor: string,
      admin: string
    ): TransactionObject<void>;
  };
  events: {
    GrantedAccess: ContractEvent<{
      assetId: string;
      account: string;
      methodSignature: string;
      0: string;
      1: string;
      2: string;
    }>;
    IncrementedScheduleIndex: ContractEvent<{
      assetId: string;
      nextScheduleIndex: string;
      0: string;
      1: string;
    }>;
    RegisteredAsset: ContractEvent<string>;
    RevokedAccess: ContractEvent<{
      assetId: string;
      account: string;
      methodSignature: string;
      0: string;
      1: string;
      2: string;
    }>;
    SetRootAccess: ContractEvent<{
      assetId: string;
      account: string;
      0: string;
      1: string;
    }>;
    UpdatedActor: ContractEvent<{
      assetId: string;
      prevActor: string;
      newActor: string;
      0: string;
      1: string;
      2: string;
    }>;
    UpdatedAnchorDate: ContractEvent<{
      assetId: string;
      prevAnchorDate: string;
      anchorDate: string;
      0: string;
      1: string;
      2: string;
    }>;
    UpdatedBeneficiary: ContractEvent<{
      assetId: string;
      prevBeneficiary: string;
      newBeneficiary: string;
      0: string;
      1: string;
      2: string;
    }>;
    UpdatedCashflowBeneficiary: ContractEvent<{
      assetId: string;
      cashflowId: string;
      prevBeneficiary: string;
      newBeneficiary: string;
      0: string;
      1: string;
      2: string;
      3: string;
    }>;
    UpdatedCustomTerms: ContractEvent<string>;
    UpdatedEngine: ContractEvent<{
      assetId: string;
      prevEngine: string;
      newEngine: string;
      0: string;
      1: string;
      2: string;
    }>;
    UpdatedFinalizedState: ContractEvent<{
      assetId: string;
      statusDate: string;
      0: string;
      1: string;
    }>;
    UpdatedObligor: ContractEvent<{
      assetId: string;
      prevObligor: string;
      newObligor: string;
      0: string;
      1: string;
      2: string;
    }>;
    UpdatedState: ContractEvent<{
      assetId: string;
      statusDate: string;
      0: string;
      1: string;
    }>;
    allEvents: (
      options?: EventOptions,
      cb?: Callback<EventLog>
    ) => EventEmitter;
  };
}
