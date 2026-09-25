import {readFileSync} from 'node:fs';
import {execFileSync} from 'node:child_process';
const config = JSON.parse(readFileSync(new URL('../wrangler.jsonc', import.meta.url), 'utf8'));
const branch = process.env.WORKERS_CI_BRANCH ?? execFileSync('git', ['branch', '--show-current'], {encoding: 'utf8'}).trim();
if (branch !== 'romania' || config.name !== 'kermit-floor-ro' ||
    config.services?.find(binding => binding.binding === 'WORKER_SELF_REFERENCE')?.service !== 'kermit-floor-ro' ||
    config.routes?.some(route => !['kermitfloor.ro', 'www.kermitfloor.ro'].includes(route.pattern))) {
  throw new Error('Romania deployment requires branch romania and the kermit-floor-ro Worker with only .ro domains.');
}
console.log('Romania deployment target verified.');
