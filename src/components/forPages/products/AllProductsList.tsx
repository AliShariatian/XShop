import { FC, memo } from "react";
import { IProductCard } from "@/components/product/type";
import { ProductCard, ProductCardSkeleton } from "@/components";

const SHOW_PRODUCTS_PER_PAGE = 3;

type TProps = {
   products: IProductCard[] | undefined;
   isLoading: boolean;
   isError: boolean;
};

const AllProductsList: FC<TProps> = ({ products, isError, isLoading }): JSX.Element => {
   return (
      <main className="grid grid-cols-1 justify-items-center gap-x-9 gap-y-12 md:grid-cols-2 2xl:grid-cols-3">
         {isLoading || isError
            ? //  Skeleton loading
              Array(SHOW_PRODUCTS_PER_PAGE)
                 .fill(0)
                 .map((_, index) => <ProductCardSkeleton key={index} />)
            : products?.map((item) => <ProductCard key={item.id} {...item} />)}
      </main>
   );
};

export default memo(AllProductsList);
