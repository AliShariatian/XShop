import { FC } from "react";
import cn from "@/utils/cn";
import Image from "next/image";
import { minus, plus } from "@/public/img";
import { useDispatch, useSelector } from "react-redux";
import { incrementQuantityAction, decrementQuantityAction } from "@/services/redux/slice/cart";
import { TCartItem } from "@/types/cart";

type TProps = {
   id: number;
   className?: string;
};

const ProductSelectCount: FC<TProps> = ({ className, id }): JSX.Element | false => {
   const dispatch = useDispatch();
   const cart = useSelector((state: { cart: TCartItem[] }) => state.cart);

   const currentProduct = cart.find((item: TCartItem) => item.id === id);
   const quantity = currentProduct?.quantity;

   return (
      <div
         className={cn(
            "flex w-1/3 items-stretch justify-between overflow-hidden rounded-full bg-grey-100 *:flex *:w-full *:items-center *:justify-center *:py-2",
            className,
         )}
      >
         <button onClick={() => dispatch(decrementQuantityAction(id))} className="transition-colors active:bg-gray-300">
            <Image src={minus} alt="decrement" width={10} height={10} className="size-3" />
         </button>

         <span>{quantity}</span>

         <button onClick={() => dispatch(incrementQuantityAction(id))} className="transition-colors active:bg-gray-300">
            <Image src={plus} alt="increment" width={10} height={10} className="size-3" />
         </button>
      </div>
   );
};

export default ProductSelectCount;
