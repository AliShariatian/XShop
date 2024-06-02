import { FC, memo } from "react";
import { filter } from "@/public/img";
import Image from "next/image";
import HorizontalLine from "@/components/layout/HorizontalLine";
// Filter items
import CategoriesFilter from "./CategoriesFilter";
import PriceFilter from "./PriceFilter";
import Title from "./Title";
import ColorsFilter from "./ColorsFilter";
import ResetFilters from "./ResetFilters";
import { CloseButton } from "@/components";

type TProps = {
   onSelectCategory: (label: string) => void;
   onSelectColor: (color: string) => void;
   onPriceChange: (_: Event, prices: number | number[]) => void;
   prices: number | number[];
   selectedColor: string;
   resetFilterOnClick: () => void;
   onFilterClose: () => void;
   isCloseFilter: boolean;
   sliderBound: [number, number];
};

const Filters: FC<TProps> = ({
   onSelectCategory,
   resetFilterOnClick,
   onFilterClose,
   onPriceChange,
   prices,
   sliderBound,
   isCloseFilter,
   onSelectColor,
   selectedColor,
}): JSX.Element => {
   return (
      <section
         className={`${isCloseFilter ? "top-0" : "top-full"} duration-400 fixed left-0 h-full w-full rounded-20 border bg-light p-5 transition-[top] max-xl:z-50 max-xl:shadow xl:sticky xl:top-32 xl:w-1/4`}
      >
         {/* Title */}
         <div className="flex items-center justify-between">
            <Title title="Filters" />
            <Image src={filter} alt="filter" width={20} height={20} className="size-5 max-xl:hidden" />
            <CloseButton onClick={onFilterClose} />
         </div>

         <HorizontalLine className="my-5" />
         <CategoriesFilter onClick={onSelectCategory} />

         <HorizontalLine className="my-5" />
         <PriceFilter onPriceChange={onPriceChange} prices={prices} sliderBound={sliderBound} />

         <HorizontalLine className="mb-5 mt-9" />
         <ColorsFilter setSelectedColor={onSelectColor} selectedColor={selectedColor} />

         <HorizontalLine className="my-5" />
         <ResetFilters resetFilterOnClick={resetFilterOnClick} />
      </section>
   );
};

export default memo(Filters);
