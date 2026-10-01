# Bulgarian, Serbian and Arabic release — October 1, 2026

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
combined outcomes. No automation created. Record production, deployment and first complete
measurement days below after the authorized push.
