export type FaqItem = {
  question: string;
  answer: string;
};

export function getFaqPageJsonLd(url: string, locale: string, items: readonly FaqItem[]) {
  if (items.length === 0) return null;

  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    '@id': url,
    url,
    inLanguage: locale,
    mainEntity: items.map(({question, answer}) => ({
      '@type': 'Question',
      name: question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: answer,
      },
    })),
  };
}
