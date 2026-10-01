import path from 'node:path';
import {mkdir, writeFile, access, readFile} from 'node:fs/promises';
import {SUPPORTED_LOCALES} from './lib/locales.mjs';

const args = process.argv.slice(2);
const topicFlagIndex = args.findIndex((arg) => arg === '--topic' || arg === '-t');
const topicId = topicFlagIndex >= 0 ? args[topicFlagIndex + 1] : '';

function exitWithUsage(message) {
  console.error(message);
  console.error('Usage: npm run blog:new -- --topic <topic-id>');
  process.exit(1);
}

if (!topicId) {
  exitWithUsage('Missing topic id.');
}

if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(topicId)) {
  exitWithUsage('Topic id must be lowercase kebab-case (a-z, 0-9, hyphen).');
}

const today = new Date().toISOString().slice(0, 10);
const topicDir = path.join(process.cwd(), 'content', 'blog', 'topics', topicId);
const BLOG_AUTHORS_PATH = path.join(process.cwd(), 'content', 'blog', 'authors.json');
const FALLBACK_AUTHOR_NAME = 'Kermit Floor Team';

function parseAuthorRegistry(raw) {
  const parsed = JSON.parse(raw);
  const entries = Array.isArray(parsed) ? parsed : parsed?.authors;
  if (!Array.isArray(entries) || entries.length === 0) {
    throw new Error('Author registry must contain at least one author.');
  }

  const normalized = entries.map((entry, index) => {
    if (typeof entry === 'string') {
      const name = entry.trim();
      if (!name) {
        throw new Error(`Invalid author entry at index ${index}.`);
      }
      return {name, isDefault: false};
    }

    if (!entry || typeof entry !== 'object') {
      throw new Error(`Invalid author entry at index ${index}.`);
    }

    const name = typeof entry.name === 'string' ? entry.name.trim() : '';
    if (!name) {
      throw new Error(`Author entry at index ${index} is missing a valid "name".`);
    }

    return {
      name,
      isDefault: entry.isDefault === true || entry.default === true,
    };
  });

  const defaultAuthor = normalized.find((entry) => entry.isDefault);
  return defaultAuthor?.name ?? normalized[0].name;
}

async function getDefaultAuthorName() {
  try {
    const raw = await readFile(BLOG_AUTHORS_PATH, 'utf8');
    return parseAuthorRegistry(raw);
  } catch (error) {
    const nodeError = error;
    if (nodeError?.code === 'ENOENT') {
      console.warn(`Author registry not found at content/blog/authors.json. Falling back to "${FALLBACK_AUTHOR_NAME}".`);
      return FALLBACK_AUTHOR_NAME;
    }
    console.warn(
      `Could not read content/blog/authors.json (${error instanceof Error ? error.message : String(error)}). Falling back to "${FALLBACK_AUTHOR_NAME}".`,
    );
    return FALLBACK_AUTHOR_NAME;
  }
}

const defaultAuthorName = await getDefaultAuthorName();

const englishTemplate = `---
topicId: ${topicId}
locale: en
slug: ${topicId}
title: ""
description: ""
excerpt: ""
primaryKeyword: ""
secondaryKeywords:
  - ""
tags:
  - ""
publishedAt: "${today}"
updatedAt: "${today}"
status: draft
searchIntent: informational
targetAudience: mixed-b2b
funnelStage: awareness
sourceUrls: [] # Add the claim sources and research actually used in this article.
coverImage: /images/hero-images/about-us-hero-image.jpg
coverImageAlt: ""
authorName: ${JSON.stringify(defaultAuthorName)}
ctaPath: /resources
---

## Introduction

Write the English version of the post here.
`;

const turkishTemplate = `---
topicId: ${topicId}
locale: tr
slug: ${topicId}-tr
title: ""
description: ""
excerpt: ""
primaryKeyword: ""
secondaryKeywords:
  - ""
tags:
  - ""
publishedAt: "${today}"
updatedAt: "${today}"
status: draft
searchIntent: informational
targetAudience: mixed-b2b
funnelStage: awareness
sourceUrls: [] # Add the claim sources and research actually used in this article.
coverImage: /images/hero-images/about-us-hero-image.jpg
coverImageAlt: ""
authorName: ${JSON.stringify(defaultAuthorName)}
ctaPath: /resources
---

## Giriş

Yazının Türkçe sürümünü buraya yazın.
`;

try {
  await access(topicDir);
  exitWithUsage(`Topic directory already exists: ${topicDir}`);
} catch (error) {
  const nodeError = error;
  if (nodeError?.code !== 'ENOENT') {
    throw error;
  }
}

await mkdir(topicDir, {recursive: true});
const introductions = {
  bg: '## Въведение\n\nНапишете българската версия на статията тук.',
  sr: '## Увод\n\nОвде напишите српску верзију чланка.',
  ar: '## مقدمة\n\nاكتب النسخة العربية من المقال هنا.',
};
await Promise.all(SUPPORTED_LOCALES.map((locale) => {
  const template = locale === 'en' ? englishTemplate : locale === 'tr' ? turkishTemplate
    : englishTemplate.replace('locale: en', `locale: ${locale}`)
      .replace(`slug: ${topicId}`, `slug: ${topicId}-${locale}`)
      .replace('## Introduction\n\nWrite the English version of the post here.', introductions[locale]);
  return writeFile(path.join(topicDir, `${locale}.mdx`), template, 'utf8');
}));

console.log(`Created ${SUPPORTED_LOCALES.length}-language blog topic scaffold at content/blog/topics/${topicId}`);
