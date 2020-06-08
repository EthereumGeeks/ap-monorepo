pragma solidity ^0.6.4;
pragma experimental ABIEncoderV2;

import "../Engines/ANN/ANNSTF.sol";
import "../Engines/CEC/CECSTF.sol";
import "../Engines/CEG/CEGSTF.sol";
import "../Engines/PAM/PAMSTF.sol";


/**
* These helper contracts expose internal functions for unit testing.
*/
contract TestSTF is ANNSTF, CECSTF, CEGSTF, PAMSTF {

    function _STF_PAM_AD(
        PAMTerms memory terms,
        State memory state,
        uint256 scheduleTime,
        bytes32 externalData
    )
        public
        pure
        returns (State memory)
    {
        return STF_PAM_AD(
            terms,
            state,
            scheduleTime,
            externalData
        );
    }

    function _STF_PAM_FP(
        PAMTerms memory terms,
        State memory state,
        uint256 scheduleTime,
        bytes32 externalData
    )
        public
        pure
        returns (State memory)
    {
        return STF_PAM_FP(
            terms,
            state,
            scheduleTime,
            externalData
        );
    }

    function _STF_PAM_IED(
        PAMTerms memory terms,
        State memory state,
        uint256 scheduleTime,
        bytes32 externalData
    )
        public
        pure
        returns (State memory)
    {
        return STF_PAM_IED(
            terms,
            state,
            scheduleTime,
            externalData
        );
    }

    function _STF_PAM_IPCI(
        PAMTerms memory terms,
        State memory state,
        uint256 scheduleTime,
        bytes32 externalData
    )
        public
        pure
        returns (State memory)
    {
        return STF_PAM_IPCI(
            terms,
            state,
            scheduleTime,
            externalData
        );
    }

    function _STF_PAM_IP(
        PAMTerms memory terms,
        State memory state,
        uint256 scheduleTime,
        bytes32 externalData
    )
        public
        pure
        returns (State memory)
    {
        return STF_PAM_IP(
            terms,
            state,
            scheduleTime,
            externalData
        );
    }

    function _STF_PAM_PP(
        PAMTerms memory terms,
        State memory state,
        uint256 scheduleTime,
        bytes32 externalData
    )
        public
        pure
        returns (State memory)
    {
        return STF_PAM_PP(
            terms,
            state,
            scheduleTime,
            externalData
        );
    }

    function _STF_PAM_PR(
        PAMTerms memory terms,
        State memory state,
        uint256 scheduleTime,
        bytes32 externalData
    )
        public
        pure
        returns (State memory)
    {
        return STF_PAM_PR(
            terms,
            state,
            scheduleTime,
            externalData
        );
    }

    function _STF_PAM_PY(
        PAMTerms memory terms,
        State memory state,
        uint256 scheduleTime,
        bytes32 externalData
    )
        public
        pure
        returns (State memory)
    {
        return STF_PAM_PY(
            terms,
            state,
            scheduleTime,
            externalData
        );
    }

    function _STF_PAM_RRF(
        PAMTerms memory terms,
        State memory state,
        uint256 scheduleTime,
        bytes32 externalData
    )
        public
        pure
        returns (State memory)
    {
        return STF_PAM_RRF(
            terms,
            state,
            scheduleTime,
            externalData
        );
    }

    function _STF_PAM_RR(
        PAMTerms memory terms,
        State memory state,
        uint256 scheduleTime,
        bytes32 externalData
    )
        public
        pure
        returns (State memory)
    {
        return STF_PAM_RR(
            terms,
            state,
            scheduleTime,
            externalData
        );
    }

    function _STF_PAM_SC(
        PAMTerms memory terms,
        State memory state,
        uint256 scheduleTime,
        bytes32 externalData
    )
        public
        pure
        returns (State memory)
    {
        return STF_PAM_SC(
            terms,
            state,
            scheduleTime,
            externalData
        );
    }

    function _STF_PAM_MD(
        PAMTerms memory terms,
        State memory state,
        uint256 scheduleTime,
        bytes32 externalData
    )
        public
        pure
        returns (State memory)
    {
        return STF_PAM_MD(
            terms,
            state,
            scheduleTime,
            externalData
        );
    }

    function _STF_PAM_TD(
        PAMTerms memory terms,
        State memory state,
        uint256 scheduleTime,
        bytes32 externalData
    )
        public
        pure
        returns (State memory)
    {
        return STF_PAM_TD(
            terms,
            state,
            scheduleTime,
            externalData
        );
    }

    function _STF_PAM_CE(
        PAMTerms memory terms,
        State memory state,
        uint256 scheduleTime,
        bytes32 externalData
    )
        public
        pure
        returns (State memory)
    {
        return STF_PAM_CE(
            terms,
            state,
            scheduleTime,
            externalData
        );
    }
}
