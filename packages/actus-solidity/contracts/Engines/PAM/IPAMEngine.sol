pragma solidity ^0.6.4;
pragma experimental ABIEncoderV2;

import "../../Core/ACTUSTypes.sol";


/**
 * @title IEngine
 * @notice Interface which all Engines have to implement
 */
abstract contract IPAMEngine {

    /**
     * @notice Initialize contract state space based on the contract terms.
     * @param terms terms of the contract
     * @return initial state of the contract
     */
    function computeInitialState(PAMTerms calldata terms)
        external
        pure
        virtual
        returns (State memory);

    /**
     * Applys an event to the current state of a contract and returns the resulting contract state.
     * @param terms terms of the contract
     * @param state current state of the contract
     * @param _event event to be applied to the contract state
     * @param externalData external data needed for STF evaluation (e.g. rate for RR events)
     * @return the resulting contract state
     */
    function computeStateForEvent(
        PAMTerms calldata terms,
        State calldata state,
        bytes32 _event,
        bytes32 externalData
    )
        external
        pure
        virtual
        returns (State memory);

    /**
     * Evaluates the payoff for an event under the current state of the contract.
     * @param terms terms of the contract
     * @param state current state of the contract
     * @param _event event for which the payoff should be evaluated
     * @param externalData external data needed for POF evaluation (e.g. fxRate)
     * @return the payoff of the event
     */
    function computePayoffForEvent(
        PAMTerms calldata terms,
        State calldata state,
        bytes32 _event,
        bytes32 externalData
    )
        external
        pure
        virtual
        returns (int256);

    /**
     * @notice Computes a schedule segment of non-cyclic contract events based on the contract terms
     * and the specified timestamps.
     * @param terms terms of the contract
     * @param segmentStart start timestamp of the segment
     * @param segmentEnd end timestamp of the segement
     * @return segment of the non-cyclic schedule
     */
    function computeNonCyclicScheduleSegment(
        PAMTerms calldata terms,
        uint256 segmentStart,
        uint256 segmentEnd
    )
        external
        pure
        virtual
        returns (bytes32[] memory);

    /**
     * @notice Computes a schedule segment of cyclic contract events based on the contract terms
     * and the specified timestamps.
     * @param terms terms of the contract
     * @param segmentStart start timestamp of the segment
     * @param segmentEnd end timestamp of the segement
     * @param eventType eventType of the cyclic schedule
     * @return event schedule segment
     */
    function computeCyclicScheduleSegment(
        PAMTerms calldata terms,
        uint256 segmentStart,
        uint256 segmentEnd,
        EventType eventType
    )
        external
        pure
        virtual
        returns (bytes32[] memory);

    /**
     * @notice Verifies that the provided event is still scheduled under the terms, the current state of the
     * contract and the current state of the underlying.
     * @param _event event for which to check if its still scheduled
     * @param terms terms of the contract
     * @param state current state of the contract
     * @param hasUnderlying boolean indicating whether the contract has an underlying contract
     * @param underlyingState state of the underlying (empty state object if non-existing)
     * @return boolean indicating whether event is still scheduled
     */
    function isEventScheduled(
        bytes32 _event,
        PAMTerms calldata terms,
        State calldata state,
        bool hasUnderlying,
        State calldata underlyingState
    )
        external
        pure
        virtual
        returns (bool);
}
