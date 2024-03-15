"use client";

import { FC } from "react";
import { data, dataType } from "./data";
import { arrow } from "@/public/img";
// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
// COMPONENT
import Image from "next/image";
import { CustomerCommentCard } from "@/components";

const CustomersComment: FC = (): JSX.Element => {
   return (
      <section className="relative my-20 flex flex-col gap-6">
         {/* TITLE */}
         <div className="container flex items-center justify-between">
            <h3 className="font-integralCF text-3xl xl:text-5xl">OUR HAPPY CUSTOMERS</h3>
            {/* Arrow controllers */}
            <div className="flex justify-end gap-3 *:size-6 *:cursor-pointer">
               <Image src={arrow} alt="prev" width={20} height={20} id="customer-tweet-button-prev" />
               <Image src={arrow} alt="next" width={20} height={20} id="customer-tweet-button-next" className="rotate-180" />
            </div>
         </div>

         {/* Blur in left and right */}
         <div className="max-xl:hidden">
            <div className="mask-to-l from-white-100/50 absolute left-0 top-10 z-30 h-full w-36 bg-gradient-to-r from-light/50 to-transparent backdrop-blur-xl" />
            <div className="mask-to-r from-white-100/50 absolute right-0 top-10 z-30 h-full w-36 bg-gradient-to-l from-light/50 to-transparent backdrop-blur-xl" />
         </div>

         <Swiper
            draggable
            loop
            grabCursor
            navigation={{
               nextEl: "#customer-tweet-button-next",
               prevEl: "#customer-tweet-button-prev",
            }}
            initialSlide={1}
            spaceBetween={13}
            breakpoints={{
               0: {
                  slidesPerView: 1,
               },
               500: {
                  slidesPerView: 2,
               },
               1280: {
                  slidesPerView: 3,
               },
               2280: {
                  slidesPerView: 4,
               },
            }}
            modules={[Navigation]}
            className="!grid grid-cols-3 px-5 xl:px-36"
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
