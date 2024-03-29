"use client";

import { FC } from "react";
import { toast } from "react-toastify";
import GetAllProducts from "@/services/reactQuery/allProducts";
// COMPONENT
import ProductsListHeader from "./ProductsListHeader";
import { Section, Breadcrumb, AllProductsList, Filters } from "@/components";

const AllProductComponents: FC = (): JSX.Element => {
   const { data: products, isLoading, isError, error } = GetAllProducts();

   // Show toast message when error to fetch data from server
   isError && toast.error(error.message);

   return (
      <Section>
         <div>
            <Breadcrumb />
         </div>

         <div className="flex gap-12">
            <Filters />
            <div className="h-full w-3/4 max-xl:w-full">
               <ProductsListHeader length={products?.length} />
               <AllProductsList products={products} isError={isError} isLoading={isLoading} />
            </div>
         </div>
      </Section>
   );
};

export default AllProductComponents;
