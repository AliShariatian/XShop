import { FC } from "react";

type PropsType = {
   discount: number;
   price: number;
   textSize?: "text-2xl" | "text-3xl";
};

const Price: FC<PropsType> = ({ discount, price, textSize = "text-2xl" }): JSX.Element => {
   return (
      <div className="flex items-center gap-3">
         {/* Price */}
         {discount === 100 ? (
            <span className={`${textSize} font-bold`}>Free</span>
         ) : (
            <>
               <span className={`${textSize} font-bold`}>${discount ? price - (discount / 100) * price : price}</span>
               {discount ? (
                  <>
                     {/* Price with Discount */}
                     <del className={`${textSize} font-bold text-dark/40`}>${price}</del>
                     {/* DISCOUNT */}
                     <span className="rounded-full bg-discount/10 px-3 py-1 text-base font-semibold text-discount">
                        -{discount}%
                     </span>
                  </>
               ) : null}
            </>
         )}
      </div>
   );
};

export default Price;
