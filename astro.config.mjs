import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { SITE_ORIGIN } from './src/data/site.js';

export default defineConfig({
  site: SITE_ORIGIN,
  base: '/',
  trailingSlash: 'always',
  output: 'static',
  build: {
    format: 'directory'
  },
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/404')
    })
  ]
});
