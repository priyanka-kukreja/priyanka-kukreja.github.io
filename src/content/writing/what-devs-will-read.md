---
title: "The one thing devs will still read when they stop reading code "
date: 2026-03-15
topic: Tech Industry
draft: false
---

Code was never meant to be read. We just had no alternative.

Consider a real-world example: a production payments service with layered retry logic, idempotency keys, circuit breakers, feature flags, and compliance checks woven throughout the middleware. The control flow may be technically clean and fully tested, but the intent is fragmented across conditionals, decorators, and utility abstractions. A single refund path might span five files and at least three layers of indirection.

The machine sees a deterministic execution graph. A human sees scattered branches and implicit constraints - and has to reconstruct which failure modes were considered acceptable, which were business-critical, and which were accidental side effects.

For years, we treated code as the highest form of truth in software. If you wanted to know what a system did, you read the code. If you wanted to verify what was built, you inspected the code. That assumption makes sense when humans are the primary authors. As agents take on more of the authorship - first in frontier teams, soon more broadly - that assumption begins to break.

We are not moving towards a world where agents write software. Many of us are already living in it. Agents write the code, review the diffs and catch the bugs before a human ever sees them.

At CodeRabbit, we review millions of pull requests every month and we’ve seen the ratio of human-written to AI-written code inverting at companies on the frontier. When [we sampled 470 open-source GitHub pull requests](https://www.coderabbit.ai/blog/state-of-ai-vs-human-code-generation-report) for our study earlier this year, we found that 320 were AI-co-authored PRs and 150 human-only PRs.

![OSS PRs](/assets/posts/what-devs-will-read-1.jpg)

This growing use of agentic AI will see more features materialize from prompts, instead of sitting in the backlog. Migrations that used to take weeks being done overnight. Refactoring that was deprioritized but can now actually be undertaken.
And yet a glaring gap has opened up that acceleration alone cannot close.

## The gap no one talks about
![The intent gap](/assets/posts/what-devs-will-read-2.jpg)

When agent-generated code first hits your codebase, it feels like magic. By the twentieth PR, the system starts to feel opaque. By the fiftieth PR, the team is maintaining an artifact that no one fully understands but everyone is expected to extend. Generated code works like sediment. Plausible at each layer, harder to reason about over time. "Just read the code" stops being serious advice. It becomes a ritual repeated because no better system of record exists.

The problem isn't the code quality. The agents write clean, tested, locally-correct code. The problem is _intent_. Some ‘human’ questions that code never answered particularly well:

- Why was this pattern chosen?
- Which constraints mattered?
- What did the agent explicitly decide not to do?
- What counts as done?

Agents now make this limitation of the code impossible to ignore.

## Code is the new assembly
There's a useful parallel. In the 1950s, programmers wrote assembly. You had to understand registers, memory addresses, instruction cycles: the full machinery. Then abstraction layers arrived. Today, almost no working programmer writes assembly. It still runs underneath everything, but it's not the _human interface_ anymore.

Code is the new assembly-level language.

It still matters. Production still runs on it and machines still need it. But for humans, code is increasingly too low-level to be the place where most thinking happens. Its job is changing: code becomes the thing the machine executes. Something else becomes the thing the human understands.

That something is the **Plan**.

## The Plan as system of record
![Code vs. plan](/assets/posts/what-devs-will-read-3.jpg)
A good plan captures the _why_ before it disappears into the how. It records assumptions before they become invisible. It makes tradeoffs legible. It turns constraints into shared context instead of tribal knowledge. It gives humans something they can review, debate, refine, approve, and return to… without reverse-engineering intent from thousands of lines of generated code.

This distinction matters most where software work gets genuinely hard.

Take the payments migration example: The most important artifact for a staff engineer, a PM, or a security lead isn't the final diff. It's the intent: what must not break, which edge cases are business-critical, how failure should be handled, what tradeoffs were consciously accepted. The plan makes that reviewable before the blast radius becomes real.

Or take an incident remediation. After an outage, the worst possible time to reconstruct intent is from code written under pressure. A clear plan-as-record shows what was believed at the time, what mitigations were prioritized, what was deferred, and what "done" actually meant.

Or take something like onboarding. A new engineer joining a codebase built heavily with agents over the past year can't just be told to "read the code." But show them the sequence of plans - what was optimized for, where shortcuts were taken, which constraints came from customers, which assumptions are still open - and confusion becomes understanding.

Anywhere the cost of misinterpretation is high, the Plan is more valuable than the implementation details alone. Because the real work isn't generating code. It's preserving meaning.

## What we're building toward
The future doesn't belong to prompts, and it doesn't belong to code alone. Prompts are too ephemeral. Code is soon to be too low-level. The durable layer in between, the one humans can actually reason about, is the Plan.

The Plan is where taste lives. It’s where judgment, accountability, and collaboration lives.

Code will still be written, more of it than ever. But more and more of that code will be produced by systems faster than us, cheaper than us, and less interested in explaining themselves. If we want software development to remain legible, governable, and collaborative, we need a better artifact for humans to hold onto.

That's what we're building with [CodeRabbit Issue Planner](https://www.coderabbit.ai/plan). It is a tool that helps teams using AI agents plan collaboratively and align intent _before_ any code is written. It turns vague issues into shared, reviewable plans and generates editable prompts with context directly from your codebase. But it also functions as a new source of truth that serves as an archive of the choices you made and systems you intended to build.

It’s not a nicer prompt box or just another thin wrapper around codegen. It’s a real system of record for intent in the age of agents.

Just as a poet looks to their poem as the artifact of what they built, and a chef looks to their dish. In the same way, developers previously looked to code and/or PRs as the artifact they built.

But in this new world, it will not be the code. It will be the Plan - the artifact they will say they built. The plan is what developers will point to and say, “This is what we built.” It is what they will share with their teammates to demonstrate their output. It is what they will be evaluated on.

The Plan will be the centerpiece of development work going forward. It is what will go out into the world as the last human touchpoint before the machine takes over.
