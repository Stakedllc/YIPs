// The DDEX Opportunity contract we want to deploy
const DDEXOpportunityContract = artifacts.require("DDEXOpportunity");


// -- KOVAN

// RAY coins (don't change)
const KOVAN_WETH_ADDRESS = '0xd0A1E359811322d97991E03f863a0C30C2cF029C';
const KOVAN_DAI_ADDRESS = '0xC4375B7De8af5a38a93548eb8453a498222C4fF2';
const KOVAN_USDC_ADDRESS = '0xC4375B7De8af5a38a93548eb8453a498222C4fF2';

// RAY contracts (don't change)
const KOVAN_RAY_STORAGE_ADDRESS = '0xdFD8D105402b6841eCa5593EC41a4172De55ea02';

// DDEX coins on kovan
// if I want to lend ${coin}, what contract address I am submitting
// DDEX uses the ERC20 coins address, and a special address to represent ETH
const KOVAN_DDEX_ETH = '0x000000000000000000000000000000000000000e';
const KOVAN_DDEX_DAI = ''; // fill out please
const KOVAN_DDEX_USDC = ''; // fill out please

// DDEX contract address on kovan
const KOVAN_DDEX_MARGIN_ADDRESS = '0x6365A486952EFfd97415d52a9eF87B6450026498'

// -- MAINNET

// RAY coins (don't change)
const MAIN_WETH_ADDRESS = '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2';
const MAIN_DAI_ADDRESS = '0x6b175474e89094c44da98b954eedeac495271d0f';
const MAIN_USDC_ADDRESS = '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48';

// RAY contracts (don't change)
const MAIN_RAY_STORAGE_ADDRESS = '0x06a5Bf70BfF314177488864Fe03576ff608e6aec';

// DDEX coins on main
// if I want to lend ${coin}, what contract address I am submitting
// DDEX uses the ERC20 coins address, and a special address to represent ETH
const MAIN_DDEX_ETH = '0x000000000000000000000000000000000000000e';
const MAIN_DDEX_DAI = '0x6b175474e89094c44da98b954eedeac495271d0f'; // double-check please
const MAIN_DDEX_USDC = '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48'; // double-check please

// DDEX contract address on main
const MAIN_DDEX_MARGIN_ADDRESS = '0x241e82c79452f51fbfc89fac6d912e021db1a3b7'

module.exports = async function(deployer, network, accounts) {

  let ddexOpportunityContract;

  if (network == 'kovan') {

    const coins = [KOVAN_WETH_ADDRESS, KOVAN_DAI_ADDRESS, KOVAN_USDC_ADDRESS]; // don't change
    const ddexCoins = [KOVAN_DDEX_ETH, KOVAN_DDEX_DAI, KOVAN_DDEX_USDC]; // don't change

    await deployer.deploy(
      DDEXOpportunityContract,
      KOVAN_RAY_STORAGE_ADDRESS,
      KOVAN_DDEX_MARGIN_ADDRESS,
      coins,
      ddexCoins
    );

    ddexOpportunityContract = await DDEXOpportunityContract.deployed();

  } else if (network == 'main') {

    const coins = [MAIN_WETH_ADDRESS, MAIN_DAI_ADDRESS, MAIN_USDC_ADDRESS]; // don't change
    const ddexCoins = [MAIN_DDEX_ETH, MAIN_DDEX_DAI, MAIN_DDEX_USDC]; // don't change

    await deployer.deploy(
      DDEXOpportunityContract,
      MAIN_RAY_STORAGE_ADDRESS,
      MAIN_DDEX_MARGIN_ADDRESS,
      coins,
      ddexCoins
    );

    ddexOpportunityContract = await DDEXOpportunityContract.deployed();

  }

  console.log(`DDEX Opportunity contract deployed at ${ddexOpportunityContract.address}`);

};
