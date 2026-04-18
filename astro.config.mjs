import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://thomasmcgovern.cpa',
  integrations: [sitemap()],
  build: {
    // 'auto' inlines small stylesheets (<4KB) and keeps large ones external.
    // 'always' was tested and hurt LCP (larger HTML delayed image fetch).
    inlineStylesheets: 'auto',
  },
  vite: {
    server: { allowedHosts: ['preview.spiritmediapublishing.com'] },
    plugins: [tailwindcss()],
  },
});
