import data from './resources.json';

export type Locale = 'en' | 'ro';

export type FileDetails = {
  url: string;
  size: string;
  format: 'pdf' | 'zip' | 'dwg' | 'dxf';
  language?: 'en' | 'ro' | 'sr';
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
  title_ro: string;
  summary: string;
  summary_ro: string;
  bullets?: string[];
  bullets_ro?: string[];
  version: string;
  updatedAt: string; // YYYY-MM-DD
  tags: string[];
  files: {
    en: FileDetails;
    ro: FileDetails;
  };
  previewEnabled: boolean;
};

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
