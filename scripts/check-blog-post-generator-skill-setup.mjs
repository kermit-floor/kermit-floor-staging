import {readFile} from 'node:fs/promises';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import matter from 'gray-matter';

// Resolve from this script so the check is independent of the caller's directory.
const repoRoot = fileURLToPath(new URL('../', import.meta.url));
const skillRoot = '.agents/skills/blog-post-generator';
const requiredFiles = [
  `${skillRoot}/SKILL.md`,
  `${skillRoot}/agents/openai.yaml`,
  ...['schema', 'claim-sources', 'writing-templates', 'seo-rules', 'media-workflow']
    .map((name) => `${skillRoot}/references/${name}.md`),
  'content/blog/authors.json',
  'docs/blog-authoring.md',
  'scripts/new-blog-topic.mjs',
  'scripts/validate-blog-content.mjs',
];
const failures = [];
const sources = new Map();

for (const relativePath of requiredFiles) {
  try {
    const source = await readFile(path.join(repoRoot, relativePath), 'utf8');
    if (!source.trim()) {
      throw new Error('file is empty');
    }
    sources.set(relativePath, source);
  } catch (error) {
    failures.push(`${relativePath}: ${error.message}`);
  }
}

function checkData(relativePath, parse, validate) {
  if (!sources.has(relativePath)) return;
  try {
    validate(parse(sources.get(relativePath)));
  } catch (error) {
    failures.push(`${relativePath}: ${error.message}`);
  }
}

function requireText(value, field) {
  if (typeof value !== 'string' || !value.trim()) {
    throw new Error(`${field} must be a non-empty string`);
  }
}

checkData(`${skillRoot}/SKILL.md`, (source) => matter(source).data, (data) => {
  if (data.name !== 'blog-post-generator') {
    throw new Error('frontmatter name must be blog-post-generator');
  }
  requireText(data.description, 'frontmatter description');
});

checkData(`${skillRoot}/agents/openai.yaml`, (source) => matter(`---\n${source}\n---`).data, (data) => {
  const ui = data.interface;
  requireText(ui?.display_name, 'interface.display_name');
  requireText(ui?.short_description, 'interface.short_description');
  if (ui.short_description.length < 25 || ui.short_description.length > 64) {
    throw new Error('interface.short_description must contain 25–64 characters');
  }
  requireText(ui?.default_prompt, 'interface.default_prompt');
  if (!ui.default_prompt.includes('$blog-post-generator')) {
    throw new Error('interface.default_prompt must name $blog-post-generator');
  }
  const implicitInvocation = data.policy?.allow_implicit_invocation;
  if (implicitInvocation !== undefined && typeof implicitInvocation !== 'boolean') {
    throw new Error('policy.allow_implicit_invocation must be a boolean when supplied');
  }
});

checkData('content/blog/authors.json', JSON.parse, (registry) => {
  const authors = Array.isArray(registry) ? registry : registry?.authors;
  if (!Array.isArray(authors) || authors.length === 0) {
    throw new Error('registry must contain at least one author');
  }
  authors.forEach((author, index) => {
    requireText(typeof author === 'string' ? author : author?.name, `author ${index} name`);
  });
});

if (failures.length > 0) {
  console.error('Repository blog skill setup check failed:');
  failures.forEach((failure) => console.error(`- ${failure}`));
  process.exitCode = 1;
} else {
  console.log(`Repository blog skill setup check passed (${skillRoot}).`);
}
