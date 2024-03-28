import { FC } from "react";
import dynamic from "next/dynamic";

import { PageLoaderWhiteScreen } from "@/components";
const SingleProductComponents = dynamic(() => import("@/components/forPages/product"), {
   loading: () => <PageLoaderWhiteScreen />,
});

const SingleProductPage: FC = (): JSX.Element => {
   return <SingleProductComponents />;
};

export default SingleProductPage;
