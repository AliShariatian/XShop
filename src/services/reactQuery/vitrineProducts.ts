import { AxiosError } from "axios";
import { useQuery } from "react-query";
import { ProductsPropsType } from "@/components/product/type";
import { fetchLimitProductsType } from "@/services/axios/requests/products/type";
import { fetchLimitProducts } from "@/services/axios/requests/products";

// Data Fetcher
const VitrineProductsFetcher = async ({ limit, sortBy, order }: fetchLimitProductsType) => {
   try {
      const response = await fetchLimitProducts({ limit, sortBy, order });
      return response.data;
   } catch (error: any) {
      throw new Error(error.message);
   }
};

const GetVitrineNewArrivalsProducts = ({ limit, sortBy, order }: fetchLimitProductsType) => {
   return useQuery<ProductsPropsType[], AxiosError>("VitrineNewArrivalsProducts", async () => {
      return await VitrineProductsFetcher({ limit, sortBy, order });
   });
};

const GetVitrineCreatedAtProducts = ({ limit, sortBy, order }: fetchLimitProductsType) => {
   return useQuery<ProductsPropsType[], AxiosError>("VitrineCreatedAtProducts", async () => {
      return await VitrineProductsFetcher({ limit, sortBy, order });
   });
};

export { GetVitrineNewArrivalsProducts, GetVitrineCreatedAtProducts };
