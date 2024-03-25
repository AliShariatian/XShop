"use client";

import { FC, useEffect, useState } from "react";
import { singleVerified } from "@/public/img";
import { ProductsPropsType } from "@/components/product/type";
// COMPONENT
import Image from "next/image";
import { StarRate, Price, HorizontalLine, Button } from "@/components";
// Redux
import { useDispatch, useSelector } from "react-redux";
import { addToCartAction } from "@/services/redux/slice/cart";
import { cartItemType } from "@/types/cart";
import { toast } from "react-toastify";

const ProductDetail: FC<ProductsPropsType> = ({
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
   const cart = useSelector((state: { cart: cartItemType[] }) => state.cart);
   const currentProduct = cart.find((item: cartItemType) => item.id === id);

   const [selectedColor, setSelectedColor] = useState<string>(currentProduct?.selectedColor || "");
   const [selectedSize, setSelectedSize] = useState<string>(currentProduct?.selectedSize || "");
   const [disableAddToCartButton, setDisableAddToCartButton] = useState<boolean>(true);

   const addToCartButtonHandler = () => {
      const mainImage: string = imgs[0];

      const item: Omit<cartItemType, "quantity"> = { id, title, mainImage, price, selectedColor, selectedSize, discount, slug };

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
               <span>Select Colors</span>

               <div className="mt-2 flex flex-wrap gap-3">
                  {colors.map((item) => (
                     <button
                        key={item}
                        onClick={() => setSelectedColor(item)}
                        style={{ backgroundColor: item }}
                        className="flex size-10 items-center justify-center rounded-full border border-dark/50"
                     >
                        {selectedColor === item && (
                           <Image
                              src={singleVerified}
                              alt="Selected"
                              width={10}
                              height={10}
                              className="size-5 drop-shadow-[0px_0px_2px_rgba(0,0,0,0.7)]"
                           />
                        )}
                     </button>
                  ))}
               </div>
            </div>

            {/* Size */}
            <HorizontalLine className="my-5" />
            <div>
               <span>Choose Size</span>

               <div className="mt-2 flex flex-wrap gap-3">
                  {size.map((item) => (
                     <button
                        key={item}
                        onClick={() => setSelectedSize(item)}
                        className={`${selectedSize === item ? "bg-dark text-light" : "bg-grey-100 text-dark/70"} rounded-full  px-4 py-2 capitalize transition hover:bg-dark hover:text-light`}
                     >
                        {item}
                     </button>
                  ))}
               </div>
            </div>

            {/* Add to cart */}
            <HorizontalLine className="my-5" />
            <div className="flex gap-3" onClick={addToCartButtonHandler}>
               <Button disable={disableAddToCartButton} bgColor="dark" py="py-2" className="w-2/3">
                  Add to Cart
               </Button>
            </div>
         </div>
      </section>
   );
};

export default ProductDetail;
