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
- **2026-09-06** — completed: CTR refresh INCONCLUSIVE; skirting-image smoke check WORKED.
- **2026-09-10** — operational lead read completed 2026-09-13; next read 2026-09-17.
- **2026-09-15** — rankings: new posts, hub effect on "spc skirting", AI-referral trend.
  Also recheck the desktop GA4/GSC discrepancy identified on 2026-09-13.
- **2026-09-17** — CTR follow-up with a full finalized 28-day post-launch window; weekly leads.
- **2026-09-27** — full structural verdict vs baseline + next iteration plan.

Parallel changes: new work may ship while experiments are PENDING, but only after the
interference check in `docs/seo/README.md` (Change interference): disjoint scope ships
freely; overlapping scope waits, re-baselines, or goes INCONCLUSIVE; site-wide changes get a
cohort marker in every open entry.

Last review run: 2026-09-13 (passive checks + overdue weekly lead read; no new experiment
verdicts due; desktop GA4/GSC discrepancy flagged; rankings 2026-09-15, CTR/leads 2026-09-17)

---

## Open experiments

### [2026-08-14] GA4 lead tracking (generate_lead + file_download key events) — commit ae721ed
- **Change**: `generate_lead` event on WhatsApp button, starter-pack dialogs (whatsapp/email,
  pack_id), contact-page tel/mailto links (office param). Both events registered as GA4 key events.
- **Hypothesis**: we cannot improve what we cannot count; lead baseline enables all future CRO.
- **Primary metric(s)**: weekly `generate_lead` key-event count (baseline 0); file_download count.
- **Review due**: first read completed 2026-09-03; 2026-09-10 operational read completed
  2026-09-13; next weekly read **2026-09-17**.
- **Verdict**: **WORKED — 2026-09-03.** GA4 recorded 17 `generate_lead` key events and
  5 `file_download` key events from 2026-08-14 through 2026-09-02, versus a lead baseline of 0;
  the instrumentation is firing. These are lead-intent actions, not confirmed sales leads.
- **Action**: keep tracking. Use `keyEvents` (10 in 08-14→20, 4 in 08-21→27, 3 in the
  partial 08-28→09-02 week) rather than raw event count for the weekly read: one China/desktop
  Organic Search session on `/resources` generated 31 raw events on 2026-08-28 but only one
  key event. Watch for recurrence before considering a deduplication change.
- **Operational update — 2026-09-13**: latest seven-day read 09-05→09-11 has
  **3 `generate_lead` key events and 3 `file_download` key events**, versus 2 and 0 in
  08-29→09-04. Since launch through 09-11: **20 lead key events / 8 download key events**.
  No new raw-event burst since 08-28; the three latest lead actions each have matching raw
  and key counts. Keep tracking and the existing WORKED instrumentation verdict; these
  small counts do not establish conversion growth. [Evidence](reviews/2026-09-13.md).
- **2026-09-13 content cohort**: approved manufacturer/About expansion, six new purchasing
  articles and resource/document improvements are recorded in the manufacturer-content
  launch entry below. Existing URLs, metadata test variants, product schema and event code
  remain unchanged. Shared Article image paths and team-author type were repaired.
  Separate this new discovery/conversion opportunity in aggregate reads;
  retain this experiment's original baseline and review date.
- **2026-09-14 FAQ/photo cohort**: FAQ markup and a portrait shipped on the limited page
  cohort in [the new baseline](baselines/2026-09-14-faq-schema.md). Event code is unchanged;
  mark September 13 Pacific in later aggregate engagement/lead comparisons.
- **2026-09-14 technical-content cohort**: six new specification/installation/heating
  articles, their technical tag pages and two original diagrams ship as a separate cohort.
  Shared blog Open Graph/Twitter image URLs now use real `/images/...` assets on Turkish
  pages. Existing article bodies, titles/descriptions, Article data and related-post cohorts
  are unchanged. [Scope, interference treatment and checks](content-strategy/2026-09-14-technical-content-launch.md).
  Keep this entry's original page/query baseline and review dates. Mark aggregate reads
  with the content cohort; the WORKED lead-instrumentation verdict is not reopened.

### [2026-08-15] AI crawlers unblocked (Cloudflare AI Crawl Control) — no code commit
- **Change**: CF dashboard "Manage robots.txt" set to not manage; robots.txt now repo-clean
  (GPTBot, ClaudeBot, Google-Extended etc. allowed). "Block AI training bots" was already off.
- **Hypothesis**: being crawlable by answer engines grows AI-referral traffic over time.
- **Primary metric(s)**: GA4 "AI Assistant" channel sessions (baseline 6/90d).
- **Review due**: 2026-09-15.
- **Verdict**: PENDING
- **Action**: —
- **2026-09-13 content cohort**: approved manufacturer/About expansion, six new purchasing
  articles and resource/document improvements are recorded in the manufacturer-content
  launch entry below. Existing URLs, metadata test variants, product schema and event code
  remain unchanged. Shared Article image paths and team-author type were repaired.
  Separate this new discovery/conversion opportunity in aggregate reads;
  retain this experiment's original baseline and review date.
- **2026-09-14 FAQ/photo cohort**: six FAQ pages gained explicit Question/Answer markup;
  see [scope and baseline](baselines/2026-09-14-faq-schema.md). Later AI-referral trends include
  this intervention from September 13 Pacific; keep the original crawler baseline.
- **2026-09-14 technical-content cohort**: six new specification/installation/heating
  articles, their technical tag pages and two original diagrams ship as a separate cohort.
  Shared blog Open Graph/Twitter image URLs now use real `/images/...` assets on Turkish
  pages. Existing article bodies, titles/descriptions, Article data and related-post cohorts
  are unchanged. [Scope, interference treatment and checks](content-strategy/2026-09-14-technical-content-launch.md).
- **Re-baseline — 2026-09-14**: new content overlaps the aggregate AI-referral metric.
  Ship and re-baseline the combined cohort to **1 AI Assistant session / 28 days**, versus
  **1 / 28 days** previously, in the [fresh dated baseline](baselines/2026-09-14-technical-content.md).
  New combined-effect review **2026-10-26**. Keep the original 6/90-day history and September
  15 pre-batch checkpoint, but do not isolate later movement as a crawler/llms.txt effect.

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
- **2026-09-13 content cohort**: approved manufacturer/About expansion, six new purchasing
  articles and resource/document improvements are recorded in the manufacturer-content
  launch entry below. Existing URLs, metadata test variants, product schema and event code
  remain unchanged. Shared Article image paths and team-author type were repaired.
  Separate this new discovery/conversion opportunity in aggregate reads;
  retain this experiment's original baseline and review date.
- **2026-09-14 FAQ schema addition**: six FAQ pages gained matching FAQPage data; all
  existing Article/Product/Breadcrumb data is retained. Keep the original appearance checks
  and mark this additional cohort in broader visibility reads; see the
  [separate FAQ baseline and October 26 review](baselines/2026-09-14-faq-schema.md).
- **2026-09-14 technical-content cohort**: six new specification/installation/heating
  articles, their technical tag pages and two original diagrams ship as a separate cohort.
  Shared blog Open Graph/Twitter image URLs now use real `/images/...` assets on Turkish
  pages. Existing article bodies, titles/descriptions, Article data and related-post cohorts
  are unchanged. [Scope, interference treatment and checks](content-strategy/2026-09-14-technical-content-launch.md).
  Keep this entry's original page/query baseline and review dates. Mark aggregate reads
  with the content cohort; the WORKED lead-instrumentation verdict is not reopened.

### [2026-08-15] Localized collection H1s — commit 8daf750
- **Change**: collection pages got unique localized keyword H1s (was shared English
  "QUICK SHIP: ..." slogan, demoted to eyebrow). Also fixed: 5 premier collections had shared one H1.
- **Hypothesis**: H1 is the strongest on-page signal; TR pages rank on TR terms.
- **Primary metric(s)**: positions/CTR for collection terms ("spc parke" 4.9, collection pages' CTR).
- **Review due**: 2026-09-15.
- **Verdict**: PENDING
- **Action**: —
- **2026-09-13 content cohort**: approved manufacturer/About expansion, six new purchasing
  articles and resource/document improvements are recorded in the manufacturer-content
  launch entry below. Existing URLs, metadata test variants, product schema and event code
  remain unchanged. Shared Article image paths and team-author type were repaired.
  Separate this new discovery/conversion opportunity in aggregate reads;
  retain this experiment's original baseline and review date.
- **2026-09-14 technical-content cohort**: six new specification/installation/heating
  articles, their technical tag pages and two original diagrams ship as a separate cohort.
  Shared blog Open Graph/Twitter image URLs now use real `/images/...` assets on Turkish
  pages. Existing article bodies, titles/descriptions, Article data and related-post cohorts
  are unchanged. [Scope, interference treatment and checks](content-strategy/2026-09-14-technical-content-launch.md).
  Keep this entry's original page/query baseline and review dates. Mark aggregate reads
  with the content cohort; the WORKED lead-instrumentation verdict is not reopened.

### [2026-08-15] Blog alternate-locale redirects 307→308 — commit 8daf750
- **Change**: unprefixed TR-slug blog URLs now permanent-redirect to /tr canonicals.
- **Hypothesis**: consolidates indexing/link equity onto canonical URLs.
- **Primary metric(s)**: GSC indexed-URL mix for the affected slugs; /tr URL clicks vs unprefixed.
- **Review due**: 2026-09-27.
- **Verdict**: PENDING
- **Action**: —
- **2026-09-13 content cohort**: approved manufacturer/About expansion, six new purchasing
  articles and resource/document improvements are recorded in the manufacturer-content
  launch entry below. Existing URLs, metadata test variants, product schema and event code
  remain unchanged. Shared Article image paths and team-author type were repaired.
  Separate this new discovery/conversion opportunity in aggregate reads;
  retain this experiment's original baseline and review date.
- **2026-09-14 technical-content cohort**: six new specification/installation/heating
  articles, their technical tag pages and two original diagrams ship as a separate cohort.
  Shared blog Open Graph/Twitter image URLs now use real `/images/...` assets on Turkish
  pages. Existing article bodies, titles/descriptions, Article data and related-post cohorts
  are unchanged. [Scope, interference treatment and checks](content-strategy/2026-09-14-technical-content-launch.md).
  Keep this entry's original page/query baseline and review dates. Mark aggregate reads
  with the content cohort; the WORKED lead-instrumentation verdict is not reopened.

### [2026-08-15] llms.txt — commit 8daf750
- **Change**: curated AI-engine map at /llms.txt.
- **Hypothesis**: helps AI engines route to key content.
- **Primary metric(s)**: qualitative; AI-referral trend (with entry "AI crawlers unblocked").
- **Review due**: 2026-09-15 (joint verdict with crawler unblock).
- **Verdict**: PENDING
- **Action**: —
- **2026-09-13 content cohort**: approved manufacturer/About expansion, six new purchasing
  articles and resource/document improvements are recorded in the manufacturer-content
  launch entry below. Existing URLs, metadata test variants, product schema and event code
  remain unchanged. Shared Article image paths and team-author type were repaired.
  Separate this new discovery/conversion opportunity in aggregate reads;
  retain this experiment's original baseline and review date.
- **2026-09-14 FAQ/photo cohort**: the [FAQ addition](baselines/2026-09-14-faq-schema.md)
  overlaps aggregate AI-referral interpretation from September 13 Pacific. The llms.txt file
  and its original baseline are unchanged; do not isolate its effect from the newer content.
- **2026-09-14 technical-content cohort**: six new specification/installation/heating
  articles, their technical tag pages and two original diagrams ship as a separate cohort.
  Shared blog Open Graph/Twitter image URLs now use real `/images/...` assets on Turkish
  pages. Existing article bodies, titles/descriptions, Article data and related-post cohorts
  are unchanged. [Scope, interference treatment and checks](content-strategy/2026-09-14-technical-content-launch.md).
- **Re-baseline — 2026-09-14**: new content overlaps the aggregate AI-referral metric.
  Ship and re-baseline the combined cohort to **1 AI Assistant session / 28 days**, versus
  **1 / 28 days** previously, in the [fresh dated baseline](baselines/2026-09-14-technical-content.md).
  New combined-effect review **2026-10-26**. Keep the original 6/90-day history and September
  15 pre-batch checkpoint, but do not isolate later movement as a crawler/llms.txt effect.

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
- **2026-09-13 content cohort**: approved manufacturer/About expansion, six new purchasing
  articles and resource/document improvements are recorded in the manufacturer-content
  launch entry below. Existing URLs, metadata test variants, product schema and event code
  remain unchanged. Shared Article image paths and team-author type were repaired.
  Separate this new discovery/conversion opportunity in aggregate reads;
  retain this experiment's original baseline and review date.
- **2026-09-14 technical-content cohort**: six new specification/installation/heating
  articles, their technical tag pages and two original diagrams ship as a separate cohort.
  Shared blog Open Graph/Twitter image URLs now use real `/images/...` assets on Turkish
  pages. Existing article bodies, titles/descriptions, Article data and related-post cohorts
  are unchanged. [Scope, interference treatment and checks](content-strategy/2026-09-14-technical-content-launch.md).
  Keep this entry's original page/query baseline and review dates. Mark aggregate reads
  with the content cohort; the WORKED lead-instrumentation verdict is not reopened.

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
- **2026-09-13 content cohort**: approved manufacturer/About expansion, six new purchasing
  articles and resource/document improvements are recorded in the manufacturer-content
  launch entry below. Existing URLs, metadata test variants, product schema and event code
  remain unchanged. Shared Article image paths and team-author type were repaired.
  Separate this new discovery/conversion opportunity in aggregate reads;
  retain this experiment's original baseline and review date.
- **2026-09-14 technical-content cohort**: six new specification/installation/heating
  articles, their technical tag pages and two original diagrams ship as a separate cohort.
  Shared blog Open Graph/Twitter image URLs now use real `/images/...` assets on Turkish
  pages. Existing article bodies, titles/descriptions, Article data and related-post cohorts
  are unchanged. [Scope, interference treatment and checks](content-strategy/2026-09-14-technical-content-launch.md).
  Keep this entry's original page/query baseline and review dates. Mark aggregate reads
  with the content cohort; the WORKED lead-instrumentation verdict is not reopened.

### [2026-08-16] CTR refresh of 3 blog topics — commit ee18f48
- **Change**: year-stamped, benefit-driven titles/descriptions on spc-wall-panel-bathroom-usage
  (+FAQ section), kermit-spc-skirting-advantages, spc-wall-panel-usage-areas (EN/TR).
- **Hypothesis**: same positions, higher CTR.
- **Primary metric(s)**: CTR — "spc wall panels for bathroom" 0.5% @ 9.8 (928 imp);
  "spc skirting" blog 0.5% @ 6.9; "spc duvar kaplama" 1.8% @ 6.3 (279 imp).
- **Review due**: initial read completed 2026-09-06; follow-up **2026-09-17** with finalized
  2026-08-17→09-13 vs 2026-07-19→08-15 (28d each, excluding the launch day).
- **Verdict**: **INCONCLUSIVE — 2026-09-06.** Only 19 complete post-launch days through
  09-04. Matched 19d before→after exact-query clicks/impressions: bathroom 1/157→0/44,
  skirting 1/346→0/312, wall cladding 3/43→2/71. Bathroom impressions fell 72% at nearly
  unchanged position, but the English page's all-query CTR rose 0.95%→1.57%; the signals
  and low click counts do not establish a title effect. All six refreshed pages are indexed,
  recrawled after launch, and serve the shipped metadata. Full evidence, standard 28d
  comparison, and URL-alias handling: [2026-09-06 review](reviews/2026-09-06.md).
- **Action**: keep all six posts unchanged; recheck after the full post-launch window and
  sufficient click volume. Watch the bathroom query's impression decline; inspect query and
  country/device mix if it persists. More time alone will not isolate the skirting title's
  contribution from the hub; report the combined outcome if attribution remains confounded.
- **Interference recorded 2026-09-06**: the same-day 2026-08-16 hub launch overlaps
  "spc skirting"; its **2026-09-03 card-image repair** is another cohort boundary for this
  query. Turkish posts also overlap the 2026-08-15 redirect change, so combine each old
  unprefixed URL with its `/tr` counterpart for page comparisons. No new change or baseline
  reset in this review.
- **2026-09-13 content cohort**: approved manufacturer/About expansion, six new purchasing
  articles and resource/document improvements are recorded in the manufacturer-content
  launch entry below. Existing URLs, metadata test variants, product schema and event code
  remain unchanged. Shared Article image paths and team-author type were repaired.
  Separate this new discovery/conversion opportunity in aggregate reads;
  retain this experiment's original baseline and review date.
- **2026-09-14 FAQ amendment**: bathroom EN/TR pages gained FAQPage markup without title
  or visible-text edits. Ship date is **September 13 Pacific**, so the original 28-day window
  includes part of deployment day. On September 17, retain the original comparison and add
  the clean 27-day sensitivity check **08-17→09-12 vs 07-20→08-15**. Treat subsequent reads
  as overlapping interventions; [dated FAQ baseline](baselines/2026-09-14-faq-schema.md).
- **2026-09-14 technical-content cohort**: six new specification/installation/heating
  articles, their technical tag pages and two original diagrams ship as a separate cohort.
  Shared blog Open Graph/Twitter image URLs now use real `/images/...` assets on Turkish
  pages. Existing article bodies, titles/descriptions, Article data and related-post cohorts
  are unchanged. [Scope, interference treatment and checks](content-strategy/2026-09-14-technical-content-launch.md).
  The three Turkish share-image repairs fall after the fixed comparison ending September
  13 Pacific. Preserve the September 17 verdict window and the recorded FAQ sensitivity
  check; mark later comparisons with the image repair rather than attributing them to titles alone.

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
- **Cohort / interference note (recorded 2026-09-06)**: card images were repaired on
  **2026-09-03**, commit 171ace5; live verification on 09-06 passed 8/8 images in EN and TR.
  Split later search/engagement reads at that date. The 2026-08-16 blog CTR refresh shares
  "spc skirting" and is INCONCLUSIVE as of 09-06, with follow-up due 09-17; neither entry
  can claim sole credit for movement. Latest indexed hub crawls are still 08-20 EN / 08-21 TR,
  before the repair. Keep the existing 09-15 and 09-27 parent review dates.
- **2026-09-13 content cohort**: approved manufacturer/About expansion, six new purchasing
  articles and resource/document improvements are recorded in the manufacturer-content
  launch entry below. Existing URLs, metadata test variants, product schema and event code
  remain unchanged. Shared Article image paths and team-author type were repaired.
  Separate this new discovery/conversion opportunity in aggregate reads;
  retain this experiment's original baseline and review date.
- **2026-09-14 technical-content cohort**: six new specification/installation/heating
  articles, their technical tag pages and two original diagrams ship as a separate cohort.
  Shared blog Open Graph/Twitter image URLs now use real `/images/...` assets on Turkish
  pages. Existing article bodies, titles/descriptions, Article data and related-post cohorts
  are unchanged. [Scope, interference treatment and checks](content-strategy/2026-09-14-technical-content-launch.md).
  Keep this entry's original page/query baseline and review dates. Mark aggregate reads
  with the content cohort; the WORKED lead-instrumentation verdict is not reopened.

### [2026-09-03] Skirting hub card-image fallback — release repair, commit 171ace5
- **Change**: Added a fixed application-image fallback for each of the eight skirting lines on
  `/spc-skirting-boards` and `/tr/spc-supurgelikler`. On a Cloudflare cache miss, the Worker
  cannot use the Node filesystem manifest loader; the fallback prevents empty card `src` values
  and empty ItemList image URLs while preserving the random-per-build selection when available.
- **Hypothesis**: restoring the intended product photography removes blank product cards and
  protects hub engagement and machine readability without changing copy, links, or specs.
- **Primary metric(s)**: card images with a non-empty `src` and `naturalWidth > 0`; live EN
  baseline on 2026-09-03 was **0/8**, target after deployment is **8/8 in both EN and TR**.
  Secondary search metrics remain those of the 2026-08-16 skirting hub experiment above.
- **Review due**: 2026-09-04 live smoke check completed 2026-09-06; retain the 2026-09-15
  ranking and 2026-09-27 full-effect reviews for the parent hub experiment.
- **Verdict**: **WORKED — 2026-09-06.** Production EN and TR hubs each load **8/8** card
  images with non-empty `src`, `complete: true`, and `naturalWidth > 0` (baseline EN 0/8).
  Both pages return HTTP 200 with self-canonicals and eight actual ItemList image URLs.
- **Action**: keep the repair; smoke-check milestone closed. Treat the 2026-09-15 ranking
  read as a pre/post-repair cohort and do not attribute all movement solely to the original
  hub launch. Parent hub and overlapping blog CTR entries now both record the repair date;
  this operational pass is not a search-ranking verdict.

### [2026-09-13] Manufacturer purchasing guides and product documents — commit d10e888
- **Change**: expand `/about` and `/tr/hakkimizda`; publish three new English/Turkish blog
  pairs (manufacturer selection, samples/quotes, OEM); render resource discovery in initial
  HTML; add four reviewed technical/installation PDFs and clear request actions for missing
  documents. Mobile consent-banner stacking also prevents the chat from covering privacy
  controls, without changing consent/event logic. [Release scope and source decisions](content-strategy/2026-09-13-manufacturer-launch.md).
- **Hypothesis**: precise wholesale answers, original purchasing guides and accessible product
  documents will improve manufacturer-intent discovery and help qualified buyers prepare enquiries.
- **Primary metric(s)**: fixed manufacturer query group impressions and positions, then clicks;
  six new URLs' indexing and query-to-page allocation. Latest finalized 28 days (08-15→09-11)
  English manufacturer group **55 impressions / 0 clicks** versus **11 / 0** previously;
  `spc parke üreticileri` **18 impressions / 3 clicks / position 2.17** versus **10 / 2 / 1.80**.
  New URLs have no pre-launch history. [Fresh cohort baseline](baselines/2026-09-13-manufacturer-content.md)
  includes existing About/Resources page and GA4 landing metrics with complete query recipes.
- **Secondary measures**: Organic Search landings, lead/download key events and observed AI
  referrals. No direct chatbot citation baseline; lead-intent actions are not qualified leads.
- **Review due**: **2026-09-27 indexing**, **2026-10-11 rankings/snippets**, **2026-10-25 full
  structural effect**. Existing 09-15/09-17/09-27 experiments retain their dates.
- **Interference**: new blog listings/tags and links may affect discovery; About/Resources and
  request/download opportunities can affect site-wide engagement, AI referrals and lead counts.
  Existing six CTR-test article titles/descriptions/URLs and product schemas are unchanged.
  Article schema now uses real shared image URLs (removing erroneous Turkish `/tr/images`
  prefixes) and types the new team author as Organization; include this repair in blog reads.
  Procurement tags keep related-article cohorts separate. Preserve the desktop GA4/GSC
  discrepancy and 09-03 image-repair notes in later comparisons. No old baseline was reset.
- **Verdict**: PENDING.
- **Deployment / validation — 2026-09-13**: code commit **d10e888**, Cloudflare Workers build
  **19b28227-cfdd-4761-8391-2a1cda71a8d7**, version **04d0cc9f-9b55-4040-957b-a9a0a105d08d**;
  build succeeded at **20:11:48 UTC**. GitHub blog guardrails also passed. Production checks
  completed at 20:12-20:14 UTC: **10/10 pages HTTP 200**, correct server-rendered H1/canonical/
  EN-TR alternates, all six articles in the sitemap, **35 internal destinations** working,
  and **4/4 public PDF SHA-256 checks** matching the visually reviewed files. Desktop/mobile
  browser checks passed on all ten pages; request dialogs and privacy controls were checked
  without sending enquiries. Text/blog validation, manifest generation, typecheck and the
  production build passed. All 21 corrected PDF pages were rendered and visually checked.
- **Discovery submission**: Search Console accepted the updated sitemap (HTTP 204), confirmed
  `lastSubmitted` **2026-09-13T20:13:20.001Z**, with processing pending. This is not indexing
  confirmation. [Machine-readable verification](content-strategy/2026-09-13-production-verification.json).
- **Action**: keep the first release live; review on the dates above. The remaining content
  map stays conditional on evidence and the scheduled structural review. Warranty terms
  and correctly scoped certificate publication remain open. No ranking or AI-citation win
  is claimed from deployment checks.
- **Author amendment — 2026-09-14 (Europe/Athens)**: owner requested Barbaros Ahmet Bayram,
  Manufacturing Efficiency Expert, for the six new purchasing articles; see the entry below.
  Treat this as an attribution correction within this launch, not an isolated ranking test.
  Article bodies, FAQs, metadata, URLs and original review dates/baseline remain unchanged.
- **2026-09-14 FAQ/photo amendment**: About and sample/quotation pairs gained FAQPage
  data; all six purchasing articles gained the supplied author portrait. Preserve the
  original content baseline and dates, interpret later results as the combined release,
  and use the [separate markup/photo checkpoint](baselines/2026-09-14-faq-schema.md) for
  technical parity and the October 26 follow-up.
- **2026-09-14 technical-content cohort**: six new specification/installation/heating
  articles, their technical tag pages and two original diagrams ship as a separate cohort.
  Shared blog Open Graph/Twitter image URLs now use real `/images/...` assets on Turkish
  pages. Existing article bodies, titles/descriptions, Article data and related-post cohorts
  are unchanged. [Scope, interference treatment and checks](content-strategy/2026-09-14-technical-content-launch.md).
- **Secondary re-baseline — 2026-09-14**: the new article/document links overlap resource,
  organic-landing, lead/download and AI secondary readings. Use the
  [new dated secondary baseline](baselines/2026-09-14-technical-content.md) and **October 26**
  combined-effect review. Keep the original six-URL/exact manufacturer-query primary
  baseline and September 27 / October 11 / October 25 checks. No sole-cause AI/lead claim.

### [2026-09-14] Named purchasing-guide author — commit c8e22c2
- **Change**: replace Kermit Floor Team with **Barbaros Ahmet Bayram** on the three new EN/TR
  purchasing-guide pairs. Show **Manufacturing Efficiency Expert** in English and
  **Üretim Verimliliği Uzmanı** in Turkish; emit matching `Person`/`jobTitle` Article author
  data. Existing Yasin Bayram articles retain their bylines. No article or FAQ body changes.
- **Hypothesis**: a consistent named author and separate job title clarify responsibility
  for the purchasing guidance for readers and systems consuming Article data.
- **Primary metric + baseline**: visible byline/title matching `Person`/`jobTitle` on the six
  affected URLs: **0/6 before → 6/6 after**. Fresh production baseline captured at
  2026-09-13 22:12 UTC showed Kermit Floor Team / Organization on all six pages.
- **Review due**: **2026-09-14** attribution smoke check; broader content discovery remains
  on the parent launch's September 27, October 11 and October 25 review dates.
- **Interference**: attribution correction on the parent launch's six URLs. No independent
  author-ranking verdict or baseline reset; preserve the parent amendment in later reads.
  All 28 article bodies and all 22 pre-existing post records are unchanged.
- **Validation / deployment**: text and blog validation, type checking and production build
  passed. GitHub blog and Cloudflare checks passed; Cloudflare build
  `0089fed5-fe35-4c09-ad8d-530567d01027`, version `13a4375b-f1af-4709-addd-1b4d2e9cba0f`,
  completed 2026-09-13 22:16:44 UTC (September 14 in Europe/Athens). Production verification
  at 22:17:32 UTC passed on all six changed pages and the EN/TR bathroom FAQ control pair:
  HTTP 200, expected visible author and Article data, original article/FAQ HTML intact.
- **Verdict**: **WORKED — 2026-09-14, attribution correctness only.** No search or AI-citation
  improvement is inferred from this check.
- **Action**: keep the requested author correction. FAQ writing/formatting assessment was
  read-only, as requested by the owner.
- **Portrait follow-up — 2026-09-14**: owner supplied the photograph now displayed on
  Barbaros’s six bylines; name, title and Person author data remain unchanged. Implementation
  and validation are recorded with the FAQPage release below.

### [2026-09-14] FAQPage from visible answers and supplied author portrait — commit 4d4b4e9
- **Change**: add one FAQPage to each EN/TR About, sample/quotation and bathroom wall-panel
  page: **6 pages / 26 answers**. Explicit Markdown FAQ blocks generate the same visible
  headings/complete answers and manifest data; About uses the same translated items in the
  visible list and schema. Add the owner-supplied portrait to Barbaros's six article bylines.
- **Hypothesis**: explicit Question/Answer relationships remove ambiguity for systems that
  consume schema; the matching portrait makes the named byline visually identifiable.
- **Primary metric + baseline**: exact visible/schema parity **0/6 → 6/6 FAQ pages**;
  supplied portrait **0/6 → 6/6 bylines**. All 24 other blog pages retain no FAQPage.
  [Dated technical baseline, URLs and measurement constraints](baselines/2026-09-14-faq-schema.md).
- **Review due**: immediate deployment parity check **2026-09-14**; maintenance and
  observational full-effect follow-up **2026-10-26**. Google FAQ rich-result appearance is
  not a success metric because that feature is retired; no direct citation baseline exists.
- **Interference**: this is a limited-page addition, not an all-page FAQ template. Existing
  article wording, metadata, canonicals and prior schemas are unchanged. Parent manufacturer
  launch and aggregate AI/lead reads include this cohort; the bathroom CTR comparison needs
  the 27-day sensitivity check recorded in its entry. **September 14 Europe/Athens is
  September 13 Pacific** for this deployment. Preserve original baselines and verdict dates;
  the new technical baseline and October 26 review track this addition separately.
- **Validation**: production build, text/blog validation and type checking passed. All 28
  blog bodies and About bodies match their preceding rendered HTML; prior JSON-LD data is
  unchanged. FAQ parser checks cover multiple paragraphs, lists, inline formatting/code,
  complete answer boundaries and invalid blocks. EN/TR desktop/mobile photo checks passed
  without byline truncation or horizontal overflow. The portrait is the supplied PNG, unchanged.
- **Deployment**: GitHub blog guardrails and Cloudflare build passed. Build
  `048b4d15-12f5-430d-b04b-c1e87bfe72e3`, version `60c1496e-d3bf-47f8-a717-aac9290a8d97`,
  completed **2026-09-13 22:39:54 UTC**. At **22:40:30 UTC**, all **30 production pages passed**:
  HTTP 200, expected FAQ presence/absence, language/canonical identities, 26 visible answers
  matching schema, six portrait bylines and unchanged prior JSON-LD. The public portrait
  returned HTTP 200 with the exact source SHA-256 recorded in the baseline.
- **Verdict**: **WORKED — 2026-09-14, implementation correctness only.** Search/AI impact
  remains unproven; no ranking or citation improvement is inferred from markup checks.
- **Action**: keep both requested additions. Future FAQ edits update the visible content and
  schema together through the documented build process; review maintenance on October 26.
- **2026-09-14 technical-content cohort**: six new specification/installation/heating
  articles, their technical tag pages and two original diagrams ship as a separate cohort.
  Shared blog Open Graph/Twitter image URLs now use real `/images/...` assets on Turkish
  pages. Existing article bodies, titles/descriptions, Article data and related-post cohorts
  are unchanged. [Scope, interference treatment and checks](content-strategy/2026-09-14-technical-content-launch.md).
  The six new FAQ pages add 20 visible/schema-matched answers. Keep this entry's original
  six-page/26-answer technical baseline fixed; validate the new cohort separately.

### [2026-09-14] Technical specification, installation and heating guides — commit pending deployment
- **Change**: publish three EN/TR topic pairs (six URLs), two original localized layer
  diagrams and direct links to the applicable product PDFs. Correct Turkish blog Open Graph
  and Twitter image paths; no existing title/description/body or Article data is changed.
  [Editorial scope and claim sources](content-strategy/2026-09-14-technical-content-launch.md).
- **Hypothesis**: practical specification and site-planning answers, supported by Kermit
  documents, will create technical-query discovery and help readers prepare suitable projects.
- **Primary metric + baseline**: six new URLs' indexing, impressions, position and query
  allocation. Fresh GSC returns no rows for these URLs or the fixed 13-query technical group
  in either finalized 28-day window (08-15→09-11 vs 07-18→08-14). All six production URLs
  returned 404 at **2026-09-14 07:13 UTC** before release. No rows are not proof of no demand.
  [Baseline and exact API requests](baselines/2026-09-14-technical-content.md).
- **Secondary measures**: article landings, related resource use, lead/download key events
  and observed AI referrals. Qualified leads, sales and direct chatbot citations are not
  inferred from these metrics.
- **Review due**: **2026-09-28 indexing**, **2026-10-12 rankings/query allocation**,
  **2026-10-26 full content/link and overlapping secondary effects**.
- **Interference treatment**: ship and re-baseline the crawler/llms.txt aggregate AI metric
  and manufacturer secondary resource/organic/lead/AI readings to the new dated baseline,
  with an October 26 combined-effect review and matching notes in the parent entries.
  Preserve original history and disjoint exact-query/page checks. New technical tags leave
  all 28 existing related-post cohorts unchanged. The shared image-path repair has a cohort
  marker in every open entry; the fixed September 17 CTR window ends before this release.
- **Technical checkpoint**: new visible FAQs must match 20 generated answers; Article and
  canonical/locale identity must match on all six pages. All 34 articles' cover/share-image
  URLs must resolve to the correct shared asset. This checkpoint is separate from SEO impact.
- **Validation**: paired content/text validation, FAQ manifest generation and production
  build passed. All 28 pre-existing post records and related-post cohorts are preserved.
  Local production preview passed on all 34 articles: metadata/image identities, existing
  body preservation and FAQ parity; 22 internal destinations and 18 asset byte checks passed.
  All six new pages passed desktop/mobile checks (12 checks) with no body overflow or broken
  images. The EN/TR diagrams and mobile tables were visually inspected. Production verification
  is pending deployment.
- **Deployment**: prepared locally; commit and production outcome will be recorded after shipping.
- **Verdict**: PENDING.
- **Action**: complete production checks; evaluate discovery on the dates above. Remaining
  roadmap topics retain their evidence dependencies and structural-review sequencing.

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

**Same-day open-workstream audit (fresh passive read).** No additional experiment was due for
a verdict. GSC had advanced through 2026-09-01: the six newest URLs all remained Submitted and
indexed with matching Google/user canonicals and reached a combined **29 clicks / 2,092
impressions** from 08-15 through 09-01. Latest 28d vs preceding 28d was 701 vs 669 clicks
(**+4.8%**), 17,858 vs 16,540 impressions (**+8.0%**), 3.93% vs 4.04% CTR, and position 9.41
vs 8.53 (0.87 worse); still no large unexplained swing. `searchAppearance` remained empty.
URL Inspection still found valid Breadcrumbs on the sampled Product page, while Product
snippet eligibility remained blocked by the truthful absence of `offers`, `review`, or
`aggregateRating`; Alpha 140 still had not been recrawled since 08-12. GA4 access and its
08-06→09-02 totals matched the earlier same-day read. The Ads probe again returned
`DEVELOPER_TOKEN_NOT_APPROVED` (token still TEST level). No baseline shift and no code,
schema, content, commit, push, or deployment action.


---

## Review 2026-09-06

Completed today's CTR-refresh review and the overdue 09-04 skirting-card smoke check.
GSC finalized data and GA4 reports run through **2026-09-04**. Detailed tables and
methods: [2026-09-06 review report](reviews/2026-09-06.md).

**Data access**
- Initial GA4 MCP and ADC token mint failed with reauthentication errors. The README
  credential recovery command succeeded; a fresh local GA4 MCP account-summary call then
  worked, and GSC/GA4 reports succeeded through the documented direct APIs. Google MCP tools
  were not exposed in this app session, so the configured servers were called via temporary
  stdio clients. Run `/reload` to refresh the app's Google connections after recovery; the
  review itself used fresh processes and working direct API access.
- Ads campaign reporting probe: developer token still **TEST level**, approved only for
  test accounts. No Ads reporting data available.

**Due verdicts**
- **CTR refresh — INCONCLUSIVE.** Standard latest28 vs prior28 exact-query CTR appears to
  rise (bathroom 0→0.75%, skirting 0→0.21%, wall cladding 1.09→5.26%), but the latest window
  includes eight pre-launch days and the launch day. Matched 19d before→after clicks/
  impressions are 1/157→0/44, 1/346→0/312, and 3/43→2/71 respectively. Only two target-query
  clicks after launch, mixed page signals, and hub/redirect overlap prevent a reliable title
  verdict. Keep unchanged; new review due **2026-09-17** after a full post-launch 28d window.
- **Skirting-card fallback — WORKED.** All eight card images load in each language and all
  eight ItemList entries have actual image URLs. Keep repair; search-effect dates unchanged.
- No early verdicts on AI crawlability, llms.txt, H1s, new-post rankings/leads, hub rankings,
  redirects, or full structured-data effects.

**Passive checks**
- All six newest URLs remain Submitted and indexed, fetch-successful, and self-canonical:
  **33 clicks / 2,553 impressions** combined from 08-15 through 09-04.
- Both hubs and all **11** English Product-schema pages have valid Breadcrumb items. Alpha
  140 was finally recrawled on 09-03; it now has the same missing `offers`/`review`/
  `aggregateRating` Product-snippet eligibility issue as the other ten. Site-wide and
  product-page `searchAppearance` reports still return no rows. No new schema verdict before
  09-27 and no invented commercial/review data.
- GSC 08-08→09-04 vs 07-11→08-07: **709 vs 656 clicks (+8.1%)**, **18,269 vs 16,372
  impressions (+11.6%)**, CTR 3.88% vs 4.01%, position 9.20 vs 8.58 (0.62 worse). Latest
  impression pace 652/day is only 3.3% above the original 90d baseline; no large site-wide
  anomaly. Watch the bathroom exact-query impression decline (157→44 over matched 19d,
  position 10.94→10.82), without attributing it to the snippet yet.
- GA4 latest28: **352 sessions / 160 users / 1,804 pageviews / 62.2% engagement**, versus
  339 / 129 / 1,264 / 53.7% in the preceding28 and 361 / 141 / 1,518 / 57.1% in the original
  baseline. Sessions remain stable; pageview growth does not imply an equivalent traffic
  increase. Passive 08-28→09-04 lead read shows the known 31-raw/1-key event on 08-28, then
  one event/key event each on 09-01 and 09-02; no new burst. Operational read stays 09-10.

**Actions / interference / next iteration**
- Kept current content, metadata, schema, and the image repair. Added the 09-03 repair cohort
  note to the parent hub and overlapping CTR experiment; retain old/new Turkish URL pairs
  in CTR comparisons. The full report lists the open scopes and their due dates.
- Review rankings on 09-15, then CTR on 09-17. If bathroom-query impressions stay depressed,
  inspect query variants and country/device mix before proposing a new content iteration.
  Skirting iterations must account for the hub and blog together; schema work waits for the
  09-27 verdict or an explicitly approved baseline/interference decision.
- Docs-only updates: this logbook and the review report. Existing logbook edits preserved.
  No website change, commit, push, or deployment. No material aggregate baseline shift;
  no new baseline file. **A docs-only push still triggers a Cloudflare build.**

**Next dates**: 2026-09-10 operational lead read; 2026-09-15 rankings/H1/AI-referrals;
**2026-09-17 CTR follow-up**; 2026-09-27 structural/full-effect review.


---

## Review 2026-09-13

Partial review: no pending experiment is due for a new verdict. Completed passive checks
and the overdue 09-10 operational lead read. GSC finalized data and GA4 reports run through
**2026-09-11**. [Detailed review](reviews/2026-09-13.md) and
[dated monitoring snapshot](baselines/2026-09-13.md).

**Data access**

- Initial GA4 MCP and ADC token mint failed with reauthentication errors. The README recovery
  command succeeded; a fresh local GA4 MCP account-summary retry and direct GA4/GSC reports
  worked. Google tools were not exposed in this app session, so configured local MCP servers
  were called via temporary stdio clients. No app restart was needed. The repo's `/reload`
  instruction is not a documented command in the current desktop app; working fresh clients
  were sufficient for this run.
- Ads campaign reporting probe: still restricted to test accounts; **token still TEST level**.

**Operational lead read**

- 09-05→09-11: **3 lead-intent key events / 3 download key events**; previous seven days:
  **2 / 0**. Since 08-14 through 09-11: **20 / 8**. No new raw/key-event burst after the known
  08-28 outlier. Keep instrumentation; existing WORKED verdict stands. Next read **09-17**.

**Passive checks**

- All six newest URLs are Submitted and indexed, fetch-successful and self-canonical:
  **44 clicks / 3,506 impressions** combined from 08-15 through 09-11. The Turkish hub was
  recrawled on **09-08**, after the 09-03 image repair; the English hub's indexed crawl is
  still **08-20**. Retain this distinction for the parent hub review.
- Both hubs and all 11 English Product-schema pages show valid Breadcrumb items. All 11
  Product items still report missing `offers`/`review`/`aggregateRating`; site-wide and
  product-filtered `searchAppearance` reports still have no rows. No early schema verdict.
- GSC 08-15→09-11 vs 07-18→08-14: **673 vs 656 clicks (+2.6%)**, **18,690 vs 16,348
  impressions (+14.3%)**, CTR **3.60% vs 4.01%**, position **8.63 vs 8.98**. Latest impression
  pace is 668/day, 5.7% above the original 90-day baseline. No site-wide search collapse.
- **GA4 anomaly:** sessions **295 vs 375 (-21.3%)**, users **150 vs 145 (+3.4%)**, pageviews
  **1,655 vs 1,544 (+7.2%)**, engagement **62.7% vs 56.8%**. Organic Search sessions fell
  **272→213**, while organic users rose **107→118**. Türkiye/desktop Organic Search sessions
  fell **103→40 (-61.2%)**, but matching GSC clicks fell only **199→186 (-6.5%)**. Romania/
  desktop Organic Search also fell **30→13**. The known Ukraine/mobile Direct cohort has no
  latest-period rows (previously 15 sessions); that alone does not explain the organic drop.
  Cause remains unresolved. Recheck desktop measurement and traffic mix on **09-15**.
- **Bathroom watch:** exact-query impressions **228→67 (-70.6%)**, position **10.68→11.66**,
  clicks **1→0**. Mobile accounts for most of the impression loss (**178→47**). The English
  page across all queries has **12→16 clicks**, impressions **1,185→946**, CTR **1.01%→1.69%**.
  Related variants also weakened. Preserve the **09-17** CTR follow-up; today's passive
  readings do not change the existing INCONCLUSIVE verdict.

**Actions / interference / next dates**

- Recommended keeping the current site unchanged through the scheduled measurement windows.
  No pending experiment was judged early, and no new change needs an interference decision.
  Preserve the hub/title overlap, 09-03 repair cohort and old/new Turkish blog URL pairs.
- **09-15:** rankings, H1s, AI referrals, plus the desktop analytics discrepancy.
  **09-17:** full-window CTR follow-up and weekly leads. **09-27:** structural/full effects.
- Added a dated monitoring snapshot because the GA4 session level/mix shifted materially.
  It preserves the original launch baseline and fixed experiment comparison windows;
  **no experiment baseline or review date was reset**.
- Updated review docs only, preserving existing local edits. No code/content/schema changes,
  commit, push or deployment. **A docs-only push still triggers a Cloudflare build.**
