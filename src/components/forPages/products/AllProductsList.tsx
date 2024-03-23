"use client";

import { FC } from "react";
import { toast } from "react-toastify";
import GetAllProducts from "@/services/reactQuery/allProducts";
import { ProductCard, ProductCardSkeleton } from "@/components";

const ShowProductsPerPage = 9;

const AllProductsList: FC = (): JSX.Element => {
   const { data: products, isLoading, isError, error } = GetAllProducts();

   // Show toast message when error to fetch data from server
   isError && toast.error(error.message);

   return (
      <div className="h-full w-3/4 max-xl:w-full">
         <div className="flex items-end justify-between">
            <h3 className="text-3xl font-extrabold">Casual</h3>
            <span className="flex text-dark/70">
               Showing 1-10 of {products?.length} Products
               <div className="ml-4 max-xl:hidden">
                  Sort by:
                  <select className="font-bold outline-none">
                     <option value="most-popular">Most Popular</option>
                     <option value="the-newest">Newest</option>
                  </select>
               </div>
            </span>
         </div>

         {/* List */}
         <main className="mt-9 grid grid-cols-1 justify-items-center gap-x-3 gap-y-12 md:grid-cols-2 2xl:grid-cols-3">
            {isLoading || isError
               ? //  Skeleton loading
                 Array(ShowProductsPerPage)
                    .fill(0)
                    .map((_, index) => <ProductCardSkeleton key={index} />)
               : products?.map((item) => <ProductCard key={item.id} {...item} />)}
         </main>
      </div>
   );
};

export default AllProductsList;
