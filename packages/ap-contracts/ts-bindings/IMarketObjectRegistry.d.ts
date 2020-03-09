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

export class IMarketObjectRegistry extends Contract {
  constructor(
    jsonInterface: any[],
    address?: string,
    options?: ContractOptions
  );
  clone(): IMarketObjectRegistry;
  methods: {
    ONE_POINT_ZERO(): TransactionObject<string>;

    PRECISION(): TransactionObject<string>;

    setMarketObjectProvider(
      marketObjectId: string | number[],
      provider: string
    ): TransactionObject<void>;

    publishDataPointOfMarketObject(
      marketObjectId: string | number[],
      timestamp: number | string,
      dataPoint: number | string
    ): TransactionObject<void>;

    getDataPointOfMarketObject(
      marketObjectId: string | number[],
      timestamp: number | string
    ): TransactionObject<{
      0: string;
      1: boolean;
    }>;

    getMarketObjectLastUpdatedTimestamp(
      marketObjectId: string | number[]
    ): TransactionObject<string>;
  };
  events: {
    allEvents: (
      options?: EventOptions,
      cb?: Callback<EventLog>
    ) => EventEmitter;
  };
}