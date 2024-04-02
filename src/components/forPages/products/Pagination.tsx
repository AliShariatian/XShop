"use client";

import { FC } from "react";
import { arrow } from "@/public/img";
import Image from "next/image";

type TProps = {
   currentPageNumber: number;
   nextPage: () => void;
   prevPage: () => void;
};

const ProductsPagination: FC<TProps> = ({ currentPageNumber, nextPage, prevPage }): JSX.Element => {
   return (
      <nav>
         <ul className="flex items-center justify-between font-semibold">
            <li
               onClick={prevPage}
               className={`${currentPageNumber === 1 ? "disabled" : null} flex cursor-pointer select-none items-center gap-2 rounded-md border px-4 py-2 transition-colors hover:bg-grey-50`}
            >
               <Image src={arrow} alt="Previous" className="rotate mb-[2px] size-5" />
               Previous
            </li>

            <div className="flex items-center gap-2 *:cursor-pointer *:select-none *:rounded-md *:border *:px-4 *:py-2 *:transition-colors hover:*:bg-grey-50">
               <li>{currentPageNumber}</li>
            </div>

            <li
               onClick={nextPage}
               className={`${currentPageNumber === 2 ? "disabled" : null} flex cursor-pointer select-none items-center gap-2 rounded-md border px-4 py-2 transition-colors hover:bg-grey-50`}
            >
               Next
               <Image src={arrow} alt="Next" className="mb-[2px] size-5 rotate-180" />
            </li>
         </ul>
      </nav>
   );
};

export default ProductsPagination;
