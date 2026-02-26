'use client';

import {createContext, useCallback, useContext, useEffect, useMemo, useState} from 'react';
import Script from 'next/script';
import {usePathname, useSearchParams} from 'next/navigation';
import type {ConsentDecision} from '@/lib/consent/types';
import {getConsentState, persistConsentDecision} from '@/lib/consent/storage';
import {
  bootstrapGtag,
  denyAnalyticsConsent,
  grantAnalyticsConsent,
  initializeGtag,
  setDefaultAnalyticsConsent,
  trackPageView,
} from '@/lib/consent/gtag';
import {ConsentBanner} from '@/components/consent/ConsentBanner';
import {ConsentPreferencesDialog} from '@/components/consent/ConsentPreferencesDialog';

type ConsentContextValue = {
  decision: ConsentDecision | null;
  accept: () => void;
  reject: () => void;
  openPreferences: () => void;
};

const ConsentContext = createContext<ConsentContextValue | null>(null);

type ConsentProviderProps = {
  children: React.ReactNode;
  gaId: string;
  enabled: boolean;
};

function AnalyticsPageTracker({active}: {active: boolean}) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const search = searchParams.toString();

  useEffect(() => {
    if (!active || !pathname) {
      return;
    }

    trackPageView();
  }, [active, pathname, search]);

  return null;
}

export function ConsentProvider({children, gaId, enabled}: ConsentProviderProps) {
  const [decision, setDecision] = useState<ConsentDecision | null>(null);
  const [bannerOpen, setBannerOpen] = useState(false);
  const [preferencesOpen, setPreferencesOpen] = useState(false);
  const [gaScriptLoaded, setGaScriptLoaded] = useState(false);

  useEffect(() => {
    if (!enabled || !gaId) {
      return;
    }

    const savedState = getConsentState();
    if (savedState) {
      setDecision(savedState.decision);
      return;
    }

    setBannerOpen(true);
  }, [enabled, gaId]);

  useEffect(() => {
    if (!gaScriptLoaded) {
      return;
    }

    if (decision === 'accepted') {
      grantAnalyticsConsent();
      return;
    }

    if (decision === 'rejected') {
      denyAnalyticsConsent();
    }
  }, [decision, gaId, gaScriptLoaded]);

  const accept = useCallback(() => {
    persistConsentDecision('accepted');
    setDecision('accepted');
    setBannerOpen(false);
    setPreferencesOpen(false);
  }, []);

  const reject = useCallback(() => {
    persistConsentDecision('rejected');
    setDecision('rejected');
    setBannerOpen(false);
    setPreferencesOpen(false);
  }, []);

  const openPreferences = useCallback(() => {
    setPreferencesOpen(true);
  }, []);

  const value = useMemo<ConsentContextValue>(
    () => ({
      decision,
      accept,
      reject,
      openPreferences,
    }),
    [accept, decision, openPreferences, reject]
  );

  const shouldLoadGa = gaId.length > 0 && (decision === 'accepted' || !enabled);
  const shouldRenderConsentUi = enabled && gaId.length > 0;
  const analyticsActive = shouldLoadGa && gaScriptLoaded;
  const bootstrapScript = [
    'window.dataLayer = window.dataLayer || [];',
    'window.gtag = window.gtag || function(){window.dataLayer.push(arguments);};',
    enabled ? "window.gtag('consent','default',{analytics_storage:'denied'});" : '',
  ]
    .filter(Boolean)
    .join('');

  return (
    <ConsentContext.Provider value={value}>
      {children}
      {analyticsActive ? <AnalyticsPageTracker active={analyticsActive} /> : null}
      {shouldLoadGa ? (
        <>
          <Script id="kermit-ga-bootstrap" strategy="afterInteractive">
            {bootstrapScript}
          </Script>
          <Script
            id="kermit-ga-loader"
            strategy="afterInteractive"
            src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
            onLoad={() => {
              bootstrapGtag();
              if (enabled) {
                setDefaultAnalyticsConsent('denied');
              }
              initializeGtag(gaId);
              if (!enabled) {
                grantAnalyticsConsent();
              }
              setGaScriptLoaded(true);
            }}
          />
        </>
      ) : null}
      {shouldRenderConsentUi ? (
        <>
          <ConsentBanner
            open={bannerOpen}
            onAccept={accept}
            onReject={reject}
            onManage={() => {
              setBannerOpen(false);
              setPreferencesOpen(true);
            }}
          />
          <ConsentPreferencesDialog
            open={preferencesOpen}
            onOpenChange={setPreferencesOpen}
            decision={decision}
            onAccept={accept}
            onReject={reject}
          />
        </>
      ) : null}
    </ConsentContext.Provider>
  );
}

export function useConsent(): ConsentContextValue {
  const context = useContext(ConsentContext);
  if (!context) {
    throw new Error('useConsent must be used within ConsentProvider');
  }
  return context;
}
