const BigNumber = require('bignumber.js');

/**
* @dev  Implementation of DDEX
*/

class DDEXLender {

  /**
  * @param ddexContract - DDEX margin contract
  * @param tokenAddress - address for DDEX lending asset
  */
  constructor(ddexContract, tokenAddress) {
    this.ddexContract = ddexContract;
    this.tokenAddress = tokenAddress;
  }

  async getSupply() {
    let supply = await this.ddexContract.contract.methods.getTotalSupply(this.tokenAddress).call();
    return supply.toString();
  }

  async getDemand() {
    let demand = await this.ddexContract.contract.methods.getTotalBorrow(this.tokenAddress).call();
    return demand.toString();
  }

  async getLiquidity() {
    let liquidity = await this.ddexContract.contract.methods.getPoolCashableAmount(this.tokenAddress).call();
    return liquidity.toString();
  }

  async getRate() {
    let rate = await this.ddexContract.contract.methods.getInterestRates(this.tokenAddress, 0x0).call();
    let interestRate = rate.supplyInterestRate / 1e18
    return interestRate.toString();
  }

  async modelRates(supply) {
    let totalSupply = await this.ddexContract.contract.methods.getTotalSupply(this.tokenAddress).call();
    let supplyRate =  await this.getRate();
    let supplyBigNumber = new BigNumber(supply);
    let totalSupplyBignumber = new BigNumber(totalSupply);
    let supplyRateBignumber = new BigNumber(supplyRate);

    let newTotalSupplyBignumber = totalSupplyBignumber.add(supplyBigNumber)
    if (newTotalSupplyBignumber.isNeg()) {
      return "0";
    }

    let supplyInterestBignumber = totalSupplyBignumber.mul(supplyRateBignumber);
    let modelRate = supplyInterestBignumber.div(newTotalSupplyBignumber);
    return modelRate.toString();
  }

}

module.exports = DDEXLender;
