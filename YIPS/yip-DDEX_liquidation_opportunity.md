---
yip: <to be assigned>
title: DDEX Liquidation Opportunity
author: Sam Mitchell @samatstaked
discussions-to: https://discord.gg/nvRCzYp
status: WIP
created: 2020-02-09
---

## Simple Summary
<!--"If you can't explain it simply, you don't understand it well enough." Provide a simplified and layman-accessible explanation of the YIP.-->
DDEX is a decentralized margin trading platform built on Ethereum. DDEX offers up to 5x margin for traders, which requires an intial collateralization ratio of 125%. When an account becomes less than 110% collateralized, the liquidation process can be triggered. When the liquidation process is triggered, DDEX puts up the collateral in a dutch auction. 

The mechanism is as follows (described by DDEX [here](https://ddex.zendesk.com/hc/en-us/articles/360035813033)):

The dutch auction attempts to sell the borrower’s margin balance as needed to repay their debt. However, it doesn’t just start with selling the entire collateral — initially, only a small percentage of the collateral is offered up for auction. As time passes, each subsequent block offers a bit more of the collateral.

Eventually the value of the percentage of collateral offered will make a profitable trade for outsiders. If the auction is completed before 100% of the collateral is used, the remaining collateral will be returned to the borrower, with a small amount going to the initiator as a reward.

If the oracle detects that RAY can liquidate the amount of collateral auctioned off for profit in an atomic transaction then RAY should perform the liquidation.

## Abstract
<!--A short (~200 word) description of the technical issue being addressed.-->
The liquidation opportunity must be described in a smart contract with the opportunity interface in order for RAY to consider it and allocate funds when a liquidation opportunity arises. 

## Motivation
<!--The motivation is critical for YIPs that want to change the RAY protocol. It should clearly explain why the existing protocol specification is inadequate to address the problem that the YIP solves. YIP submissions without sufficient motivation may be rejected outright.-->
Liquidations offer a new source of return for RAY. DDEX, although it has lower volume than other decentralized margin trading platforms, probably also has less competition for it's liquidations.

## Yield Evaluation
<!--The potential added value for extra yield generation. Historical data should be provided. The process used to evaluate the yield potential should be detailed here.-->
To-do: Add historical data

## Risk Evaluation
<!--The potential or attached risk that should be considered for this proposal. Historical data should be provided. The process used to evaluate the risks should be detailed here.-->
Since the liquidation can be undertaken in one atomic transaction, there is limited risk to this strategy. There is a risk in the gas-war process, however.

## Specification
<!--The technical specification should describe the syntax and semantics of any new feature.-->
The specification for this YIP will need to be explored further. Do we want to specify a new standard interface for liquidation opportunities? Or, similar one-block opportunities? For example, the 'getBalance' and 'withdraw' functions don't neccesarily fit within the liquidation paradigm. 

## Rationale
<!--The rationale fleshes out the specification by describing what motivated the design and why particular design decisions were made. It should describe alternate designs that were considered and related work, e.g. how the feature is supported in other languages. The rationale may also provide evidence of consensus within the community, and should discuss important objections or concerns raised during discussion.-->
Liquidations can be a low-risk way for RAY to add alpha.

## Backwards Compatibility
<!--All YIPs that introduce backwards incompatibilities must include a section describing these incompatibilities and their severity. The YIP must explain how the author proposes to deal with these incompatibilities. YIP submissions without a sufficient backwards compatibility treatise may be rejected outright.-->
To-do.

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
