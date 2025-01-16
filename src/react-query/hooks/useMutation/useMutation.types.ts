/* eslint-disable @typescript-eslint/no-explicit-any */

// import { Unwrap } from '@/services/client/types';
// import { AxiosMutationsType } from 'api/actions';

type AxiosMutationsType = object;

export type DataForMutation<T> = T;
// export type DataForMutation<TMutationKey extends keyof AxiosMutationsType> = Unwrap<
//   ReturnType<ReturnType<AxiosMutationsType[TMutationKey]>>
// >;

export type GetMutationParams<Key extends keyof AxiosMutationsType> =
  ReturnType<AxiosMutationsType[Key]> extends (value: infer Params) => any
    ? Params extends Parameters<ReturnType<AxiosMutationsType[keyof AxiosMutationsType]>>[0]
      ? Params
      : any
    : never;
