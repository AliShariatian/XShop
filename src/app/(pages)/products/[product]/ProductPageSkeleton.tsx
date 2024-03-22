import { FC } from "react";
import { Skeleton } from "@mui/material";

const ProductCardSkeleton: FC = (): JSX.Element => {
   return (
      <div className="flex w-full flex-col gap-32">
         <section className="flex gap-5 max-xl:flex-col">
            {/* Images */}
            <div className="flex gap-3 max-xl:flex-col-reverse">
               <div className="grid grid-cols-3 justify-between gap-1 xl:flex xl:flex-col xl:gap-3">
                  <div className="max-xl:aspect-square">
                     <Skeleton
                        variant="rectangular"
                        width={150}
                        height={150}
                        animation="wave"
                        className="rounded-[1rem] max-xl:!size-full"
                     />
                  </div>
                  <div className="aspect-square">
                     <Skeleton
                        variant="rectangular"
                        width={150}
                        height={150}
                        animation="wave"
                        className="rounded-[1rem] max-xl:!size-full"
                     />
                  </div>
                  <div className="aspect-square">
                     <Skeleton
                        variant="rectangular"
                        width={150}
                        height={150}
                        animation="wave"
                        className="rounded-[1rem] max-xl:!size-full"
                     />
                  </div>
               </div>

               {/* Big Image */}
               <div className="aspect-square">
                  <Skeleton
                     variant="rectangular"
                     width={475}
                     height={475}
                     animation="wave"
                     className="rounded-[1.25rem] max-xl:!size-full"
                  />
               </div>
            </div>

            {/* Texts */}
            <div className="flex flex-col gap-4">
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
