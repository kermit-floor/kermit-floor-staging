import data from './resources.json';
import type {AppLocale} from '@/i18n/locales';

export type Locale = AppLocale;

export type FileDetails = {
  url: string;
  size: string;
  format: 'pdf' | 'zip' | 'dwg' | 'dxf';
  language?: Locale | 'ro';
};

export type ProductLine = 'skirting' | 'flooring' | 'wall_panels' | 'general';

export type DocType = 
  | 'pack'
  | 'catalogue'
  | 'tds'
  | 'installation'
  | 'warranty'
  | 'maintenance'
  | 'cad'
  | 'textures'
  | 'packaging'
  | 'spec_text'
  | 'troubleshooting'
  | 'marketing';

export type InstallationMethod = 'adhesive' | 'mechanical' | 'clip' | 'silicone' | 'hybrid' | 'other' | null;

export type Resource = {
  id: string;
  productLine: ProductLine;
  docType: DocType;
  audience: ('installer' | 'dealer' | 'architect' | 'all')[];
  installationMethod: InstallationMethod;
  title: string;
  title_tr: string;
  summary: string;
  summary_tr: string;
  bullets?: string[];
  bullets_tr?: string[];
  title_bg: string;
  title_sr: string;
  title_ar: string;
  summary_bg: string;
  summary_sr: string;
  summary_ar: string;
  bullets_bg?: string[];
  bullets_sr?: string[];
  bullets_ar?: string[];
  version: string;
  updatedAt: string; // YYYY-MM-DD
  tags: string[];
  files: Record<'en' | 'tr', FileDetails> & Partial<Record<Locale, FileDetails>>;
  previewEnabled: boolean;
};

export function getResourceCopy(resource: Resource, locale: Locale) {
  if (locale === 'en') {
    return {title: resource.title, summary: resource.summary, bullets: resource.bullets};
  }
  return {
    title: resource[`title_${locale}`],
    summary: resource[`summary_${locale}`],
    bullets: resource[`bullets_${locale}`],
  };
}

// A translated website does not imply a translated PDF. Retain available files
// and expose their actual language in download cards.
export function getResourceFile(resource: Resource, locale: Locale): FileDetails {
  const fileLocale = locale === 'tr' ? 'tr' : 'en';
  const localizedFile = resource.files[locale];
  const file = localizedFile ?? resource.files[fileLocale];
  return {...file, language: file.language ?? (localizedFile ? locale : fileLocale)};
}

export async function getResources(): Promise<Resource[]> {
  return data.resources as Resource[];
}

export async function getStarterPacks(): Promise<Resource[]> {
  const allResources = await getResources();
  return allResources.filter(r => r.docType === 'pack');
}

export async function getLibraryDocuments(): Promise<Resource[]> {
  const allResources = await getResources();
  return allResources.filter(r => r.docType !== 'pack');
}
