import { FC } from "react";
import { singleVerified } from "@/public/img";
import { ProductsPropsType } from "@/components/product/type";
// COMPONENT
import Image from "next/image";
import { StarRate, Price, HorizontalLine, Button, ProductSelectCount } from "@/components";
// Redux
import { useDispatch } from "react-redux";
import { addToCartAction } from "@/services/redux/slice/cart";

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

   const addToCartHandler = () => {
      const mainImage: string = imgs[0];

      const item = {
         id,
         title,
         mainImage,
         price,
         colors,
         size,
         discount,
         slug,
      };

      dispatch(addToCartAction(item));
   };

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
                        style={{ backgroundColor: item }}
                        className="flex size-10 items-center justify-center rounded-full border border-dark/50"
                     >
                        <Image src={singleVerified} alt="Selected" width={10} height={10} className="size-4" />
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
                        className="rounded-full bg-grey-100 px-4 py-2 capitalize text-dark/70 transition hover:bg-dark hover:text-light"
                     >
                        {item}
                     </button>
                  ))}
               </div>
            </div>

            {/* Add to cart */}
            <HorizontalLine className="my-5" />
            <div className="flex gap-3">
               <Button onClick={addToCartHandler} bgColor="dark" py="py-2" className="w-2/3">
                  Add to Cart
               </Button>
            </div>
         </div>
      </section>
   );
};

export default ProductDetail;
