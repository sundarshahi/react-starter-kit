import { QueryMeta } from '@tanstack/react-query';
import { AxiosError, AxiosRequestConfig } from 'axios';
import zod from 'zod';

import { ApiError, basicErrorDataSchema, formErrorDataSchema } from './Error';

export type MutationHTTPMethod = 'DELETE' | 'POST' | 'PUT' | 'PATCH';

export type Unwrap<T> = T extends PromiseLike<infer U> ? U : T;

export type ExtendedQueryMeta = QueryMeta & {
  error: { excludedCodes: number[]; showGlobalError: boolean };
};

export type ExtendedAxiosRequestConfig = AxiosRequestConfig & {
  _retry?: boolean;
};

export type FormErrorData = zod.infer<typeof formErrorDataSchema>;

export type BasicErrorData = zod.infer<typeof basicErrorDataSchema>;

type BaseApiError<TData = unknown> = {
  statusCode: number | undefined;
  data: TData;
  originalError: AxiosError<TData>;
};

export type BasicApiError = { type: 'basic' } & BaseApiError<BasicErrorData>;

export type FormApiError = { type: 'form' } & BaseApiError<FormErrorData>;

export type UnknownApiError = { type: 'unknown' } & BaseApiError;

export type StandardizedApiError = ApiError<BasicApiError> | ApiError<FormApiError> | ApiError<UnknownApiError>;
