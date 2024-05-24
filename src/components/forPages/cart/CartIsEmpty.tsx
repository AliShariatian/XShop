import { FC } from "react";
import { Button } from "@/components";
import Link from "next/link";

const CartIsEmpty: FC = (): JSX.Element => {
   return (
      <div className="my-11 flex w-full flex-col items-center justify-center gap-10 rounded-20 border-4 border-dashed border-dark/5 py-36">
         <h3 className="text-center text-4xl font-black capitalize xl:text-6xl">Your Cart Is Empty!</h3>
         <Link href="/products">
            <Button bgColor="dark">Shopping Now</Button>
         </Link>
      </div>
   );
};

export default CartIsEmpty;
