"use client";

import { FC, memo } from "react";
import { toast } from "react-toastify";
// TYPE
import { TVitrineProps } from "./type";
import { IProducts } from "@/components/common/product/type";
// COMPONENT
import Link from "next/link";
import { Section, ProductCard, Button, ProductCardSkeleton, ScrollById, BigHeading } from "@/components";
// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
// GET DATA FROM SERVER
import GetVitrineProducts from "@/services/reactQuery/vitrineProducts";

const Vitrine: FC<TVitrineProps> = ({ title, sortBy, order, buttonHref, productShowCount, id }): JSX.Element => {
   const {
      data: products,
      isLoading,
      isError,
      error,
   } = GetVitrineProducts({ limit: productShowCount, sortBy: sortBy === "createdAt" ? "createdAt" : "saleCount", order });

   // Show toast message when error to fetch data from server
   isError && toast.error(error.message);

   return (
      <Section parentClassName="my-16" sectionClassName="flex flex-col items-center gap-14">
         <ScrollById id={id} />

         <BigHeading tag="h2" title={title} />

         {isLoading || isError ? (
            //  Skeleton loading
            <div className="vitrineProductsSkeleton">
               {Array(productShowCount)
                  .fill(0)
                  .map((_, index) => (
                     <ProductCardSkeleton key={index} />
                  ))}
            </div>
         ) : (
            <Swiper spaceBetween={15} slidesPerView={"auto"} className="w-full">
               {products?.map((item: IProducts) => (
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

export default memo(Vitrine);
