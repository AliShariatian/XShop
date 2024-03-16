"use client";

import { FC, useEffect, useState } from "react";
import { getLimitProducts } from "@/services/axios/requests/products";
import { toast } from "react-toastify";
// TYPE
import { VitrinePropsType } from "./type";
import { ProductsType } from "@/components/product/type";
// COMPONENT
import Link from "next/link";
import { Section, ProductCard, Button, ProductCardSkeleton } from "@/components";
// Swiper
import { Swiper, SwiperSlide } from "swiper/react";

const Vitrine: FC<VitrinePropsType> = ({ title, sortBy, order, buttonHref, productShowCount }): JSX.Element => {
   const [products, setProducts] = useState<ProductsType[]>([]);

   useEffect(() => {
      const abortController = new AbortController();
      // Get products data from server
      (async () => {
         try {
            const response = await getLimitProducts({
               limit: productShowCount,
               sortBy,
               order,
               signal: abortController.signal,
            });
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

         <Swiper spaceBetween={15} slidesPerView={"auto"} className="w-full">
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
