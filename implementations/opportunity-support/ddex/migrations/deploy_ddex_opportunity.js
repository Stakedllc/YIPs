// The DDEX Opportunity contract we want to deploy
const DDEXOpportunityContract = artifacts.require("DDEXOpportunity");


// -- KOVAN

// coins
const KOVAN_DDEX_LENDING_POOL_ETH_ADDRESS = '0x000000000000000000000000000000000000000e';
const KOVAN_DAI_ADDRESS = '0xC4375B7De8af5a38a93548eb8453a498222C4fF2';
const KOVAN_USDC_ADDRESS = '0xC4375B7De8af5a38a93548eb8453a498222C4fF2'; // not actually usdc

// ray
const KOVAN_RAY_STORAGE_ADDRESS = '0xdFD8D105402b6841eCa5593EC41a4172De55ea02';

// DDEX address on kovan
const KOVAN_DDEX_MARGIN_ADDRESS = '0x6365A486952EFfd97415d52a9eF87B6450026498'

// -- MAINNET

// coins
const MAIN_DDEX_LENDING_POOL_ETH_ADDRESS = '0x000000000000000000000000000000000000000e';
const MAIN_DAI_ADDRESS = '0x89d24a6b4ccb1b6faa2625fe562bdd9a23260359';
const MAIN_USDC_ADDRESS = '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48';

// ray
const MAIN_RAY_STORAGE_ADDRESS = '0x06a5Bf70BfF314177488864Fe03576ff608e6aec';

// DDEX address on main
const MAIN_DDEX_MARGIN_ADDRESS = '0x241e82c79452f51fbfc89fac6d912e021db1a3b7'

module.exports = async function(deployer, network, accounts) {

  let ddexOpportunityContract;

  if (network == 'kovan') {

    const coins = [KOVAN_DDEX_LENDING_POOL_ETH_ADDRESS, KOVAN_DAI_ADDRESS, KOVAN_USDC_ADDRESS];

    await deployer.deploy(
      DDEXOpportunityContract,
      KOVAN_RAY_STORAGE_ADDRESS,
      KOVAN_DDEX_MARGIN_ADDRESS,
      coins,
      coins
    );

    ddexOpportunityContract = await DDEXOpportunityContract.deployed();

  } else if (network == 'main') {

    const coins = [MAIN_DDEX_LENDING_POOL_ETH_ADDRESS, MAIN_DAI_ADDRESS, MAIN_USDC_ADDRESS];

    await deployer.deploy(
      DDEXOpportunityContract,
      MAIN_RAY_STORAGE_ADDRESS,
      MAIN_DDEX_MARGIN_ADDRESS,
      coins,
      coins
    );

    ddexOpportunityContract = await DDEXOpportunityContract.deployed();

  }

  console.log(`DDEX Opportunity contract deployed at ${ddexOpportunityContract.address}`);

};
