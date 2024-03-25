import { FC } from "react";
import calculatePriceAfterDiscount from "@/utils/calculatePriceAfterDiscount";

type PropsType = {
   discount: number;
   price: number;
   textSize?: "text-2xl" | "text-3xl";
   smallSize?: boolean;
};

const Price: FC<PropsType> = ({ discount, price, textSize = "text-2xl", smallSize = false }): JSX.Element => {
   const { finalPrice } = calculatePriceAfterDiscount(price, discount);

   return (
      <div className="flex items-end gap-3">
         {/* Price */}
         {price === 0 ? (
            <span className={`${textSize} font-bold`}>Free</span>
         ) : (
            <>
               <span className={`${textSize} font-bold`}>{`${finalPrice === 0 ? "Free" : `$${finalPrice}`}`}</span>
               {discount ? (
                  <div className="flex items-center gap-3">
                     {/* Price with Discount */}
                     <del className={`${smallSize ? "text-xl" : textSize} font-bold text-dark/40`}>${price}</del>
                     {/* DISCOUNT */}
                     <span
                        className={`${smallSize ? "text-sm" : "text-base"} rounded-full bg-discount/10 px-3 py-1 text-base font-semibold text-discount`}
                     >
                        -{discount}%
                     </span>
                  </div>
               ) : null}
            </>
         )}
      </div>
   );
};

export default Price;
