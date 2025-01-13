import { defineConfig } from '../defineConfig';

export function createProdConfig() {
  return defineConfig({
    env: 'production',
    apiURL: 'https://api.mydomain.com',
  });
}
