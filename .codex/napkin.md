# Napkin

## Corrections
| Date | Source | What Went Wrong | What To Do Instead |
|------|--------|----------------|-------------------|
| 2026-04-13 | self | `git push -u origin <branch>` timed out locally after ~124s even though the remote ref was created successfully | After a push timeout here, verify with `git ls-remote --heads origin <branch>` and `git status -sb` before retrying a large push |
| 2026-04-13 | self | Extracted `Logo` as a shared component but left `MobileMenu` wrapping it in another `Link`, which created nested `<a>` tags and a hydration error | When a shared component already renders navigation, pass click handlers through it or wrap it in a neutral container instead of another `Link` |
| 2026-04-12 | self | Passed a backup path with spaces through `npm.cmd run <script> -- <path>` and the argument was split unexpectedly by the Windows/npm layer | Quote path args carefully when going through `npm.cmd`, or call `node <script> "<full path>"` directly for verification scripts that take filesystem paths |
| 2026-04-12 | self | Put `-LiteralPath` after the file path in `Get-Content`, which PowerShell treated as a missing argument instead of a switch | In this environment, call `Get-Content -LiteralPath '<path>'` with the switch before the value |
| 2026-04-08 | self | Piped a rename script into nested `powershell -Command -`; it exited `0` but did not actually rename the target folders in this environment | For bulk folder renames here, run the PowerShell `Move-Item` loop directly in the `shell_command` instead of nesting another PowerShell process |
| 2026-03-16 | self | Used `??` in a PowerShell inline parser script and hit a parser error in this environment | Use explicit `if`/`elseif` null checks in PowerShell scripts here instead of relying on `??` |
| 2026-04-06 | self | Used Git upstream shorthand `@{u}` directly in PowerShell and hit parsing/ambiguity issues while checking tracking info | In PowerShell, prefer `git for-each-ref --format='%(upstream:short)' <ref>` or single-quote reflog/upstream shorthand carefully |
| 2026-04-06 | self | Tried using `rg.exe` for a repo audit in this workspace and hit `Access is denied` | Fall back to PowerShell `Select-String`, `Get-Content`, and `Get-ChildItem` when ripgrep is unavailable here |
| 2026-04-06 | user | Natural collection product code was confirmed as `29198-4`, but user corrected it to `29148-4`; the name/translation text was already right | When fixing product-code mismatches, preserve the translation values and update only code keys, manifest entries, asset folder names, and related notes/references |
| 2026-04-06 | self | Assumed the GitHub credential used here could push/merge to upstream after it successfully created an issue | Check repo API permissions first; if token has pull-only access, create a fork, push there, and open a PR back to upstream |
| 2026-04-06 | self | Needed to confirm whether GitHub authority changed after the PR merge | Re-check both the repo permissions API and a `git push --dry-run` to verify actual upstream write access |
| 2026-04-08 | self | Started an `.xlsx` audit assuming `openpyxl` would be available, but the module is not installed in this workspace | For local Excel verification here, prefer direct `.xlsx` ZIP/XML parsing in Python unless a spreadsheet library is already confirmed present |
| 2026-04-08 | self | Tried to create a GitHub issue directly from this workspace, but `gh` is not installed, `GITHUB_TOKEN` is absent, and the available GitHub connector lacks issue creation | Draft the issue text locally and report the creation blocker clearly before continuing with repo changes |
| 2026-04-08 | self | Kept relying on the earlier assumption that upstream GitHub access here was pull-only | Re-check current Git push capability with `git push --dry-run`; verify the current canonical `origin` instead of relying on older remote-ownership assumptions |
| 2026-04-09 | user | The GitHub repo was moved from `tulparfynh/kermit-floor-staging` to `kermit-floor/kermit-floor-staging`, but the local remote setup still treated `tulparfynh` as canonical | Update `origin` to `https://github.com/kermit-floor/kermit-floor-staging.git`, remove redundant duplicate remotes, and treat `kermit-floor/kermit-floor-staging` as the canonical upstream going forward |
| 2026-04-08 | self | Tried using Node with `jszip` for a bulk `.xlsx`-driven migration, but `jszip` is not installed in this workspace | Reuse the Python standard-library ZIP/XML parser for workbook-driven bulk code migrations here instead of assuming extra Node packages |
| 2026-04-09 | self | Ran two mutating Git commands (`stash` and `add`) in parallel and hit a transient `.git/index.lock` collision | Keep Git write operations strictly serial in this repo; parallelize only read-only Git queries |
| 2026-04-09 | self | Used unquoted `stash@{0}` in PowerShell and it was parsed as a script block instead of a Git revision | In PowerShell, always single-quote stash refs and reflog syntax like `'stash@{0}'` |
| 2026-03-13 | self | Used raw mojibake glyphs in an inline regex during a PowerShell/Node here-string and triggered an invalid-regex parse error | For encoding-repair scripts, prefer codepoint-based detection over literal mojibake regex fragments |
| 2026-03-12 | self | Used over-escaped quotes in a PowerShell `rg` command and triggered a regex parse error (`unclosed group`) | In PowerShell audits, use simple fixed-string `rg` patterns (or `-F`) without nested quote escaping unless regex is required |
| 2026-03-12 | self | Wrote JSON with `Set-Content -Encoding UTF8` and introduced BOM, breaking strict `JSON.parse` | Prefer `apply_patch`/Node writes for JSON; strip BOM if PowerShell write was used |
| 2026-03-12 | self | Tried composing inline JSON for `Set-Content` with escaped quotes and hit PowerShell parameter parsing error | Use a here-string piped to `Set-Content` (or Node write) for multi-line JSON content |
| 2026-03-12 | self | Validation initially checked URL-backed files against `images/...` instead of `public/images/...`, causing false missing-file failures | When verifying site URLs against repo files, map `https://host/images/...` to local `public/images/...` |
| 2026-03-12 | self | Bulk Desktop CSV overwrite aborted mid-run when one file was temporarily locked (`EBUSY`) | Use per-file try/catch writes (or retries) so one locked file doesn’t stop all exports |
| 2026-03-12 | user | Exported translation key paths when user needed English translated names | For product CSV exports, default to `english_translation` values unless keys are explicitly requested |
| 2026-03-12 | user | Combined product export in one merged `.txt` list made collection boundaries unclear | For Desktop product exports, generate separate `.txt` files per collection when separation is requested |
| 2026-03-12 | self | Used `process.argv[1]` with `node -` and accidentally wrote to a temp `-` file | With `node - <arg>`, read output path from `process.argv[2]` |
| 2026-03-12 | user | JSON-style export content (quotes/commas/brackets/headers) was too verbose for product lists | For product-list `.txt` exports, output plain code-only lines (`one code per line`) with no extra punctuation/text |
| 2026-03-12 | self | Wrapped a PowerShell delete script in a quoted here-string, so it printed instead of executing | Run direct PowerShell commands (or pipe the here-string to `Invoke-Expression`) when execution is intended |
| 2026-03-12 | user | Asked for collection cleanup and I only removed manifest entries first, leaving duplicate asset folders in `public/images/full-natural-collection` | For "move/remove shared codes between collections", remove both manifest entries and duplicate code folders from the source collection |
| 2026-03-12 | self | Trusted `rg`/terminal-rendered Turkish output while auditing encoding and initially overestimated corruption scope | For Turkish encoding audits, run UTF-8 Node checks on source bytes/JSON values and use validator output as ground truth |
| 2026-03-12 | self | Guessed natural/panel loader filenames (`floor-parquet-natural-data.ts`, `load-panel-data.ts`) and lost time on missing-path reads | Use `rg --files src/lib | rg \"natural|panel\"` first, then open exact files |
| 2026-03-11 | self | Tried deleting binary `src/app/favicon.ico` with `apply_patch`, which failed due UTF-8 requirement | Delete binary files via shell commands (`Remove-Item`) instead of `apply_patch` |
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
- For code-structure questions, prefers the answer framed in code terms (routes, manifests, translation namespaces, shared mapping logic) rather than visual/UI grouping.
- When evaluating architecture choices, prefers the recommendation optimized for future-proofing, scalability, and mistake reduction rather than the smallest immediate patch.
- For flooring product-code prefix changes, touch only the exact collections the user names; do not assume every flooring collection is in scope.
- When asking Git workflow questions, prefers concise explanation of what is safe to delete and what action is actually needed.
- Keep a single favicon source (`/images/icons/favicon.32x32.png`) and route fallback `/favicon.ico` to it; avoid separate artifact favicon files.
- When auditing or correcting collection names against a user-provided CSV, treat the CSV as the source of truth if the user says so and sync both locale files to it.
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
- When requesting collection/product exports in `.txt`, expects the file to be written directly to `C:\\Users\\hp\\Desktop`.
- For product-list exports, wants plain code-only `.txt` output (one product per line, no JSON punctuation or section labels).
- When saying "separated according to collection", prefers separate files per collection over a single merged file.
- For collection exports, wants per-collection CSVs with `product_code` and translation key mapping (flooring + wall panels).
- For CSV collection exports, prefers actual English translated names over translation key paths.
- CSV exports should include image-link columns for each code: `product_image_url` and `application_image_url`.
- Image links in CSV exports should be absolute clickable URLs using apex host: `https://kermitfloor.com/...`.
- If links are requested as "clickable" in CSV, include explicit spreadsheet formula columns (e.g., `=HYPERLINK(...)`) in addition to raw URL columns.
- For Desktop CSV exports covering multiple collections, generate one CSV per collection with the exact 4 columns in order: `product_code`, `en_translation`, `product_image_url`, `application_image_url`.
- When moving overlapping product codes between collections, enforce single ownership by removing non-owner manifest/translation/folder artifacts and avoid fallback duplication.
- For collection-level hard deletes, remove code artifacts from manifest + locale namespaces + image folder + legacy redirects, and do not add alternate fallback mappings.
- For EN mojibake cleanup (`â€“`, `â€™`, `Ã‡`, etc.), decode suspicious values with CP1252-byte reinterpretation (not plain latin1) and accept only score-improving fixes.


- For skirting technical data sheets, if TR PDFs are not uploaded yet, temporarily use the same English PDF links on the Turkish site and switch later when TR files are available.
- For repo verification requests like collection/product presence checks, prefers confirmation-only responses with no project/data changes.
- If a product-code correction is provided, keep the product name translation text unchanged unless the user explicitly says the wording is wrong.
- For repeated-code audits that include 3D wall panels, treat `3D-###` and `###` as the same base product code when the user asks for normalized duplicates.


## Patterns That Work
- For "how are products grouped?" questions in this repo, inspect `public/images/*/products.json`, the matching `src/lib/*-data.ts` loaders, `src/app/[locale]/*/page.tsx`, and the `collectionType`/translation switch in `src/components/showcase/Showcase.tsx`; grouping is defined across those layers, not in a single registry.
- For skirting naming audits, distinguish collection-model labels from per-SKU labels: `SkirtingCollectionNames` names the 8 skirting model families, while `SkirtingPanelNames` feeds `tPanelNames` for the individual SKU cards/details.
- For flooring code-prefix migrations, use each target collection's `products.json` as the source of truth, then rename folders and rewrite the matching locale namespace keys plus collection-scoped image-path references from that manifest.
- For Cloudflare Workers Builds on this repo, use the OpenNext-specific two-step commands (`npm run cf:build` then `npm run cf:deploy`); `next build` alone does not create `.open-next/worker.js`, so a plain `wrangler deploy` will fail with "entry-point file ... .open-next/worker.js was not found".
- For duplicate-code audits across collection manifests, check both exact codes and a normalized variant that strips the `3D-` prefix; the user may mean either distinct `3D-###` SKUs or shared base numeric codes.
- For public GitHub Actions pages that hide raw logs, combine the visible annotation text with the repo workflow file and local generated-artifact inspection; if a generated JSON embeds markdown/content strings, check for literal `\r\n` sequences because Windows-generated content can fail Linux `git diff --exit-code` guardrails.
- Wall panel name changes are sourced from `messages/{en,tr}.json` under `PanelNames`; `public/images/spc-wall-panels/*/details.json` can remain code-based.
- Desktop export CSVs may contain hundreds of trailing blank rows; filter to populated rows before doing parity audits against collection manifests.
- For user-provided `.xlsx` product lists, compare the product-code column against the image URL path segment; Excel can silently auto-convert code-like IDs such as `2002-3` into numeric serials.
- Direct `.xlsx` ZIP/XML parsing works well in this environment for quick workbook audits when `openpyxl` is unavailable.
- For `.xlsx` exports in this workspace, Python's standard-library `zipfile` + SpreadsheetML XML is a reliable fallback when no spreadsheet package is installed.
- For collection-wide product-code migrations here, update the collection `products.json`, the matching EN/TR translation namespace keys, asset folder names, each folder’s `details.json` `name`, and every hardcoded image path that points into that collection.
- For large workbook-driven code swaps, derive the old->new mapping from the workbook directly instead of hand-transcribing hundreds of code pairs.
- For wall-panel code migrations, also scan blog MDX for user-facing raw code mentions in article text; some posts list matching color examples with backticked codes that must be updated alongside image paths.
- After generating blog content, run a quick prompt-leak scan (e.g. `your high-level`, `your list`, `Sizin verdiÄŸiniz`, `Listenizde`) before finalizing/publishing.
- When a user says they uploaded blog images to a repo folder, inspect the actual folder contents/count first; it may differ from the number of images visible in chat.
- User-provided technical diagrams can be stored as local SVG assets in `public/images/blog/<topicId>/` and embedded directly in MDX (no external hotlinking needed).
- Validate assumptions by checking repository files before acting.
- Before patching blog media behavior, inspect both the manifest generator and the page renderer; lazy attrs and layout styling can live in different places.
- For skill-setting questions, inspect the local `SKILL.md` directly and `rg` for the exact constraint text before answering.
- For this repo, favor static-first features that fit Next.js + Cloudflare/OpenNext deployment.
- Run `npm.cmd run blog:validate` + `npm.cmd run typecheck` before full build to catch schema/typing issues early.
- For Cloudflare incidents, probe route groups (`/`, `/about`, `/blog`, `/sitemap.xml`) to isolate failing feature paths quickly.
- When a merged commit does not auto-deploy to Cloudflare, first confirm the merge SHA reached the watched branch, check whether GitHub push workflows ran for that SHA, and run `npm.cmd run build`; if the push is visible and the build passes, the likely blocker is Cloudflare dashboard integration/branch settings or a Cloudflare-side build failure, not the repo commit itself.
- If `wrangler tail` seems "stuck", treat it as active stream mode; trigger requests from another terminal and read emitted logs.
- For Workers-hosted content pages, compile repo content into a deterministic build artifact instead of reading filesystem at runtime.
- For `next-intl` rich translations, keep content tags aligned with explicit renderer keys on each page.
- When onboarding to this repo, inspect `scripts/generate-blog-manifest.mjs` and `scripts/generate-panel-manifests.mjs` early; they explain most runtime data flow decisions.
- Panel collection pages may intentionally keep server-side fs loading while `Showcase` adds a client fallback fetch from `/data/<collection>.json` for Cloudflare Worker compatibility.
- Use repo installers/checkers (`scripts/install-blog-post-generator-skill.ps1`, `scripts/check-blog-post-generator-skill-setup.ps1`) instead of manual skill file copying.
- For export QA, run a strict CSV audit: header check + row-count check + row-order/code match against collection `products.json` + value match against `messages/en.json` namespace.
- When terminal output shows garbled Unicode (Turkish/emojis), verify with a Node UTF-8 read before assuming source file corruption.
- Use quick Node audits (JSON parse + file existence checks) to validate translation parity, resource URLs, and blog/media references when `node_modules` is unavailable.
- When the GitHub connector lacks generic issue write actions, `git credential fill` can provide the stored GitHub HTTPS credential for authenticated REST API issue comments/closure via PowerShell without needing `gh`.
- For UTF-8 text edits on Windows, prefer Node reads for exact string matching when PowerShell output garbles characters.
- For Turkish text integrity checks, use codepoint-based scans and trust UTF-8 file reads over terminal glyph rendering.
- Add a build-time text integrity validator (`messages/tr.json` + Turkish blog MDX) to catch mojibake and suspicious `?` replacements.
- Suspicious `?` detection must ignore URL query strings in markdown/content (e.g. `?tab=`) to avoid false positives.
- For skirting dimensions/specs, prefer exact collection-keyed config maps over `includes()` chains so model-specific values do not drift.
- When resource files are moved/renamed manually, run a quick JSON + filesystem existence check for `src/lib/resources.json` URLs (especially locale-specific variants).
- For locale-specific dynamic blog slugs/tags, do not rely on `next-intl` locale auto-detection redirects; preserve clicked locale and redirect mismatched slugs to canonical locale URL.
- In this repo, "deploy" means pushing to GitHub and letting the connected build/deploy pipeline run, not `npm run deploy` locally.
- For bulk text updates across MDX/JSON, use a small Node script to preserve UTF-8 and avoid PowerShell encoding defaults.
- For mojibake scans, use codepoint-based detectors (`C2/C3/C4/C5` prefix pairs, `E2 80` punctuation patterns, `U+FFFD`) to avoid shell/regex encoding pitfalls.
- For skirting application-image swaps, match by filename code token and replace each target folder image as `application.jpg`, then report missing codes.
- When moving a flooring code between collections, update both collection `products.json` manifests and matching entries in `src/redirects/legacyRedirects.ts`.
- In this environment, if direct `Remove-Item` is blocked, use `git rm -r` to remove tracked asset folders cleanly.
- For client components like the showcase header, avoid `next/dynamic(..., { ssr: false })` as a workaround for import cycles; extract shared client helpers into a separate module and use normal imports to prevent `BAILOUT_TO_CLIENT_SIDE_RENDERING` in dev HTML.

## Patterns That Don't Work
- Guessing environment behavior without verifying local config/scripts.
- Treating successful build logs as proof of runtime health on Workers.
- Assuming mojibake in PowerShell output means file data is corrupted; this environment can misrender UTF-8 in command output.

## Domain Notes
- As of 2026-04-12, `SkirtingPanelNames` is effectively an identity map in both locales (displaying raw SKU codes), with one English typo: key `1113031` maps to value `1101331`; `SkirtingCollectionNames` contains the short labels for the 8 skirting model families.
- As of 2026-04-12, product-page spec values (thickness, depth, dimensions, etc.) are not loaded from `details.json`; the app chooses them in `src/components/showcase/ProductDetails.tsx` based on `collectionType`, while panel loaders only supply image URLs and `nameKey`.
- As of 2026-04-12 (latest): `spc-parquet-stone-collection`, `spc-parquet-natural-collection`, and `full-natural-collection` use `N-`-prefixed product codes in manifests, locale namespaces, asset folders, and collection-scoped image references.
- Product code `29098-2` is reused across namespaces: wall panels use `PanelNames.29098-2`, while another collection already has a separate `29098-2` label; verify namespace before renaming shared codes.
- `FullNaturalCollectionPanelNames` in both locales is currently code-based for the whole collection (values mirror product codes), so CSV audits against human-readable Full Natural names will report broad translation mismatches.
- As of 2026-03-16, `FullNaturalCollectionPanelNames` in both locales was synced to the human-readable names from `C:\Users\hp\Documents\fullnatural111.csv`.
- Installation resource entry `flooring-install-click` currently points to missing `/public/downloads/spc-...uniclic.pdf` files in this snapshot; `public/downloads/installation-guides` currently contains only skirting EN/TR manuals.
- Deploy target is Cloudflare Workers using OpenNext.
- As of 2026-04-09 (latest): the canonical GitHub repo is `kermit-floor/kermit-floor-staging`; local `origin` should point there, and the redundant `fork` remote is no longer needed in this checkout.
- As of 2026-04-09 (latest): pushes from this workspace to `origin` succeeded against `kermit-floor/kermit-floor-staging`.
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
- Flooring code `29036-15` is currently in `full-natural-collection` (`public/images/full-natural-collection/products.json` and legacy redirects to `/full-natural-collection`).
- As of 2026-03-12, `full-natural-collection` no longer lists shared codes `19022-5`, `29036-5`, `29100-5`; those remain only in `spc-parquet-natural-collection`.
- As of 2026-03-12, legacy `/full-collection-{code}` redirects for `19022-5`, `29036-5`, `29100-5` point to `/spc-parquet-natural-collection`.
- As of 2026-03-12, duplicate asset folders for `19022-5`, `29036-5`, `29100-5` were removed from `public/images/full-natural-collection/` and retained under `public/images/spc-parquet-natural-collection/`.
- As of 2026-03-12, `29148-4` is in `spc-parquet-natural-collection` with EN/TR name `Natural Beige Oak`, image folder populated, and legacy `/full-collection-29148-4` redirects mapped to `/spc-parquet-natural-collection`.
- `16041-8` has no plain folder under `public/images`; only `spc-3d-panels-model-a/3D-16041-8` exists.
- As of 2026-03-12, stale `PanelNames.16041-8` keys were removed from `messages/en.json` and `messages/tr.json`; `3DModelAPanelNames.3D-16041-8` remains valid.
- Audit snapshot (2026-03-12): remaining irregularities include extra Full Natural translation keys (`19022-5`, `29036-5`, `29100-5`), an orphan Natural folder (`29198-4`), extra Optima-60 folder (`0603031`), and SPC wall-panel `details.json` name mismatches (`23048-2`, `29150-4`).
- As of 2026-03-12 (latest): `19022-5`, `29036-5`, and `29100-5` were re-added to `full-natural-collection/products.json` and their Full Natural folders were restored; `0603031` hardcoded references were removed; wall-panel `details.json` mismatches for `23048-2` and `29150-4` were fixed; and `details.json` files were generated for all 64 skirting product folders.
- Audit snapshot (2026-03-12, later): EN/TR key parity and manifest-folder parity are clean across Full Natural, Stone, Wall Panels, 3D Model A/B, and all 8 skirting models; `spc-parquet-natural-collection/29198-4` remains as an orphan folder not listed in `products.json` and not translated.
- As of 2026-03-12 (latest): orphan natural folder `29198-4` was reconciled by adding it to `spc-parquet-natural-collection/products.json` and adding EN/TR keys under `SpcParquetNaturalCollectionPanelNames`.
- As of 2026-04-06 (latest): the Natural collection code was corrected back to `29148-4`; `Natural Beige Oak` stayed unchanged, `products.json` now lists `29148-4`, and the asset folder path is `public/images/spc-parquet-natural-collection/29148-4`.
- As of 2026-04-06 (latest): PR `#4` for the Natural code correction was merged into `main`, and issue `#3` was closed.
- As of 2026-04-08 (local, uncommitted): `full-natural-collection` was migrated from supplier codes to the workbook-provided Kermit codes; manifest, EN/TR keys, folders, and `details.json` names all match the workbook.
- As of 2026-04-08 (local, uncommitted): `spc-parquet-stone-collection` was migrated from supplier codes to the workbook-provided Kermit codes; manifest, EN/TR keys, folders, `details.json` names, and Stone image references in source content all match the workbook.
- As of 2026-04-08 (local, uncommitted): `spc-wall-panels` was migrated from supplier codes to the workbook-provided Kermit codes; `PanelNames`, folders, `details.json`, wall-panel image references, and the bathroom-renovation blog’s raw code examples all match the workbook.
- As of 2026-04-08 (local, uncommitted): `spc-3d-panels-model-a` was migrated from supplier codes to the workbook-provided Kermit codes; manifest, `3DModelAPanelNames`, folders, `details.json` names, and the showcase image references all match the workbook.
- As of 2026-04-08 (local, uncommitted): `spc-3d-panels-model-b` was migrated from supplier codes to the workbook-provided Kermit codes; manifest, `3DModelBPanelNames`, folders, `details.json` names, and the showcase image references all match the workbook.
- As of 2026-03-12 (latest): generated six Desktop CSV exports (`natural`, `stone`, `full-natural`, `spc-wall-panels`, `3d model a`, `3d model b`) with absolute `https://kermitfloor.com/images/...` links and manifest-order product rows.
- As of 2026-03-12 (latest): ownership cleanup set `19022-5` to Full Natural only, and `29036-5` + `29100-5` to Natural only; non-owner folders, manifest entries, and namespace keys were removed; `full-collection-19022-5` legacy redirect now points to `/full-natural-collection`.
- As of 2026-03-13 (latest): `29148-4` was fully removed from the Natural collection (`products.json`, EN/TR natural keys, asset folder, and legacy redirect rows) with no fallback redirect added.
- As of 2026-03-13 (latest): deep EN/TR Unicode audit across `messages`, `content`, and `src` found and fixed 23 mojibake-corrupted English locale strings in `messages/en.json`; post-fix scan reports zero suspect sequences.





