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

export class IAssetIssuer extends Contract {
  constructor(
    jsonInterface: any[],
    address?: string,
    options?: ContractOptions
  );
  clone(): IAssetIssuer;
  methods: {
    ONE_POINT_ZERO(): TransactionObject<string>;

    PRECISION(): TransactionObject<string>;

    issueFromOrder(order: {
      termsHash: string | number[];
      productId: string | number[];
      customTerms: {
        anchorDate: number | string;
        notionalPrincipal: number | string;
        nominalInterestRate: number | string;
        premiumDiscountAtIED: number | string;
        rateSpread: number | string;
        lifeCap: number | string;
        lifeFloor: number | string;
        coverageOfCreditEnhancement: number | string;
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
      expirationDate: number | string;
      ownership: {
        creatorObligor: string;
        creatorBeneficiary: string;
        counterpartyObligor: string;
        counterpartyBeneficiary: string;
      };
      engine: string;
      actor: string;
      enhancementOrder_1: {
        termsHash: string | number[];
        productId: string | number[];
        customTerms: {
          anchorDate: number | string;
          notionalPrincipal: number | string;
          nominalInterestRate: number | string;
          premiumDiscountAtIED: number | string;
          rateSpread: number | string;
          lifeCap: number | string;
          lifeFloor: number | string;
          coverageOfCreditEnhancement: number | string;
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
        ownership: {
          creatorObligor: string;
          creatorBeneficiary: string;
          counterpartyObligor: string;
          counterpartyBeneficiary: string;
        };
        engine: string;
        creatorSignature: string | number[];
        counterpartySignature: string | number[];
        salt: number | string;
      };
      enhancementOrder_2: {
        termsHash: string | number[];
        productId: string | number[];
        customTerms: {
          anchorDate: number | string;
          notionalPrincipal: number | string;
          nominalInterestRate: number | string;
          premiumDiscountAtIED: number | string;
          rateSpread: number | string;
          lifeCap: number | string;
          lifeFloor: number | string;
          coverageOfCreditEnhancement: number | string;
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
        ownership: {
          creatorObligor: string;
          creatorBeneficiary: string;
          counterpartyObligor: string;
          counterpartyBeneficiary: string;
        };
        engine: string;
        creatorSignature: string | number[];
        counterpartySignature: string | number[];
        salt: number | string;
      };
      creatorSignature: string | number[];
      counterpartySignature: string | number[];
      salt: number | string;
    }): TransactionObject<void>;
  };
  events: {
    allEvents: (
      options?: EventOptions,
      cb?: Callback<EventLog>
    ) => EventEmitter;
  };
}
