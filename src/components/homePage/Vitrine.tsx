"use client";

import { FC, useEffect, useState } from "react";
import { ProductsType } from "@/types/products";
import { getLimitProducts } from "@/axios/requests/products";
import { toast } from "react-toastify";

// Splide
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

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

         <Splide
            options={{
               arrows: false,
               pagination: false,
               snap: true,
               gap: "0.75rem",
               autoWidth: true,

               breakpoints: {
                  0: {
                     perPage: 1,
                     padding: "1rem",
                  },
                  1080: {
                     padding: "0rem",
                     perPage: 4,
                  },
               },
            }}
         >
            {products.length
               ? products.map((item: ProductsType) => (
                    <SplideSlide key={item.id}>
                       <ProductCard {...item} />
                    </SplideSlide>
                 ))
               : //  Skeleton loading
                 Array(PRODUCT_SHOW_COUNT)
                    .fill(0)
                    .map((_, index) => (
                       <SplideSlide key={index}>
                          <ProductCardSkeleton />
                       </SplideSlide>
                    ))}
         </Splide>

         <Link href={buttonHref}>
            <Button bgColor="white" borderColor="border-grey-100" py="py-3">
               View All
            </Button>
         </Link>
      </Section>
   );
};

export default Vitrine;
