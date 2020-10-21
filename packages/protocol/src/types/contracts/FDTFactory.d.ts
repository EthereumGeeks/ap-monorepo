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

export class FDTFactory extends Contract {
  constructor(
    jsonInterface: any[],
    address?: string,
    options?: ContractOptions
  );
  clone(): FDTFactory;
  methods: {
    createERC20Distributor(
      name: string,
      symbol: string,
      initialSupply: number | string,
      token: string,
      owner: string,
      salt: number | string
    ): TransactionObject<void>;

    createRestrictedERC20Distributor(
      name: string,
      symbol: string,
      initialSupply: number | string,
      token: string,
      owner: string,
      salt: number | string
    ): TransactionObject<void>;
  };
  events: {
    DeployedDistributor: ContractEvent<{
      distributor: string;
      creator: string;
      0: string;
      1: string;
    }>;
    NewEip1167Proxy: ContractEvent<{
      proxy: string;
      logic: string;
      salt: string;
      0: string;
      1: string;
      2: string;
    }>;
    allEvents: (
      options?: EventOptions,
      cb?: Callback<EventLog>
    ) => EventEmitter;
  };
}