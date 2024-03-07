import { FC } from "react";
import { Skeleton } from "@mui/material";

const ProductCardSkeleton: FC = (): JSX.Element => {
   return (
      <div className="flex flex-col">
         <Skeleton variant="rectangular" width={290} height={290} animation="wave" className="rounded-[1.25rem]" />
         <Skeleton variant="text" width={290} height={40} animation="wave" className="rounded-[.7rem]" />
         <Skeleton variant="text" width={130} height={40} animation="wave" className="rounded-[.7rem]" />
         <Skeleton variant="text" width={150} height={40} animation="wave" className="rounded-[.7rem]" />
      </div>
   );
};

export default ProductCardSkeleton;
