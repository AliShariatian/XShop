import { FC } from "react";
import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { staticPageMetadata, PageTitlePrefix } from "@/SEO";

import { PageLoaderWhiteScreen } from "@/components";
import { fetchSingleProduct } from "@/services/axios/requests/products";
const SingleProductComponents = dynamic(() => import("@/components/forPages/product"), {
   loading: () => <PageLoaderWhiteScreen />,
});

// Get dynamic browser title and description for SEO
export const generateMetadata = async ({ params }: { params: { product: string } }): Promise<Metadata> => {
   const { product } = params;

   const response = await fetchSingleProduct(product);
   const currentProduct = response?.data[0];

   const title = currentProduct?.title ? PageTitlePrefix + currentProduct?.title : staticPageMetadata.home.title;
   const description = currentProduct?.description || staticPageMetadata.home.desc;

   return {
      title,
      description,
   };
};

const SingleProductPage: FC = (): JSX.Element => {
   return <SingleProductComponents />;
};

export default SingleProductPage;
