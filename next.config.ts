import type {NextConfig} from 'next';
import createNextIntlPlugin from 'next-intl/plugin';
import { legacyRedirects } from './src/redirects/legacyRedirects';

const withNextIntl = createNextIntlPlugin('./src/i18n/request.ts');

const nextConfig: NextConfig = {
  async redirects() {
    return [...legacyRedirects];
  },
  async rewrites() {
    return [
      {
        source: '/favicon.ico',
        destination: '/images/icons/favicon.32x32.png',
      },
    ];
  },
  images: {
    unoptimized: true,
  },
};

export default withNextIntl(nextConfig);
