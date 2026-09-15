# Google Ads Basic access — 15 September 2026

## Current state

- Google Cloud project: `kermit-analytics-mcp` (number `640830772342`).
- Cloud Console showed **Explorer** access. Production account lookup for customer
  `8624458035` returned Kermit Floor and `test_account: false`; a last-seven-days campaign
  report succeeded with zero rows. This verifies access, not the absence of historical ads.
- The earlier Basic application was not approved. The console requires brand verification.
- With the owner's explicit approval, accepted the Google API Services User Data Policy
  and created the OAuth app identity **Kermit Analytics MCP**.
- Support and developer contact: `barbaros@kermit.com.tr`.
- The owner approved publication, commit/push, and the production audience change.
- Published the app pages in commit `8b51643`; Cloudflare Workers Builds and the GitHub
  blog check both succeeded. Live content was verified on 15 September 2026.
- Audience is **External / In production**, with zero users and no OAuth clients configured.
- Google brand verification completed successfully; published the approved branding.
  Console confirmed: "Your branding has been verified and is being shown to users."
- Submitted a new **Basic** application. Google approved it on 15 September 2026;
  the console now shows **Basic**, with 15,000 daily operations for production accounts.
- A direct read-only `KeywordPlanIdeaService.GenerateKeywordHistoricalMetrics` request
  succeeded for customer `8624458035` at 09:25 UTC. `spc flooring` returned one result and
  12 monthly volume entries. [API evidence](baselines/2026-09-15-ads-basic-api-probe.json).

## Published pages

| Purpose | File | Intended URL |
| --- | --- | --- |
| App description | `public/analytics-mcp.html` | `https://kermitfloor.com/analytics-mcp.html` |
| App privacy notice | `public/analytics-mcp-privacy.html` | `https://kermitfloor.com/analytics-mcp-privacy.html` |
| Shared styling | `public/analytics-mcp.css` | `https://kermitfloor.com/analytics-mcp.css` |

The app description distinguishes current reporting from planned Keyword Planner features.
The privacy notice discloses Google API data categories, authorized AI-provider processing,
saved reports without automatic expiry, access revocation, and deletion requests.
The owner approved this notice for publication, including its requirement to use approved
AI-provider settings that do not train general-purpose models on Google API data. Provider
training and retention settings were not independently audited.

## Validation and interference

- `npm run build` passed, including text/blog validation, TypeScript checks and 194
  generated routes. Generated tracked files did not change.
- Both HTML files parse, have one H1, declare `noindex, follow`, contain no scripts, and
  reference existing local assets/pages.
- Both pages were inspected in the local browser; typography and content render correctly.
- The pages are standalone public assets, absent from the sitemap, with no GA4 tags,
  shared navigation, event, schema, product, or blog changes. Cloudflare adds its existing
  analytics beacon at the edge. Both `.html` URLs redirect to the matching extensionless
  URL and return HTTP 200. Content matches the source after normalizing only that injected
  beacon and inter-tag whitespace; CSS matches directly.
- [Production verification](baselines/2026-09-15-ads-branding-production.json) records the
  redirects, response types, content parity, `noindex`, and sitemap exclusion.
- Open experiment scopes were checked against `docs/seo/logbook.md`. These two new
  application-information URLs and the API-verification outcome are disjoint from existing
  page/query and lead-measurement experiments. Preserve existing baselines and due dates.
- Pre-existing changes to the SEO README, logbook and September 15 review/evidence belong
  to other ongoing work; they are not part of this publication change set.

## Outcome and follow-up

**WORKED — 15 September 2026:** branding is verified/published, Google Ads Basic access
is approved, and a read-only keyword-history request succeeds. The request used all
geographies and languages on Google Search; its volume is a functional check and should
not be interpreted as demand for a particular country or language.

The installed MCP server currently exposes account lookup/reporting/metadata. The verified
keyword request used the installed Google Ads Python client directly; this access upgrade
does not add Keyword Planner tools to that MCP server. The public description correctly
identifies the broader keyword-planning workflow as a planned integration addition.

Hypothesis: accurate public app and data-use information enables Google brand verification
and Basic access for keyword-planning functionality.
Primary metric and baseline: branding initially unverified; Ads access Explorer;
Basic functionality unavailable. The planned September 18 decision check is satisfied by
the confirmed same-day approval and successful API request.

## Sources

- [Google Ads access levels](https://developers.google.com/google-ads/api/docs/api-policy/access-levels)
- [Ads-specific brand verification](https://developers.google.com/google-ads/api/docs/api-policy/brand-verification)
- [Homepage and privacy requirements](https://developers.google.com/identity/protocols/oauth2/production-readiness/brand-verification)
- [Google API Services User Data Policy](https://developers.google.com/terms/api-services-user-data-policy)
