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

export class TestSTKSTF extends Contract {
  constructor(
    jsonInterface: any[],
    address?: string,
    options?: ContractOptions
  );
  clone(): TestSTKSTF;
  methods: {
    MAX_CYCLE_SIZE(): TransactionObject<string>;

    MAX_EVENT_SCHEDULE_SIZE(): TransactionObject<string>;

    ONE_POINT_ZERO(): TransactionObject<string>;

    PRECISION(): TransactionObject<string>;

    _STF_STK_AD(
      terms: {
        contractType: number | string;
        calendar: number | string;
        contractRole: number | string;
        dayCountConvention: number | string;
        businessDayConvention: number | string;
        endOfMonthConvention: number | string;
        redeemableByIssuer: number | string;
        currency: string;
        settlementCurrency: string;
        contractDealDate: number | string;
        statusDate: number | string;
        issueDate: number | string;
        purchaseDate: number | string;
        cycleAnchorDateOfDividend: number | string;
        nominalPrice: number | string;
        notionalPrincipal: number | string;
        issuePrice: number | string;
        quantity: number | string;
        priceAtPurchaseDate: number | string;
        redemptionPrice: number | string;
        dividendRecordPeriod: {
          i: number | string;
          p: number | string;
          isSet: boolean;
        };
        dividendPaymentPeriod: {
          i: number | string;
          p: number | string;
          isSet: boolean;
        };
        splitSettlementPeriod: {
          i: number | string;
          p: number | string;
          isSet: boolean;
        };
        redemptionRecordPeriod: {
          i: number | string;
          p: number | string;
          isSet: boolean;
        };
        redemptionPaymentPeriod: {
          i: number | string;
          p: number | string;
          isSet: boolean;
        };
        cycleOfDividend: {
          i: number | string;
          p: number | string;
          s: number | string;
          isSet: boolean;
        };
      },
      state: {
        contractPerformance: number | string;
        statusDate: number | string;
        nonPerformingDate: number | string;
        maturityDate: number | string;
        exerciseDate: number | string;
        terminationDate: number | string;
        lastCouponFixingDate: number | string;
        lastDividendFixingDate: number | string;
        notionalPrincipal: number | string;
        accruedInterest: number | string;
        feeAccrued: number | string;
        nominalInterestRate: number | string;
        interestScalingMultiplier: number | string;
        notionalScalingMultiplier: number | string;
        nextPrincipalRedemptionPayment: number | string;
        exerciseAmount: number | string;
        exerciseQuantity: number | string;
        quantity: number | string;
        couponAmountFixed: number | string;
        marginFactor: number | string;
        adjustmentFactor: number | string;
        dividendPaymentAmount: number | string;
        splitRatio: number | string;
      },
      scheduleTime: number | string,
      externalData: string | number[]
    ): TransactionObject<{
      contractPerformance: string;
      statusDate: string;
      nonPerformingDate: string;
      maturityDate: string;
      exerciseDate: string;
      terminationDate: string;
      lastCouponFixingDate: string;
      lastDividendFixingDate: string;
      notionalPrincipal: string;
      accruedInterest: string;
      feeAccrued: string;
      nominalInterestRate: string;
      interestScalingMultiplier: string;
      notionalScalingMultiplier: string;
      nextPrincipalRedemptionPayment: string;
      exerciseAmount: string;
      exerciseQuantity: string;
      quantity: string;
      couponAmountFixed: string;
      marginFactor: string;
      adjustmentFactor: string;
      dividendPaymentAmount: string;
      splitRatio: string;
    }>;

    _STF_STK_DIF(
      terms: {
        contractType: number | string;
        calendar: number | string;
        contractRole: number | string;
        dayCountConvention: number | string;
        businessDayConvention: number | string;
        endOfMonthConvention: number | string;
        redeemableByIssuer: number | string;
        currency: string;
        settlementCurrency: string;
        contractDealDate: number | string;
        statusDate: number | string;
        issueDate: number | string;
        purchaseDate: number | string;
        cycleAnchorDateOfDividend: number | string;
        nominalPrice: number | string;
        notionalPrincipal: number | string;
        issuePrice: number | string;
        quantity: number | string;
        priceAtPurchaseDate: number | string;
        redemptionPrice: number | string;
        dividendRecordPeriod: {
          i: number | string;
          p: number | string;
          isSet: boolean;
        };
        dividendPaymentPeriod: {
          i: number | string;
          p: number | string;
          isSet: boolean;
        };
        splitSettlementPeriod: {
          i: number | string;
          p: number | string;
          isSet: boolean;
        };
        redemptionRecordPeriod: {
          i: number | string;
          p: number | string;
          isSet: boolean;
        };
        redemptionPaymentPeriod: {
          i: number | string;
          p: number | string;
          isSet: boolean;
        };
        cycleOfDividend: {
          i: number | string;
          p: number | string;
          s: number | string;
          isSet: boolean;
        };
      },
      state: {
        contractPerformance: number | string;
        statusDate: number | string;
        nonPerformingDate: number | string;
        maturityDate: number | string;
        exerciseDate: number | string;
        terminationDate: number | string;
        lastCouponFixingDate: number | string;
        lastDividendFixingDate: number | string;
        notionalPrincipal: number | string;
        accruedInterest: number | string;
        feeAccrued: number | string;
        nominalInterestRate: number | string;
        interestScalingMultiplier: number | string;
        notionalScalingMultiplier: number | string;
        nextPrincipalRedemptionPayment: number | string;
        exerciseAmount: number | string;
        exerciseQuantity: number | string;
        quantity: number | string;
        couponAmountFixed: number | string;
        marginFactor: number | string;
        adjustmentFactor: number | string;
        dividendPaymentAmount: number | string;
        splitRatio: number | string;
      },
      scheduleTime: number | string,
      externalData: string | number[]
    ): TransactionObject<{
      contractPerformance: string;
      statusDate: string;
      nonPerformingDate: string;
      maturityDate: string;
      exerciseDate: string;
      terminationDate: string;
      lastCouponFixingDate: string;
      lastDividendFixingDate: string;
      notionalPrincipal: string;
      accruedInterest: string;
      feeAccrued: string;
      nominalInterestRate: string;
      interestScalingMultiplier: string;
      notionalScalingMultiplier: string;
      nextPrincipalRedemptionPayment: string;
      exerciseAmount: string;
      exerciseQuantity: string;
      quantity: string;
      couponAmountFixed: string;
      marginFactor: string;
      adjustmentFactor: string;
      dividendPaymentAmount: string;
      splitRatio: string;
    }>;

    _STF_STK_DIP(
      terms: {
        contractType: number | string;
        calendar: number | string;
        contractRole: number | string;
        dayCountConvention: number | string;
        businessDayConvention: number | string;
        endOfMonthConvention: number | string;
        redeemableByIssuer: number | string;
        currency: string;
        settlementCurrency: string;
        contractDealDate: number | string;
        statusDate: number | string;
        issueDate: number | string;
        purchaseDate: number | string;
        cycleAnchorDateOfDividend: number | string;
        nominalPrice: number | string;
        notionalPrincipal: number | string;
        issuePrice: number | string;
        quantity: number | string;
        priceAtPurchaseDate: number | string;
        redemptionPrice: number | string;
        dividendRecordPeriod: {
          i: number | string;
          p: number | string;
          isSet: boolean;
        };
        dividendPaymentPeriod: {
          i: number | string;
          p: number | string;
          isSet: boolean;
        };
        splitSettlementPeriod: {
          i: number | string;
          p: number | string;
          isSet: boolean;
        };
        redemptionRecordPeriod: {
          i: number | string;
          p: number | string;
          isSet: boolean;
        };
        redemptionPaymentPeriod: {
          i: number | string;
          p: number | string;
          isSet: boolean;
        };
        cycleOfDividend: {
          i: number | string;
          p: number | string;
          s: number | string;
          isSet: boolean;
        };
      },
      state: {
        contractPerformance: number | string;
        statusDate: number | string;
        nonPerformingDate: number | string;
        maturityDate: number | string;
        exerciseDate: number | string;
        terminationDate: number | string;
        lastCouponFixingDate: number | string;
        lastDividendFixingDate: number | string;
        notionalPrincipal: number | string;
        accruedInterest: number | string;
        feeAccrued: number | string;
        nominalInterestRate: number | string;
        interestScalingMultiplier: number | string;
        notionalScalingMultiplier: number | string;
        nextPrincipalRedemptionPayment: number | string;
        exerciseAmount: number | string;
        exerciseQuantity: number | string;
        quantity: number | string;
        couponAmountFixed: number | string;
        marginFactor: number | string;
        adjustmentFactor: number | string;
        dividendPaymentAmount: number | string;
        splitRatio: number | string;
      },
      scheduleTime: number | string,
      externalData: string | number[]
    ): TransactionObject<{
      contractPerformance: string;
      statusDate: string;
      nonPerformingDate: string;
      maturityDate: string;
      exerciseDate: string;
      terminationDate: string;
      lastCouponFixingDate: string;
      lastDividendFixingDate: string;
      notionalPrincipal: string;
      accruedInterest: string;
      feeAccrued: string;
      nominalInterestRate: string;
      interestScalingMultiplier: string;
      notionalScalingMultiplier: string;
      nextPrincipalRedemptionPayment: string;
      exerciseAmount: string;
      exerciseQuantity: string;
      quantity: string;
      couponAmountFixed: string;
      marginFactor: string;
      adjustmentFactor: string;
      dividendPaymentAmount: string;
      splitRatio: string;
    }>;

    _STF_STK_ISS(
      terms: {
        contractType: number | string;
        calendar: number | string;
        contractRole: number | string;
        dayCountConvention: number | string;
        businessDayConvention: number | string;
        endOfMonthConvention: number | string;
        redeemableByIssuer: number | string;
        currency: string;
        settlementCurrency: string;
        contractDealDate: number | string;
        statusDate: number | string;
        issueDate: number | string;
        purchaseDate: number | string;
        cycleAnchorDateOfDividend: number | string;
        nominalPrice: number | string;
        notionalPrincipal: number | string;
        issuePrice: number | string;
        quantity: number | string;
        priceAtPurchaseDate: number | string;
        redemptionPrice: number | string;
        dividendRecordPeriod: {
          i: number | string;
          p: number | string;
          isSet: boolean;
        };
        dividendPaymentPeriod: {
          i: number | string;
          p: number | string;
          isSet: boolean;
        };
        splitSettlementPeriod: {
          i: number | string;
          p: number | string;
          isSet: boolean;
        };
        redemptionRecordPeriod: {
          i: number | string;
          p: number | string;
          isSet: boolean;
        };
        redemptionPaymentPeriod: {
          i: number | string;
          p: number | string;
          isSet: boolean;
        };
        cycleOfDividend: {
          i: number | string;
          p: number | string;
          s: number | string;
          isSet: boolean;
        };
      },
      state: {
        contractPerformance: number | string;
        statusDate: number | string;
        nonPerformingDate: number | string;
        maturityDate: number | string;
        exerciseDate: number | string;
        terminationDate: number | string;
        lastCouponFixingDate: number | string;
        lastDividendFixingDate: number | string;
        notionalPrincipal: number | string;
        accruedInterest: number | string;
        feeAccrued: number | string;
        nominalInterestRate: number | string;
        interestScalingMultiplier: number | string;
        notionalScalingMultiplier: number | string;
        nextPrincipalRedemptionPayment: number | string;
        exerciseAmount: number | string;
        exerciseQuantity: number | string;
        quantity: number | string;
        couponAmountFixed: number | string;
        marginFactor: number | string;
        adjustmentFactor: number | string;
        dividendPaymentAmount: number | string;
        splitRatio: number | string;
      },
      scheduleTime: number | string,
      externalData: string | number[]
    ): TransactionObject<{
      contractPerformance: string;
      statusDate: string;
      nonPerformingDate: string;
      maturityDate: string;
      exerciseDate: string;
      terminationDate: string;
      lastCouponFixingDate: string;
      lastDividendFixingDate: string;
      notionalPrincipal: string;
      accruedInterest: string;
      feeAccrued: string;
      nominalInterestRate: string;
      interestScalingMultiplier: string;
      notionalScalingMultiplier: string;
      nextPrincipalRedemptionPayment: string;
      exerciseAmount: string;
      exerciseQuantity: string;
      quantity: string;
      couponAmountFixed: string;
      marginFactor: string;
      adjustmentFactor: string;
      dividendPaymentAmount: string;
      splitRatio: string;
    }>;

    _STF_STK_REF(
      terms: {
        contractType: number | string;
        calendar: number | string;
        contractRole: number | string;
        dayCountConvention: number | string;
        businessDayConvention: number | string;
        endOfMonthConvention: number | string;
        redeemableByIssuer: number | string;
        currency: string;
        settlementCurrency: string;
        contractDealDate: number | string;
        statusDate: number | string;
        issueDate: number | string;
        purchaseDate: number | string;
        cycleAnchorDateOfDividend: number | string;
        nominalPrice: number | string;
        notionalPrincipal: number | string;
        issuePrice: number | string;
        quantity: number | string;
        priceAtPurchaseDate: number | string;
        redemptionPrice: number | string;
        dividendRecordPeriod: {
          i: number | string;
          p: number | string;
          isSet: boolean;
        };
        dividendPaymentPeriod: {
          i: number | string;
          p: number | string;
          isSet: boolean;
        };
        splitSettlementPeriod: {
          i: number | string;
          p: number | string;
          isSet: boolean;
        };
        redemptionRecordPeriod: {
          i: number | string;
          p: number | string;
          isSet: boolean;
        };
        redemptionPaymentPeriod: {
          i: number | string;
          p: number | string;
          isSet: boolean;
        };
        cycleOfDividend: {
          i: number | string;
          p: number | string;
          s: number | string;
          isSet: boolean;
        };
      },
      state: {
        contractPerformance: number | string;
        statusDate: number | string;
        nonPerformingDate: number | string;
        maturityDate: number | string;
        exerciseDate: number | string;
        terminationDate: number | string;
        lastCouponFixingDate: number | string;
        lastDividendFixingDate: number | string;
        notionalPrincipal: number | string;
        accruedInterest: number | string;
        feeAccrued: number | string;
        nominalInterestRate: number | string;
        interestScalingMultiplier: number | string;
        notionalScalingMultiplier: number | string;
        nextPrincipalRedemptionPayment: number | string;
        exerciseAmount: number | string;
        exerciseQuantity: number | string;
        quantity: number | string;
        couponAmountFixed: number | string;
        marginFactor: number | string;
        adjustmentFactor: number | string;
        dividendPaymentAmount: number | string;
        splitRatio: number | string;
      },
      scheduleTime: number | string,
      externalData: string | number[]
    ): TransactionObject<{
      contractPerformance: string;
      statusDate: string;
      nonPerformingDate: string;
      maturityDate: string;
      exerciseDate: string;
      terminationDate: string;
      lastCouponFixingDate: string;
      lastDividendFixingDate: string;
      notionalPrincipal: string;
      accruedInterest: string;
      feeAccrued: string;
      nominalInterestRate: string;
      interestScalingMultiplier: string;
      notionalScalingMultiplier: string;
      nextPrincipalRedemptionPayment: string;
      exerciseAmount: string;
      exerciseQuantity: string;
      quantity: string;
      couponAmountFixed: string;
      marginFactor: string;
      adjustmentFactor: string;
      dividendPaymentAmount: string;
      splitRatio: string;
    }>;

    _STF_STK_REP(
      terms: {
        contractType: number | string;
        calendar: number | string;
        contractRole: number | string;
        dayCountConvention: number | string;
        businessDayConvention: number | string;
        endOfMonthConvention: number | string;
        redeemableByIssuer: number | string;
        currency: string;
        settlementCurrency: string;
        contractDealDate: number | string;
        statusDate: number | string;
        issueDate: number | string;
        purchaseDate: number | string;
        cycleAnchorDateOfDividend: number | string;
        nominalPrice: number | string;
        notionalPrincipal: number | string;
        issuePrice: number | string;
        quantity: number | string;
        priceAtPurchaseDate: number | string;
        redemptionPrice: number | string;
        dividendRecordPeriod: {
          i: number | string;
          p: number | string;
          isSet: boolean;
        };
        dividendPaymentPeriod: {
          i: number | string;
          p: number | string;
          isSet: boolean;
        };
        splitSettlementPeriod: {
          i: number | string;
          p: number | string;
          isSet: boolean;
        };
        redemptionRecordPeriod: {
          i: number | string;
          p: number | string;
          isSet: boolean;
        };
        redemptionPaymentPeriod: {
          i: number | string;
          p: number | string;
          isSet: boolean;
        };
        cycleOfDividend: {
          i: number | string;
          p: number | string;
          s: number | string;
          isSet: boolean;
        };
      },
      state: {
        contractPerformance: number | string;
        statusDate: number | string;
        nonPerformingDate: number | string;
        maturityDate: number | string;
        exerciseDate: number | string;
        terminationDate: number | string;
        lastCouponFixingDate: number | string;
        lastDividendFixingDate: number | string;
        notionalPrincipal: number | string;
        accruedInterest: number | string;
        feeAccrued: number | string;
        nominalInterestRate: number | string;
        interestScalingMultiplier: number | string;
        notionalScalingMultiplier: number | string;
        nextPrincipalRedemptionPayment: number | string;
        exerciseAmount: number | string;
        exerciseQuantity: number | string;
        quantity: number | string;
        couponAmountFixed: number | string;
        marginFactor: number | string;
        adjustmentFactor: number | string;
        dividendPaymentAmount: number | string;
        splitRatio: number | string;
      },
      scheduleTime: number | string,
      externalData: string | number[]
    ): TransactionObject<{
      contractPerformance: string;
      statusDate: string;
      nonPerformingDate: string;
      maturityDate: string;
      exerciseDate: string;
      terminationDate: string;
      lastCouponFixingDate: string;
      lastDividendFixingDate: string;
      notionalPrincipal: string;
      accruedInterest: string;
      feeAccrued: string;
      nominalInterestRate: string;
      interestScalingMultiplier: string;
      notionalScalingMultiplier: string;
      nextPrincipalRedemptionPayment: string;
      exerciseAmount: string;
      exerciseQuantity: string;
      quantity: string;
      couponAmountFixed: string;
      marginFactor: string;
      adjustmentFactor: string;
      dividendPaymentAmount: string;
      splitRatio: string;
    }>;

    _STF_STK_SPF(
      terms: {
        contractType: number | string;
        calendar: number | string;
        contractRole: number | string;
        dayCountConvention: number | string;
        businessDayConvention: number | string;
        endOfMonthConvention: number | string;
        redeemableByIssuer: number | string;
        currency: string;
        settlementCurrency: string;
        contractDealDate: number | string;
        statusDate: number | string;
        issueDate: number | string;
        purchaseDate: number | string;
        cycleAnchorDateOfDividend: number | string;
        nominalPrice: number | string;
        notionalPrincipal: number | string;
        issuePrice: number | string;
        quantity: number | string;
        priceAtPurchaseDate: number | string;
        redemptionPrice: number | string;
        dividendRecordPeriod: {
          i: number | string;
          p: number | string;
          isSet: boolean;
        };
        dividendPaymentPeriod: {
          i: number | string;
          p: number | string;
          isSet: boolean;
        };
        splitSettlementPeriod: {
          i: number | string;
          p: number | string;
          isSet: boolean;
        };
        redemptionRecordPeriod: {
          i: number | string;
          p: number | string;
          isSet: boolean;
        };
        redemptionPaymentPeriod: {
          i: number | string;
          p: number | string;
          isSet: boolean;
        };
        cycleOfDividend: {
          i: number | string;
          p: number | string;
          s: number | string;
          isSet: boolean;
        };
      },
      state: {
        contractPerformance: number | string;
        statusDate: number | string;
        nonPerformingDate: number | string;
        maturityDate: number | string;
        exerciseDate: number | string;
        terminationDate: number | string;
        lastCouponFixingDate: number | string;
        lastDividendFixingDate: number | string;
        notionalPrincipal: number | string;
        accruedInterest: number | string;
        feeAccrued: number | string;
        nominalInterestRate: number | string;
        interestScalingMultiplier: number | string;
        notionalScalingMultiplier: number | string;
        nextPrincipalRedemptionPayment: number | string;
        exerciseAmount: number | string;
        exerciseQuantity: number | string;
        quantity: number | string;
        couponAmountFixed: number | string;
        marginFactor: number | string;
        adjustmentFactor: number | string;
        dividendPaymentAmount: number | string;
        splitRatio: number | string;
      },
      scheduleTime: number | string,
      externalData: string | number[]
    ): TransactionObject<{
      contractPerformance: string;
      statusDate: string;
      nonPerformingDate: string;
      maturityDate: string;
      exerciseDate: string;
      terminationDate: string;
      lastCouponFixingDate: string;
      lastDividendFixingDate: string;
      notionalPrincipal: string;
      accruedInterest: string;
      feeAccrued: string;
      nominalInterestRate: string;
      interestScalingMultiplier: string;
      notionalScalingMultiplier: string;
      nextPrincipalRedemptionPayment: string;
      exerciseAmount: string;
      exerciseQuantity: string;
      quantity: string;
      couponAmountFixed: string;
      marginFactor: string;
      adjustmentFactor: string;
      dividendPaymentAmount: string;
      splitRatio: string;
    }>;

    _STF_STK_SPS(
      terms: {
        contractType: number | string;
        calendar: number | string;
        contractRole: number | string;
        dayCountConvention: number | string;
        businessDayConvention: number | string;
        endOfMonthConvention: number | string;
        redeemableByIssuer: number | string;
        currency: string;
        settlementCurrency: string;
        contractDealDate: number | string;
        statusDate: number | string;
        issueDate: number | string;
        purchaseDate: number | string;
        cycleAnchorDateOfDividend: number | string;
        nominalPrice: number | string;
        notionalPrincipal: number | string;
        issuePrice: number | string;
        quantity: number | string;
        priceAtPurchaseDate: number | string;
        redemptionPrice: number | string;
        dividendRecordPeriod: {
          i: number | string;
          p: number | string;
          isSet: boolean;
        };
        dividendPaymentPeriod: {
          i: number | string;
          p: number | string;
          isSet: boolean;
        };
        splitSettlementPeriod: {
          i: number | string;
          p: number | string;
          isSet: boolean;
        };
        redemptionRecordPeriod: {
          i: number | string;
          p: number | string;
          isSet: boolean;
        };
        redemptionPaymentPeriod: {
          i: number | string;
          p: number | string;
          isSet: boolean;
        };
        cycleOfDividend: {
          i: number | string;
          p: number | string;
          s: number | string;
          isSet: boolean;
        };
      },
      state: {
        contractPerformance: number | string;
        statusDate: number | string;
        nonPerformingDate: number | string;
        maturityDate: number | string;
        exerciseDate: number | string;
        terminationDate: number | string;
        lastCouponFixingDate: number | string;
        lastDividendFixingDate: number | string;
        notionalPrincipal: number | string;
        accruedInterest: number | string;
        feeAccrued: number | string;
        nominalInterestRate: number | string;
        interestScalingMultiplier: number | string;
        notionalScalingMultiplier: number | string;
        nextPrincipalRedemptionPayment: number | string;
        exerciseAmount: number | string;
        exerciseQuantity: number | string;
        quantity: number | string;
        couponAmountFixed: number | string;
        marginFactor: number | string;
        adjustmentFactor: number | string;
        dividendPaymentAmount: number | string;
        splitRatio: number | string;
      },
      scheduleTime: number | string,
      externalData: string | number[]
    ): TransactionObject<{
      contractPerformance: string;
      statusDate: string;
      nonPerformingDate: string;
      maturityDate: string;
      exerciseDate: string;
      terminationDate: string;
      lastCouponFixingDate: string;
      lastDividendFixingDate: string;
      notionalPrincipal: string;
      accruedInterest: string;
      feeAccrued: string;
      nominalInterestRate: string;
      interestScalingMultiplier: string;
      notionalScalingMultiplier: string;
      nextPrincipalRedemptionPayment: string;
      exerciseAmount: string;
      exerciseQuantity: string;
      quantity: string;
      couponAmountFixed: string;
      marginFactor: string;
      adjustmentFactor: string;
      dividendPaymentAmount: string;
      splitRatio: string;
    }>;

    adjustEndOfMonthConvention(
      eomc: number | string,
      startTime: number | string,
      cycle: {
        i: number | string;
        p: number | string;
        s: number | string;
        isSet: boolean;
      }
    ): TransactionObject<string>;

    computeEventTimeForEvent(
      _event: string | number[],
      bdc: number | string,
      calendar: number | string,
      maturityDate: number | string
    ): TransactionObject<string>;

    shiftCalcTime(
      timestamp: number | string,
      convention: number | string,
      calendar: number | string,
      maturityDate: number | string
    ): TransactionObject<string>;

    shiftEventTime(
      timestamp: number | string,
      convention: number | string,
      calendar: number | string,
      maturityDate: number | string
    ): TransactionObject<string>;
  };
  events: {
    allEvents: (
      options?: EventOptions,
      cb?: Callback<EventLog>
    ) => EventEmitter;
  };
}
