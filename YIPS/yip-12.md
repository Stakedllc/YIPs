---
yip: 12
title: Curve Liquidity Supply Opportunity
author: Devan Purhar @dpurhar27, Sam Mitchell @samatstaked
discussions-to: https://github.com/Stakedllc/YIPs/issues/26
status: WIP
created: 2020-02-12
---

<!--You can leave these HTML comments in your merged YIP and delete the visible duplicate text guides, they will not appear and may be helpful to refer to if you edit it again. This is the suggested template for new YIPs. Note that an YIP number will be assigned by an editor. When opening a pull request to submit your YIP, please use an abbreviated title in the filename, `yip-draft_title_abbrev.md`. The title should be 44 characters or less.-->
## Simple Summary
<!--"If you can't explain it simply, you don't understand it well enough." Provide a simplified and layman-accessible explanation of the YIP.-->
Curve is an automated market maker on Ethereum which focuses on stablecoin pairs. Currently, Curve has two popular pools: cDAI<>cUSDC and cDAI<>cUSDC<>USDT. To be clear, this is a task to integrate with Curve for liquidity supply, and not as an exchange.

## Abstract
<!--A short (~200 word) description of the technical issue being addressed.-->
Curve must be integrated as an opportunity before RAY can allocate assets to the pool. Curve's integration should be general with configuration options such that a number of assets and pools can supported.

## Motivation
<!--The motivation is critical for YIPs that want to change the RAY protocol. It should clearly explain why the existing protocol specification is inadequate to address the problem that the YIP solves. YIP submissions without sufficient motivation may be rejected outright.-->
Adding this Opportunity will potentially boost the yields that RAY can generate. RAY may need to consider hedging, or other methods to reduce the risk of impermament loss - but these considerations are independent of the tooling required to add Curve as an opportunity. 

## Yield Evaluation
<!--The potential added value for extra yield generation. Historical data should be provided. The process used to evaluate the yield potential should be detailed here.-->
Curve pools have generated incredibly high-yields. Observations indicate the cUSDC<>cDAI pool offers returns around 11-12%, while the recently launched cUSDC<>cDAI<>USDT pool has given liquidity providers over a 30% return annualized. To-do: Add concrete historical data.

## Risk Evaluation
<!--The potential or attached risk that should be considered for this proposal. Historical data should be provided. The process used to evaluate the risks should be detailed here.-->
Curve pools are exposed to impermament loss. Risks around stablecoin price volatility and the curve used by the smart contract need to be better understood. Curve's contracts are also fairly new, and therefore exhibit relatively high smart contract risk. They underwent an audit by Trail of Bits. Generally, exchange implementations are less complex, and therefore less risky, than lending protocols.

## Specification
<!--The technical specification should describe the syntax and semantics of any new feature.-->
To-do.

## Rationale
<!--The rationale fleshes out the specification by describing what motivated the design and why particular design decisions were made. It should describe alternate designs that were considered and related work, e.g. how the feature is supported in other languages. The rationale may also provide evidence of consensus within the community, and should discuss important objections or concerns raised during discussion.-->
To-do.

## Backwards Compatibility
<!--All YIPs that introduce backwards incompatibilities must include a section describing these incompatibilities and their severity. The YIP must explain how the author proposes to deal with these incompatibilities. YIP submissions without a sufficient backwards compatibility treatise may be rejected outright.-->
A generic implementation (non hard-coded for limited options) is not possible with the current `Opportunity` interface. A new interface, or extension of the current interface will need to take place. 

## Test Cases
Not required yet.

## Implementation
<!--The implementations must be completed before any YIP is given status "Final", but it need not be completed before the YIP is accepted. While there is merit to the approach of reaching consensus on the specification and rationale before writing code, the principle of "rough consensus and running code" is still useful when it comes to resolving many discussions of API details.-->
Not started yet.

## Copyright
Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
