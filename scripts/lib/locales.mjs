import {readFileSync} from 'node:fs';

export const SUPPORTED_LOCALES = Object.keys(
  JSON.parse(readFileSync(new URL('../../src/i18n/locales.json', import.meta.url), 'utf8')),
);
