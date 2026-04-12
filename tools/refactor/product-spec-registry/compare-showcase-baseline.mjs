import fs from 'node:fs/promises';
import path from 'node:path';

function isObject(value) {
  return value !== null && typeof value === 'object' && !Array.isArray(value);
}

function diffValues(left, right, currentPath = 'root', diffs = [], maxDiffs = 200) {
  if (diffs.length >= maxDiffs) {
    return diffs;
  }

  if (Array.isArray(left) && Array.isArray(right)) {
    if (left.length !== right.length) {
      diffs.push(`${currentPath}: array length ${left.length} !== ${right.length}`);
    }

    const maxLength = Math.max(left.length, right.length);
    for (let index = 0; index < maxLength && diffs.length < maxDiffs; index += 1) {
      diffValues(left[index], right[index], `${currentPath}[${index}]`, diffs, maxDiffs);
    }
    return diffs;
  }

  if (isObject(left) && isObject(right)) {
    const leftKeys = Object.keys(left).sort();
    const rightKeys = Object.keys(right).sort();
    const allKeys = Array.from(new Set([...leftKeys, ...rightKeys])).sort();

    for (const key of allKeys) {
      if (!(key in left)) {
        diffs.push(`${currentPath}.${key}: missing on left`);
        continue;
      }
      if (!(key in right)) {
        diffs.push(`${currentPath}.${key}: missing on right`);
        continue;
      }

      diffValues(left[key], right[key], `${currentPath}.${key}`, diffs, maxDiffs);
      if (diffs.length >= maxDiffs) {
        return diffs;
      }
    }
    return diffs;
  }

  const leftSerialized = JSON.stringify(left);
  const rightSerialized = JSON.stringify(right);
  if (leftSerialized !== rightSerialized) {
    diffs.push(`${currentPath}: ${leftSerialized} !== ${rightSerialized}`);
  }

  return diffs;
}

async function main() {
  const baselineArg = process.argv[2];
  const candidateArg = process.argv[3];
  const reportArg = process.argv[4];

  if (!baselineArg || !candidateArg) {
    console.error('Usage: node compare-showcase-baseline.mjs <baseline.json> <candidate.json> [report.json]');
    process.exit(1);
  }

  const repoRoot = process.cwd();
  const baselinePath = path.isAbsolute(baselineArg) ? baselineArg : path.join(repoRoot, baselineArg);
  const candidatePath = path.isAbsolute(candidateArg) ? candidateArg : path.join(repoRoot, candidateArg);

  const [baseline, candidate] = await Promise.all([
    fs.readFile(baselinePath, 'utf8'),
    fs.readFile(candidatePath, 'utf8'),
  ]);

  const baselineJson = JSON.parse(baseline);
  const candidateJson = JSON.parse(candidate);
  const diffs = diffValues(baselineJson, candidateJson);
  const report = {
    equal: diffs.length === 0,
    diffCount: diffs.length,
    diffs,
    baselinePath,
    candidatePath,
  };

  if (reportArg) {
    const reportPath = path.isAbsolute(reportArg) ? reportArg : path.join(repoRoot, reportArg);
    await fs.mkdir(path.dirname(reportPath), { recursive: true });
    await fs.writeFile(reportPath, `${JSON.stringify(report, null, 2)}\n`, 'utf8');
  }

  if (!report.equal) {
    console.error(`Baseline mismatch: ${report.diffCount} diff(s) found.`);
    for (const diff of report.diffs.slice(0, 20)) {
      console.error(diff);
    }
    process.exit(1);
  }

  console.log('Snapshots match exactly.');
}

main().catch((error) => {
  console.error(error instanceof Error ? error.message : error);
  process.exit(1);
});
