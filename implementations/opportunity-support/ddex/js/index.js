import Web3 from 'web3';
import TruffleContract from 'truffle-contract';
import DDEXLender from './DDEXLender.js';
require('dotenv').config()

const ddexInterfaceJson = require("./build/contracts/IDDEX.json");
const DDEX_MARGIN_CONTRACT = '0x241e82c79452f51fbfc89fac6d912e021db1a3b7';

const ETH_TOKEN_ADDRESS = '0x000000000000000000000000000000000000000e'
const DAI_TOKEN_ADDRESS = '0x6b175474e89094c44da98b954eedeac495271d0f'
const USDC_TOKEN_ADDRESS = '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48'

const ETH_TEST_SUPPLY = 2e23;
const DAI_TEST_SUPPLY = 2e23;
const USDC_TEST_SUPPLY = 1e6;

let implementation, testSupply;

init().then(run).catch( (err) => {

  console.log(`Failure. ${err}`);
  process.exit(1);

});

async function init() {

  let tokenAddress;

  let web3 = new Web3(new Web3.providers.HttpProvider(process.env.WEB3_HTTP_PROVIDER));

  // implementation should run based off a coin
  switch (process.env.COIN) {

    case 'ETH':
      tokenAddress = ETH_TOKEN_ADDRESS;
      testSupply = ETH_TEST_SUPPLY;
      break;
    case 'DAI':
      tokenAddress = DAI_TOKEN_ADDRESS;
      testSupply = DAI_TEST_SUPPLY;
      break;
    case 'USDC':
      tokenAddress = USDC_TOKEN_ADDRESS;
      testSupply = USDC_TEST_SUPPLY;
      break;
    default:
      throw new Error(`${process.env.COIN} is an invalid coin!`);

  }

  let ddexInterfaceContract = TruffleContract(ddexInterfaceJson);
  ddexInterfaceContract.setProvider(web3.currentProvider);
  const ddex = await ddexInterfaceContract.at(DDEX_MARGIN_CONTRACT);
  implementation = new DDEXLender(ddex, tokenAddress);
}


async function run() {

  let promises = [];

  promises.push(implementation.getSupply());
  promises.push(implementation.getDemand());
  promises.push(implementation.getLiquidity());
  promises.push(implementation.getRate());
  promises.push(implementation.modelRates(testSupply));
  await Promise.all(promises).then( (results) => {

    console.log(`${process.env.COIN} Stats:`);
    console.log(`Supply: ${results[0]}`);
    console.log(`Demand: ${results[1]}`);
    console.log(`Liquidity: ${results[2]}`);
    console.log(`Supply Rate: ${results[3]}`);
    console.log(`Adjusted Supply Rate: ${results[4]}`);

  });

  process.exit(0);

}
