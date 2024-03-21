// TYPE
import { FC, PropsWithChildren } from "react";
import type { Metadata } from "next";
// FONT and STYLE
import { integralCFFont, satoshiFont } from "@/public/font";
import "swiper/css";
import "./globals.css";
// Toastify
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// HOC
import ReactQueryProvider from "@/components/HOC/ReactQueryProvider";
// COMPONENT
import { Header, Footer, PageLoadingProgressBar } from "@/components";

export const metadata: Metadata = {
   title: "XShop | Online store",
   description: "XShop - Coded by Ali Shariatian",
};

const RootLayout: FC<PropsWithChildren> = ({ children }): JSX.Element => {
   return (
      <html lang="en">
         <body className={`${satoshiFont.variable} ${integralCFFont.variable} overflow-x-hidden font-satoshi`}>
            {" "}
            <PageLoadingProgressBar />
            <ReactQueryProvider>
               <Header />
               <ToastContainer position="bottom-right" limit={3} />
               {children}
               <Footer />
            </ReactQueryProvider>
         </body>
      </html>
   );
};

export default RootLayout;
