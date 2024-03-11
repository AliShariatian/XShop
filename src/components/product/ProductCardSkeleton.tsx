import { FC } from "react";
import { Skeleton } from "@mui/material";

const ProductCardSkeleton: FC = (): JSX.Element => {
   return (
      <div className="flex flex-col">
         <Skeleton
            variant="rectangular"
            width={320}
            height={320}
            animation="wave"
            className={`rounded-[1.25rem] max-xl:!size-productCardWidthMobile`}
         />
         <Skeleton
            variant="text"
            width={320}
            height={40}
            animation="wave"
            className="rounded-[.7rem] max-xl:!w-productCardWidthMobile"
         />
         <Skeleton variant="text" width={130} height={40} animation="wave" className="rounded-[.7rem]" />
         <Skeleton variant="text" width={150} height={40} animation="wave" className="rounded-[.7rem]" />
      </div>
   );
};

export default ProductCardSkeleton;
