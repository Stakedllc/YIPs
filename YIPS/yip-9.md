---
yip: 9
title: Set Rebalance Auction Opportunity
type: Opportunity
author: Sam Mitchell @samatstaked, Devan Purhar @dpurhar27
discussions-to: https://discord.gg/nvRCzYp
status: Abandoned
created: 2020-02-09
updated: 2020-08-26
---

## Simple Summary
<!--"If you can't explain it simply, you don't understand it well enough." Provide a simplified and layman-accessible explanation of the YIP.-->
Set is a protocol on Ethereum that allows anyone to create a tradable basket of assets. Set protocols have predefined rules that require the composition of assets within a basket to change if certain conditions are met. When the composition of assets must change, Set offers up the tokens in the basket to be exchanged for the desired tokens in a dutch auction. 

According to the Set team ([article](https://medium.com/set-protocol/introducing-the-rebalancing-dashboard-9130e31435d9)), 'the auction differs from traditional dutch auctions in that bids settle immediately or atomically, meaning that bidders receive the outflows tokens in the same transaction as the injection of the inflows. Funds are never locked in the contract.'.

Thus, if the oracle detects that RAY portfolios can benefit from a rebalance then RAY should participate in the Set rebalance to earn additional alpha.

## Abstract
<!--A short (~200 word) description of the technical issue being addressed.-->
The rebalance auction opportunity must be described in a smart contract with the opportunity interface in order for RAY to consider it and allocate funds when an opportunity arises.

## Motivation
<!--The motivation is critical for YIPs that want to change the RAY protocol. It should clearly explain why the existing protocol specification is inadequate to address the problem that the YIP solves. YIP submissions without sufficient motivation may be rejected outright.-->
Rebalance auctions offer a new source of return for RAY.

## Yield Evaluation
<!--The potential added value for extra yield generation. Historical data should be provided. The process used to evaluate the yield potential should be detailed here.-->
To-do: Add historical data. 

## Risk Evaluation
<!--The potential or attached risk that should be considered for this proposal. Historical data should be provided. The process used to evaluate the risks should be detailed here.-->
The greatest risk in this YIP revolves around gas cost since the action is done atomically. 

## Specification
<!--The technical specification should describe the syntax and semantics of any new feature.-->
The specification for this YIP will need to be explored further. Do we want to specify a new standard interface for auction opportunities?

## Rationale
<!--The rationale fleshes out the specification by describing what motivated the design and why particular design decisions were made. It should describe alternate designs that were considered and related work, e.g. how the feature is supported in other languages. The rationale may also provide evidence of consensus within the community, and should discuss important objections or concerns raised during discussion.-->
Auctions can be a low-risk way for RAY to add alpha.

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
