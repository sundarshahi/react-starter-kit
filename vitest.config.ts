import path from 'path';
import { configDefaults, defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      ui: path.resolve(__dirname, './src/design-system'),
    },
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/setupTests.ts',
    clearMocks: true,
    exclude: [...configDefaults.exclude, 'e2e/**/*', 'e2e-playwright/**/*'],
    coverage: {
      reporter: ['text', 'json', 'html'],
    },
  },
});
