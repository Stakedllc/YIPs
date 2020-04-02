---
yip: <to be assigned>
title: Lendf Lending Opportunity
author: Sam Mitchell @samatstaked, Devan Purhar @dpurhar27
discussions-to: <to be assigned>
status: WIP
---

## Simple Summary
<!--"If you can't explain it simply, you don't understand it well enough." Provide a simplified and layman-accessible explanation of the YIP.-->
Lendf is decentralized money market protocol which is based off of Compound's v1 smart contracts. Lendf supports a number of stablecoins and cryptoassets, and offers another lending market for RAY to deposit funds into. 

Lendf Resources: https://docs.lendf.me/faq

## Abstract
<!--A short (~200 word) description of the technical issue being addressed.-->
Lendf must be integrated as an opportunity before RAY can allocate funds.

## Motivation
<!--The motivation is critical for YIPs that want to change the RAY protocol. It should clearly explain why the existing protocol specification is inadequate to address the problem that the YIP solves. YIP submissions without sufficient motivation may be rejected outright.-->
Expanding the opportunity set to include Lendf will give RAY another opportunity to outperform the benchmark rate.

## Yield Evaluation
<!--The potential added value for extra yield generation. Historical data should be provided. The process used to evaluate the yield potential should be detailed here.-->
Lendf offers interest-earning opportunities on BTC, ETH, DAI, USDC, USDT, PAX, TUSD, as well Huobi and imToken cryptoassets. Lendf has large markets for: USDT ($8.6m) and ETH ($7.6m), while most stablecoins have ~$1m in their respective pools. Stablecoin and BTC yields are competitive with DeFi lending markets.

Lendf charges a .01% origination fee to borrowers.

## Risk Evaluation
<!--The potential or attached risk that should be considered for this proposal. Historical data should be provided. The process used to evaluate the risks should be detailed here.-->

**Borrowing / Liquidation Risk Parameters:**
Borrowing in Lendf is opened with a minimum 125% overcollateraliztion ratio. If the overcollateralization ratio falls below 125%, liquidators can liquidate collateral at a 10% discount to restore the account to 125%.

**Interest Rate Models**
Stablecoins besides USDx, 
  - Borrow APR
    - 0.06 x UR + 0.05 x UR^4 + 0.03 x UR^8 + 0.12 x UR^32, if(0<=UR<0.75);
    - 0.06 x 0.75 + 0.05 x 0.75^4 + 0.03 x 0.75^8 + 0.12 x 0.75^32, if(0.75<=UR<=0.85);
    - 0.06 x UR + 0.03 x UR^8 + 0.05 x UR^12 + 0.12 x UR^32, if(0.85<UR =1)
  - Supply APR = Borrow APR x UR x Discount
  - UR = Total Borrows / Total Supplies

ETH and BTC, 
  - Borrow APR = 0.2 x UR
  - Supply APR = Borrow APR x UR x Discount
  - UR = Total Borrows / Total Supplies

**Oracle Solution:**
Lendf uses an in-house oracle solution, similar to Maker's medianizer. They aggregate real-time price data from exchanges, mediate (medianize?) the data, and publish it on-chain periodically. 

**Governence**
Lendf is a dForce ecosystem project, and is therefore governed by the DF token. The token votes on asset integration, fees, interest rate models and more.

**Security**
I can not find any security audits for the Lendf smart contracts.

To-do: More governence research, historical data for: oracle performance, risk (liquidation performance), liquidity, and interest rates. 

## Specification

The implementation of each function's signature and responsibilities are defined below:

### On-chain
This Opportunity smart contract would follow the current standard `Opportunity.sol` interface.  
Lendf integration docs: https://github.com/Lendfme/interfaces

`function supply(address tokenAddress, uint amount, bool isERC20) external payable;`  
Notes: The DAI market takes advantage of the DSR. It seems they use CHAI. This will need be investigated further; we may need to use CHAI in our integration.

`function withdraw(address tokenAddress, address beneficiary, uint amount, bool isERC20) external;`

`function getBalance(address tokenAddress) external view returns (uint);`

### Off-chain
This Opportunity program would follow the current standard interface.  
Lendf likely calculates interest every block, and therefore falls victim to block time estimation in interest rate calculations as Compound does. We will need to adjust for this in our off-chain processes.

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
To-do.

### Guidelines
- [Building an Opportunity](https://staked.gitbook.io/staked/ray/contributing#building-an-opportunity)

Each document should have sufficient explanation of the integration specifics, how it maps to the required functionality, and links to relevant sources for acceptance checks to use.

## Rationale
<!--The rationale fleshes out the specification by describing what motivated the design and why particular design decisions were made. It should describe alternate designs that were considered and related work, e.g. how the feature is supported in other languages. The rationale may also provide evidence of consensus within the community, and should discuss important objections or concerns raised during discussion.-->
Adding Lendf as an opportunity will give RAY another yield-generating lending protocol to choose between. It is similar to existing opportunities, but may have higher rates at any given time. They also support several other assets that RAY could extend to in the future.

## Backwards Compatibility
<!--All YIPs that introduce backwards incompatibilities must include a section describing these incompatibilities and their severity. The YIP must explain how the author proposes to deal with these incompatibilities. YIP submissions without a sufficient backwards compatibility treatise may be rejected outright.-->
Backwards compatible.

## Test Cases
<!--Test cases for an implementation are mandatory for YIPs that are affecting consensus changes. Other YIPs can choose to include links to test cases if applicable.-->
A lot of the Acceptance Testing will be manual and done by the RAY team, and not automated. Any testing on integration to help verify correct implementations are welcome in the submission.

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
Follow [this submission](https://github.com/Stakedllc/YIPs/tree/master/implementations/examples/opportunity-support/compound) as an example. Directory of the submission should be `./implementations/opportunity-support/lendf/`

## Security Considerations
<!--All YIPs must contain a section that discusses the security implications/considerations relevant to the proposed change. Include information that might be important for security discussions, surfaces risks and can be used throughout the life cycle of the proposal. E.g. include security-relevant design decisions, concerns, important discussions, implementation-specific guidance and pitfalls, an outline of threats and risks and how they are being addressed. YIP submissions missing the "Security Considerations" section will be rejected. An YIP cannot proceed to status "Final" without a Security Considerations discussion deemed sufficient by the reviewers.-->
To-do.

## Copyright
Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
