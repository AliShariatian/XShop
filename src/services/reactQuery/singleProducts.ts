import { useQuery } from "react-query";
import { fetchSingleProduct } from "@/services/axios/requests/products";
import { IProductsProps } from "@/components/product/type";
import { AxiosError } from "axios";

const GetSingleProducts = (slug: string) => {
   return useQuery<IProductsProps[], AxiosError>(["SingleProduct", slug], async () => {
      try {
         const response = await fetchSingleProduct(slug);

         return response.data;
      } catch (error: any) {
         throw new Error(error.message);
      }
   });
};

export default GetSingleProducts;
