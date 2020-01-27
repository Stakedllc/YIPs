---
yip: 2
title: Uniswap ETH/WETH Opportunity
author: Devan Purhar <@dpurhar27>, Sam Mitchell <@samatstaked>
discussions-to: https://github.com/Stakedllc/YIPs/issues/5
status: WIP
created: 2020-01-27
---

<!--You can leave these HTML comments in your merged YIP and delete the visible duplicate text guides, they will not appear and may be helpful to refer to if you edit it again. This is the suggested template for new YIPs. Note that an YIP number will be assigned by an editor. When opening a pull request to submit your YIP, please use an abbreviated title in the filename, `yip-draft_title_abbrev.md`. The title should be 44 characters or less.-->
## Simple Summary
<!--"If you can't explain it simply, you don't understand it well enough." Provide a simplified and layman-accessible explanation of the YIP.-->
Add a new Opportunity for the ETH portfolios - the Uniswap ETH/WETH liquidity pool.

## Abstract
<!--A short (~200 word) description of the technical issue being addressed.-->
RAY strives to earn the best passive yield possible on assets supported. Adding this Opportunity will help do that for the ETH asset.

## Motivation
<!--The motivation is critical for YIPs that want to change the RAY protocol. It should clearly explain why the existing protocol specification is inadequate to address the problem that the YIP solves. YIP submissions without sufficient motivation may be rejected outright.-->
Adding this Opportunity will potentially boost ETH yields that RAY can generate, as well as generally give RAY more options to consider, while it fits the passive yield framework. 

## Specification
<!--The technical specification should describe the syntax and semantics of any new feature.-->
This additional Opportunity would follow the current standard 'Opportunity' interface.

`function supply(address tokenAddress, uint amount, bool isERC20) external payable;`
- The implementation would be responsible for dividing the ETH into 50% ETH, 50% WETH, then providing it as liquidity to the Uniswap ETH/WETH pool.

`function withdraw(address tokenAddress, address beneficiary, uint amount, bool isERC20) external;`
- The implementation would be responsible for withdrawing an amount of liquidity from the Uniswap ETH/WETH pool and converting the WETH into ETH.

`function getBalance(address tokenAddress) external view returns (uint);`
- The implementation would be responsible for getting the total balance (principal + interest) for the supplied liquidity.

## Rationale
<!--The rationale fleshes out the specification by describing what motivated the design and why particular design decisions were made. It should describe alternate designs that were considered and related work, e.g. how the feature is supported in other languages. The rationale may also provide evidence of consensus within the community, and should discuss important objections or concerns raised during discussion.-->
Adhere's to the existing Opportunity specification because it satisfies all needs of this feature and makes it easier to add to RAY.

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
