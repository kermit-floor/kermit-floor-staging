import {NextRequest, NextResponse} from 'next/server';
import createMiddleware from 'next-intl/middleware';
import {locales, pathnames, localePrefix, defaultLocale} from './navigation';

const intlMiddleware = createMiddleware({
  defaultLocale,
  locales,
  pathnames,
  localePrefix,
});

const intlMiddlewareWithoutLocaleDetection = createMiddleware({
  defaultLocale,
  locales,
  pathnames,
  localePrefix,
  localeDetection: false,
});

function isBlogRoute(pathname: string): boolean {
  const segments = pathname.split('/').filter(Boolean);
  if (segments.length === 0) {
    return false;
  }

  const offset = segments[0] === 'en' || segments[0] === 'tr' ? 1 : 0;
  return segments[offset] === 'blog';
}

export function middleware(request: NextRequest) {
  const {host} = request.nextUrl;

  if (host.startsWith('www.')) {
    const newHost = host.slice(4);
    const newUrl = new URL(request.url);
    newUrl.host = newHost;
    return NextResponse.redirect(newUrl.toString(), 301);
  }

  // If stale cached pages still request /_next/image, bypass Cloudflare transforms
  // and serve the local asset directly.
  if (request.nextUrl.pathname === '/_next/image') {
    const imagePath = request.nextUrl.searchParams.get('url');
    if (imagePath && imagePath.startsWith('/') && !imagePath.startsWith('//')) {
      const directAssetUrl = new URL(imagePath, request.url);
      return NextResponse.redirect(directAssetUrl, 307);
    }
  }

  // Blog posts/tags use locale-specific dynamic slugs. next-intl locale detection can
  // prefix `/tr` onto an English blog URL (or vice versa) without translating the slug,
  // which produces `/tr/blog/<english-slug>` 404s from search/social clicks.
  // Keep the clicked locale for all blog routes and rely on explicit language-switch links.
  if (isBlogRoute(request.nextUrl.pathname)) {
    return intlMiddlewareWithoutLocaleDetection(request);
  }

  return intlMiddleware(request);
}

export const config = {
  matcher: [
    '/((?!api|_next|_vercel|.*\\..*).*)',
    '/(tr|en)/:path*',
    '/_next/image',
  ],
};
