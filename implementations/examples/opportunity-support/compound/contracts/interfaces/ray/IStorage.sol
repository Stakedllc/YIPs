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


/// @notice  Interface for RAY storage contract
///
/// Author:  Devan Purhar
/// Version: 1.0.0

interface IStorage {

  function getIsOracle(address target) external view returns (bool);

  function getGovernanceWallet() external view returns (address);

  function getVerifier(bytes32 contractName) external view returns (address);

  function getTokenKey(bytes32 tokenId) external view returns (bytes32);

  function getOpportunityTokenContract() external view returns (address);

  function getPrincipalAddress(bytes32 ray) external view returns (address);

  function getIsERC20(address principalAddress) external view returns (bool);

  function getOpportunities(bytes32 ray) external view returns (bytes32[]);

  function getContractAddress(bytes32 contractId) external view returns (address);

  function getAvailableCapital(bytes32 ray) external view returns (uint);

  function getWithdrawnYield(bytes32 ray) external view returns (uint);

  function getCumulativeRate(bytes32 ray) external view returns (uint);

  function getLastUpdatedRate(bytes32 ray) external view returns (uint);

  function getRealizedYield(bytes32 ray) external view returns (uint);

  function getOpportunityToken(bytes32 ray, bytes32 opportunity) external view returns (bytes32);

  function getEntryRate(bytes32 ray, bytes32 tokenId) external view returns (uint);

  function getACPContribution(bytes32 ray) external view returns (uint);

  function getPausedMode(bytes32 ray) external view returns (bool);

  function getShareSupply(bytes32 ray) external view returns (uint);

  function getTokenShares(bytes32 ray, bytes32 tokenId) external view returns (uint);

  function getTokenCapital(bytes32 ray, bytes32 tokenId) external view returns (uint);

  function getTokenAllowance(bytes32 ray, bytes32 tokenId) external view returns (uint);

  function getRate(bytes32 ray) external view returns (uint);

  function isValidOpportunity(bytes32 ray, bytes32 opportunityKey) external view returns (bool);

}
