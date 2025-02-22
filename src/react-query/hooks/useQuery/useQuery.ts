import { useQuery as useRQQuery } from '@tanstack/react-query';

import { StandardizedApiError } from '@/services/client/types';
import { useApiClient } from '../useApiClient';
import { UseQueryOptions } from './useQuery.types';

export const useQuery = <TQueryFnData = unknown, TError = StandardizedApiError>(
  params: UseQueryOptions<TQueryFnData, TError>,
) => {
  const { client } = useApiClient();
  const { queryFn, ...options } = params;

  const result = useRQQuery({
    queryFn: (args) => queryFn(client)(args),
    ...options,
  });

  return { ...result, isLoadingAndEnabled: result.isPending && result.fetchStatus !== 'idle' };
};
