import {readFile, readdir} from 'node:fs/promises';
import assert from 'node:assert/strict';
import path from 'node:path';
import matter from 'gray-matter';
import MarkdownIt from 'markdown-it';
import {SUPPORTED_LOCALES} from './lib/locales.mjs';

const root = process.cwd();
const newLocales = ['bg', 'sr', 'ar'];
const markdown = new MarkdownIt();

function flatten(node, prefix = '', output = {}) {
  for (const [key, value] of Object.entries(node)) {
    const name = prefix ? `${prefix}.${key}` : key;
    if (typeof value === 'string') output[name] = value;
    else flatten(value, name, output);
  }
  return output;
}

function placeholders(value) {
  return [...value.matchAll(/\{([A-Za-z][A-Za-z0-9_]*)\}/g)].map((match) => match[1]).sort();
}

function checkText(value, label) {
  assert.ok(typeof value === 'string' && value.trim(), `${label}: missing text`);
  assert.ok(!/[⟦⟧\uFFFD]|\b900\d{3}\b/u.test(value), `${label}: invalid translation token or character`);
}

function identifiers(value) {
  return [...value.matchAll(/(?<![\w/])[A-Z]-\d{2,3}(?!\d)/g)].map((match) => match[0]).sort();
}

function htmlTags(value) {
  return value.match(/<\/?[a-z][^>]*>/gi) ?? [];
}

function normalizeSourceLink(url) {
  return url.replace(/^\/en(?=\/|$)/, '') || '/';
}

function contentStructure(content) {
  const tokens = markdown.parse(content, {});
  const counts = {};
  const links = [];
  const images = [];
  function visit(token) {
    // Text is expected to differ; document structure, links and media must survive.
    if (!['text', 'inline', 'softbreak', 'hardbreak'].includes(token.type)) {
      counts[token.type] = (counts[token.type] ?? 0) + 1;
    }
    if (token.type === 'link_open') links.push(token.attrGet('href'));
    if (token.type === 'image') images.push(token.attrGet('src'));
    token.children?.forEach(visit);
  }
  tokens.forEach(visit);
  return {counts, links, images};
}

const dictionaries = Object.fromEntries(await Promise.all(SUPPORTED_LOCALES.map(async (locale) => [
  locale, JSON.parse(await readFile(path.join(root, 'messages', `${locale}.json`), 'utf8')),
])));
const source = flatten(dictionaries.en);
for (const locale of SUPPORTED_LOCALES) {
  const translated = flatten(dictionaries[locale]);
  assert.deepEqual(Object.keys(translated).sort(), Object.keys(source).sort(), `${locale}: message key coverage`);
  for (const [key, value] of Object.entries(translated)) {
    checkText(value, `${locale}:${key}`);
    assert.deepEqual(placeholders(value), placeholders(source[key]), `${locale}:${key}: interpolation parameters`);
    if (newLocales.includes(locale)) assert.deepEqual(htmlTags(value), htmlTags(source[key]), `${locale}:${key}: rich text structure`);
    if (newLocales.includes(locale) && /(?:PanelNames|SkirtingCollectionNames)\./.test(key)) {
      assert.equal(value, source[key], `${locale}:${key}: product names must remain unchanged`);
    } else if (newLocales.includes(locale)) {
      const identity = /(?:address|email|phone|fax|gsm|company)$/i.test(key)
        || key === 'TermsOfServicePage.section14.content';
      const words = source[key].replace(/<[^>]+>/g, ' ').match(/[A-Za-z]{3,}/g) ?? [];
      if (!identity && words.length > 4) {
        const script = locale === 'ar' ? /[\u0600-\u06ff]/u : /[\u0400-\u04ff]/u;
        assert.ok(script.test(value), `${locale}:${key}: untranslated prose`);
      }
    }
  }
}

const resources = JSON.parse(await readFile(path.join(root, 'src/lib/resources.json'), 'utf8')).resources;
for (const resource of resources) {
  for (const locale of newLocales) {
    for (const field of ['title', 'summary']) checkText(resource[`${field}_${locale}`], `${resource.id}:${locale}:${field}`);
    if (resource.bullets) {
      assert.equal(resource[`bullets_${locale}`]?.length, resource.bullets.length, `${resource.id}:${locale}: bullets`);
      resource[`bullets_${locale}`].forEach((bullet, index) => checkText(bullet, `${resource.id}:${locale}:bullet-${index}`));
    }
  }
}

const topicsRoot = path.join(root, 'content/blog/topics');
const glossary = JSON.parse(await readFile(path.join(root, 'src/lib/glossary.json'), 'utf8'));
for (const section of glossary) {
  for (const locale of SUPPORTED_LOCALES) {
    checkText(section[locale], `glossary:${section.id}:${locale}`);
    for (const term of section.terms) {
      checkText(term[locale]?.name, `glossary:${term.id}:${locale}:name`);
      checkText(term[locale]?.definition, `glossary:${term.id}:${locale}:definition`);
      assert.deepEqual(
        (term[locale].definition.match(/\d+(?:[.,]\d+)*/g) ?? []).sort(),
        (term.en.definition.match(/\d+(?:[.,]\d+)*/g) ?? []).sort(),
        `glossary:${term.id}:${locale}: numerical limits`,
      );
    }
  }
}

const topicDirs = (await readdir(topicsRoot, {withFileTypes: true})).filter((entry) => entry.isDirectory());
for (const topic of topicDirs) {
  const original = matter(await readFile(path.join(topicsRoot, topic.name, 'en.mdx'), 'utf8'));
  const structure = contentStructure(original.content);
  for (const locale of newLocales) {
    const translated = matter(await readFile(path.join(topicsRoot, topic.name, `${locale}.mdx`), 'utf8'));
    checkText(translated.content, `${topic.name}:${locale}`);
    for (const [field, value] of Object.entries(translated.data)) {
      if (typeof value === 'string') checkText(value, `${topic.name}:${locale}:${field}`);
    }
    for (const field of ['topicId', 'status', 'authorName', 'publishedAt', 'updatedAt', 'coverImage', 'ctaPath', 'sourceUrls']) {
      assert.deepEqual(translated.data[field], original.data[field], `${topic.name}:${locale}:${field}: source parity`);
    }
    const actual = contentStructure(translated.content);
    assert.deepEqual(actual.counts, structure.counts, `${topic.name}:${locale}: Markdown structure`);
    assert.deepEqual(actual.images.map((image) => image.replace(`/${locale}-layer-diagram.svg`, '/en-layer-diagram.svg')), structure.images, `${topic.name}:${locale}: media parity`);
    assert.deepEqual(actual.links.map((url) => url.replace(new RegExp(`^/${locale}(?=/|$)`), '') || '/'), structure.links.map(normalizeSourceLink), `${topic.name}:${locale}: localized links`);
    assert.deepEqual(identifiers(translated.content), identifiers(original.content), `${topic.name}:${locale}: product and drawing identifiers`);
    assert.deepEqual(identifiers(translated.data.coverImageAlt ?? ''), identifiers(original.data.coverImageAlt ?? ''), `${topic.name}:${locale}: cover image identifiers`);
  }
}

console.log(`Localization validation passed: ${SUPPORTED_LOCALES.length} languages, ${Object.keys(source).length} message keys, ${resources.length} resources and ${topicDirs.length * newLocales.length} translated articles.`);
