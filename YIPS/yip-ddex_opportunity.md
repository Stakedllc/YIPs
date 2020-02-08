
---
yip: <to be assigned>
title: DDEX Lending Opportunity
author: Devan Purhar @dpurhar27, Sam Mitchell <sam@staked.us>
discussions-to: https://discord.gg/nvRCzYp
status: WIP
created: 2020-02-03
---

## Simple Summary
<!--"If you can't explain it simply, you don't understand it well enough." Provide a simplified and layman-accessible explanation of the YIP.-->
DDEX is a decentralized margin trading platform built on Ethereum that launched mid-August 2019. It operates similarly to Compound, dYdX and bZx - users can supply funds to a pool and earn interest, and they can borrow off of posted collateral. 
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
DDEX had a problem with their liquidation mechanism in Novemember of 2019. The ETH price dropped quickly and borrowing positions became undercollateralized. DDEX offers high leverage to traders, 5x, so the risk of lending on DDEX is higher than other lending platforms with higher collateralization ratios.

## Specification
<!--The technical specification should describe the syntax and semantics of any new feature.-->
This additional Opportunity would follow the current standard 'Opportunity' interface.

function supply(address tokenAddress, uint amount, bool isERC20) external payable;
- The implementation would be responsible for supplying the appropriate token to DDEX's lending pool.

function withdraw(address tokenAddress, address beneficiary, uint amount, bool isERC20) external;
- The implementation would be responsible for withdrawing the appropriate token from DDEX's lending pool.

function getBalance(address tokenAddress) external view returns (uint);
- The implementation would be responsible for getting the total balance (principal + interest) for the supplied balance.

## Rationale
<!--The rationale fleshes out the specification by describing what motivated the design and why particular design decisions were made. It should describe alternate designs that were considered and related work, e.g. how the feature is supported in other languages. The rationale may also provide evidence of consensus within the community, and should discuss important objections or concerns raised during discussion.-->
Adding DDEX as an opportunity will give RAY another yield-generating lending protocol to choose between. It is similar to existing opportunities, but may have higher rates at any given time.

## Backwards Compatibility
<!--All YIPs that introduce backwards incompatibilities must include a section describing these incompatibilities and their severity. The YIP must explain how the author proposes to deal with these incompatibilities. YIP submissions without a sufficient backwards compatibility treatise may be rejected outright.-->
Backwards compatible.

## Test Cases
<!--Test cases for an implementation are mandatory for YIPs that are affecting consensus changes. Other YIPs can choose to include links to test cases if applicable.-->
To-do.

## Implementation
<!--The implementations must be completed before any YIP is given status "Final", but it need not be completed before the YIP is accepted. While there is merit to the approach of reaching consensus on the specification and rationale before writing code, the principle of "rough consensus and running code" is still useful when it comes to resolving many discussions of API details.-->
To-do.

## Security Considerations
<!--All YIPs must contain a section that discusses the security implications/considerations relevant to the proposed change. Include information that might be important for security discussions, surfaces risks and can be used throughout the life cycle of the proposal. E.g. include security-relevant design decisions, concerns, important discussions, implementation-specific guidance and pitfalls, an outline of threats and risks and how they are being addressed. YIP submissions missing the "Security Considerations" section will be rejected. An YIP cannot proceed to status "Final" without a Security Considerations discussion deemed sufficient by the reviewers.-->
To-do.

## Copyright
Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
