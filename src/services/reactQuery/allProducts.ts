import { AxiosError } from "axios";
import { useQuery } from "react-query";
import { IProductsProps } from "@/components/product/type";
import { fetchAllProducts } from "@/services/axios/requests/products";
import { TFilterState } from "@/components/forPages/products";

const GetAllProducts = (query: TFilterState) => {
   return useQuery<{ products: IProductsProps[]; allProductsCount: number }, AxiosError>(
      ["AllProducts", query],
      async () => {
         try {
            const response = await fetchAllProducts(query);
            // Return data and Length of all data without page limit
            return { products: response.data, allProductsCount: response.headers["x-total-count"] };
         } catch (error: any) {
            throw new Error(error.message);
         }
      },
      {
         keepPreviousData: true,
      },
   );
};

export default GetAllProducts;
