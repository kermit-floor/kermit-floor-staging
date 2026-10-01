import {defineConfig, devices} from '@playwright/test';

const port = 9188;
const baseURL = `http://localhost:${port}`;

export default defineConfig({
  testDir: './tests',
  testMatch: 'localization.spec.mjs',
  outputDir: './test-results/localization',
  workers: 2,
  timeout: 45_000,
  use: {baseURL, serviceWorkers: 'block'},
  projects: [{name: 'desktop', use: {...devices['Desktop Chrome']}}],
  webServer: {
    command: `node node_modules/next/dist/bin/next start --hostname localhost --port ${port}`,
    url: `${baseURL}/bg`,
    reuseExistingServer: false,
    timeout: 120_000,
    stdout: 'pipe',
  },
});
