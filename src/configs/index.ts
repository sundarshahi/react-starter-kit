import { createLocalConfig } from './envs/local';
import { createProdConfig } from './envs/prod';
import { createStagingConfig } from './envs/staging';
import { createTestConfig } from './envs/test.config';

export const appConfig = getConfig();

function getConfig() {
  switch (import.meta.env.MODE) {
    case 'production':
      return createProdConfig();
    case 'staging':
      return createStagingConfig();
    case 'local':
    case 'development':
      return createLocalConfig();
    case 'test':
      return createTestConfig();
    default:
      throw new Error(`Invalid APP_ENV "${import.meta.env.MODE}"`);
  }
}
