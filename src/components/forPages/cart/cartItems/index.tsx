import { FC } from "react";
import { trash } from "@/public/img";
import { useDispatch } from "react-redux";
import { removeFromCartAction } from "@/services/redux/slice/cart";
// COMPONENT
import Image from "next/image";
import Link from "next/link";
import { ProductSelectCount } from "@/components";

type PropsType = {
   id: number;
   title: string;
   price: number;
   // size: string;
   // color: string;
   mainImage: string;
   quantity: number;
   slug: string;
};

const CartItem: FC<PropsType> = ({ id, title, price, mainImage, slug }): JSX.Element => {
   const dispatch = useDispatch();

   return (
      <div>
         <div className="group/img flex justify-between">
            {/* Right items */}
            <div className="flex w-4/5 gap-4">
               <Link href={slug} className="overflow-hidden rounded-2xl shadow">
                  <Image
                     src={mainImage}
                     width={100}
                     height={100}
                     alt={title}
                     className="size-36 transition duration-300 ease-out group-hover/img:scale-110"
                  />
               </Link>

               <div className="flex flex-col justify-between">
                  <div className="flex flex-col gap-1 text-base">
                     <Link href={slug}>
                        <h3 className="text-xl font-bold capitalize">{title}</h3>
                     </Link>

                     <div className="font-medium">
                        <span>Size: </span>
                        <span className="text-dark/70">Large</span>
                     </div>
                     <div className="font-medium">
                        <span>Color: </span>
                        <span className="text-dark/70">White</span>
                     </div>
                  </div>
                  <span className="text-2xl font-bold">${price}</span>
               </div>
            </div>

            {/* Left Items */}
            <div className="flex w-1/5 flex-col items-end justify-between">
               <button onClick={() => dispatch(removeFromCartAction(id))} title="Remove From Cart">
                  <Image src={trash} width={20} height={20} alt="Remove From Cart" className="size-5" />
               </button>
               <ProductSelectCount id={id} className="w-full" />
            </div>
         </div>
      </div>
   );
};

export default CartItem;
