import { AxiosError, AxiosInstance, AxiosResponse } from "axios";

const responseInterceptor = (instance: AxiosInstance) => {
   instance.interceptors.response.use(
      (response: AxiosResponse) => {
         // Add "products/" to slug for every items
         const editedResponse = response.data.map((item: any) => {
            return { ...item, slug: `products/${item.slug}` };
         });

         const newResponse = { ...response, data: editedResponse };

         return newResponse;
      },

      (err: AxiosError) => {
         const status: number = err.response ? err.response.status : 500;

         switch (status) {
            case 403:
               return Promise.reject({ status: 403, message: "Error 403!" });

            case 429:
               return Promise.reject({ status: 429, message: "Error 429!" });

            case 404:
               return Promise.reject({ status: 404, message: "Error 404!" });

            case 401:
               return Promise.reject({ status: 401, message: "Error 401!" });

            default:
               return Promise.reject({ status: 500, message: "Network Error! Please try again later" });
         }
      },
   );
};

export default responseInterceptor;
