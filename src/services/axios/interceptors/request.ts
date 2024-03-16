import { AxiosError, AxiosInstance, InternalAxiosRequestConfig } from "axios";

const requestInterceptor = (instance: AxiosInstance) => {
   instance.interceptors.request.use(
      (config: InternalAxiosRequestConfig) => {
         if (config.data instanceof FormData) {
            config.headers["Content-Type"] = "multipart/form-data";
         }

         return config;
      },

      (err: AxiosError) => {
         return Promise.reject(err);
      },
   );
};

export default requestInterceptor;
