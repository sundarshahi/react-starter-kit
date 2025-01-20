import { MutationCache, QueryCache, QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { AxiosInstance } from 'axios';
import { createContext, ReactNode, useMemo } from 'react';

import { client } from '@/services/client/client';
import type { ExtendedQueryMeta, StandardizedApiError } from '@/services/client/types';

import { useHandleQueryErrors } from '../hooks/useHandleQueryErrors';

const metaErrorConfig = { error: { showGlobalError: true, excludedCodes: [] } };

export type ApiClientControllerProps = {
  children: ReactNode;
};

export type ApiResponse<TData = unknown, TConfig = unknown> = {
  data: TData;
  config: TConfig | null;
};

export type ApiClientContextValue = {
  client: AxiosInstance;
};

export const ApiClientContext = createContext<ApiClientContextValue | undefined>(undefined);

export const ApiClientContextController = ({ children }: ApiClientControllerProps) => {
  const { handleErrors, shouldHandleGlobalError } = useHandleQueryErrors();

  const mutationCache = new MutationCache({
    onError: (err, _variables, _context, mutation) => {
      const error = err as StandardizedApiError;
      if (shouldHandleGlobalError((mutation.meta as ExtendedQueryMeta)?.error, error?.statusCode)) {
        handleErrors(error);
      }
    },
  });

  const queryCache = new QueryCache({
    onError: (err, query) => {
      const error = err as StandardizedApiError;

      if (shouldHandleGlobalError((query.meta as ExtendedQueryMeta)?.error, error?.statusCode)) {
        handleErrors(error);
      }
    },
  });

  const queryClient = useMemo(
    () =>
      new QueryClient({
        defaultOptions: { queries: { refetchOnWindowFocus: false, meta: metaErrorConfig } },
        mutationCache,
        queryCache,
      }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  const ctx: ApiClientContextValue = { client };

  return (
    <ApiClientContext.Provider value={ctx}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </ApiClientContext.Provider>
  );
};
