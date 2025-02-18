import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import node from '@astrojs/node';

export default defineConfig({
  integrations: [
    react(),
    ReconciliationService()
  ],
  devToolbar: {
    enabled: false
  },
  adapter: node({
    mode: 'standalone'
  })
});