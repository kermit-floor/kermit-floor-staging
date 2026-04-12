import path from 'path';
import { loadPanelsFromManifest } from './panel-loader';
import type { Panel } from './panel-types';

const PANELS_DIR = path.join(process.cwd(), 'public/images/spc-flooring-travertine-collection');

export async function getFloorTravertine(): Promise<Panel[]> {
  return loadPanelsFromManifest({
    panelsDir: PANELS_DIR,
    publicBasePath: '/images/spc-flooring-travertine-collection',
    productHintPrefix: 'product view for travertine flooring',
    applicationHintPrefix: 'application view for travertine flooring',
    itemLabel: 'travertine flooring',
    collectionLabel: 'spc-flooring-travertine-collection',
  });
}
