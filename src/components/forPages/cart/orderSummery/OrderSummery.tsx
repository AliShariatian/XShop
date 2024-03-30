import { FC } from "react";
import { HorizontalLine } from "@/components";
import { TCartItem } from "@/types/cart";
import calculateCartSummary from "@/utils/calculateCartSummary";

const OrderSummery: FC<TCartItem[]> = (prop): JSX.Element => {
   const { subtotal, totalDiscount, totalQuantity, total } = calculateCartSummary(prop);

   return (
      <section className="top-32 flex h-fit flex-col gap-5 rounded-20 border p-6 text-2xl xl:sticky xl:w-1/3">
         <div className="flex items-end justify-between">
            <h3 className="font-bold">Order Summery</h3>
            <span className="text-xl text-dark/70">
               {totalQuantity} {totalQuantity > 1 ? "Items" : "Item"}
            </span>
         </div>
         <div className="flex flex-col gap-3 text-xl">
            <div className="flex items-center justify-between">
               <span className="text-dark/70">Subtotal</span>
               <span className="font-bold">${subtotal}</span>
            </div>
            <div className="flex items-center justify-between">
               <span className="text-dark/70">Discount</span>
               <span className="font-bold text-discount">-${totalDiscount}</span>
            </div>
            <div className="flex items-center justify-between">
               <span className="text-dark/70">Delivery Fee</span>
               <span className="font-bold">$15</span>
            </div>
         </div>

         <HorizontalLine className="my-3" />

         <div className="flex items-center justify-between">
            <span className="text-dark">Total</span>
            <span className="font-bold">${total}</span>
         </div>

         {/* TODO: add others sections */}
      </section>
   );
};

export default OrderSummery;
