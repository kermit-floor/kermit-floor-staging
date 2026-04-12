import path from 'path';
import { loadPanelsFromManifest } from './panel-loader';
import type { Panel } from './panel-types';

const PANELS_DIR = path.join(process.cwd(), 'public/images/spc-flooring-mosaic-collection');

export async function getFloorMosaic(): Promise<Panel[]> {
  return loadPanelsFromManifest({
    panelsDir: PANELS_DIR,
    publicBasePath: '/images/spc-flooring-mosaic-collection',
    productHintPrefix: 'product view for mosaic flooring',
    applicationHintPrefix: 'application view for mosaic flooring',
    itemLabel: 'mosaic flooring',
    collectionLabel: 'spc-flooring-mosaic-collection',
  });
}
