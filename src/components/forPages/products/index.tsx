"use client";

import { ChangeEvent, FC, useState } from "react";
import { toast } from "react-toastify";
import GetAllProducts from "@/services/reactQuery/allProducts";
// COMPONENT
import ProductsListHeader from "./ProductsListHeader";
import { Section, Breadcrumb, AllProductsList, Filters } from "@/components";

export type TFilterState = {
   sort: string;
   category: string;
};

const AllProductComponents: FC = (): JSX.Element => {
   const [filter, setFilter] = useState<TFilterState>({ sort: "", category: "" });
   const { data: products, isLoading, isError, error } = GetAllProducts(filter);

   isError && toast.error(error.message);

   // onChange SortBy
   const sortChangeHandler = (ev: ChangeEvent<HTMLSelectElement>) => {
      const sortBy = ev.target.value.split(",");
      setFilter((prev) => ({ ...prev, sort: `_sort=${sortBy[0]}&_order=${sortBy[1]}` }));
   };

   // onClick Category
   const categoriesClickHandler = (label: string) => {
      setFilter((prev) => ({ ...prev, category: `category=${label}` }));
   };

   const resetFilterHandler = () => {
      setFilter((prev) => ({ ...prev, category: "" }));
   };

   return (
      <Section>
         <div>
            <Breadcrumb />
         </div>

         <div className="flex gap-12">
            <Filters categoriesOnClick={categoriesClickHandler} resetFilterOnClick={resetFilterHandler} />
            <div className="h-full w-3/4 max-xl:w-full">
               <ProductsListHeader
                  title={filter.category.split("=")[1]}
                  length={products?.length}
                  onSortChange={sortChangeHandler}
               />
               <AllProductsList products={products} isError={isError} isLoading={isLoading} />
            </div>
         </div>
      </Section>
   );
};

export default AllProductComponents;
