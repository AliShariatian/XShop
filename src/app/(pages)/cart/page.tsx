import { FC } from "react";
import dynamic from "next/dynamic";
import { PageLoaderWhiteScreen } from "@/components";
const CartComponents = dynamic(() => import("@/components/forPages/cart"), {
   loading: () => <PageLoaderWhiteScreen />,
});

const CartPage: FC = (): JSX.Element => {
   return <CartComponents />;
};

export default CartPage;
