import { AxiosError } from "axios";
import { useQuery } from "react-query";
import { IProductsProps } from "@/components/common/product/type";
import { fetchSearchProduct } from "@/services/axios/requests/products";

const GetSearchProduct = (query: string) => {
   return useQuery<IProductsProps[], AxiosError>(["SearchProduct", query], async () => {
      try {
         const response = query ? await fetchSearchProduct(query) : null;

         return response?.data;
      } catch (error: any) {
         throw new Error(error.message);
      }
   });
};

export default GetSearchProduct;
