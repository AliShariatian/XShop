"use client";

import { FC } from "react";
import { usePathname } from "next/navigation";
import { toast } from "react-toastify";
import GetSingleProducts from "@/services/reactQuery/singleProducts";
import { Breadcrumb, Section, ProductDetail, ProductImageGallery, ProductPageSkeleton } from "@/components";

const SingleProductPage: FC = (): JSX.Element => {
   const currentProduct = usePathname().split("/").at(-1) as string;

   const { data, isLoading, isError, error } = GetSingleProducts(currentProduct);

   const product = data?.[0]!;

   // Show toast message when error to fetch data from server
   isError && toast.error(error.message);

   return (
      <Section>
         <div>
            <Breadcrumb />
         </div>

         <div className="flex flex-col gap-9 xl:flex-row xl:gap-20">
            {isLoading || isError ? (
               <ProductPageSkeleton />
            ) : (
               <>
                  <ProductImageGallery images={product.imgs} alt={product.title} />
                  <ProductDetail {...product} />
               </>
            )}
         </div>
      </Section>
   );
};

export default SingleProductPage;
