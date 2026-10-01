# Blog Authoring Checklist

## Create a new topic

Run:

```bash
npm run blog:new -- --topic <topic-id>
```

This creates one file per supported language:

- `content/blog/topics/<topic-id>/en.mdx`
- `content/blog/topics/<topic-id>/tr.mdx`
- `content/blog/topics/<topic-id>/bg.mdx`
- `content/blog/topics/<topic-id>/sr.mdx`
- `content/blog/topics/<topic-id>/ar.mdx`

The scaffolder uses the default author from `content/blog/authors.json` (falls back to `Kermit Floor Team` if the registry is missing or invalid).

For assisted drafting or editing, use `.agents/skills/blog-post-generator/SKILL.md` with a clear
blog request or `$blog-post-generator`. It reuses the supplied brief and preserves unrelated
content during targeted edits.

## Manage blog authors (repo-defined)

Define allowed blog authors in:

- `content/blog/authors.json`

Use this registry to keep `authorName` consistent across posts and tools/skills.
Each author should have a display `name`; `id` is recommended for stable selection. Mark one entry with `"isDefault": true` for scaffolding defaults.
Set `schemaType` to `Organization` for a company or editorial team; individual authors use `Person` by default.
An individual's localized `jobTitle` appears below their name (unless a `subtitle` is provided) and in Article author markup; keep the title separate from the author's name.

## Complete the draft

- Scaffolds contain placeholder metadata and body text. Replace them with the article's
  actual content, applicable evidence in `sourceUrls`, and appropriate media before review.
- Keep all five locales aligned and validator rules intact. For targeted edits, update all
  translations when shared facts or intent change; a locale-specific correction can stay in that locale.
- Save and validate the local draft before review. Publishing follows `AGENTS.md` and
  `docs/seo/README.md`, including authorization for commit/push and the ship-time logbook entry.

## Required publishing rules

1. Keep one shared `topicId` for all supported languages (`src/i18n/locales.json`).
2. Keep `status` aligned:
   - all files `draft`, or
   - all files `published`
3. Use locale-specific slugs:
   - `en.mdx` -> English slug
   - `tr.mdx` -> Turkish slug
   - BG/SR/AR may retain the English slug; the locale prefix provides a distinct canonical URL.
4. Use localized tags for each language. Keep corresponding tags in the same order so
   language switching can find the translated topic. Serbian uses Cyrillic.
5. Fill all required frontmatter fields before publishing.
6. Ensure `updatedAt` is on or after `publishedAt`.
7. Keep `ctaPath` to a valid app pathname (for example `/resources`, `/spc-wall-panels`).
8. Set strategy fields in every locale:
   - `searchIntent`: `informational | commercial-investigation | comparison`
   - `targetAudience`: `mixed-b2b | installer | dealer | architect`
   - `funnelStage`: `awareness | consideration | decision`
9. Add non-empty `sourceUrls` with repo claim-check paths and external research URLs.
10. Set `authorName` to a name defined in `content/blog/authors.json`.
11. Write Turkish locale content with proper Turkish characters (`ç, ğ, ı, İ, ö, ş, ü`).

## Keyword workflow

1. Use one shared topic across all languages.
2. Define `primaryKeyword` and `secondaryKeywords` separately for each language.
3. Keep intent parity across locales even if phrasing differs.

## SEO checks before publish

1. Title and description are unique and locale-appropriate.
2. Excerpt is concise and useful for listing cards.
3. Cover image path is valid and image alt text is descriptive.
4. Avoid forced internal "related page" or bottom CTA blocks; add contextual CTAs only when they are genuinely useful.
5. Inline body images are section-relevant and use descriptive localized alt text.
6. If user videos are used, playable video blocks are placed in relevant sections.
7. Source traceability is present in frontmatter (`sourceUrls`).
8. Key terms are emphasized with selective bold formatting where it improves clarity (without overuse).
9. Validate content:

```bash
npm run blog:validate
npm run i18n:validate
```

## FAQ sections

Wrap a visible FAQ section in a `faq` code fence. The build renders it as normal article
headings and answers and generates FAQPage data from those same Markdown tokens.

````md
```faq
## Frequently asked questions

### What is the minimum order?

The minimum order is one container. The loading quantity depends on the product specification.
```
````

Use one block per article: an H2 section heading followed by H3 questions and complete
answers. Answers may contain multiple paragraphs, inline formatting, links and lists.
Close the fence before unrelated closing paragraphs or sales calls to action. Questions and
answers stay in the article's language; do not maintain separate schema-only copies.
Unclosed, empty, nested or duplicate-question blocks fail manifest generation.
Articles without an explicit FAQ block emit no FAQPage data. Schema is generated at build
time; the Cloudflare Worker does not parse Markdown or read source files at request time.

## CI/build guardrails

- Build runs blog validation before `next build`.
- PR checks run:
  - `npm run blog:validate`
  - `npm run typecheck`

The build also runs `npm run i18n:validate`. It checks the additional languages against
the English source for matching Markdown structure, localized internal links, preserved
media and unchanged authors, dates, status, claim sources and product names. Translate
image descriptions and titles; reuse original photographs and videos. Localized variants
of the technical layer diagram use the same source geometry and specifications.
