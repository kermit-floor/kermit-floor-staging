# kermitfloor.ro launch — 2026-09-25

## Ownership and contact details

User authorized implementation, commit/push and end-to-end deployment to a separate
`romania` branch and permanent worktree. Romanian is the default language, English
is the second language, and the Turkish website edition is removed from this branch.
The international `main` branch and `.com` Worker are separate.

Operator: **DMS INNOVATIVE SOLUTIONS S.R.L.**, CUI **45743250**, Bucharest, Romania.
Email **info@dmsinnovative.ro**; phones **+40 722 547 258** and **+40 738 754 074**.
WhatsApp for both languages is **+40 722 547 258**, explicitly selected by the owner.

The [official DMS website](https://dmsinnovative.ro/) and its
[English contact page](https://dmsinnovative.ro/en/contact-en/) confirm the city,
email and both numbers. The legal name/CUI are corroborated by the
[GS1 Romania membership list](https://gs1.ro/wp-content/uploads/2023/05/GS1-CD_08.05.2023_04.-Lista-adeziuni-01-ianuarie-2022-31-decembrie-2022.pdf)
and [company records](https://www.listafirme.ro/dms-innovative-solutions-srl-45743250/).
Directories disagree on the street address. The owner approved using the verified
Bucharest location without publishing an uncertain street address.

Privacy/terms identify DMS as operator/controller and use the published DMS contact
channels. Reference sources: [GDPR](https://eur-lex.europa.eu/eli/reg/2016/679) and
[Romanian supervisory authority](https://www.dataprotection.ro/?lang=ro&page=Plangeri_meniu).
Product manufacturer attribution remains Kermit Floor.

## Implementation and measurements

Romanian at `/`, English at `/en`; local route names, reciprocal alternates,
self-canonicals and a sitemap containing both languages. All 23 article topics have
Romanian/English versions. Romanian copy retains technical-document limitations;
original product documents remain available and are labeled by their actual language.
Only DMS contacts appear in contact pages, footer, resource dialogs and WhatsApp.

Permanent checkout: `/home/barbaros/projects/kermit-floor-ro`, branch `romania`.
Cloudflare account `542a80d833f2cf2d70591dbf553ed0d2`; Worker `kermit-floor-ro`.
Domains `kermitfloor.ro` and `www.kermitfloor.ro`; www redirects to the apex.
Read-only catalogue downloads use the existing R2 bucket; no objects were modified.

GA4 property `555914779`, stream `15844361909`, measurement `G-9FMGLPBL5C`.
`generate_lead` is a key event once per session, `file_download` once per event,
with no invented monetary value. Analytics remains gated by consent.
[SEO baseline and interference](seo/baselines/2026-09-25-romania.md).

## Verification

- Production Next.js and OpenNext Cloudflare builds pass.
- Type checking and text/blog validation pass.
- All 16 English/Romanian desktop/mobile consent regressions pass.
- Site route validation: `python3 scripts/check-romania-site.py https://kermitfloor.ro`.
- Desktop browser: Romanian layout and RO/EN switch verified.

Deployment version, CI connection and final production checks will be recorded here
when deployment is complete.
