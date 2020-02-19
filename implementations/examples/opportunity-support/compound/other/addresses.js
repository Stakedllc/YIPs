/**
* @notice  These are the addresses of the external (from RAY) dependency contracts
*
*  In Compound's case, it's the cTokens and the interestRateModel contracts
*
*  - cTokens: Compound represents each market (separated by asset) as a different
*             smart contract. RAY needs to interact with each different contract
*             to perform the required functionality. These are called cTokens.
*
*  - interestRateModel: Compound models their borrowing algorithm in this contract.
*                       RAY needs to interact with this contract to model the rates.
*/


// -- KOVAN

// cTokens
const KOVAN_COMPOUND_ETH = '0xd96dbd1d1a0bfdae6ada7f5c1cb6eaa485c9ab78';
const KOVAN_COMPOUND_DAI = '0xb6b09fbffba6a5c4631e5f7b2e3ee183ac259c0d';
const KOVAN_COMPOUND_USDC = '0xdff375162cfe7d77473c1bec4560dede974e138c';

// -- MAINNET

// cTokens
const MAIN_COMPOUND_ETH = '0x4ddc2d193948926d02f9b1fe9e1daa0718270ed5';
const MAIN_COMPOUND_DAI = '0x5d3a536e4d6dbd6114cc1ead35777bab948e3643';
const MAIN_COMPOUND_USDC = '0x39AA39c021dfbaE8faC545936693aC917d5E7563';

// interestRateModel
const MAIN_RATE_MODEL = '0x0c3f8df27e1a00b47653fde878d68d35f00714c0';
