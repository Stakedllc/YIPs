pragma solidity 0.4.25;

interface CompoundV2Erc20 {

    // ---------------------- USED ON-CHAIN -----------------------------

    /// @notice  For lending ERC20's to Compound
    ///
    /// @param   mintAmount - The amount to lend in native base units of the asset
    ///
    /// @return  Success (0) or error code
    function mint(uint mintAmount) external returns (uint);

}
