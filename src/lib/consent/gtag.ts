declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
    __kermitGaInitialized?: boolean;
  }
}

function isBrowser(): boolean {
  return typeof window !== 'undefined';
}

type ConsentValue = 'granted' | 'denied';

function ensureGtagBootstrap(): boolean {
  if (!isBrowser()) {
    return false;
  }

  window.dataLayer = window.dataLayer ?? [];
  if (typeof window.gtag !== 'function') {
    window.gtag = (...args: unknown[]) => {
      window.dataLayer = window.dataLayer ?? [];
      window.dataLayer.push(args);
    };
  }

  return true;
}

export function bootstrapGtag(): void {
  ensureGtagBootstrap();
}

export function setDefaultAnalyticsConsent(value: ConsentValue): void {
  if (!ensureGtagBootstrap()) {
    return;
  }
  window.gtag?.('consent', 'default', {analytics_storage: value});
}

function updateAnalyticsConsent(value: ConsentValue): void {
  if (!ensureGtagBootstrap()) {
    return;
  }
  window.gtag?.('consent', 'update', {analytics_storage: value});
}

export function initializeGtag(gaId: string): void {
  if (!gaId || !ensureGtagBootstrap()) {
    return;
  }
  if (window.__kermitGaInitialized) {
    return;
  }

  window.gtag?.('js', new Date());
  window.gtag?.('config', gaId, {
    anonymize_ip: true,
    send_page_view: false,
  });
  window.__kermitGaInitialized = true;
}

export function grantAnalyticsConsent(): void {
  updateAnalyticsConsent('granted');
}

export function denyAnalyticsConsent(): void {
  updateAnalyticsConsent('denied');
}

export function trackPageView(): void {
  if (!isBrowser() || !window.__kermitGaInitialized || typeof window.gtag !== 'function') {
    return;
  }

  const pagePath = `${window.location.pathname}${window.location.search}${window.location.hash}`;
  window.gtag('event', 'page_view', {
    page_title: document.title,
    page_location: window.location.href,
    page_path: pagePath,
  });
}

export function trackEvent(name: string, params?: Record<string, string>): void {
  if (!isBrowser() || !window.__kermitGaInitialized || typeof window.gtag !== 'function') {
    return;
  }

  window.gtag('event', name, params);
}

