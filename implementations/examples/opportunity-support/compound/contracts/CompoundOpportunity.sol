/**

    The software and documentation available in this repository (the "Software") is
    protected by copyright law and accessible pursuant to the license set forth below.

    Copyright © 2019 Staked Securely, Inc. All rights reserved.

    Permission is hereby granted, free of charge, to any person or organization
    obtaining the Software (the “Licensee”) to privately study, review, and analyze
    the Software. Licensee shall not use the Software for any other purpose. Licensee
    shall not modify, transfer, assign, share, or sub-license the Software or any
    derivative works of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED,
    INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
    PARTICULAR PURPOSE, TITLE, AND NON-INFRINGEMENT. IN NO EVENT SHALL THE COPYRIGHT
    HOLDERS BE LIABLE FOR ANY DAMAGES OR OTHER LIABILITY, WHETHER IN CONTRACT, TORT,
    OR OTHERWISE, ARISING FROM, OUT OF, OR IN CONNECTION WITH THE SOFTWARE.

*/

pragma solidity 0.4.25;


// external dependency
import "./interfaces/compound/CompoundV2EthInterface.sol";
import "./interfaces/compound/CompoundV2Erc20Interface.sol";
import "./interfaces/compound/CompoundInterface.sol";
import "./openzeppelin/ERC20/IERC20.sol";

// internal dependency
import "./interfaces/ray/Opportunity.sol";
import "./interfaces/ray/MarketByContract.sol";
import "./interfaces/ray/IStorage.sol";


/// @notice  Communicating Proxy to the Compound Protocol
///
/// Author:  Devan Purhar
/// Version: 1.0.0

contract CompoundOpportunity is Opportunity, MarketByContract {


  /*************** STORAGE VARIABLE DECLARATIONS **************/


  // contracts used, this is how to dynamically reference RAY contracts from RAY Storage
  bytes32 internal constant ADMIN_CONTRACT = keccak256("AdminContract");
  bytes32 internal constant OPPORTUNITY_MANAGER_CONTRACT = keccak256("OpportunityManagerContract");

  uint internal constant COMPOUND_BALANCE_DENOM = 1 ether;

  IStorage public _storage;
  // map principal tokens to contracts to call -> not in storage since this unique to compounds impl
  mapping(address => address) public markets;


  /*************** EVENT DECLARATIONS **************/



  /*************** MODIFIER DECLARATIONS **************/


  /// @notice  Checks the caller is RAY's Governance Wallet
  ///
  /// @dev     To be removed once fallbacks are
  modifier onlyGovernance()
  {
      require(
          msg.sender == _storage.getGovernanceWallet(),
          "#CompoundImpl onlyGovernance Modifier: Only Governance can call this"
      );

      _;
  }


  /// @notice  Checks the caller is RAY's Admin contract
  modifier onlyAdmin()
  {
      require(
          msg.sender == _storage.getContractAddress(ADMIN_CONTRACT),
          "#CompoundImpl onlyAdmin Modifier: Only Admin can call this"
      );

      _;
  }


  /// @notice  Checks the caller is RAY's OpportunityManager contract
  modifier onlyOpportunityManager()
  {
      require(
          msg.sender == _storage.getContractAddress(OPPORTUNITY_MANAGER_CONTRACT),
          "#CompoundImpl onlyOpportunityManager Modifier: Only OpportunityManager can call this"
      );

      _;
  }


  /////////////////////// FUNCTION DECLARATIONS BEGIN ///////////////////////


  /// @notice  Sets Storage instance and inits the coins supported by the Opp.
  ///
  /// @dev     The principalTokens and compoundContracts need to correlate by index
  ///
  ///          Ex. principalTokens[0] == DAI Address, compoundContracts[0] == DAI COMPOUND
  ///
  /// @param   __storage - The Storage contracts address
  /// @param   principalTokens - The coin addresses to add support for
  /// @param   compoundContracts - The contract addresses that correlate with the contracts
  constructor(
    address __storage,
    address[] memory principalTokens,
    address[] memory compoundContracts
  )
    public
  {

    _storage = IStorage(__storage);

    _addPrincipalTokens(principalTokens, compoundContracts);

  }


  /// @notice  Fallback function to receive Ether
  ///
  /// @dev     Required to receive Ether from Compound upon withdrawals
  function() external payable {

  }


  /** --------------- OpportunityManager ENTRYPOINTS ----------------- **/


  /// @notice  The entrypoint for OpportunityManager to lend
  ///
  /// @param    principalToken - The coin address to lend
  /// @param    value - The amount to lend
  function supply(
    address principalToken,
    uint value,
    bool isERC20
  )
    external
    onlyOpportunityManager
    payable
  {

    address compoundMarket = markets[principalToken];

    if (isERC20) {

      require(
        IERC20(principalToken).transferFrom(msg.sender, address(this), value),
        "#CompoundImpl supply(): TransferFrom of ERC20 Token failed"
      );

      /// @notice  The method to lend ERC20's for this Opportunity
      ///
      /// @dev     We trust the external contract we call here (no re-entrancy)
      ///
      /// @param   principalToken - The coin we're trying to lend
      /// @param   value - The amount we're trying to lend in the smallest units of the coin


      // give allowance to Compound to use our ERC20 balance
      require(
        IERC20(principalToken).approve(compoundMarket, value),
        "CompoundImpl supply(): Approval of ERC20 Token failed"
      );

      uint errorCode = CompoundV2Erc20(compoundMarket).mint(value);

      // if we pass this, we have successfully lent our principal to Compound
      require(errorCode == 0, "#CompoundImpl supply(): Failed to lend to Compound");

    } else {

      /// @notice  The method to lend ETH for this Opportunity
      ///
      /// @dev     We trust the external contract we call here (no re-entrancy)
      ///
      /// @param   principalToken - The coin we're trying to lend

      // ETH lending on Compound doesn't return anything and reverts on error
      CompoundV2Eth(compoundMarket).mint.value(msg.value)();

    }

  }


  /// @notice  The entrypoint for OpportunityManager to withdraw
  ///
  /// @param    principalToken - The coin address to withdraw
  /// @param    beneficiary - The address to send funds too - always OpportunityManager for now
  /// @param    valueToWithdraw - The amount to withdraw
  function withdraw(
    address principalToken,
    address beneficiary,
    uint valueToWithdraw,
    bool isERC20
  )
    external
    onlyOpportunityManager
  {

    uint errorCode = CompoundInterface(markets[principalToken]).redeemUnderlying(valueToWithdraw);
    require(errorCode == 0, "#CompoundImpl withdraw(): Withdrawing from Compound failed");

    if (isERC20) {

      require(
        IERC20(principalToken).transfer(beneficiary, valueToWithdraw),
        "CompoundImpl withdraw(): Transfer of ERC20 Token failed"
      );

    } else {

      beneficiary.transfer(valueToWithdraw);

    }

  }


  /** ----------------- ONLY ADMIN MUTATORS ----------------- **/


  /// @notice  Add support for a coin
  ///
  /// @dev     This is configured in-contract since it's not common across Opportunities
  ///
  /// @param   principalTokens - The coin contract addresses
  /// @param   compoundContracts - The Compound platform contracts that map to each coin
  function addPrincipalTokens(
    address[] memory principalTokens,
    address[] memory compoundContracts
  )
    public // not using external b/c use memory to pass in array
    onlyAdmin
  {

    _addPrincipalTokens(principalTokens, compoundContracts);

  }


  /** ----------------- VIEW ACCESSORS ----------------- **/


  /// @notice  Get the current balance we have in the Opp. (principal + interest generated)
  ///
  /// @param   principalToken - The coins address
  ///
  /// @return  The total balance in the smallest units of the coin
  function getBalance(address principalToken) external view returns(uint) {

      address compoundMarket = markets[principalToken];

      uint currCompoundBalance = CompoundInterface(compoundMarket).balanceOf(address(this)) *
        CompoundInterface(compoundMarket).exchangeRateCurrent() / COMPOUND_BALANCE_DENOM; // put it in units of wei

      return currCompoundBalance;

  }


  /*************** INTERNAL FUNCTIONS **************/

  /** ----------------- OPPORTUNITY LEND PROXY FUNCTIONS ----------------- **/


  /// @notice  Used to add coins support to this Opportunities configuration
  ///
  /// @dev     Internal version so we can call from the constructor and Admin Contract
  ///
  /// @param   principalTokens - The coin contract addresses
  /// @param   compoundContracts - The Compound platform contracts that map to each coin
  function _addPrincipalTokens(
    address[] memory principalTokens,
    address[] memory compoundContracts
  )
    internal
  {

    for (uint i = 0; i < principalTokens.length; i++) {

      markets[principalTokens[i]] = compoundContracts[i];

    }

  }


  /** ------------------- FALLBACK FUNCTIONS ------------------- **/


  /// @notice  Used to transfer funds to the Governance wallet in case of bug
  function fallbackClaim(uint value, address principalToken, bool isERC20) external onlyGovernance {

    if (isERC20) {

      require(
        IERC20(principalToken).transfer(_storage.getGovernanceWallet(), value),
        "CompoundImpl fallbackClaim(): Transfer of ERC20 Token failed"
      );

    } else {

      _storage.getGovernanceWallet().transfer(value);

    }

  }

  /// @notice  Used to withdraw funds from the Opportunity in case of bug
  function fallbackWithdrawCompound(uint amountToWithdraw, address principalToken) external onlyGovernance {

     CompoundInterface(markets[principalToken]).redeemUnderlying(amountToWithdraw);

  }

}
