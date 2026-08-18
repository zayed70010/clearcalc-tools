import sharp from 'sharp';
import { fileURLToPath } from 'node:url';

const path = (relative) => fileURLToPath(new URL(relative, import.meta.url));
const source = path('../public/logo-source.svg');
const social = path('../public/og-image.svg');

await Promise.all([
  sharp(source).resize(32, 32).png().toFile(path('../public/favicon-32.png')),
  sharp(source).resize(180, 180).png().toFile(path('../public/apple-touch-icon.png')),
  sharp(source).resize(192, 192).png().toFile(path('../public/icon-192.png')),
  sharp(source).resize(512, 512).png().toFile(path('../public/icon-512.png')),
  sharp(social).png().toFile(path('../public/og-image.png'))
]);
