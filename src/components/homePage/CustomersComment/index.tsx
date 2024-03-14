"use client";

import { FC } from "react";
import { CustomerCommentCard } from "@/components";
import { data, dataType } from "./data";
import { Swiper, SwiperSlide } from "swiper/react";

const CustomersComment: FC = (): JSX.Element => {
   return (
      <section className="relative my-24 flex flex-col gap-8">
         <h3 className="container font-integralCF text-5xl">OUR HAPPY CUSTOMERS</h3>

         <div className="max-xl:hidden">
            <div className="mask-to-l from-white-100/50 absolute left-0 top-10 z-30 h-full w-36 bg-gradient-to-r from-light/50 to-transparent backdrop-blur-xl" />
            <div className="mask-to-r from-white-100/50 absolute right-0 top-10 z-30 h-full w-36 bg-gradient-to-l from-light/50 to-transparent backdrop-blur-xl" />
         </div>

         <Swiper
            draggable
            loop
            grabCursor
            initialSlide={1}
            breakpoints={{
               0: {
                  slidesPerView: 1,
                  spaceBetween: 20,
               },
               500: {
                  slidesPerView: 2,
                  spaceBetween: 20,
               },
               1280: {
                  slidesPerView: 3,
                  spaceBetween: 20,
               },
            }}
            className="!grid grid-cols-3 px-5 xl:px-28"
         >
            {data.map((item: dataType) => (
               <SwiperSlide key={item.name}>
                  <CustomerCommentCard {...item} />
               </SwiperSlide>
            ))}
         </Swiper>
      </section>
   );
};

export default CustomersComment;
