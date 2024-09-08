import { FC } from "react";
import type { Metadata } from "next";
import { staticPageMetadata } from "@/SEO";
import CartComponents from "@/components/forPages/cart";

export const metadata: Metadata = {
   title: staticPageMetadata.cart.title,
   description: staticPageMetadata.cart.desc,
};

const CartPage: FC = (): JSX.Element => {
   return <CartComponents />;
};

export default CartPage;
