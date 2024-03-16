"use client";

import { FC, useEffect, useState } from "react";
import { ProductsType } from "@/types/components/products";
import { getLimitProducts } from "@/axios/products";
import { toast } from "react-toastify";
// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
// COMPONENT
import Link from "next/link";
import { Section, ProductCard, Button, ProductCardSkeleton } from "@/components";

type VitrinePropsType = {
   title: string;
   buttonHref: string;
   order: "descending" | "ascending";
   sortBy: "createdAt" | "saleCount";
   productShowCount: number;
};

const Vitrine: FC<VitrinePropsType> = ({ title, sortBy, order, buttonHref, productShowCount }): JSX.Element => {
   const [products, setProducts] = useState<ProductsType[]>([]);

   useEffect(() => {
      const abortController = new AbortController();
      // Get products data from server
      (async () => {
         try {
            const response = await getLimitProducts({ limit: productShowCount, sortBy, order, signal: abortController.signal });
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
   }, [sortBy, order, productShowCount]);

   return (
      <Section parentClassName="py-[5.62rem]" sectionClassName="flex flex-col items-center gap-16">
         <h2 className="font-integralCF text-5xl">{title}</h2>

         <Swiper spaceBetween={20} slidesPerView={"auto"} className="!w-full">
            {products.length
               ? products.map((item: ProductsType) => (
                    <SwiperSlide key={item.id} className="w-fit">
                       <ProductCard {...item} />
                    </SwiperSlide>
                 ))
               : //  Skeleton loading
                 Array(productShowCount)
                    .fill(0)
                    .map((_, index) => (
                       <SwiperSlide key={index} className="w-fit">
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
