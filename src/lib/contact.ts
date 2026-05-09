const WHATSAPP_PHONE_BY_LOCALE = {
  tr: '905515370648',
  en: '905521342961',
} as const;

export function getWhatsAppPhoneNumber(locale: string) {
  return locale === 'tr' ? WHATSAPP_PHONE_BY_LOCALE.tr : WHATSAPP_PHONE_BY_LOCALE.en;
}

export function getWhatsAppUrl(locale: string, message?: string) {
  const baseUrl = `https://wa.me/${getWhatsAppPhoneNumber(locale)}`;

  return message ? `${baseUrl}?text=${encodeURIComponent(message)}` : baseUrl;
}
