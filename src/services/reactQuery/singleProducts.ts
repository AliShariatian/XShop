import { useQuery, useQueryClient } from "react-query";
import { fetchSingleProduct } from "@/services/axios/requests/products";

const GetSingleProducts = (slug: string) => {
   const queryClient = useQueryClient();

   return useQuery(
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
         initialData: () => {
            // const products = queryClient.getQueryData("AllProducts");
            // const product = products.find((item) => item.id === +id);
            // return product;
         },
      },
   );
};

export default GetSingleProducts;
