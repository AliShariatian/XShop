import { FC } from "react";
import dynamic from "next/dynamic";
const AllProductComponents = dynamic(() => import("@/components/forPages/products"));

const AllProductsPage: FC = (): JSX.Element => {
   return <AllProductComponents />;
};

export default AllProductsPage;
