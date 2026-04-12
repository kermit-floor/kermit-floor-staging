import path from 'path';
import { loadPanelsFromManifest } from './panel-loader';
import type { Panel } from './panel-types';

const PANELS_DIR = path.join(process.cwd(), 'public/images/spc-flooring-elegance-collection');

export async function getFloorElegance(): Promise<Panel[]> {
  return loadPanelsFromManifest({
    panelsDir: PANELS_DIR,
    publicBasePath: '/images/spc-flooring-elegance-collection',
    productHintPrefix: 'product view for elegance flooring',
    applicationHintPrefix: 'application view for elegance flooring',
    itemLabel: 'elegance flooring',
    collectionLabel: 'spc-flooring-elegance-collection',
  });
}
