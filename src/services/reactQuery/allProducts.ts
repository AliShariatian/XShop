import { AxiosError } from "axios";
import { useQuery } from "react-query";
import { ProductsPropsType } from "@/components/product/type";
import { fetchAllProducts } from "@/services/axios/requests/products";
import { TFilterState } from "@/components/forPages/products";

const GetAllProducts = (query: TFilterState) => {
   return useQuery<ProductsPropsType[], AxiosError>(["AllProducts", query], async () => {
      try {
         const response = await fetchAllProducts(query);
         return response.data;
      } catch (error: any) {
         throw new Error(error.message);
      }
   });
};

export default GetAllProducts;
