---
name: seo-general-review
description: Run the recurring kermitfloor.com SEO growth review — pull fresh GSC/GA4 data, judge open experiments in docs/seo/logbook.md against their baselines, record verdicts, and plan the next iteration
type: prompt
whenToUse: When the user asks for the periodic SEO review, SEO status, verdict check on shipped changes, "how are our changes doing", or invokes /skill:seo-general-review. For one-off ad-hoc questions (a market, a traffic drop, "is X working") use seo-investigate instead.
---

Run the SEO growth review for kermitfloor.com. Work through these steps in order; keep the owner informed with a short note per phase.

## Step 0 — Load the memory

Read, in this order:
1. `docs/seo/README.md` — data access + credential recovery + timing rules.
2. `docs/seo/logbook.md` — all experiment entries.
3. The newest file in `docs/seo/baselines/` — the comparison point.

## Step 1 — Date triage

Get today's date (`date`). For each PENDING entry compare its **Review due** date:
- **Due or overdue** → in scope for verdicts this run.
- **Not yet due** → do NOT judge it; tell the owner when it comes due. Partial runs are normal:
  if nothing is due, say so, do only Step 2's passive checks, and stop.

## Step 2 — Restore data access

- GA4: try an `mcp__google-analytics__*` call (e.g. account summaries). If it fails with
  credential/reauth errors, run the recovery command from `docs/seo/README.md` ("Credential recovery"),
  ask the owner to run `/reload`, and retry.
- GSC: mint a token and run a small query per the README recipe; same recovery path on 401/403.
- Ads probe (30 seconds): one reporting query via `mcp__google-ads__*` on customer 8624458035.
  Still `DEVELOPER_TOKEN_NOT_APPROVED` → note "token still TEST level" and move on.

## Step 3 — Passive checks (every run, even if no verdicts are due)

- Indexing: are the newest pages (per logbook) indexed? (GSC page queries for their URLs,
  or `site:`-style checks via page-filtered searchAnalytics.)
- Rich results: any Product/Breadcrumb enhancement data appearing for product pages?
- Anomalies: big unexplained swings in total clicks/impressions vs the baseline period.

## Step 4 — Verdicts (for each due entry)

Pull the entry's primary metric(s) for the comparison window (28d vs 28d unless the entry says
otherwise) and write an honest verdict:
- **WORKED** — metric moved clearly in the intended direction.
- **NO EFFECT** — metric flat despite enough time/volume.
- **HURT** — metric moved the wrong way.
- **INCONCLUSIVE** — not enough volume/time; say what would settle it and set a new date.
Rules: position + impression trend first, CTR second at our volumes; never force a call on noise;
a wrong past change is a lesson, not a failure — recommend keep / revert / iterate accordingly.

## Step 5 — Present, then act only with approval

Summarize verdicts + proposed actions to the owner. Implement ONLY what they approve:
- Reverts/iterations follow the normal ship process: change → `npm run build` → owner-approved
  push → production verification.
- Git mutations (commit/push) require explicit owner approval each time — never assume.

## Step 5b — Parallel changes: the interference check (before shipping ANY new change)

New opportunities may be shipped while experiments are PENDING — but only after this check:
1. List every open entry's scope (pages, queries, primary metrics) from the logbook.
2. **Disjoint scope** (different pages AND different queries/metrics) → ship normally, with its
   own logbook entry and review date.
3. **Overlapping scope** → never ship blindly. Choose one and record it: (a) wait for the pending
   verdict (cite its due date to the owner), (b) ship and re-baseline the affected experiment —
   new dated baseline file, new review date, and a confound note written into BOTH entries,
   or (c) mark the older experiment INCONCLUSIVE with the reason.
4. **Site-wide changes** (speed, templates, schema overhauls, navigation) can shift even
   "disjoint" experiments → add a cohort marker (ship date + one line) to every open entry so
   reviews can check for discontinuities starting at that date.
5. Tie-breaker: when in doubt, protect the measurement. Rankings recover from a delayed change;
   poisoned data cannot be un-poisoned.

## Step 6 — Record (mandatory, same day)

- Update each judged logbook entry: verdict + date + one-line evidence + action taken.
- Append a dated `## Review YYYY-MM-DD` section to `docs/seo/logbook.md` summarizing the run.
- If baselines shifted materially, add `docs/seo/baselines/<today>.md`.
- Update "Last review run" at the top of the logbook and set next due dates.
- Remind the owner these docs-only updates still trigger a Cloudflare build on push.

## Arguments — extra focus, not reconfiguration

If `$ARGUMENTS` below is non-empty, treat it as an additional investigation focus for this run
and cover it in the review summary. The fixed steps above still run in full and dominate on
conflict. For a standalone ad-hoc question that doesn't need a review run, suggest
`/skill:seo-investigate` instead.

$ARGUMENTS
