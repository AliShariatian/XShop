// @ts-nocheck

const deliveryFee: number = 15;

const calculateCartSummary = (cart: object) => {
   const array: { price: number; discount: number; quantity: number }[] = [];

   let subtotal: number = 0;
   let totalDiscount: number = 0;

   for (const item in cart) {
      let price: number = [cart[item].price];
      let quantity: number = [cart[item].quantity];
      let discount: number = [cart[item].discount];

      array.push({ price, discount: price * (discount / 100), quantity });
   }

   subtotal = +array.reduce((prev, curr) => prev + curr.price * curr.quantity, 0);
   totalDiscount = +array.reduce((prev, curr) => prev + curr.discount * curr.quantity, 0);

   const total = subtotal - totalDiscount + deliveryFee;

   return { subtotal, totalDiscount, total };
};

export default calculateCartSummary;
