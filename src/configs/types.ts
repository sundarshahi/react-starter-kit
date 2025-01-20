import { z } from 'zod';

export const appConfigSchema = z.object({
  env: z.enum(['test', 'local', 'development', 'staging', 'production']),
  apiURL: z.string(),
  mocksEnabled: z.boolean().default(false),
});

export type AppConfig = z.infer<typeof appConfigSchema>;

export type RequiredConfig = Optional<AppConfig, KeysWithFallbackValue>;

type KeysWithFallbackValue = 'mocksEnabled';

type Optional<T, K extends keyof T> = Pick<Partial<T>, K> & Omit<T, K>;
