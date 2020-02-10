---
yip: <to be assigned>
title: bZx Bounty Hunter Opportunity
author: Sam Mitchell @samatstaked
discussions-to: https://discord.gg/nvRCzYp
status: WIP
created: 2020-02-09
---

## Simple Summary
<!--"If you can't explain it simply, you don't understand it well enough." Provide a simplified and layman-accessible explanation of the YIP.-->
bZx is a decentralized lending and borrowing platform built on Ethereum. Users or smart contracts can deposit collateral which accumulates interest, and if they choose depositors can borrow off of their collateral. To ensure the collateral safely backs each outstanding borrow, bZx allows outside actors (called bounty hunters) to call the liquidate function when accounts are below their required margin maintenance. The liquidate function then sends the funds to Kyber to liquidated, so this opportunity requires only gas an input. The oracle responsible for RAY should call the liquidate function, then add the funds to each portfolio respectively.

The reward for calling the liquidate function on an underwater account is described by the bZx team [here](https://medium.com/bzxnetwork/introducing-fulcrum-tokenized-margin-made-dead-simple-e65ccc82393f): 

'the bounty hunter that called liquidate() is then compensated from a portion of the borrower’s collateral. This compensation is based on an exponential moving average (EMA) of previous gas prices constructed through prior interactions with the contract. The only gas price not considered when constructing the EMA is the calling of liquidate() itself. The EMA has a lookback window of ten transactions and discards outliers when gas price > 2x + 5, where x is the current EMA value.'

## Abstract
<!--A short (~200 word) description of the technical issue being addressed.-->
The bounty hunter opportunity must be described in a smart contract with the opportunity interface in order for RAY to consider it and allocate funds when a liquidation opportunity arises. 

## Motivation
<!--The motivation is critical for YIPs that want to change the RAY protocol. It should clearly explain why the existing protocol specification is inadequate to address the problem that the YIP solves. YIP submissions without sufficient motivation may be rejected outright.-->
Acting as a bounty hunter can be profitable for RAY. It could be that because RAY already has to rely on oracle functionality and infrastructure (as it stands now) that adding the ability to act as a bounty hunter is marginally more profitable for RAY than external actors. 

## Yield Evaluation
<!--The potential added value for extra yield generation. Historical data should be provided. The process used to evaluate the yield potential should be detailed here.-->
To-do: Add historical data.

## Risk Evaluation
<!--The potential or attached risk that should be considered for this proposal. Historical data should be provided. The process used to evaluate the risks should be detailed here.-->
The only risk is that the potential reward for calling liquidate() is less than the total gas cost to call liquidate().

## Specification
<!--The technical specification should describe the syntax and semantics of any new feature.-->
The specification for this YIP will need to be explored further. Do we want to specify a new standard interface for liquidation opportunities? Does this fit into a possible standard interface for liquidations? Can we create a specification that allows RAY to mimize gas cost?

## Rationale
<!--The rationale fleshes out the specification by describing what motivated the design and why particular design decisions were made. It should describe alternate designs that were considered and related work, e.g. how the feature is supported in other languages. The rationale may also provide evidence of consensus within the community, and should discuss important objections or concerns raised during discussion.-->
Acting as a bounty hunter can be a low-risk way for RAY to add alpha.

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
