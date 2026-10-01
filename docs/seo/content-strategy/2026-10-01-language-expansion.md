# Bulgarian, Serbian and Arabic release — October 1, 2026

**Published and verified at 2026-10-01 11:10:21 UTC — code `9fb9c29`.**

Owner approved the reviewed language expansion. The release is based on the current
published `2029b21`, preserving the same-day EN/TR content and glossary release. The older
primary checkout and its unrelated records remain untouched; work is in the managed
`language-expansion` checkout.

## Delivered scope

Five selectable site languages: English, Turkish, Bulgarian, Serbian (Cyrillic) and Arabic.
New languages include all 28 published topics, 33 glossary terms, the curated guide hub,
19 resource descriptions, product specifications, contact and legal pages. Arabic uses
RTL layout, logical spacing, mirrored carousel controls and an Arabic font. Existing
EN/TR URLs and public copy are preserved; new language routes use English slugs under
`/bg`, `/sr`, `/ar`. Language switching resolves corresponding articles and tags and retains
query strings. Product/decor names, identifiers, measurements and original download/PDF
files are unchanged. Localized diagram labels retain the original technical geometry.

Translations are machine-assisted with manual UI and terminology refinements. The owner
reviewed the preview and approved publication with the native-review limitation disclosed.

## Validation and interference

[Completed local checks](2026-10-01-language-expansion-validation.json) include the full
Cloudflare build, TypeScript/content/translation validation, 10 localization browser tests
and 16 consent tests. The candidate has 567 unique sitemap entries; all 228 existing entries
remain. Static/article entries carry reciprocal five-language alternates (280 entries);
tag pages retain the existing canonical-only behavior. All five glossary schemas match
the visible 33 terms. R2 catalogue downloads require the deployed Cloudflare binding and
are included in production verification.

[The twelve-report fresh baseline](../baselines/2026-10-01-language-expansion.md) covers exact
new-locale URLs and country guards. A dated marker is in all 25 previous open/operational
entries. Re-baseline overlapping discovery/search/allocation and aggregate referral outcomes
with November 12 combined interpretation; preserve original fixed query/page cohorts,
historical verdicts and manufacturer prompt audits. Preserve October 5/8/21/26 operational
or correctness dates. New-language exposure is a combined intervention, not evidence of
an isolated previous-release effect.

Review October 15 processing/indexing, October 29 descriptive exposure and November 12
combined outcomes. No automation created. Production evidence and measurement boundaries are recorded below.

## Publication completion

Code `9fb9c298a230a1b6119b265ae774af503057798f` was pushed to main. GitHub blog
checks passed; Cloudflare Build `7ca4e090-2c6e-40ca-9b08-45af2c628d9b` completed successfully
at 11:10:28 UTC. Deployment `ea371c3b-84da-47e6-b7d5-b1e3037f0b38` sent Worker version
`7d6798cd-4b9b-45ef-a1c9-e181c7b2a673` to 100% at **11:10:21.907652 UTC**.

[Production evidence](../baselines/2026-10-01-language-expansion-production.json) verifies all
567 URLs, all 27 original PDF downloads and ten production browser tests. The sitemap retains
all 228 old URLs and adds 339 new-language entries; all 280 static/article entries have
reciprocal five-language alternates. Article dates remain intact. Glossary text and schema
match for all five languages; Arabic pages fit mobile viewports. Three localized diagram
assets match the committed bytes. Third-party browser requests were blocked and no enquiries
were submitted.

GSC accepted the sitemap PUT with **204** at **11:13:42 UTC**. Immediate status is pending,
with zero errors/warnings on the previous downloaded 228-entry snapshot; this is not proof
of new processing or indexing. Exclude the October 1 partial day in both Pacific GSC and
Istanbul GA4. The first full day for this combined language/discovery cohort is **October 2**.
All 25 earlier entries carry the release marker, retaining their original verdicts, fixed
cohorts and disjoint operational/correctness dates. Search/AI effects remain pending.
