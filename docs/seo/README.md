# SEO Growth Loop — kermitfloor.com

A recurring, data-driven cycle: **measure → hypothesize → change → ship → record → review → keep/revert/iterate.**
This directory is the system's memory. Read this file first in any session that touches SEO.

## Files

- `docs/seo/logbook.md` — the experiment log. **Every change that could affect search/AI
  visibility or lead measurement gets an entry at ship time** (format and timing rules inside).
- `docs/seo/baselines/YYYY-MM-DD.md` — dated metric snapshots. Verdicts compare against these.
- Reviews are run via the project skill: `/skill:seo-review` (`.agents/skills/seo-review/SKILL.md`).

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
Probe at each review with a reporting query via `mcp__google-ads__*` tools; when the
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
GCP project: `kermit-analytics-mcp` (enabled APIs: analyticsadmin, analyticsdata, googleads,
searchconsole, iamcredentials).

## Review timing rules

- New pages/posts: indexing check ~2 weeks, ranking check ~4 weeks.
- Title/description/snippet changes: 3–4 weeks.
- Structural (hubs, internal links, schema, redirects): ~6 weeks.
- Lead/conversion changes: read weekly, not before ~30 days of data.
- At our volumes: position + impression trend first, CTR second; INCONCLUSIVE is a valid verdict.

## Ship-time checklist for any SEO-affecting change

1. Build passes (`npm run build`), owner approves, push to `main` (Cloudflare deploys).
2. Verify on production (curl the affected URLs).
3. Add/refresh the logbook entry **the same day** (hypothesis, metric+baseline, review due).
4. If the change invalidates a baseline, add a new dated baseline file.
