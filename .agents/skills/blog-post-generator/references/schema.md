# Blog Frontmatter Schema

All generated files must include this frontmatter shape.

## Required Fields

- `topicId`: string, shared across all locale files
- `locale`: a supported language from `src/i18n/locales.json`
- `slug`: locale-specific kebab-case slug
- `title`: localized title
- `description`: localized meta description
- `excerpt`: localized listing summary
- `primaryKeyword`: locale-specific primary target keyword
- `secondaryKeywords`: non-empty array of locale-specific keywords
- `tags`: non-empty localized array; keep corresponding tags in the same order across languages
- `publishedAt`: ISO date `YYYY-MM-DD`
- `updatedAt`: ISO date `YYYY-MM-DD`, must be on or after `publishedAt`
- `status`: `draft` or `published` (all locales must match for publish)
- `searchIntent`: `informational`, `commercial-investigation`, or `comparison`
- `targetAudience`: `mixed-b2b`, `installer`, `dealer`, or `architect`
- `funnelStage`: `awareness`, `consideration`, or `decision`
- `sourceUrls`: non-empty array of repo paths and/or valid `http(s)` URLs.
  - Include product/spec claim-check sources.
  - Include external research URLs used in drafting.
  - Do **not** include raw external source URLs of selected web images in frontmatter.
  - Store web-image source provenance in an internal trace file instead (for example `.codex/blog-media-sources/<topicId>.json`).
- `coverImage`: absolute app path (starts with `/`)
- `coverImageAlt`: descriptive localized alt text
- `authorName`: string, must match a predefined author name from `content/blog/authors.json`
- `ctaPath`: optional valid route path from `src/navigation.ts`

## File Contract

- One file per supported language: `content/blog/topics/<topicId>/<locale>.mdx`
- Bulgarian, Serbian and Arabic may retain the English slug beneath their locale prefix.

## Validation Notes

- Slugs must be unique per locale.
- Missing locale files are invalid.
- `published` status must be set on all locale files together.
- `sourceUrls` cannot be empty.
- `authorName` should be selected from the repo author registry (`content/blog/authors.json`) for consistency.
- User video references are inserted in MDX body as playable blocks (not as frontmatter fields).
