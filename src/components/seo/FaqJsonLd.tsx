import {getFaqPageJsonLd, type FaqItem} from '@/lib/seo/faq';

export default function FaqJsonLd({url, locale, items}: {url: string; locale: string; items: readonly FaqItem[]}) {
  const data = getFaqPageJsonLd(url, locale, items);
  if (!data) return null;

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{__html: JSON.stringify(data).replace(/</g, '\\u003c')}}
    />
  );
}
