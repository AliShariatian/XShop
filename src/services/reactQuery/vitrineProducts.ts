import { AxiosError } from "axios";
import { useQuery } from "react-query";
import { ProductsPropsType } from "@/components/product/type";
import { fetchLimitProducts } from "@/services/axios/requests/products";
import { fetchLimitProductsType } from "@/services/axios/requests/products/type";

const GetVitrineProducts = ({ limit, sortBy, order }: fetchLimitProductsType) => {
   return useQuery<ProductsPropsType[], AxiosError>(sortBy, async () => {
      try {
         const response = await fetchLimitProducts({ limit, sortBy, order });
         return response.data;
      } catch (error: any) {
         throw new Error(error.message);
      }
   });
};

export default GetVitrineProducts;
