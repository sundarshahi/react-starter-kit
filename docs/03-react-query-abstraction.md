# React Query abstraction

React Starter Kit implements special abstraction for base hooks from Tanstack Query library:
- `useQuery`,
- `useMutation`,
- `useInfiniteQuery`.

This abstraction allows us to create API actions (queries and mutations) in a simple way in `src/services` directory.

All you need is to create API functions in queries or mutation file and the name of API function you created will be automatically available to use in useQuery/useMutation hooks.

To make it work properly you need to use `useQuery`, `useMutation` and `useInfiniteQuery` hooks from `src/react-ruery/hooks` directory, not from the TanStack Query library.

## Examples

### useQuery

`src/services/auth/auth.queries.ts`
```ts
export const authQueries = {
  getCurrentUser: (client: AxiosInstance) => async () => {
    return (await client.get<GetMeQueryResponse>('/me')).data;
  },
};
```

Usage with `useQuery` hook:
```ts
import { useQuery } from '@/react-query/hooks/useQuery/useQuery.ts';

const TestComponent = () => {
  const { data, isLoading } = useQuery('getCurrentUser');

  ...
}
```

### useMutation

`src/services/auth/auth.mutations.ts`
```ts
export const authMutations = {
  login: (client: AxiosInstance) => async (body: LoginMutationArguments) => {
    return (await client.post<LoginMutationResponse>('/authorize', body)).data;
  },
};
```

Usage with `useMutation` hook:
```ts
import { useMutation } from '@/react-query/hooks/useMutation/useMutation.ts';

const TestComponent = () => {
  const { mutateAsync, isLoading } = useMutation('login');

  ...
}
```

### useInfiniteQuery

`@/react-query/hooks/useInfiniteQuery/useInfiniteQuery.ts`
```ts
export const authQueries = {
  getUsersInfinite:
    (client: AxiosInstance) =>
    async ({ pageParam = '0', count = '5' }: GetUsersInfiniteArgs) => {
      const queryParams = stringify({ page: pageParam, count: count }, { addQueryPrefix: true });
      return (await client.get<GetUsersResponse>(`/users/${queryParams}`)).data;
    },
};
```

Usage with `useInfiniteQuery` hook:

```ts
import { useMutation } from 'hooks/useInfiniteQuery/useInfiniteQuery';

const TestComponent = () => {
  const { data, isFetching } = useInfiniteQuery('getUsersInfinite');

  ...
}

```
