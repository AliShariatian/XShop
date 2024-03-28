import { FC } from "react";
import type { Metadata } from "next";
import { staticPageMetadata } from "@/SEO";

import dynamic from "next/dynamic";
import { PageLoaderWhiteScreen } from "@/components";
const AllProductComponents = dynamic(() => import("@/components/forPages/products"), {
   loading: () => <PageLoaderWhiteScreen />,
});

export const metadata: Metadata = {
   title: staticPageMetadata.products.title,
   description: staticPageMetadata.products.desc,
};

const AllProductsPage: FC = (): JSX.Element => {
   return <AllProductComponents />;
};

export default AllProductsPage;
