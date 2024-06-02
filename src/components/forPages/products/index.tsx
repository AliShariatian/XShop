"use client";

import { ChangeEvent, FC, useCallback, useState } from "react";
import { toast } from "react-toastify";
import GetAllProducts from "@/services/reactQuery/allProducts";
// COMPONENT
import ProductsListHeader from "./ProductsListHeader";
import { Section, Breadcrumb, AllProductsList, Filters, HorizontalLine } from "@/components";
import ProductsPagination from "./ProductsPagination";
import useDebounce from "@/hook/useDebounce";

export type TFilterState = {
   sort: { sortBy: string; orderBy: string };
   prices: number[];
   category: string;
   color: string;
   pageNumber: number;
   limitPerPage: number;
};

const COUNT_OF_PRODUCT_PER_PAGE: number = 3 as const;
const PRICE_SLIDER_BOUND = [0, 500] as [number, number];

const AllProductComponents: FC = (): JSX.Element => {
   const [isCloseFilterOnMobile, setIsCloseFilterOnMobile] = useState<boolean>(false);

   const [filter, setFilter] = useState<TFilterState>({
      sort: { orderBy: "", sortBy: "" },
      prices: PRICE_SLIDER_BOUND,
      category: "",
      color: "",
      pageNumber: 1,
      limitPerPage: COUNT_OF_PRODUCT_PER_PAGE,
   });

   const debouncedPrices = useDebounce(filter.prices, 500, false);
   // fetch Data
   const { data, isLoading, isError, error } = GetAllProducts({ ...filter, prices: debouncedPrices as number[] });

   const allProductsCount = data?.allProductsCount;
   const products = data?.products;

   // For pagination
   const endProductCountInCurrentPage = products?.length ? products.length * filter.pageNumber : 0;

   isError && toast.error(error.message);

   // onChange SortBy
   const sortChangeHandler = (ev: ChangeEvent<HTMLSelectElement>): void => {
      const [sortBy, orderBy] = ev.target.value.split(",");
      setFilter((prev) => ({ ...prev, sort: { sortBy, orderBy } }));
   };

   // onClick Category
   const categoriesClickHandler = (category: string): void => {
      category === filter.category
         ? setFilter((prev) => ({ ...prev, category: "" }))
         : setFilter((prev) => ({ ...prev, category }));
   };

   // onClick Category
   const colorsClickHandler = (color: string): void => {
      color === filter.color ? setFilter((prev) => ({ ...prev, color: "" })) : setFilter((prev) => ({ ...prev, color }));
   };

   // onChange Price
   const priceChangeSliderHandler = (_: Event, prices: number | number[]): void => {
      const arrayPrices = prices as number[];
      setFilter((prev) => ({ ...prev, prices: arrayPrices }));
   };

   // onClick Reset
   const resetFilterHandler = (): void => {
      setFilter((prev) => ({ ...prev, category: "", color: "", prices: PRICE_SLIDER_BOUND }));
   };

   // onClick Toggle in mobile
   const toggleFilterOnMobileHandler = (): void => {
      setIsCloseFilterOnMobile((prev) => !prev);
   };

   // onClick Next page
   const nextPageHandler = (): void => {
      setFilter((prev) => ({
         ...prev,
         pageNumber: endProductCountInCurrentPage === allProductsCount ? prev.pageNumber : prev.pageNumber + 1,
      }));
   };

   // onClick Previous page
   const prevPageHandler = (): void => {
      setFilter((prev) => ({ ...prev, pageNumber: prev.pageNumber === 1 ? prev.pageNumber : prev.pageNumber - 1 }));
   };

   return (
      <Section>
         <div>
            <Breadcrumb />
         </div>

         <div className="flex h-full gap-12">
            <Filters
               onSelectCategory={categoriesClickHandler}
               resetFilterOnClick={resetFilterHandler}
               onFilterClose={toggleFilterOnMobileHandler}
               onPriceChange={priceChangeSliderHandler}
               prices={filter.prices}
               sliderBound={PRICE_SLIDER_BOUND}
               onSelectColor={colorsClickHandler}
               selectedColor={filter.color}
               isCloseFilter={isCloseFilterOnMobile}
            />

            <div className="size-full xl:w-3/4">
               <ProductsListHeader
                  title={filter.category || "All Products"}
                  allProductsCount={allProductsCount}
                  onSortChange={sortChangeHandler}
                  onFilterOpen={toggleFilterOnMobileHandler}
               />

               {/* Show products list */}
               {products?.length !== 0 ? (
                  <>
                     <AllProductsList products={products} isError={isError} isLoading={isLoading} />

                     <HorizontalLine className="my-6" />

                     <ProductsPagination
                        currentPageNumber={filter.pageNumber}
                        endPageNumber={allProductsCount! / COUNT_OF_PRODUCT_PER_PAGE}
                        nextPage={nextPageHandler}
                        prevPage={prevPageHandler}
                     />
                  </>
               ) : (
                  <div className="flex h-72 flex-col text-center items-center justify-center gap-3">
                     <p className="text-xl font-bold">Products with this filter does&apos;t exist!</p>
                     <p>Select another filter options</p>
                  </div>
               )}
            </div>
         </div>
      </Section>
   );
};

export default AllProductComponents;
