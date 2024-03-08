// TYPE
import { FC, PropsWithChildren } from "react";
import type { Metadata } from "next";
// FONT and STYLE
import { integralCFFont, satoshiFont } from "@/utils/fonts";
import "./globals.css";
// COMPONENT
import { ToastContainer } from "react-toastify";
import { Navbar } from "@/components";

export const metadata: Metadata = {
   title: "XShop online store",
   description: "XShop | Coded by Ali Shariatian",
};

const RootLayout: FC<PropsWithChildren> = ({ children }): JSX.Element => {
   return (
      <html lang="en">
         <body className={`${satoshiFont.variable} ${integralCFFont.variable} font-satoshi`}>
            <Navbar />
            <ToastContainer />
            {children}
         </body>
      </html>
   );
};

export default RootLayout;
