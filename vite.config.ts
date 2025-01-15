/// <reference types="vitest" />

import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';

const manualChunks = (id: string) => {
  if (id.includes('@sentry')) {
    return 'sentry';
  }
};

export default defineConfig({
  plugins: [react()],

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
