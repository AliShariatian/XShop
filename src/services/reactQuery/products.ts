import { AxiosError } from "axios";
import { useQuery, useQueryClient } from "react-query";
import { ProductsPropsType } from "@/components/product/type";
import { fetchLimitProductsType } from "@/services/axios/requests/products/type";
import { fetchAllProducts, fetchLimitProducts, fetchSingleProduct } from "@/services/axios/requests/products";

// All
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

// Vitrine

const VitrineFetcher = async ({ limit, sortBy, order }: fetchLimitProductsType) => {
   try {
      const response = await fetchLimitProducts({ limit, sortBy, order });
      return response.data;
   } catch (error: any) {
      throw new Error(error.message);
   }
};

const GetVitrineNewArrivalsProducts = async ({ limit, sortBy, order }: fetchLimitProductsType) => {
   return useQuery<ProductsPropsType[], AxiosError>("VitrineNewArrivalsProducts", await VitrineFetcher({ limit, sortBy, order }));
};

const GetVitrineCreatedAtProducts = async ({ limit, sortBy, order }: fetchLimitProductsType) => {
   return useQuery<ProductsPropsType[], AxiosError>("VitrineCreatedAtProducts", await VitrineFetcher({ limit, sortBy, order }));
};

// Single
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

export { GetAllProducts, GetVitrineNewArrivalsProducts, GetVitrineCreatedAtProducts, GetSingleProducts };
