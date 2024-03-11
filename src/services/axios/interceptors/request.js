const requestInterceptor = (instance) => {
   instance.interceptors.request.use(
      (config) => {
         if (config.data instanceof FormData) {
            config.headers["Content-Type"] = "multipart/form-data";
         }

         return config;
      },

      (err) => {
         return Promise.reject(err);
      },
   );
};

export default requestInterceptor;
