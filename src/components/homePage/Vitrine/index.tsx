"use client";

import { FC } from "react";
import { toast } from "react-toastify";
// TYPE
import { VitrinePropsType } from "./type";
import { ProductsType } from "@/components/product/type";
// COMPONENT
import Link from "next/link";
import { Section, ProductCard, Button, ProductCardSkeleton, ScrollById } from "@/components";
// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
// GET DATA FROM SERVER
import { GetVitrineNewArrivalsProducts } from "@/services/reactQuery/products";

const Vitrine: FC<VitrinePropsType> = ({ title, sortBy, order, buttonHref, productShowCount, id }): JSX.Element => {
   const { data: products, isLoading, isError, error } = GetVitrineNewArrivalsProducts({ limit: productShowCount, sortBy, order });

   // Show toast message when error to fetch data from server
   isError && toast.error(error.message);

   return (
      <Section parentClassName="my-16" sectionClassName="flex flex-col items-center gap-14">
         <ScrollById id={id} />

         <h2 className="font-integralCF text-3xl xl:text-5xl">{title}</h2>

         {isLoading || isError ? (
            //  Skeleton loading
            <div className="flex gap-3 max-md:[&>*:nth-child(1)]:hidden max-xl:[&>*:nth-child(2)]:hidden max-2xl:[&>*:nth-child(3)]:hidden">
               {Array(productShowCount)
                  .fill(0)
                  .map((_, index) => (
                     <ProductCardSkeleton key={index} />
                  ))}
            </div>
         ) : (
            <Swiper spaceBetween={15} slidesPerView={"auto"} className="w-full">
               {products?.map((item: ProductsType) => (
                  <SwiperSlide key={item.id} className="w-fit">
                     <ProductCard {...item} />
                  </SwiperSlide>
               ))}
            </Swiper>
         )}

         <Link href={buttonHref} className="max-xl:w-full">
            <Button bgColor="white" borderColor="border-grey-100" py="py-3" className="max-xl:w-full">
               View All
            </Button>
         </Link>
      </Section>
   );
};

export default Vitrine;
