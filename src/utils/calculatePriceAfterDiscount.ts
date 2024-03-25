const calculatePriceAfterDiscount = (price: number, discount: number) => {
   const finalPrice: number = discount ? price - (discount / 100) * price : price;

   return { finalPrice };
};

export default calculatePriceAfterDiscount;
