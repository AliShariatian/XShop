import { AxiosError } from "axios";
import { useQuery } from "react-query";
import { ProductsPropsType } from "@/components/product/type";
import { fetchSearchProduct } from "@/services/axios/requests/products";

const GetSearchProduct = (query: string) => {
   return useQuery<ProductsPropsType[], AxiosError>(["SearchProduct", query], async () => {
      try {
         const response = query ? await fetchSearchProduct(query) : null;

         return response?.data;
      } catch (error: any) {
         throw new Error(error.message);
      }
   });
};

export default GetSearchProduct;
