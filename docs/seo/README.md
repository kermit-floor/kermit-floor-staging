# SEO Growth Loop — kermitfloor.com

A recurring, data-driven cycle: **measure → hypothesize → change → ship → record → review → keep/revert/iterate.**
This directory is the system's memory. Use this file for SEO data access, measurement, or
shipping. The selected skill determines when to read experiment history.

## Files

- `docs/seo/logbook.md` — the experiment log. **Every change that could affect search/AI
  visibility or lead measurement gets an entry at ship time** (format and timing rules inside).
- `docs/seo/baselines/YYYY-MM-DD.md` — dated metric snapshots. Verdicts compare against these.
- Periodic reviews and explicit experiment verdicts use
  `.agents/skills/seo-general-review/SKILL.md`; specific analytics questions use
  `.agents/skills/seo-investigate/SKILL.md`.

## Data access

### GA4 — property `523760978` (kermitfloor.com)

Via the project MCP server `google-analytics` (configured in `.kimi-code/mcp.json`, gitignored;
tools appear as `mcp__google-analytics__*` after `/reload`). Key events: `generate_lead`,
`file_download`. If MCP calls fail with credential errors, see "Credential recovery" below, then `/reload`.

### Google Search Console — `sc-domain:kermitfloor.com`

No MCP server; query the API directly (token minted via impersonated ADC):

```bash
TOKEN="$($HOME/google-cloud-sdk/bin/gcloud auth application-default print-access-token)"
curl -sS -X POST -H "Authorization: Bearer $TOKEN" -H "Content-Type: application/json" \
  -d '{"startDate":"YYYY-MM-DD","endDate":"YYYY-MM-DD","dimensions":["query"],"rowLimit":25}' \
  "https://www.googleapis.com/webmasters/v3/sites/sc-domain:kermitfloor.com/searchAnalytics/query"
```

Dimensions available: `query`, `page`, `date`, `country`, `device` (+ `dimensionFilterGroups` for filtering).
GSC data lags ~2–3 days. Use 28-day vs 28-day comparisons for verdicts.

### Google Ads — customer `8624458035`

Developer token is at TEST level until Google approves Explorer/Basic (applied 2026-08-14).
Probe at each periodic review with a reporting query via `mcp__google-ads__*` tools; when the
`DEVELOPER_TOKEN_NOT_APPROVED` error stops, ads reporting is live (read-only).

## Credential recovery (read this when any Google call fails)

Auth uses service-account impersonation via gcloud ADC (no keys — org policy forbids them).
The Workspace revokes the underlying grant roughly daily; symptoms are
`Reauthentication is needed` / 401 / MCP 503s. Fix (10 seconds, browser auto-approves
while the owner is signed into Google):

```bash
~/google-cloud-sdk/bin/gcloud auth application-default login \
  --impersonate-service-account=mcp-reader@kermit-analytics-mcp.iam.gserviceaccount.com \
  --scopes="https://www.googleapis.com/auth/analytics.readonly,https://www.googleapis.com/auth/analytics.edit,https://www.googleapis.com/auth/adwords,https://www.googleapis.com/auth/webmasters.readonly,https://www.googleapis.com/auth/webmasters,https://www.googleapis.com/auth/cloud-platform"
```

Then `/reload` so long-running MCP server processes pick up the new file.
If 503s persist after `/reload`: those processes are long-lived (they can survive session
restarts) and may predate the credential refresh — check with
`ps -eo pid,lstart,cmd | grep -E 'analytics-mcp|google-ads-mcp'`. Kill the stale PIDs — the
client respawns fresh processes on the next call, no `/reload` needed (verified 2026-08-16). As a fallback, query the APIs directly
with the ADC token above (GA4: POST `https://analyticsdata.googleapis.com/v1beta/properties/523760978:runReport`;
GSC: recipe above).
GCP project: `kermit-analytics-mcp` (enabled APIs: analyticsadmin, analyticsdata, googleads,
searchconsole, iamcredentials).

## Review timing rules

- New pages/posts: indexing check ~2 weeks, ranking check ~4 weeks.
- Title/description/snippet changes: 3–4 weeks.
- Structural (hubs, internal links, schema, redirects): ~6 weeks.
- Lead/conversion changes: read weekly, not before ~30 days of data.
- At our volumes: position + impression trend first, CTR second; INCONCLUSIVE is a valid verdict.

For experiment verdicts, use the entry's recorded baseline and comparison window. For broader
investigations, select comparison data matching the metric, page/query cohort, and period.
Use the latest overview snapshot only when relevant; preserve earlier experiment baselines.
Keep scheduled operational reads separate from verdicts: a WORKED tracking experiment may
still need weekly lead readings without reopening its original instrumentation verdict.

## Change interference

Before shipping new work, compare its pages, queries, and primary metrics with every open
experiment's scope in the logbook:

- **Disjoint scope** (different pages AND different queries/metrics): proceed through the
  normal shipping process, with the new change's own logbook entry and review date.
- **Overlapping scope**: choose and record a treatment before shipping. Wait for the pending
  verdict and cite its due date; or ship and re-baseline the affected experiment with a new
  dated baseline, a new review date, and a confound note in both entries; or mark the older
  experiment INCONCLUSIVE with the reason.
- **Site-wide changes** (speed, templates, schema overhauls, navigation): add a cohort marker
  containing the ship date and a one-line description to every open entry, even where scopes
  appear disjoint. Reviews can then check for discontinuities at that date.

When overlap is uncertain, protect the measurement rather than silently changing its basis.

## Ship-time checklist for any SEO-affecting change

1. Complete the local change, interference check, and appropriate validation (`npm run build`
   for site changes). Prepare the hypothesis, primary metric, relevant baseline, and review date.
2. Follow `AGENTS.md` for commit/push authorization. Pushes to `main` trigger Cloudflare builds,
   including documentation-only pushes. Direct deployment follows `DEPLOY.md` and requires
   owner authorization covering that action.
3. Verify the affected behavior on production after deployment.
4. Add or refresh the logbook entry **the same day**, recording what actually shipped and its
   verification. Add a dated baseline when the interference treatment requires re-baselining.

A requested review includes its local same-day record unless explicitly requested read-only.
Finish that record before asking about newly recommended site changes; recording findings
does not depend on approval to implement them.
