---
yip: 6
title: Maker Collateral Auction Opportunity
author: Sam Mitchell @samatstaked, Devan Purhar @dpurhar27
discussions-to: https://discord.gg/nvRCzYp
status: WIP
created: 2020-02-08
---

## Simple Summary
<!--"If you can't explain it simply, you don't understand it well enough." Provide a simplified and layman-accessible explanation of the YIP.-->
Maker is a decentralized organization behind the Dai stablecoin. Dai is minted when collateral is locked into a Maker vault. When the collateral reaches an unsafe level, it is auctioned off. RAY can profit off of collateral options by using DAI to purchase auctioned collateral, swapping the collateral for DAI, and finally returning the DAI to the pool.

The following is Maker's [explanation](https://docs.makerdao.com/auctions/the-auctions-of-the-maker-protocol) of a collateral auction:

If the price of that collateral drops to the point where a Vault no longer sustains the required collateralization ratio, then the system automatically liquidates the Vault and sells off the collateral until the outstanding debt in the Vault (and a liquidation penalty), is covered. This is done through a Collateral Auction.

Liquidation Details:

When a liquidation occurs, a liquidator may repay some or all of an outstanding borrow on behalf of a borrower and in return receive a discounted amount of collateral held by the borrower.

A liquidator may close up to a certain fixed percentage (i.e. close factor) of any individual outstanding borrow of the unsafe account. When collateral is seized, the liquidator is transferred cTokens, which they may redeem the same as if they had supplied the asset themselves.

## Abstract
<!--A short (~200 word) description of the technical issue being addressed.-->
The collateral auction opportunity must be described in a smart contract with the opportunity interface in order for RAY to consider it and allocate funds when an opportunity arises. 

## Motivation
<!--The motivation is critical for YIPs that want to change the RAY protocol. It should clearly explain why the existing protocol specification is inadequate to address the problem that the YIP solves. YIP submissions without sufficient motivation may be rejected outright.-->
Collateral auctions offer a new source of return for RAY.

## Yield Evaluation
<!--The potential added value for extra yield generation. Historical data should be provided. The process used to evaluate the yield potential should be detailed here.-->
To-do: Add historical data. 

## Risk Evaluation
<!--The potential or attached risk that should be considered for this proposal. Historical data should be provided. The process used to evaluate the risks should be detailed here.-->
Maker collateral auctions last multi-block periods so there is price risk here. There is a risk that the bid sent by RAY for collateral is above the market bid price when the collateral auction ends. Resulting in a loss of funds. This risk will largely need to be mitigated by the oracle. 

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
