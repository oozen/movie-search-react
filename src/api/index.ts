import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

const instance: AxiosInstance = axios.create({
  baseURL: process.env.API_URL,
  responseType: 'json'
});

instance.interceptors.request.use(
  function(config: AxiosRequestConfig) {
    config.headers = {
      ...config.headers,
    };
    return config;
  },
  function(error: ErrorEvent) {
    return Promise.reject(error);
  }
);

export default instance;
