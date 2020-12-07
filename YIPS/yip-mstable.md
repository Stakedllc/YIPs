---
yip: <to be assigned>
title: mStable Lending Opportunity
author: Devan Purhar @dpurhar27, Sam Mitchell @samatstaked, Andrea Burzi <...>
discussions-to: <to be assigned>
status: WIP
created: 2020-12-07
---

## Simple Summary
<!--"If you can't explain it simply, you don't understand it well enough." Provide a simplified and layman-accessible explanation of the YIP.-->
mStable is decentralized AMM protocol on Ethereum with a unique high-yield feature. mStable supports a number of stablecoins, and offers yield markets for RAY to deposit funds into. This YIP will make use of the mStable "Savings" feature that looks similar to other lending opportunities, or specifically the DSR. However, there's a twist - the Savings feature has an extremely high yield, designed to be above the core lending market at all times. The RAY mStable Opportunity will support USDC deposits, convert that USDC into MUSD via depositing into mStable, then depositing the received MUSD into the mStable Savings feature.

mStable website: https://mstable.org/

## Abstract
<!--A short (~200 word) description of the technical issue being addressed.-->
mStable must be integrated according to the appropriate spec. as an opportunity before RAY can allocate funds to it.

## Motivation
<!--The motivation is critical for YIPs that want to change the RAY protocol. It should clearly explain why the existing protocol specification is inadequate to address the problem that the YIP solves. YIP submissions without sufficient motivation may be rejected outright.-->
Expanding the opportunity set to include mStable will give RAY another opportunity to outperform the benchmark rate. mStable also supports liquid markets and assets RAY is looking to expand to, that existing opportunities lack. 

## Yield Evaluation
<!--The potential added value for extra yield generation. Historical data should be provided. The process used to evaluate the yield potential should be detailed here.-->
mStable offers interest-earning opportunities on TUSD, USDC, SUSD, and USDT, TUSD, as well as potentially expanding to others in the future. mStable has large markets for: USDC ($12.6m) and TUSD ($16.1m). Stablecoin yields are competitive with riskier DeFi lending markets.

mStable charges a fee on trades which this strategy would incur, which will impact the net yield.

## Risk Evaluation
<!--The potential or attached risk that should be considered for this proposal. Historical data should be provided. The process used to evaluate the risks should be detailed here.-->

**Borrowing / Liquidation Risk Parameters**

  mStable lends deposited assets to Compound and Aave - these are known platforms which acceptable risk parameters (they're already included fully in RAY).

**Interest Rate Models**

  Exact interest rate model withstanding, mStable earns yield for deposited assets from several sources:
  - Exchange fees
  - Lending yield (heavily boosted by the utilization rate of MUSD staked in the Savings feature)
  - Liquidity mining

**Oracle Solution:**

TBD

**Governance**

mStable is a young decentralized ecosystem platform, and is governed by the MTA token. The token votes on asset integration, fees, interest rate models and more.

**Security**

mStable has undergone several audits successfully and has an open bug bounty. The protocol is still being actively developed, but the team follows very strong testing and release standards.

## Specification

The implementation of each function's signature and responsibilities are defined below:

### On-chain
This Opportunity smart contract would follow the current RAY standard `Opportunity.sol` interface.  
mStable integration docs: https://docs.mstable.org/mstable-assets/massets

`function supply(address tokenAddress, uint amount, bool isERC20) external payable;`
- Responsible for supplying the appropriate token [to mStable's exchange pool for MUSD, then depositing the MUSD to the Savings feature] in the amount specified instantly when being called.  

`function withdraw(address tokenAddress, address beneficiary, uint amount, bool isERC20) external;`
- Responsible for withdrawing the appropriate token from mStable in the specified amount instantly when being called, and sending it to the specified beneficiary.

`function getBalance(address tokenAddress) external returns (uint);`
- Responsible for getting the total balance (principal + interest) for the supplied amount in mStable of the specified token's native base units. Example: Lending USDC, this return should be in units of USDC or "mWei".

Additional smart contracts such as mStable-specific interfaces or third-party libraries such as OpenZeppelin can be used to enable clean design and secure implementation.

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

Note, the `modelRates()` off-chain spec. method signature is a bit flexible. This is the only function that doesn't need to be completed. Linking to sources that show/explain how the algorithm works is sufficient.

Implementations should be specific to a coin. In example, if run with an environment variable specifying USDC, all data returned should be relevant to USDC only.

### Submission Deliverables
- Smart contract(s) that implements mStable integration following the [loose] specification, written in Solidity 0.5.11+.
- Smart contract interface that is used in the off-chain files, written in Solidity 0.5.11+.
- A Truffle migration script with the correct order of operations/parameters required to deploy the mStable Lending Opportunity contract.
- Dependency contract address(es) from the mStable system for Mainnet.
- Add support to this opportunity for the coin known as USDC.

### Guidelines
- [Building an Opportunity](https://staked.gitbook.io/staked/ray/contributing#building-an-opportunity)

Each document should have sufficient explanation of the integration specifics, how it maps to the required functionality, and links to relevant sources for acceptance checks to use.

## Rationale
<!--The rationale fleshes out the specification by describing what motivated the design and why particular design decisions were made. It should describe alternate designs that were considered and related work, e.g. how the feature is supported in other languages. The rationale may also provide evidence of consensus within the community, and should discuss important objections or concerns raised during discussion.-->
Adding mStable as an opportunity will give RAY another high yield-generating lending protocol to choose from. It is unique to existing opportunities, and may have higher rates at any given time. They also support several other assets that RAY could extend to in the future.

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

- Pricing conversion between MUSD and USDC (assume it's 1:1 constant)
- Liquidity issues due to mStable "no-slippage" design

## Copyright
Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
