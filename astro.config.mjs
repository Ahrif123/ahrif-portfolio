// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  // Change this once you know your Vercel URL
  site: 'https://ahrifcruz.vercel.app',
  integrations: [react(), mdx(), sitemap()],
  prefetch: true,
});