import { FC } from "react";

type TProps = {
   length: number | undefined;
};

const ProductsListHeader: FC<TProps> = ({ length }): JSX.Element => {
   return (
      <div className="mb-9 flex items-end justify-between">
         {/* Title */}
         <h3 className="text-3xl font-extrabold">Casual</h3>
         <div className="flex text-dark/70">
            {/* Length */}
            <span>Showing 1-10 of {length} Products</span>

            {/* Sort By */}
            <div className="ml-4 max-xl:hidden">
               Sort by:
               <select className="font-bold outline-none">
                  <option value="newest">Newest</option>
                  <option value="mostPopular">Most Popular</option>
                  <option value="highestPrice">Highest Price</option>
                  <option value="lowestPrice">Lowest Price</option>
               </select>
            </div>
         </div>
      </div>
   );
};

export default ProductsListHeader;
