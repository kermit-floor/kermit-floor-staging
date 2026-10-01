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
- **2026-09-24** — completed September 25: weekly leads/download keys **4/35**,
  download concentration documented, desktop discrepancy and wall-panel exposure loss
  persist. Next weekly operations **October 1**. [Review](reviews/2026-09-25.md).
- **2026-09-25** — passive review complete, no verdict due: **23/24 September articles
  indexed**, search clicks broadly stable, impressions up. Retain September 27 and all
  recorded measurement boundaries. [Review and evidence](reviews/2026-09-25.md).
- **2026-09-27–29** — completed **October 1**: redirect consolidation WORKED;
  Breadcrumb detection WORKED, Product eligibility NO EFFECT, attributable schema CTR
  INCONCLUSIVE; H1/pricing/CTR/hub follow-ups INCONCLUSIVE. Manufacturer, technical and
  project indexing milestones WORKED (6/6 each); consent command ordering WORKED (16/16).
  Historical pre-link/rewrite reads preserved. [Review](reviews/2026-10-01.md).
- **2026-10-01** — weekly operations complete: leads/download keys **4/10**, desktop
  discrepancy and wall-product allocation watch persist. All first four September batches
  indexed (24/24), plus the two new terminology pages. Next weekly operations **October 8**.
- **Next checks** — October 5 desktop; October 6 care indexing; October 9 comparison
  indexing/recrawl; October 11/12/13 descriptive manufacturer/technical/project; October 15
  sitemap processing/indexing, descriptive CTR/hub and manufacturer recrawl/questions;
  October 20 descriptive care rankings; October 21 pricing/consent/contact; October 23
  descriptive comparison snippets; October 26 FAQ/portrait maintenance; October 29 sitemap
  exposure and manufacturer snippets/questions. All affected bilingual search/allocation
  and aggregate AI outcomes now use **November 12** after the sitemap discovery treatment.

- **2026-09-22 content continuation** — next batch checks October 6 indexing, October 20
  rankings and November 3 combined content/link/aggregate AI effects. November 3 supersedes
  October 27 content effects and November 2 aggregate AI only; retain November 2 wall-panel
  outcomes and September 21 consent/office-specific operational dates.

- **2026-09-25 content continuation** — comparison/water revisions and one new terminology
  pair: October 9 indexing/recrawl, October 23 rankings/snippets, November 6 combined effects.
  November 6 applies to affected technical/care/Resources links, Stone collection and revised
  redirect subsets, plus aggregate AI/content outcomes. Project primary GSC and Elite remain
  November 3; wall-panel outcomes remain November 2. Preserve unrelated September 27 and
  September 21 consent/office-specific dates. See the new entry for exact scope.

- **2026-09-29 manufacturer continuation** — approved About/FAQ/llms.txt release: October 13
  buyer-question/recrawl, October 27 buyer-question/snippet, November 10 combined manufacturer
  discovery and AI/content effects. This supersedes November 6 only for overlapping metrics;
  unchanged search/link, product, FAQ and operational dates remain in their entries.

- **2026-10-01 manufacturer discovery continuation** — eight EN/TR pages, including homepage
  metadata and localized About links: October 15 recrawl/questions, October 29 snippets/questions,
  November 12 combined manufacturer, affected wall/broad-floor and aggregate AI/content outcomes.
  November 12 supersedes November 10 manufacturer/AI and November 2 overlapping wall outcomes.
  Preserve disjoint operational, project/room-intent, technical/care/comparison and unchanged FAQ
  dates; all-query collection/CTR guards, including Elite secondary exposure, use November 12.

- **2026-10-01 sitemap continuation — current schedule**: 51 Turkish static/article URLs
  gained independent sitemap entries at 01:05:56 UTC. October 15 processing/indexing,
  October 29 descriptive exposure and November 12 combined effects. This supersedes prior
  November 3/6 affected bilingual primary search/link outcomes; all 23 existing open entries
  carry the discovery marker. Earlier content/query checks stay descriptive. Consent,
  desktop, contact and correctness milestones keep their dates and historical verdicts.
  [Active treatment and exact scope](content-strategy/2026-10-01-turkish-sitemap-entries.md).

- **2026-10-01 language expansion** — Bulgarian, Serbian and Arabic extend navigation,
  article/glossary discovery and hreflang. October 15/29 checks and November 12 combined
  outcomes; preserve original cohorts, historical verdicts and disjoint operational dates.
  Published at **11:10:21 UTC**; all 567 pages, 27 PDFs and ten production browser checks pass.
  First full combined post-release GSC/GA4 day: **October 2**.

Parallel changes: new work may ship while experiments are PENDING, but only after the
interference check in `docs/seo/README.md` (Change interference): disjoint scope ships
freely; overlapping scope waits, re-baselines, or goes INCONCLUSIVE; site-wide changes get a
cohort marker in every open entry.

Last review run: 2026-10-01 (September 27–29 due reviews and October 1 operations
completed; canonical consolidation, indexing milestones and consent command ordering
WORKED; H1/pricing/CTR/hub effects INCONCLUSIVE; weekly lead/download keys 4/10;
GSC final through September 28; current published re-baselines reconciled with the local
September 25 record; next desktop October 5, care indexing October 6, weekly operations
October 8; retain November 12 affected combined outcome and all disjoint dates)

After-review shipment: Turkish sitemap entries deployed and verified October 1 at 01:05:56 UTC.
The current schedule above and the latest sitemap marker in each entry supersede older
cohort schedules for affected metrics; historical snapshots and verdicts remain unchanged.

---

- **2026-10-01 content completion** — four new and four revised topic pairs, glossary and
  curated guides hub. Factory/QC deferred. New checks October 15 indexing/recrawl, October 29
  descriptive rankings/snippets, November 12 combined discovery; preserve operational dates.

## Open experiments

### [2026-10-01] Bulgarian, Serbian and Arabic site translations — commit 9fb9c29
- **Change**: add Bulgarian, Serbian (Cyrillic) and Arabic across the current site, including
  all 28 topics, 33 glossary terms, legal/contact pages, resources and product-spec labels.
  Arabic has RTL layout and typography. Existing EN/TR routes/copy, original PDF files,
  product names/codes and numeric specifications are preserved. All five languages receive
  self-canonicals, reciprocal hreflang, independent sitemap entries and language switching.
- **Hypothesis**: readable local-language decision paths and explicit canonical discovery
  will improve access, indexing and relevant enquiries in the new language cohorts.
- **Primary metrics / baseline**: published/indexable new canonical URL coverage, followed
  by GSC impressions/position on `/bg`, `/sr`, `/ar` URLs and clicks/CTR when volume permits.
  Pre-release new-language home/hub/glossary checks **9/9 HTTP 404**, sitemap **0 new-locale
  entries** among **228** existing URLs; no new-locale GSC page rows. Latest September 1–28
  country guards: Bulgaria **1 click / 86 impressions**, Serbia **2 / 28**, frozen 22-country
  Arab League guard **13 / 525**. Country guards do not identify readers' languages.
  [Twelve-report fresh baseline](baselines/2026-10-01-language-expansion.md).
- **Interference**: checked all **25** prior open/operational entries and added a site-wide
  marker to each. Re-baseline overlapping search/discovery/allocation and aggregate referral
  outcomes to the fresh checkpoint, **November 12** combined review. Original fixed query
  cohorts remain in the same-day content baseline (identical final cutoff); original verdicts,
  prompt audits and disjoint October 5/8/21/26 operational/correctness dates are preserved.
- **Review due**: **2026-10-15** indexing/sitemap processing; **2026-10-29** descriptive
  exposure; **2026-11-12** combined structural/discovery outcome. No automation created.
- **Local validation**: full Cloudflare build passed for **571 static pages**, TypeScript,
  text/blog/i18n validators, product registry and blog-skill checks passed. **10 localization
  and 16 consent browser checks passed**. Key/link/media/identifier coverage includes five
  dictionaries, 883 message keys, 19 resources, 84 translated articles and all 33 glossary
  terms. Candidate sitemap **567 unique URLs**, all 228 old URLs retained; 339 additions.
  Worker packaging dry-run passes (gzip 2527 KiB).
- **Publication / production verification**: owner-approved code `9fb9c29` pushed to main.
  GitHub blog checks and Cloudflare Build **7ca4e090-2c6e-40ca-9b08-45af2c628d9b** succeeded.
  Worker version **7d6798cd-4b9b-45ef-a1c9-e181c7b2a673** deployed to 100% at
  **2026-10-01T11:10:21.907652Z**. All **567 live URLs** pass HTTP 200, locale/direction,
  self-canonical and applicable hreflang checks; all 228 old URLs and article dates remain.
  All **27 original PDF URLs** return PDF headers, including the two R2 catalogues; local
  file sizes match. **10/10 production browser checks** pass switching, guide/glossary schema
  parity, product names/specifications, Arabic mobile layout and controls. Three localized
  diagram assets match the committed bytes.
  [Production evidence](baselines/2026-10-01-language-expansion-production.json).
- **Sitemap / measurement boundary**: GSC accepted PUT **204** at **11:13:42 UTC**, with
  processing pending and the previous 228-URL downloaded snapshot. Acceptance is not indexing
  or search uplift. Exclude partial **October 1** in GSC (Pacific) and GA4 (Istanbul);
  first complete post-release day is **October 2** for both.
- **Verdict**: PENDING search/discovery effect.
- **Action**: keep the approved, published and verified language expansion. The current EN/TR
  content is preserved. Review October 15/29 and November 12; machine-assisted translation
  does not constitute native-speaker review.

### [2026-10-01] Remaining guides, article revisions and glossary — commit 781581e
- **2026-10-01 language expansion / current cohort**: BG/SR/AR translations, five-language alternates and navigation extend site-wide discovery and the acquisition mix. Ship/re-baseline affected search/allocation/link and aggregate AI/referral outcomes to the [fresh locale/page/country checkpoint](baselines/2026-10-01-language-expansion.md), with **November 12** combined interpretation. Preserve fixed original cohorts, historical verdicts, exact manufacturer prompt audits and October 5/8/21/26 operational or correctness dates. Production boundary is recorded in the language entry.
- **Change**: four new EN/TR guide pairs (quantity, import orders, alternatives and document
  evidence), four revised pairs (definition, mistakes, cost and reviews), a 33-term bilingual
  glossary and a curated bilingual blog hub covering all 28 published topics. Factory/QC
  is deferred at the owner's request. Existing article URLs, authors, publication dates,
  cover paths and tags are preserved.
- **Hypothesis**: complete useful decision paths and clearer definitions/document evidence
  will improve discovery and qualified product enquiries while retaining relevant existing
  search traffic. This is a combined content/link treatment, not an isolated article test.
- **Primary metrics / baseline**: ten new canonical destinations' indexing; fixed eight
  query-to-page groups' impressions/position and allocation, then clicks/CTR where exposure
  permits. Eight revised canonical pages: latest September 1–28 **172 clicks / 8,770
  impressions / position 6.17**, versus **73 / 3,570 / 7.06**. Alias-inclusive guard is
  **172/8,770/6.17 versus 171/6,522/7.22**. Hub **1/267/7.30 versus 0/311/7.56**.
  New URLs have no returned rows, not proof of no demand. [Fresh 37-report baseline](baselines/2026-10-01-content-completion.md).
- **Secondary measures**: lead/download and landing-page/channel mix, aggregate AI referrals;
  neither these nor schema correctness establishes improved LLM citations. Prior fixed
  manufacturer prompt audits remain separate observational cohorts.
- **Interference**: add a marker to all **24** prior open/operational entries; re-baseline
  overlapping search/allocation/link outcomes while preserving historical verdicts and
  snapshots. Earlier same-day manufacturer and sitemap changes are separate confounds.
  [Complete treatment and evidence decisions](content-strategy/2026-10-01-content-completion-launch.md).
- **Review due**: **2026-10-15** indexing/recrawl; **2026-10-29** descriptive rankings/snippets;
  **2026-11-12** combined search/discovery/AI-referral outcome. Preserve October 5/8/21
  operational and October 26 FAQ/portrait checks. No automation created.
- **Local validation**: build/typecheck and content validators pass; 40 desktop/mobile route
  checks, 181 internal destinations, 64 FAQ answers and 33 glossary definitions per locale.
  Existing 40 unaffected article records and all 48 old related lists are unchanged.
- **Publication / verification**: commit `781581e` deployed **2026-10-01 02:18:38 UTC**;
  Cloudflare and GitHub checks passed. All 40 live viewport/page cases, 181 internal
  destinations, 64 FAQ answers and bilingual 33-term glossary checks pass. Sitemap **228**
  unique entries, all original 210 retained; submission **204** at 02:20:40 UTC, processing
  pending. [Production evidence](baselines/2026-10-01-content-completion-production.json).
  First full post-release day: GSC **October 1** (Pacific); GA4 **October 2** (Istanbul).
- **Verdict**: PENDING.
- **Action**: approved supported scope published and verified; leave factory/QC and evidence-dependent
  packing/routes/current-price/certificate enhancements for a later confirmed brief.


### [2026-10-01] Independent Turkish sitemap entries — commit 2b08ba0
- **2026-10-01 language expansion / current cohort**: BG/SR/AR translations, five-language alternates and navigation extend site-wide discovery and the acquisition mix. Ship/re-baseline affected search/allocation/link and aggregate AI/referral outcomes to the [fresh locale/page/country checkpoint](baselines/2026-10-01-language-expansion.md), with **November 12** combined interpretation. Preserve fixed original cohorts, historical verdicts, exact manufacturer prompt audits and October 5/8/21/26 operational or correctness dates. Production boundary is recorded in the language entry.
- **2026-10-01 content completion / cohort marker**: Extend bilingual discovery with the new article/glossary URLs and curated hub. Preserve the original 51/51 sitemap correctness; combined search/discovery remains November 12.
  [Fresh page/query baseline](baselines/2026-10-01-content-completion.md);
  [scope and deployment boundary](content-strategy/2026-10-01-content-completion-launch.md).
- **Change**: static pages and published article pairs now emit both English and Turkish
  canonical entries with identical self-inclusive EN/TR alternates. Added **27 static + 24
  article Turkish URLs**, taking the live sitemap **159 → 210 unique entries**; no old URL
  was removed. Existing tags and article modification dates retain their behavior.
- **Hypothesis**: explicit canonical locale entries give crawlers a complete bilingual
  discovery list and support consolidation. Search/indexing improvement is a separate,
  potentially combined outcome; already indexed pages need no new indexing-count increase.
- **Primary metric / baseline**: affected Turkish URLs with their own unique canonical
  entry **0/51 → 51/51**, with reciprocal/self alternates and no loss of old entries.
  [Frozen baseline](baselines/2026-10-01-turkish-sitemap-entries.md): exact cohort latest
  September 1–28 **435 clicks / 10,336 impressions / 4.21% CTR / position 6.58**, versus
  August 4–31 **312 / 6,306 / 4.95% / 7.46**. Fresh pre-release inspections cover **28/51**
  URLs, all indexed (all 24 articles plus four static pages); other 23 static URLs uninspected.
- **Interference**: site-wide discovery marker added to all 23 pre-existing open entries.
  Ship/re-baseline affected bilingual page/query allocation and search effects to the frozen
  checkpoint and **November 12** combined outcome; earlier November 3/6 affected primary
  outcomes are superseded. Preserve original historical/correctness verdicts, descriptive
  interim checks, operational dates and separate manufacturer prompt cohorts.
  [Every-parent treatment](content-strategy/2026-10-01-turkish-sitemap-entries.md).
- **Review due**: **2026-10-15** sitemap processing/indexing; **2026-10-29** descriptive
  exposure; **2026-11-12** combined structural search/discovery effect. No automation created.
- **Validation**: production Next build, text/blog validation and TypeScript checks passed;
  all **102** local paired page checks passed. Live sitemap confirms 210 unique entries,
  exact 51 additions, reciprocal/self alternate maps and preserved article dates. All
  **102** production destinations return HTTP 200, self-canonical, matching EN/TR alternates
  and no noindex. [Local validation](content-strategy/2026-10-01-turkish-sitemap-entries-validation.json)
  and [production evidence](baselines/2026-10-01-turkish-sitemap-entries-production.json).
- **Deployment / verification**: owner approved commit/push/publication. Code `2b08ba0`
  pushed to main; Cloudflare Build `6ba6df10-2be9-49e4-99eb-077c0d643397` and GitHub blog
  checks succeeded. Worker version `3581315e-3549-4d31-9889-a183166bf140` deployed to 100%
  at **2026-10-01T01:05:56.241541Z**. GSC accepted the sitemap PUT with **HTTP 204** at
  **01:06:43 UTC**, with processing pending; immediate counts still describe the previous
  downloaded 159-URL snapshot, not new indexing. Exclude GSC **September 30 Pacific** and
  GA4 **October 1 Europe/Istanbul** partial days; first full days **October 1 / October 2**.
- **Verdict**: **WORKED — 2026-10-01, sitemap implementation correctness (51/51)**.
  Google processing, recrawling/indexing and combined search/AI effects remain PENDING.
- **Action**: keep the published entries and submitted sitemap; review on the dates above.
  Submission acceptance and production correctness do not establish search uplift.

### [2026-10-01] Turkey SPC manufacturer discovery wording — commit ced8fc4
- **2026-10-01 language expansion / current cohort**: BG/SR/AR translations, five-language alternates and navigation extend site-wide discovery and the acquisition mix. Ship/re-baseline affected search/allocation/link and aggregate AI/referral outcomes to the [fresh locale/page/country checkpoint](baselines/2026-10-01-language-expansion.md), with **November 12** combined interpretation. Preserve fixed original cohorts, historical verdicts, exact manufacturer prompt audits and October 5/8/21/26 operational or correctness dates. Production boundary is recorded in the language entry.
- **2026-10-01 content completion / cohort marker**: Supplier/AI discovery overlaps new export/evidence content and hub/glossary links. Preserve the exact provider/prompt audit; annotate its next November 12 observation with this separate release boundary.
  [Fresh page/query baseline](baselines/2026-10-01-content-completion.md);
  [scope and deployment boundary](content-strategy/2026-10-01-content-completion-launch.md).
- **2026-10-01 sitemap discovery / current treatment**: At 01:05:56 UTC, 51 Turkish
  static/article URLs gained separate sitemap entries. Additional discovery intervention on the manufacturer pages and guides; retain November 12 combined outcome and the exact multilingual prompt cells.
  [Frozen page/query checkpoint](baselines/2026-10-01-turkish-sitemap-entries.md);
  [all-parent treatment](content-strategy/2026-10-01-turkish-sitemap-entries.md).
- **Change**: EN/TR About, homepage and two sourcing guides now identify Kermit as an SPC
  flooring/wall-panel manufacturer in Turkey. Natural flooring/manufacturer/wall-panel
  discovery wording accompanies factory location, combined annual capacity and country roles.
  About adds localized checklist/product links; titles/descriptions and two FAQs are revised.
  No unsupported “most experienced” ranking, new locale, Contact/event-code or crawler-setting change.
- **Hypothesis**: clearer Turkey + product + manufacturer identity on already-cited sources
  improves broad supplier discovery and the accuracy of extracted company facts.
- **Primary metric / baseline**: positive recommendation with a direct Kermit website citation,
  by exact provider/language/prompt: ChatGPT **5/8 completed cells**, Gemini **3/3 English cells**.
  Correct combined annual capacity: **4/8**, **0/3**; complete four-country footprint **0/8**,
  **0/3**. [Fixed prompts and complete first answers](baselines/2026-10-01-manufacturer-discovery-audit.json).
  Signed out is not incognito or controlled geography; one date's selected sample is not
  market recommendation share. Record availability/factual errors separately. The unavailable
  German wall test is not an omission; the September 29 four-question pilot stays separate.
- **Secondary baseline**: [same-day baseline and exact scope](baselines/2026-10-01-manufacturer-discovery.md):
  finalized September 1–28 versus August 4–31. Exact English flooring-manufacturer phrase
  **0 clicks / 7 impressions / 7.29** versus **0/8/9.63**; expanded manufacturer cohort
  **6/97/13.97** versus **2/56/14.88**. Preserve original fixed-query/six-guide denominators.
  Wall allocation/property guards and fixed 16-collection/broad-floor guards are saved.
  GA4 September 3–30: ChatGPT **15 sessions / 11 engaged / 3 lead-intent keys / 2 download keys**;
  Gemini **2/2/0/2**. Source/medium and AI Assistant channel stay separate; retain the consent
  break and earlier one-user concentration. Intent/downloads are not qualified sales leads.
- **Interference**: owner approved ship/re-baseline the overlapping manufacturer, About FAQ,
  affected wall/broad-floor allocation/CTR and aggregate AI/content outcomes to October 1.
  Matching current-treatment notes are in all 22 checked parent entries; [scope review](content-strategy/2026-10-01-manufacturer-discovery.md).
  **November 12** replaces November 10 for overlapping manufacturer/AI metrics and November 2
  for the overlapping wall outcome. Preserve original snapshots/verdicts and disjoint dates:
  October 5 desktop, October 21 consent/conversion/Germany-office, October 26 unchanged blog
  FAQ/portrait, November 3 project/room-intent and November 6 unaffected technical/care/comparison.
  Elite all-query collection/CTR secondary exposure uses November 12 with the collection guard.
- **Review due**: **2026-10-15** recrawl and repeated questions; **2026-10-29** snippets/questions;
  **2026-11-12** combined discovery/affected allocation/aggregate AI outcome. Repeat exact first
  questions on three separate dates per round, preserve provider surface/model/mode/sign-in
  context, keep every valid answer and compare matching completed cells. No automation created.
- **Validation**: text/blog checks, Next/OpenNext build, final typecheck and whitespace checks
  pass. Generated manifest changes only the four edited records. All eight local Worker pages
  pass copy/metadata/canonical/hreflang/link/schema checks. About has seven matching answers
  per locale. An isolated lockfile install resolved the initial local symlink-build condition;
  no source/configuration/version/environment-file workaround shipped.
- **Deployment / production verification**: owner approved commit, push and publication;
  `ced8fc4` pushed to main. Cloudflare Build **637ebaa5-af7f-4a79-a11d-3408adcab5f0** and
  GitHub blog check passed. Worker **b6fadf61-18a1-4f0a-88fd-9fa8e94c140e** deployed to 100% at
  **2026-09-30T22:45:07.289682Z** (local October 1). All **eight pages HTTP 200**
  with exact approved content, titles/descriptions, canonicals/hreflang, localized links,
  seven visible/schema About answers per locale and preserved blog bylines/date fields.
  All **eight EN/TR About/home desktop/mobile checks** pass with no horizontal overflow or
  recorded browser errors/warnings; analytics verified disabled. Four protected product pages'
  main HTML/images match pre-release fingerprints, and llms.txt bytes are unchanged.
  Sitemap has the four affected English entries and paired Turkish alternates; both revised
  topic lastmod dates are October 1. Google accepted sitemap submission **HTTP 204**, last
  submitted **2026-09-30T22:49:18.148Z**, processing pending.
  [Live evidence](baselines/2026-10-01-manufacturer-discovery-production.json).
  Exclude GSC **2026-09-30 Pacific** and GA4 **2026-10-01 Europe/Istanbul** partial days;
  first full post-release days **2026-10-01 / 2026-10-02**, respectively.
- **Verdict**: PENDING discovery/recommendation/search effect; production correctness verified.
- **Action**: published and verified. Keep approved factual wording; review after recrawl rather
  than treating immediate availability or deliberate audit fetches as recommendation uplift.

- **Review — 2026-10-01**: Live release titles/canonicals pass. Available finalized GSC ends
  September 28, before publication; homepage/About and four revised guide indexed
  crawls also predate it. Preserve October 15/29 and November 12, with first full
  GSC/GA4 days October 1/2. No early effect verdict. [October 1 review](reviews/2026-10-01.md).

### [2026-09-29] Manufacturer capacity and four-country profile — commit 5ac3836
- **2026-10-01 language expansion / current cohort**: BG/SR/AR translations, five-language alternates and navigation extend site-wide discovery and the acquisition mix. Ship/re-baseline affected search/allocation/link and aggregate AI/referral outcomes to the [fresh locale/page/country checkpoint](baselines/2026-10-01-language-expansion.md), with **November 12** combined interpretation. Preserve fixed original cohorts, historical verdicts, exact manufacturer prompt audits and October 5/8/21/26 operational or correctness dates. Production boundary is recorded in the language entry.
- **2026-10-01 content completion / cohort marker**: New export copy uses the confirmed site/country scope. Preserve the original prompt cohort, capacity facts and prior evidence; combined discovery November 12.
  [Fresh page/query baseline](baselines/2026-10-01-content-completion.md);
  [scope and deployment boundary](content-strategy/2026-10-01-content-completion-launch.md).
- **2026-10-01 sitemap discovery / current treatment**: At 01:05:56 UTC, 51 Turkish
  static/article URLs gained separate sitemap entries. Manufacturer discovery overlaps; retain November 12 combined outcome and the separate September 29 four-question pilot.
  [Frozen page/query checkpoint](baselines/2026-10-01-turkish-sitemap-entries.md);
  [all-parent treatment](content-strategy/2026-10-01-turkish-sitemap-entries.md).
- **2026-10-01 discovery interference / current treatment**: Direct About/company-fact overlap. Ship/re-baseline combined manufacturer recommendation/citation and fact accuracy to the [October 1 baseline](baselines/2026-10-01-manufacturer-discovery.md), **November 12**. Keep the September 29 four-question pilot separate; its October 13/27 reads are descriptive with the new intervention. Current repeat/recrawl checks are October 15/29.
- **Change**: EN/TR About descriptions, introduction, six fact cards, location roles and seven
  visible/matching FAQs now state 8 million m² annual combined SPC flooring/wall-panel capacity
  and operations in Türkiye, Moldova, Romania and USA. `llms.txt` carries matching facts and
  purchasing links. Factory locations remain Türkiye/Moldova; the US presence is not a factory claim.
- **Hypothesis**: explicit company scale and supply facts improve the accuracy and completeness
  of chatbot supplier recommendations and buyers' ability to qualify Kermit.
- **Primary metrics / baseline**: four fixed unbranded consumer buyer prompts, first answers:
  **3/4 recommended and directly cited; 0/4 correct capacity; 0/4 complete countries**.
  This selected pilot is not an estimated market recommendation share. [Audit](investigations/2026-09-29-ai-manufacturer-audit.md).
  Secondary [fresh August 30–September 26 baseline](baselines/2026-09-29-manufacturer-positioning.md):
  original manufacturer queries **2 clicks / 81 impressions / position 13.83**; About/Resources
  **28/985/8.19**; purchasing pages **5/81/8.14**. AI sources: ChatGPT **14 sessions / 10 engaged /
  3 lead keys**, Gemini **2 / 2 / 2 download keys**. Keep source regex separate from the 14-session
  AI Assistant channel, the September 21 consent break, and contact intent separate from leads.
- **Interference**: ship/re-baseline affected manufacturer discovery, About FAQs, llms.txt and
  aggregate AI/content outcomes; both parent and new entries carry the September 29 treatment.
  **November 10** supersedes November 6 for these overlapping metrics. Unchanged technical/care/
  comparison search/link dates remain November 6; project/Elite November 3; wall-panel November 2;
  unchanged blog FAQs/portrait October 26. Keep consent/desktop/office operations and original
  correctness verdicts. [Every-entry scope review](content-strategy/2026-09-29-manufacturer-positioning.md).
- **Review due**: **2026-10-15** repeated exact buyer questions/recrawl; **2026-10-29**
  questions/snippets; **2026-11-12** combined manufacturer/AI outcome after October 1.
  Preserve the September 29 four-question pilot separately; original October 13/27 reads
  are descriptive with the new intervention. No recurring automation was created.
- **Validation**: typecheck, text/blog checks, production Next build and OpenNext Cloudflare
  build passed. Integrated release includes remote `47b8251` (24 topics / 48 articles). Built
  EN/TR About HTML has six facts, four location descriptions, seven matching visible/schema
  answers, correct descriptions, canonicals and hreflang. Local desktop/mobile checks passed;
  [evidence and unchanged preview-runtime qualifications](content-strategy/2026-09-29-manufacturer-positioning-validation.json).
- **Deployment / verification**: owner approved commit, push and publication. Commit `5ac3836`
  pushed to main; Cloudflare Build `45315704-c2e3-459a-acaa-e9450bcf1957` and GitHub blog checks
  succeeded. Worker `7818bc67-66f1-4d97-b15a-fd044ec3083a` deployed to 100% at
  **2026-09-28T21:28:45Z** (local September 29). Live EN/TR About and llms.txt return 200;
  six facts, four location descriptions, seven matching visible/schema FAQs, descriptions,
  canonicals/hreflang and exact llms.txt source match pass. Desktop/mobile browser checks show
  no horizontal overflow or console errors; analytics was disabled. [Production evidence](baselines/2026-09-29-manufacturer-positioning-production.json).
  Exclude GSC September 28 Pacific and GA4 September 29 Europe/Istanbul partial days;
  first full post-release days are September 29 and September 30 respectively.
- **Verdict**: PENDING recommendation/search effect; implementation and production correctness verified.
- **Action**: published and verified; keep the approved company facts and preserve the original pilot. Immediate
  availability cannot establish recommendation uplift; mark deliberate prompt-induced crawler fetches.

### [2026-09-21] Direct Turkish product links from wall-panel articles — commit 2bcdbac
- **2026-10-01 language expansion / current cohort**: BG/SR/AR translations, five-language alternates and navigation extend site-wide discovery and the acquisition mix. Ship/re-baseline affected search/allocation/link and aggregate AI/referral outcomes to the [fresh locale/page/country checkpoint](baselines/2026-10-01-language-expansion.md), with **November 12** combined interpretation. Preserve fixed original cohorts, historical verdicts, exact manufacturer prompt audits and October 5/8/21/26 operational or correctness dates. Production boundary is recorded in the language entry.
- **2026-10-01 content completion / cohort marker**: Curated wall-guide and glossary links add upstream discovery. Preserve the fixed product/query allocation cohort and review combined effects November 12.
  [Fresh page/query baseline](baselines/2026-10-01-content-completion.md);
  [scope and deployment boundary](content-strategy/2026-10-01-content-completion-launch.md).
- **2026-10-01 sitemap discovery / current treatment**: At 01:05:56 UTC, 51 Turkish
  static/article URLs gained separate sitemap entries. Product/article sitemap coverage overlaps page allocation; refresh the query/page checkpoint for November 12 combined effects. Preserve original link correctness.
  [Frozen page/query checkpoint](baselines/2026-10-01-turkish-sitemap-entries.md);
  [all-parent treatment](content-strategy/2026-10-01-turkish-sitemap-entries.md).
- **2026-10-01 discovery interference / current treatment**: New About-to-wall-product links and wall manufacturer text overlap product/query allocation. Ship/re-baseline that combined outcome to the [October 1 baseline](baselines/2026-10-01-manufacturer-discovery.md), **November 12**, replacing November 2 for the affected scope. Preserve the original link-correctness checks and pre-release snapshots.
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
- **Review due**: **2026-11-12** combined wall-panel effect after the October 1 discovery re-baseline;
  exclude September 21. The September 27 historical checkpoint was completed October 1
  using the pre-link cohort through September 20; next operational watch **October 8**.
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
  wall-panel effect November 12 after the sitemap treatment; preserve historical checks.
- **Operational check — 2026-09-25**: latest rolling 28 days through September 23
  show TR product **13 clicks / 279 impressions**, versus **32 / 784** in the prior
  28 days. Whole-property `spc duvar paneli` clicks rise **21→30** as allocation shifts
  to the guide. September 22–23 has only **1/18** on the product; no link-effect verdict.
  Both live links are correct; usage-guide indexed crawl is still September 19,
  bathroom renovation September 25. Keep November 2; September 27 can read the old
  cohort only through September 20. Next weekly watch October 1.
  [Evidence](reviews/2026-09-25.md).

- **Review — 2026-10-01**: Keep links. Monthly TR product exposure is **23→17 clicks / 676→230
  impressions**. `spc duvar paneli` product clicks **12→3**, guide clicks **7→29**,
  property clicks **19→32**. First full post-link week September 22–28 is **7/62**
  all-query product clicks/impressions versus **1/44** September 14–20: encouraging but
  too short and mixed to establish recovery. Next watch **October 8**; keep **November 12**
  combined verdict. Live localized links and product canonical pass. [October 1 review](reviews/2026-10-01.md).

### [2026-09-21] Analytics consent ordering repair — commit 0e7cbf5
- **2026-10-01 language expansion / current cohort**: BG/SR/AR translations, five-language alternates and navigation extend site-wide discovery and the acquisition mix. Ship/re-baseline affected search/allocation/link and aggregate AI/referral outcomes to the [fresh locale/page/country checkpoint](baselines/2026-10-01-language-expansion.md), with **November 12** combined interpretation. Preserve fixed original cohorts, historical verdicts, exact manufacturer prompt audits and October 5/8/21/26 operational or correctness dates. Production boundary is recorded in the language entry.
- **2026-10-01 content completion / cohort marker**: Consent implementation unchanged. Preserve WORKED correctness, October 5 desktop, October 8 weekly and October 21 consent checks; annotate traffic/conversion mix only.
  [Fresh page/query baseline](baselines/2026-10-01-content-completion.md);
  [scope and deployment boundary](content-strategy/2026-10-01-content-completion-launch.md).
- **2026-10-01 sitemap discovery / current treatment**: At 01:05:56 UTC, 51 Turkish
  static/article URLs gained separate sitemap entries. No event-code change; annotate acquisition mix. Preserve WORKED command ordering, October 5/21 operations and the September 21 consent boundary.
  [Frozen page/query checkpoint](baselines/2026-10-01-turkish-sitemap-entries.md);
  [all-parent treatment](content-strategy/2026-10-01-turkish-sitemap-entries.md).
- **2026-10-01 discovery interference / current treatment**: No event-code change. Aggregate AI/content outcomes use the [October 1 baseline](baselines/2026-10-01-manufacturer-discovery.md), **November 12**. Preserve consent correctness, October 5 desktop, October 21 conversion checks and the September 21 measurement break.
- **2026-09-29 manufacturer interference / current treatment**: Aggregate AI/content outcomes use the [September 29 baseline](baselines/2026-09-29-manufacturer-positioning.md) and **November 10** combined review. Keep consent correctness, October 5 desktop, October 21 conversions and the September 21 measurement break; no event-code change.
- **2026-09-25 content interference / current treatment**: New/revised content adds discovery and enquiry exposure. Aggregate AI/content effects use the [September 25 baseline](baselines/2026-09-25-comparison-content.md) and **November 6** combined review. Keep September 28 correctness, October 5 desktop and October 21 conversions; preserve the September 21 measurement break.
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
- **Review due**: September 28 operational check completed **2026-10-01**; preserve
  **October 5** desktop comparison, **October 21** conversions and **November 12**
  combined AI/content outcome after the October 1 discovery re-baseline.

- **Verdict**: **WORKED — 2026-10-01, tested command ordering.** All **16/16**
  production EN/TR desktop/mobile tests pass with external analytics delivery blocked.
  Acceptance, saved consent, navigation, withdrawal/reacceptance and delayed loader
  behavior pass. Session/attribution completeness and conversion effects remain PENDING.
  [October 1 review](reviews/2026-10-01.md).

- **Action**: keep the repair and September 21 measurement boundary. A substituted remote
  loader isolates command ordering; it does not prove Google ingestion or qualified
  lead growth. The earlier September 21 real-loader capture remains separate evidence.

- **Descriptive operational update — 2026-09-25**: only September 22–23 is available
  as full post-repair days at this review's cutoff: 30 sessions, 26 Organic Search,
  five download keys and no lead-event rows. Türkiye desktop has four organic
  sessions versus 22 GSC clicks; this tiny, differently measured interval cannot
  establish success or failure. Weekly desktop sessions are 9→9. Keep September 28
  correctness, October 5 desktop and October 21 conversion dates; no runtime retest
  or new verdict today. [Review](reviews/2026-09-25.md).

- **Review — 2026-10-01**: Seven full post-repair days September 22–28 have **82 sessions / 66 Organic Search /
  4 lead keys / 10 download keys**. Türkiye desktop organic sessions are **9→6** against
  **56→45** GSC clicks in equal clean pre/post weeks. No desktop recovery verdict before
  October 5; clicks and sessions measure different things. [October 1 review](reviews/2026-10-01.md).

### [2026-09-21] Germany representative on bilingual contact pages — commit 0e7cbf5
- **2026-10-01 language expansion / current cohort**: BG/SR/AR translations, five-language alternates and navigation extend site-wide discovery and the acquisition mix. Ship/re-baseline affected search/allocation/link and aggregate AI/referral outcomes to the [fresh locale/page/country checkpoint](baselines/2026-10-01-language-expansion.md), with **November 12** combined interpretation. Preserve fixed original cohorts, historical verdicts, exact manufacturer prompt audits and October 5/8/21/26 operational or correctness dates. Production boundary is recorded in the language entry.
- **2026-10-01 content completion / cohort marker**: Office/contact implementation unchanged. Retain the office-specific October 21 read and annotate content referral changes without attributing them to the office link.
  [Fresh page/query baseline](baselines/2026-10-01-content-completion.md);
  [scope and deployment boundary](content-strategy/2026-10-01-content-completion-launch.md).
- **2026-10-01 sitemap discovery / current treatment**: At 01:05:56 UTC, 51 Turkish
  static/article URLs gained separate sitemap entries. Annotate incoming search exposure; preserve office behavior and the October 21 office read. Avoid isolated enquiry-volume attribution.
  [Frozen page/query checkpoint](baselines/2026-10-01-turkish-sitemap-entries.md);
  [all-parent treatment](content-strategy/2026-10-01-turkish-sitemap-entries.md).
- **2026-10-01 discovery interference / current treatment**: Contact office data and handlers unchanged. Keep Germany-office-specific October 21 baseline/date; annotate aggregate incoming enquiries with the [October 1 baseline](baselines/2026-10-01-manufacturer-discovery.md). No qualified-lead growth is inferred.
- **2026-09-29 manufacturer interference / current treatment**: About manufacturer copy adds enquiry exposure. Annotate aggregate contact counts with the [September 29 cohort](content-strategy/2026-09-29-manufacturer-positioning.md); keep Germany-office-specific October 21 metrics and Contact data unchanged.
- **2026-09-25 content interference / current treatment**: Annotate aggregate contact readings with the [comparison/water/terminology cohort](content-strategy/2026-09-25-comparison-content-launch.md). Keep the office-specific October 21 metric and baseline; no contact-page or event-code changes.
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

- **Review — 2026-10-01**: Both live contact pages retain the Germany telephone link. October 21
  remains the earliest office/conversion comparison; no premature qualified-lead verdict. [October 1 review](reviews/2026-10-01.md).

### [2026-08-14] GA4 lead tracking (generate_lead + file_download key events) — commit ae721ed
- **2026-10-01 language expansion / current cohort**: BG/SR/AR translations, five-language alternates and navigation extend site-wide discovery and the acquisition mix. Ship/re-baseline affected search/allocation/link and aggregate AI/referral outcomes to the [fresh locale/page/country checkpoint](baselines/2026-10-01-language-expansion.md), with **November 12** combined interpretation. Preserve fixed original cohorts, historical verdicts, exact manufacturer prompt audits and October 5/8/21/26 operational or correctness dates. Production boundary is recorded in the language entry.
- **2026-10-01 content completion / cohort marker**: Key-event implementation unchanged; preserve October 8 weekly operations. New content changes traffic composition; do not infer a new tracking verdict.
  [Fresh page/query baseline](baselines/2026-10-01-content-completion.md);
  [scope and deployment boundary](content-strategy/2026-10-01-content-completion-launch.md).
- **2026-10-01 sitemap discovery / current treatment**: At 01:05:56 UTC, 51 Turkish
  static/article URLs gained separate sitemap entries. Annotate acquisition mix and preserve the consent boundary, WORKED instrumentation and October 8 weekly operations.
  [Frozen page/query checkpoint](baselines/2026-10-01-turkish-sitemap-entries.md);
  [all-parent treatment](content-strategy/2026-10-01-turkish-sitemap-entries.md).
- **2026-10-01 discovery interference / current treatment**: Preserve WORKED instrumentation and weekly operational reads. Aggregate AI/content outcomes use the [October 1 baseline](baselines/2026-10-01-manufacturer-discovery.md), **November 12**; retain the consent break and distinguish intent/download actions from qualified enquiries.
- **2026-09-29 manufacturer interference / current treatment**: Preserve WORKED instrumentation and weekly operational reads. Annotate aggregate intent/download counts with the new manufacturer copy and September 21 consent break. Combined AI/content review is **November 10** using the [new baseline](baselines/2026-09-29-manufacturer-positioning.md); these are not qualified leads.
- **2026-09-25 content interference / current treatment**: New/revised guides add document/contact opportunities. Preserve WORKED instrumentation and the operational schedule. Record the [comparison/water/terminology cohort](content-strategy/2026-09-25-comparison-content-launch.md) and consent break in aggregate counts; combined AI/content outcome is November 6, without inferring qualified leads.
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
- **Review due**: Weekly operations completed **2026-10-01**; next **2026-10-08**.
  Original September 3 WORKED verdict retained. Consent correctness completed October 1;
  desktop October 5 and conversion October 21 dates remain.

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

- **Operational update — 2026-09-25**: September 17–23 records **4 lead / 35 download
  key events**, versus 4/4 in September 10–16; since launch **28/44**. Downloads
  involve eight recorded users: 16 events from one user on September 20 and seven
  from one user September 17. No new raw-lead burst. Preserve WORKED instrumentation,
  not qualified-lead growth, and the September 21 measurement break. Next weekly read
  **October 1**; watch document-event concentration. [Review](reviews/2026-09-25.md).

- **Review — 2026-10-01**: September 15–21→September 22–28 lead keys **6→4** (raw events **7→4**),
  downloads **31→10**. Latest events involve four lead-event users and four download
  users; seven downloads come from two visitors. These are intent actions, not qualified
  prospects. Since August 14: **32 lead keys / 49 download keys**. Keep instrumentation
  and next weekly read October 8; no measurement rewrite from the prior download spike. [October 1 review](reviews/2026-10-01.md).

### [2026-08-15] AI crawlers unblocked (Cloudflare AI Crawl Control) — no code commit
- **2026-10-01 language expansion / current cohort**: BG/SR/AR translations, five-language alternates and navigation extend site-wide discovery and the acquisition mix. Ship/re-baseline affected search/allocation/link and aggregate AI/referral outcomes to the [fresh locale/page/country checkpoint](baselines/2026-10-01-language-expansion.md), with **November 12** combined interpretation. Preserve fixed original cohorts, historical verdicts, exact manufacturer prompt audits and October 5/8/21/26 operational or correctness dates. Production boundary is recorded in the language entry.
- **2026-10-01 content completion / cohort marker**: Crawler settings unchanged; aggregate AI referrals overlap this expanded corpus. Combined outcome November 12; referrals do not measure citation frequency.
  [Fresh page/query baseline](baselines/2026-10-01-content-completion.md);
  [scope and deployment boundary](content-strategy/2026-10-01-content-completion-launch.md).
- **2026-10-01 sitemap discovery / current treatment**: At 01:05:56 UTC, 51 Turkish
  static/article URLs gained separate sitemap entries. Preserve the historical INCONCLUSIVE verdict and November 12 combined aggregate AI outcome; no isolated crawler effect is established.
  [Frozen page/query checkpoint](baselines/2026-10-01-turkish-sitemap-entries.md);
  [all-parent treatment](content-strategy/2026-10-01-turkish-sitemap-entries.md).
- **2026-10-01 discovery interference / current treatment**: Crawler settings unchanged. Combined AI/content/referral outcomes use the [October 1 baseline](baselines/2026-10-01-manufacturer-discovery.md), **November 12**. Preserve historical snapshots and consent break; mark deliberate October 1 audit fetches. Recommendation-plus-owned-citation cells are a separate consumer measure, not proof of crawler-setting efficacy.
- **2026-09-29 manufacturer interference / current treatment**: Ship/re-baseline overlapping AI/content outcomes to the [September 29 snapshot](baselines/2026-09-29-manufacturer-positioning.md), with **November 10** combined review. Preserve old snapshots and consent break; neither referrals nor prompt-induced fetches isolate crawler-setting efficacy. The signed-out buyer-question pilot is a separate 3/4 recommendation/citation measure.
- **2026-09-25 content interference / current treatment**: New/revised comparison, water and terminology content overlaps aggregate discovery. Use the [September 25 baseline](baselines/2026-09-25-comparison-content.md) and **November 6** combined AI outcome, superseding November 3 for this metric. Preserve the September 21 consent break and historical verdicts.
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
- **Review due**: September 15 historical checkpoint completed; **2026-11-12 combined
  AI/content effect** after the October 1 discovery re-baseline. Preserve the September 21
  consent break and all historical snapshots; this supersedes November 6 for this metric.
- **Verdict**: **INCONCLUSIVE — 2026-09-15 historical checkpoint.** Matched
  07-18→08-14 vs 08-16→09-12 has **1→2 AI Assistant sessions**, all ChatGPT; one
  current session contains a lead key event. This is too little referral evidence and does
  not measure chatbot citations. **Combined effect remains pending 2026-11-12 after the October 1 re-baseline.** [September 15 evidence](reviews/2026-09-15.md).
- **Action**: keep. Preserve the original 6/90-day baseline and September content
  re-baselines. Seek sustained referral volume and landing/source patterns at the November
  12 combined review; use the separate dated prompt cohorts for citation measurement. Browser-like requests
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

- **Passive / operational check — 2026-09-25**: fixed AI Assistant channel has
  **14 sessions / four users / three key events**, versus 1/1/0 in matched rolling
  28 days. Supplementary source report adds `gemini / (not set)` with one session
  and two downloads, classified Unassigned; do not fold it into the fixed channel
  baseline or infer citations. Keep historical INCONCLUSIVE and November 3 combined
  outcome. Robots/llms return 200; verified-bot edge logs remain unmeasured.
  Next source/medium watch October 1. [Review](reviews/2026-09-25.md).

- **Review — 2026-10-01**: At the common September 28 cutoff, AI Assistant is **14 sessions / four
  users / three key events**, all ChatGPT. Separate source matching finds **two Gemini
  sessions / two users / two download keys** in Unassigned; do not merge channel scopes.
  Earlier same-day chatbot/crawler evidence predates the new discovery release and is
  linked from the review. The expanded multilingual audit is a separate baseline;
  no post-release citation lift is established. Preserve **November 12** combined effect. [October 1 review](reviews/2026-10-01.md).

### [2026-08-15] JSON-LD structured data site-wide — commit 8daf750
- **2026-10-01 language expansion / current cohort**: BG/SR/AR translations, five-language alternates and navigation extend site-wide discovery and the acquisition mix. Ship/re-baseline affected search/allocation/link and aggregate AI/referral outcomes to the [fresh locale/page/country checkpoint](baselines/2026-10-01-language-expansion.md), with **November 12** combined interpretation. Preserve fixed original cohorts, historical verdicts, exact manufacturer prompt audits and October 5/8/21/26 operational or correctness dates. Production boundary is recorded in the language entry.
- **2026-10-01 content completion / cohort marker**: Glossary DefinedTermSet and affected article FAQs are incremental. Preserve Product/Breadcrumb verdicts and prior schema-only baselines; combined discovery November 12.
  [Fresh page/query baseline](baselines/2026-10-01-content-completion.md);
  [scope and deployment boundary](content-strategy/2026-10-01-content-completion-launch.md).
- **2026-10-01 sitemap discovery / current treatment**: At 01:05:56 UTC, 51 Turkish
  static/article URLs gained separate sitemap entries. Preserve Breadcrumb WORKED and Product eligibility NO EFFECT; affected search/CTR uses the refreshed November 12 combined checkpoint.
  [Frozen page/query checkpoint](baselines/2026-10-01-turkish-sitemap-entries.md);
  [all-parent treatment](content-strategy/2026-10-01-turkish-sitemap-entries.md).
- **2026-10-01 discovery interference / current treatment**: Product/Organization/Breadcrumb code unchanged; About FAQ text changed and seven answers per locale match visible/schema output. Affected wall/broad-floor allocation and CTR subsets use the [October 1 baseline](baselines/2026-10-01-manufacturer-discovery.md), **November 12**. Preserve enhancement/correctness checks and disjoint cohorts.
- **2026-09-29 manufacturer interference / current treatment**: Changed About FAQ facts overlap only About/entity citation interpretation; use the [September 29 baseline](baselines/2026-09-29-manufacturer-positioning.md) and **November 10** for that content subset. Product/schema framework, unrelated correctness checks and existing product search dates are unchanged.
- **2026-09-25 content interference / current treatment**: Rewritten/localized water-guide links affect Stone EN/TR incoming-link exposure. Re-baseline only that all-query collection subset to the [September 25 baseline](baselines/2026-09-25-comparison-content.md) for **November 6** combined effects. Keep schema correctness, other September 27 collections, November 3 Elite and November 2 wall-panel subsets. Product/schema code is unchanged.
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
- **Review due**: September 27 effect review completed **2026-10-01**. Next passive
  appearance read **October 8**; **November 12** affected combined product/collection
  CTR outcome per the October 1 re-baseline.

- **Verdict**: **WORKED — Breadcrumb detection; NO EFFECT — Product snippet eligibility;
  INCONCLUSIVE — attributable long-term CTR, 2026-10-01.** All 11 English Product
  pages are indexed with valid Breadcrumb items; all 11 still lack the required
  offers/review/aggregateRating eligibility field. No site-wide or Product-filtered
  searchAppearance rows. Product-page CTR improves **1.11%→2.10%** on **15→22 clicks**,
  but changed position/query mix and overlapping releases prevent an isolated schema
  effect. [October 1 review](reviews/2026-10-01.md).

- **Historical September 3 appearance checkpoint**: PENDING (long-term effect). **Appearance checkpoint 2026-09-03: WORKED for
  Breadcrumbs / NO EFFECT for Product rich-result eligibility.** URL Inspection reports valid
  Breadcrumbs on the recrawled hub/product pages. Product snippets are detected on 10 of 11
  English Product-schema pages, but all 10 fail eligibility because none truthfully has an
  `offers`, `review`, or `aggregateRating` value; the 11th page was last crawled before ship.
  GSC performance `searchAppearance` still has no site-wide or product-page rows through 08-31.

- **Action**: keep Breadcrumbs and truthful semantic Product data. Do not invent eligibility
  fields. Only add offers or review data if authentic supported facts become available.
  Keep the November 12 combined guard and separate passive eligibility checks.

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

- **Passive / operational check — 2026-09-25**: all 11 English Product pages remain
  indexed, with valid detected Breadcrumbs and unchanged Product eligibility errors;
  site-wide/Product searchAppearance still has no rows. No early structural verdict.
  TR wall-panel product exposure remains lower (**784→279 impressions**) despite a
  better all-query average position; exact-query allocation still favors the guide.
  Preserve unaffected September 27 cohorts, pre-link reads through September 20,
  November 2 wall-panel effect and November 3 narrow Elite overlap. The known sitemap
  locale-entry correction remains recommended after September 27, unimplemented.
  [Review](reviews/2026-09-25.md).

### [2026-08-15] Localized collection H1s — commit 8daf750
- **2026-10-01 language expansion / current cohort**: BG/SR/AR translations, five-language alternates and navigation extend site-wide discovery and the acquisition mix. Ship/re-baseline affected search/allocation/link and aggregate AI/referral outcomes to the [fresh locale/page/country checkpoint](baselines/2026-10-01-language-expansion.md), with **November 12** combined interpretation. Preserve fixed original cohorts, historical verdicts, exact manufacturer prompt audits and October 5/8/21/26 operational or correctness dates. Production boundary is recorded in the language entry.
- **2026-10-01 content completion / cohort marker**: Collection H1s unchanged, but definition/review/pricing and discovery links overlap broad floor/query allocation. Use the fixed collection guard and November 12 combined outcome.
  [Fresh page/query baseline](baselines/2026-10-01-content-completion.md);
  [scope and deployment boundary](content-strategy/2026-10-01-content-completion-launch.md).
- **2026-10-01 sitemap discovery / current treatment**: At 01:05:56 UTC, 51 Turkish
  static/article URLs gained separate sitemap entries. Collection discovery overlaps; fixed-collection all-query/CTR and broad-floor outcomes use the refreshed November 12 combined checkpoint.
  [Frozen page/query checkpoint](baselines/2026-10-01-turkish-sitemap-entries.md);
  [all-parent treatment](content-strategy/2026-10-01-turkish-sitemap-entries.md).
- **2026-10-01 discovery interference / current treatment**: Collection H1s unchanged; homepage manufacturer titles can affect broad floor-query allocation and collection CTR. Re-baseline the fixed 16-URL all-query/CTR and broad-floor allocation guards to the [October 1 baseline](baselines/2026-10-01-manufacturer-discovery.md), **November 12**; preserve the earlier historical reads and disjoint query cohorts.
- **2026-09-25 content interference / current treatment**: Rewritten/localized water-guide links affect Stone EN/TR incoming-link exposure. Use the [September 25 baseline](baselines/2026-09-25-comparison-content.md) and **November 6** for that subset’s combined outcome; preserve original snapshots, other September 27 collections, November 3 Elite and November 2 wall-panel subsets. No H1 or collection-data change.
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
- **Review due**: September 27 follow-up completed **2026-10-01**; **2026-11-12** combined
  fixed-collection all-query/CTR and broad-floor outcome per the published re-baseline.

- **Verdict**: **INCONCLUSIVE — 2026-10-01.** Original fixed 16-page baseline versus
  September 1–28: **52/1,958/2.66%/8.45 → 51/1,768/2.88%/6.60**
  (clicks/impressions/CTR/position). The 13 pages excluding Stone EN/TR and English
  Elite also improve aggregate position, but Natural’s exact `spc parke` exposure is
  only **21→15 impressions / 27.76→25.47 / zero clicks**. Shared non-brand query/URL
  rows improve modestly under fixed pre-period weights. Better aggregate readings do
  not establish sustained target-query expansion or an isolated H1 effect. [October 1 review](reviews/2026-10-01.md).

- **Historical September 15 H1 checkpoint**: **INCONCLUSIVE — 2026-09-15.** The fixed 16 HTTPS collection pages
  move from 52 clicks / 1,958 impressions / 2.66% CTR / position 8.45 to
  47 / 1,739 / 2.70% / 9.93 in matched pre/post 28-day windows. Natural collection
  exposure for `spc parke` improves from 21 impressions at 27.76 to 34 at 22.32
  (0→2 clicks); property-level movement mostly reflects the blog result. Shared non-brand
  query/page rows improve modestly under fixed pre-period weights, so query mix matters.
  Mixed trends and sparse direct target-query exposure prevent a clear effect verdict.
  [September 15 evidence](reviews/2026-09-15.md).

- **Action**: keep localized H1s. Seek sustained same-query collection exposure and clicks
  in the November 12 combined review; preserve original snapshots, protected historical
  reads and the October 1 interference treatment.

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
- **2026-10-01 language expansion / current cohort**: BG/SR/AR translations, five-language alternates and navigation extend site-wide discovery and the acquisition mix. Ship/re-baseline affected search/allocation/link and aggregate AI/referral outcomes to the [fresh locale/page/country checkpoint](baselines/2026-10-01-language-expansion.md), with **November 12** combined interpretation. Preserve fixed original cohorts, historical verdicts, exact manufacturer prompt audits and October 5/8/21/26 operational or correctness dates. Production boundary is recorded in the language entry.
- **2026-10-01 content completion / cohort marker**: Existing slugs and redirect rules unchanged. Revised content may affect allocation; retain historical aliases in the new baseline and preserve WORKED consolidation.
  [Fresh page/query baseline](baselines/2026-10-01-content-completion.md);
  [scope and deployment boundary](content-strategy/2026-10-01-content-completion-launch.md).
- **2026-10-01 sitemap discovery / current treatment**: At 01:05:56 UTC, 51 Turkish
  static/article URLs gained separate sitemap entries. Preserve WORKED canonical consolidation and October 8 alias check; later bilingual allocation, including comparison/water subsets, now uses November 12 combined effects.
  [Frozen page/query checkpoint](baselines/2026-10-01-turkish-sitemap-entries.md);
  [all-parent treatment](content-strategy/2026-10-01-turkish-sitemap-entries.md).
- **2026-10-01 discovery interference / current treatment**: Redirect code unchanged. Overlapping wall/broad-floor URL/query allocation subsets use the [October 1 baseline](baselines/2026-10-01-manufacturer-discovery.md), **November 12**; preserve redirect correctness and unaffected historical subsets.
- **2026-09-25 content interference / current treatment**: Existing comparison/water EN/TR content and metadata are revised. Their two Turkish canonical/alias pairs now use the [September 25 baseline](baselines/2026-09-25-comparison-content.md) and **November 6** combined search outcome. September 27 may read this subset through September 24 as pre-release evidence. Other redirect subsets keep their dates, including November 2 wall panels; verify existing and new 308 behavior independently.
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
- **Review due**: September 27 consolidation verdict completed **2026-10-01**. Passive
  stale-alias check **October 8**; **November 12** combined bilingual allocation, including
  comparison/water and wall/broad-floor subsets, after the sitemap treatment.

- **Verdict**: **WORKED — 2026-10-01, canonical consolidation.** All nine original Turkish
  canonical pages are indexed; all nine old aliases are excluded as Page with redirect
  and return the expected live 308. Canonical/alias clicks move **1/192 → 179/11**
  in the original clean baseline versus the 28-day pre-wall-link interval, then **180/3**
  in September 1–28. This demonstrates consolidation, not incremental traffic growth.
  [October 1 review](reviews/2026-10-01.md).

- **Action**: keep the permanent redirects. Recheck the misconceptions alias’s stale
  August 20 Google-canonical field on October 8; its redirect exclusion, current 308
  and indexed `/tr` destination already pass. Preserve all historical snapshots and
  later content/link interference treatments.

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
- **2026-10-01 language expansion / current cohort**: BG/SR/AR translations, five-language alternates and navigation extend site-wide discovery and the acquisition mix. Ship/re-baseline affected search/allocation/link and aggregate AI/referral outcomes to the [fresh locale/page/country checkpoint](baselines/2026-10-01-language-expansion.md), with **November 12** combined interpretation. Preserve fixed original cohorts, historical verdicts, exact manufacturer prompt audits and October 5/8/21/26 operational or correctness dates. Production boundary is recorded in the language entry.
- **2026-10-01 content completion / cohort marker**: llms.txt unchanged; new article/glossary/hub content overlaps aggregate discovery and AI outcomes. Combined interpretation November 12.
  [Fresh page/query baseline](baselines/2026-10-01-content-completion.md);
  [scope and deployment boundary](content-strategy/2026-10-01-content-completion-launch.md).
- **2026-10-01 sitemap discovery / current treatment**: At 01:05:56 UTC, 51 Turkish
  static/article URLs gained separate sitemap entries. No llms.txt change; preserve historical INCONCLUSIVE and November 12 combined aggregate AI outcome.
  [Frozen page/query checkpoint](baselines/2026-10-01-turkish-sitemap-entries.md);
  [all-parent treatment](content-strategy/2026-10-01-turkish-sitemap-entries.md).
- **2026-10-01 discovery interference / current treatment**: File unchanged and exact production bytes verified. Aggregate AI/content outcomes use the [October 1 baseline](baselines/2026-10-01-manufacturer-discovery.md), **November 12**; preserve older snapshots and avoid an isolated llms.txt effect claim.
- **2026-09-29 manufacturer interference / current treatment**: Direct content overlap: capacity, country roles and purchasing links now match About. Re-baseline combined AI/content effects to [September 29](baselines/2026-09-29-manufacturer-positioning.md) and **November 10**. Preserve history; normal page citations do not establish llms.txt efficacy.
- **2026-09-25 content interference / current treatment**: New/revised comparison, water and terminology content overlaps aggregate discovery. Use the [September 25 baseline](baselines/2026-09-25-comparison-content.md) and **November 6** combined AI outcome, superseding November 3 for this metric. Preserve the September 21 consent break and historical verdicts.
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
- **Review due**: September 15 historical checkpoint completed; **2026-11-12 combined
  AI/content effect** after the October 1 discovery re-baseline, superseding November 6.
  Preserve historical content/consent baselines; no isolated llms.txt effect is identifiable.
- **Verdict**: **INCONCLUSIVE — 2026-09-15 historical checkpoint.** Matched
  07-18→08-14 vs 08-16→09-12 has **1→2 AI Assistant sessions**, all ChatGPT; one
  current session contains a lead key event. This is too little referral evidence and does
  not measure chatbot citations. **Combined effect remains pending 2026-11-12 after the October 1 re-baseline.** [September 15 evidence](reviews/2026-09-15.md).
- **Action**: keep. Preserve the original 6/90-day baseline and September content
  re-baselines. Seek sustained referral volume and landing/source patterns at the November
  12 combined review; use the separate dated prompt cohorts for citation measurement. Browser-like requests
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

- **Passive / operational check — 2026-09-25**: retain the crawler entry's fixed
  **14 AI Assistant sessions / four users / three keys** and separate Gemini-labeled
  Unassigned session. No direct citation or isolated llms.txt effect is established.
  Keep historical INCONCLUSIVE and **November 3**, as already set by the September 22
  treatment; next source watch October 1. [Review](reviews/2026-09-25.md).

- **Review — 2026-10-01**: At the common September 28 cutoff, AI Assistant is **14 sessions / four
  users / three key events**, all ChatGPT. Separate source matching finds **two Gemini
  sessions / two users / two download keys** in Unassigned; do not merge channel scopes.
  Earlier same-day chatbot/crawler evidence predates the new discovery release and is
  linked from the review. The expanded multilingual audit is a separate baseline;
  no post-release citation lift is established. Preserve **November 12** combined effect. [October 1 review](reviews/2026-10-01.md).

### [2026-08-15] New post pair: SPC user reviews — commit 89db2ae
- **2026-10-01 language expansion / current cohort**: BG/SR/AR translations, five-language alternates and navigation extend site-wide discovery and the acquisition mix. Ship/re-baseline affected search/allocation/link and aggregate AI/referral outcomes to the [fresh locale/page/country checkpoint](baselines/2026-10-01-language-expansion.md), with **November 12** combined interpretation. Preserve fixed original cohorts, historical verdicts, exact manufacturer prompt audits and October 5/8/21/26 operational or correctness dates. Production boundary is recorded in the language entry.
- **2026-10-01 content completion / cohort marker**: Direct EN/TR rewrite and metadata change. Preserve the historical WORKED ranking verdict; new fixed page/query baseline with October 29 descriptive and November 12 combined outcome.
  [Fresh page/query baseline](baselines/2026-10-01-content-completion.md);
  [scope and deployment boundary](content-strategy/2026-10-01-content-completion-launch.md).
- **2026-10-01 sitemap discovery / current treatment**: At 01:05:56 UTC, 51 Turkish
  static/article URLs gained separate sitemap entries. Preserve WORKED historical rankings; subsequent article discovery readings carry this marker without reopening the closed verdict.
  [Frozen page/query checkpoint](baselines/2026-10-01-turkish-sitemap-entries.md);
  [all-parent treatment](content-strategy/2026-10-01-turkish-sitemap-entries.md).
- **2026-10-01 discovery interference / current treatment**: No page, target-query or related-link edit. Preserve WORKED primary ranking outcome/passive monitoring; annotate aggregate AI/contact secondary readings with the [October 1 baseline](baselines/2026-10-01-manufacturer-discovery.md).
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

- **Review — 2026-10-01**: Original September 15 WORKED ranking verdict retained. Latest monthly
  exact `spc parke kullanıcı yorumları` is **19 clicks / 145 impressions / position 2.50**;
  both articles remain indexed. Ongoing support is separate from conversion evidence. [October 1 review](reviews/2026-10-01.md).

### [2026-08-15] New post pair: SPC pricing factors — commit 89db2ae
- **2026-10-01 language expansion / current cohort**: BG/SR/AR translations, five-language alternates and navigation extend site-wide discovery and the acquisition mix. Ship/re-baseline affected search/allocation/link and aggregate AI/referral outcomes to the [fresh locale/page/country checkpoint](baselines/2026-10-01-language-expansion.md), with **November 12** combined interpretation. Preserve fixed original cohorts, historical verdicts, exact manufacturer prompt audits and October 5/8/21/26 operational or correctness dates. Production boundary is recorded in the language entry.
- **2026-10-01 content completion / cohort marker**: Direct EN/TR rewrite and metadata change. Preserve the earlier INCONCLUSIVE verdict; new fixed pricing page/query baseline, October 29 descriptive and November 12 combined outcome. October 21 is descriptive for content effects.
  [Fresh page/query baseline](baselines/2026-10-01-content-completion.md);
  [scope and deployment boundary](content-strategy/2026-10-01-content-completion-launch.md).
- **2026-10-01 sitemap discovery / current treatment**: At 01:05:56 UTC, 51 Turkish
  static/article URLs gained separate sitemap entries. Article/tag allocation overlaps; October 21 is descriptive, November 12 is the combined search outcome. Conversion inference still depends on sufficient measured visits.
  [Frozen page/query checkpoint](baselines/2026-10-01-turkish-sitemap-entries.md);
  [all-parent treatment](content-strategy/2026-10-01-turkish-sitemap-entries.md).
- **2026-10-01 discovery interference / current treatment**: No pricing-intent copy or links changed. Preserve primary price-query scope and historical checkpoints; aggregate AI/contact secondary readings carry the [October 1 baseline](baselines/2026-10-01-manufacturer-discovery.md).
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
- **Review due**: September 27 follow-up completed **2026-10-01**; **2026-10-21**
  descriptive article/tag allocation and conversion read, subject to enough measured visits;
  **2026-11-12** combined search outcome after the sitemap treatment.

- **Verdict**: **INCONCLUSIVE — 2026-10-01, overall search/conversion outcome.**
  `spc parke fiyatları` moves from **0/16/12.06** to **3/324/9.14**
  (clicks/impressions/position), but the tag takes **3/308**, the article **0/3**.
  The article pair has **7 clicks / 797 impressions**, only two measured latest monthly
  landings and no article-attributed generate_lead through September 28. Property-level
  discovery has improved, but sustained article capture and conversion remain unproven.
  [October 1 review](reviews/2026-10-01.md).

- **Historical September 15 pricing checkpoint**: **INCONCLUSIVE — 2026-09-15, overall ranking/conversion outcome.**
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

- **Action**: keep both articles and the tag. Recheck allocation and measured visits on
  October 21; do not remove/noindex the tag or rewrite the article from this sparse
  sample. Keep the September 21 consent break in conversion comparisons.

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
- **2026-10-01 language expansion / current cohort**: BG/SR/AR translations, five-language alternates and navigation extend site-wide discovery and the acquisition mix. Ship/re-baseline affected search/allocation/link and aggregate AI/referral outcomes to the [fresh locale/page/country checkpoint](baselines/2026-10-01-language-expansion.md), with **November 12** combined interpretation. Preserve fixed original cohorts, historical verdicts, exact manufacturer prompt audits and October 5/8/21/26 operational or correctness dates. Production boundary is recorded in the language entry.
- **2026-10-01 content completion / cohort marker**: CTR article titles remain unchanged; hub/glossary incoming discovery overlaps. Keep October 15 descriptive query read and November 12 combined outcome.
  [Fresh page/query baseline](baselines/2026-10-01-content-completion.md);
  [scope and deployment boundary](content-strategy/2026-10-01-content-completion-launch.md).
- **2026-10-01 sitemap discovery / current treatment**: At 01:05:56 UTC, 51 Turkish
  static/article URLs gained separate sitemap entries. Keep the historical INCONCLUSIVE verdict; October 15 bathroom/skirting readings are now descriptive, November 12 is the combined bilingual outcome.
  [Frozen page/query checkpoint](baselines/2026-10-01-turkish-sitemap-entries.md);
  [all-parent treatment](content-strategy/2026-10-01-turkish-sitemap-entries.md).
- **2026-10-01 discovery interference / current treatment**: Original article metadata untouched. The wall-related combined product/allocation subset overlaps the new About link/copy and uses the [October 1 baseline](baselines/2026-10-01-manufacturer-discovery.md), **November 12**. Preserve disjoint exact bathroom/skirting topic checks and historical snapshots.
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
- **Review due**: September 27 combined follow-up completed **2026-10-01**. Next
  **2026-10-15** descriptive bathroom/skirting check; **November 12** combined bilingual
  topic/allocation outcome. Preserve September 17 fixed 28-day and 27-day sensitivity windows.

- **Verdict**: **INCONCLUSIVE — 2026-10-01, combined topic outcome.** Exact-query
  baseline→latest clicks/impressions: bathroom **1/230→0/34**, skirting
  **1/515→0/248**, wall cladding **4/74→5/83**. The protected pre-link cladding
  reading is **3/96**. Six articles plus aliases instead rise **45→74 clicks** and
  **1.13%→2.49% CTR**. Sparse target clicks, changing positions and overlapping
  FAQ/redirect/hub/link releases prevent title-only attribution. [October 1 review](reviews/2026-10-01.md).

- **Historical September 17 fixed-window CTR checkpoint**: **INCONCLUSIVE — 2026-09-17.** Full 28-day exact-query clicks/
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
- **Action**: keep all six articles. More exact-query clicks at comparable positions
  would strengthen the October 15 descriptive read; use the November 12 combined sitemap
  treatment. No title/content/link iteration is justified by this review alone.

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
- **2026-10-01 language expansion / current cohort**: BG/SR/AR translations, five-language alternates and navigation extend site-wide discovery and the acquisition mix. Ship/re-baseline affected search/allocation/link and aggregate AI/referral outcomes to the [fresh locale/page/country checkpoint](baselines/2026-10-01-language-expansion.md), with **November 12** combined interpretation. Preserve fixed original cohorts, historical verdicts, exact manufacturer prompt audits and October 5/8/21/26 operational or correctness dates. Production boundary is recorded in the language entry.
- **2026-10-01 content completion / cohort marker**: Product hub unchanged; curated skirting-guide discovery overlaps the fixed hub/blog query cohort. Retain October 15 descriptive and November 12 combined outcome.
  [Fresh page/query baseline](baselines/2026-10-01-content-completion.md);
  [scope and deployment boundary](content-strategy/2026-10-01-content-completion-launch.md).
- **2026-10-01 sitemap discovery / current treatment**: At 01:05:56 UTC, 51 Turkish
  static/article URLs gained separate sitemap entries. Hub/blog discovery overlaps; preserve October 15 as descriptive and use November 12 for combined effects.
  [Frozen page/query checkpoint](baselines/2026-10-01-turkish-sitemap-entries.md);
  [all-parent treatment](content-strategy/2026-10-01-turkish-sitemap-entries.md).
- **2026-10-01 discovery interference / current treatment**: Hub, product data/navigation and skirting-intent copy unchanged. Keep primary hub/query scope and historical dates; annotate aggregate AI/contact secondary readings with the [October 1 baseline](baselines/2026-10-01-manufacturer-discovery.md).
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
- **Review due**: September 27 full-effect checkpoint completed **2026-10-01**; next
  **2026-10-15** descriptive query/exposure read following the September 27 English indexed
  crawl, then **2026-11-12** combined hub/blog discovery outcome after the sitemap treatment.

- **Verdict**: **INCONCLUSIVE — 2026-10-01, full-effect checkpoint.** The English hub
  receives only **25 `spc skirting` impressions / position 6.60 / zero clicks**, versus
  the blog’s **223 / 8.59 / zero clicks**. Property CTR remains **0%**, below the >3%
  target; individual product pages have no latest exact-query rows. The English indexed
  crawl finally advances to September 27, leaving almost no post-recrawl performance
  at the September 28 cutoff. [October 1 review](reviews/2026-10-01.md).

- **Historical September 15 hub checkpoint**: **INCONCLUSIVE — 2026-09-15 ranking checkpoint; full effect pending.**
  Equal 27-day windows (07-20→08-15 vs 08-17→09-12) show `spc skirting` at
  **1→0 clicks, 500→382 impressions, position 7.47→8.22**; CTR is 0%, below the >3%
  target. The EN hub has only **15 target-query impressions / position 6.0**, versus
  367 at 8.37 for the blog. Hub exposure is too sparse to demonstrate consistent
  displacement or an isolated hub effect. [September 15 evidence](reviews/2026-09-15.md).
  Historical **Indexing checkpoint 2026-09-03: WORKED.** EN and TR
  hubs are Submitted and indexed, self-canonical, fetch-successful, and show valid Breadcrumbs.
  In GSC 08-15→08-31: EN 1 click / 79 impressions at position 8.0; TR 4 / 83 at 4.8.

- **Action**: keep the hub and image repair. Recheck sustained hub query exposure, blog
  displacement and CTR on October 15. The overlapping blog title and image-repair
  changes remain confounds; time alone does not supply sufficient hub exposure.

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
- **2026-10-01 language expansion / current cohort**: BG/SR/AR translations, five-language alternates and navigation extend site-wide discovery and the acquisition mix. Ship/re-baseline affected search/allocation/link and aggregate AI/referral outcomes to the [fresh locale/page/country checkpoint](baselines/2026-10-01-language-expansion.md), with **November 12** combined interpretation. Preserve fixed original cohorts, historical verdicts, exact manufacturer prompt audits and October 5/8/21/26 operational or correctness dates. Production boundary is recorded in the language entry.
- **2026-10-01 content completion / cohort marker**: Preserve the closed WORKED image correctness verdict. Only parent skirting discovery has a new cohort boundary, combined November 12.
  [Fresh page/query baseline](baselines/2026-10-01-content-completion.md);
  [scope and deployment boundary](content-strategy/2026-10-01-content-completion-launch.md).
- **2026-10-01 sitemap discovery / current treatment**: At 01:05:56 UTC, 51 Turkish
  static/article URLs gained separate sitemap entries. Preserve WORKED image correctness; annotate parent search readings, with October 15 descriptive and November 12 combined effects.
  [Frozen page/query checkpoint](baselines/2026-10-01-turkish-sitemap-entries.md);
  [all-parent treatment](content-strategy/2026-10-01-turkish-sitemap-entries.md).
- **2026-10-01 discovery interference / current treatment**: No image/card-loader change or overlapping primary correctness metric. Preserve WORKED and the original evidence; this release does not reopen the repair verdict.
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
- **Review due**: September 4 live smoke check completed September 6. Parent ranking
  checkpoint completed September 15; September 27 full-effect follow-up completed October 1,
  INCONCLUSIVE. Parent query/exposure read **October 15** is descriptive; combined effects
  **November 12** after the sitemap treatment. Image correctness remains closed.
- **Verdict**: **WORKED — 2026-09-06.** Production EN and TR hubs each load **8/8** card
  images with non-empty `src`, `complete: true`, and `naturalWidth > 0` (baseline EN 0/8).
  Both pages return HTTP 200 with self-canonicals and eight actual ItemList image URLs.
- **Action**: keep the repair; smoke-check milestone closed. Treat the 2026-09-15 ranking
  read as a pre/post-repair cohort and do not attribute all movement solely to the original
  hub launch. Parent hub and overlapping blog CTR entries now both record the repair date;
  this operational pass is not a search-ranking verdict.

### [2026-09-13] Manufacturer purchasing guides and product documents — commit d10e888
- **2026-10-01 language expansion / current cohort**: BG/SR/AR translations, five-language alternates and navigation extend site-wide discovery and the acquisition mix. Ship/re-baseline affected search/allocation/link and aggregate AI/referral outcomes to the [fresh locale/page/country checkpoint](baselines/2026-10-01-language-expansion.md), with **November 12** combined interpretation. Preserve fixed original cohorts, historical verdicts, exact manufacturer prompt audits and October 5/8/21/26 operational or correctness dates. Production boundary is recorded in the language entry.
- **2026-10-01 content completion / cohort marker**: Export/evidence guides and hub/glossary links overlap manufacturer/Resources cohorts. Preserve WORKED indexing, earlier descriptive reads and original query recipe; combined November 12.
  [Fresh page/query baseline](baselines/2026-10-01-content-completion.md);
  [scope and deployment boundary](content-strategy/2026-10-01-content-completion-launch.md).
- **2026-10-01 sitemap discovery / current treatment**: At 01:05:56 UTC, 51 Turkish
  static/article URLs gained separate sitemap entries. Preserve WORKED 6/6 indexing; mark October 11/15/29 readings as descriptive and retain November 12 combined effects.
  [Frozen page/query checkpoint](baselines/2026-10-01-turkish-sitemap-entries.md);
  [all-parent treatment](content-strategy/2026-10-01-turkish-sitemap-entries.md).
- **2026-10-01 discovery interference / current treatment**: Direct About/four-article edits and manufacturer-query overlap. Re-baseline the original fixed query/About/Resources/six-guide combined cohort to the [October 1 baseline](baselines/2026-10-01-manufacturer-discovery.md), **November 12**; keep the expanded regex separate, preserve original snapshots and treat earlier interim reads as descriptive.
- **2026-09-29 manufacturer interference / current treatment**: About copy/descriptions and manufacturer discovery directly overlap. Ship/re-baseline the eight-query, About/Resources and purchasing discovery scope to the [September 29 snapshot](baselines/2026-09-29-manufacturer-positioning.md); combined review **November 10**. Retain October 11 as descriptive, intervention-marked. Original snapshots and unchanged article text remain intact.
- **2026-09-25 content interference / current treatment**: Additional Resources/document/contact opportunities overlap secondary combined outcomes. Use the [September 25 baseline](baselines/2026-09-25-comparison-content.md) and **November 6**, retaining original purchasing-query targets, September 27 indexing and October 11 interim rankings. Preserve the consent break.
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
- **Review due**: September 27 indexing completed **2026-10-01**. Preserve
  **October 11** descriptive interim with later releases marked; **October 15/29**
  manufacturer recrawl/questions/snippets and **November 12** combined effect.

- **Interference**: new blog listings/tags and links may affect discovery; About/Resources and
  request/download opportunities can affect site-wide engagement, AI referrals and lead counts.
  Existing six CTR-test article titles/descriptions/URLs and product schemas are unchanged.
  Article schema now uses real shared image URLs (removing erroneous Turkish `/tr/images`
  prefixes) and types the new team author as Organization; include this repair in blog reads.
  Procurement tags keep related-article cohorts separate. Preserve the desktop GA4/GSC
  discrepancy and 09-03 image-repair notes in later comparisons. No old baseline was reset.
- **Verdict**: **WORKED — 2026-10-01, indexing milestone only.** All **6/6** purchasing
  articles are indexed and self-canonical, with **5 clicks / 94 impressions** in
  September 13–28. Discovery/ranking, conversion and AI effects remain PENDING; four
  guides were revised October 1 and their indexed crawls predate that revision. [October 1 review](reviews/2026-10-01.md).

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

- **Passive check — 2026-09-25**: **6/6 articles remain indexed**; September 13–23
  has **63 impressions / three clicks**. Keep September 27 indexing, October 11
  interim rankings and the current **November 3 combined content/link effect**.
  No early verdict or baseline reset. [Review](reviews/2026-09-25.md).

### [2026-09-14] Named purchasing-guide author — commit c8e22c2
- **2026-10-01 language expansion / current cohort**: BG/SR/AR translations, five-language alternates and navigation extend site-wide discovery and the acquisition mix. Ship/re-baseline affected search/allocation/link and aggregate AI/referral outcomes to the [fresh locale/page/country checkpoint](baselines/2026-10-01-language-expansion.md), with **November 12** combined interpretation. Preserve fixed original cohorts, historical verdicts, exact manufacturer prompt audits and October 5/8/21/26 operational or correctness dates. Production boundary is recorded in the language entry.
- **2026-10-01 content completion / cohort marker**: Author registry, portrait and attribution rules unchanged. Preserve WORKED correctness; annotate parent discovery/AI outcome for November 12.
  [Fresh page/query baseline](baselines/2026-10-01-content-completion.md);
  [scope and deployment boundary](content-strategy/2026-10-01-content-completion-launch.md).
- **2026-10-01 sitemap discovery / current treatment**: At 01:05:56 UTC, 51 Turkish
  static/article URLs gained separate sitemap entries. Preserve WORKED attribution correctness; mark parent discovery/AI interpretation and retain November 12 combined effects.
  [Frozen page/query checkpoint](baselines/2026-10-01-turkish-sitemap-entries.md);
  [all-parent treatment](content-strategy/2026-10-01-turkish-sitemap-entries.md).
- **2026-10-01 discovery interference / current treatment**: Byline/photo/job title unchanged; preserve WORKED attribution. Parent manufacturer discovery and aggregate AI secondary outcomes use the [October 1 baseline](baselines/2026-10-01-manufacturer-discovery.md), **November 12**.
- **2026-09-29 manufacturer interference / current treatment**: Byline/photo/attribution unchanged. Parent manufacturer discovery and aggregate AI effects now use the [September 29 baseline](baselines/2026-09-29-manufacturer-positioning.md), **November 10**; preserve attribution correctness.
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
- **Review due**: **2026-09-14** attribution smoke check; parent manufacturer discovery
  and aggregate AI combined review **2026-11-12**. Preserve attribution correctness.
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
- **2026-10-01 language expansion / current cohort**: BG/SR/AR translations, five-language alternates and navigation extend site-wide discovery and the acquisition mix. Ship/re-baseline affected search/allocation/link and aggregate AI/referral outcomes to the [fresh locale/page/country checkpoint](baselines/2026-10-01-language-expansion.md), with **November 12** combined interpretation. Preserve fixed original cohorts, historical verdicts, exact manufacturer prompt audits and October 5/8/21/26 operational or correctness dates. Production boundary is recorded in the language entry.
- **2026-10-01 content completion / cohort marker**: Existing FAQ parser/portrait unchanged. Validate 64 visible answers on 16 affected pages and glossary definition parity; retain October 26 maintenance and November 12 discovery interpretation.
  [Fresh page/query baseline](baselines/2026-10-01-content-completion.md);
  [scope and deployment boundary](content-strategy/2026-10-01-content-completion-launch.md).
- **2026-10-01 sitemap discovery / current treatment**: At 01:05:56 UTC, 51 Turkish
  static/article URLs gained separate sitemap entries. Preserve WORKED correctness and October 26 maintenance; discovery/citation observations use the November 12 combined cohort.
  [Frozen page/query checkpoint](baselines/2026-10-01-turkish-sitemap-entries.md);
  [all-parent treatment](content-strategy/2026-10-01-turkish-sitemap-entries.md).
- **2026-10-01 discovery interference / current treatment**: Two About answers changed through the existing shared visible/schema content; all seven answers per locale match in production. About citation observation uses the [October 1 baseline](baselines/2026-10-01-manufacturer-discovery.md), **November 12**, with the new prompt cohort separate from September 29. Unchanged blog FAQs/portrait keep October 26.
- **2026-09-29 manufacturer interference / current treatment**: About adds two visible FAQs and revises factory wording, all emitted through the existing schema. Verify seven visible/schema answers per locale. About observational citation review uses the [new pilot/baseline](baselines/2026-09-29-manufacturer-positioning.md), **November 10**; unchanged blog FAQs/portrait retain October 26.
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
- **Review due**: immediate deployment parity check **2026-09-14**, repeated for changed
  About FAQs September 29; unchanged blog FAQ/portrait maintenance **2026-10-26**. About
  observational citation follow-up **2026-11-12** uses the October 1 cohort; keep the
  September 29 four-question pilot separate. Rich-result
  appearance is not a success metric.
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
- **2026-10-01 language expansion / current cohort**: BG/SR/AR translations, five-language alternates and navigation extend site-wide discovery and the acquisition mix. Ship/re-baseline affected search/allocation/link and aggregate AI/referral outcomes to the [fresh locale/page/country checkpoint](baselines/2026-10-01-language-expansion.md), with **November 12** combined interpretation. Preserve fixed original cohorts, historical verdicts, exact manufacturer prompt audits and October 5/8/21/26 operational or correctness dates. Production boundary is recorded in the language entry.
- **2026-10-01 content completion / cohort marker**: Definition/quantity/mistakes and hub/glossary add incoming technical links. Keep original query cohort and indexing verdict; combined November 12.
  [Fresh page/query baseline](baselines/2026-10-01-content-completion.md);
  [scope and deployment boundary](content-strategy/2026-10-01-content-completion-launch.md).
- **2026-10-01 sitemap discovery / current treatment**: At 01:05:56 UTC, 51 Turkish
  static/article URLs gained separate sitemap entries. Preserve WORKED indexing and October 12 descriptive read; affected bilingual search/link effects move November 6 to November 12 combined.
  [Frozen page/query checkpoint](baselines/2026-10-01-turkish-sitemap-entries.md);
  [all-parent treatment](content-strategy/2026-10-01-turkish-sitemap-entries.md).
- **2026-10-01 discovery interference / current treatment**: No technical article, query or new direct incoming link. Primary scope remains **November 6**; overlapping manufacturer/aggregate AI secondary outcomes use the [October 1 baseline](baselines/2026-10-01-manufacturer-discovery.md), **November 12**.
- **2026-09-29 manufacturer interference / current treatment**: Primary article/query/link scope is unchanged; preserve the September 25 treatment and **November 6** primary search/link date. Aggregate AI/content secondary outcomes use the [September 29 baseline](baselines/2026-09-29-manufacturer-positioning.md) and **November 10**; keep consent annotations.
- **2026-09-25 content interference / current treatment**: New contextual incoming links overlap this six-page content cohort. Re-baseline the original 13-query/page and combined metrics to the [September 25 baseline](baselines/2026-09-25-comparison-content.md) with **November 6** combined follow-up. Keep September 28 indexing and October 12 interim rankings; preserve the consent break.
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
- **Review due**: September 28 indexing completed **2026-10-01**; preserve
  **October 12** descriptive rankings/query allocation. **November 12** combined bilingual
  search/link and aggregate AI/content outcomes after the sitemap treatment, superseding
  November 6 for the affected primary search/link metrics.

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
- **Verdict**: **WORKED — 2026-10-01, indexing milestone only.** All **6/6** technical
  articles are indexed and self-canonical; September 13–28 exposure is **6 clicks /
  434 impressions**. English thickness/wear-layer is indexed after its September 24
  crawl. Ranking/conversion/AI effects remain PENDING. [October 1 review](reviews/2026-10-01.md).

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

- **Passive check — 2026-09-25**: **6/6 now indexed**. EN thickness/wear-layer
  progressed to indexed after the September 24 21:39 UTC crawl, later than this
  review's September 23 performance cutoff. Cohort September 13–23 exposure is
  **236 impressions / six clicks**. Keep September 28 indexing, October 12 ranking
  and November 3 combined effects; provisional discovery only.
  [Review](reviews/2026-09-25.md).

### [2026-09-15] Distributor, project and colour-selection guides — commit 3d01b51
- **2026-10-01 language expansion / current cohort**: BG/SR/AR translations, five-language alternates and navigation extend site-wide discovery and the acquisition mix. Ship/re-baseline affected search/allocation/link and aggregate AI/referral outcomes to the [fresh locale/page/country checkpoint](baselines/2026-10-01-language-expansion.md), with **November 12** combined interpretation. Preserve fixed original cohorts, historical verdicts, exact manufacturer prompt audits and October 5/8/21/26 operational or correctness dates. Production boundary is recorded in the language entry.
- **2026-10-01 content completion / cohort marker**: Quantity/cost/materials and hub/glossary overlap project/selection links. Preserve original project query cohort and indexing verdict; combined November 12.
  [Fresh page/query baseline](baselines/2026-10-01-content-completion.md);
  [scope and deployment boundary](content-strategy/2026-10-01-content-completion-launch.md).
- **2026-10-01 sitemap discovery / current treatment**: At 01:05:56 UTC, 51 Turkish
  static/article URLs gained separate sitemap entries. Preserve WORKED indexing and October 13 descriptive read; affected project/room-intent effects move November 3 to November 12 combined.
  [Frozen page/query checkpoint](baselines/2026-10-01-turkish-sitemap-entries.md);
  [all-parent treatment](content-strategy/2026-10-01-turkish-sitemap-entries.md).
- **2026-10-01 discovery interference / current treatment**: No original project/design article/query edit. Primary project/room-intent scope remains **November 3**; overlapping manufacturer/aggregate AI secondary outcomes use the [October 1 baseline](baselines/2026-10-01-manufacturer-discovery.md), **November 12**. The separate all-query collection/CTR guard, including Elite, follows November 12.
- **2026-09-29 manufacturer interference / current treatment**: Primary article/query scope unchanged, retaining **November 3**. Overlapping manufacturer discovery and aggregate AI secondary outcomes use the [September 29 baseline](baselines/2026-09-29-manufacturer-positioning.md), **November 10**; do not assign shared gains to this batch alone.
- **2026-09-25 content interference / current treatment**: The [comparison/water/terminology cohort](content-strategy/2026-09-25-comparison-content-launch.md) adds no direct links or fixed target-query overlap with this group. Keep **November 3 primary GSC** and September 29/October 13 checkpoints. Its shared aggregate AI/content secondary outcome includes September 25 and uses November 6, preserving the consent break.
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
- **Review due**: September 29 indexing completed **2026-10-01**; preserve
  **October 13** descriptive rankings/query allocation. **November 12** combined project/
  room-intent, manufacturer and AI outcomes after the sitemap treatment, superseding
  November 3 for affected primary project/room-intent metrics.

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
- **Verdict**: **WORKED — 2026-10-01, indexing milestone only.** All **6/6** project
  articles are indexed and self-canonical. TR colour/format is newly indexed after
  **September 29 at 21:13:51 UTC**, later than the September 28 performance cutoff.
  Cohort September 13–28 exposure is **3 clicks / 150 impressions**; ranking/conversion/AI
  effects remain PENDING. [October 1 review](reviews/2026-10-01.md).

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

- **Passive check — 2026-09-25**: **5/6 remain indexed**; TR colour/format remains
  crawled/not indexed, with September 20 crawl, successful fetching, allowed robots
  and live 200/self-canonical. September 13–23: **94 impressions / two clicks**.
  Reinspect September 29; retain October 13 ranking and November 3 combined effects.
  No early rewrite or failure verdict. [Review](reviews/2026-09-25.md).

### [2026-09-22] Underlay, care and room-selection guides — commit d3e770e
- **2026-10-01 language expansion / current cohort**: BG/SR/AR translations, five-language alternates and navigation extend site-wide discovery and the acquisition mix. Ship/re-baseline affected search/allocation/link and aggregate AI/referral outcomes to the [fresh locale/page/country checkpoint](baselines/2026-10-01-language-expansion.md), with **November 12** combined interpretation. Preserve fixed original cohorts, historical verdicts, exact manufacturer prompt audits and October 5/8/21/26 operational or correctness dates. Production boundary is recorded in the language entry.
- **2026-10-01 content completion / cohort marker**: Materials/reviews/mistakes and hub/glossary overlap room/care links. Preserve October 6/20 as descriptive; combined November 12.
  [Fresh page/query baseline](baselines/2026-10-01-content-completion.md);
  [scope and deployment boundary](content-strategy/2026-10-01-content-completion-launch.md).
- **2026-10-01 sitemap discovery / current treatment**: At 01:05:56 UTC, 51 Turkish
  static/article URLs gained separate sitemap entries. Preserve October 6/20 descriptive milestones; affected bilingual search/link effects move November 6 to November 12 combined.
  [Frozen page/query checkpoint](baselines/2026-10-01-turkish-sitemap-entries.md);
  [all-parent treatment](content-strategy/2026-10-01-turkish-sitemap-entries.md).
- **2026-10-01 discovery interference / current treatment**: Care article/query/link primary scope unchanged, retaining **November 6**. Shared aggregate AI/content outcomes use the [October 1 baseline](baselines/2026-10-01-manufacturer-discovery.md), **November 12**. The homepage title overlaps the all-query collection/CTR and broad-floor allocation guards, including Elite secondary exposure; those guards now use November 12, preserving disjoint room-intent history.
- **2026-09-29 manufacturer interference / current treatment**: Primary article/query/link scope unchanged; preserve **November 6** from the September 25 treatment. Aggregate AI/content secondary outcomes use the [September 29 baseline](baselines/2026-09-29-manufacturer-positioning.md), **November 10**; consent break remains.
- **2026-09-25 content interference / current treatment**: New contextual incoming links overlap all three topic pairs. Use the [September 25 baseline](baselines/2026-09-25-comparison-content.md) and **November 6** for combined content/link and aggregate AI effects, superseding November 3 for those measures. Keep October 6 indexing and October 20 interim rankings; preserve the consent break.
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
- **Review due**: **2026-10-06 indexing**, **2026-10-20 descriptive rankings/query
  allocation**, **2026-11-12 combined bilingual search/link and aggregate AI/content
  outcomes** after the sitemap treatment, superseding November 6 primary search/link effects.
- **Interference**: new links overlap technical/project/design pages and Resources; two exact
  underlay queries overlap the technical group. Ship and re-baseline affected content/link
  and aggregate AI/secondary outcomes to September 22, with matching parent notes and
  November 3 review. Preserve earlier indexing/interim checkpoints, September 21 measurement
  break, operational/office-specific dates and the November 2 wall-panel experiment.
  The historical kitchen-query allocation and English Elite all-query secondary outcome
  also use November 3; original H1 targets and unaffected schema cohorts keep their dates.
- **Validation**: content/text validation, manifest generation, typecheck and production build
  pass. Local verification passes for 46 articles, 24 new FAQ answers, 30 internal destinations,
  56 image/PDF byte comparisons and 12 desktop/mobile views. All 40 prior records/related
  cohorts remain identical. Covers and mobile tables were visually inspected.
- **Verdict**: PENDING.
- **Deployment**: code **d3e770e**, Cloudflare build **79f77ccd-43c3-4885-b06e-16a94642fc51**,
  Worker **dbb5c742-b587-4fdc-8cb3-dfa224dc5143**, completed **2026-09-22T00:51:15Z**;
  GitHub blog checks pass. GSC partial day **2026-09-21**, GA4 partial day **2026-09-22**;
  first full days **2026-09-22 / 2026-09-23**, respectively.
- **Production verification**: all **46 articles**, **24 new FAQ answers**, **30 internal
  destinations**, **54 image / two PDF hashes** and **12 desktop/mobile views** pass.
  Existing 40 records and related cohorts are preserved. [Live evidence](content-strategy/2026-09-22-care-content-production-verification.json).
- **Discovery**: new articles appear in their locale listings; three TR aliases return 308.
  Parsed sitemap has **three new EN loc entries and all six hreflang alternates**; the known
  missing standalone TR entries remain deferred to the structural review. Google accepts
  the sitemap with HTTP **204**, `lastSubmitted` **2026-09-22T00:53:35.495Z**,
  processing pending. No indexing or ranking result is inferred.
- **Action**: keep the fourth batch live; UNDERLAY, CARE and ROOMS are published in the map.
  Use October 6/20 descriptive checks and November 12 combined effects; remaining work keeps
  its evidence needs.
- **Early passive check — 2026-09-25**: **6/6 indexed/self-canonical**, all crawled
  September 22 UTC. September 13–23 cohort exposure is **36 impressions / zero clicks**;
  excluding the partial GSC launch day leaves **35/0 on September 22–23**. One fixed
  `does spc flooring need underlay` impression appears on the English underlay guide.
  Preserve October 6 indexing, October 20 rankings and November 3 combined effects;
  no early success verdict. [Review](reviews/2026-09-25.md).

- **Review — 2026-10-01**: Provisional, before October 6: all **6/6** pages indexed. Seven full days
  September 22–28 have **2 clicks / 232 impressions**. Keep October 6/20 milestones,
  November 3 room-intent, November 6 affected care/technical primary scopes and
  November 12 aggregate AI dates; no early ranking or conversion verdict. [October 1 review](reviews/2026-10-01.md).

### [2026-09-25] Comparison, water resistance and vinyl terminology — commit 23b91d9
- **2026-10-01 language expansion / current cohort**: BG/SR/AR translations, five-language alternates and navigation extend site-wide discovery and the acquisition mix. Ship/re-baseline affected search/allocation/link and aggregate AI/referral outcomes to the [fresh locale/page/country checkpoint](baselines/2026-10-01-language-expansion.md), with **November 12** combined interpretation. Preserve fixed original cohorts, historical verdicts, exact manufacturer prompt audits and October 5/8/21/26 operational or correctness dates. Production boundary is recorded in the language entry.
- **2026-10-01 content completion / cohort marker**: Definition/materials and hub/glossary overlap comparison/water/type intent. Preserve October 9/23 as descriptive; combined November 12.
  [Fresh page/query baseline](baselines/2026-10-01-content-completion.md);
  [scope and deployment boundary](content-strategy/2026-10-01-content-completion-launch.md).
- **2026-10-01 sitemap discovery / current treatment**: At 01:05:56 UTC, 51 Turkish
  static/article URLs gained separate sitemap entries. Preserve October 9/23 descriptive milestones; affected bilingual search/link effects move November 6 to November 12 combined.
  [Frozen page/query checkpoint](baselines/2026-10-01-turkish-sitemap-entries.md);
  [all-parent treatment](content-strategy/2026-10-01-turkish-sitemap-entries.md).
- **2026-10-01 discovery interference / current treatment**: Article/query/link/redirect primary scope unchanged; keep October 9/23 and **November 6** primary dates. Shared aggregate AI/content secondary outcomes use the [October 1 baseline](baselines/2026-10-01-manufacturer-discovery.md), **November 12**.
- **2026-09-29 manufacturer interference / current treatment**: No article, metadata, tag, link or redirect change. Keep October 9/23 and **November 6** primary search/link dates. Aggregate AI/content secondary outcomes use the [September 29 baseline](baselines/2026-09-29-manufacturer-positioning.md), **November 10**.
- **Change**: substantially expand the existing SPC/laminate and water-resistance EN/TR pairs,
  and add an original SPC/LVT/WPC terminology pair. Six affected pages, two new URLs,
  24 visible/schema FAQ answers; 48 articles across 24 topics. Preserve existing slugs,
  publication dates, tags, authors and cover paths. [Scope and every-entry interference check](content-strategy/2026-09-25-comparison-content-launch.md).
- **Hypothesis**: useful product-specific comparisons and precise water-use guidance improve
  query relevance and help readers reach the applicable Kermit documents; the terminology
  guide resolves overlapping labels without duplicating the existing SPC introduction.
- **Primary metric + baseline**: fixed 16-query impression/position and query-to-page allocation
  trends, recrawl/indexing of six affected URLs, then page CTR where exposure permits.
  [Fresh 61-report baseline](baselines/2026-09-25-comparison-content.md): comparison queries
  **0 clicks / 137 impressions / 38.61** vs **0/173/34.94**; water queries **1/114/9.04** vs
  **1/156/10.24**; terminology queries have no rows in either window. Four existing canonical
  pages total **10/1,200/12.79** vs **8/1,329/14.88**. New URLs return 404 before release.
- **Secondary metrics**: document/contact and organic landing opportunities, original linked
  technical/care/Resources cohorts, Stone collection subset, revised canonical/alias mixture,
  and fixed AI Assistant referrals. GA4 latest 28 days cross September 21's consent repair:
  do not treat **14 vs 1 AI sessions** as a clean content growth result or a citation count.
- **Interference treatment**: re-baseline affected technical/care/Resources and aggregate AI
  outcomes to September 25 with November 6 review and matching parent notes. New Stone
  links and revised Turkish comparison/water canonical/alias pairs also use November 6.
  Keep pre-release September 27 reads for those subsets through September 24. Preserve other
  September 27 cohorts, prior indexing/interim checks, November 3 project-primary/Elite,
  November 2 wall panels and consent/office-specific dates. No shared template, sitemap
  generation, product, document or tracking change. All 42 other article records and all
  46 original related-post cohorts remain unchanged.
- **Review due**: **2026-10-09 indexing/recrawl**, **2026-10-23 descriptive rankings/
  snippets**, **2026-11-12 combined bilingual search/link and aggregate AI/content outcomes**
  after the sitemap treatment, superseding November 6 primary search/link effects.
- **Validation**: production build, text/blog validation, FAQ manifest and typecheck pass.
  Local verification covers 48 articles, 24 affected FAQ answers, 46 internal destinations,
  54 image/PDF byte comparisons and 12 desktop/mobile views. No indexing/ranking verdict
  follows from implementation checks. Production results are recorded below.
- **Verdict**: PENDING.
- **Deployment**: content commit **23b91d9**, Cloudflare build **a014076c-958a-488b-bed3-b24491eed5f1**,
  completed **2026-09-25T13:24:36Z**, Worker version **db058fd4-a785-4275-9a8e-9eb5921d30c1**. GitHub blog checks passed.
  Measurement boundary: GSC: exclude 2026-09-25, first full day 2026-09-26; GA4: exclude 2026-09-25, first full day 2026-09-26.
- **Production verification**: all 48 articles, 24 affected FAQ answers, 46 internal destinations,
  54 image/PDF byte comparisons, 12 desktop/mobile views and three 308 aliases pass.
  [Live evidence](content-strategy/2026-09-25-comparison-content-production-verification.json).
  New EN/TR terminology articles appear in their locale listings. Parsed sitemap adds one
  English article loc and two alternates; existing TR standalone-loc limitation remains.
- **Sitemap submission**: Google accepted HTTP **204**, `lastSubmitted` **2026-09-25T13:27:42.188Z**,
  processing pending `true`. This is not indexing proof.
- **Action**: keep the fifth batch live. CMP/WATER are revised and TYPES published in the map;
  retain October 9/23 descriptive checks and November 12 combined effects, plus evidence
  requirements for remaining topics.

- **Review — 2026-10-01**: Provisional, before October 9: both new terminology URLs indexed and all
  four revised comparison/water pages have post-launch indexed crawls. September 26–28
  gives **2 clicks / 170 impressions** across six pages, of which terminology is **0/21**.
  Preserve October 9/23 and November 6 primary search/link dates, plus November 12
  aggregate AI; no early effect verdict. [October 1 review](reviews/2026-10-01.md).

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

### Review run — 2026-09-25

**Scope:** periodic review; September 24 lead/desktop/wall-panel operations completed
one day late. **No experiment verdict due**; retain historical verdicts and all
pending observation windows. [Detailed review](reviews/2026-09-25.md) and
[fresh evidence](reviews/2026-09-25-evidence.json).

- **Access/freshness:** routine ADC recovery required owner password verification,
  then GA4/GSC, 51 URL Inspections and read-only Ads succeeded. Finalized GSC ends
  September 23; GA4 uses the same cutoff. Rolling windows July 30–August 26 versus
  August 27–September 23; weekly September 10–16 versus September 17–23. Ads production
  lookup succeeds; campaign probe has no rows. No reporting-access gap remains.
- **Search:** clicks **699→690 (−1.3%)**, impressions **17,251→19,104 (+10.7%)**,
  position **9.49→7.53**. Latest week clicks **181→196**. Mixed query trends persist;
  no site-wide search collapse. GA4 sessions **394→295**, Organic Search **295→192**.
  Türkiye desktop organic sessions **91→31**, against GSC clicks **216→180**;
  weekly desktop sessions **9→9** versus GSC clicks **48→56**. Discrepancy unresolved.
- **Leads/downloads:** weekly keys **4/35**, versus **4/4**; since launch **28/44**.
  Downloads involve eight recorded users, including 16 events from one user before
  the consent repair and seven from another. Preserve WORKED instrumentation;
  repeated download actions do not establish broader or qualified-lead growth.
  Next weekly read **October 1**.
- **Measurement:** rolling GA4 windows now cross September 21 consent/contact and
  September 22 content releases. Only two full post-repair days are available;
  no repair, office or conversion verdict. Preserve September 28 operations,
  October 5 desktop and October 21 conversion checks, original snapshots and
  September 22's current combined-outcome treatment.
- **Discovery:** **23/24 September articles indexed**, including newly indexed EN
  thickness and all six care articles. TR colour/format remains crawled/not indexed.
  September 13–23: **429 page-row impressions / 11 clicks**; care full days September
  22–23 have **35 impressions / zero clicks**. Formal indexing September 27/28/29
  and October 6 remains. All 24 live pages are 200/self-canonical without noindex.
- **Wall panels:** TR product **32→13 clicks / 784→279 impressions**; better all-query
  average position reflects a different query mix and does not prove recovery.
  `spc duvar paneli` property clicks **21→30** while product clicks **16→2** and
  guide clicks **5→28**. `spc panel` property exposure/position still weakens.
  Two post-link full days have **1/18** on the product; too early for a verdict.
  Live links remain correct. Retain November 2; September 27 affected reads stop
  at September 20, with unaffected cohorts unchanged. Weekly watch October 1.
- **AI:** fixed channel **14 sessions / four users / three keys**, versus 1/1/0.
  Separate `gemini / (not set)` session has two downloads in Unassigned; monitor
  classification without changing the baseline or claiming citations. No new-article
  GA4 landing rows. Keep historical INCONCLUSIVE and **November 3 combined outcome**.
  Synchronize llms.txt's current due field to the existing September 22 treatment.
- **Enhancements/live:** 11 English Product pages remain indexed with valid detected
  Breadcrumbs and unchanged eligibility errors; no searchAppearance rows. Sitemap
  Turkish standalone-entry gap persists, including all 12 new Turkish articles.
  Retain the correction recommendation after September 27; no cause of exclusion or
  loss is established. Verified AI-bot access and direct citations remain unmeasured.

**Action:** keep current releases. Next structural/CTR/manufacturer indexing review
September 27; consent/technical/project September 28/29; weekly operations October 1.
Preserve November 2 wall-panel and November 3 combined content/link/AI dates, as well
as the interim dates in the detailed review. Completed local review, evidence,
operational notes and schedule; no baseline reset, site edit, Google reporting
configuration change, commit, push or deployment. Sitemap work and any reporting
classification change remain recommendations, not authorized or completed actions.

### Review run — 2026-10-01

Periodic review completed, including overdue September 27–29 verdicts and weekly
operations. Fresh GSC final through **September 28**, GA4 to the same lagged cutoff;
monthly **September 1–28 vs August 4–31**, weekly **September 22–28 vs September 15–21**.
Original experiment windows and protected pre-link/rewrite reads remain separate.
[Detailed review](reviews/2026-10-01.md) · [Full evidence](reviews/2026-10-01-evidence.json).

- **Due outcomes:** nine original Turkish redirect pairs support **WORKED canonical
  consolidation**: pre-wall canonical click share **0.52%→94.21%**, latest **98.36%**.
  All nine aliases are live 308 and inspected as redirect exclusions. Breadcrumb detection
  remains WORKED; Product eligibility NO EFFECT on all 11 pages; attributable schema CTR,
  localized H1, pricing, combined CTR and hub outcomes remain INCONCLUSIVE. Keep changes.
- **Indexing:** manufacturer/technical/project due milestones each **WORKED, 6/6**.
  TR colour/format is indexed after September 29 recrawl. First four September batches
  total **24/24 indexed, 16 clicks / 911 impressions** through September 28. Care remains
  provisional before October 6. New terminology pair is indexed and four revised pages
  recrawled; keep October 9/23 and November 6 primary dates.
- **Consent and leads:** all **16/16** isolated production consent tests pass; operational
  ordering WORKED, session completeness/conversion still pending. Weekly lead keys **6→4**,
  downloads **31→10**, four users in each latest event category. Since launch **32/49**.
  Germany links remain present. Keep October 5 desktop and October 21 conversion dates.
- **Traffic/watch:** GSC **707→720 clicks**, **17,678→19,513 impressions**; GA4 sessions
  **378→306**, organic **278→200**. Türkiye desktop divergence persists. Wall-product
  impressions **676→230** while main-query clicks shift toward its guide; a short post-link
  improvement does not establish recovery. Next operational watch **October 8**.
- **AI/Ads:** lagged AI Assistant **14 sessions / four users / three keys** plus a separate
  Gemini source cohort **2/2/2**. Earlier same-day chatbot/crawler evidence and the expanded
  multilingual release audit remain distinct, pre-publication cohorts. No new citation-lift
  verdict. Fresh production Ads reporting succeeds; the campaign probe returns no rows.
- **History/action:** reconciled published records through **722cd50** with the pre-existing
  local September 25 review and copied only missing published SEO documents. Preserve the
  October 1 release's **November 12** affected combined outcome and all disjoint dates.
  Recommend the confirmed sitemap locale-entry correction as the next technical iteration;
  it was not implemented, and its causal role in traffic changes is unproven. This run
  updated local records only; no commit, push, site change, submission or automation.
