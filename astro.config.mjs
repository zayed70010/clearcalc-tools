import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: process.env.SITE_URL || 'https://clearcalc-tools.pages.dev',
  base: process.env.BASE_PATH || '/',
  integrations: [sitemap()],
  output: 'static'
});
