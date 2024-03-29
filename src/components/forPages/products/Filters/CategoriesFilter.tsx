import { FC } from "react";
import Image from "next/image";
import { downArrowIcon } from "@/public/img";

const categories: {
   label: string;
}[] = [{ label: "T-Shirt" }, { label: "Shoe" }, { label: "Trousers" }];

type TProps = {
   onClick: (label: string) => void;
};

const CategoriesFilter: FC<TProps> = ({ onClick }): JSX.Element => {
   return (
      <div className="flex flex-col gap-3">
         {categories.map(({ label }) => (
            <div
               key={label}
               title={label}
               onClick={() => onClick(label)}
               className="group/filterCategoriesHover flex cursor-pointer items-center justify-between"
            >
               <span className="capitalize">{label}</span>
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

export default CategoriesFilter;
