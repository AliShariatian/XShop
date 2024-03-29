import { FC } from "react";
import { ProductCardType } from "@/components/product/type";
import { ProductCard, ProductCardSkeleton } from "@/components";

const ShowProductsPerPage = 9;

type TProps = {
   products: ProductCardType[] | undefined;
   isLoading: boolean;
   isError: boolean;
};

const AllProductsList: FC<TProps> = ({ products, isError, isLoading }): JSX.Element => {
   return (
      <main className="grid grid-cols-1 justify-items-center gap-x-9 gap-y-12 md:grid-cols-2 2xl:grid-cols-3">
         {isLoading || isError
            ? //  Skeleton loading
              Array(ShowProductsPerPage)
                 .fill(0)
                 .map((_, index) => <ProductCardSkeleton key={index} />)
            : products?.map((item) => <ProductCard key={item.id} {...item} />)}
      </main>
   );
};

export default AllProductsList;
