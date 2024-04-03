"use client";

import { FC } from "react";
import { arrow } from "@/public/img";
import Image from "next/image";

type TProps = {
   currentPageNumber: number;
   endPageNumber: number;
   nextPage: () => void;
   prevPage: () => void;
};

const ProductsPagination: FC<TProps> = ({ currentPageNumber, nextPage, prevPage, endPageNumber }): JSX.Element => {
   return (
      <nav>
         <ul className="flex items-center justify-between font-semibold">
            <li
               onClick={prevPage}
               className={`${currentPageNumber === 1 ? "cursor-default opacity-40 hover:bg-transparent" : "cursor-pointer hover:bg-grey-50"} flex select-none items-center gap-2 rounded-md border px-4 py-2 transition-colors`}
            >
               <Image src={arrow} alt="Previous" className="rotate mb-[1px] size-5" />
               Previous
            </li>

            <div className="flex items-center gap-2 *:cursor-pointer *:select-none *:rounded-md *:border *:px-4 *:py-2 *:transition-colors hover:*:bg-grey-50">
               <li>{currentPageNumber}</li>
            </div>

            <li
               onClick={nextPage}
               className={`${currentPageNumber === endPageNumber ? "cursor-default opacity-40 hover:bg-transparent" : "cursor-pointer hover:bg-grey-50"} flex select-none items-center gap-2 rounded-md border px-4 py-2 transition-colors hover:bg-grey-50`}
            >
               Next
               <Image src={arrow} alt="Next" className="mb-[1px] size-5 rotate-180" />
            </li>
         </ul>
      </nav>
   );
};

export default ProductsPagination;
