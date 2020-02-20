import Web3 from 'web3';
import TruffleContract from 'truffle-contract';
import CompoundLender from './CompoundLender.js';

const compoundInterfaceJson = require("./build/contracts/CompoundInterface.json");

const ETH_CTOKEN_ADDRESS = '0x4ddc2d193948926d02f9b1fe9e1daa0718270ed5';
const DAI_CTOKEN_ADDRESS = '0x5d3a536e4d6dbd6114cc1ead35777bab948e3643';
const USDC_CTOKEN_ADDRESS = '0x39AA39c021dfbaE8faC545936693aC917d5E7563';

const ETH_TEST_SUPPLY = 2e23;
const DAI_TEST_SUPPLY = 2e23;
const USDC_TEST_SUPPLY = 2e11;

let implementation, testSupply;


init().then(run).catch( (err) => {

  console.log(`Failure. ${err}`);
  process.exit(1);

});

async function init() {

  let cTokenAddress;

  let web3 = new Web3(new Web3.providers.HttpProvider(process.env.WEB3_HTTP_PROVIDER));

  // implementation should run based off a coin
  switch (process.env.COIN) {

    case 'ETH':

      cTokenAddress = ETH_CTOKEN_ADDRESS;
      testSupply = ETH_TEST_SUPPLY;
      break;

    case 'DAI':

      cTokenAddress = DAI_CTOKEN_ADDRESS;
      testSupply = DAI_TEST_SUPPLY;
      break;

    case 'USDC':

      cTokenAddress = USDC_CTOKEN_ADDRESS;
      testSupply = USDC_TEST_SUPPLY;
      break;

    default:

      throw new Error(`${process.env.COIN} is an invalid coin!`);

  }

  let compoundInterfaceContract = TruffleContract(compoundInterfaceJson);
  compoundInterfaceContract.setProvider(web3.currentProvider);

  const cToken = await compoundInterfaceContract.at(cTokenAddress);

  implementation = new CompoundLender(cToken);

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
