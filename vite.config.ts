import { TanStackRouterVite } from '@tanstack/router-plugin/vite';
import viteReact from '@vitejs/plugin-react';

import path from 'path';
import { defineConfig } from 'vite';

const manualChunks = (id: string) => {
  if (id.includes('@sentry')) {
    return 'sentry';
  }
};

export default defineConfig({
  plugins: [TanStackRouterVite({ routesDirectory: path.resolve(__dirname, './src/app/routes') }), viteReact()] as never,

  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      ui: path.resolve(__dirname, './src/design-system'),
    },
  },
  build: {
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks,
      },
    },
  },
  server: {
    open: true,
    port: 3030,
  },
  preview: {
    port: 8080,
  },
});
