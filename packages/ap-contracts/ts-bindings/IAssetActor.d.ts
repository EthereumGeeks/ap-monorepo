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

export class IAssetActor extends Contract {
  constructor(
    jsonInterface: any[],
    address?: string,
    options?: ContractOptions
  );
  clone(): IAssetActor;
  methods: {
    ONE_POINT_ZERO(): TransactionObject<string>;

    PRECISION(): TransactionObject<string>;

    progress(assetId: string | number[]): TransactionObject<void>;

    initialize(
      assetId: string | number[],
      ownership: {
        creatorObligor: string;
        creatorBeneficiary: string;
        counterpartyObligor: string;
        counterpartyBeneficiary: string;
      },
      templateId: string | number[],
      customTerms: {
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
            contractReferenceType: number | string;
            contractReferenceRole: number | string;
          };
          contractReference_2: {
            object: string | number[];
            contractReferenceType: number | string;
            contractReferenceRole: number | string;
          };
        };
      },
      engine: string
    ): TransactionObject<boolean>;
  };
  events: {
    allEvents: (
      options?: EventOptions,
      cb?: Callback<EventLog>
    ) => EventEmitter;
  };
}