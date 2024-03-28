"use client";

import { CSSProperties, FC, memo, useState } from "react";
import type { Swiper as SwiperType } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs } from "swiper/modules";
import Image from "next/image";
import "swiper/css/navigation";

type PropsType = {
   images: string[];
   alt: string;
};

const navigationStyle = {
   "--swiper-navigation-color": "#000",
   "--swiper-navigation-size": "25px",
} as CSSProperties;

const ProductImageGallery: FC<PropsType> = ({ images, alt }): JSX.Element => {
   const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);
   const [activeImageIndex, setActiveImageIndex] = useState<number>(0);

   return (
      <section className="flex flex-col gap-3 xl:w-1/3">
         {/* Big image */}
         <Swiper
            thumbs={{ swiper: thumbsSwiper }}
            modules={[Thumbs, Navigation]}
            spaceBetween={9}
            navigation={true}
            grabCursor
            style={navigationStyle}
            onActiveIndexChange={(element) => setActiveImageIndex(element.activeIndex)}
            className="aspect-square w-full overflow-hidden rounded-20"
         >
            {images.map((item) => (
               <SwiperSlide key={item} className="flex size-full select-none items-center justify-center">
                  <Image src={item} width={2000} alt={alt} height={2000} className="transition hover:scale-110" />
               </SwiperSlide>
            ))}
         </Swiper>

         {/* Small images */}
         <Swiper
            onSwiper={setThumbsSwiper}
            navigation={true}
            modules={[Thumbs, Navigation]}
            style={navigationStyle}
            spaceBetween={5}
            slidesPerView={3}
            grabCursor
            className="grid w-full grid-cols-3"
         >
            {images.map((item, index) => (
               <SwiperSlide
                  key={index}
                  className={`${activeImageIndex === index ? "border-dark/20" : "border-transparent"} overflow-hidden rounded-20 border-[3px]`}
               >
                  <Image src={item} width={300} alt={alt} height={300} className="aspect-square size-full" />
               </SwiperSlide>
            ))}
         </Swiper>
      </section>
   );
};

export default memo(ProductImageGallery);
