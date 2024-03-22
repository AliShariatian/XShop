"use client";

import { FC } from "react";
import { Breadcrumb, Section } from "@/components";
import GetSingleProducts from "@/services/reactQuery/singleProducts";
import { usePathname } from "next/navigation";
import ProductDetail from "./ProductDetail";
import ProductImageGallery from "./ProductImageGallery";
import ProductPageSkeleton from "./ProductPageSkeleton";
import { toast } from "react-toastify";

const ProductSinglePage: FC = (): JSX.Element => {
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

         <div className="flex flex-col gap-20 xl:flex-row">
            {isLoading || isError ? (
               <ProductPageSkeleton />
            ) : (
               <>
                  <ProductImageGallery images={product.otherImg} alt={product.title} />
                  <ProductDetail {...product} />
               </>
            )}
         </div>
      </Section>
   );
};

export default ProductSinglePage;
