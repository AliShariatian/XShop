import { AxiosError } from "axios";
import { useQuery } from "react-query";
import { IProductsProps } from "@/components/product/type";
import { fetchAllProducts } from "@/services/axios/requests/products";
import { TFilterState } from "@/components/forPages/products";

const GetAllProducts = (query: TFilterState) => {
   return useQuery<IProductsProps[], AxiosError>(["AllProducts", query], async () => {
      try {
         const response = await fetchAllProducts(query);
         return response.data;
      } catch (error: any) {
         throw new Error(error.message);
      }
   });
};

export default GetAllProducts;
