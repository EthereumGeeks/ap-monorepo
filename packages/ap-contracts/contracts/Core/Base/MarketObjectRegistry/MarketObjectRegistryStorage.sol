// "SPDX-License-Identifier: Apache-2.0"
pragma solidity ^0.6.10;
pragma experimental ABIEncoderV2;


/**
 * @title MarketObjectRegistryStorage
 * @notice Describes the storage of the MarketObjectRegistry
 */
contract MarketObjectRegistryStorage {

    struct DataPoint {
        int256 dataPoint;
        bool isSet;
    }

    struct MarketObject {
        // timestamp => DataPoint
        mapping(uint256 => DataPoint) dataPoints;
        uint256 lastUpdatedTimestamp;
        address provider;
        bool isSet;
    }

    mapping(bytes32 => MarketObject) internal marketObjects;
}