import skirtingSpecProfilesData from './data/skirting-spec-profiles.json';
import type { CollectionSpecProfileMap, SkirtingSpecProfileId } from './types';

export const SKIRTING_SPEC_PROFILES =
  skirtingSpecProfilesData as CollectionSpecProfileMap<SkirtingSpecProfileId>;
