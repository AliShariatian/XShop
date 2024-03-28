import { FC } from "react";
import type { Metadata } from "next";
import { staticPageMetadata } from "@/SEO";

import dynamic from "next/dynamic";
import { PageLoaderWhiteScreen } from "@/components";
const CartComponents = dynamic(() => import("@/components/forPages/cart"), {
   loading: () => <PageLoaderWhiteScreen />,
});

export const metadata: Metadata = {
   title: staticPageMetadata.cart.title,
   description: staticPageMetadata.cart.desc,
};

const CartPage: FC = (): JSX.Element => {
   return <CartComponents />;
};

export default CartPage;
