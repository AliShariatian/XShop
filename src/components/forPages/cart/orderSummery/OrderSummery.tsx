import { FC } from "react";
import { HorizontalLine } from "@/components";

const OrderSummery: FC = (): JSX.Element => {
   return (
      <section className="flex h-fit w-1/3 flex-col gap-5 rounded-20 border p-6 text-2xl">
         <h3 className="font-bold">OrderSummery</h3>
         <div className="flex flex-col gap-3 text-xl">
            <div className="flex items-center justify-between">
               <span className="text-dark/70">Subtotal</span>
               <span className="font-bold">$656</span>
            </div>
            <div className="flex items-center justify-between">
               <span className="text-dark/70">Discount (-20%)</span>
               <span className="font-bold text-discount">-$113</span>
            </div>
            <div className="flex items-center justify-between">
               <span className="text-dark/70">Delivery Fee</span>
               <span className="font-bold">$15</span>
            </div>
         </div>

         <HorizontalLine className="my-3" />

         <div className="flex items-center justify-between">
            <span className="text-dark">Total</span>
            <span className="font-bold">$15</span>
         </div>

         {/* TODO: add others sections */}
      </section>
   );
};

export default OrderSummery;
