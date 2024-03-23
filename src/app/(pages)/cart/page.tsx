import { FC } from "react";
import dynamic from "next/dynamic";
const CartComponents = dynamic(() => import("@/components/forPages/cart"));

const CartPage: FC = (): JSX.Element => {
   return <CartComponents />;
};

export default CartPage;
