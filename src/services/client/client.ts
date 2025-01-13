import axios from 'axios';

import { requestSuccessInterceptor } from '@/services/client/interceptors/requestInterceptors';
import {
  responseFailureInterceptor,
  responseSuccessInterceptor,
} from '@/services/client/interceptors/responseInterceptors';

import { appConfig } from '@/configs';

const client = axios.create({
  headers: {
    'Content-Type': 'application/json',
  },
  baseURL: appConfig.apiURL,
});

client.interceptors.request.use(requestSuccessInterceptor);
client.interceptors.response.use(responseSuccessInterceptor, responseFailureInterceptor);

export default client;
