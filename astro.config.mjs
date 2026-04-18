import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://thomasmcgovern.cpa',
  integrations: [sitemap()],
  build: {
    // After consolidating scattered <style> blocks into global.css (1 chunk
    // instead of 2), inlining is now a net win: eliminates render-blocking
    // external CSS request at the cost of ~35KB added to HTML.
    inlineStylesheets: 'always',
  },
  vite: {
    server: { allowedHosts: ['preview.spiritmediapublishing.com'] },
    plugins: [tailwindcss()],
  },
});
