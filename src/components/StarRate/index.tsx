import { FC } from "react";
import { StarRatePropsType } from "./type";
import cn from "@/utils/cn";
import Image from "next/image";
import { starFullRate, starEmptyRate } from "@/public/img";

const StarRate: FC<StarRatePropsType> = ({ rate, showEmptyStar = true, showRateNumber = true, className }): JSX.Element => {
   return (
      <div className="flex gap-3">
         <div className={cn("flex gap-[2px]", className)}>
            {/* Fill star */}
            {Array(Math.ceil(rate))
               .fill(0)
               .map((_, index) => (
                  <Image key={index} src={starFullRate} width={50} height={50} alt="star" className="size-5" />
               ))}

            {/* Empty star */}
            {showEmptyStar &&
               Array(5 - Math.ceil(rate))
                  .fill(0)
                  .map((_, index) => (
                     <Image key={index} src={starEmptyRate} width={50} height={50} alt="star" className="size-5" />
                  ))}
         </div>

         {/* Rate number */}
         {showRateNumber && (
            <div>
               <span>{Math.ceil(rate)}/</span>
               <span className="text-gray-400">5</span>
            </div>
         )}
      </div>
   );
};

export default StarRate;
