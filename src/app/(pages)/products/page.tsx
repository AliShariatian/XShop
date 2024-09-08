import { FC } from "react";
import type { Metadata } from "next";
import { staticPageMetadata } from "@/SEO";
import AllProductComponents from "@/components/forPages/products";

export const metadata: Metadata = {
   title: staticPageMetadata.products.title,
   description: staticPageMetadata.products.desc,
};

const AllProductsPage: FC = (): JSX.Element => {
   return <AllProductComponents />;
};

export default AllProductsPage;
