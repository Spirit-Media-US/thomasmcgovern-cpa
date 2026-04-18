import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import inline from '@playform/inline';

export default defineConfig({
  site: 'https://thomasmcgovern.cpa',
  integrations: [
    sitemap(),
    // Beasties: extract above-fold critical CSS, inline it, async-load the rest.
    inline(),
  ],
  build: {
    // Let Beasties handle critical inlining; keep auto for the rest.
    inlineStylesheets: 'auto',
  },
  vite: {
    server: { allowedHosts: ['preview.spiritmediapublishing.com'] },
    plugins: [tailwindcss()],
  },
});
