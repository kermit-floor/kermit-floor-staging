import path from 'node:path';
import {readdir, readFile} from 'node:fs/promises';

const ROOT = process.cwd();
const SUSPECT_MOJIBAKE_PREFIXES = new Set([0x00C2, 0x00C3, 0x00C4, 0x00C5]);

function formatCodePoint(value) {
  return `U+${value.toString(16).toUpperCase().padStart(4, '0')}`;
}

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

function getSnippet(source, index, radius = 20) {
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

    if (SUSPECT_MOJIBAKE_PREFIXES.has(current) && next >= 0x0080) {
      return {
        index,
        reason: 'contains a likely mojibake sequence (UTF-8 text decoded with a legacy encoding)',
        codePoints: [current, next],
      };
    }

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

function findSuspiciousQuestionReplacement(text) {
  function isLetter(value) {
    return value != null && /\p{L}/u.test(value);
  }

  function isBoundary(value) {
    return value == null || /[\s>"'“(\[{]/u.test(value);
  }

  function isLikelyUrlQuery(index) {
    const after = text.slice(index, index + 40);
    if (!/^\?[A-Za-z0-9_-]+=/.test(after)) {
      return false;
    }

    const before = text.slice(Math.max(0, index - 120), index);
    const lastToken = before.split(/[\s<>"'“”()[\]{}]/u).pop() ?? '';
    return lastToken.includes('/') || lastToken.includes('http') || lastToken.includes('www.');
  }

  for (let index = 0; index < text.length; index += 1) {
    if (text[index] !== '?') {
      continue;
    }

    if (isLikelyUrlQuery(index)) {
      continue;
    }

    const prev = index > 0 ? text[index - 1] : null;
    const next = index + 1 < text.length ? text[index + 1] : null;

    if ((isLetter(prev) && isLetter(next)) || (isBoundary(prev) && isLetter(next))) {
      return {
        index,
        reason: 'contains a suspicious "?" inside/at the start of a Turkish word (likely character loss)',
      };
    }
  }

  return null;
}

function collectJsonStringIssues(node, pathParts, issues) {
  if (typeof node === 'string') {
    const questionIssue = findSuspiciousQuestionReplacement(node);
    if (questionIssue) {
      issues.push({
        kind: 'suspicious-question',
        path: pathParts.join('.'),
        ...questionIssue,
        source: node,
      });
    }
    return;
  }

  if (Array.isArray(node)) {
    node.forEach((value, index) => collectJsonStringIssues(value, [...pathParts, String(index)], issues));
    return;
  }

  if (node && typeof node === 'object') {
    for (const [key, value] of Object.entries(node)) {
      collectJsonStringIssues(value, [...pathParts, key], issues);
    }
  }
}

async function listTurkishBlogFiles() {
  const root = path.join(ROOT, 'content', 'blog', 'topics');
  const files = [];

  async function walk(dir) {
    let entries;
    try {
      entries = await readdir(dir, {withFileTypes: true});
    } catch (error) {
      const nodeError = error;
      if (nodeError?.code === 'ENOENT') {
        return;
      }
      throw error;
    }

    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        await walk(fullPath);
        continue;
      }
      if (entry.isFile() && entry.name === 'tr.mdx') {
        files.push(fullPath);
      }
    }
  }

  await walk(root);
  return files.sort((a, b) => a.localeCompare(b));
}

function reportRawIssue(filePath, issue) {
  const {line, column} = getLineAndColumn(issue.source, issue.index);
  const snippet = getSnippet(issue.source, issue.index);
  if (issue.codePoints) {
    const codePoints = issue.codePoints.map((value) => formatCodePoint(value)).join(', ');
    return `${filePath}:${line}:${column}: ${issue.reason}. Code points: ${codePoints}. Snippet: "${snippet}"`;
  }
  return `${filePath}:${line}:${column}: ${issue.reason}. Snippet: "${snippet}"`;
}

async function validateJsonFile(filePath, errors) {
  const raw = await readFile(filePath, 'utf8');
  const mojibakeIssue = findLikelyMojibake(raw);
  if (mojibakeIssue) {
    errors.push(reportRawIssue(filePath, {...mojibakeIssue, source: raw}));
  }

  let parsed;
  try {
    parsed = JSON.parse(raw);
  } catch (error) {
    errors.push(`${filePath}: invalid JSON (${error.message})`);
    return;
  }

  const stringIssues = [];
  collectJsonStringIssues(parsed, [], stringIssues);
  for (const issue of stringIssues) {
    const {line, column} = getLineAndColumn(issue.source, issue.index);
    const snippet = getSnippet(issue.source, issue.index);
    errors.push(
      `${filePath}:${issue.path || '<root>'}:${line}:${column}: ${issue.reason}. Snippet: "${snippet}"`,
    );
  }
}

async function validateTurkishMdxFile(filePath, errors) {
  const raw = await readFile(filePath, 'utf8');

  const mojibakeIssue = findLikelyMojibake(raw);
  if (mojibakeIssue) {
    errors.push(reportRawIssue(filePath, {...mojibakeIssue, source: raw}));
  }

  const questionIssue = findSuspiciousQuestionReplacement(raw);
  if (questionIssue) {
    errors.push(reportRawIssue(filePath, {...questionIssue, source: raw}));
  }
}

async function main() {
  const errors = [];

  await validateJsonFile(path.join(ROOT, 'messages', 'tr.json'), errors);

  const turkishBlogFiles = await listTurkishBlogFiles();
  for (const filePath of turkishBlogFiles) {
    await validateTurkishMdxFile(filePath, errors);
  }

  if (errors.length > 0) {
    console.error('Text integrity validation failed:');
    for (const error of errors) {
      console.error(`- ${error}`);
    }
    process.exit(1);
  }

  console.log(
    `Text integrity validation passed for messages/tr.json and ${turkishBlogFiles.length} Turkish blog file(s).`,
  );
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
