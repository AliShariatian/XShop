import { FC } from "react";
import { Skeleton } from "@mui/material";

const ProductCardSkeleton: FC = (): JSX.Element => {
   return (
      <div className="flex w-full flex-col gap-32">
         <section className="flex w-full flex-col gap-9 xl:flex-row xl:gap-20">
            {/* Images */}
            <div className="flex flex-col gap-3 xl:w-1/3">
               {/* Big Image */}
               <div className="aspect-square">
                  <Skeleton
                     variant="rectangular"
                     width={400}
                     height={400}
                     animation="wave"
                     className="!size-full rounded-[1.25rem]"
                  />
               </div>

               {/* Small images */}
               <div className="flex justify-between gap-3">
                  <Skeleton
                     variant="rectangular"
                     width={150}
                     height={150}
                     animation="wave"
                     className="aspect-square !h-fit rounded-[1rem]"
                  />
                  <Skeleton
                     variant="rectangular"
                     width={150}
                     height={150}
                     animation="wave"
                     className="aspect-square !h-fit rounded-[1rem]"
                  />
                  <Skeleton
                     variant="rectangular"
                     width={150}
                     height={150}
                     animation="wave"
                     className="aspect-square !h-fit rounded-[1rem]"
                  />
               </div>
            </div>

            {/* Texts */}
            <div className="flex flex-col gap-4 xl:w-1/2">
               <Skeleton
                  variant="rectangular"
                  width={500}
                  height={40}
                  animation="wave"
                  className="rounded-[.7rem] max-xl:!w-full"
               />
               <Skeleton variant="rectangular" width={130} height={25} animation="wave" className="rounded-[.5rem]" />
               <Skeleton variant="rectangular" width={150} height={25} animation="wave" className="rounded-[.5rem]" />

               <div className="mt-5 flex flex-col gap-2">
                  <Skeleton
                     variant="rectangular"
                     width={500}
                     height={20}
                     animation="wave"
                     className="rounded-[.3rem] max-xl:!w-full"
                  />
                  <Skeleton
                     variant="rectangular"
                     width={500}
                     height={20}
                     animation="wave"
                     className="rounded-[.3rem] max-xl:!w-full"
                  />
                  <Skeleton
                     variant="rectangular"
                     width={400}
                     height={20}
                     animation="wave"
                     className="rounded-[.3rem] max-xl:!w-1/2"
                  />
               </div>
            </div>
         </section>

         <section></section>
      </div>
   );
};

export default ProductCardSkeleton;
