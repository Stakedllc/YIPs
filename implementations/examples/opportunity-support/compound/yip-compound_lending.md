---
yip: Example
title: Compound Lending Opportunity
author: Devan Purhar @dpurhar27
discussions-to: N/A
status: Final
created: N/A
---

## Simple Summary
<!--"If you can't explain it simply, you don't understand it well enough." Provide a simplified and layman-accessible explanation of the YIP.-->
Compound is a pooled lending protocol on Ethereum. Users can supply funds to a pool and earn interest on several coins RAY supports.

## Abstract
<!--A short (~200 word) description of the technical issue being addressed.-->
Compound must be integrated as an opportunity before RAY can allocate funds to it.

## Motivation
<!--The motivation is critical for YIPs that want to change the RAY protocol. It should clearly explain why the existing protocol specification is inadequate to address the problem that the YIP solves. YIP submissions without sufficient motivation may be rejected outright.-->
Expanding the opportunity set to include Compound will give deposited funds another opportunity to earn yield.

## Yield Evaluation
<!--The potential added value for extra yield generation. Historical data should be provided. The process used to evaluate the yield potential should be detailed here.-->
Compound offers an interest-earning opportunity on ETH, DAI, and USDC. They also has very large amounts of liquidity, meaning RAY can allocate a meaningful portion of funds without driving down the supply rate.

## Risk Evaluation
<!--The potential or attached risk that should be considered for this proposal. Historical data should be provided. The process used to evaluate the risks should be detailed here.-->
Compound has been running without issue for over a year. They've performed several audits. The platform has handled north of 200MM assets. It is one of the most battle-tested smart contract platforms in the on-chain lending space.

## Specification
<!--The technical specification should describe the syntax and semantics of any new feature.-->

The implementation of each function's signature and responsibilities are defined below:

### On-chain
This Opportunity smart contract would follow the current standard `Opportunity.sol` interface.

`function supply(address tokenAddress, uint amount, bool isERC20) external payable;`
- Responsible for supplying the appropriate token to Compound's lending pool in the amount specified instantly when being called.

`function withdraw(address tokenAddress, address beneficiary, uint amount, bool isERC20) external;`
- Responsible for withdrawing the appropriate token from Compound's lending pool in the specified amount instantly when being called, and sending it to the specified beneficiary.

`function getBalance(address tokenAddress) external view returns (uint);`
- Responsible for getting the total balance (principal + interest) for the supplied amount in Compound of the specified token's native base units. Example: Lending ETH, return should be in units of wei.

Additional smart contracts such as Compound-specific interfaces or third-party libraries such as OpenZeppelin can be used to enable clean design.

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
- Smart contract(s) that implements Compound integration following the specification, written in Solidity 0.4.25/0.5.11.
- Smart contract interface that is used in the off-chain files, written in Solidity 0.4.25/0.5.11.
- Off-chain file(s) that implements Compound integration following the specification, written in JS.
- A Truffle migration script with the correct order of operations/parameters required to deploy the Compound Lending Opportunity contract.
- Dependency contract address(es) from the Compound system for Mainnet and if possible, Kovan testnet. If Kovan support is not available, reach out to team and discuss options.
- Answers to [these questions](https://github.com/Stakedllc/YIPs/blob/master/implementations/examples/opportunity-support/compound/other/answers.md).
- Add support to this opportunity for ETH, DAI, USDC and SAI.

### Guidelines
- [Building an Opportunity](https://staked.gitbook.io/staked/ray/contributing#building-an-opportunity)

Each document should have sufficient explanation of the integration specifics, how it maps to the required functionality, and links to relevant sources for acceptance checks to use.

## Rationale
<!--The rationale fleshes out the specification by describing what motivated the design and why particular design decisions were made. It should describe alternate designs that were considered and related work, e.g. how the feature is supported in other languages. The rationale may also provide evidence of consensus within the community, and should discuss important objections or concerns raised during discussion.-->
Adding Compound as an opportunity will give RAY another yield-generating lending protocol to choose between. It is similar to existing lending opportunities.

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
3. `yarn run integration` - note env. variables `WEB3_HTTP_PROVIDER` and `COIN` need to be supplied. Valid values for `COIN` include: `ETH`, `DAI`, `USDC`, `SAI`
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
- Smart contracts implementation located at `./contracts`
- Off-chain files implementation located at `./js`
- Migration script implementation located at `./migrations`
- Dependency contract addresses located at `./other`

## Security Considerations
<!--All YIPs must contain a section that discusses the security implications/considerations relevant to the proposed change. Include information that might be important for security discussions, surfaces risks and can be used throughout the life cycle of the proposal. E.g. include security-relevant design decisions, concerns, important discussions, implementation-specific guidance and pitfalls, an outline of threats and risks and how they are being addressed. YIP submissions missing the "Security Considerations" section will be rejected. An YIP cannot proceed to status "Final" without a Security Considerations discussion deemed sufficient by the reviewers.-->
To-do.
