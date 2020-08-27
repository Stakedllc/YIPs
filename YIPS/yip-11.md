---
yip: 11
title: DDEX Lending Opportunity
type: Opportunity
author: Sam Mitchell @samatstaked, Devan Purhar @dpurhar27
discussions-to: https://discord.gg/tgynpaq
status: WIP
created: 2020-02-03
updated: 2020-08-26
---

## Simple Summary
<!--"If you can't explain it simply, you don't understand it well enough." Provide a simplified and layman-accessible explanation of the YIP.-->
DDEX is a decentralized margin trading platform built on Ethereum that launched the current version of their protocol in October 2019. It operates similarly to Compound, dYdX and bZx - users can supply funds to a pool and earn interest, and they can borrow off of posted collateral. 

## Abstract
<!--A short (~200 word) description of the technical issue being addressed.-->
DDEX must be integrated as an opportunity before RAY can allocate funds. Technically, integrating DDEX will be very similar to the existing lending protocol opportunities in RAY.

## Motivation
<!--The motivation is critical for YIPs that want to change the RAY protocol. It should clearly explain why the existing protocol specification is inadequate to address the problem that the YIP solves. YIP submissions without sufficient motivation may be rejected outright.-->
Expanding the opportunity set to include DDEX will give deposited funds another opportunity to outperform the benchmark rate.

## Yield Evaluation
<!--The potential added value for extra yield generation. Historical data should be provided. The process used to evaluate the yield potential should be detailed here.-->
DDEX offers an interest-earning opportunity on ETH, DAI, and USDC. DDEX lending pools size as of the time writing: ETH - 1,548, DAI - 20,000, USDC - 250,000. DDEX therefore offers a substantial opportunity in both ETH and USDC for RAY allocations. According to Loanlist.io, DDEX has an average monthly supply rate of 0.71% on ETH, 5.89% on DAI, and 1.03% on USDC. While the stablecoin yields are relatively unimpressive, the ETH yield is substantially higher than what RAY typically earns.

## Risk Evaluation
<!--The potential or attached risk that should be considered for this proposal. Historical data should be provided. The process used to evaluate the risks should be detailed here.-->
DDEX offers high leverage to traders, 5x, so the risk of lending on DDEX is higher than other lending platforms with higher collateralization ratios. At 5x, traders start at 125% collateralized, and are only available for liquidation once they reach lower than 110%. For comparison, dYdX begins liquidations at the 115% level.

DDEX had a problem with their liquidation mechanism in Novemember of 2019. The ETH price dropped quickly and borrowing positions became undercollateralized. Need to investigate further here.

## Specification

The implementation of each function's signature and responsibilities are defined below:

### On-chain
This Opportunity smart contract would follow the current standard `Opportunity.sol` interface.

`function supply(address tokenAddress, uint amount, bool isERC20) external payable;`
- Responsible for supplying the appropriate token to DDEX's lending pool in the amount specified instantly (in same transaction) when being called.

`function withdraw(address tokenAddress, address beneficiary, uint amount, bool isERC20) external;`
- Responsible for withdrawing the appropriate token from DDEX's lending pool in the specified amount instantly (in same transaction) when being called, and sending it to the specified beneficiary. If not enough liquidity is available to withdraw funds in the full amount specified instantly, the transaction should fail.

`function getBalance(address tokenAddress) external view returns (uint);`
- Responsible for getting the total balance (principal + interest) for the supplied amount in DDEX of the specified token's native base units. Example: Lending ETH, return should be in units of wei. Lending USDC, return should be in units of mWei. In example, if currently have lent 1 ETH, and earnt 0.01 ETH as interest, and queried for the canonical WETH address as `tokenAddress`, the function should return `1010000000000000000`. If currently have lent 1 USDC, and earnt 0.01 USDC as interest, and quereid for the USDC ERC20 address as `tokenAddress`, the function should return `1010000`. 

Additional smart contracts such as DDEX-specific interfaces or third-party libraries such as OpenZeppelin can be used to enable clean and secure design. Other contracts need to be approved by the RAY team.

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
- Smart contract(s) that implements DDEX lending integration following the specification, written in Solidity 0.4.25/0.5.11.
- Smart contract interface that is used in the on/off-chain files, written in Solidity 0.4.25/0.5.11.
- Off-chain file(s) that implements DDEX integration following the specification, written in JS.
- A Truffle migration script with the correct order of operations/parameters required to deploy the DDEX Lending Opportunity contract.
- Dependency contract address(es) from the DDEX system for Mainnet and if possible, Kovan testnet. If Kovan support is not available, reach out to RAY team and discuss options.
- Answers to [these questions](https://github.com/Stakedllc/YIPs/blob/master/implementations/examples/opportunity-support/compound/other/answers.md).
- Add support to this opportunity for ETH, DAI, and USDC.

### Guidelines
- [Building an Opportunity](https://staked.gitbook.io/staked/ray/contributing#building-an-opportunity)

Each document should have sufficient explanation of the integration specifics, how it maps to the required functionality, and links to relevant sources for acceptance checks to use.

## Rationale
<!--The rationale fleshes out the specification by describing what motivated the design and why particular design decisions were made. It should describe alternate designs that were considered and related work, e.g. how the feature is supported in other languages. The rationale may also provide evidence of consensus within the community, and should discuss important objections or concerns raised during discussion.-->
Adding DDEX as an opportunity will give RAY another yield-generating lending protocol to choose between. It is similar to existing opportunities, but may have higher rates at any given time. They also support several other assets that RAY could extend to in the future.

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
Follow [this submission](https://github.com/Stakedllc/YIPs/tree/master/implementations/examples/opportunity-support/compound) as an example. Directory of the submission should be `./implementations/opportunity-support/ddex/`

## Security Considerations
<!--All YIPs must contain a section that discusses the security implications/considerations relevant to the proposed change. Include information that might be important for security discussions, surfaces risks and can be used throughout the life cycle of the proposal. E.g. include security-relevant design decisions, concerns, important discussions, implementation-specific guidance and pitfalls, an outline of threats and risks and how they are being addressed. YIP submissions missing the "Security Considerations" section will be rejected. An YIP cannot proceed to status "Final" without a Security Considerations discussion deemed sufficient by the reviewers.-->
To-do.

## Copyright
Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
