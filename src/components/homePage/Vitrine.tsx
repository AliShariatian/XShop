"use client";

import { FC, useEffect, useState } from "react";
import { ProductsType } from "@/types/products";
import { getLimitProducts } from "@/axios/requests/products";
import { toast } from "react-toastify";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

// COMPONENT
import { Section, ProductCard, Button, ProductCardSkeleton } from "@/components";
import Link from "next/link";

const PRODUCT_SHOW_COUNT: number = 4;

type PropsType = {
   title: string;
   sortBy: "createdAt" | "saleCount";
   order: "descending" | "ascending";
   buttonHref: string;
};

const Vitrine: FC<PropsType> = ({ title, sortBy, order, buttonHref }): JSX.Element => {
   const [products, setProducts] = useState<ProductsType[]>([]);

   useEffect(() => {
      (async () => {
         try {
            const response = await getLimitProducts(PRODUCT_SHOW_COUNT, sortBy, order);
            setProducts(response.data);
         } catch (err: any) {
            toast.error(err.message);
            console.log(err.message);
         }
      })();
   }, [sortBy, order]);

   return (
      <Section parentClassName="py-[5.62rem]" sectionClassName="flex flex-col items-center gap-16">
         <h2 className="font-integralCF text-5xl">{title}</h2>

         <Swiper
            draggable
            breakpoints={{
               0: {
                  slidesPerView: 1,
                  spaceBetween: -25,
               },
               1280: {
                  slidesPerView: 4,
                  spaceBetween: 0,
               },
            }}
            className="!grid grid-cols-4"
         >
            {products.length
               ? products.map((item: ProductsType) => (
                    <SwiperSlide key={item.id}>
                       <ProductCard {...item} />
                    </SwiperSlide>
                 ))
               : //  Skeleton loading
                 Array(PRODUCT_SHOW_COUNT)
                    .fill(0)
                    .map((_, index) => (
                       <SwiperSlide key={index}>
                          <ProductCardSkeleton />
                       </SwiperSlide>
                    ))}
         </Swiper>

         <Link href={buttonHref}>
            <Button bgColor="white" borderColor="border-grey-100" py="py-3">
               View All
            </Button>
         </Link>
      </Section>
   );
};

export default Vitrine;
