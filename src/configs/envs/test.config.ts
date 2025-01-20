import { defineConfig } from '../defineConfig';

export function createTestConfig() {
  return defineConfig({
    env: 'test',
    apiURL: 'http://localhost:4000',
    mocksEnabled: true,
  });
}
