import { access, cp } from 'node:fs/promises';
import { join } from 'node:path';

const outputDirectory = join('dist', 'client');
const generatedAssets = join(outputDirectory, 'elements-of-fashion', '_next');
const publishedAssets = join(outputDirectory, '_next');

try {
  await access(generatedAssets);
} catch {
  throw new Error(`Expected generated assets at ${generatedAssets}`);
}

// GitHub Pages already mounts the artifact below /elements-of-fashion/. Vinext's
// assetPrefix also nests the emitted files under that name, so mirror the build
// assets at the artifact root where the public URLs resolve.
await cp(generatedAssets, publishedAssets, { recursive: true, force: true });
