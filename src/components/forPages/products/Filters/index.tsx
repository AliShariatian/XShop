import { FC } from "react";
import { filter, closeIcon } from "@/public/img";
import Image from "next/image";
import HorizontalLine from "@/components/layout/HorizontalLine";
// Filter items
import CategoriesFilter from "./CategoriesFilter";
import PriceFilter from "./PriceFilter";
import Title from "./Title";
import ColorsFilter from "./ColorsFilter";
import ResetFilters from "./ResetFilters";
import Button from "@/components/layout/Button";

type TProps = {
   categoriesOnClick: (label: string) => void;
   resetFilterOnClick: () => void;
   onFilterClose: () => void;
   isCloseFilter: boolean;
};

const Filters: FC<TProps> = ({ categoriesOnClick, resetFilterOnClick, onFilterClose, isCloseFilter }): JSX.Element => {
   return (
      <section
         className={`${isCloseFilter ? "top-0" : "top-full"} duration-400 fixed left-0 h-full w-full rounded-20 border bg-light p-5 transition-[top] max-xl:z-50 max-xl:shadow xl:sticky xl:top-32 xl:w-1/4`}
      >
         {/* Title */}
         <div className="flex items-center justify-between">
            <Title title="Filters" />
            <Image src={filter} alt="filter" width={20} height={20} className="size-5 max-xl:hidden" />
            <Button onClick={onFilterClose} bgColor="white" className="!p-0 xl:hidden">
               <Image src={closeIcon} alt="close" width={20} height={20} className="size-3 invert" />
            </Button>
         </div>

         <HorizontalLine className="my-5" />
         <CategoriesFilter onClick={categoriesOnClick} />

         <HorizontalLine className="my-5" />
         <PriceFilter />

         <HorizontalLine className="mb-5 mt-9" />
         <ColorsFilter />

         <HorizontalLine className="my-5" />
         <ResetFilters resetFilterOnClick={resetFilterOnClick} />
      </section>
   );
};

export default Filters;
