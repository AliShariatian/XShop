"use client";

import { FC, memo, useEffect, useState } from "react";
import { IProductsProps } from "@/components/common/product/type";
// COMPONENT
import { StarRate, Price, HorizontalLine, Button, Colors, ProductSize } from "@/components";
// Redux
import { useDispatch } from "react-redux";
import { addToCartAction } from "@/services/redux/slice/cart";
import { TCartItem } from "@/types/cart";
import { toast } from "react-toastify";

const ProductDetail: FC<IProductsProps> = ({
   id,
   imgs,
   title,
   rate,
   discount,
   price,
   description,
   colors,
   size,
   slug,
}): JSX.Element => {
   const dispatch = useDispatch();

   const [selectedColor, setSelectedColor] = useState<string>("");
   const [selectedSize, setSelectedSize] = useState<string>("");
   const [disableAddToCartButton, setDisableAddToCartButton] = useState<boolean>(true);

   const addToCartButtonHandler = () => {
      const mainImage: string = imgs[0];

      const item: Omit<TCartItem, "quantity"> = { id, title, mainImage, price, selectedColor, selectedSize, discount, slug };

      if (selectedColor && selectedSize) {
         dispatch(addToCartAction(item));
         toast.success("Product Added To Cart Successfully");
      } else {
         toast.warning("First Select Product Options");
      }
   };

   useEffect(() => {
      if (selectedColor && selectedSize) {
         setDisableAddToCartButton(false);
      } else {
         setDisableAddToCartButton(true);
      }
   }, [selectedColor, selectedSize]);

   return (
      <section className="xl:w-1/2">
         <div className="flex flex-col gap-3">
            <h1 className="mb-3 font-integralCF text-2xl xl:text-[40px]">{title}</h1>
            <StarRate rate={rate} className="gap-1" />
            <Price discount={discount} price={price} textSize="text-3xl" />

            <p className="mt-5 text-dark/70 transition-colors hover:text-dark">{description}</p>
         </div>

         <div>
            {/* Colors */}
            <HorizontalLine className="my-5" />
            <div>
               <span>Select Color</span>
               <Colors colors={colors} selectedColor={selectedColor} setSelectedColor={setSelectedColor} />
            </div>

            {/* Size */}
            <HorizontalLine className="my-5" />
            <div>
               <span>Choose Size</span>
               <ProductSize size={size} state={selectedSize} setState={setSelectedSize} />
            </div>

            {/* Add to cart */}
            <HorizontalLine className="my-5" />
            <Button
               onClick={addToCartButtonHandler}
               disable={disableAddToCartButton}
               bgColor="dark"
               py="py-2"
               className="w-full xl:w-2/3"
            >
               Add to Cart
            </Button>
         </div>
      </section>
   );
};

export default memo(ProductDetail);
