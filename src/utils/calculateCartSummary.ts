import { cartItemType } from "@/types/cart";
import { roundNumber } from "./roundNumber";

const deliveryFee: number = 15;

const calculateCartSummary = (cart: cartItemType[]) => {
   let subtotal: number = 0;
   let totalDiscount: number = 0;
   let totalQuantity: number = 0;
   let total: number = 0;

   Object.values(cart).forEach((value: cartItemType) => {
      subtotal += value.price * value.quantity;
      totalDiscount += value.price * (value.discount / 100) * value.quantity;
      totalQuantity += value.quantity;
   });

   total = subtotal - totalDiscount + deliveryFee;

   // Change to user friendly numbers
   // @ts-ignore
   subtotal = roundNumber(subtotal).toLocaleString();
   // @ts-ignore
   totalDiscount = roundNumber(totalDiscount).toLocaleString();
   // @ts-ignore
   total = roundNumber(total).toLocaleString();

   return { subtotal, totalDiscount, totalQuantity, total };
};

export default calculateCartSummary;
