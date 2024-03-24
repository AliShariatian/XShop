import { FC } from "react";
import cn from "@/utils/cn";
import Image from "next/image";
import { minus, plus } from "@/public/img";
import { useDispatch, useSelector } from "react-redux";
import { incrementQuantityAction, decrementQuantityAction } from "@/services/redux/slice/cart";

type PropsType = {
   id: number;
   className?: string;
};

const ProductSelectCount: FC<PropsType> = ({ className, id }): JSX.Element | false => {
   const dispatch = useDispatch();
   const cart = useSelector((state: any) => state.cart);

   const currentProduct = cart?.find((item: any) => item.id === id);
   const quantity = currentProduct?.quantity;

   return (
      <div
         className={`transition-all ${cn(
            "items-center justify-between rounded-full bg-grey-100 *:flex *:size-full *:items-center *:justify-center *:py-2",
            className,
         )} ${quantity > 0 ? "flex w-1/3" : "hidden w-0"}`}
      >
         <button onClick={() => dispatch(decrementQuantityAction(id))} className="transition-transform active:scale-75">
            <Image src={minus} alt="minus" width={10} height={10} className="size-3" />
         </button>
         <span>{quantity}</span>
         <button onClick={() => dispatch(incrementQuantityAction(id))} className="transition-transform active:scale-75">
            <Image src={plus} alt="minus" width={10} height={10} className="size-3" />
         </button>
      </div>
   );
};

export default ProductSelectCount;
