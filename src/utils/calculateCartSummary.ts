// @ts-nochec

import { roundNumber } from "./roundNumber";

const deliveryFee: number = 15;

const calculateCartSummary = (cart: object) => {
   const array: { price: number; discount: number; quantity: number }[] = [];

   let subtotal: number | string = 0;
   let totalDiscount: number | string = 0;
   let totalQuantity: number | string = 0;
   let total: number | string = 0;

   for (const item in cart) {
      let price: number = [cart[item].price];
      let quantity: number = [cart[item].quantity];
      let discount: number = [cart[item].discount];

      array.push({ price, discount: price * (discount / 100), quantity });
   }

   subtotal = +array.reduce((prev, curr) => prev + curr.price * curr.quantity, 0);
   totalDiscount = +array.reduce((prev, curr) => prev + curr.discount * curr.quantity, 0);
   totalQuantity = +array.reduce((prev, curr) => prev + +curr.quantity, 0);

   total = subtotal - totalDiscount + deliveryFee;

   // Add comma separator
   subtotal = roundNumber(subtotal).toLocaleString();
   totalDiscount = roundNumber(totalDiscount).toLocaleString();
   total = roundNumber(total).toLocaleString();

   return { subtotal, totalDiscount, totalQuantity, total };
};

export default calculateCartSummary;
