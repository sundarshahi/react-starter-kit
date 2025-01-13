import { defineConfig } from '../defineConfig';

export function createStagingConfig() {
  return defineConfig({
    env: 'staging',
    apiURL: 'https://api.staging.mydomain.com',
  });
}
