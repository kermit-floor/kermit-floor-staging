import {NextRequest, NextResponse} from 'next/server';
import createMiddleware from 'next-intl/middleware';
import {locales, pathnames, localePrefix, defaultLocale} from './navigation';

// The URL determines the language. / always opens Romanian, regardless of
// browser language or a cookie from a previous English visit.
const intlMiddleware = createMiddleware({
  defaultLocale, locales, pathnames, localePrefix, localeDetection: false,
});

export function middleware(request: NextRequest) {
  if (request.nextUrl.host.startsWith('www.')) {
    const url = request.nextUrl.clone();
    url.host = url.host.slice(4);
    return NextResponse.redirect(url, 301);
  }
  if (request.nextUrl.pathname === '/_next/image') {
    const imagePath = request.nextUrl.searchParams.get('url');
    if (imagePath?.startsWith('/') && !imagePath.startsWith('//')) {
      return NextResponse.redirect(new URL(imagePath, request.url), 307);
    }
  }
  return intlMiddleware(request);
}

export const config = {
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)', '/(ro|en|tr)/:path*', '/_next/image'],
};
