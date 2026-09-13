---
name: seo-general-review
description: Review kermitfloor.com SEO experiments, record due verdicts, and recommend next actions. Use for periodic reviews or explicit experiment verdicts.
---

Complete the requested review using fresh evidence, the relevant experiment baselines, and a
same-day record. Take scope from the current request and conversation; explicit skill arguments
are optional. A periodic review covers open experiments and scheduled operational reads. A
focused review covers the named experiment and dependencies that affect its interpretation.
For a one-off analytics question without an experiment verdict, use `seo-investigate`.

## Establish the comparison

- Read `docs/seo/README.md` for data access and measurement rules, then the logbook's policy,
  relevant entries, and review schedule. Read older history only when it informs this review.
- Check today's date and distinguish due verdicts from operational reads. An experiment can
  have a WORKED verdict and still require weekly monitoring.
- For entries not yet due, preserve the review date and label any early findings provisional.
  Do not force a verdict before the required observation window or volume is available.
- Use each experiment's recorded baseline and comparison window. For broader checks, select
  a snapshot matching the metric, page/query cohort, and period; the newest file is not
  automatically the right comparison.

## Gather evidence and judge due entries

Use the README's access and recovery procedures for the sources needed. Report exact date
ranges, filters, data freshness, and access gaps. Probe Ads during periodic reviews as described
there; an expected token-access failure does not block GA4/GSC findings.

For periodic reviews, run passive checks even when no verdicts are due: search visibility for
recently shipped pages, available rich-result/enhancement evidence, and unexplained traffic or
impression changes. Page-filtered GSC performance data shows search exposure; no rows alone
do not establish that a URL is unindexed. State when indexing or enhancement status could not
be verified. Focused reviews need only the checks relevant to their scope.

For each due entry, evaluate its primary metrics against its baseline and account for recorded
confounds. At this site's volumes, position and impression trends generally precede CTR in
interpretation; the experiment's primary metric still determines the verdict:

- **WORKED** — evidence supports movement in the intended direction.
- **NO EFFECT** — the metric is flat despite enough time and volume.
- **HURT** — evidence supports movement in the wrong direction.
- **INCONCLUSIVE** — time, volume, access, or confounds prevent a reliable judgment; state
  what would settle it and set a new review date.

Keep scheduled operational readings separate from the original experiment verdict. For
example, instrumentation firing does not by itself establish growth in qualified leads.

## Record the completed review, then report

Unless the owner explicitly requested a read-only review, finish the local record the same day,
before waiting on decisions about proposed site changes:

- Update judged entries with verdict, date, evidence, and next review date where needed.
  Distinguish recommended actions, authorized actions, and actions actually completed.
- Record scheduled operational reads and their next dates, including those on experiments
  that already have verdicts. Record unavailable checks and their effect on conclusions.
- Append a dated review summary to `docs/seo/logbook.md`; detailed evidence may live in
  `docs/seo/reviews/YYYY-MM-DD.md` with a link from that summary. Update "Last review run"
  and the relevant review schedule.
- A run with no due verdicts still records its passive/operational findings and next due dates.
  Add a dated baseline when a new measurement checkpoint or documented re-baseline is needed;
  preserve the original comparisons unless the README's interference treatment changes them.

Present findings, limitations, and recommended keep/revert/iterate decisions. The review is
complete once its checks and required record are finished, even if no new site change is approved.

## Implement authorized follow-up

Implement recommendations only when the current request or subsequent owner authorization
covers them. Complete covered work without repeating approval. Use `docs/seo/README.md` for
interference and shipping, and `AGENTS.md` for commit/push authorization. Prepare and validate
local changes before asking for any remaining shipping decision; record what actually ships.
Documentation-only pushes also trigger the Cloudflare build.
