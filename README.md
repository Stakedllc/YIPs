# Yield Improvement Proposals (YIPs)

Yield Improvement Proposals (YIPs) describe standards and features for the Robo-Advisor for Yield (RAY) platform, including core protocol specifications, client APIs, contract standards and product improvements.

A browsable version of all current and draft YIPs can be found on [here](https://github.com/Stakedllc/YIPs).

# Contributing

 1. Review [YIP-1](YIPS/yip-1.md).
 2. Fork the repository by clicking "Fork" in the top right.
 3. Add your YIP to your fork of the repository. There is a [template YIP here](yip-template.md).
 4. Submit a Pull Request to RAY's [YIPs repository](https://github.com/Stakedllc/YIPs).

Your first PR should be a first draft of the final YIP. It must meet the formatting criteria enforced by the build (largely, correct metadata in the header). An editor will manually review the first PR for a new YIP and assign it a number before merging it. Make sure you include a `discussions-to` header with the URL to a discussion forum or open GitHub issue where people can discuss the YIP as a whole.

If your YIP requires images, the image files should be included in a subdirectory of the `assets` folder for that YIP as follows: `assets/yip-X` (where **X** is to be replaced with the YIP number). When linking to an image in the YIP, use relative links such as `../assets/yip-1/image.png`.

Once your first PR is merged, we have a bot that helps out by automatically merging PRs to draft YIPs. For this to work, it has to be able to tell that you own the draft being edited. Make sure that the 'author' line of your YIP contains either your GitHub username or your email address inside <triangular brackets>. If you use your email address, that address must be the one publicly shown on [your GitHub profile](https://github.com/settings/profile).

When you believe your YIP is mature and ready to progress past the draft phase, you should do one of two things:

 - **For a Standards Track YIP of type Proposed**, ask to have your issue added to [the agenda of an upcoming community meeting](https://github.com/Stakedllc/pm/issues), where it can be discussed for inclusion in a future release. If implementers agree to include it, the YIP editors will update the state of your YIP to 'Accepted'.
 - **For all other YIPs**, open a PR changing the state of your YIP to 'Proposed'. An editor will review your draft and ask if anyone objects to it being accepted. If the editor decides there is no rough consensus - for instance, because contributors point out significant issues with the YIP - they may close the PR and request that you fix the issues in the draft before trying again.

# YIP Status Terms

* **WIP** - a YIP that is undergoing rapid iteration and changes.
* **Proposed** - a YIP that is done with its initial iteration and ready for review by a wide audience.
* **Accepted** - a YIP that the community and developers have decided to implement and release in a future upgrade.
* **Rejected** - a YIP that has been reviewed and not passed the 'Proposed' stage.
* **Active** - a YIP that has been implemented and released.

# Preferred Citation Format

The canonical URL for a YIP that has achieved draft status at any point is at https://github/Stakedllc/YIPS/YIPS. For example, the canonical URL for YIP-1 is https://github/Stakedllc/YIPS/YIPS/yip-1,md.

# Automerger

The YIP repository contains an "auto merge" feature to ease the workload for YIP editors.  If a change is made via a PR to a draft YIP, then the authors of the YIP can GitHub approve the change to have it auto-merged by the [yip-automerger](https://github.com/yip-automerger/automerger) bot.
