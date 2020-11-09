// "SPDX-License-Identifier: Apache-2.0"
pragma solidity ^0.7.0;
pragma experimental ABIEncoderV2;

import "../../ACTUS/Engines/CEG/ICEGEngine.sol";

import "../Base/AssetActor/BaseActor.sol";
import "./ICEGRegistry.sol";


/**
 * @title CEGActor
 * @notice TODO
 */
contract CEGActor is BaseActor {

    using SignedMath for int;


    constructor(IAssetRegistry assetRegistry, IDataRegistry dataRegistry) BaseActor(assetRegistry, dataRegistry) {}

    /**
     * @notice Derives initial state of the asset terms and stores together with
     * terms, schedule, ownership, engine, admin of the asset in the contract types specific AssetRegistry.
     * @param terms asset specific terms
     * @param schedule schedule of the asset
     * @param ownership ownership of the asset
     * @param engine address of the ACTUS engine used for the spec. ContractType
     * @param admin address of the admin of the asset (optional)
     */
    function initialize(
        CEGTerms calldata terms,
        bytes32[] calldata schedule,
        AssetOwnership calldata ownership,
        address engine,
        address admin
    )
        external
    {
        require(
            engine != address(0) && IEngine(engine).contractType() == ContractType.CEG,
            "ANNActor.initialize: CONTRACT_TYPE_OF_ENGINE_UNSUPPORTED"
        );

        // solium-disable-next-line
        bytes32 assetId = keccak256(abi.encode(terms, block.timestamp));

        // check if first contract reference in terms references an underlying asset
        if (terms.contractReference_1.role == ContractReferenceRole.COVE) {
            require(
                terms.contractReference_1.object != bytes32(0),
                "CEGACtor.initialize: INVALID_CONTRACT_REFERENCE_1_OBJECT"
            );
        }

        // todo add guarantee validation logic for contract reference 2

        // compute the initial state of the asset
        State memory initialState = ICEGEngine(engine).computeInitialState(terms);

        // register the asset in the AssetRegistry
        ICEGRegistry(address(assetRegistry)).registerAsset(
            assetId,
            terms,
            initialState,
            schedule,
            ownership,
            engine,
            address(this),
            admin
        );

        emit InitializedAsset(assetId, ContractType.CEG, ownership.creatorObligor, ownership.counterpartyObligor);
    }

    function computeStateAndPayoffForEvent(bytes32 assetId, State memory state, bytes32 _event)
        internal
        view
        override
        returns (State memory, int256)
    {
        address engine = assetRegistry.getEngine(assetId);
        CEGTerms memory terms = ICEGRegistry(address(assetRegistry)).getTerms(assetId);
        (EventType eventType, uint256 scheduleTime) = decodeEvent(_event);

        int256 payoff = ICEGEngine(engine).computePayoffForEvent(
            terms,
            state,
            _event,
            getExternalDataForPOF(
                assetId,
                eventType,
                shiftCalcTime(scheduleTime, terms.businessDayConvention, terms.calendar, terms.maturityDate)
            )
        );
        state = ICEGEngine(engine).computeStateForEvent(
            terms,
            state,
            _event,
            getExternalDataForSTF(
                assetId,
                eventType,
                shiftCalcTime(scheduleTime, terms.businessDayConvention, terms.calendar, terms.maturityDate)
            )
        );

        return (state, payoff);
    }

    /**
     * @notice Retrieves external data (such as market object data, block time, underlying asset state)
     * used for evaluating the STF for a given event.
     */
    function getExternalDataForSTF(
        bytes32 assetId,
        EventType eventType,
        uint256 /* timestamp */
    )
        internal
        view
        override
        returns (bytes32)
    {
        if (eventType == EventType.CE) {
            // get current timestamp
            // solium-disable-next-line
            return bytes32(block.timestamp);
        } else if (eventType == EventType.EXE) {
            // get the remaining notionalPrincipal from the underlying
            ContractReference memory contractReference_1 = assetRegistry.getContractReferenceValueForTermsAttribute(
                assetId,
                "contractReference_1"
            );
            if (contractReference_1.role == ContractReferenceRole.COVE) {
                bytes32 underlyingAssetId = contractReference_1.object;
                address underlyingRegistry = address(uint160(uint256(contractReference_1.object2)));
                require(
                    IAssetRegistry(underlyingRegistry).isRegistered(underlyingAssetId) == true,
                    "BaseActor.getExternalDataForSTF: ASSET_DOES_NOT_EXIST"
                );
                return bytes32(
                    IAssetRegistry(underlyingRegistry).getIntValueForStateAttribute(underlyingAssetId, "notionalPrincipal")
                );
            }
        }

        return bytes32(0);
    }
}