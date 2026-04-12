'use client';

import { DEFAULT_FLOORING_ROUTE, isFlooringSeriesRoute } from '@/lib/flooring-series';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Link, usePathname } from '@/navigation';

export function Logo() {
  return (
    <Link href="/">
      <Image
        src="/images/kermit-floor-logo.png"
        alt="Kermit Floor Logo"
        width={140}
        height={48}
        className="object-contain"
      />
    </Link>
  );
}

export function NavMenu({ isMobile = false }) {
  const pathname = usePathname();
  const pathnameValue = typeof pathname === 'string' ? pathname : '';
  const t = useTranslations('Header');

  const getResourcesLink = (): Parameters<typeof Link>[0]['href'] => {
    if (pathnameValue.includes('/spc-skirting-boards')) {
      return { pathname: '/resources', query: { tab: 'skirting' } };
    }
    if (isFlooringSeriesRoute(pathnameValue)) {
      return { pathname: '/resources', query: { tab: 'flooring' } };
    }
    if (pathnameValue.includes('/spc-wall-panels') || pathnameValue.includes('/spc-3d-wall-panels')) {
      return { pathname: '/resources', query: { tab: 'wall_panels' } };
    }
    return '/resources';
  };

  const navLinks: { href: Parameters<typeof Link>[0]['href']; label: string }[] = [
    { href: '/', label: t('navHome') },
    { href: DEFAULT_FLOORING_ROUTE, label: t('navFloors') },
    { href: '/spc-wall-panels', label: t('navWalls') },
    { href: '/spc-skirting-boards/optima-90-mm-skirting-board', label: t('navSkirtings') },
    { href: getResourcesLink(), label: t('navDownload') },
    { href: '/about', label: t('navAbout') },
    { href: '/contact', label: t('navContact') },
  ];

  return (
    <nav
      className={cn(
        'flex items-center gap-2 md:gap-4 lg:gap-6',
        isMobile ? 'flex-col items-start space-y-4 p-6' : 'hidden md:flex'
      )}
    >
      {navLinks.map((link) => {
        let isActive = false;
        const hrefPath =
          typeof link.href === 'string'
            ? link.href
            : typeof link.href === 'object' && link.href !== null && 'pathname' in link.href
              ? String(link.href.pathname ?? '')
              : '';

        if (hrefPath === '/') {
          isActive = pathnameValue === '/';
        } else if (hrefPath.includes('spc-skirting-boards')) {
          isActive = pathnameValue.startsWith('/spc-skirting-boards');
        } else if (hrefPath === DEFAULT_FLOORING_ROUTE) {
          isActive = isFlooringSeriesRoute(pathnameValue);
        } else if (hrefPath.includes('spc-wall-panels')) {
          isActive = pathnameValue.startsWith('/spc-wall-panels') || pathnameValue.startsWith('/spc-3d-wall-panels');
        } else if (hrefPath.startsWith('/resources')) {
          isActive = pathnameValue.startsWith('/resources');
        } else {
          isActive = pathnameValue.startsWith(hrefPath);
        }

        return (
          <Link
            key={link.label}
            href={link.href}
            className={cn(
              'relative font-semibold tracking-wider transition-colors hover:text-primary whitespace-nowrap text-sm md:text-base lg:text-lg',
              'after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-full after:bg-primary after:origin-center after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100',
              isActive ? 'text-primary after:scale-x-100' : 'text-foreground/70',
              isMobile && 'text-2xl after:bottom-[-2px]'
            )}
          >
            {link.label}
          </Link>
        );
      })}
    </nav>
  );
}
