---
yip: 15
title: Recursive COMP Farming
author: Jonathan Marcus @jonathanmarcus, Devan Purhar @dpurhar27, Sam Mitchell @samatstaked
discussions-to: https://discord.gg/rQ3WRJE
status: WIP
created: 2020-08-25
---

<!--You can leave these HTML comments in your merged YIP and delete the visible duplicate text guides, they will not appear and may be helpful to refer to if you edit it again. This is the suggested template for new YIPs. Note that an YIP number will be assigned by an editor. When opening a pull request to submit your YIP, please use an abbreviated title in the filename, `yip-draft_title_abbrev.md`. The title should be 44 characters or less.-->
## Simple Summary
<!--"If you can't explain it simply, you don't understand it well enough." Provide a simplified and layman-accessible explanation of the YIP.-->
Open a single asset lend / borrow position (e.g. DAI / DAI, ETH / ETH, wBTC / wBTC) on Compound using recursive leverage to increase the notional position size for the purpose of maximizing COMP token earnings. Since COMP is earned for both lending and borrowing, the optimal COMP generation strategy is to maximize the notional lending and borrowing volume.

## Abstract
<!--A short (~200 word) description of the technical issue being addressed.-->
Each asset on Compound has a collateral factor that determines borrowing leverage. For example, DAI and ETH both have a cFactor of 75%. For every $100 of collateral supplied, a user can borrow $75 in debt. Additionally, the cFactor is used to determine the amount of notional leverage a user can use with recursive leverage according to the formula 1 / (1 - cFactor) = the notional leverage multiple. For example, for every $100 in principal of DAI with a cFactor of 75%, a user can lend 1 / (1 - .75) = $400 of cDAI collateral, and borrow $400 * 75% = $300 of DAI debt.

## Motivation
<!--The motivation is critical for YIPs that want to change the RAY protocol. It should clearly explain why the existing protocol specification is inadequate to address the problem that the YIP solves. YIP submissions without sufficient motivation may be rejected outright.-->
Adding this Opportunity will potentially boost yields that RAY can generate, as well as generally give RAY more options to consider, while it fits the passive yield framework. 

## Yield Evaluation
<!--The potential added value for extra yield generation. Historical data should be provided. The process used to evaluate the yield potential should be detailed here.-->
[YIPs dashboard](https://app.redash.io/staked/public/dashboards/djXVmljfvx4NkXIWSWP4tIhIaU71SGIu3bnZRXkS)

## Risk Evaluation
<!--The potential or attached risk that should be considered for this proposal. Historical data should be provided. The process used to evaluate the risks should be detailed here.-->
Since the same asset is being both lent and borrowed, and a user must only maintain collateral ratio, there is no direct risk of liquidation from underlying spot price volatility. If the price of ETH decreases by 50%, collateral is not at risk of being liquidated because both the numerator and denominator used to determine the collateral ratio move in tandem.

There is however interest accrual risk. Assuming the borrow rate > supply rate, as interest accrues, the user’s collateral factor decreases. It’s therefore possible to accrue enough interest to fall below the required cFactor, resulting in a liquidation. Interest accrual risk can be minimized by maintaining a higher cFactor than is required by borrowing less than the maximum allowed.

Depending upon the lend and borrow rates, it’s actually possible to have a recursive position with a positive net APY (or a net negative borrow cost). For example, the current DAI / DAI net APY is ~ 0.65%.

## Specification
<!--The technical specification should describe the syntax and semantics of any new feature.-->
This additional Opportunity would follow the current standard 'Opportunity' interface.

`function supply(address tokenAddress, uint amount, bool isERC20) external payable;`
- The implementation would be responsible for recurively leveraging the deposited asset on Compound.

`function withdraw(address tokenAddress, address beneficiary, uint amount, bool isERC20) external;`
- The implementation would be responsible for withdrawing and deleveraging the position on Compound.

`function getBalance(address tokenAddress) external view returns (uint);`
- The implementation would be responsible for getting the total balance (principal + interest gained - interest cost + COMP earned in terms of the deposited asset) for the opportunity.

## Rationale
<!--The rationale fleshes out the specification by describing what motivated the design and why particular design decisions were made. It should describe alternate designs that were considered and related work, e.g. how the feature is supported in other languages. The rationale may also provide evidence of consensus within the community, and should discuss important objections or concerns raised during discussion.-->
To-Do.

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
