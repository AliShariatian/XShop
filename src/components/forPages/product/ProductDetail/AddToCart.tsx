import { FC } from "react";
import Image from "next/image";
import { minus, plus } from "@/public/img";
import { Button } from "@/components";

const AddToCart: FC = (): JSX.Element => {
   return (
      <div className="flex gap-3">
         <div className="flex w-1/3 items-center justify-between rounded-full bg-grey-100 *:flex *:size-full *:items-center *:justify-center *:py-2">
            <button>
               <Image src={minus} alt="minus" width={10} height={10} className="size-3" />
            </button>
            <span>1</span>
            <button>
               <Image src={plus} alt="minus" width={10} height={10} className="size-3" />
            </button>
         </div>

         <Button bgColor="dark" py="py-2" className="w-2/3">
            Add to Cart
         </Button>
      </div>
   );
};

export default AddToCart;
