import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: process.env.SITE_URL || 'https://zayed70010.github.io',
  base: process.env.BASE_PATH || '/',
  integrations: [sitemap()],
  output: 'static'
});
