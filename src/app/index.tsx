import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { RouterProvider, createRouter } from '@tanstack/react-router';

import { logger } from '@/instrumentation/logger';
import { routeTree } from '@/routeTree.gen';
import { AppProviders } from './providers/AppProviders';

const openReactQueryDevtools = import.meta.env.DEV;

if (import.meta.env.VITE_SENTRY_DSN) {
  logger.init();
}

export const router = createRouter({ routeTree });

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

export default function App() {
  return (
    <AppProviders>
      <RouterProvider router={router} />
      {openReactQueryDevtools && <ReactQueryDevtools initialIsOpen={false} />}
    </AppProviders>
  );
}
