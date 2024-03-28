import { roundNumber } from "./roundNumber";

const calculatePriceAfterDiscount = (price: number, discount: number) => {
   let finalPrice: number = discount ? price - (discount / 100) * price : price;
   finalPrice = roundNumber(finalPrice);

   return { finalPrice };
};

export default calculatePriceAfterDiscount;
