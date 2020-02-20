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

    let supplyRate = await this.cTokenContract.contract.methods.supplyRatePerBlock().call();
    let interestRate = supplyRate / 1e18 * BLOCKS_PER_YEAR;

    return interestRate;

  }


  /**
  * @notice  This function should have the most detail on how the platform in question
  *          modeling of rates works. It's fine if implementation isn't completed, but
  *          sources should be linked to where to find details on the algorithm used.
  *
  * @source  https://etherscan.io/address/0x0c3f8df27e1a00b47653fde878d68d35f00714c0#code
  *          Relevant function is 'getBorrowRate()'. Model works off supply/demand.
  */
  async modelRates(supply) {

    // not actually implemented

    let currentRate = await this.getRate();
    let newSupplyRate = currentRate * 0.95;

    return newSupplyRate;

  }

}

module.exports = CompoundLender;
