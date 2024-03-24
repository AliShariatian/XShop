"use client";

import { FC } from "react";
import { Section, Breadcrumb, BigHeading, CartItem, OrderSummery, CartIsEmpty } from "@/components";
import { useSelector } from "react-redux";

const CartComponents: FC = (): JSX.Element => {
   // TODO: set valid type
   const cart = useSelector((state: any) => state.cart);

   return (
      <Section>
         <div>
            <Breadcrumb />
            <BigHeading tag="h1" title="Your cart" className="text-left" />
         </div>

         {cart.length > 0 ? (
            <div className="mt-9 flex gap-5">
               {/* Cart Items */}
               <main className="flex h-fit w-2/3 flex-col gap-4 rounded-20 border p-6 *:border-b-2 *:pb-4 last:*:border-b-0 last:*:pb-0">
                  {cart?.map((item: any) => <CartItem key={item.id} {...item} />)}
               </main>

               {/* Summery */}
               <OrderSummery />
            </div>
         ) : (
            <CartIsEmpty />
         )}
      </Section>
   );
};

export default CartComponents;
