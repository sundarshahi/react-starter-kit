import axios, { type AxiosError, AxiosResponse } from 'axios';
import { jwtDecode } from 'jwt-decode';

import { appConfig } from '@/configs';
import { getStandardizedApiError } from '@/services/client/Error';
import { ExtendedAxiosRequestConfig } from '@/services/client/types';
import { authStorage } from '@/services/storage/AuthStorage';

export const refreshTokenUrl = `${appConfig.apiURL}/users/refresh-token`;

export type RefreshTokenMutationResponse = {
  accessToken: string;
  refreshToken: string;
};

export const responseSuccessInterceptor = (response: AxiosResponse) => response;

export const responseFailureInterceptor = async (error: AxiosError<unknown>) => {
  const standarizedError = getStandardizedApiError(error);

  const originalRequest = error.config as ExtendedAxiosRequestConfig;

  if (standarizedError.statusCode === 401 && originalRequest?._retry) {
    authStorage.accessToken = null;
    authStorage.expires = null;
    authStorage.refreshToken = null;

    window.location.replace('/login');

    return Promise.reject(standarizedError);
  }

  if (standarizedError.statusCode === 401 && originalRequest) {
    originalRequest._retry = true;

    try {
      const { data } = await axios.post<RefreshTokenMutationResponse>(refreshTokenUrl, {
        accessToken: authStorage.accessToken,
        refreshToken: authStorage.refreshToken,
      });
      const { exp } = jwtDecode<{ exp: number }>(data.accessToken);

      authStorage.accessToken = data.accessToken;
      authStorage.expires = exp;
      authStorage.refreshToken = data.refreshToken;

      return axios(originalRequest);
    } catch {
      authStorage.accessToken = null;
      authStorage.expires = null;
      authStorage.refreshToken = null;
      window.location.replace('/login');

      return Promise.reject(standarizedError);
    }
  }

  return Promise.reject(standarizedError);
};
