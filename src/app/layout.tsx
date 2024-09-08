// TYPE
import { FC, PropsWithChildren } from "react";
import type { Metadata } from "next";
// SEO
import { staticPageMetadata } from "@/SEO";
// FONT and STYLE
import { integralCFFont, satoshiFont } from "@/public/font";
import "swiper/css";
import "./globals.css";
// Provider
import Providers from "@/providers";
// COMPONENT
import { Header, Footer, PageLoadingProgressBar, ToastContainer } from "@/components";

export const metadata: Metadata = {
   manifest: "/manifest.json",

   title: staticPageMetadata.home.title,
   description: staticPageMetadata.home.desc,
};

const RootLayout: FC<PropsWithChildren> = ({ children }): JSX.Element => {
   return (
      <html lang="en">
         <body className={`${satoshiFont.variable} ${integralCFFont.variable} relative overflow-x-hidden font-satoshi`}>
            <PageLoadingProgressBar />

            <Providers>
               <Header />
               <ToastContainer />
               {children}
               <Footer />
            </Providers>
         </body>
      </html>
   );
};

export default RootLayout;
