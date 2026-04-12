import path from 'path';
import { loadPanelsFromManifest } from './panel-loader';
import type { Panel } from './panel-types';

const PANELS_DIR = path.join(process.cwd(), 'public/images/spc-flooring-sky-collection');

export async function getFloorSky(): Promise<Panel[]> {
  return loadPanelsFromManifest({
    panelsDir: PANELS_DIR,
    publicBasePath: '/images/spc-flooring-sky-collection',
    productHintPrefix: 'product view for sky flooring',
    applicationHintPrefix: 'application view for sky flooring',
    itemLabel: 'sky flooring',
    collectionLabel: 'spc-flooring-sky-collection',
  });
}
