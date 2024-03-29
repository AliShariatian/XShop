import { ChangeEvent, FC, memo } from "react";

type TProps = {
   title: string;
   length: number | undefined;
   onSortChange: (ev: ChangeEvent<HTMLSelectElement>) => void;
};

const ProductsListHeader: FC<TProps> = ({ length, onSortChange, title = "" }): JSX.Element => {
   return (
      <div className="mb-9 flex items-end justify-between">
         {/* Title */}
         <h3 className="h-8 text-3xl font-extrabold">{title}</h3>
         <div className="flex text-dark/70">
            {/* Length */}
            <span>Showing 1-10 of {length} Products</span>

            {/* Sort By */}
            <div className="ml-4 max-xl:hidden">
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
