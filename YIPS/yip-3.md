---
yip: 3
title: Aave Lending Opportunity
author: Sam Mitchell <sam@staked.us>, Devan Purhar @dpurhar27
discussions-to: https://discord.gg/nvRCzYp
status: WIP
created: 2020-02-03
updated: 2020-02-19, 2020-02-20
---

## Simple Summary
<!--"If you can't explain it simply, you don't understand it well enough." Provide a simplified and layman-accessible explanation of the YIP.-->
Aave is a pooled lending protocol on Ethereum. Users can supply funds to a pool and earn interest, and they can borrow off of those supplied funds. Aave also allows for flash loans from their lending pools, and is governed by the LEND token.

## Abstract
<!--A short (~200 word) description of the technical issue being addressed.-->
Aave must be integrated as an opportunity before RAY can allocate funds.

## Motivation
<!--The motivation is critical for YIPs that want to change the RAY protocol. It should clearly explain why the existing protocol specification is inadequate to address the problem that the YIP solves. YIP submissions without sufficient motivation may be rejected outright.-->
Expanding the opportunity set to include Aave will give deposited funds another opportunity to outperform the benchmark rate. Aave is similar to existing lending integrations. 

## Yield Evaluation
<!--The potential added value for extra yield generation. Historical data should be provided. The process used to evaluate the yield potential should be detailed here.-->
Aave offers an interest-earning opportunity on ETH, DAI, and USDC. Aave also has decently sized pools, meaning RAY can allocate a meaningful portion of funds without driving down the supply rate. According to Loanlist.io, over the past month Aave has an average supply rate of 0.19% on ETH, 6.44% on DAI, and 5.23% on USDC. In frequent observation, and because of it's nascency, it seems to have high rate volatility. This is good for RAY.

## Risk Evaluation
<!--The potential or attached risk that should be considered for this proposal. Historical data should be provided. The process used to evaluate the risks should be detailed here.-->
### Overview
Launch of Platform: Jauary 8, 2020

Assets Supported: BAT, DAI, ETH, KNC, LEND, LINK, MANA, MKR, REP, TUSD, USDC, USDT, WBTC, ZRX, SUSD, and SNX

Oracle Solution: Chainlink

### Summary

Aave is riskier than Compound and dYdX on a technical and financial basis.

Financially, Aave supports a number of ERC-20 tokens as collateral that have small market caps and daily trading volumes. As the leverage of these tokens builds up on Aave, there is increased liquidation risk because of the potential for slippage on liquidation and a deflationary spiral. Aave mitigates this risk through safety parameters set by governance. However, these safety measures are a best guess and the platform is relatively untested.

Technically, Aave has gone through two security audits and is going through at least one additional audit at the moment. Aave chose Chainlink as an oracle solution, and generally, seems to have followed best practices in development of the protocol. However, Aave has not gone through the test of time that protocols such as Compound and dYdX have. A bounty of millions of dollars locked in a smart contract is often the most reassuring sign of security.

In conclusion, we believe Aave is a suitable opportunity to add to RAY. Although it is riskier than Compound and dYdX, Aave offers a potential opportunity for higher yields. As always, depositors will have the discretion to choose Aave as an opportunity.

### Financial Risk Evaluation

- Liquidity Risk: Defined as the ability to pull invested money out of the protocol in a timely fashion.

  - Interest Rate Model: Lending protocols use interest models to properly incentivize liquidity in a given pool. Aave sets a target utliization, a base rate, and two rate slopes for each reserve (asset pool). These parameters inform the interest rate model below. The interest rate model is linear when utilization < target utilization rate, and quadratic when utilization >= target utilization rate.
  
    Variable Borrow Rate: 
      - Utilization < Target Utilization
        - Base Rate + (Utilization * Rate Slope 1)
      - Utililzation >= Target Utilization
        - Base Rate + Rate Slope 1 + ((Utilization - Target Utilization)/(1 - Target Utilization)) * Rate Slope 2

    Variable Supply Rate:
      - Variable Borrow Rate * Utilization
      
    Interest Rate Parameters:
    
      - ETH
        - Variable Base Borrow Rate:  0
        - Variable Borrow Slope 1:  0.08
        - Variable Borrow Slope 2:  0.5
        - Optimal Utilization:  0.8
      - DAI, USDC, SUSD, TUSD, USDT
        - Variable Base Borrow Rate:  0.01
        - Variable Borrow Slope 1:  0.05
        - Variable Borrow Slope 2:  0.5
        - Optimal Utilization:  0.8
        
  - Liquidity Metrics:

    - ETH
      - 7-Day Avg Available Liquidity (Cash): 15,003 ETH
      - 7-Day Avg Total Supply: 17,193 ETH
      - 7-Day Avg Percent of Pool in Cash: 87%
    - DAI
      - 7-Day Avg Available Liquidity (Cash): 168,275 DAI
      - 7-Day Avg Total Supply: 891,353 DAI
      - 7-Day Avg Percent of Pool in Cash: 19%
    - USDC
      - 7-Day Avg Available Liquidity (Cash): 94,136 USDC
      - 7-Day Avg Total Supply: 444,224 USDC
      - 7-Day Avg Percent of Pool in Cash: 21%
    - SUSD
      - 7-Day Avg Available Liquidity (Cash): 94,792 SUSD
      - 7-Day Avg Total Supply: 210,448 SUSD
      - 7-Day Avg Percent of Pool in Cash: 45%
    - TUSD
      - 7-Day Avg Available Liquidity (Cash): 366,102 TUSD
      - 7-Day Avg Total Supply: 708,975 TUSD
      - 7-Day Avg Percent of Pool in Cash: 52%
    - USDT
      - 7-Day Avg Available Liquidity (Cash): 498,426 USDT
      - 7-Day Avg Total Supply: 2,828,215 USDT
      - 7-Day Avg Percent of Pool in Cash: 18%

- Liquidation Risk: Defined as the ability of liquidators to keep loans from becoming undercollateralized.

  - Liquidation Parameters: Aave sets different parameters on each asset pool to manage liquidity risk. These parameters are subject to change by the Aave team / governance. We want a way of knowing if they do change these parameters. Their risk parameters are listed by asset below and ordered by descending loan-to-value:

    - ETH, DAI, USDC, TUSD, 
      - Loan-to-value: 75%
      - Liquidation Threshold: 80%
      - Liquidation Bonus: 5%
    - LINK
      - Loan-to-value: 65%
      - Liquidation Threshold: 70%
      - Liquidation Bonus: 10%
    - BAT, KNC, MANA, ZRX
      - Loan-to-value: 60%
      - Liquidation Threshold: 65%
      - Liquidation Bonus: 10%
    - WBTC
      - Loan-to-value: 60%
      - Liquidation Threshold: 65%
      - Liquidation Bonus: 15%
    - LEND
      - Loan-to-value: 40%
      - Liquidation Threshold: 65%
      - Liquidation Bonus: 15%
    - MKR, REP
      - Loan-to-value: 35%
      - Liquidation Threshold: 65%
      - Liquidation Bonus: 10%
    - SUSD, USDT, SNX
      - Usage as collateral disabled
  
  - Liquidation Metrics: 
    
    - Reserve Size / Daily Trading Volume: This metric illustrates how liquidations might affect an asset's trading market. As this metric grows, the liquidation mechanism becomes less effective because of potential price slippage and the risk of a deflationary spiral. This metric, in the context of lending protocols, is introduced and detailed in [Gauntlet's assessment of Compound](https://gauntlet.network/reports/CompoundMarketRiskAssessment.pdf). The following data was calculated with Messari price and real volume data for the last 24 hours.
  
    - ETH
       - Reserve Size / Daily Trading Volume: 1.01%
    - BAT
       - Reserve Size / Daily Trading Volume: 1%
    - KNC
       - Reserve Size / Daily Trading Volume: 6.85%
    - LEND
       - Reserve Size / Daily Trading Volume: 309.23%
    - LINK
      - Reserve Size / Daily Trading Volume: 11.12%
    - MANA
      - Reserve Size / Daily Trading Volume: 5.61%
    - MKR
      - Reserve Size / Daily Trading Volume: 2,531.20%
    - REP
      - Reserve Size / Daily Trading Volume: 3.99%
    - ZRX
      - Reserve Size / Daily Trading Volume: 0.98%
    - WBTC
      - No messari data
    - SUSD, USDT, SNX
      - Usage as collateral disabled
  
### Security & Governance Risk Evaluation

Aave is governed by the Aave team who hold special privileges within the protocol smart contracts. With these privileges, the team can change the logic of the protocol. They are in the middle of transitioning governance to a DAO with voting rights delegated to holders of the LEND token. Details on the new system are sparse, but will hopefully come out soon. Concerns around how fast they can react to exploits arise when they start using a DAO.

Aave takes a loan origination fee of 0.25% on all loans. This fee is sent to a separate smart contract where it is pooled and eventually used to burn LEND tokens. The loan origination fee is LEND's primary method of value accrual. The fee itself is subject to change through governance.

Audits:

- Trail of Bits - Sep. 2019 - [Report](https://github.com/trailofbits/publications/blob/master/reviews/aaveprotocol.pdf)
  - 4-Person Weeks
- OpenZepplin - Jan. 2020 - [Report](https://blog.openzeppelin.com/aave-protocol-audit/)
  - Pre-Production Code.
-  Clement Lesaege from Kleros - On-Going

Bug Bounty Program: 

- Reward Scheme
  - Up to $25,000 for a critical bug
  - Up to $10,000 for a very high-risk bug
  - Up to $5,000 for a high-risk bug
  - and continues declining the payout for less-critical bugs

Security Reports:
- [Security Report #1](https://medium.com/aave/aave-security-report-d5a2edfe8e05) - Jan. 22, 2020
    
## Specification

The implementation of each function's signature and responsibilities are defined below:

### On-chain
This Opportunity smart contract would follow the current standard `Opportunity.sol` interface.

`function supply(address tokenAddress, uint amount, bool isERC20) external payable;`
- Responsible for supplying the appropriate token to Aave's lending pool in the amount specified instantly when being called.

`function withdraw(address tokenAddress, address beneficiary, uint amount, bool isERC20) external;`
- Responsible for withdrawing the appropriate token from Aave's lending pool in the specified amount instantly when being called, and sending it to the specified beneficiary. If not enough liquidity is available to withdraw funds in the full amount specified instantly, the transaction should fail.

`function getBalance(address tokenAddress) external view returns (uint);`
- Responsible for getting the total balance (principal + interest) for the supplied amount in Aave of the specified token's native base units. Example: Lending ETH, return should be in units of wei. Lending USDC, return should be in units of mWei. 

Additional smart contracts such as Aave-specific interfaces or third-party libraries such as OpenZeppelin can be used to enable clean and secure design.

### Off-chain
This Opportunity program would follow the current standard interface.

`function getSupply();`
- Responsible for getting the total supply (amount supplied) for the specified token. Return the supply as a string.

`function getDemand();`
- Responsible for getting the total demand (amount borrowed) for the specified token. Return the demand as a string.

`function getLiquidity();`
- Responsible for getting the total available market liquidity for the specified token. Return the liquidity as a string.

`function getRate();`
- Responsible for getting the supply rate (APR) net fees for the specified token. Return the supply rate as a number.

`function modelRates(string supply);`
- Responsible for modeling how supplying _X_ of the specified token would affect the current rate. Return the new rate as a number.

Note, the `modelRates()` off-chain spec. method signature is a bit flexible. This is the only function that doesn't need to be completed. Linking to sources that show/explain how the algorithm works, or writing an explanation is sufficient and implementation is not required.

Implementations should be specific to a coin. In example, if run with an environment variable specifying USDC, all data returned should be relevant to USDC only.

### Submission Deliverables
- Smart contract(s) that implements Aave integration following the specification, written in Solidity 0.4.25/0.5.11.
- Smart contract interface that is used in the off-chain files, written in Solidity 0.4.25/0.5.11.
- Off-chain file(s) that implements Aave integration following the specification, written in JS.
- A Truffle migration script with the correct order of operations/parameters required to deploy the Aave Lending Opportunity contract.
- Dependency contract address(es) from the Aave system for Mainnet and if possible, Kovan testnet. If Kovan support is not available, reach out to RAY team and discuss options.
- Answers to [these questions](https://github.com/Stakedllc/YIPs/blob/master/implementations/examples/opportunity-support/compound/other/answers.md).
- Add support to this opportunity for ETH, DAI, and USDC.

### Guidelines
- [Building an Opportunity](https://staked.gitbook.io/staked/ray/contributing#building-an-opportunity)

Each document should have sufficient explanation of the integration specifics, how it maps to the required functionality, and links to relevant sources for acceptance checks to use.

## Rationale
<!--The rationale fleshes out the specification by describing what motivated the design and why particular design decisions were made. It should describe alternate designs that were considered and related work, e.g. how the feature is supported in other languages. The rationale may also provide evidence of consensus within the community, and should discuss important objections or concerns raised during discussion.-->
Adding Aave as an opportunity will give RAY another yield-generating lending protocol to choose between. It is similar to existing opportunities, but may have higher rates at any given time. They also support several other assets that RAY could extend to.

## Backwards Compatibility
<!--All YIPs that introduce backwards incompatibilities must include a section describing these incompatibilities and their severity. The YIP must explain how the author proposes to deal with these incompatibilities. YIP submissions without a sufficient backwards compatibility treatise may be rejected outright.-->
Backwards compatible.

## Test Cases
<!--Test cases for an implementation are mandatory for YIPs that are affecting consensus changes. Other YIPs can choose to include links to test cases if applicable.-->
A lot of the Acceptance Testing will be manual, and not automated. Any testing on integration to help verify correct implementations are welcome.

**Off-chain implementation**
- Run based on the following commands and configurations:
1. `yarn`
2. `truffle compile`
3. `yarn run integration` - note env. variables `WEB3_HTTP_PROVIDER` and `COIN` need to be supplied. Valid values for `COIN` include: `ETH`, `DAI`, and `USDC`.
- Manual

**On-chain implementation**
- Manual

**Migration implementation**
- Manual

**Other**
- Manual

To-do.

## Implementation
<!--The implementations must be completed before any YIP is given status "Final", but it need not be completed before the YIP is accepted. While there is merit to the approach of reaching consensus on the specification and rationale before writing code, the principle of "rough consensus and running code" is still useful when it comes to resolving many discussions of API details.-->
To-do. Follow [this submission](https://github.com/Stakedllc/YIPs/tree/master/implementations/examples/opportunity-support/compound) as an example. Directory of the submission should be `./implementations/opportunity-support/aave/`

## Security Considerations
<!--All YIPs must contain a section that discusses the security implications/considerations relevant to the proposed change. Include information that might be important for security discussions, surfaces risks and can be used throughout the life cycle of the proposal. E.g. include security-relevant design decisions, concerns, important discussions, implementation-specific guidance and pitfalls, an outline of threats and risks and how they are being addressed. YIP submissions missing the "Security Considerations" section will be rejected. An YIP cannot proceed to status "Final" without a Security Considerations discussion deemed sufficient by the reviewers.-->
To-do.

## Copyright
Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
