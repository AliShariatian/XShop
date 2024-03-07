"use client";

import { FC, useEffect, useState } from "react";
import { ProductsType } from "@/types/products";

// COMPONENT
import { Section, ProductCard, Button } from "@/components";
import { getLimitAndSortedProducts } from "@/axios/requests/products";

const NewArrivals: FC = (): JSX.Element => {
   const [products, setProducts] = useState<ProductsType[]>([]);

   useEffect(() => {
      (async () => {
         try {
            const response = await getLimitAndSortedProducts(4, "createdAt", "descending");
            setProducts(response.data);
         } catch (err: any) {
            console.log(err.message);
         }
      })();
   }, []);

   return (
      <Section parentClassName="py-[5.62rem]" sectionClassName="flex flex-col items-center gap-16">
         <h2 className="font-integralCF text-5xl">NEW ARRIVALS</h2>

         <div className="grid grid-cols-1 gap-x-4 gap-y-14 xl:grid-cols-4">
            {products
               ? products.map((item: ProductsType) => (
                    <ProductCard
                       key={item.id}
                       img={item.img}
                       title={item.title}
                       rate={item.rate}
                       price={item.price}
                       discount={item.discount}
                       slug={item.slug}
                    />
                 ))
               : //   TODO: add skeleton loading
                 ""}
         </div>

         <Button bgColor="white" borderColor="border-grey-100" py="py-3">
            View All
         </Button>
      </Section>
   );
};

export default NewArrivals;
