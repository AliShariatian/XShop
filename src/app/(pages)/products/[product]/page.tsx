import { FC } from "react";
import dynamic from "next/dynamic";
const SingleProductComponents = dynamic(() => import("@/components/forPages/product"));

const SingleProductPage: FC = (): JSX.Element => {
   return <SingleProductComponents />;
};

export default SingleProductPage;
