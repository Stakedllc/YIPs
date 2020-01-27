---
yip: 1
title: YIP Purpose and Guidelines
status: WIP
author: Devan Purhar <devan@staked.us>
        https://github.com/Stakedllc/YIPs/blob/master/YIPS/yip-1.md
created: 2020-01-24
updated: n/a
---

## What is an YIP?

YIP stands for Yield Improvement Proposal. An YIP is a design document providing information to the Robo-Advisor for Yield (RAY) community, or describing a new feature for RAY or its processes or environment. The purpose of this process is to ensure changes to RAY are transparent and open to contribution from the community. The YIP should provide a concise technical specification of the feature and a rationale for the feature. The YIP author is responsible for building consensus within the community and documenting dissenting opinions.

This has been adapted from the EIP (Ethereum Improvement Proposal) and the YIP (Synthetix Improvement Proposal).

## YIP Rationale

We intend YIPs to be the primary mechanisms for proposing new features, for collecting community input on an issue, and for documenting the design decisions for RAY. Because the YIPs are maintained as text files in a versioned repository, their revision history is the historical record of the feature proposal.

## YIP Work Flow

Actors involved in the process are the *authors*, the [*YIP editors*](#yip-editors), and the [RAY Engineering Team].

It is highly recommended that a single YIP contain a single key proposal or new idea. The more focused the YIP, the more successful it tends to be.

An YIP must meet certain minimum criteria. It must be a clear and complete description of the proposed enhancement. The enhancement must represent a net improvement.

Before you begin this formal process, informally propose your idea to the RAY community to receive early feedback and critic. Ask if an idea is original to avoid wasting time on something that will be rejected based on prior research.

Your role as the champion is to write the YIP using the style and format described below. In addition to making sure your idea is original, it will be your role as the author to make your idea clear to reviewers and interested parties, as well as inviting editors, developers and community to give feedback on the aforementioned channels. Build community consensus around the idea. You should try and gauge whether the interest in your YIP is commensurate with both the work involved in implementing it and how many parties will have to conform to it. Negative community feedback will be taken into consideration and may prevent your YIP from moving past the 'WIP' stage.

### YIP Process

Following is the process that a successful YIP will move along:

```
[ WIP ] -> [ PROPOSED ] -> [ ACCEPTED ] -> [ ACTIVE ]
```

Each status change is requested by the YIP author and reviewed by the YIP editors. Use a pull request to update the status. Please include a link to where reviewers should continue discussing your YIP. The YIP editors will process these requests as per the conditions below.

* **WIP** - Once the champion has initially tested the idea on the RAY community, assuming positive response, they will write a draft YIP as a [pull request].
* **Proposed** - If agreeable, YIP editor will assign the YIP a number (generally the issue or PR number related to the YIP) and merge your pull request. The YIP editor will not unreasonably deny an YIP. Proposed YIPs will be discussed in Discord. If there is a reasonable level of consensus around the change in the community, the change will be moved to 'Accepted'. If the change is contentious a vote of stakeholders may be held to resolve the issue or approval may be delayed until consensus is reached.
* **Accepted** - a YIP that the community and developers have decided to implement and release in a future upgrade.
* **Active** - a YIP that has been implemented and released.

## What belongs in a successful YIP?

Each YIP should have the following parts:

- Preamble - RFC 822 style headers containing metadata about the YIP, including the YIP number, a short descriptive title (limited to a maximum of 44 characters), and the author details.
- Abstract - A short (~200 word) description of the issue being addressed in layman terms.
- Motivation (*optional) - The motivation is critical for YIPs that want to change RAY. It should clearly explain why the existing specification is inadequate to address the problem that the YIP solves. YIP submissions without sufficient motivation may be rejected outright.
- Specification - The technical specification should describe the syntax and semantics of any new feature.
- Rationale - The rationale fleshes out the specification by describing what motivated the design and why particular design decisions were made. It should describe alternate designs that were considered and related work, e.g. how the feature is supported in other languages. The rationale may also provide evidence of consensus within the community, and should discuss important objections or concerns raised during discussion.
- Backwards Compatibility - All YIPs that introduce backwards incompatibilities must include a section describing these incompatibilities and their severity. The YIP must explain how the author proposes to deal with these incompatibilities. YIP submissions without a sufficient backwards compatibility treatise may be rejected outright.
- Test Cases - Test cases may be added during the implementation phase but are required before implementation.
- Implementations - The implementations must be completed before any YIP is given status “Final”, but it need not be completed before the YIP is merged as draft. While there is merit to the approach of reaching consensus on the specification and rationale before writing code, the principle of “rough consensus and running code” is still useful when it comes to resolving many discussions of API details.
- Security Considerations - All YIPs must contain a section that discusses the security implications/considerations relevant to the proposed change. Include information that might be important for security discussions, surfaces risks and can be used throughout the life cycle of the proposal. E.g. include security-relevant design decisions, concerns, important discussions, implementation-specific guidance and pitfalls, an outline of threats and risks and how they are being addressed. YIP submissions missing the "Security Considerations" section will be rejected. An YIP cannot proceed to status "Final" without a Security Considerations discussion deemed sufficient by the reviewers.
- Copyright Waiver - All YIPs must be in the public domain. See the bottom of this YIP for an example copyright waiver.

## YIP Formats and Templates

YIPs should be written in [markdown] format.
Image files should be included in a subdirectory of the `assets` folder for that YIP as follows: `assets/yip-X` (where **X** is to be replaced with the YIP number). When linking to an image in the YIP, use relative links such as `../assets/yip-1/image.png`.

## YIP Header Preamble

Each YIP must begin with an [RFC 822](https://www.ietf.org/rfc/rfc822.txt) style header preamble, preceded and followed by three hyphens (`---`). This header is also termed ["front matter" by Jekyll](https://jekyllrb.com/docs/front-matter/). The headers must appear in the following order. Headers marked with "*" are optional and are described below. All other headers are required.

` yip:` *YIP number* (this is determined by the YIP editor)

` title:` *YIP title*

` author:` *a list of the author's or authors' name(s) and/or username(s), or name(s) and email(s). Details are below.*

` * discussions-to:` *a url pointing to the official discussion chat*

` status:` *WIP | Proposed | Accepted | Active | Rejected*

`* review-period-end:` *date review period ends*

` created:` *date created on*

` * updated:` *comma separated list of dates*

` * requires:` *YIP number(s)*

` * replaces:` *YIP number(s)*

` * superseded-by:` *YIP number(s)*

` * resolution:` *a url pointing to the resolution of this YIP*

Headers that permit lists must separate elements with commas.

Headers requiring dates will always do so in the format of ISO 8601 (yyyy-mm-dd).

#### `author` header

The `author` header optionally lists the names, email addresses or usernames of the authors/owners of the YIP. Those who prefer anonymity may use a username only, or a first name and a username. The format of the author header value must be:

> Random J. User &lt;address@dom.ain&gt;

or

> Random J. User (@username)

if the email address or GitHub username is included, and

> Random J. User

if the email address is not given.

#### `discussions-to` header

While an YIP is a 'WIP' or 'Proposed', a `discussions-to` header will indicate the mailing list or URL where the YIP is being discussed.

#### `created` header

The `created` header records the date that the YIP was assigned a number. Both headers should be in yyyy-mm-dd format, e.g. 2001-08-14.

#### `updated` header

The `updated` header records the date(s) when the YIP was updated with "substantial" changes. This header is only valid for YIPs of Draft and Active status.

#### `requires` header

YIPs may have a `requires` header, indicating the YIP numbers that this YIP depends on.

#### `superseded-by` and `replaces` headers

YIPs may also have a `superseded-by` header indicating that an YIP has been rendered obsolete by a later document; the value is the number of the YIP that replaces the current document. The newer YIP must have a `replaces` header containing the number of the YIP that it rendered obsolete.

## Auxiliary Files

YIPs may include auxiliary files such as diagrams. Such files must be named YIP-XXXX-Y.ext, where “XXXX” is the YIP number, “Y” is a serial number (starting at 1), and “ext” is replaced by the actual file extension (e.g. “png”).


## YIP Editors

The current YIP editors are

` * Tim Ogilvie (@timogilvie)`

` * Seth Riney (@sriney-staked)`

` * Jonathan Marcus (@jonathanmarcus)`

` * Devan Purhar (@dpurhar27)`

` * Cole Kennelly (@colekennelly1)`

` * Tucker Chapin (@tuckerchapin)`

## YIP Editor Responsibilities

For each new YIP that comes in, an editor does the following:

- Read the YIP to check if it is ready: sound and complete. The ideas must make technical sense, even if they don't seem likely to get to final status.
- The title should accurately describe the content.
- Check the YIP for language (spelling, grammar, sentence structure, etc.), markup (GitHub flavored Markdown), code style

If the YIP isn't ready, the editor will send it back to the author for revision, with specific instructions.

Once the YIP is ready for the repository, the YIP editor will:

- Assign an YIP number (generally the PR number or, if preferred by the author, the Issue # if there was discussion in the Issues section of this repository about this YIP)

- Merge the corresponding pull request

- Send a message back to the YIP author with the next step.

Many YIPs are written and maintained by developers with write access to the RAY codebase. The YIP editors monitor YIP changes, and correct any structure, grammar, spelling, or markup mistakes we see.

The editors don't pass judgment on YIPs. We merely do the administrative & editorial part.

## History

The YIP document was derived heavily from the EIP (Ethereum Improvement Proposal) and small changes were influenced by the SIP (Synthetix Improvement Proposal). The SIP document was also heavily derived off the EIP document. In many places text was simply copied and modified. Any comments about the YIP document should be directed to the YIP editors.

The history of the EIP is quoted below from the EIP document for context:

* *"This document (EIP) was derived heavily from [Bitcoin's BIP-0001] written by Amir Taaki which in turn was derived from [Python's PEP-0001]. In many places text was simply copied and modified. Although the PEP-0001 text was written by Barry Warsaw, Jeremy Hylton, and David Goodger, they are not responsible for its use..."* *

The history of the SIP is quoted below from the SIP document for context:

* *"The SIP document was derived heavily from the EIP Ethereum Improvement Proposal document in many places text was simply copied and modified. Any comments about the SIP document should be directed to the SIP editors. The history of the EIP is quoted below from the EIP document  for context:

This document (EIP) was derived heavily from [Bitcoin's BIP-0001] written by Amir Taaki which in turn was derived from [Python's PEP-0001]. In many places text was simply copied and modified. Although the PEP-0001 text was written by Barry Warsaw, Jeremy Hylton, and David Goodger, they are not responsible for its use..."* *


January 24, 2020: YIP 1 has been drafted and will be submitted as a PR.

See [the revision history for further details](https://github.com/Stakedllc/YIPs/commits/master/YIPS/yip-1.md), which is also available by clicking on the 'History' button in the top right of the YIP.

### Bibliography

[RAY Engineering Team]: https://github.com/orgs/Stakedllc/people
[RAY Discord]: https://discord.gg/P2qgbEY
[pull request]: https://github.com/Stakedllc/YIPs/pulls
[markdown]: https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet
[Synthetix's EIP-1]: https://github.com/Synthetixio/SIPs
[Ethereum's EIP-1]: https://github.com/ethereum/EIPs
[Bitcoin's BIP-0001]: https://github.com/bitcoin/bips
[Python's PEP-0001]: https://www.python.org/dev/peps

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
