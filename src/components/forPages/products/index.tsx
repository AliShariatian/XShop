"use client";

import { ChangeEvent, FC, useState } from "react";
import { toast } from "react-toastify";
import GetAllProducts from "@/services/reactQuery/allProducts";
// COMPONENT
import ProductsListHeader from "./ProductsListHeader";
import { Section, Breadcrumb, AllProductsList, Filters, HorizontalLine } from "@/components";
import ProductsPagination from "./ProductsPagination";

export type TFilterState = {
   sort: { sortBy: string; orderBy: string };
   category: string;
   pageNumber: number;
   limitPerPage: number;
};

const COUNT_OF_PRODUCT_PER_PAGE: number = 3 as const;

const AllProductComponents: FC = (): JSX.Element => {
   const [isCloseFilterOnMobile, setIsCloseFilterOnMobile] = useState<boolean>(false);

   const [filter, setFilter] = useState<TFilterState>({
      sort: { orderBy: "", sortBy: "" },
      category: "",
      pageNumber: 1,
      limitPerPage: COUNT_OF_PRODUCT_PER_PAGE,
   });

   const { data, isLoading, isError, error } = GetAllProducts(filter);

   const allProductsCount = data?.allProductsCount;
   const products = data?.products;

   // BUG: Product Count In Current Page is invalid number for products category or other filters
   const endProductCountInCurrentPage = products?.length ? products.length * filter.pageNumber : 0;
   const startProductCountInCurrentPage = endProductCountInCurrentPage ? endProductCountInCurrentPage - 2 : 0;

   isError && toast.error(error.message);

   // onChange SortBy
   const sortChangeHandler = (ev: ChangeEvent<HTMLSelectElement>) => {
      const [sortBy, orderBy] = ev.target.value.split(",");
      setFilter((prev) => ({ ...prev, sort: { sortBy, orderBy } }));
   };

   // onClick Category
   const categoriesClickHandler = (category: string) => {
      setFilter((prev) => ({ ...prev, category }));
   };

   // onClick Reset
   const resetFilterHandler = () => {
      setFilter((prev) => ({ ...prev, category: "" }));
   };

   // onClick Toggle in mobile
   const toggleFilterOnMobileHandler = () => {
      setIsCloseFilterOnMobile((prev) => !prev);
   };

   // onClick Next page
   const nextPageHandler = () => {
      setFilter((prev) => ({
         ...prev,
         pageNumber: endProductCountInCurrentPage === allProductsCount ? prev.pageNumber : prev.pageNumber + 1,
      }));
   };

   // onClick Previous page
   const prevPageHandler = () => {
      setFilter((prev) => ({ ...prev, pageNumber: prev.pageNumber === 1 ? prev.pageNumber : prev.pageNumber - 1 }));
   };

   return (
      <Section>
         <div>
            <Breadcrumb />
         </div>

         <div className="flex gap-12">
            <Filters
               categoriesOnClick={categoriesClickHandler}
               resetFilterOnClick={resetFilterHandler}
               onFilterClose={toggleFilterOnMobileHandler}
               isCloseFilter={isCloseFilterOnMobile}
            />
            <div className="h-full w-full xl:w-3/4">
               <ProductsListHeader
                  title={filter.category || "All Products"}
                  allProductsCount={allProductsCount}
                  onSortChange={sortChangeHandler}
                  onFilterOpen={toggleFilterOnMobileHandler}
                  endProductCountInCurrentPage={endProductCountInCurrentPage}
                  startProductCountInCurrentPage={startProductCountInCurrentPage}
               />
               
               <AllProductsList products={products} isError={isError} isLoading={isLoading} />

               <HorizontalLine className="my-6" />

               <ProductsPagination
                  currentPageNumber={filter.pageNumber}
                  endPageNumber={allProductsCount! / COUNT_OF_PRODUCT_PER_PAGE}
                  nextPage={nextPageHandler}
                  prevPage={prevPageHandler}
               />
            </div>
         </div>
      </Section>
   );
};

export default AllProductComponents;
