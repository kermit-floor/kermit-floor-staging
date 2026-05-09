'use client';

import { Button } from '@/components/ui/button';
import { getWhatsAppUrl } from '@/lib/contact';
import { useTranslations, useLocale } from 'next-intl';

const WhatsAppIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M16.75 13.96c-.25-.13-1.48-.73-1.71-.82-.23-.08-.39-.13-.56.13-.17.25-.65.81-.79.98-.14.17-.29.18-.54.06-.25-.11-1.04-.38-1.99-1.22-.74-.66-1.23-1.46-1.38-1.71-.15-.25-.01-.39.11-.5.11-.11.25-.29.38-.43.12-.14.16-.25.25-.42.09-.17.04-.31-.02-.44-.06-.13-.56-1.35-.77-1.84-.2-.48-.41-.42-.56-.42h-.5c-.17 0-.42.06-.64.33-.22.27-.85.83-.85 2.01 0 1.18.87 2.33 1 2.51.13.17 1.71 2.63 4.17 3.66.58.25 1.03.4 1.39.51.54.17 1.01.14 1.38.08.42-.06 1.28-.52 1.46-1.03.18-.51.18-.94.12-1.04-.06-.1-.22-.15-.47-.28zM12.04 2.02c-5.46 0-9.91 4.45-9.91 9.91 0 1.79.46 3.5 1.28 5l-1.36 4.95 5.07-1.33c1.44.8 3.06 1.24 4.75 1.24h.01c5.46 0 9.91-4.45 9.91-9.91s-4.45-9.91-9.91-9.91zM19.12 17.3c-1.89 1.89-4.4 2.93-7.08 2.93h-.01c-1.57 0-3.11-.42-4.45-1.21l-.31-.18-3.32.87.89-3.23-.2-.33c-.88-1.45-1.35-3.12-1.35-4.85 0-4.91 3.99-8.91 8.91-8.91 2.41 0 4.67.94 6.3 2.58s2.58 3.89 2.58 6.3c0 4.91-3.99 8.91-8.91 8.91z"
      />
    </svg>
  );

export function Chatbox() {
  const t = useTranslations('Chatbox');
  const locale = useLocale();
  const whatsappUrl = getWhatsAppUrl(locale);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Button
        asChild
        size="lg"
        className="h-auto w-auto rounded-full p-4 shadow-xl"
      >
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={t('prompt')}
        >
          <WhatsAppIcon className="h-10 w-10" />
          <span className="ml-3 text-lg font-semibold">{t('prompt')}</span>
        </a>
      </Button>
    </div>
  );
}
