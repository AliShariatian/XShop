import { FC } from "react";
import { useDispatch } from "react-redux";
import { minus, plus } from "@/public/img";
import cn from "@/utils/cn";
import Image from "next/image";
import { incrementQuantityAction, decrementQuantityAction } from "@/services/redux/slice/cart";

type PropsType = {
   id: number;
   className?: string;
   quantity: number;
};

const ProductSelectCount: FC<PropsType> = ({ className, id, quantity }): JSX.Element => {
   const dispatch = useDispatch();

   return (
      <div
         className={cn(
            "flex w-1/3 items-center justify-between rounded-full bg-grey-100 *:flex *:size-full *:items-center *:justify-center *:py-2",
            className,
         )}
      >
         <button onClick={() => dispatch(decrementQuantityAction(id))}>
            <Image src={minus} alt="minus" width={10} height={10} className="size-3" />
         </button>
         <span>{quantity}</span>
         <button onClick={() => dispatch(incrementQuantityAction(id))}>
            <Image src={plus} alt="minus" width={10} height={10} className="size-3" />
         </button>
      </div>
   );
};

export default ProductSelectCount;
