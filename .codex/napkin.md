# Napkin

## Corrections
| Date | Source | What Went Wrong | What To Do Instead |
|------|--------|----------------|-------------------|
| 2026-03-11 | user | Rejected runtime file-existence checks for resources as unnecessary overhead | Keep resources availability manual: audit files when requested and set missing `files.{en,tr}.url` to `#` so UI shows "coming soon" |
| 2026-03-11 | self | Passed a malformed quoted `workdir` value in a parallel shell call, causing PowerShell "directory name is invalid" | Keep JSON tool-call strings minimal and validate quote boundaries before parallel calls |
| 2026-03-11 | self | Used `rg` with wildcard file arguments (`tailwind.config.*`, `*.config.*`) in PowerShell and got OS path syntax errors | Query concrete file paths or directory roots with `rg`; avoid shell wildcards as positional paths in this environment |
| 2026-02-26 | user | Blog drafts leaked prompt/planning language into published copy (e.g. "your high-level list", "you mentioned"), making posts read like writing instructions | Final blog copy must be reader-facing only; rewrite prompt-derived points into neutral editorial prose and scan for prompt-leak phrases before finalizing |
| 2026-02-26 | self | Tried using `view_image` to preview a local `.svg` and the tool rejected `image/svg+xml` | Treat local SVGs as valid repo assets but skip `view_image` preview for SVG; preview only raster formats (`png/jpg/webp`) |
| 2026-02-07 | self | Used `Get-Content` on paths containing `[locale]` without literal mode in PowerShell | Use `Get-Content -LiteralPath` for bracketed Next.js route folders |
| 2026-02-07 | self | Ran `npm` directly in PowerShell and hit execution-policy block | Use `npm.cmd` in this environment for install/run commands |
| 2026-02-07 | self | Left YAML scalars unquoted in blog frontmatter (title/date), causing parser/type issues | Quote colon-containing text and date strings in frontmatter templates |
| 2026-02-08 | self | Assumed skill snapshots always include `agents/openai.yaml` | Check existing repo snapshot structure first and mirror local convention (`SKILL.md` + `README.md`) |
| 2026-02-08 | self | Tried invoking `.ps1` scripts directly and hit execution policy restrictions | Run scripts with `powershell -ExecutionPolicy Bypass -File <script>.ps1 ...` in this environment |
| 2026-02-08 | self | Drafted a CTA example route (`/spc-skirting`) that does not exist in `src/navigation.ts` | Validate CTA examples against actual pathnames before finalizing skill docs |
| 2026-02-08 | user | I answered image support as if "cover image" and "blog images" were the same need | Distinguish cover-image metadata from multiple inline body images and answer separately |
| 2026-02-08 | self | Repeated bracketed-route read error by using `Get-Content` without literal mode | Always use `Get-Content -LiteralPath` for paths containing `[locale]` or `[tag]` |
| 2026-02-08 | self | Turkish tag pages could 404 when tag params arrived URL-encoded | Decode tag params before normalization and lookup on tag pages |
| 2026-02-08 | self | Ran multiple `npm` mutation commands in parallel and caused lockfile/node_modules inconsistency | Run dependency mutation commands sequentially (shared files/state) |
| 2026-02-08 | self | Used `&&` in Windows PowerShell where it is unsupported | Chain commands with `;` and explicit `$LASTEXITCODE` checks |
| 2026-02-08 | self | OpenNext Cloudflare runtime may fail with older Workers compatibility date after adapter updates | Keep `wrangler.jsonc` compatibility_date at least `2025-05-05` for FinalizationRegistry support |
| 2026-02-08 | self | Cloudflare build logs can be fully green while runtime still returns 500 | Treat build logs and runtime logs separately; reproduce with live probes and tail runtime errors |
| 2026-02-08 | self | Assumed dependency warnings were primary cause of runtime 500 | Prioritize route-level runtime pattern checks (which URLs fail) before attributing outages to package warnings |
| 2026-02-08 | self | Missed that Cloudflare image quota exhaustion can present as generic 500s | Tail runtime logs and inspect `/_next/image` errors for `IMAGES_TRANSFORM_ERROR` before deeper code rollback |
| 2026-02-08 | self | Added `export const dynamic` in a file already importing `dynamic` from `next/dynamic`, causing a TS declaration conflict | Alias `next/dynamic` import (e.g., `nextDynamic`) when using route config export `dynamic` |
| 2026-02-08 | self | Ran `rg` with shell-escaped regex that broke in PowerShell | Prefer simple fixed-string `rg` patterns in PowerShell unless regex is necessary |
| 2026-02-08 | self | Tried layout-wide canonical default (`./`) and it risked default-locale `/en/...` canonicalization with `as-needed` locale prefix | Prefer page-level canonical for localized routes unless route-aware canonical mapping is implemented |
| 2026-02-08 | self | Added `<code>` tags to localized rich text content without ensuring a corresponding `t.rich` renderer mapping | When introducing new rich-text tags in translations, update page-level rich component mappings first |
| 2026-02-25 | self | Tried complex quoted `rg` patterns in PowerShell and triggered parser errors | Split searches or use single-quoted simple patterns in PowerShell to avoid nested quote parsing issues |
| 2026-02-25 | self | `apply_patch` failed to match a UTF-8 line shown as mojibake in terminal output | Read the exact line via a UTF-8 Node script and patch using the real text, not the terminal-rendered version |
| 2026-02-25 | self | Used `Get-ChildItem src/app/[locale]` without literal mode and got no results because PowerShell treated brackets as wildcards | Use `Get-ChildItem -LiteralPath` (not just `Get-Content -LiteralPath`) for Next.js bracketed route folders |
| 2026-02-25 | self | Ran `rg` with a Windows path glob (`src/lib/*.ts`) and got an OS path syntax error | Pass the directory (`src/lib`) and let `rg` recurse/filter instead of shell-style path globs on Windows |
| 2026-02-25 | self | Tried using `-LiteralPath` with `rg` (PowerShell concept, not an `rg` flag) and got an `rg` option error | Use quoted paths for bracketed folders with `rg`; reserve `-LiteralPath` for PowerShell cmdlets like `Get-Content`/`Get-ChildItem` |
| 2026-02-26 | self | Used a broad Unicode char-class range while auditing mojibake and matched normal text | Use codepoint-based mojibake checks (specific prefixes/patterns) instead of broad Unicode ranges |
| 2026-02-26 | user | Reported `?` in the bottom GA/cookie banner; root cause was literal `?` replacements saved in `messages/tr.json`, not a font/runtime issue | Inspect source bytes/JSON values first and validate Turkish locale strings for suspicious `?` inside words before build |
| 2026-02-26 | user | Corrected multiple skirting board depths and requested per-model separation; shared branch logic made this brittle | Store skirting specs in an explicit per-model map keyed by exact collection type and update values there |
| 2026-02-26 | user | Moved catalogue PDFs under `public/downloads/catalogues` and renamed them with `kermit-` prefix; resource JSON links still pointed to old `/downloads/*.pdf` paths | Update `src/lib/resources.json` catalogue `files.{en,tr}.url` entries to `/downloads/catalogues/...` and verify file existence for each locale link |
| 2026-02-26 | user | Google click on English blog URL was auto-prefixed to `/tr` by locale detection, leaving English slug intact and causing 404 | Disable locale detection for blog routes (locale-specific dynamic slugs/tags) and add cross-locale slug rescue redirect in blog post page |
| 2026-02-26 | user | I treated deployment as something I might run locally, but this repo deploys from GitHub push-triggered builds | Do not run local deploy commands here; prepare changes and let GitHub-triggered deployment handle release |
| 2026-02-26 | self | New Turkish text-integrity validator falsely flagged markdown URL query params (e.g. `/resources?tab=...`) as broken characters | Make suspicious `?` detection URL-query-aware so it ignores `?key=` inside URLs while still catching `?` replacements in Turkish words |
| 2026-02-26 | user | Did not want explicit â€œwall panels are not for floorsâ€ wording in blog copy | Prefer positive framing: mention matching Stone Collection colors with wall panels instead of negative product-scope statements |

| 2026-02-26 | user | Floating "Chat with us" opened an in-page popup first, but they want a direct WhatsApp action | Replace popup chat UI with a direct WhatsApp link button in the shared `Chatbox` component |

| 2026-02-26 | user | Uploaded skirting English TDS PDFs under `public/downloads/technical-data-sheets/spc-skirting-boards/English`; resource links still pointed to old flat `/downloads` paths | Update the 8 skirting TDS entries in `src/lib/resources.json`, set `updatedAt` to the upload date, and temporarily point TR links to the same EN PDFs until TR files are uploaded |

## User Preferences
- Avoid runtime filesystem checks for resource links; use manual `resources.json` URLs and mark missing files with `#`.
- On the Resources page, if a document file is missing, do not show a dead download link; render a non-clickable "coming soon" state instead.
- When asking style audits, prefers only key fonts/colors and not exhaustive minor palette dumps.
- Blog posts must never read like instructions to the writer (no "your list", "you mentioned", or prompt/process references in final article body).
- For blog copy, use the exact EN term **"Skirting with Flexible Edges"** for Turkish **"ContalÄ± SÃ¼pÃ¼rgelik"**.
- Keep responses concise and practical.
- Wants concrete image production specs (ratio, dimensions, and file-size targets) before generating new product application images.
- For bulk skirting scene refreshes, prefers source filenames that begin with product code so replacements can be mapped automatically.
- Implement approved plans end-to-end without partial delivery.
- Wants the blog-post-generator skill to ask for author-provided high-level details and plan article structure around them.
- Does not want raw external image source URLs exposed in public blog frontmatter/output; keep image provenance in internal-only trace files.
- Prefer a visual hero section on key listing pages (blog list was explicitly requested).
- Wants the blog generation workflow to support fetching web images and filing them per post.
- Wants the skill to autonomously decide inline image count, then present a final media confirmation summary.
- Wants user-provided repo videos accepted with topic-aware placement inside blog content.
- Wants videos in blog content to be playable inline (not plain links).
- Does not want bottom "related page" style internal link blocks in blog posts.
- Wants internal links and CTAs when genuinely helpful, but they should feel lively/contextual rather than generic.
- Prefers conversational intake: start with "Let's generate a new blog post" and be asked for required variables step-by-step instead of providing parameter blocks upfront.
- Wants explicit skill invocation (`$blog-post-generator`) as the standard start so blog generation is never triggered by ambiguity.
- Wants `$blog-post-generator` alone as the only starter; generic starter phrase should not be required.
- Wants all workflow questions in English; Turkish is only for TR keyword/locale content inputs.
- Wants locale-specific tags (EN tags in English, TR tags in Turkish) instead of forced shared tag sets.
- Wants Turkish articles to use proper Turkish characters instead of ASCII transliteration.
- Wants zero tolerance for broken Turkish characters in published blog content.
- Wants Turkish locale UI text (especially cookie/consent copy) validated so broken characters never ship.
- Wants skirting board technical attributes maintained separately per model (no shared inferred details).
- Wants catalogue downloads to follow the new `public/downloads/catalogues` structure and updated `kermit-` filenames.
- Wants blog search result clicks to preserve the clicked locale and never auto-prefix to `/tr` with an untranslated slug.
- Deployment workflow is GitHub push-triggered; do not run local deploy commands for this repo.
- Prefers positive wording in blog copy for wall/floor planning (mention matching Stone Collection colors, avoid explicit â€œnot for floorsâ€ phrasing).
- Wants blog drafts to use bold emphasis on key words/phrases when it improves clarity.
- Prefers aligning repo worker name to Cloudflare connected-build expectation (`kermit-floor`) to avoid deploy warnings.
- Wants optional user-provided inputs for blog generation: own images, short article context, and reference sources/style examples.
- Wants image delivery to use raw/local image paths rather than Next/Cloudflare image optimization.
- Wants canonical host preference to stay on apex (`kermitfloor.com`) rather than `www`.
- Wants Google Analytics configured with measurement ID `G-W9FZMTQP1H`.
- Prefers homepage blog section framing as "Useful Information" / "FaydalÄ± Bilgiler" instead of news/updates wording.
- Prefers semantic key names in translations/components (e.g., use blog-specific keys for blog sections, not reused `news*` keys).
- Prefers long-form blog posts with many subtitles to improve reader focus/retention.

- Wants the floating "Chat with us" action to open WhatsApp directly with no intermediate chatbox UI.


- For skirting technical data sheets, if TR PDFs are not uploaded yet, temporarily use the same English PDF links on the Turkish site and switch later when TR files are available.


## Patterns That Work
- After generating blog content, run a quick prompt-leak scan (e.g. `your high-level`, `your list`, `Sizin verdiÄŸiniz`, `Listenizde`) before finalizing/publishing.
- When a user says they uploaded blog images to a repo folder, inspect the actual folder contents/count first; it may differ from the number of images visible in chat.
- User-provided technical diagrams can be stored as local SVG assets in `public/images/blog/<topicId>/` and embedded directly in MDX (no external hotlinking needed).
- Validate assumptions by checking repository files before acting.
- Before patching blog media behavior, inspect both the manifest generator and the page renderer; lazy attrs and layout styling can live in different places.
- For skill-setting questions, inspect the local `SKILL.md` directly and `rg` for the exact constraint text before answering.
- For this repo, favor static-first features that fit Next.js + Cloudflare/OpenNext deployment.
- Run `npm.cmd run blog:validate` + `npm.cmd run typecheck` before full build to catch schema/typing issues early.
- For Cloudflare incidents, probe route groups (`/`, `/about`, `/blog`, `/sitemap.xml`) to isolate failing feature paths quickly.
- If `wrangler tail` seems "stuck", treat it as active stream mode; trigger requests from another terminal and read emitted logs.
- For Workers-hosted content pages, compile repo content into a deterministic build artifact instead of reading filesystem at runtime.
- For `next-intl` rich translations, keep content tags aligned with explicit renderer keys on each page.
- When onboarding to this repo, inspect `scripts/generate-blog-manifest.mjs` and `scripts/generate-panel-manifests.mjs` early; they explain most runtime data flow decisions.
- Panel collection pages may intentionally keep server-side fs loading while `Showcase` adds a client fallback fetch from `/data/<collection>.json` for Cloudflare Worker compatibility.
- Use repo installers/checkers (`scripts/install-blog-post-generator-skill.ps1`, `scripts/check-blog-post-generator-skill-setup.ps1`) instead of manual skill file copying.
- When terminal output shows garbled Unicode (Turkish/emojis), verify with a Node UTF-8 read before assuming source file corruption.
- Use quick Node audits (JSON parse + file existence checks) to validate translation parity, resource URLs, and blog/media references when `node_modules` is unavailable.
- For UTF-8 text edits on Windows, prefer Node reads for exact string matching when PowerShell output garbles characters.
- For Turkish text integrity checks, use codepoint-based scans and trust UTF-8 file reads over terminal glyph rendering.
- Add a build-time text integrity validator (`messages/tr.json` + Turkish blog MDX) to catch mojibake and suspicious `?` replacements.
- Suspicious `?` detection must ignore URL query strings in markdown/content (e.g. `?tab=`) to avoid false positives.
- For skirting dimensions/specs, prefer exact collection-keyed config maps over `includes()` chains so model-specific values do not drift.
- When resource files are moved/renamed manually, run a quick JSON + filesystem existence check for `src/lib/resources.json` URLs (especially locale-specific variants).
- For locale-specific dynamic blog slugs/tags, do not rely on `next-intl` locale auto-detection redirects; preserve clicked locale and redirect mismatched slugs to canonical locale URL.
- In this repo, "deploy" means pushing to GitHub and letting the connected build/deploy pipeline run, not `npm run deploy` locally.
- For bulk text updates across MDX/JSON, use a small Node script to preserve UTF-8 and avoid PowerShell encoding defaults.
- For skirting application-image swaps, match by filename code token and replace each target folder image as `application.jpg`, then report missing codes.

## Patterns That Don't Work
- Guessing environment behavior without verifying local config/scripts.
- Treating successful build logs as proof of runtime health on Workers.
- Assuming mojibake in PowerShell output means file data is corrupted; this environment can misrender UTF-8 in command output.

## Domain Notes
- Installation resource entry `flooring-install-click` currently points to missing `/public/downloads/spc-...uniclic.pdf` files in this snapshot; `public/downloads/installation-guides` currently contains only skirting EN/TR manuals.
- Deploy target is Cloudflare Workers using OpenNext.
- Product scope: SPC flooring, wall panels, and skirting boards.
- Seed blog posts are placeholders and expected to be replaced by editorial content later.
- A route can fail on Workers runtime while unrelated routes stay healthy; this often points to feature-specific runtime dependencies.
- Cloudflare Images free unique transformation limits can trigger `IMAGES_TRANSFORM_ERROR 9422` for `/_next/image` requests.
- App is Next.js App Router (`src/app/[locale]`) with `next-intl` EN/TR routing and `localePrefix = 'as-needed'`.
- Build pipeline generates `src/generated/blog-manifest.json` from `content/blog/topics/*/{en,tr}.mdx` and `public/data/*.json` panel manifests before `next build`.
- Runtime blog pages render precomputed HTML (`contentHtml`) from the generated manifest; tag slugs are normalized per locale and URL-decoded on lookup.
- Product collection pages pass `initialPanels` from server loaders into `src/components/showcase/Showcase.tsx`, which backfills from `/public/data/*.json` if the server returns empty on Workers.
- This workspace snapshot may omit `node_modules`; dependency-based scripts (`gray-matter`, `zod`, etc.) won't run until install.
- `public/data/*.json` panel manifests are generated at build time and may be absent from the repo checkout.
- `src/lib/resources.json` currently references more local `/downloads/*.pdf` files than exist in `public/downloads` (many resource cards resolve to missing files in this snapshot).
- Product collection route files contain repeated stale comments mentioning 60-second revalidation even though no `revalidate` export is set on those pages.
- Blog markdown inline images need explicit styling in `src/components/blog/BlogPostContent.tsx`; manifest-side `loading=\"lazy\"` attrs alone do not control layout/overflow.




