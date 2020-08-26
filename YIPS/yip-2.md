---
yip: 2
title: Uniswap V2 Opportunity
author: Devan Purhar @dpurhar27, Sam Mitchell @samatstaked
discussions-to: https://discord.gg/qAsBaAM
status: WIP
created: 2020-01-27
updated: 2020-08-25
---

<!--You can leave these HTML comments in your merged YIP and delete the visible duplicate text guides, they will not appear and may be helpful to refer to if you edit it again. This is the suggested template for new YIPs. Note that an YIP number will be assigned by an editor. When opening a pull request to submit your YIP, please use an abbreviated title in the filename, `yip-draft_title_abbrev.md`. The title should be 44 characters or less.-->
## Simple Summary
<!--"If you can't explain it simply, you don't understand it well enough." Provide a simplified and layman-accessible explanation of the YIP.-->
Add Uniswap V2 liquidity supplying as an opportunity. Valid pools are those with "same peg assets" - for example, USDT<>USDC. 

## Abstract
<!--A short (~200 word) description of the technical issue being addressed.-->
Same peg pools can earn significant returns through trading fees. Since RAY takes in single asset deposits - such as ETH, DAI, and USDC - fees and slippage from entering and exiting the pool must be considered in modeling the opportunity. 

## Motivation
<!--The motivation is critical for YIPs that want to change the RAY protocol. It should clearly explain why the existing protocol specification is inadequate to address the problem that the YIP solves. YIP submissions without sufficient motivation may be rejected outright.-->
Adding this Opportunity will potentially boost the yields that RAY can generate and the opportunity fits in the passive yield framework. 

## Yield Evaluation
<!--The potential added value for extra yield generation. Historical data should be provided. The process used to evaluate the yield potential should be detailed here.-->
Uniswap V2 is modeled in the [YIPs dashboard](https://app.redash.io/staked/public/dashboards/djXVmljfvx4NkXIWSWP4tIhIaU71SGIu3bnZRXkS). Currently, the model takes into account the fixed swap fee of entering and exiting the pool with a single asset (0.3%). It does not take into account slippage, however.

## Risk Evaluation
<!--The potential or attached risk that should be considered for this proposal. Historical data should be provided. The process used to evaluate the risks should be detailed here.-->
Risks include:
- costs of entering / exiting the pool
- peg risk
- smart contract risk

## Specification
<!--The technical specification should describe the syntax and semantics of any new feature.-->
This additional Opportunity would follow the current standard 'Opportunity' interface.

`function supply(address tokenAddress, uint amount, bool isERC20) external payable;`
- The implementation would be responsible for dividing the deposit asset into the composition of the underlying pool and supplying the liquidity.

`function withdraw(address tokenAddress, address beneficiary, uint amount, bool isERC20) external;`
- The implementation would be responsible for withdrawing an amount of liquidity from the Uniswap V2 pool and converting it into the deposit asset.

`function getBalance(address tokenAddress) external view returns (uint);`
- The implementation would be responsible for getting the total balance (principal + interest) for the supplied liquidity, measured in the original deposit asset. This function should take into account slippage and trading fees.

## Rationale
<!--The rationale fleshes out the specification by describing what motivated the design and why particular design decisions were made. It should describe alternate designs that were considered and related work, e.g. how the feature is supported in other languages. The rationale may also provide evidence of consensus within the community, and should discuss important objections or concerns raised during discussion.-->
Since RAY is depositing a single asset into the opportunity, the specification should adhere to the expectation of supplying and withdrawing the deposited asset.

## Backwards Compatibility
<!--All YIPs that introduce backwards incompatibilities must include a section describing these incompatibilities and their severity. The YIP must explain how the author proposes to deal with these incompatibilities. YIP submissions without a sufficient backwards compatibility treatise may be rejected outright.-->
This YIP is fully backwards compatible, and would be added as an additional Opportunity contract that adheres to the current Opportunity interface.

## Test Cases
Not required yet.

## Implementation
<!--The implementations must be completed before any YIP is given status "Final", but it need not be completed before the YIP is accepted. While there is merit to the approach of reaching consensus on the specification and rationale before writing code, the principle of "rough consensus and running code" is still useful when it comes to resolving many discussions of API details.-->
Not started yet.

## Copyright
Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
