import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import node from '@astrojs/node';

// This imports the plugin to the Astro config
import HelloWorldPlugin from '@recogito/plugin-hello-world';

export default defineConfig({
  integrations: [
    react(),
    // Add the plugin here
    HelloWorldPlugin()
  ],
  devToolbar: {
    enabled: false
  },
  adapter: node({
    mode: 'standalone'
  })
});