"use client";

import { FC, memo, useState } from "react";
import Image from "next/image";
import { downArrowIcon } from "@/public/img";

const categories: {
   label: string;
}[] = [{ label: "T-Shirt" }, { label: "Shoe" }, { label: "Trousers" }];

type TProps = {
   onClick: (label: string) => void;
};

const CategoriesFilter: FC<TProps> = ({ onClick }): JSX.Element => {
   const [currentLabelSelected, setCurrentLabelSelected] = useState("");

   const labelClickHandler = (label: string): void => {
      label === currentLabelSelected ? setCurrentLabelSelected("") : setCurrentLabelSelected(label);
      onClick(label);
   };

   return (
      <div className="flex flex-col gap-3">
         {categories.map(({ label }) => (
            <div
               key={label}
               title={label}
               onClick={() => labelClickHandler(label)}
               className="group/filterCategoriesHover flex cursor-pointer select-none items-center justify-between"
            >
               <span className={`${currentLabelSelected === label ? "font-bold" : "font-normal"} capitalize`}>{label}</span>
               <Image
                  src={downArrowIcon}
                  alt={label}
                  width={10}
                  height={10}
                  className="mr-1 size-3 -rotate-90 opacity-40 transition-[margin] group-hover/filterCategoriesHover:mr-0"
               />
            </div>
         ))}
      </div>
   );
};

export default memo(CategoriesFilter);
