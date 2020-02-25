---
yip: 13
title: Futureswap Liquidity Supply Opportunity
author: Devan Purhar @dpurhar27, Sam Mitchell @samatstaked
discussions-to: https://discord.gg/ddHep6E
status: WIP
created: 2020-02-24
---

<!--You can leave these HTML comments in your merged YIP and delete the visible duplicate text guides, they will not appear and may be helpful to refer to if you edit it again. This is the suggested template for new YIPs. Note that an YIP number will be assigned by an editor. When opening a pull request to submit your YIP, please use an abbreviated title in the filename, `yip-draft_title_abbrev.md`. The title should be 44 characters or less.-->

## Simple Summary
<!--"If you can't explain it simply, you don't understand it well enough." Provide a simplified and layman-accessible explanation of the YIP.-->
Futureswap is a decentralized futures trading platform built on Ethereum. When traders open a futures position they are charged fees. RAY can deposit liquidity into the platform to passively earn fees.

## Abstract
<!--A short (~200 word) description of the technical issue being addressed.-->
Adding an interface into Futureswap wil allow RAY to deposit funds and earn fees on the platform.

## Motivation
<!--The motivation is critical for YIPs that want to change the RAY protocol. It should clearly explain why the existing protocol specification is inadequate to address the problem that the YIP solves. YIP submissions without sufficient motivation may be rejected outright.-->
Depending on volume of the Futureswap platform, yields could be quite high. If the risk parameters of the platform are set such that the returns justify the risk, then Futureswap could be of significant interest to RAY depositors and help differentiate RAY from platforms where Futureswap is not an option.

## Yield Evaluation
<!--The potential added value for extra yield generation. Historical data should be provided. The process used to evaluate the yield potential should be detailed here.-->
To-do.

## Risk Evaluation
<!--The potential or attached risk that should be considered for this proposal. Historical data should be provided. The process used to evaluate the risks should be detailed here.-->
To-do.

## Specification

The implementation of each function's signature and responsibilities are defined below:

### On-chain
This Opportunity smart contract would follow the current standard `Opportunity.sol` interface.

`function supply(address tokenAddress, uint amount, bool isERC20) external payable;`
- Responsible for supplying the appropriate token to Futureswap's pool in the amount specified instantly when being called.

`function withdraw(address tokenAddress, address beneficiary, uint amount, bool isERC20) external;`
- Responsible for withdrawing the appropriate token from Futureswap's pool in the specified amount instantly when being called, and sending it to the specified beneficiary. If not enough liquidity is available to withdraw funds in the full amount specified instantly, the transaction should fail.

`function getBalance(address tokenAddress) external view returns (uint);`
- Responsible for getting the total balance (principal + interest) for the supplied amount in Futureswap of the specified token's native base units. 

### Off-chain
To-do.

### Submission Deliverables
To-do.

### Guidelines
- [Building an Opportunity](https://staked.gitbook.io/staked/ray/contributing#building-an-opportunity)

Each document should have sufficient explanation of the integration specifics, how it maps to the required functionality, and links to relevant sources for acceptance checks to use.

## Rationale
<!--The rationale fleshes out the specification by describing what motivated the design and why particular design decisions were made. It should describe alternate designs that were considered and related work, e.g. how the feature is supported in other languages. The rationale may also provide evidence of consensus within the community, and should discuss important objections or concerns raised during discussion.-->
To-do.

## Backwards Compatibility
<!--All YIPs that introduce backwards incompatibilities must include a section describing these incompatibilities and their severity. The YIP must explain how the author proposes to deal with these incompatibilities. YIP submissions without a sufficient backwards compatibility treatise may be rejected outright.-->
To-do.

## Test Cases
<!--Test cases for an implementation are mandatory for YIPs that are affecting consensus changes. Other YIPs can choose to include links to test cases if applicable.-->
A lot of the Acceptance Testing will be manual, and not automated. Any testing on integration to help verify correct implementations are welcome.

**Off-chain implementation**
To-do.

**On-chain implementation**
- Manual

**Migration implementation**
- Manual

**Other**
- Manual

To-do.

## Implementation
<!--The implementations must be completed before any YIP is given status "Final", but it need not be completed before the YIP is accepted. While there is merit to the approach of reaching consensus on the specification and rationale before writing code, the principle of "rough consensus and running code" is still useful when it comes to resolving many discussions of API details.-->
To-do.

## Security Considerations
<!--All YIPs must contain a section that discusses the security implications/considerations relevant to the proposed change. Include information that might be important for security discussions, surfaces risks and can be used throughout the life cycle of the proposal. E.g. include security-relevant design decisions, concerns, important discussions, implementation-specific guidance and pitfalls, an outline of threats and risks and how they are being addressed. YIP submissions missing the "Security Considerations" section will be rejected. An YIP cannot proceed to status "Final" without a Security Considerations discussion deemed sufficient by the reviewers.-->
To-do.

## Copyright
Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
