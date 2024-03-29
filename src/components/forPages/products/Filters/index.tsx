import { FC } from "react";
import { filter } from "@/public/img";
import Image from "next/image";
import HorizontalLine from "@/components/layout/HorizontalLine";
// Filter items
import CategoriesFilter from "./CategoriesFilter";
import PriceFilter from "./PriceFilter";
import Title from "./Title";
import ColorsFilter from "./ColorsFilter";
import ResetFilters from "./ResetFilters";

type TProps = {
   categoriesOnClick: (label: string) => void;
   resetFilterOnClick: () => void;
};

const Filters: FC<TProps> = ({ categoriesOnClick, resetFilterOnClick }): JSX.Element => {
   return (
      <>
         <section className="top-32 h-full w-1/4 rounded-20 border p-5 max-xl:hidden xl:sticky">
            {/* Title */}
            <div className="flex items-center justify-between">
               <Title title="Filters" />
               <Image src={filter} alt="filter" width={20} height={20} className="size-5" />
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
      </>
   );
};

export default Filters;
