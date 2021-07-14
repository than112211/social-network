import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';

import queryString from 'query-string';

const axiosClient = axios.create({
    baseURL: process.env.REACT_APP_HOST_SV,
    headers: {
      'content-type': 'application/json',
    },
    paramsSerializer: params => queryString.stringify(params),
});

axiosClient.interceptors.request.use(async (config: AxiosRequestConfig) => {
    return config;
});

axiosClient.interceptors.response.use((response : AxiosResponse) => {
    return response
}, (error: AxiosError) => {
    return error
});

export default axiosClient;