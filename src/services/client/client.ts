import axios from 'axios';

import { requestSuccessInterceptor } from '@/services/client/interceptors/requestInterceptors';
import {
  responseFailureInterceptor,
  responseSuccessInterceptor,
} from '@/services/client/interceptors/responseInterceptors';

import { appConfig } from '@/configs';

const axiosClient = axios.create({
  headers: {
    'Content-Type': 'application/json',
  },
  baseURL: appConfig.apiURL,
});

axiosClient.interceptors.request.use(requestSuccessInterceptor);
axiosClient.interceptors.response.use(responseSuccessInterceptor, responseFailureInterceptor);

export default axiosClient;
