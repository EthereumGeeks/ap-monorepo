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

export class BaseActor extends Contract {
  constructor(
    jsonInterface: any[],
    address?: string,
    options?: ContractOptions
  );
  clone(): BaseActor;
  methods: {
    assetRegistry(): TransactionObject<string>;

    dataRegistry(): TransactionObject<string>;

    decodeCollateralObject(
      object: string | number[]
    ): TransactionObject<{
      0: string;
      1: string;
    }>;

    encodeCollateralAsObject(
      collateralToken: string,
      collateralAmount: number | string
    ): TransactionObject<string>;

    owner(): TransactionObject<string>;

    progress(assetId: string | number[]): TransactionObject<void>;

    progressWith(
      assetId: string | number[],
      _event: string | number[]
    ): TransactionObject<void>;

    renounceOwnership(): TransactionObject<void>;

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

    transferOwnership(newOwner: string): TransactionObject<void>;
  };
  events: {
    InitializedAsset: ContractEvent<{
      assetId: string;
      contractType: string;
      creator: string;
      counterparty: string;
      0: string;
      1: string;
      2: string;
      3: string;
    }>;
    OwnershipTransferred: ContractEvent<{
      previousOwner: string;
      newOwner: string;
      0: string;
      1: string;
    }>;
    ProgressedAsset: ContractEvent<{
      assetId: string;
      eventType: string;
      scheduleTime: string;
      payoff: string;
      0: string;
      1: string;
      2: string;
      3: string;
    }>;
    Status: ContractEvent<{
      assetId: string;
      statusMessage: string;
      0: string;
      1: string;
    }>;
    allEvents: (
      options?: EventOptions,
      cb?: Callback<EventLog>
    ) => EventEmitter;
  };
}
