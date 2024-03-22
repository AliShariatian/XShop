import { FC, useState } from "react";
import type { Swiper as SwiperType } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs } from "swiper/modules";
import Image from "next/image";

type PropsType = {
   images: string[];
   alt: string;
};

const ProductImageGallery: FC<PropsType> = ({ images, alt }): JSX.Element => {
   const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);

   return (
      <section className="flex w-1/2 gap-3">
         <Swiper
            onSwiper={setThumbsSwiper}
            slidesPerView={3}
            direction="horizontal"
            breakpoints={{
               720: {
                  direction: "vertical",
               },
            }}
            className="w-1/4"
         >
            {images.map((item) => (
               <SwiperSlide key={item} className="aspect-square w-full overflow-hidden rounded-2xl">
                  <Image src={item} width={300} alt={alt} height={300} className="size-full " />
               </SwiperSlide>
            ))}
         </Swiper>

         <Swiper thumbs={{ swiper: thumbsSwiper }} modules={[Thumbs, Navigation]} spaceBetween={9} className="w-3/4">
            {images.map((item) => (
               <SwiperSlide key={item} className="aspect-square w-full overflow-hidden rounded-3xl bg-grey-100">
                  <Image src={item} width={2000} alt={alt} height={2000} className="size-full" />
               </SwiperSlide>
            ))}
         </Swiper>
      </section>
   );
};

export default ProductImageGallery;
