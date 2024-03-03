import { FC, PropsWithChildren } from "react";
import type { Metadata } from "next";

import localFont from "next/font/local";
import "./globals.css";

const satoshiFont = localFont({ src: "../../public/font/satoshi/Satoshi-Variable.ttf", variable: "--font-satoshi" });

const integralCFFont = localFont({
   src: [
      {
         path: "../../public/font/integral-cf/IntegralCF-Regular.woff",
         weight: "300",
         style: "normal",
      },
      {
         path: "../../public/font/integral-cf/IntegralCF-Medium.woff",
         weight: "400",
         style: "normal",
      },
      {
         path: "../../public/font/integral-cf/IntegralCF-DemiBold.woff",
         weight: "500",
         style: "normal",
      },
      {
         path: "../../public/font/integral-cf/IntegralCF-Bold.woff",
         weight: "600",
         style: "normal",
      },
      {
         path: "../../public/font/integral-cf/IntegralCF-ExtraBold.woff",
         weight: "700",
         style: "normal",
      },
      {
         path: "../../public/font/integral-cf/IntegralCF-Heavy.woff",
         weight: "800",
         style: "normal",
      },
   ],
   variable: "--font-integralCF",
});

export const metadata: Metadata = {
   title: "XShop",
   description: "XShop | Code by Ali Shariatian",
};

const RootLayout: FC<PropsWithChildren> = ({ children }): JSX.Element => {
   return (
      <html lang="en">
         <body className={`${satoshiFont.variable} ${integralCFFont.variable}`}>{children}</body>
      </html>
   );
};

export default RootLayout;
