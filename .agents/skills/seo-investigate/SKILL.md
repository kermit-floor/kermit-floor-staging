---
name: seo-investigate
description: Answer a specific kermitfloor.com SEO or analytics question from fresh data, then cross-check relevant experiment history. Use for questions about a market, query, page, or traffic change.
---

Identify the question from the current request and relevant conversation context. Use explicit
skill arguments when supplied; ask only if the question is missing or materially ambiguous.
The default outcome is an evidence-based answer without file changes. For a periodic review
or an explicit experiment verdict, use `seo-general-review`.

## Form an initial assessment from fresh data

Read `docs/seo/README.md` for data access, credential recovery, and comparison rules. Probe
only the sources needed for the question. Follow its direct-API fallback when MCP is stale;
an unavailable source does not block findings from other relevant sources. Report gaps and
their effect on the answer. Expected Ads token-access failures are not a bug in this skill.

Form initial findings before reading the logbook's interpretations so existing hypotheses do
not determine the answer. If history is already in context, separate observations from those
hypotheses explicitly. Pull the relevant country, query, page, device, or event data; state
filters and exact date ranges, account for reporting lag, and compare like periods when a
trend matters.

Select comparison data matching the metric, scope, and period. If the question concerns a
recorded experiment, reconcile the initial assessment with its original baseline during the
history cross-check. The latest overview snapshot is useful only when it matches the question.
At this site's volumes, prioritize position and impression trends over noisy CTR changes;
say when there is not enough data for the requested conclusion.

## Cross-check relevant experiment history

After forming findings, read the relevant open, queued, and closed entries in
`docs/seo/logbook.md`. Explain what is already underway or previously decided, whether the
evidence supports or challenges an existing hypothesis, and whether a suggested change
could affect open experiments. Use the README's "Change interference" rules for that check.
Avoid re-proposing previously rejected work without new evidence that changes the decision.

## Deliver the answer within the requested scope

Lead with findings, numbers, dates, and sources; follow with limitations, experiment context,
and useful next steps. An investigation alone does not assign formal verdicts or require a
logbook write, site edit, commit, or push.

If the owner also asked to record findings or implement a change, complete that authorized
work using the relevant review or shipping workflow. Existing authorization remains valid
within its scope; distinguish evidence, formal verdicts, and actions actually taken.
