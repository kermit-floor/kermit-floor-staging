import authorRegistryData from '../../../content/blog/authors.json';
import type {BlogLocale} from './types';

type RawAuthorEntry = {
  id?: string;
  name?: string;
  subtitle?: Partial<Record<BlogLocale, string>>;
  photoPath?: string;
  role?: string;
  isDefault?: boolean;
};

type RawAuthorRegistry =
  | {
      schemaVersion?: number;
      authors?: RawAuthorEntry[];
    }
  | RawAuthorEntry[];

export type BlogAuthorProfile = {
  id?: string;
  name: string;
  subtitle?: string;
  photoPath?: string;
  isDefault?: boolean;
};

function getRawAuthorEntries(): RawAuthorEntry[] {
  const registry = authorRegistryData as RawAuthorRegistry;
  const entries = Array.isArray(registry) ? registry : registry.authors;
  if (!Array.isArray(entries)) {
    return [];
  }
  return entries;
}

function normalizeAuthorEntry(entry: RawAuthorEntry, locale: BlogLocale): BlogAuthorProfile | null {
  const name = typeof entry.name === 'string' ? entry.name.trim() : '';
  if (!name) {
    return null;
  }

  const localizedSubtitle = entry.subtitle?.[locale]?.trim();
  const fallbackSubtitle = typeof entry.role === 'string' ? entry.role.trim() : '';
  const subtitle = localizedSubtitle || fallbackSubtitle || undefined;

  const photoPath = typeof entry.photoPath === 'string' && entry.photoPath.trim() ? entry.photoPath.trim() : undefined;
  const id = typeof entry.id === 'string' && entry.id.trim() ? entry.id.trim() : undefined;

  return {
    id,
    name,
    subtitle,
    photoPath,
    isDefault: entry.isDefault === true,
  };
}

export function getBlogAuthorProfileByName(authorName: string, locale: BlogLocale): BlogAuthorProfile | null {
  const normalizedTarget = authorName.trim();
  if (!normalizedTarget) {
    return null;
  }

  const matchingEntry = getRawAuthorEntries().find((entry) => {
    const name = typeof entry.name === 'string' ? entry.name.trim() : '';
    return name === normalizedTarget;
  });

  if (!matchingEntry) {
    return null;
  }

  return normalizeAuthorEntry(matchingEntry, locale);
}
