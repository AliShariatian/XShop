// TYPE
import { FC, PropsWithChildren } from "react";
import type { Metadata } from "next";
import { staticPageMetadata } from "@/SEO";
// FONT and STYLE
import { integralCFFont, satoshiFont } from "@/public/font";
import "swiper/css";
import "./globals.css";
// Toastify
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// HOC
import HOCProvider from "@/components/HOC";
// COMPONENT
import { Header, Footer, PageLoadingProgressBar } from "@/components";

export const metadata: Metadata = {
   title: staticPageMetadata.home.title,
   description: staticPageMetadata.home.desc,
};

const RootLayout: FC<PropsWithChildren> = ({ children }): JSX.Element => {
   return (
      <html lang="en">
         <body className={`${satoshiFont.variable} ${integralCFFont.variable} relative overflow-x-hidden font-satoshi`}>
            <PageLoadingProgressBar />
            <HOCProvider>
               <Header />
               <ToastContainer position="bottom-right" limit={3} />
               {children}
               <Footer />
            </HOCProvider>
         </body>
      </html>
   );
};

export default RootLayout;
