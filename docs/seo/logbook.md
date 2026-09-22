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
- **2026-09-15** — completed: reviews ranking WORKED; H1s, pricing, hub checkpoint
  and historical AI checkpoint INCONCLUSIVE. Desktop discrepancy persists; consent-order
  concern reproduced. Ads production read access verified. [Review](reviews/2026-09-15.md).
- **2026-09-17** — completed: CTR remains INCONCLUSIVE after the fixed 28-day and
  27-day sensitivity checks; weekly leads 5/4; desktop discrepancy persists. New
  Turkish wall-panel product visibility watch. [Review](reviews/2026-09-17.md).
- **2026-09-21** — completed early passive/operational review: no verdict due;
  16/18 new articles indexed, eight search clicks; weekly leads 5/8; existing
  sitemap locale-entry gap recorded. Consent/contact repair shipped separately today.
  [Review](reviews/2026-09-21.md).
- **2026-09-24** — weekly lead read, descriptive desktop follow-up and Turkish wall-panel watch.
- **2026-09-27** — full structural verdict vs baseline, H1/pricing follow-ups,
  combined CTR-topic outcome, Turkish wall-panel query allocation and manufacturer indexing;
  consider the sitemap locale-entry correction after these readings. Later content indexing:
  September 28/29; consent operations September 28; desktop comparison October 5; interim
  rankings October 11/12/13. Conversion/contact comparisons October 21 at the earliest;
  FAQ maintenance October 26; GSC content/link effects October 27; combined GA4 AI effects
  November 2, per the September 21 measurement re-baseline. The September 21 wall-panel
  link release also sets November 2 for the overlapping wall-panel search outcome;
  September 27 keeps unaffected cohorts and pre-link historical reads.

- **2026-09-22 content continuation** — next batch checks October 6 indexing, October 20
  rankings and November 3 combined content/link/aggregate AI effects. November 3 supersedes
  October 27 content effects and November 2 aggregate AI only; retain November 2 wall-panel
  outcomes and September 21 consent/office-specific operational dates.

Parallel changes: new work may ship while experiments are PENDING, but only after the
interference check in `docs/seo/README.md` (Change interference): disjoint scope ships
freely; overlapping scope waits, re-baselines, or goes INCONCLUSIVE; site-wide changes get a
cohort marker in every open entry.

Last review run: 2026-09-21 (no verdict due; fresh passive/operational review complete;
16/18 September articles indexed, two crawled/not indexed; eight content clicks; weekly
lead/download keys 5/8; sitemap locale-entry gap recorded; next operations September 24,
structural/CTR September 27; preserve the separately shipped September 21 GA4 re-baseline)

---

## Open experiments

### [2026-09-21] Direct Turkish product links from wall-panel articles — commit 2bcdbac
- **Change**: the Turkish usage-guide and bathroom-renovation article body links now
  explicitly target `/tr/spc-duvar-panelleri` rather than the English product URL.
  Copy, metadata, English articles and shared rendering are unchanged.
- **Hypothesis**: explicit locale destinations improve the reader path and support
  the intended product URL's discovery. Existing links are not a proven loss cause.
- **Primary metrics / baseline**: Turkish product impressions/position and product/guide
  allocation for `spc duvar paneli` and `spc panel`, with property query clicks as a
  guardrail. Latest 28 days: product **14 clicks / 354 impressions / position 9.13**;
  exact product queries **4/98/9.80** and **0/5/14.20**. [Dated baseline and scope](baselines/2026-09-21-wall-panel-links.md).
- **Interference**: owner authorized pushing all pending work September 21, superseding
  the proposed September 27 wait. Ship and re-baseline the wall-panel components of
  Product-schema, redirect and combined CTR outcomes; matching notes are in each
  parent entry. Preserve unaffected September 27 checks and historical verdicts.
  Aggregate GA4 interpretations also carry today's existing consent-release break.
- **Review due**: **2026-11-02** combined wall-panel effect, six weeks after deployment;
  exclude September 21. September 27 may still read the pre-release cohort through
  September 20, subject to finalized-data availability.
- **Validation**: production build, text/blog validation and type checks pass. Both
  built article HTML files have the direct Turkish href; manifest comparison confirms
  only the two Turkish articles' content/contentHtml destinations changed.
- **Deployment / verification**: committed and pushed to `main`; Cloudflare Workers
  Build `fa12289c-b120-4473-905f-d8811dadfe0f` and GitHub blog checks succeeded.
  Live checks at **14:48 UTC on September 21** passed for both Turkish articles,
  their two English counterparts and the Turkish product destination: HTTP 200,
  self-canonicals, no noindex, unchanged metadata, correct contextual hrefs and
  preserved English links. [Production evidence](baselines/2026-09-21-wall-panel-links-production.json).
- **Verdict**: PENDING SEO effect; implementation correctness verified September 21.
- **Action**: deployed and verified; keep the direct Turkish links. Review the combined
  wall-panel effect November 2; preserve the pre-release and unaffected September 27 checks.

### [2026-09-21] Analytics consent ordering repair — commit 0e7cbf5
- **2026-09-22 content interference / current treatment**: Six care/use articles add content and contact opportunities. Aggregate AI/content effects now use the [September 22 cohort](baselines/2026-09-22-care-content.md) with **November 3** combined review. September 28 correctness, October 5 desktop and October 21 conversion checks retain their dates and the September 21 measurement break.
- **Change**: grant accepted consent and configure GA before mounting the page tracker;
  block manual lead/page events immediately on rejection and resume after reacceptance.
  Adds 16 desktop/mobile English/Turkish browser regressions.
- **Hypothesis**: correct command ordering prevents initial page views from using denied
  consent after acceptance and improves session/attribution completeness.
- **Primary metric / baseline**: configuration and every tested page view follow granted
  consent; one view per accepted navigation and no manual events after rejection.
  September 15 production capture and pre-fix regression show the initial denied view.
  [Fresh measurement baseline](baselines/2026-09-21-consent-contact.md): 280 sessions,
  16 lead / 15 download keys in the latest 28 days; weekly 5 / 8.
- **Interference**: ship and re-baseline GA4-dependent experiments per the linked treatment;
  all open entries carry the site-wide marker. Germany contact exposure ships concurrently.
  Preserve GSC baselines/dates and original WORKED instrumentation verdict.
- **Validation**: production build passed; all 16 consent tests passed on September 21.
  Cloudflare Workers Builds and GitHub checks succeeded for `0e7cbf5`. Live EN/TR
  desktop/mobile checks with the real GA loader confirm grant → config → page_view,
  saved consent, one page view per accepted navigation, and blocked manual events
  after withdrawal. Intercepted collection payloads use `gcs=G1-1` after acceptance;
  test collection requests never reach Google. [Production evidence](baselines/2026-09-21-production-verification.json).
- **Review due**: September 28 operational check; October 5 desktop comparison;
  October 21 conversion comparisons; November 2 combined AI-referral outcome.
- **Verdict**: PENDING.
- **Action**: deployed and verified September 21; keep the repair and preserve the
  measurement break in all later trend interpretations. Correctness passes; the
  effect on GA4 completeness and desktop trends remains PENDING.

### [2026-09-21] Germany representative on bilingual contact pages — commit 0e7cbf5
- **2026-09-22 content interference / current treatment**: Six new care/use articles add contact opportunities. Keep the Germany-office-specific October 21 metric and baseline; annotate aggregate contact/lead readings with this [content cohort](content-strategy/2026-09-22-care-content-launch.md). No office or event code changes.
- **Change**: IQBody GmbH, representative Suat Altun, Ströherstraße 14D, 36088 Hünfeld,
  and +49 1714071718 on English/Turkish contact pages; click-to-call uses existing
  generate_lead tracking. Four office cards use a responsive two-column desktop layout.
- **Hypothesis**: a named local representative makes German enquiries easier.
- **Primary metric / baseline**: Germany-office phone lead-intent events; baseline zero
  before the new link exists. Contact-page views/keys are EN 16/0 and TR 24/1 in the
  pre-release 28-day [snapshot](baselines/2026-09-21-consent-contact.md).
- **Interference**: overlaps contact-page lead tracking and the concurrent site-wide
  consent repair. Re-baseline together; isolate the new office value in event analysis
  where available, and do not infer conversion growth from aggregate GA4 changes.
  No existing search titles, URLs, structured data or GSC baselines change.
- **Validation**: build and EN/TR desktop/mobile checks pass; exact phone href,
  four cards and absence of horizontal overflow verified. Live EN/TR pages return 200
  at both 1440px and 390px widths, show all supplied details, and queue the Germany
  phone lead with the correct office/method only after consent.
  [Production evidence](baselines/2026-09-21-production-verification.json).
- **Review due**: October 21, after 30 days; low counts may remain inconclusive.
- **Verdict**: PENDING.
- **Action**: deployed and verified September 21. Keep the representative card;
  actual enquiry impact remains PENDING.

### [2026-08-14] GA4 lead tracking (generate_lead + file_download key events) — commit ae721ed
- **2026-09-22 content interference / current treatment**: Six new care/use articles add document and enquiry opportunities. Preserve WORKED instrumentation and September 24 operations; mark the [new cohort](content-strategy/2026-09-22-care-content-launch.md) and existing September 21 consent break in aggregate counts. Combined AI/content effects use November 3, not an isolated lead-growth claim.
- **Additional September 21 navigation confound**: the two Turkish wall-panel
  article links now explicitly target the Turkish product; [scope](baselines/2026-09-21-wall-panel-links.md).
  Interpret aggregate lead/AI readings with this and today's consent repair together;
  preserve the existing October 21 conversion / November 2 AI dates and old verdicts.
- **2026-09-21 release cohort / interference**: site-wide consent-order repair and
  Germany contact card; [fresh baseline and treatment](baselines/2026-09-21-consent-contact.md).
  Re-baseline GA4 comparisons; conversion review October 21 at the earliest, combined
  AI-referral review November 2 (supersedes October 27 for GA4 only). Preserve GSC
  baselines/dates and existing correctness verdicts; check this release for discontinuities.
- **Change**: `generate_lead` event on WhatsApp button, starter-pack dialogs (whatsapp/email,
  pack_id), contact-page tel/mailto links (office param). Both events registered as GA4 key events.
- **Hypothesis**: we cannot improve what we cannot count; lead baseline enables all future CRO.
- **Primary metric(s)**: weekly `generate_lead` key-event count (baseline 0); file_download count.
- **Review due**: weekly operational reads completed September 13, 15 and 17, plus
  an early September 21 update; next **2026-09-24**. Original September 3 verdict retained.
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
- **2026-09-15 project-content cohort**: six distributor/project/design pages add discovery
  and enquiry opportunities. [Dated baseline](baselines/2026-09-15-project-content.md):
  20 lead / 8 download key events in the latest 28 days. No event-code change; retain the
  WORKED instrumentation verdict and September 17 weekly operational read.

- **Operational update — 2026-09-15**: 09-06→09-12 has **4 lead / 3 download key
  events**, versus 2/0 in 08-30→09-05. Since 08-14 through 09-12: **21/8**; latest
  28-day total is 20/8 because August 15 is excluded. No new burst. Preserve WORKED
  instrumentation and the **September 17** weekly date. A live browser check reproduces
  initial page_view before consent-granted update on desktop and mobile, including saved
  consent. This predates August and does not establish the desktop decline's cause.
  A consent-order repair is recommended, not implemented; any ship needs measurement
  interference treatment. [September 15 evidence](reviews/2026-09-15.md).

- **Operational update — 2026-09-17**: 09-09→09-15 has **5 lead / 4 download key
  events**, versus 2/0 in 09-02→09-08. Since 08-14 through 09-15: **23/9**;
  raw counts 55/9. Latest raw lead count is six, with two September 15 AI-channel
  actions producing one key event; no new large burst. Retain **WORKED** for
  instrumentation, not qualified-lead growth. Next weekly and desktop read: **September
  24**. Consent-order source remains unchanged since the September 15 finding; repair
  is recommended and unimplemented. Any repair needs measurement interference treatment.
  [September 17 review](reviews/2026-09-17.md).

- **Passive / operational check — 2026-09-21**: September 13–19 records **5 lead / 8 download key events**,
  versus 4/3 in September 6–12; since launch **26/16**. Seven downloads cluster
  on September 17 TR Resources/Direct. Retain WORKED for instrumentation only and
  the September 24 weekly date. Consent repair shipped separately today; these
  figures precede it. Repair operations September 28; desktop October 5; conversion
  comparisons October 21 at the earliest.
  [September 21 review](reviews/2026-09-21.md).

### [2026-08-15] AI crawlers unblocked (Cloudflare AI Crawl Control) — no code commit
- **2026-09-22 content interference / current treatment**: New underlay/care/room content adds discovery opportunities. Re-baseline the aggregate AI-referral outcome to the [September 22 snapshot](baselines/2026-09-22-care-content.md); **November 3** combined review supersedes November 2 for this metric. Preserve the September 21 consent measurement break and historical verdicts.
- **Additional September 21 navigation confound**: the two Turkish wall-panel
  article links now explicitly target the Turkish product; [scope](baselines/2026-09-21-wall-panel-links.md).
  Interpret aggregate lead/AI readings with this and today's consent repair together;
  preserve the existing October 21 conversion / November 2 AI dates and old verdicts.
- **2026-09-21 release cohort / interference**: site-wide consent-order repair and
  Germany contact card; [fresh baseline and treatment](baselines/2026-09-21-consent-contact.md).
  Re-baseline GA4 comparisons; conversion review October 21 at the earliest, combined
  AI-referral review November 2 (supersedes October 27 for GA4 only). Preserve GSC
  baselines/dates and existing correctness verdicts; check this release for discontinuities.
- **Change**: CF dashboard "Manage robots.txt" set to not manage; robots.txt now repo-clean
  (GPTBot, ClaudeBot, Google-Extended etc. allowed). "Block AI training bots" was already off.
- **Hypothesis**: being crawlable by answer engines grows AI-referral traffic over time.
- **Primary metric(s)**: GA4 "AI Assistant" channel sessions (baseline 6/90d).
- **Review due**: September 15 historical checkpoint completed; **2026-11-02 combined
  GA4 AI effect** after the September 21 consent re-baseline, superseding October 27.
  Historical September content re-baselines remain below.
- **Verdict**: **INCONCLUSIVE — 2026-09-15 historical checkpoint.** Matched
  07-18→08-14 vs 08-16→09-12 has **1→2 AI Assistant sessions**, all ChatGPT; one
  current session contains a lead key event. This is too little referral evidence and does
  not measure chatbot citations. **Combined effect remains pending 2026-10-27.** [September 15 evidence](reviews/2026-09-15.md).
- **Action**: keep. Preserve the original 6/90-day baseline and September content
  re-baselines. Seek sustained referral volume and landing/source patterns at the October
  27 review; direct citation claims need separate measurement. Browser-like requests
  receive HTTP 200 for robots.txt/llms.txt, while default Python urllib receives
  Cloudflare 403/1010. Actual verified AI-bot edge access was not established.
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
- **Re-baseline — 2026-09-15**: the distributor/project/design batch adds six pages and
  overlaps the aggregate AI measure. Use the [fresh September 15 baseline](baselines/2026-09-15-project-content.md):
  **2 AI Assistant sessions / 28 days vs 1 previously**. New combined-effect review
  **October 27** supersedes October 26 for this aggregate outcome. Keep the September 15
  historical checkpoint and earlier snapshots; do not attribute later movement to crawler
  settings or llms.txt alone. The new content entry records the same confound treatment.

- **Passive / operational check — 2026-09-17**: Latest rolling 28 days (08-19→09-15 vs 07-22→08-18) has **6 AI
  Assistant sessions / 3 users**, versus 1/1; all ChatGPT, four engaged sessions and
  two key events. Four sessions cluster on September 15 and land on existing product/
  resource pages. This does not measure direct citations or isolate the newer content.
  Preserve **October 27**, the September 15 INCONCLUSIVE checkpoint and all baselines.
  [September 17 review](reviews/2026-09-17.md).

- **Passive / operational check — 2026-09-21**: Latest 28 days (August 23–September 19) has **13 AI
  Assistant sessions / four users / three key events**, versus 1/1/0 in July 26–
  August 22. All are ChatGPT; no new article landing appears. Keep the historical
  INCONCLUSIVE verdict. Consent repair shipped today; preserve its baseline and
  **November 2** combined GA4 review. Browser-like robots/llms requests return 200;
  verified AI-bot access and direct citations remain unmeasured.
  [September 21 review](reviews/2026-09-21.md).

### [2026-08-15] JSON-LD structured data site-wide — commit 8daf750
- **2026-09-22 narrow content overlap**: the new room guide targets `spc flooring kitchen`,
  which previously had one impression on English Elite. Re-baseline that allocation and
  Elite's all-query secondary reading to the [new snapshot](baselines/2026-09-22-care-content.md)
  for **November 3** combined follow-up. Preserve schema correctness, other September 27
  cohorts and the November 2 wall-panel subset; no existing product/schema code changes.
- **2026-09-21 wall-panel link interference**: two Turkish article body links now
  explicitly target the Turkish product. Owner authorized shipping before September
  27. Re-baseline only the overlapping wall-panel components to the [new checkpoint](baselines/2026-09-21-wall-panel-links.md),
  with combined follow-up **November 2**. Preserve historical verdicts and other cohorts'
  dates; September 27 can read this cohort only through September 20 as pre-release
  evidence. Later effects cannot be isolated to the original change.
- **2026-09-21 release cohort / interference**: site-wide consent-order repair and
  Germany contact card; [fresh baseline and treatment](baselines/2026-09-21-consent-contact.md).
  Re-baseline GA4 comparisons; conversion review October 21 at the earliest, combined
  AI-referral review November 2 (supersedes October 27 for GA4 only). Preserve GSC
  baselines/dates and existing correctness verdicts; check this release for discontinuities.
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

- **Passive check — 2026-09-15**: All 11 Product pages remain indexed with valid Breadcrumb items; the
  missing offers/review/aggregateRating Product eligibility error persists. No
  searchAppearance rows. Preserve September 27; no fabricated eligibility data.
  [September 15 evidence](reviews/2026-09-15.md).

- **Passive / operational check — 2026-09-17**: All 11 English Product pages remain indexed with valid Breadcrumbs and
  unchanged missing offers/review/aggregateRating eligibility errors. Site-wide and
  Product-filtered searchAppearance have no rows. Preserve **September 27**; include
  the new Turkish wall-panel product/query-allocation watch in that structural review.
  [September 17 review](reviews/2026-09-17.md).

- **Passive / operational check — 2026-09-21**: All 11 English Product pages remain indexed with valid
  Breadcrumbs and the unchanged Product eligibility error; no site-wide or
  Product-filtered searchAppearance rows. TR wall-panel product falls **41→14 clicks /
  889→354 impressions** in matched rolling 28 days. Query allocation still partly
  shifts to the guide, while `spc panel` weakens property-wide. Keep September 24
  watch and September 27 verdict. An existing sitemap gap (TR static/article URLs
  appear only as alternates, not their own URL entries) is recommended for correction
  after the structural read, not implemented or attributed as the cause of losses.
  [September 21 review](reviews/2026-09-21.md).

### [2026-08-15] Localized collection H1s — commit 8daf750
- **2026-09-22 narrow content overlap**: the new room guide targets `spc flooring kitchen`,
  which previously had one impression on English Elite. Re-baseline that allocation and
  Elite's all-query secondary reading to the [new snapshot](baselines/2026-09-22-care-content.md)
  for **November 3** combined follow-up. Preserve original H1 target-query baselines and
  unaffected September 27 cohorts; later Elite all-query changes are combined effects.
- **2026-09-21 release cohort / interference**: site-wide consent-order repair and
  Germany contact card; [fresh baseline and treatment](baselines/2026-09-21-consent-contact.md).
  Re-baseline GA4 comparisons; conversion review October 21 at the earliest, combined
  AI-referral review November 2 (supersedes October 27 for GA4 only). Preserve GSC
  baselines/dates and existing correctness verdicts; check this release for discontinuities.
- **Change**: collection pages got unique localized keyword H1s (was shared English
  "QUICK SHIP: ..." slogan, demoted to eyebrow). Also fixed: 5 premier collections had shared one H1.
- **Hypothesis**: H1 is the strongest on-page signal; TR pages rank on TR terms.
- **Primary metric(s)**: positions/CTR for collection terms ("spc parke" 4.9, collection pages' CTR).
- **Review due**: September 15 review completed; follow-up **2026-09-27**.
- **Verdict**: **INCONCLUSIVE — 2026-09-15.** The fixed 16 HTTPS collection pages
  move from 52 clicks / 1,958 impressions / 2.66% CTR / position 8.45 to
  47 / 1,739 / 2.70% / 9.93 in matched pre/post 28-day windows. Natural collection
  exposure for `spc parke` improves from 21 impressions at 27.76 to 34 at 22.32
  (0→2 clicks); property-level movement mostly reflects the blog result. Shared non-brand
  query/page rows improve modestly under fixed pre-period weights, so query mix matters.
  Mixed trends and sparse direct target-query exposure prevent a clear effect verdict.
  [September 15 evidence](reviews/2026-09-15.md).
- **Action**: keep the localized H1s. On September 27, recheck the fixed URL cohort,
  query allocation and sustained expansion in collection-query exposure. Preserve the
  original baseline; no revert or further H1 change is justified by this read.
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
- **2026-09-21 wall-panel link interference**: two Turkish article body links now
  explicitly target the Turkish product. Owner authorized shipping before September
  27. Re-baseline only the overlapping wall-panel components to the [new checkpoint](baselines/2026-09-21-wall-panel-links.md),
  with combined follow-up **November 2**. Preserve historical verdicts and other cohorts'
  dates; September 27 can read this cohort only through September 20 as pre-release
  evidence. Later effects cannot be isolated to the original change.
- **2026-09-21 release cohort / interference**: site-wide consent-order repair and
  Germany contact card; [fresh baseline and treatment](baselines/2026-09-21-consent-contact.md).
  Re-baseline GA4 comparisons; conversion review October 21 at the earliest, combined
  AI-referral review November 2 (supersedes October 27 for GA4 only). Preserve GSC
  baselines/dates and existing correctness verdicts; check this release for discontinuities.
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
- **2026-09-22 content interference / current treatment**: New underlay/care/room content adds discovery opportunities. Re-baseline the aggregate AI-referral outcome to the [September 22 snapshot](baselines/2026-09-22-care-content.md); **November 3** combined review supersedes November 2 for this metric. Preserve the September 21 consent measurement break and historical verdicts.
- **Additional September 21 navigation confound**: the two Turkish wall-panel
  article links now explicitly target the Turkish product; [scope](baselines/2026-09-21-wall-panel-links.md).
  Interpret aggregate lead/AI readings with this and today's consent repair together;
  preserve the existing October 21 conversion / November 2 AI dates and old verdicts.
- **2026-09-21 release cohort / interference**: site-wide consent-order repair and
  Germany contact card; [fresh baseline and treatment](baselines/2026-09-21-consent-contact.md).
  Re-baseline GA4 comparisons; conversion review October 21 at the earliest, combined
  AI-referral review November 2 (supersedes October 27 for GA4 only). Preserve GSC
  baselines/dates and existing correctness verdicts; check this release for discontinuities.
- **Change**: curated AI-engine map at /llms.txt.
- **Hypothesis**: helps AI engines route to key content.
- **Primary metric(s)**: qualitative; AI-referral trend (with entry "AI crawlers unblocked").
- **Review due**: September 15 historical checkpoint with crawler unblock completed;
  **2026-11-02 combined GA4 AI effect** after the September 21 consent re-baseline,
  superseding October 27. Historical September content re-baselines remain below.
- **Verdict**: **INCONCLUSIVE — 2026-09-15 historical checkpoint.** Matched
  07-18→08-14 vs 08-16→09-12 has **1→2 AI Assistant sessions**, all ChatGPT; one
  current session contains a lead key event. This is too little referral evidence and does
  not measure chatbot citations. **Combined effect remains pending 2026-10-27.** [September 15 evidence](reviews/2026-09-15.md).
- **Action**: keep. Preserve the original 6/90-day baseline and September content
  re-baselines. Seek sustained referral volume and landing/source patterns at the October
  27 review; direct citation claims need separate measurement. Browser-like requests
  receive HTTP 200 for robots.txt/llms.txt, while default Python urllib receives
  Cloudflare 403/1010. Actual verified AI-bot edge access was not established.
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
- **Re-baseline — 2026-09-15**: the distributor/project/design batch adds six pages and
  overlaps the aggregate AI measure. Use the [fresh September 15 baseline](baselines/2026-09-15-project-content.md):
  **2 AI Assistant sessions / 28 days vs 1 previously**. New combined-effect review
  **October 27** supersedes October 26 for this aggregate outcome. Keep the September 15
  historical checkpoint and earlier snapshots; do not attribute later movement to crawler
  settings or llms.txt alone. The new content entry records the same confound treatment.

- **Passive / operational check — 2026-09-17**: AI-channel sessions are **6 versus 1** in the rolling 28-day comparison;
  current users total three. No direct citation measurement or new-guide AI landing
  appears in this read. Preserve the **October 27 combined-effect** date and the
  September 15 historical INCONCLUSIVE verdict. robots.txt/llms.txt return 200 with
  a browser-like client; default Python remains 403/1010. Verified AI-bot edge access
  remains unmeasured; no crawler setting changed.
  [September 17 review](reviews/2026-09-17.md).

- **Passive / operational check — 2026-09-21**: Latest 28 days (August 23–September 19) has **13 AI
  Assistant sessions / four users / three key events**, versus 1/1/0 in July 26–
  August 22. All are ChatGPT; no new article landing appears. Keep the historical
  INCONCLUSIVE verdict. Consent repair shipped today; preserve its baseline and
  **November 2** combined GA4 review. Browser-like robots/llms requests return 200;
  verified AI-bot access and direct citations remain unmeasured.
  [September 21 review](reviews/2026-09-21.md).

### [2026-08-15] New post pair: SPC user reviews — commit 89db2ae
- **2026-09-21 release cohort / interference**: site-wide consent-order repair and
  Germany contact card; [fresh baseline and treatment](baselines/2026-09-21-consent-contact.md).
  Re-baseline GA4 comparisons; conversion review October 21 at the earliest, combined
  AI-referral review November 2 (supersedes October 27 for GA4 only). Preserve GSC
  baselines/dates and existing correctness verdicts; check this release for discontinuities.
- **Change**: /tr/blog/spc-parke-kullanici-yorumlari + /blog/spc-flooring-user-reviews.
  Honest expert evaluation (no fabricated testimonials; spec-anchored).
- **Hypothesis**: own the reviews-intent cluster (350 imp, pos 8.4 with no dedicated page).
- **Primary metric(s)**: query "spc parke kullanıcı yorumları" position + post clicks.
- **Review due**: September 15 ranking review completed; indexing checkpoint completed
  September 3. Ranking milestone closed; retain in routine passive monitoring.
- **Verdict**: **WORKED — 2026-09-15, rankings.** In 07-18→08-14 versus
  08-16→09-12, `spc parke kullanıcı yorumları` improves **8.22→3.34**, clicks **5→13**,
  CTR **3.88%→10.66%**, with impressions 129→122. Latest weekly position is 2.13.
  The article pair earns **29 clicks / 2,028 impressions** across all queries; both
  remain indexed/self-canonical. [September 15 evidence](reviews/2026-09-15.md).
  Historical **Indexing checkpoint 2026-09-03: WORKED.** Both URLs are
  Submitted and indexed, self-canonical, fetch-successful, and had GSC activity in 08-15→08-31:
  TR 12 clicks / 207 impressions; EN 3 / 835. That September 3 checkpoint did not yet judge rankings.
- **Action**: keep the winning article pair. The success is supported for the
  intended Turkish query and article discovery, not qualified leads or equivalent English
  query rankings. Preserve the original accuracy amendment and other cohort notes.
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
- **2026-09-21 release cohort / interference**: site-wide consent-order repair and
  Germany contact card; [fresh baseline and treatment](baselines/2026-09-21-consent-contact.md).
  Re-baseline GA4 comparisons; conversion review October 21 at the earliest, combined
  AI-referral review November 2 (supersedes October 27 for GA4 only). Preserve GSC
  baselines/dates and existing correctness verdicts; check this release for discontinuities.
- **Change**: /tr/blog/spc-parke-fiyatlari + /blog/spc-flooring-cost. No invented prices;
  7 cost drivers + quote-comparison checklist + /contact CTA.
- **Hypothesis**: capture price-intent (pos 14.2, "kermit süpürgelik fiyatları" pos 6.1) and
  convert it to WhatsApp/email leads.
- **Primary metric(s)**: query positions + post clicks; generate_lead events with page = post.
- **Review due**: September 15 ranking/lead review completed; follow-up **2026-09-27**
  (indexing checkpoint completed September 3).
- **Verdict**: **INCONCLUSIVE — 2026-09-15, overall ranking/conversion outcome.**
  Search discovery improves: `spc parke fiyatları` moves from 0 clicks / 16 impressions /
  position 12.06 to **7 / 188 / 9.86** in matched pre/post 28-day windows. However, the
  tag page takes 4 clicks / 127 impressions at 9.20; the article has 3 / 52 at 11.83.
  Both articles total **10 clicks / 1,302 impressions**, but neither has an attributed
  `generate_lead` event, and recorded pricing landings are too few for conversion judgment.
  [September 15 evidence](reviews/2026-09-15.md).
  Historical **Indexing checkpoint 2026-09-03: WORKED.** Both URLs
  are Submitted and indexed, self-canonical, fetch-successful, and had GSC activity in
  08-15→08-31: TR 6 clicks / 202 impressions; EN 2 / 531. As of that September 3 checkpoint, no tracked `generate_lead` event was
  attributed to either post; the low-volume conversion outcome was deferred.
- **Action**: keep. Recheck article-versus-tag query allocation, article clicks,
  recorded landings and lead key events on September 27. More sustained article ranking
  and enough measured visits to assess conversion would settle the open questions.
  Do not remove/noindex the tag or rewrite the article from this small sample.
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
- **2026-09-21 wall-panel link interference**: two Turkish article body links now
  explicitly target the Turkish product. Owner authorized shipping before September
  27. Re-baseline only the overlapping wall-panel components to the [new checkpoint](baselines/2026-09-21-wall-panel-links.md),
  with combined follow-up **November 2**. Preserve historical verdicts and other cohorts'
  dates; September 27 can read this cohort only through September 20 as pre-release
  evidence. Later effects cannot be isolated to the original change.
- **2026-09-21 release cohort / interference**: site-wide consent-order repair and
  Germany contact card; [fresh baseline and treatment](baselines/2026-09-21-consent-contact.md).
  Re-baseline GA4 comparisons; conversion review October 21 at the earliest, combined
  AI-referral review November 2 (supersedes October 27 for GA4 only). Preserve GSC
  baselines/dates and existing correctness verdicts; check this release for discontinuities.
- **Change**: year-stamped, benefit-driven titles/descriptions on spc-wall-panel-bathroom-usage
  (+FAQ section), kermit-spc-skirting-advantages, spc-wall-panel-usage-areas (EN/TR).
- **Hypothesis**: same positions, higher CTR.
- **Primary metric(s)**: CTR — "spc wall panels for bathroom" 0.5% @ 9.8 (928 imp);
  "spc skirting" blog 0.5% @ 6.9; "spc duvar kaplama" 1.8% @ 6.3 (279 imp).
- **Review due**: September 17 fixed-window review completed; **2026-09-27 combined
  topic/structural follow-up**. Preserve finalized 08-17→09-13 vs 07-19→08-15 (28d)
  and the 08-17→09-12 vs 07-20→08-15 (27d) sensitivity result.
- **Verdict**: **INCONCLUSIVE — 2026-09-17.** Full 28-day exact-query clicks/
  impressions, pre→post: bathroom **1/230→0/52**, skirting **1/515→0/388**,
  wall cladding **4/74→2/89**. Only two post-period clicks; average positions
  also worsen (10.72→11.81, 7.44→8.23, 7.14→7.52). Six-page totals instead rise
  45→51 clicks, with CTR 1.13%→1.59%; these mixed scopes do not prove title success
  or harm. The clean 27-day check reaches the same conclusion. [September 17 review](reviews/2026-09-17.md).
- **September 6 checkpoint**: **INCONCLUSIVE — 2026-09-06.** Only 19 complete post-launch days through
  09-04. Matched 19d before→after exact-query clicks/impressions: bathroom 1/157→0/44,
  skirting 1/346→0/312, wall cladding 3/43→2/71. Bathroom impressions fell 72% at nearly
  unchanged position, but the English page's all-query CTR rose 0.95%→1.57%; the signals
  and low click counts do not establish a title effect. All six refreshed pages are indexed,
  recrawled after launch, and serve the shipped metadata. Full evidence, standard 28d
  comparison, and URL-alias handling: [2026-09-06 review](reviews/2026-09-06.md).
- **Action**: keep all six articles. On September 27, assess the combined topic/
  structural outcome, same-query exposure/position and URL allocation. More clicks
  at comparable positions would strengthen interpretation; time alone cannot isolate
  the skirting title from its hub/image-repair changes. Later reads also include the
  September content/FAQ cohorts. No title, content, tag or link change was made here.
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

- **Passive check — 2026-09-15**: Bathroom exact-query impressions fall 228→59 in the clean pre/post
  28-day read, while the EN article total clicks rise 12→16. Preserve the September
  17 fixed 28-day verdict and 27-day sensitivity check; no early title verdict.
  [September 15 evidence](reviews/2026-09-15.md).

- **September 17 checks**: all six current titles/descriptions and self-canonicals pass
  fresh HTTP checks; all six pages are indexed and recrawled after the August launch.
  Bathroom mobile exact-query impressions fall 180→33; New Zealand 33→3, Australia
  17→2, Canada 23→10. Named queries explain only 1 of 14 latest EN bathroom page
  clicks, so its page-wide CTR improvement is not fully attributable. September 13
  Pacific FAQ interference remains covered by the recorded 27-day sensitivity.

### [2026-08-16] Skirting hub page — commit d9d4225
- **2026-09-21 release cohort / interference**: site-wide consent-order repair and
  Germany contact card; [fresh baseline and treatment](baselines/2026-09-21-consent-contact.md).
  Re-baseline GA4 comparisons; conversion review October 21 at the earliest, combined
  AI-referral review November 2 (supersedes October 27 for GA4 only). Preserve GSC
  baselines/dates and existing correctness verdicts; check this release for discontinuities.
- **Change**: /spc-skirting-boards + /tr/spc-supurgelikler (cards-first per owner; labeled
  Height/Width/Length/Material; random application photo per build; ItemList JSON-LD).
  Nav/footer/home/breadcrumbs repointed; stale 308s on the bare path removed.
- **Hypothesis**: a product hub outranks the blog post for "spc skirting" (1,707 imp)
  and fixes its 0.5% CTR.
- **Primary metric(s)**: hub impressions/position for "spc skirting"; term CTR (target >3%);
  product pages' positions for the term (baseline 22–26).
- **Review due**: September 15 ranking checkpoint completed; **2026-09-27 full effect**
  retained (indexing checkpoint completed September 3).
- **Verdict**: **INCONCLUSIVE — 2026-09-15 ranking checkpoint; full effect pending.**
  Equal 27-day windows (07-20→08-15 vs 08-17→09-12) show `spc skirting` at
  **1→0 clicks, 500→382 impressions, position 7.47→8.22**; CTR is 0%, below the >3%
  target. The EN hub has only **15 target-query impressions / position 6.0**, versus
  367 at 8.37 for the blog. Hub exposure is too sparse to demonstrate consistent
  displacement or an isolated hub effect. [September 15 evidence](reviews/2026-09-15.md).
  Historical **Indexing checkpoint 2026-09-03: WORKED.** EN and TR
  hubs are Submitted and indexed, self-canonical, fetch-successful, and show valid Breadcrumbs.
  In GSC 08-15→08-31: EN 1 click / 79 impressions at position 8.0; TR 4 / 83 at 4.8.
- **Action**: keep through September 27. More hub query exposure and an indexed EN
  crawl after the image repair would strengthen the full review. Fresh inspection still
  shows EN August 20 / TR September 8; both are indexed and self-canonical. The
  September 3 image repair and August 16 title refresh remain overlapping interventions.
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

- **September 15 repair split**: hub target-query impressions are 11 at position 6.18
  before repair (08-17→09-02), and four at 5.5 after repair (09-03→09-12). These
  unequal, tiny subsets are descriptive only; they do not establish a repair effect.

- **Passive / operational check — 2026-09-17**: Both hubs remain indexed; EN indexed crawl is still August 20, TR
  September 8. The fixed CTR window gives the hub only 15 target-query impressions,
  while the overlapping blog has 373. No early replacement verdict; preserve
  **September 27** and the title/image-repair confounds.
  [September 17 review](reviews/2026-09-17.md).

### [2026-09-03] Skirting hub card-image fallback — release repair, commit 171ace5
- **2026-09-21 release cohort / interference**: site-wide consent-order repair and
  Germany contact card; [fresh baseline and treatment](baselines/2026-09-21-consent-contact.md).
  Re-baseline GA4 comparisons; conversion review October 21 at the earliest, combined
  AI-referral review November 2 (supersedes October 27 for GA4 only). Preserve GSC
  baselines/dates and existing correctness verdicts; check this release for discontinuities.
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
- **2026-09-22 content interference / current treatment**: New Resources/document/enquiry links overlap secondary and combined content/link outcomes. Use the [September 22 baseline](baselines/2026-09-22-care-content.md) and **November 3** combined review, superseding October 27 GSC combined effects and November 2 aggregate AI. Retain original purchasing-query baselines, September 27 indexing and October 11 interim ranking reads; preserve the consent measurement break.
- **2026-09-21 release cohort / interference**: site-wide consent-order repair and
  Germany contact card; [fresh baseline and treatment](baselines/2026-09-21-consent-contact.md).
  Re-baseline GA4 comparisons; conversion review October 21 at the earliest, combined
  AI-referral review November 2 (supersedes October 27 for GA4 only). Preserve GSC
  baselines/dates and existing correctness verdicts; check this release for discontinuities.
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
- **Review due**: **2026-09-27 indexing**, **2026-10-11 interim rankings/snippets**,
  **2026-10-27 combined content/link effect** after the September 15 re-baseline below.
  The original October 25 date remains in launch history; other 09-15/09-17/09-27 checks stand.
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
- **Re-baseline — 2026-09-15**: new distributor/project/design articles add incoming links
  to quotation/OEM guides and Resources. Treat primary content/link outcomes and secondary
  organic/resource/lead/AI metrics as overlapping, using the
  [fresh September 15 snapshot](baselines/2026-09-15-project-content.md): fixed manufacturer
  group **76 impressions / 3 clicks / position 14.49**, versus 21 / 2 / 13.33. New combined
  effect review **October 27** replaces the October 25/26 effect dates. Preserve original
  history, September 27 indexing and October 11 interim rankings. The new entry records
  the same incoming-link confound; no isolated first-batch effect is claimed.

- **Passive check — 2026-09-15**: Five of six new articles are indexed. English OEM is crawled,
  currently not indexed; its live browser-like request is 200/self-canonical with no
  noindex. Only early provisional exposure exists. Preserve September 27 indexing,
  October 11 interim ranking and October 27 combined-effect dates.
  [September 15 evidence](reviews/2026-09-15.md).

- **Passive / operational check — 2026-09-17**: **6/6 articles are now indexed**, up from 5/6. EN OEM was crawled on
  September 16 and is now indexed/self-canonical. Finalized September 13–15 returns
  15 impressions / zero clicks across five cohort URLs. Early discovery only; preserve
  **September 27 indexing, October 11 interim ranking and October 27 combined effect**.
  [September 17 review](reviews/2026-09-17.md).

- **Passive / operational check — 2026-09-21**: **6/6 articles remain indexed**; September 13–19
  exposure is **47 impressions / one click** (TR sample/quote). Preserve September 27
  indexing, October 11 ranking and October 27 GSC content/link dates; GA4 conversion
  and AI comparisons follow the September 21 measurement treatment. The Turkish
  articles are sitemap alternates but lack their own `<loc>` entries; correction
  is recommended after the structural review, not implemented.
  [September 21 review](reviews/2026-09-21.md).

### [2026-09-14] Named purchasing-guide author — commit c8e22c2
- **2026-09-21 release cohort / interference**: site-wide consent-order repair and
  Germany contact card; [fresh baseline and treatment](baselines/2026-09-21-consent-contact.md).
  Re-baseline GA4 comparisons; conversion review October 21 at the earliest, combined
  AI-referral review November 2 (supersedes October 27 for GA4 only). Preserve GSC
  baselines/dates and existing correctness verdicts; check this release for discontinuities.
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
- **2026-09-21 release cohort / interference**: site-wide consent-order repair and
  Germany contact card; [fresh baseline and treatment](baselines/2026-09-21-consent-contact.md).
  Re-baseline GA4 comparisons; conversion review October 21 at the earliest, combined
  AI-referral review November 2 (supersedes October 27 for GA4 only). Preserve GSC
  baselines/dates and existing correctness verdicts; check this release for discontinuities.
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

### [2026-09-14] Technical specification, installation and heating guides — commit 97d45e7
- **2026-09-22 content interference / current treatment**: New incoming technical-guide links and exact `spc flooring underlay` / `spc parke şilte` targets overlap. Re-baseline the original 13-query/six-page cohort with the [September 22 snapshot](baselines/2026-09-22-care-content.md) for **November 3** combined content/link effects (supersedes October 27; aggregate AI also supersedes November 2). Keep September 28 indexing and October 12 interim rankings; preserve the consent measurement break.
- **2026-09-21 release cohort / interference**: site-wide consent-order repair and
  Germany contact card; [fresh baseline and treatment](baselines/2026-09-21-consent-contact.md).
  Re-baseline GA4 comparisons; conversion review October 21 at the earliest, combined
  AI-referral review November 2 (supersedes October 27 for GA4 only). Preserve GSC
  baselines/dates and existing correctness verdicts; check this release for discontinuities.
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
- **Review due**: **2026-09-28 indexing**, **2026-10-12 interim rankings/query allocation**,
  **2026-10-27 combined content/link and secondary effects** after the September 15 re-baseline.
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
  passed on production after deployment.
- **Deployment — 2026-09-14**: code commit **97d45e7**; GitHub blog check passed.
  Cloudflare build **457eab59-6643-4279-aee7-031dbb4ed192**, Worker version
  **d2216f0f-b8e7-49e6-9faa-151dcca2448d**, succeeded at **07:21:08 UTC**.
  This is September 14 in Pacific and the GA4 Europe/Istanbul reporting timezone.
- **Production verification**: all **34 articles HTTP 200**, correct canonical/hreflang,
  bylines, unchanged existing bodies and matching FAQ data; the six new pages contain
  **20 matching answers**. Both blog listings and sitemap expose all six new URLs.
  **22 internal destinations**, **18 shared image/diagram assets** and **four linked PDF
  checksums** passed. All **12 desktop/mobile checks** passed without body overflow or
  broken article images. Turkish alternate slugs return the expected 308 redirects.
  [Complete live verification](content-strategy/2026-09-14-technical-content-production-verification.json).
- **Sitemap submission**: Google accepted the sitemap (HTTP **204**), last submitted
  **2026-09-14T07:23:13.956Z**, with processing pending. This is not indexing confirmation.
- **Verdict**: PENDING.
- **Action**: keep the second content batch live; evaluate discovery on the dates above. Remaining
  roadmap topics retain their evidence dependencies and structural-review sequencing.
- **Re-baseline — 2026-09-15**: the third batch links to these technical guides. Incoming
  links overlap their primary content/link effect as well as secondary traffic outcomes.
  The [new dated baseline](baselines/2026-09-15-project-content.md) re-queries the original
  13 queries and six URLs (no rows in either finalized 28-day window). New combined-effect
  review **October 27** supersedes October 26. Keep September 28 indexing, October 12 interim
  query allocation and the original baseline. The third-batch entry carries the matching
  confound; later movement is not attributed solely to September 14's publication.

- **Passive check — 2026-09-15**: Five of six new articles are indexed; English thickness/wear-layer
  remains unknown to Google, with live 200/self-canonical and no noindex. Preserve
  September 28 indexing, October 12 interim ranking and October 27 combined effect.
  [September 15 evidence](reviews/2026-09-15.md).

- **Passive / operational check — 2026-09-17**: **5/6 articles are indexed**. EN thickness/wear-layer is not confirmed
  indexed; saved latest inspection says unknown (an earlier same-run neutral response
  said discovered/not indexed). Live URL is 200/self-canonical, with no noindex and
  sitemap inclusion. Finalized September 13–15: **37 impressions / 2 clicks**; both
  clicks are the EN installation guide. Preserve **September 28 / October 12 / October 27**.
  [September 17 review](reviews/2026-09-17.md).

- **Passive / operational check — 2026-09-21**: **5/6 remain indexed**. EN thickness/wear-layer is now
  **Crawled — currently not indexed** (September 19 crawl), live 200/self-canonical
  without noindex. September 13–19 exposure: **120 impressions / five clicks**.
  Preserve September 28 indexing, October 12 ranking and October 27 GSC effect;
  no premature content rewrite or verdict. GA4 dates follow September 21 treatment.
  [September 21 review](reviews/2026-09-21.md).

### [2026-09-15] Distributor, project and colour-selection guides — commit 3d01b51
- **2026-09-22 content interference / current treatment**: New incoming project/design links overlap these content/link outcomes. Re-baseline the original 14-query/six-page cohort with the [September 22 snapshot](baselines/2026-09-22-care-content.md); **November 3** combined effects supersede October 27 and November 2 aggregate AI. Keep September 29 indexing and October 13 interim rankings; preserve the consent measurement break.
- **2026-09-21 release cohort / interference**: site-wide consent-order repair and
  Germany contact card; [fresh baseline and treatment](baselines/2026-09-21-consent-contact.md).
  Re-baseline GA4 comparisons; conversion review October 21 at the earliest, combined
  AI-referral review November 2 (supersedes October 27 for GA4 only). Preserve GSC
  baselines/dates and existing correctness verdicts; check this release for discontinuities.
- **Change**: three EN/TR topic pairs, six URLs: distributor assortment/first orders;
  coordinated flooring/skirting/panel specification; colour and format selection. Original
  worksheets, verified collection examples and 20 visible FAQ answers use the existing
  renderer, author registry and shared images. No template, navigation, old article or
  product data changes. [Release scope](content-strategy/2026-09-15-project-content-launch.md).
- **Hypothesis**: practical range and finish-planning answers will establish relevant new
  search coverage and help dealers/designers prepare identifiable product enquiries.
- **Primary metric + baseline**: new URLs' indexing, impressions, position and query/page
  allocation for the fixed 14-query group. [Fresh baseline](baselines/2026-09-15-project-content.md)
  reports no rows for the group or six URLs in finalized 08-16→09-12 vs 07-19→08-15 windows.
  All six URLs returned 404 before launch at 07:30:13 UTC. No rows do not prove zero demand.
- **Secondary measures**: organic article landings, resource/enquiry activity and observed
  AI referrals. The dated snapshot includes 2 AI Assistant sessions vs 1 in the prior 28 days,
  210 Organic Search sessions vs 273, and 20 lead / 8 download key events. Small counts and
  changed instrumentation prevent a conversion-growth or chatbot-citation claim.
- **Review due**: **2026-09-29 indexing**, **2026-10-13 rankings/query allocation**,
  **2026-10-27 full content/link and overlapping combined effects**.
- **Interference treatment**: ship and re-baseline crawler/llms.txt aggregate AI outcomes and
  the manufacturer/technical content outcomes to September 15, with October 27 combined
  effect reviews and matching parent-entry notes. Added incoming links affect the earlier
  guides even though their content is preserved. Older indexing/interim ranking checks and
  disjoint product/CTR/reviews/pricing/redirect/hub cohorts retain their dates. The launch
  record checks every open scope; original snapshots are not deleted.
- **Technical checkpoint**: all 34 existing post records and related-post cohorts remain
  identical. Production checks confirm 20 visible/schema FAQ answers on the six new pages,
  correct author, locale, canonical/share images, sitemap/listing discovery and redirects.
  Technical correctness passes; indexing and content effects remain unproven.
- **Validation**: paired content/text validation, manifest generation, source/media existence,
  typecheck and the production build pass. A long Turkish table header found during mobile
  QA was shortened in that new article; shared styling was not changed. Final local checks
  pass for all 40 articles, 20 new FAQ answers, 26 internal destinations, 19 shared image
  assets and 12 desktop/mobile page checks. Tables and covers were visually inspected.
  The same checks also passed on production after deployment.
- **Verdict**: PENDING.
- **Deployment — 2026-09-15**: code **3d01b51**; Cloudflare build
  **8b05eb5c-b416-416a-a7c6-67cb95f9e177**, Worker version
  **433b9d2e-783e-4975-830b-055c46671d61**, succeeded **07:39:13 UTC**. GitHub blog checks
  passed. The deployment date is September 15 in Pacific and Europe/Istanbul.
- **Production verification**: all **40 articles HTTP 200**, expected body/metadata/author
  and FAQ parity; **26 internal destinations**, **19 shared image SHA-256 checks**, and
  **12 desktop/mobile checks** passed. All six new URLs appear in blog listings and sitemap;
  the three bare Turkish slugs return 308 to their canonical locale paths.
  [Live check record](content-strategy/2026-09-15-project-content-production-verification.json).
- **Sitemap submission**: Google accepted the sitemap (HTTP **204**), `lastSubmitted`
  **2026-09-15T07:42:40.099Z**, with processing pending. This is not indexing confirmation.
- **Action**: keep the third batch live. DEALER, PROJECT and DESIGN are marked published in
  the approved map. Use the review dates above; remaining topics retain their evidence needs.

- **Passive check — 2026-09-15**: None of today's six new URLs is indexed yet: EN project specification
  is discovered/not indexed and the other five unknown. This is a same-hour passive
  check, not a failure verdict. Preserve September 29, October 13 and October 27.
  [September 15 evidence](reviews/2026-09-15.md).

- **Passive / operational check — 2026-09-17**: **5/6 articles are indexed**, up from 0/6 on launch morning. TR
  colour/format is still unknown in inspection; live 200/self-canonical, no noindex,
  included in sitemap. No finalized exposure rows through September 15 yet; indexing
  is established separately from search exposure. Preserve **September 29 / October
  13 / October 27**; no early ranking verdict.
  [September 17 review](reviews/2026-09-17.md).

- **Passive / operational check — 2026-09-21**: **5/6 remain indexed**. TR colour/format is now
  **Crawled — currently not indexed** (September 20 UTC crawl), live 200/self-canonical
  without noindex and present as a sitemap alternate, not a standalone URL entry.
  September 13–19 exposure: **44 impressions / two clicks** (TR distributor).
  Preserve September 29 indexing, October 13 ranking and October 27 GSC effect;
  GA4 dates follow September 21 treatment. No new verdict or site change.
  [September 21 review](reviews/2026-09-21.md).

### [2026-09-22] Underlay, care and room-selection guides — release prepared
- **Change**: three original EN/TR pairs (six URLs), 24 visible FAQ answers and existing
  collection covers. Underlay/assembly approval, care/repair enquiries and room conditions
  use actual Kermit manuals. [Scope and every-entry interference check](content-strategy/2026-09-22-care-content-launch.md).
- **Hypothesis**: practical answers tied to identifiable products and applicable instructions
  will earn new search coverage and help readers prepare useful product/support enquiries.
- **Primary metric + baseline**: six new URLs' indexing, impressions, position and query/page
  allocation for the fixed 16 queries. [Fresh 36-report baseline](baselines/2026-09-22-care-content.md)
  has no latest-window query rows (August 23–September 19), and one prior impression at
  position 98 for `spc flooring kitchen` on English Elite (July 26–August 22).
  New URLs have no rows; all six return 404 before launch. No rows do not establish zero demand.
- **Secondary measures**: organic landings, document/enquiry actions and observed AI referrals.
  AI Assistant sessions are 13 vs 1; lead/download keys 16/15 vs 10/1. Counts cross earlier
  instrumentation changes and precede the September 21 consent repair, so they do not
  establish growth, qualified leads or chatbot citations.
- **Review due**: **2026-10-06 indexing**, **2026-10-20 rankings/query allocation**,
  **2026-11-03 full content/link and overlapping combined effects**.
- **Interference**: new links overlap technical/project/design pages and Resources; two exact
  underlay queries overlap the technical group. Ship and re-baseline affected content/link
  and aggregate AI/secondary outcomes to September 22, with matching parent notes and
  November 3 review. Preserve earlier indexing/interim checkpoints, September 21 measurement
  break, operational/office-specific dates and the November 2 wall-panel experiment.
- **Validation**: content/text validation, manifest generation, typecheck and production build
  pass. Local verification passes for 46 articles, 24 new FAQ answers, 30 internal destinations,
  56 image/PDF byte comparisons and 12 desktop/mobile views. All 40 prior records/related
  cohorts remain identical. Covers and mobile tables were visually inspected.
- **Verdict**: PENDING.
- **Action**: complete local browser checks, deploy the authorized batch and record live results.

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


### Review run — 2026-09-15

Fresh finalized GSC data through **September 12**; GA4 uses the same cutoff.
[Detailed review](reviews/2026-09-15.md) and [API/browser evidence](reviews/2026-09-15-evidence.json).

- **WORKED:** reviews query position **8.22→3.34**, clicks **5→13**; article pair
  29 clicks / 2,028 impressions. Keep.
- **INCONCLUSIVE:** localized H1s (mixed allocation/near-flat CTR), pricing (better
  discovery largely through the tag, conversion unproven), hub (15 target-query
  impressions), historical crawler/llms AI checkpoint (1→2 sessions). Keep original
  baselines; H1/pricing/hub next September 27, combined AI effects October 27.
- **Passive:** all six August URLs indexed; September manufacturer 5/6, technical 5/6,
  today's batch 0/6. Nine incomplete September 14 impressions across four new pages.
  All 11 Products retain valid Breadcrumbs and unchanged Product eligibility errors.
  Early observations leave the newer experiments' review dates unchanged.
- **Traffic:** rolling 28-day GSC clicks **661→672**, impressions **16,256→18,892**;
  GA4 sessions **378→292**, users **148→150**. Türkiye desktop Organic sessions
  98→42 versus GSC clicks 199→184; Chrome new users remain 17→17.
- **Measurement:** isolated live tests show page_view queued before consent-granted
  update on both desktop and mobile. The sequence predates August, so it does not
  establish the desktop decline's cause. Recommend a separately recorded repair;
  none implemented. Recheck September 17. Latest weekly lead/download keys 4/3;
  since launch 21/8. Keep WORKED instrumentation and September 17 operations.
- **Access:** Google Ads campaign read succeeds without the prior TEST-token error;
  customer lookup confirms Kermit Floor, test_account=false. No campaign rows in
  the chosen dates. Exact developer-token tier is unverified. Browser-like requests
  fetch robots/llms, while default Python receives Cloudflare 403/1010; verified
  AI-bot edge access remains unmeasured.
- **Completed:** local review, evidence, verdicts and schedule; Ads access note updated.
  No site change, commit, push, deployment or new baseline reset. The consent-order
  repair and other possible iterations are recommendations only.

### [2026-09-15] Google Ads app identity and Basic-access application — commit 8b51643
- **Change**: published an application description and privacy notice at
  `/analytics-mcp` and `/analytics-mcp-privacy`; configured Kermit Analytics MCP as
  External / In production. Google verified the branding and it was published; a new
  Basic-access application was approved on September 15.
- **Hypothesis**: accurate public app and data-use information enables brand verification
  and Basic API access for keyword research.
- **Primary metric and baseline**: branding unverified and Ads project at Explorer before
  this change; success means verified/published branding, Basic access, and a successful
  read-only Keyword Planner query. Existing production-reporting access remains available.
- **Interference**: new application URLs and access-verification metrics are disjoint from
  the open content, indexing, CTR and lead experiments. Pages declare `noindex, follow`,
  are absent from the sitemap, and contain no GA4 code. Existing Cloudflare beacon injection
  remains active; no shared template, event, sitemap, or crawler setting changed. Preserve
  all existing experiment baselines and review dates.
- **Validation**: `npm run build` passed; Cloudflare Workers Builds and GitHub blog checks
  succeeded for `8b51643`. Both `.html` URLs redirect to extensionless pages with HTTP 200.
  Published content and CSS match the source after removing only the existing edge beacon
  and normalizing inter-tag whitespace; privacy links, `noindex`, and sitemap exclusion
  verified. [Production evidence](baselines/2026-09-15-ads-branding-production.json).
- **Review due**: **2026-09-18**, satisfied early by the September 15 decision/API check.
- **Verdict**: **WORKED — 2026-09-15**. Branding verified/published; console confirms Basic
  with 15,000 daily production operations. A read-only keyword-history query for
  `spc flooring` returned one result and 12 monthly volume entries.
  [API evidence](baselines/2026-09-15-ads-basic-api-probe.json).
- **Action**: keep Basic access. Keyword-planning requests can use the Google Ads Python
  client; the installed reporting MCP has no keyword-planning tool yet. The probe used
  all geographies/languages and is not a market-specific keyword recommendation.
  [Access and publication record](2026-09-15-ads-basic-access.md).

- **Passive / operational check — 2026-09-17**: Fresh reporting/account probes succeed after routine ADC reauthentication.
  August 19–September 15 campaign report has no rows; customer lookup confirms
  Kermit Floor/test_account=false. Both app-information pages are 200/noindex/follow
  and absent from sitemap. Retain the separately confirmed **Basic** access and
  original WORKED verdict; the September 18 decision milestone remains already satisfied.
  [September 17 review](reviews/2026-09-17.md).


### Review run — 2026-09-17

Fresh GSC finalized through **September 15**; GA4 uses the same cutoff.
[Detailed review](reviews/2026-09-17.md) and [fresh API/HTTP evidence](reviews/2026-09-17-evidence.json).

- **CTR verdict: INCONCLUSIVE.** Fixed 07-19→08-15 vs 08-17→09-13 query
  clicks/impressions: bathroom 1/230→0/52; skirting 1/515→0/388; wall cladding
  4/74→2/89. The 27-day FAQ sensitivity agrees. Six-page clicks instead rise
  45→51; small counts, positions and confounds prevent isolated title attribution.
  Keep the six articles; combined topic/structural follow-up **September 27**.
- **Weekly operations:** 09-09→09-15 lead/download key events **5/4** versus 2/0;
  since launch **23/9**. Retain WORKED instrumentation; no large new raw-event burst.
  Next weekly/desktop read **September 24**. The recommended consent-order repair
  remains unimplemented, and is not a proven explanation for the desktop decline.
- **Passive indexing:** manufacturer **6/6**, technical **5/6**, project **5/6**;
  **16/18 total**, up from 10/18. EN thickness and TR colour/format await indexing
  confirmation despite live 200, self-canonicals and sitemap inclusion. Formal new-
  content dates remain unchanged. New cohort has 52 finalized impressions / 2 clicks,
  both clicks on EN installation. All six August URLs and six CTR pages are indexed.
- **Enhancements:** all 11 English Product pages retain valid Breadcrumbs and the
  same Product eligibility error. No searchAppearance rows. Preserve September 27.
- **Traffic:** rolling Google clicks **676→664 (−1.8%)**, impressions **16,732→18,786
  (+12.3%)**; GA4 sessions **397→279**, users **154→149**. Türkiye desktop organic
  sessions **101→33** versus GSC clicks **211→178**. Latest weekly Google-organic
  desktop sessions are 8→9, so the discrepancy is not a new weekly collapse.
- **New watch:** TR wall-panel product clicks **48→17**, impressions **1,006→468**.
  `spc duvar paneli` partly reallocates to the usage-guide article; `spc panel`
  weakens property-wide (17→1 clicks; position 7.11→10.22). Review September 24/27
  before a product/guide targeting iteration; no indexing block is established.
- **AI/access:** 6 ChatGPT sessions / 3 users, versus 1/1; two key events. Small,
  clustered traffic to existing pages does not prove new-guide citations. Keep
  October 27. Ads production probe succeeds; separately verified Basic status kept.
  Routine ADC recovery succeeded without app restart. Browser-like robots/llms
  fetches work; default Python still gets 403/1010; verified AI-bot logs unmeasured.
- **Completed:** local review/evidence, judged entry, operational records and schedule.
  All pre-existing records preserved; no baseline reset, site change, commit, push
  or deployment. Consent-order repair and targeting/link changes remain recommendations.


### Review run — 2026-09-21

**Scope:** periodic review, including an early operational update. **No verdict due**;
retain all earlier verdicts and upcoming dates. [Detailed review](reviews/2026-09-21.md)
and [fresh requests/responses](reviews/2026-09-21-evidence.json).

- **Access/freshness:** GA4, GSC, 44 URL Inspections and read-only Ads reporting succeeded
  with existing credentials. Finalized GSC ends September 19; GA4 uses the same cutoff.
  Rolling windows: July 26–August 22 versus August 23–September 19; weekly September
  6–12 versus September 13–19. Ads production lookup succeeds; campaign probe has no rows.
- **Search:** clicks **686→668 (−2.6%)**, impressions **16,898→18,894 (+11.8%)**,
  average position 9.42→7.94. Reviews/pricing/broad-query gains coexist with skirting,
  bathroom and panel losses. GA4 sessions **393→280**; Türkiye desktop organic
  sessions **94→30**, while matched GSC clicks are **214→174**. Discrepancy unresolved.
- **Measurement break:** consent repair and Germany contact card shipped separately
  earlier today. Their production validation and baseline are already recorded. All
  performance dates in this review precede the release; it cannot show repair success.
  Preserve GSC comparisons and the WORKED tracking verdict. Post-release operations
  September 28, desktop October 5, conversions October 21, combined GA4 AI November 2.
- **Leads/AI:** weekly **5 lead / eight download key events**, versus 4/3; since launch
  **26/16**. Seven downloads cluster on one day/page/channel. Latest AI channel:
  **13 sessions / four users / three keys**, all ChatGPT; encouraging but small, with
  no new article landings or direct citation evidence. September 24 operations retained.
- **Discovery:** **16/18** new articles indexed. Two outstanding guides now report
  crawled/not indexed rather than unknown: EN thickness and TR colour/format. All
  18 live pages are 200/self-canonical without noindex. September 13–19 exposure is
  **211 page-row impressions / eight clicks**. Formal indexing September 27/28/29;
  rankings October 11/12/13. No early success/failure verdict.
- **New sitemap finding:** Turkish static/article URLs are present as alternates but
  lack their own URL entries. The implementation predates September. Recommend
  reciprocal EN/TR sitemap entries after the September 27 structural review; no
  demonstrated connection to the exclusions or wall-panel loss, no change implemented.
- **Wall-panel watch:** TR product **41→14 clicks / 889→354 impressions**. `spc duvar
  paneli` shifts product→guide while whole-property clicks rise 24→27; `spc panel`
  falls property-wide 13→3. Latest product week 5→1 clicks is sparse. Keep September
  24 monitoring and September 27 allocation review before targeting/link changes.
- **Enhancements:** all 11 English Product pages indexed with valid Breadcrumbs and
  unchanged missing offers/review/aggregateRating errors; no searchAppearance rows.
  Keep September 27 effect and October 26 FAQ maintenance; do not fabricate fields.
  Verified AI-bot edge access remains unmeasured without Cloudflare logs.

**Action:** keep existing releases; record the sitemap recommendation for later decision.
Completed local review/evidence/logbook updates only. No site edit, commit, push or
new deployment by this review. October 27 GSC content/link and November 2 GA4 AI dates
are distinct; today's existing GA4 release baseline is retained, not duplicated.
