pragma solidity 0.4.25;

interface CompoundV2Eth {

    // ---------------------- USED ON-CHAIN -----------------------------

    /// @notice  For lending ETH to Compound
    ///
    /// @dev     Send the amount of ETH to lend with this function call
    ///
    /// @return  No return, reverts on error
    function mint() external payable;

}
