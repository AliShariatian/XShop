// @ts-nocheck

const deliveryFee: number = 15;

const calculateCartSummary = (cart: object) => {
   const allPrices: { price: number; quantity: number }[] = [];
   const allDiscounts: { discount: number }[] = [];

   let totalPrice: number = 0;
   let totalDiscount: number = 0;

   for (const item in cart) {
      let price: number = [cart[item].price];
      let quantity: number = [cart[item].quantity];
      let discount: number = [cart[item].discount];

      allPrices.push({ price, quantity });
      allDiscounts.push({ discount });
   }

   totalPrice = +allPrices.reduce((prev, curr) => prev + curr.price * curr.quantity, 0);
   totalDiscount = +allDiscounts.reduce((prev, curr) => prev + curr.discount, 0);

   const total = totalPrice - totalDiscount + deliveryFee;

   return { totalPrice, totalDiscount, total };
};

export default calculateCartSummary;
