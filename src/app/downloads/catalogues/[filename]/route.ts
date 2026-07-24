import {getCloudflareContext} from '@opennextjs/cloudflare';

export const dynamic = 'force-dynamic';

const CATALOGUE_FILENAMES = new Set([
  'kermit-floor-spc-flooring-catalogue-2026-07.pdf',
  'kermit-floor-spc-parke-katalog-2026-07.pdf',
]);

type CatalogueObject = {
  body?: BodyInit;
  httpEtag: string;
  range?: {
    offset: number;
    length: number;
  };
  size: number;
  writeHttpMetadata(headers: Headers): void;
};

type CatalogueBucket = {
  get(
    key: string,
    options: {
      onlyIf: Headers;
      range: Headers;
    },
  ): Promise<CatalogueObject | null>;
  head(key: string): Promise<CatalogueObject | null>;
};

type RouteContext = {
  params: Promise<{
    filename: string;
  }>;
};

function getCatalogueBucket(): CatalogueBucket {
  const {env} = getCloudflareContext();

  return (
    env as unknown as {
      CATALOGUE_FILES: CatalogueBucket;
    }
  ).CATALOGUE_FILES;
}

function getObjectHeaders(object: CatalogueObject): Headers {
  const headers = new Headers();
  object.writeHttpMetadata(headers);
  headers.set('Accept-Ranges', 'bytes');
  headers.set('ETag', object.httpEtag);
  headers.set('X-Content-Type-Options', 'nosniff');

  if (!headers.has('Cache-Control')) {
    headers.set('Cache-Control', 'public, max-age=31536000, immutable');
  }

  return headers;
}

function getObjectKey(filename: string): string | null {
  return CATALOGUE_FILENAMES.has(filename) ? `catalogues/${filename}` : null;
}

export async function GET(request: Request, context: RouteContext): Promise<Response> {
  const {filename} = await context.params;
  const key = getObjectKey(filename);

  if (!key) {
    return new Response('Not Found', {status: 404});
  }

  const object = await getCatalogueBucket().get(key, {
    onlyIf: request.headers,
    range: request.headers,
  });

  if (!object) {
    return new Response('Not Found', {status: 404});
  }

  const headers = getObjectHeaders(object);

  if (!object.body) {
    return new Response(null, {status: 412, headers});
  }

  if (object.range) {
    const end = object.range.offset + object.range.length - 1;
    headers.set('Content-Length', String(object.range.length));
    headers.set('Content-Range', `bytes ${object.range.offset}-${end}/${object.size}`);

    return new Response(object.body, {status: 206, headers});
  }

  headers.set('Content-Length', String(object.size));

  return new Response(object.body, {headers});
}

export async function HEAD(_request: Request, context: RouteContext): Promise<Response> {
  const {filename} = await context.params;
  const key = getObjectKey(filename);

  if (!key) {
    return new Response(null, {status: 404});
  }

  const object = await getCatalogueBucket().head(key);

  if (!object) {
    return new Response(null, {status: 404});
  }

  const headers = getObjectHeaders(object);
  headers.set('Content-Length', String(object.size));

  return new Response(null, {headers});
}
