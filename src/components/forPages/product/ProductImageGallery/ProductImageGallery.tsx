"use client";

import { CSSProperties, FC, useState } from "react";
import type { Swiper as SwiperType } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs } from "swiper/modules";
import Image from "next/image";
import "swiper/css/navigation";

type PropsType = {
   images: string[];
   alt: string;
};

const ProductImageGallery: FC<PropsType> = ({ images, alt }): JSX.Element => {
   const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);

   return (
      <section className="flex flex-col gap-3 xl:w-1/3">
         {/* Main image */}
         <Swiper
            thumbs={{ swiper: thumbsSwiper }}
            modules={[Thumbs, Navigation]}
            spaceBetween={9}
            className="aspect-square w-full overflow-hidden rounded-20"
         >
            {images.map((item) => (
               <SwiperSlide key={item} className="flex size-full items-center justify-center">
                  <Image src={item} width={2000} alt={alt} height={2000} className="transition hover:scale-110" />
               </SwiperSlide>
            ))}
         </Swiper>

         {/* Small images */}
         <Swiper
            onSwiper={setThumbsSwiper}
            navigation={true}
            modules={[Thumbs, Navigation]}
            style={
               {
                  "--swiper-navigation-color": "#000",
                  "--swiper-navigation-size": "25px",
               } as CSSProperties
            }
            spaceBetween={9}
            slidesPerView={3}
            className="grid w-full grid-cols-3"
         >
            {images.map((item) => (
               <SwiperSlide key={item} className="overflow-hidden rounded-20">
                  <Image src={item} width={300} alt={alt} height={300} className="aspect-square size-full" />
               </SwiperSlide>
            ))}
         </Swiper>
      </section>
   );
};

export default ProductImageGallery;
