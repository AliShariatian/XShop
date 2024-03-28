import { FC } from "react";
import dynamic from "next/dynamic";

import { PageLoaderWhiteScreen } from "@/components";
const AllProductComponents = dynamic(() => import("@/components/forPages/products"), {
   loading: () => <PageLoaderWhiteScreen />,
});

const AllProductsPage: FC = (): JSX.Element => {
   return <AllProductComponents />;
};

export default AllProductsPage;
