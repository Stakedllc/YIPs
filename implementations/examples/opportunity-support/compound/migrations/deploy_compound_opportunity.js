/**
* @notice  A Truffle-formatted migration to deploy the Compound Opportunity contract to
*          Kovan/Mainnet, with coin configuration support for ETH, DAI, and USDC.
*
*          Compound has a different contract per market, hence the arrays matched for config.
*/


// The Compound Opportunity contract we want to deploy
const CompoundOpportunityContract = artifacts.require("CompoundOpportunity");


// -- KOVAN

// coins
const KOVAN_WETH_ADDRESS = '0xd0A1E359811322d97991E03f863a0C30C2cF029C';
const KOVAN_DAI_ADDRESS = '0xC4375B7De8af5a38a93548eb8453a498222C4fF2';
const KOVAN_USDC_ADDRESS = '0xC4375B7De8af5a38a93548eb8453a498222C4fF2'; // not actually usdc

// ray
const KOVAN_RAY_STORAGE_ADDRESS = '0xdFD8D105402b6841eCa5593EC41a4172De55ea02';

// cTokens
const KOVAN_COMPOUND_ETH = '0xd96dbd1d1a0bfdae6ada7f5c1cb6eaa485c9ab78';
const KOVAN_COMPOUND_DAI = '0xb6b09fbffba6a5c4631e5f7b2e3ee183ac259c0d';
const KOVAN_COMPOUND_USDC = '0xdff375162cfe7d77473c1bec4560dede974e138c';


// -- MAINNET

// coins
const MAIN_WETH_ADDRESS = '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2';
const MAIN_DAI_ADDRESS = '0x89d24a6b4ccb1b6faa2625fe562bdd9a23260359';
const MAIN_USDC_ADDRESS = '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48';

// ray
const MAIN_RAY_STORAGE_ADDRESS = '0x06a5Bf70BfF314177488864Fe03576ff608e6aec';

// cTokens
const MAIN_COMPOUND_ETH = '0x4ddc2d193948926d02f9b1fe9e1daa0718270ed5';
const MAIN_COMPOUND_DAI = '0x5d3a536e4d6dbd6114cc1ead35777bab948e3643';
const MAIN_COMPOUND_USDC = '0x39AA39c021dfbaE8faC545936693aC917d5E7563';


module.exports = async function(deployer, network, accounts) {

  let compoundOpportunityContract;

  if (network == 'kovan') {

    const coins = [KOVAN_WETH_ADDRESS, KOVAN_DAI_ADDRESS, KOVAN_USDC_ADDRESS];
    const cTokens = [KOVAN_COMPOUND_ETH, KOVAN_COMPOUND_DAI, KOVAN_COMPOUND_USDC];

    await deployer.deploy(
      CompoundOpportunityContract,
      KOVAN_RAY_STORAGE_ADDRESS,
      coins,
      cTokens
    );

    compoundOpportunityContract = await CompoundOpportunityContract.deployed();

  } else if (network == 'main') {

    const coins = [MAIN_WETH_ADDRESS, MAIN_DAI_ADDRESS, MAIN_USDC_ADDRESS];
    const cTokens = [MAIN_COMPOUND_ETH, MAIN_COMPOUND_DAI, MAIN_COMPOUND_USDC];

    await deployer.deploy(
      CompoundOpportunityContract,
      MAIN_RAY_STORAGE_ADDRESS,
      coins,
      cTokens
    );

    compoundOpportunityContract = await CompoundOpportunityContract.deployed();

  }

  console.log(`Compound Opportunity contract deployed at ${compoundOpportunityContract.address}`);

};
