---
name: seo-investigate
description: Investigate an ad-hoc SEO/analytics question for kermitfloor.com (a market, a query, a traffic change) with fresh GSC/GA4 data, then cross-check open experiments in docs/seo/logbook.md
type: prompt
whenToUse: When the user asks a one-off SEO/analytics question — "how are we doing in X", "why did Y drop", "is Z working" — or invokes /skill:seo-investigate with a question
---

Investigate one ad-hoc SEO/analytics question for kermitfloor.com. Lightweight: no experiment
verdicts, no mandatory recording. The question is in `$ARGUMENTS` — if it is empty, ask the
owner what to investigate and stop.

## Step 1 — Data access (fast probe)

Do NOT duplicate procedures — follow `docs/seo/README.md` ("Data access" + "Credential
recovery") for recipes, IDs, and fixes (including the stale-MCP-process gotcha). Probe only
what the question needs:

- GA4 (property 523760978): one `mcp__google-analytics__*` call. Reauth/503 → README recovery.
- GSC (`sc-domain:kermitfloor.com`): mint a token per the README recipe; same recovery on 401/403.
- Ads (customer 8624458035): developer token is TEST level — reporting is expected to fail
  with `DEVELOPER_TOKEN_NOT_APPROVED`. Skip ads data unless a probe succeeds; never treat
  that failure as a bug in this skill.

## Step 2 — Investigate (before reading any experiment history)

Form findings from fresh data FIRST — do not read `docs/seo/logbook.md` yet, so the answer
is not anchored to existing hypotheses. Pull what the question needs:

- GSC `searchAnalytics/query` with `dimensionFilterGroups` (country, query, page); 28d vs 28d
  where a trend matters. GSC data lags ~2–3 days.
- GA4 via MCP (or the direct-API fallback in the README when MCP is stale).
- If a comparison number is needed, the newest file in `docs/seo/baselines/` is the reference
  point (data only, not interpretation).

At kermitfloor volumes: position + impression trend first, CTR second; say "not enough data"
rather than forcing a call on noise.

## Step 3 — Cross-check the logbook (after findings)

Now read `docs/seo/logbook.md` (open experiments + queued + closed) and report:

- Is something already being done about this topic? (An open experiment, a queued item, or a
  decided out-of-scope — e.g. testimonial quotes: do not re-propose.)
- Do the findings confirm or contradict an open experiment's hypothesis?
- If the findings suggest a new change, flag which open experiments it could interfere with
  (interference rules: `/skill:seo-general-review` Step 5b).

## Step 4 — Report (read-only by default)

Answer structure: findings first (numbers + dates), then the cross-check, then suggested next
steps if any. This skill changes nothing: no logbook writes, no site changes, no git
mutations. If a finding is worth recording (actionable opportunity, evidence about an open
experiment), offer to add it — only with owner approval.

$ARGUMENTS
