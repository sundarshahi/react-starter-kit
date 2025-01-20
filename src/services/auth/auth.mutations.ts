import { AxiosInstance } from 'axios';

import { appConfig } from '@/configs';
import { LoginMutationArguments, LoginMutationResponse } from './auth.types';

const BASE_URL = appConfig.apiURL;

export const authMutations = {
  loginMutation: (client: AxiosInstance) => async (body: LoginMutationArguments) => {
    return (await client.post<LoginMutationResponse>('/authorize', body)).data;
  },
};

export const refreshTokenUrl = `${BASE_URL}/users/refresh-token`;
