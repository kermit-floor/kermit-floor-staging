export const ROMANIA_CONTACT = {
  company: 'DMS INNOVATIVE SOLUTIONS S.R.L.',
  email: 'info@dmsinnovative.ro',
  phones: ['+40 722 547 258', '+40 738 754 074'],
  whatsapp: '40722547258',
} as const;

export function getWhatsAppPhoneNumber(_locale: string) {
  return ROMANIA_CONTACT.whatsapp;
}

export function getWhatsAppUrl(locale: string, message?: string) {
  const baseUrl = `https://wa.me/${getWhatsAppPhoneNumber(locale)}`;
  return message ? `${baseUrl}?text=${encodeURIComponent(message)}` : baseUrl;
}
