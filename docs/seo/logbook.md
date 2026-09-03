# SEO Experiment Logbook — kermitfloor.com

Every change that could affect search/AI visibility or lead measurement gets an entry here
**at ship time**. Reviews write verdicts in the entry (or in dated review reports linked from it).
Never delete entries — wrong changes are lessons, not embarrassments.

## Entry format

```
### [YYYY-MM-DD] Short name — commit <hash>
- **Change**: what shipped, in one or two lines.
- **Hypothesis**: why we expected it to help.
- **Primary metric(s)**: what decides the verdict + baseline value (see docs/seo/baselines/).
- **Review due**: date, chosen by change type (indexing ~2w, CTR ~3-4w, structural/ranking ~6w).
- **Verdict**: PENDING → WORKED / NO EFFECT / HURT / INCONCLUSIVE (with date + evidence).
- **Action**: what the verdict triggered (keep / revert / iterate + details).
```

Timing rules by change type (honest SEO mechanics):
- New pages/posts → indexing check ~2 weeks, ranking check ~4 weeks.
- Title/description/snippet changes → 3–4 weeks (Google must recrawl and serve the new snippet).
- Structural (hubs, internal linking, schema, redirects) → ~6 weeks.
- Lead/conversion changes → volume-timed; read weekly, not before ~30 days.
- Low-volume reality: at our impression counts, judge by position + impression trend first,
  CTR second. INCONCLUSIVE is a legitimate verdict — do not force calls on noise.

Review cadence (batch of 2026-08-14/16):
- **2026-08-30** — completed 2026-09-03: indexing check, first lead read, rich-result appearance.
- **2026-09-06** — CTR-refresh verdicts (entries 9).
- **2026-09-15** — rankings: new posts, hub effect on "spc skirting", AI-referral trend.
- **2026-09-27** — full structural verdict vs baseline + next iteration plan.

Parallel changes: new work may ship while experiments are PENDING, but only after the
interference check in `.agents/skills/seo-general-review/SKILL.md` (Step 5b): disjoint scope ships
freely; overlapping scope waits, re-baselines, or goes INCONCLUSIVE; site-wide changes get a
cohort marker in every open entry.

Last review run: 2026-09-03 (overdue 2026-08-30 milestones completed; next verdict due 2026-09-06)

---

## Open experiments

### [2026-08-14] GA4 lead tracking (generate_lead + file_download key events) — commit ae721ed
- **Change**: `generate_lead` event on WhatsApp button, starter-pack dialogs (whatsapp/email,
  pack_id), contact-page tel/mailto links (office param). Both events registered as GA4 key events.
- **Hypothesis**: we cannot improve what we cannot count; lead baseline enables all future CRO.
- **Primary metric(s)**: weekly `generate_lead` key-event count (baseline 0); file_download count.
- **Review due**: first read completed 2026-09-03; operational monitoring weekly from 2026-09-10.
- **Verdict**: **WORKED — 2026-09-03.** GA4 recorded 17 `generate_lead` key events and
  5 `file_download` key events from 2026-08-14 through 2026-09-02, versus a lead baseline of 0;
  the instrumentation is firing. These are lead-intent actions, not confirmed sales leads.
- **Action**: keep tracking. Use `keyEvents` (10 in 08-14→20, 4 in 08-21→27, 3 in the
  partial 08-28→09-02 week) rather than raw event count for the weekly read: one China/desktop
  Organic Search session on `/resources` generated 31 raw events on 2026-08-28 but only one
  key event. Watch for recurrence before considering a deduplication change.

### [2026-08-15] AI crawlers unblocked (Cloudflare AI Crawl Control) — no code commit
- **Change**: CF dashboard "Manage robots.txt" set to not manage; robots.txt now repo-clean
  (GPTBot, ClaudeBot, Google-Extended etc. allowed). "Block AI training bots" was already off.
- **Hypothesis**: being crawlable by answer engines grows AI-referral traffic over time.
- **Primary metric(s)**: GA4 "AI Assistant" channel sessions (baseline 6/90d).
- **Review due**: 2026-09-15.
- **Verdict**: PENDING
- **Action**: —

### [2026-08-15] JSON-LD structured data site-wide — commit 8daf750
- **Change**: Organization+WebSite on all pages; Product (specs as additionalProperty) on 11
  product pages; ItemList on collection pages; BreadcrumbList on inner pages.
- **Hypothesis**: better machine readability → rich results, stronger entity understanding,
  better AI citation odds.
- **Primary metric(s)**: GSC appearance of Product/Breadcrumb enhancements (baseline none);
  long-term CTR on product/collection pages.
- **Review due**: 2026-09-27 (effect; appearance checkpoint completed 2026-09-03).
- **Verdict**: PENDING (long-term effect). **Appearance checkpoint 2026-09-03: WORKED for
  Breadcrumbs / NO EFFECT for Product rich-result eligibility.** URL Inspection reports valid
  Breadcrumbs on the recrawled hub/product pages. Product snippets are detected on 10 of 11
  English Product-schema pages, but all 10 fail eligibility because none truthfully has an
  `offers`, `review`, or `aggregateRating` value; the 11th page was last crawled before ship.
  GSC performance `searchAppearance` still has no site-wide or product-page rows through 08-31.
- **Action**: keep Breadcrumbs. Do not invent prices, offers, ratings, or testimonials. No
  Product-schema change this run; its pages and metric overlap the pending 09-27 effect verdict,
  so protect the measurement and revisit the semantic-only Product markup then.

### [2026-08-15] Localized collection H1s — commit 8daf750
- **Change**: collection pages got unique localized keyword H1s (was shared English
  "QUICK SHIP: ..." slogan, demoted to eyebrow). Also fixed: 5 premier collections had shared one H1.
- **Hypothesis**: H1 is the strongest on-page signal; TR pages rank on TR terms.
- **Primary metric(s)**: positions/CTR for collection terms ("spc parke" 4.9, collection pages' CTR).
- **Review due**: 2026-09-15.
- **Verdict**: PENDING
- **Action**: —

### [2026-08-15] Blog alternate-locale redirects 307→308 — commit 8daf750
- **Change**: unprefixed TR-slug blog URLs now permanent-redirect to /tr canonicals.
- **Hypothesis**: consolidates indexing/link equity onto canonical URLs.
- **Primary metric(s)**: GSC indexed-URL mix for the affected slugs; /tr URL clicks vs unprefixed.
- **Review due**: 2026-09-27.
- **Verdict**: PENDING
- **Action**: —

### [2026-08-15] llms.txt — commit 8daf750
- **Change**: curated AI-engine map at /llms.txt.
- **Hypothesis**: helps AI engines route to key content.
- **Primary metric(s)**: qualitative; AI-referral trend (with entry "AI crawlers unblocked").
- **Review due**: 2026-09-15 (joint verdict with crawler unblock).
- **Verdict**: PENDING
- **Action**: —

### [2026-08-15] New post pair: SPC user reviews — commit 89db2ae
- **Change**: /tr/blog/spc-parke-kullanici-yorumlari + /blog/spc-flooring-user-reviews.
  Honest expert evaluation (no fabricated testimonials; spec-anchored).
- **Hypothesis**: own the reviews-intent cluster (350 imp, pos 8.4 with no dedicated page).
- **Primary metric(s)**: query "spc parke kullanıcı yorumları" position + post clicks.
- **Review due**: 2026-09-15 (ranking; indexing checkpoint completed 2026-09-03).
- **Verdict**: PENDING (ranking). **Indexing checkpoint 2026-09-03: WORKED.** Both URLs are
  Submitted and indexed, self-canonical, fetch-successful, and had GSC activity in 08-15→08-31:
  TR 12 clicks / 207 impressions; EN 3 / 835. Do not judge rankings before 09-15.
- **Action**: keep unchanged through the ranking window.
- **Amendment (2026-08-16)**: post edited post-ship to remove all 0,55 mm wear-layer mentions
  (owner: that spec option is being retired; public line is 0,30/0,50 mm). Product-accuracy
  amendment, not an SEO-motivated change — does not re-baseline the experiment; reviewers
  should not attribute ranking movement to it.

### [2026-08-15] New post pair: SPC pricing factors — commit 89db2ae
- **Change**: /tr/blog/spc-parke-fiyatlari + /blog/spc-flooring-cost. No invented prices;
  7 cost drivers + quote-comparison checklist + /contact CTA.
- **Hypothesis**: capture price-intent (pos 14.2, "kermit süpürgelik fiyatları" pos 6.1) and
  convert it to WhatsApp/email leads.
- **Primary metric(s)**: query positions + post clicks; generate_lead events with page = post.
- **Review due**: 2026-09-15 (ranking/leads; indexing checkpoint completed 2026-09-03).
- **Verdict**: PENDING (ranking/leads). **Indexing checkpoint 2026-09-03: WORKED.** Both URLs
  are Submitted and indexed, self-canonical, fetch-successful, and had GSC activity in
  08-15→08-31: TR 6 clicks / 202 impressions; EN 2 / 531. No tracked `generate_lead` event was
  attributed to either post yet; do not judge that low-volume outcome before 09-15.
- **Action**: keep unchanged through the ranking/lead window.
- **Amendment (2026-08-16)**: post edited post-ship to remove all 0,55 mm wear-layer mentions
  (owner: that spec option is being retired; public line is 0,30/0,50 mm). Product-accuracy
  amendment, not an SEO-motivated change — does not re-baseline the experiment; reviewers
  should not attribute ranking movement to it.

### [2026-08-16] CTR refresh of 3 blog topics — commit ee18f48
- **Change**: year-stamped, benefit-driven titles/descriptions on spc-wall-panel-bathroom-usage
  (+FAQ section), kermit-spc-skirting-advantages, spc-wall-panel-usage-areas (EN/TR).
- **Hypothesis**: same positions, higher CTR.
- **Primary metric(s)**: CTR — "spc wall panels for bathroom" 0.5% @ 9.8 (928 imp);
  "spc skirting" blog 0.5% @ 6.9; "spc duvar kaplama" 1.8% @ 6.3 (279 imp).
- **Review due**: 2026-09-06.
- **Verdict**: PENDING
- **Action**: —

### [2026-08-16] Skirting hub page — commit d9d4225
- **Change**: /spc-skirting-boards + /tr/spc-supurgelikler (cards-first per owner; labeled
  Height/Width/Length/Material; random application photo per build; ItemList JSON-LD).
  Nav/footer/home/breadcrumbs repointed; stale 308s on the bare path removed.
- **Hypothesis**: a product hub outranks the blog post for "spc skirting" (1,707 imp)
  and fixes its 0.5% CTR.
- **Primary metric(s)**: hub impressions/position for "spc skirting"; term CTR (target >3%);
  product pages' positions for the term (baseline 22–26).
- **Review due**: 2026-09-15 (ranking), 2026-09-27 (full; indexing checkpoint completed
  2026-09-03).
- **Verdict**: PENDING (ranking/full). **Indexing checkpoint 2026-09-03: WORKED.** EN and TR
  hubs are Submitted and indexed, self-canonical, fetch-successful, and show valid Breadcrumbs.
  In GSC 08-15→08-31: EN 1 click / 79 impressions at position 8.0; TR 4 / 83 at 4.8.
- **Action**: keep unchanged through the ranking window.

### [2026-09-03] Skirting hub card-image fallback — release repair
- **Change**: Added a fixed application-image fallback for each of the eight skirting lines on
  `/spc-skirting-boards` and `/tr/spc-supurgelikler`. On a Cloudflare cache miss, the Worker
  cannot use the Node filesystem manifest loader; the fallback prevents empty card `src` values
  and empty ItemList image URLs while preserving the random-per-build selection when available.
- **Hypothesis**: restoring the intended product photography removes blank product cards and
  protects hub engagement and machine readability without changing copy, links, or specs.
- **Primary metric(s)**: card images with a non-empty `src` and `naturalWidth > 0`; live EN
  baseline on 2026-09-03 was **0/8**, target after deployment is **8/8 in both EN and TR**.
  Secondary search metrics remain those of the 2026-08-16 skirting hub experiment above.
- **Review due**: 2026-09-04 live smoke check; retain the 2026-09-15 ranking and 2026-09-27
  full-effect reviews for the parent hub experiment.
- **Verdict**: PENDING
- **Action**: treat the 2026-09-15 ranking read as a pre/post-repair cohort and do not attribute
  all movement solely to the original 2026-08-16 hub launch.

## Queued (owner-planned, not yet experiments)

- **End-customer cost breakdown: SPC vs ceramics vs laminate** — owner will prepare real cost
  data in a future session. When it exists: new content targeting the price-intent cluster
  (extends "spc parke fiyatları" ground, baseline pos 14.2) with strong lead potential.
  Becomes a full experiment entry at ship time (hypothesis, metric, review date).
- **Customer testimonial quotes** — owner decision 2026-08-16: out of scope. The reviews post
  stays an expert evaluation; do not re-propose adding quotes.

## Closed / informational

### [2026-08-16] Skirting length data correction (2500/2400) — commit d9d4225
- **Change**: spec JSON + product pages + hub + blog + llms.txt: Optima 90 = 2400 mm,
  other 7 lines = 2500 mm. **Known follow-up**: PDF spec sheets/catalogues under
  public/downloads/ still say 2400 for non-Optima lines — needs regeneration on design side (owner).
- **Verdict**: INFO — accuracy fix, no SEO hypothesis. No review needed.

### [2026-08-14] Google Analytics/Ads MCP + GSC API access — infra
- **Change**: GA4 property 523760978 readable via MCP; GSC sc-domain:kermitfloor.com via API;
  Ads account 8624458035 visible (token at TEST level, Explorer/Basic pending with Google).
- **Verdict**: INFO — measurement infrastructure. Re-check Ads token level at every review
  (upgrade lands silently; test with a reporting query).


---

## Review 2026-08-16

First review run. No experiments due (earliest: 2026-08-30 indexing checks) — passive checks only.

**Data access**
- GSC API: working (data through 2026-08-14, normal 2–3 day lag).
- GA4 MCP: 503 reauth at run start. ADC refreshed per README "Credential recovery", but
  `/reload` did NOT restart the MCP server processes (PIDs dated 2026-08-14 10:59 — long-lived,
  they survive session restarts — still held the revoked grant). GA4 data below was pulled via
  direct Analytics Data API calls with the same ADC (verified working) — a working fallback
  whenever the MCP path is stale. **Fixed same day**: owner approved killing the two stale
  PIDs; the client auto-respawned fresh processes (no `/reload` needed) — GA4 MCP and ads MCP
  verified working (ads still blocked only by the TEST-level developer token).
- Ads probe: still `DEVELOPER_TOKEN_NOT_APPROVED` (TEST level). Re-probe next run.

**Passive checks**
- Indexing (early): all 6 new URLs already "Submitted and indexed" via URL Inspection API,
  canonicals self-matching, crawled 2026-08-16 — `/spc-skirting-boards`, `/tr/spc-supurgelikler`,
  `/tr/blog/spc-parke-kullanici-yorumlari`, `/blog/spc-flooring-user-reviews`,
  `/tr/blog/spc-parke-fiyatlari`, `/blog/spc-flooring-cost`. The 08-30 indexing milestone is
  effectively passed two weeks early; ranking verdicts still wait for their due dates.
- Rich results: `searchAppearance` empty for the last 28 days — no Product/Breadcrumb
  enhancements yet (JSON-LD shipped 2026-08-15; still within expectations).
- Anomalies: none. 2026-08-07 → 08-14: 199 clicks / 4,756 impressions (~25 clicks, ~594 imp
  per day) vs baseline ~24.6 clicks / ~631 imp per day — in line.
- GA4 (via direct API): **`generate_lead` = 2 events since 2026-08-14** (baseline 0) — first
  tracked leads; instrumentation confirmed firing, formal first read still 2026-08-30. No
  `file_download` in the 2-day window (81/90d ≈ 0.9/day → 0 is normal). AI Assistant channel:
  1 session/28d vs baseline 6/90d — noise at this volume, trend verdict due 2026-09-15.
  Sessions ~382/28d, in line with baseline 361/28d — no anomaly.

**Verdicts**: none due. Next review **2026-08-30** (JSON-LD appearance check, first
`generate_lead` read — GA4 MCP must be working by then).


---

## Review 2026-09-03

Overdue run for the 2026-08-30 milestones (completed four days late). GSC was complete
through 2026-08-31; GA4 was read through 2026-09-02.

**Data access**
- GA4 MCP: initial account-summary call failed with `Reauthentication is needed`. ADC was
  refreshed with the README recovery command; the retry and all reports then worked.
- GSC API: working after the same refresh. URL Inspection and Search Analytics both succeeded.
- Ads probe: token still **TEST level**. A 30-day campaign reporting query on customer
  8624458035 was rejected because the developer token is approved only for test accounts.

**Due-triage and verdicts**
- **GA4 lead tracking — WORKED.** 17 `generate_lead` key events and 5 `file_download` key
  events were recorded since tracking began. This proves the instrumentation, not 17 completed
  leads. Keep and monitor weekly.
- **JSON-LD appearance — MIXED checkpoint; final verdict remains PENDING.** Breadcrumbs are
  detected and valid. Product entities are detected after recrawl, but have no eligible Google
  Product snippet without truthful offer/review/rating data; performance appearance remains
  absent. Full effect verdict remains due 2026-09-27.
- **Reviews posts, pricing posts, skirting hub — indexing milestones WORKED.** All six URLs are
  Submitted and indexed with successful fetches and matching Google/user canonicals; all six
  have impressions. Ranking/lead verdicts remain due 2026-09-15.
- CTR refresh (09-06), localized H1s / AI crawlability / `llms.txt` (09-15), redirect
  consolidation (09-27), and all ranking/full-effect checkpoints were not judged early.

**Passive checks**
- Indexing: the six newest URLs remain healthy. Their 08-15→08-31 combined GSC result was
  28 clicks / 1,937 impressions; page-level evidence is recorded in the entries above.
- Rich results: both hubs and the 10 post-ship-recrawled English Product pages inspected show
  valid Breadcrumbs. Those 10 Product items all report the same missing
  `offers`/`review`/`aggregateRating` eligibility error. Alpha 140 was last crawled 08-12,
  before schema shipped, and has no detected item yet. Site-wide and product-filtered GSC
  `searchAppearance` queries returned no rows for 08-04→08-31.
- Search anomaly check (latest 28d vs prior 28d): 707 vs 661 clicks (**+7.0%**), 17,678 vs
  16,661 impressions (**+6.1%**), CTR 4.00% vs 3.97% (flat), and position 9.43 vs 8.54
  (0.89 worse). This is not a large unexplained swing; the latest impression pace (631/day)
  also matches the 90-day baseline (631/day).
- GA4 anomaly check (08-06→09-02 vs baseline 07-17→08-13): sessions 356 vs 361 (-1.4%),
  users 162 vs 141 (+14.9%), pageviews 1,749 vs 1,518 (+15.2%), engagement 62.1% vs 57.1%.
  No site-wide traffic anomaly. One measurement outlier was isolated: a single China/desktop
  Organic Search session on `/resources` emitted 31 raw `generate_lead` events on 08-28 but
  counted as one key event; weekly reporting will use key events and watch for recurrence.

**Actions / interference check**
- Keep lead instrumentation, all new pages, hubs, and Breadcrumb markup unchanged.
- Do not add invented Product offers, prices, ratings, or testimonials. Any Product-schema
  iteration would overlap the pending site-wide JSON-LD experiment's pages and metrics; no such
  change ships before its 09-27 verdict unless the owner explicitly chooses to re-baseline.
- No code, schema, content, commit, push, or deployment action was taken in this review.
- Aggregate movements were not material enough to shift the baseline; no new baseline file.

**Next dates**: 2026-09-06 CTR-refresh verdict; 2026-09-10 operational lead read;
2026-09-15 rankings/H1/AI-referral review; 2026-09-27 structural/full-effect review.
