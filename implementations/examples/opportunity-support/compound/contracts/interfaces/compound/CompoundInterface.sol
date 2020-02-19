pragma solidity 0.4.25;

interface CompoundInterface {

    // ---------------------- USED ON-CHAIN -----------------------------

    /// @notice  For querying the current value conversion from cTokens to underlying
    ///
    /// @dev     Helper function required for 'getBalance()' from Opportunity interface
    ///
    /// @return  Current value conversion metric in base units of token
    function exchangeRateCurrent() external returns (uint);

    /// @notice  For withdrawing from a lending pool
    ///
    /// @dev     Pass in the amount of the token want to withdraw, in native base units
    ///
    /// @param   redeemAmount - The amount of the token want to withdraw, in native base units
    ///
    /// @return  Success (0) or failure code
    function redeemUnderlying(uint redeemAmount) external returns (uint);


    /// @notice  Get the balance of cTokens of the specified address
    ///
    /// @param   account - The address of the account want to check the balance for
    ///
    /// @return  The amount of cTokens owned by the specified address
    function balanceOf(address account) external returns (uint);


    // ---------------------- USED OFF-CHAIN -----------------------------

    /// @notice  Get the amount of free liquidity in the cToken market
    ///
    /// @return  The amount in native base units of the underlying asset
    function getCash() external returns (uint);

    /// @notice  Get the amount borrowed in the cToken market
    ///
    /// @return  The amount in native base units of the underlying asset
    function totalBorrowsCurrent() external returns (uint);

    /// @notice  Get the supply rate per block in the cToken market
    ///
    /// @return  The supply rate per block, assuming 15 block seconds
    function supplyRatePerBlock() external view returns (uint);

    /// @notice  Get the amount set aside as fees/backstop in the cToken market
    ///
    /// @return  The amount in native base units of the underlying asset
    function totalReserves() external returns (uint);

    /// @notice  Get the amount of cTokens in the cToken market
    ///
    /// @return  The amount of cTokens in circulation
    function totalSupply() external returns (uint);


}
