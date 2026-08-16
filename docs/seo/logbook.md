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
- **2026-08-30** — indexing check: new posts, hub page, rich-result appearance.
- **2026-09-06** — CTR-refresh verdicts (entries 9).
- **2026-09-15** — rankings: new posts, hub effect on "spc skirting", AI-referral trend.
- **2026-09-27** — full structural verdict vs baseline + next iteration plan.

Last review run: — (none yet)

---

## Open experiments

### [2026-08-14] GA4 lead tracking (generate_lead + file_download key events) — commit ae721ed
- **Change**: `generate_lead` event on WhatsApp button, starter-pack dialogs (whatsapp/email,
  pack_id), contact-page tel/mailto links (office param). Both events registered as GA4 key events.
- **Hypothesis**: we cannot improve what we cannot count; lead baseline enables all future CRO.
- **Primary metric(s)**: weekly `generate_lead` key-event count (baseline 0); file_download count.
- **Review due**: 2026-08-30 (first read), then weekly.
- **Verdict**: PENDING
- **Action**: —

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
- **Review due**: 2026-08-30 (appearance), 2026-09-27 (effect).
- **Verdict**: PENDING
- **Action**: —

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
- **Review due**: 2026-08-30 (indexing), 2026-09-15 (ranking).
- **Verdict**: PENDING
- **Action**: —

### [2026-08-15] New post pair: SPC pricing factors — commit 89db2ae
- **Change**: /tr/blog/spc-parke-fiyatlari + /blog/spc-flooring-cost. No invented prices;
  7 cost drivers + quote-comparison checklist + /contact CTA.
- **Hypothesis**: capture price-intent (pos 14.2, "kermit süpürgelik fiyatları" pos 6.1) and
  convert it to WhatsApp/email leads.
- **Primary metric(s)**: query positions + post clicks; generate_lead events with page = post.
- **Review due**: 2026-08-30 (indexing), 2026-09-15 (ranking/leads).
- **Verdict**: PENDING
- **Action**: —

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
- **Review due**: 2026-08-30 (indexing), 2026-09-15 (ranking), 2026-09-27 (full).
- **Verdict**: PENDING
- **Action**: —

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
