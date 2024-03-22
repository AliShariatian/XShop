import { useQuery, useQueryClient } from "react-query";
import { fetchSingleProduct } from "@/services/axios/requests/products";
import { ProductsPropsType } from "@/components/product/type";
import { AxiosError } from "axios";

const GetSingleProducts = (slug: string) => {
   const queryClient = useQueryClient();

   return useQuery<ProductsPropsType[], AxiosError>(
      ["SingleProduct", slug],
      async () => {
         try {
            const response = await fetchSingleProduct(slug);

            return response.data;
         } catch (error: any) {
            throw new Error(error.message);
         }
      },
      {
         // initialData: () => {
            // const products = queryClient.getQueryData("AllProducts");
            // const product = products.find((item) => item.slug === slug);
            // return product;
         // },
      },
   );
};

export default GetSingleProducts;
