import path from 'node:path';
import {access, readdir, readFile} from 'node:fs/promises';
import matter from 'gray-matter';

const BLOG_ROOT = path.join(process.cwd(), 'content', 'blog', 'topics');
const BLOG_AUTHORS_PATH = path.join(process.cwd(), 'content', 'blog', 'authors.json');
const REQUIRED_STRING_FIELDS = [
  'topicId',
  'locale',
  'slug',
  'title',
  'description',
  'excerpt',
  'primaryKeyword',
  'publishedAt',
  'updatedAt',
  'status',
  'coverImage',
  'coverImageAlt',
  'authorName',
];
const SEARCH_INTENTS = ['informational', 'commercial-investigation', 'comparison'];
const TARGET_AUDIENCES = ['mixed-b2b', 'installer', 'dealer', 'architect'];
const FUNNEL_STAGES = ['awareness', 'consideration', 'decision'];
const SUSPECT_MOJIBAKE_PREFIXES = new Set([0x00C2, 0x00C3, 0x00C4, 0x00C5]);
const PROMPT_LEAK_PATTERNS = [
  {
    pattern:
      /\byour (?:high-level|list|draft|prompt|preferred term|secondary keywords?|core focus|use-case note|key user claim)\b/gi,
    reason: 'references the author prompt instead of the reader topic',
  },
  {
    pattern: /\byou mentioned\b/gi,
    reason: 'references the author prompt instead of the reader topic',
  },
  {
    pattern: /\byou asked\b/gi,
    reason: 'references the author prompt instead of the reader topic',
  },
  {
    pattern: /\bprofessional article\b/gi,
    reason: 'comments on the article draft instead of the subject',
  },
  {
    pattern: /\bthat wording is better than\b/gi,
    reason: 'comments on wording quality instead of the subject',
  },
  {
    pattern: /\bthis keeps the article\b/gi,
    reason: 'comments on the article draft instead of the subject',
  },
  {
    pattern: /Bu anlatım hem güçlü hem de profesyonel bir anlatımdır/giu,
    reason: 'comments on wording quality instead of the subject',
  },
  {
    pattern: /Bu yüksek seviyeli (?:bilgi|noktalar)/giu,
    reason: 'references planning notes instead of the reader topic',
  },
  {
    pattern: /Sizin (?:özellikle|üçüncü|verdiğiniz|paylaştığınız|notunuz)/giu,
    reason: 'references the author prompt instead of the reader topic',
  },
  {
    pattern: /ifadesi nasıl doğru anlatılmalı/giu,
    reason: 'comments on drafting instead of the subject',
  },
  {
    pattern: /blog içeriğinde doğru çerçeve/giu,
    reason: 'comments on drafting instead of the subject',
  },
  {
    pattern: /Bu ifade neden daha güçlü/giu,
    reason: 'comments on wording quality instead of the subject',
  },
  {
    pattern: /Bu yaklaşım, kullanım alanını doğru tarif eder ve gereksiz iddialardan kaçınır/giu,
    reason: 'comments on article framing instead of the subject',
  },
];

function getLineAndColumn(source, index) {
  let line = 1;
  let column = 1;
  for (let i = 0; i < index; i += 1) {
    if (source[i] === '\n') {
      line += 1;
      column = 1;
    } else {
      column += 1;
    }
  }
  return {line, column};
}

function formatCodePoint(value) {
  return `U+${value.toString(16).toUpperCase().padStart(4, '0')}`;
}

function getSnippet(source, index, radius = 16) {
  return source
    .slice(Math.max(0, index - radius), Math.min(source.length, index + radius))
    .replace(/\r/g, '\\r')
    .replace(/\n/g, '\\n');
}

function findLikelyMojibake(raw) {
  const replacementIndex = raw.indexOf('\uFFFD');
  if (replacementIndex >= 0) {
    return {
      index: replacementIndex,
      reason: 'contains Unicode replacement character (�)',
      codePoints: [0xFFFD],
    };
  }

  for (let index = 0; index < raw.length - 1; index += 1) {
    const current = raw.charCodeAt(index);
    const next = raw.charCodeAt(index + 1);

    // Common UTF-8 bytes decoded as Latin-1/Windows-125x (e.g. Ä±, Ã¼, ÅŸ)
    if (SUSPECT_MOJIBAKE_PREFIXES.has(current) && next >= 0x0080) {
      return {
        index,
        reason: 'contains a likely mojibake sequence (UTF-8 text decoded with a legacy encoding)',
        codePoints: [current, next],
      };
    }

    // Curly punctuation mojibake (e.g. â€™, â€“)
    if (current === 0x00E2 && next === 0x20AC) {
      return {
        index,
        reason: 'contains likely mojibake smart punctuation sequence',
        codePoints: [current, next, raw.charCodeAt(index + 2)].filter((value) => Number.isFinite(value)),
      };
    }
  }

  return null;
}

function validateNoMojibake(raw, filePath, errors) {
  const match = findLikelyMojibake(raw);
  if (!match) {
    return;
  }

  const {line, column} = getLineAndColumn(raw, match.index);
  const codePoints = match.codePoints.map((value) => formatCodePoint(value)).join(', ');
  const snippet = getSnippet(raw, match.index);

  errors.push(
    `${filePath}:${line}:${column}: ${match.reason}. Code points: ${codePoints}. Snippet: "${snippet}"`,
  );
}

function validateNoPromptLeaks(raw, filePath, errors) {
  for (const {pattern, reason} of PROMPT_LEAK_PATTERNS) {
    pattern.lastIndex = 0;
    let match;
    while ((match = pattern.exec(raw)) !== null) {
      const {line, column} = getLineAndColumn(raw, match.index);
      const snippet = getSnippet(raw, match.index, 36);
      errors.push(`${filePath}:${line}:${column}: likely prompt/drafting leak: ${reason}. Snippet: "${snippet}"`);
    }
  }
}

function normalizeTag(value, locale = 'en') {
  const lowerCaseLocale = locale === 'tr' ? 'tr-TR' : 'en-US';
  return String(value)
    .trim()
    .toLocaleLowerCase(lowerCaseLocale)
    .normalize('NFC')
    .replace(/[^\p{L}\p{N}\s-]/gu, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
}

function isIsoDate(value) {
  if (typeof value !== 'string' || !/^\d{4}-\d{2}-\d{2}$/.test(value)) {
    return false;
  }
  const date = new Date(`${value}T00:00:00.000Z`);
  if (Number.isNaN(date.valueOf())) {
    return false;
  }
  return date.toISOString().startsWith(value);
}

function isValidHttpUrl(value) {
  try {
    const parsed = new URL(value);
    return parsed.protocol === 'http:' || parsed.protocol === 'https:';
  } catch {
    return false;
  }
}

function isValidSourceReference(value) {
  if (typeof value !== 'string') {
    return false;
  }

  const trimmed = value.trim();
  if (trimmed.length === 0) {
    return false;
  }

  if (trimmed.includes('://')) {
    return isValidHttpUrl(trimmed);
  }

  return true;
}

async function exists(filePath) {
  try {
    await access(filePath);
    return true;
  } catch {
    return false;
  }
}

async function getKnownCtaPaths() {
  const navigationPath = path.join(process.cwd(), 'src', 'navigation.ts');
  const source = await readFile(navigationPath, 'utf8');
  const matches = source.matchAll(/^\s*'([^']+)':\s*{\s*$/gm);
  const knownPaths = new Set();
  for (const match of matches) {
    knownPaths.add(match[1]);
  }
  return knownPaths;
}

function parseBlogAuthorsRegistry(raw) {
  let parsed;
  try {
    parsed = JSON.parse(raw);
  } catch (error) {
    throw new Error(`Invalid JSON in ${BLOG_AUTHORS_PATH}.`);
  }

  const entries = Array.isArray(parsed) ? parsed : parsed?.authors;
  if (!Array.isArray(entries)) {
    throw new Error(`Invalid author registry in ${BLOG_AUTHORS_PATH}. Expected an array or { "authors": [] }.`);
  }

  const authorNames = new Set();
  const authorIds = new Set();

  for (const [index, entry] of entries.entries()) {
    if (typeof entry === 'string') {
      const name = entry.trim();
      if (!name) {
        throw new Error(`Invalid author entry at index ${index} in ${BLOG_AUTHORS_PATH}. Empty string is not allowed.`);
      }
      authorNames.add(name);
      continue;
    }

    if (!entry || typeof entry !== 'object') {
      throw new Error(`Invalid author entry at index ${index} in ${BLOG_AUTHORS_PATH}. Expected string or object.`);
    }

    const name = typeof entry.name === 'string' ? entry.name.trim() : '';
    if (!name) {
      throw new Error(`Invalid author entry at index ${index} in ${BLOG_AUTHORS_PATH}. "name" is required.`);
    }

    if (authorNames.has(name)) {
      throw new Error(`Duplicate author name "${name}" in ${BLOG_AUTHORS_PATH}.`);
    }
    authorNames.add(name);

    if ('id' in entry) {
      const id = typeof entry.id === 'string' ? entry.id.trim() : '';
      if (!id) {
        throw new Error(`Invalid author entry at index ${index} in ${BLOG_AUTHORS_PATH}. "id" must be a non-empty string.`);
      }
      if (authorIds.has(id)) {
        throw new Error(`Duplicate author id "${id}" in ${BLOG_AUTHORS_PATH}.`);
      }
      authorIds.add(id);
    }
  }

  if (authorNames.size === 0) {
    throw new Error(`No authors defined in ${BLOG_AUTHORS_PATH}. Add at least one author.`);
  }

  return {
    authorNames,
  };
}

async function getBlogAuthorRegistry() {
  let raw;
  try {
    raw = await readFile(BLOG_AUTHORS_PATH, 'utf8');
  } catch (error) {
    const nodeError = error;
    if (nodeError?.code === 'ENOENT') {
      throw new Error(`Missing blog author registry: ${BLOG_AUTHORS_PATH}`);
    }
    throw error;
  }

  return parseBlogAuthorsRegistry(raw);
}

function validateFrontmatterShape(frontmatter, filePath, errors) {
  for (const field of REQUIRED_STRING_FIELDS) {
    if (typeof frontmatter[field] !== 'string' || frontmatter[field].trim() === '') {
      errors.push(`${filePath}: Missing or invalid string field "${field}".`);
    }
  }

  if (!Array.isArray(frontmatter.secondaryKeywords) || frontmatter.secondaryKeywords.length === 0) {
    errors.push(`${filePath}: "secondaryKeywords" must be a non-empty array.`);
  } else if (frontmatter.secondaryKeywords.some((item) => typeof item !== 'string' || item.trim() === '')) {
    errors.push(`${filePath}: "secondaryKeywords" must contain non-empty strings.`);
  }

  if (!Array.isArray(frontmatter.tags) || frontmatter.tags.length === 0) {
    errors.push(`${filePath}: "tags" must be a non-empty array.`);
  } else if (
    frontmatter.tags.some(
      (item) => typeof item !== 'string' || normalizeTag(item, frontmatter.locale === 'tr' ? 'tr' : 'en') === '',
    )
  ) {
    errors.push(`${filePath}: "tags" must contain values that normalize to non-empty slugs.`);
  }

  if (!['en', 'tr'].includes(frontmatter.locale)) {
    errors.push(`${filePath}: "locale" must be "en" or "tr".`);
  }

  if (!['draft', 'published'].includes(frontmatter.status)) {
    errors.push(`${filePath}: "status" must be "draft" or "published".`);
  }

  if (!SEARCH_INTENTS.includes(frontmatter.searchIntent)) {
    errors.push(
      `${filePath}: "searchIntent" must be one of ${SEARCH_INTENTS.map((value) => `"${value}"`).join(', ')}.`,
    );
  }

  if (!TARGET_AUDIENCES.includes(frontmatter.targetAudience)) {
    errors.push(
      `${filePath}: "targetAudience" must be one of ${TARGET_AUDIENCES.map((value) => `"${value}"`).join(', ')}.`,
    );
  }

  if (!FUNNEL_STAGES.includes(frontmatter.funnelStage)) {
    errors.push(
      `${filePath}: "funnelStage" must be one of ${FUNNEL_STAGES.map((value) => `"${value}"`).join(', ')}.`,
    );
  }

  if (!Array.isArray(frontmatter.sourceUrls) || frontmatter.sourceUrls.length === 0) {
    errors.push(`${filePath}: "sourceUrls" must be a non-empty array.`);
  } else if (frontmatter.sourceUrls.some((item) => !isValidSourceReference(item))) {
    errors.push(
      `${filePath}: "sourceUrls" must contain non-empty repo paths or valid http(s) URLs.`,
    );
  }

  if (typeof frontmatter.slug === 'string' && !/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(frontmatter.slug)) {
    errors.push(`${filePath}: "slug" must be lowercase kebab-case.`);
  }

  if (!isIsoDate(frontmatter.publishedAt)) {
    errors.push(`${filePath}: "publishedAt" must be an ISO date (YYYY-MM-DD).`);
  }

  if (!isIsoDate(frontmatter.updatedAt)) {
    errors.push(`${filePath}: "updatedAt" must be an ISO date (YYYY-MM-DD).`);
  }

  if (isIsoDate(frontmatter.publishedAt) && isIsoDate(frontmatter.updatedAt)) {
    const published = new Date(`${frontmatter.publishedAt}T00:00:00.000Z`);
    const updated = new Date(`${frontmatter.updatedAt}T00:00:00.000Z`);
    if (updated < published) {
      errors.push(`${filePath}: "updatedAt" must be the same day or after "publishedAt".`);
    }
  }
}

async function main() {
  const errors = [];
  const knownCtaPaths = await getKnownCtaPaths();
  const authorRegistry = await getBlogAuthorRegistry();
  const slugMap = {
    en: new Map(),
    tr: new Map(),
  };

  let topicDirs = [];
  try {
    const entries = await readdir(BLOG_ROOT, {withFileTypes: true});
    topicDirs = entries.filter((entry) => entry.isDirectory()).map((entry) => entry.name).sort();
  } catch (error) {
    const nodeError = error;
    if (nodeError?.code === 'ENOENT') {
      console.log('No blog topics found at content/blog/topics. Validation passed.');
      return;
    }
    throw error;
  }

  for (const topicId of topicDirs) {
    const topicDir = path.join(BLOG_ROOT, topicId);
    const localeFiles = {
      en: path.join(topicDir, 'en.mdx'),
      tr: path.join(topicDir, 'tr.mdx'),
    };

    for (const locale of ['en', 'tr']) {
      if (!(await exists(localeFiles[locale]))) {
        errors.push(`${topicDir}: Missing ${locale}.mdx.`);
      }
    }

    if (errors.some((item) => item.startsWith(topicDir))) {
      continue;
    }

    const enRaw = await readFile(localeFiles.en, 'utf8');
    const trRaw = await readFile(localeFiles.tr, 'utf8');
    validateNoMojibake(enRaw, localeFiles.en, errors);
    validateNoMojibake(trRaw, localeFiles.tr, errors);
    validateNoPromptLeaks(enRaw, localeFiles.en, errors);
    validateNoPromptLeaks(trRaw, localeFiles.tr, errors);
    const enData = matter(enRaw).data;
    const trData = matter(trRaw).data;

    validateFrontmatterShape(enData, localeFiles.en, errors);
    validateFrontmatterShape(trData, localeFiles.tr, errors);

    if (enData.topicId !== topicId) {
      errors.push(`${localeFiles.en}: topicId must match directory name "${topicId}".`);
    }
    if (trData.topicId !== topicId) {
      errors.push(`${localeFiles.tr}: topicId must match directory name "${topicId}".`);
    }

    if (enData.topicId !== trData.topicId) {
      errors.push(`${topicDir}: topicId mismatch between en.mdx and tr.mdx.`);
    }

    if (enData.locale !== 'en') {
      errors.push(`${localeFiles.en}: locale must be "en".`);
    }
    if (trData.locale !== 'tr') {
      errors.push(`${localeFiles.tr}: locale must be "tr".`);
    }

    if (enData.status === 'published' || trData.status === 'published') {
      if (!(enData.status === 'published' && trData.status === 'published')) {
        errors.push(`${topicDir}: published status must be true in both locales together.`);
      }
    }

    for (const [locale, data, filePath] of [
      ['en', enData, localeFiles.en],
      ['tr', trData, localeFiles.tr],
    ]) {
      if (typeof data.slug === 'string') {
        const existing = slugMap[locale].get(data.slug);
        if (existing) {
          errors.push(`${filePath}: duplicate slug "${data.slug}" already used in ${existing}.`);
        } else {
          slugMap[locale].set(data.slug, filePath);
        }
      }

      if (typeof data.ctaPath === 'string' && data.ctaPath.trim() !== '' && !knownCtaPaths.has(data.ctaPath)) {
        errors.push(`${filePath}: unknown ctaPath "${data.ctaPath}".`);
      }

      if (
        typeof data.authorName === 'string' &&
        data.authorName.trim() !== '' &&
        !authorRegistry.authorNames.has(data.authorName.trim())
      ) {
        errors.push(
          `${filePath}: unknown authorName "${data.authorName}". Add it to content/blog/authors.json or use a defined author.`,
        );
      }
    }
  }

  if (errors.length > 0) {
    console.error('Blog validation failed:');
    for (const error of errors) {
      console.error(`- ${error}`);
    }
    process.exit(1);
  }

  console.log(`Blog validation passed for ${topicDirs.length} topic(s).`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
