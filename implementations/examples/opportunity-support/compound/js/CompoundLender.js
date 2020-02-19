const BigNumber = require('bignumber.js');

const BLOCKS_PER_YEAR = 2102400 // blocks in a year set by Compound is 2102400

/**
* @dev  Implementation of Compound
*
* Assumptions:
*
*  - Have access to BigNumber.js package
*  - Instansiated cToken Truffle instance passed in
*/

class CompoundLender {


  /**
  * @param cTokenContract - the Truffle instance of a cToken contract
  */
  constructor(cTokenContract) {
    this.cTokenContract = cTokenContract;
  }


  async getSupply() {

    let supply = await this.cTokenContract.contract.methods.getCash().call();

    return supply.toString();

  }


  async getDemand() {

    let demand = await this.cTokenContract.contract.methods.totalBorrowsCurrent().call();

    return demand.toString();

  }


  async getLiquidity() {

    let liquidity = await this.cTokenContract.contract.methods.getCash().call();

    return liquidity.toString();

  }


  async getRate() {

    let supplyRate = this.cTokenContract.contract.methods.supplyRatePerBlock().call();
    let interestRate = supplyRate / 1e18 * BLOCKS_PER_YEAR;

    return interestRate.toString();

  }

  async modelRates(supply, demand) {

    // not actually implemented

    let currentRate = await getRate();
    let newSupplyRate = currentRate * 0.95;

    return newSupplyRate;

  }

}

module.exports = CompoundLender;
