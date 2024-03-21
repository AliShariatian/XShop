import { AxiosError } from "axios";
import { useQuery } from "react-query";
import { ProductsPropsType } from "@/components/product/type";
import { fetchAllProducts } from "@/services/axios/requests/products";

const GetAllProducts = () => {
   return useQuery<ProductsPropsType[], AxiosError>("AllProducts", async () => {
      try {
         const response = await fetchAllProducts();
         return response.data;
      } catch (error: any) {
         throw new Error(error.message);
      }
   });
};

export default GetAllProducts;
