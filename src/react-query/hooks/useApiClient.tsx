import { useContext } from 'react';

import { ApiClientContext } from '../context/ApiClientContextController';

export const useApiClient = () => {
  const ctx = useContext(ApiClientContext);

  if (typeof ctx === 'undefined') {
    throw new Error('useApiClient hook is not wrapped by ApiClient provider');
  }

  return ctx;
};
