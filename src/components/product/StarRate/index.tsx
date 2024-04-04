import { FC } from "react";
import { TStarRateProps } from "./type";
import cn from "@/utils/cn";
import Image from "next/image";
import { starFullRate, starEmptyRate, starHalfRate } from "@/public/img";

const ALL_STAR_COUNT = 5;

const starImage = (index: number, type: string): JSX.Element => {
   return <Image key={index} src={type} width={50} height={50} alt="star" className="size-5" />;
};

const StarRate: FC<TStarRateProps> = ({ rate, showEmptyStar = true, showRateNumber = true, className }): JSX.Element => {
   // Star filling config
   const Star = Array.from({ length: ALL_STAR_COUNT }, (_, index) => {
      const number = index + 0.5;

      return (
         <span key={index}>
            {rate >= index + 1
               ? starImage(index, starFullRate)
               : rate >= number
                 ? starImage(index, starHalfRate)
                 : showEmptyStar && starImage(index, starEmptyRate)}
         </span>
      );
   });

   // Rate number rounding config
   const convertToNearestHalf = (rate: number) => {
      return Math.floor(rate * 2) / 2;
   };

   return (
      <div className="flex gap-3">
         <div className={cn("flex gap-[2px]", className)}>{Star}</div>

         {/* Rate number */}
         {showRateNumber && (
            <div>
               <span>{convertToNearestHalf(rate)}</span>
               <span className="text-gray-400">/{ALL_STAR_COUNT}</span>
            </div>
         )}
      </div>
   );
};

export default StarRate;
