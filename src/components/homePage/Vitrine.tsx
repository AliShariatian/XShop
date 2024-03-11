"use client";

import { FC, useEffect, useState } from "react";
import { ProductsType } from "@/types/products";
import { getLimitProducts } from "@/axios/products";
import { toast } from "react-toastify";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

// COMPONENT
import Link from "next/link";
import { Section, ProductCard, Button, ProductCardSkeleton } from "@/components";

const PRODUCT_SHOW_COUNT: number = 4;

type PropsType = {
   title: string;
   buttonHref: string;
   order: "descending" | "ascending";
   sortBy: "createdAt" | "saleCount";
};

const Vitrine: FC<PropsType> = ({ title, sortBy, order, buttonHref }): JSX.Element => {
   const [products, setProducts] = useState<ProductsType[]>([]);

   useEffect(() => {
      const abortController = new AbortController();
      // Get products data from server
      (async () => {
         try {
            const response = await getLimitProducts(PRODUCT_SHOW_COUNT, sortBy, order, abortController.signal);
            setProducts(response.data);
         } catch (err: any) {
            toast.error(err.message);
         }
      })();

      return () => {
         setTimeout(() => {
            abortController.abort();
         }, 500);
      };
   }, [sortBy, order]);

   return (
      <Section parentClassName="py-[5.62rem]" sectionClassName="flex flex-col items-center gap-16">
         <h2 className="font-integralCF text-5xl">{title}</h2>

         {products.length ? (
            <Swiper
               draggable
               breakpoints={{
                  0: {
                     slidesPerView: 1,
                     spaceBetween: -15,
                  },
                  500: {
                     slidesPerView: 2,
                     spaceBetween: -15,
                  },

                  1280: {
                     slidesPerView: 3,
                     spaceBetween: -115,
                  },
                  1600: {
                     slidesPerView: 4,
                     spaceBetween: 0,
                  },
               }}
               className="!grid grid-cols-4"
            >
               {products.map((item: ProductsType) => (
                  <SwiperSlide key={item.id}>
                     <ProductCard {...item} />
                  </SwiperSlide>
               ))}
            </Swiper>
         ) : (
            //  Skeleton loading
            <div className="flex gap-4 max-md:[&>*:nth-child(1)]:hidden max-lg:[&>*:nth-child(2)]:hidden max-xl:[&>*:nth-child(3)]:hidden">
               {Array(PRODUCT_SHOW_COUNT)
                  .fill(0)
                  .map((_, index) => (
                     <ProductCardSkeleton key={index} />
                  ))}
            </div>
         )}

         <Link href={buttonHref}>
            <Button bgColor="white" borderColor="border-grey-100" py="py-3">
               View All
            </Button>
         </Link>
      </Section>
   );
};

export default Vitrine;
