import { FC, memo } from "react";
import { trash } from "@/public/img";
import { useDispatch } from "react-redux";
import { removeFromCartAction } from "@/services/redux/slice/cart";
// COMPONENT
import Image from "next/image";
import Link from "next/link";
import { Price, ProductSelectCount } from "@/components";
import { TCartItem } from "@/types/cart";

const CartItem: FC<TCartItem> = ({ id, title, price, discount, mainImage, slug, selectedColor, selectedSize }): JSX.Element => {
   const dispatch = useDispatch();

   return (
      <div>
         <div className="group/img flex flex-col justify-between xl:flex-row">
            {/* Right items */}
            <div className="flex gap-4 xl:w-4/5">
               <Link href={slug} className="size-[4.5rem] overflow-hidden rounded-lg shadow xl:size-36">
                  <Image
                     src={mainImage}
                     width={100}
                     height={100}
                     alt={title}
                     className="size-full transition duration-300 ease-out group-hover/img:scale-110"
                  />
               </Link>

               <div className="flex flex-col justify-between">
                  <div className="flex flex-col gap-1 text-base">
                     <Link href={slug}>
                        <h3 className="text-lg font-bold capitalize xl:text-xl">{title}</h3>
                     </Link>

                     <div className="font-medium">
                        <span>Size: </span>
                        <span className="capitalize text-dark/70">{selectedSize}</span>
                     </div>
                     <div className="font-medium">
                        <div className="flex items-center gap-2">
                           Color:
                           <span
                              style={{ backgroundColor: selectedColor }}
                              className="size-4 rounded-full border border-dark/50"
                           />
                        </div>
                     </div>
                  </div>
                  <div className="mt-4">
                     <Price price={price} discount={discount} smallSize />
                  </div>
               </div>
            </div>

            {/* Left Items */}
            <div className="flex flex-row-reverse items-center justify-between max-xl:mt-6 xl:w-1/5 xl:flex-col xl:items-end">
               <button onClick={() => dispatch(removeFromCartAction(id))} title="Remove From Cart">
                  <Image src={trash} width={20} height={20} alt="Remove From Cart" className="size-5" />
               </button>
               <ProductSelectCount id={id} className="w-2/3 xl:w-full" />
            </div>
         </div>
      </div>
   );
};

export default memo(CartItem);
