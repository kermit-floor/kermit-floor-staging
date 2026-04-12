import path from 'path';
import { loadPanelsFromManifest } from './panel-loader';
import type { Panel } from './panel-types';

const PANELS_DIR = path.join(process.cwd(), 'public/images/spc-flooring-elite-collection');

export async function getFloorElite(): Promise<Panel[]> {
  return loadPanelsFromManifest({
    panelsDir: PANELS_DIR,
    publicBasePath: '/images/spc-flooring-elite-collection',
    productHintPrefix: 'product view for elite flooring',
    applicationHintPrefix: 'application view for elite flooring',
    itemLabel: 'elite flooring',
    collectionLabel: 'spc-flooring-elite-collection',
  });
}
