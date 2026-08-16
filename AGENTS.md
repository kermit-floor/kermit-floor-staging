# Agent Rules for This Repo

No repo-specific Codex instructions are currently required.

## SEO growth loop (read before any SEO/analytics work)

This repo runs a recurring measure → change → record → review cycle for kermitfloor.com.

- **Memory lives in `docs/seo/`** — read `docs/seo/README.md` first (data access, credential
  recovery, timing rules), then `docs/seo/logbook.md` (experiment log) and the newest file in
  `docs/seo/baselines/`.
- **Any change that could affect search/AI visibility or lead measurement MUST get a logbook
  entry at ship time** (hypothesis, primary metric + baseline, review-due date). Format and
  timing rules are in the logbook itself.
- **Reviews** are run with the project skill `/skill:seo-review`
  (`.agents/skills/seo-review/SKILL.md`). Reviews write verdicts into the logbook the same day.
- GA4 data comes via the project MCP server `google-analytics` (`.kimi-code/mcp.json`,
  gitignored); Search Console via direct API calls per `docs/seo/README.md`. When Google calls
  fail with reauth errors, use the recovery command in that README, then `/reload`.
