import { defineConfig } from '../defineConfig';

export function createLocalConfig() {
  return defineConfig({
    env: 'local',
    apiURL: 'http://localhost:4000',
    mocksEnabled: true,
  });
}
