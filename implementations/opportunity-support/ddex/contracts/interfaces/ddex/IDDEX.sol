/*

    Copyright 2020 The Hydro Protocol Foundation

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.

*/

pragma solidity 0.4.25;
pragma experimental ABIEncoderV2;

library BatchActions {
    /**
     * All allowed actions types
     */
    enum ActionType {
        Deposit, // Move asset from your wallet to tradeable balance
        Withdraw, // Move asset from your tradeable balance to wallet
        Transfer, // Move asset between tradeable balance and margin account
        Borrow, // Borrow asset from pool
        Repay, // Repay asset to pool
        Supply, // Move asset from tradeable balance to pool to earn interest
        Unsupply // Move asset from pool back to tradeable balance
    }

    /**
     * Uniform parameter for an action
     */
    struct Action {
        ActionType actionType; // The action type
        bytes encodedParams; // Encoded params, it's different for each action
    }
}

interface IDDEX {
    // ---------------------- USED ON-CHAIN -----------------------------

    /// @notice for supplying or withdrawing the appropriate token to DDEX's lending pool
    function batch(BatchActions.Action[] actions) external payable;

    /// @notice  Responsible for getting the total balance (principal + interest) for the supplied amount in DDEX of the specified token's native base units
    /// @param   asset - The address of the token
    /// @param   user - The address of the user
    /// @return  The total balance (principal + interest) for the supplied amount in DDEX of the specified token's native base units
    function getAmountSupplied(address asset, address user) external view returns (uint256 amount);

    // ---------------------- USED OFF-CHAIN -----------------------------

    /// @notice  Responsible for getting the total supply (amount supplied) for the specified token
    /// @param   asset - The address of the token
    /// @return  the total supply (amount supplied) for the specified token
    function getTotalSupply(address asset) external view returns (uint256 amount);

    /// @notice  Responsible for getting the supply rate (APR) net fees for the specified token
    /// @param   asset - The address of the token
    /// @param   extraBorrowAmount - The amount people would borrowed
    /// @return  borrowInterestRate The borrow rate (APR) net fees for the specified token
    /// @return  supplyInterestRate the supply rate (APR) net fees for the specified token
    function getInterestRates(address asset, uint256 extraBorrowAmount) external view returns (uint256 borrowInterestRate, uint256 supplyInterestRate);

    /// @notice  Responsible for getting the total available market liquidity for the specified token
    /// @param   asset - The address of the token
    /// @return  The total available market liquidity for the specified token
    function getPoolCashableAmount(address asset) external view returns (uint256 cashableAmount);

    /// @notice  esponsible for getting the total demand (amount borrowed) for the specified token
    /// @param   asset - The address of the token
    /// @return  The total demand (amount borrowed) for the specified token
    function getTotalBorrow(address asset) external view returns (uint256 amount);

}
