import axios from 'axios';

import { requestSuccessInterceptor } from '@/services/client/interceptors/requestInterceptors';
import {
  responseFailureInterceptor,
  responseSuccessInterceptor,
} from '@/services/client/interceptors/responseInterceptors';

import { appConfig } from '@/configs';

export const client = axios.create({
  headers: {
    'Content-Type': 'application/json',
  },
  baseURL: appConfig.apiURL,
  timeout: 10000,
  validateStatus: function (status) {
    return status >= 200 && status < 500;
  },
});

client.interceptors.request.use(requestSuccessInterceptor);
client.interceptors.response.use(responseSuccessInterceptor, responseFailureInterceptor);
