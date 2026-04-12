import flooringSpecProfilesData from './data/flooring-spec-profiles.json';
import type { CollectionSpecProfileMap, FlooringSpecProfileId } from './types';

export const FLOORING_SPEC_PROFILES =
  flooringSpecProfilesData as CollectionSpecProfileMap<FlooringSpecProfileId>;
