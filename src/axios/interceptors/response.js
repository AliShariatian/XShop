const responseInterceptor = (instance) => {
   instance.interceptors.response.use(
      (response) => {
         return response;
      },

      (err) => {
         const status = err.response ? err.response.status : 500;

         switch (status) {
            case 403:
               return Promise.reject("error 403");

            case 429:
               return Promise.reject("error 429");

            case 404:
               return Promise.reject("error 404");

            case 401:
               return Promise.reject("error 401");

            default:
               return Promise.reject("Network Error");
         }
      },
   );
};

export default responseInterceptor;
