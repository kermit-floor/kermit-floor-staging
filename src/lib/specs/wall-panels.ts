import wallPanelSpecProfilesData from './data/wall-panel-spec-profiles.json';
import type { CollectionSpecProfileMap, WallPanelSpecProfileId } from './types';

export const WALL_PANEL_SPEC_PROFILES =
  wallPanelSpecProfilesData as CollectionSpecProfileMap<WallPanelSpecProfileId>;
