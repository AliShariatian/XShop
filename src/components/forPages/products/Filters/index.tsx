"use client";

import { FC } from "react";
import { filter } from "@/public/img";
import Image from "next/image";
import HorizontalLine from "@/components/layout/HorizontalLine";
// Filter items
import CategoriesFilter from "./CategoriesFilter";
import PriceFilter from "./PriceFilter";
import Title from "./Title";
import ColorsFilter from "./ColorsFilter";

const Filters: FC = (): JSX.Element => {
   // TODO: inset all filter items state in this component

   return (
      <section className="top-32 h-full w-1/4 rounded-20 border p-5 max-xl:hidden xl:sticky">
         {/* Title */}
         <div className="flex items-center justify-between">
            <Title title="Filters" />

            <Image src={filter} alt="filter" width={20} height={20} className="size-5" />
         </div>

         <HorizontalLine className="my-5" />

         {/* Filter items */}
         <CategoriesFilter />
         <HorizontalLine className="my-5" />

         <PriceFilter />

         <HorizontalLine className="mb-5 mt-10" />
         <ColorsFilter />

         <HorizontalLine className="mb-5 mt-10" />
      </section>
   );
};

export default Filters;
