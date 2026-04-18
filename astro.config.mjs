import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://thomasmcgovern.cpa',
  integrations: [sitemap()],
  build: {
    // CSS at 35KB is too large to inline without regressing mobile LCP
    // (bigger HTML delays paint on 3G). Keep external — it's one file now.
    inlineStylesheets: 'always',
  },
  vite: {
    server: { allowedHosts: ['preview.spiritmediapublishing.com'] },
    plugins: [tailwindcss()],
  },
});
