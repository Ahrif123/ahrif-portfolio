// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  // Change this once you know your Vercel URL
  site: 'https://ahrifcruz.vercel.app',
  integrations: [
    react(),
    mdx(),
    // The share-image page is only for generating the picture, so keep it out of search results
    sitemap({ filter: (page) => !page.includes('/og/') }),
  ],
  prefetch: true,
  // Hides the floating Astro toolbar at the bottom of the page in dev
  devToolbar: { enabled: false },
});