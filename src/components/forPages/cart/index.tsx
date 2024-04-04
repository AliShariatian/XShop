"use client";

import { FC } from "react";
import { Section, Breadcrumb, BigHeading, CartItem, OrderSummery, CartIsEmpty } from "@/components";
import { useSelector } from "react-redux";
import { TRootState } from "@/services/redux/store";

const CartComponents: FC = (): JSX.Element => {
   const cart = useSelector((state: TRootState) => state.cart);

   return (
      <Section>
         <div>
            <Breadcrumb />
            <BigHeading tag="h1" title="Your cart" className="text-left" />
         </div>

         {cart.length > 0 ? (
            <div className="mt-9 flex flex-col gap-5 xl:flex-row">
               {/* Cart Items */}
               <main className="flex h-fit flex-col gap-4 rounded-20 border p-4 *:border-b-2 *:pb-4 last:*:border-b-0 last:*:pb-0 xl:w-2/3 xl:p-6">
                  {cart?.map((item: any) => <CartItem key={item.id} {...item} />)}
               </main>

               {/* Summery */}
               <OrderSummery {...cart} />
            </div>
         ) : (
            <CartIsEmpty />
         )}
      </Section>
   );
};

export default CartComponents;
