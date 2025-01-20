import { useQueryClient } from '@tanstack/react-query';

import { useQuery } from '@/react-query/hooks/useQuery/useQuery';
import { GenericQueryOptions } from '@/react-query/hooks/useQuery/useQuery.types';
import { authQueries } from '@/services/auth/auth.queries';
import { GetMeQueryResponse } from '@/services/auth/auth.types';

export const useUser = (options?: GenericQueryOptions<GetMeQueryResponse>) => {
  const queryClient = useQueryClient();

  const resetUser = () => queryClient.removeQueries({ queryKey: authQueries.me().queryKey });

  const query = useQuery({ ...authQueries.me(), ...options });
  return { ...query, resetUser };
};
