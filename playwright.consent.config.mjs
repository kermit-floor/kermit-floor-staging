import {defineConfig, devices} from '@playwright/test';

const port = 9187;
const baseURL = `http://localhost:${port}`;

export default defineConfig({
  testDir: './tests',
  testMatch: 'consent.spec.mjs',
  outputDir: './test-results/consent',
  workers: 1,
  timeout: 30_000,
  use: {baseURL, serviceWorkers: 'block'},
  projects: [
    {name: 'desktop', use: {...devices['Desktop Chrome']}},
    {name: 'mobile', use: {...devices['Pixel 7']}},
  ],
  webServer: {
    // Use a production build: React's development Strict Mode replays effects.
    command: `node node_modules/next/dist/bin/next start --hostname localhost --port ${port}`,
    url: `${baseURL}/contact`,
    reuseExistingServer: false,
    timeout: 120_000,
    stdout: 'pipe',
    env: {
      NEXT_PUBLIC_GA_ID: 'G-CONSENTTEST',
      NEXT_PUBLIC_CONSENT_MODE_ENABLED: 'true',
    },
  },
});
