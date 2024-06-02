import { ChangeEvent, FC, memo } from "react";
import { filter } from "@/public/img";
import Image from "next/image";

type TProps = {
   title: string;
   allProductsCount: number | undefined;

   onSortChange: (ev: ChangeEvent<HTMLSelectElement>) => void;
   onFilterOpen: () => void;
};

const ProductsListHeader: FC<TProps> = ({ title, onSortChange, onFilterOpen, allProductsCount }): JSX.Element => {
   return (
      <div className="mb-9 flex items-end justify-between max-xl:px-2">
         {/* Title */}
         <h3 className="h-8 text-3xl font-extrabold max-xl:hidden">{title}</h3>
         <Image onClick={onFilterOpen} src={filter} alt="filter" width={20} height={20} className="size-5 xl:hidden" />

         <div className="flex text-dark/70">
            {/* Length */}
            <span className="max-xl:hidden">{allProductsCount} Products</span>

            {/* Sort By */}
            <div className="xl:ml-4">
               Sort by:
               <select onChange={onSortChange} className="font-bold outline-none">
                  <option value={["createdAt", "desc"]}>Newest</option>
                  <option value={["rate", "desc"]}>Most Popular</option>
                  <option value={["price", "desc"]}>Highest Price</option>
                  <option value={["price", "asc"]}>Lowest Price</option>
               </select>
            </div>
         </div>
      </div>
   );
};

export default memo(ProductsListHeader);
