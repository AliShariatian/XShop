// TYPE
import { FC, PropsWithChildren } from "react";
import type { Metadata } from "next";
// FONT and STYLE
import { integralCFFont, satoshiFont } from "@/utils/fonts";
import "./globals.css";

export const metadata: Metadata = {
   title: "XShop",
   description: "XShop | Coded by Ali Shariatian",
};

const RootLayout: FC<PropsWithChildren> = ({ children }): JSX.Element => {
   return (
      <html lang="en">
         <body className={`${satoshiFont.variable} ${integralCFFont.variable} font-satoshi`}>{children}</body>
      </html>
   );
};

export default RootLayout;
