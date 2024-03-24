import { FC } from "react";
import { Button, ProductSelectCount } from "@/components";

type PropsType = {
   onClick: () => void;
};

const AddToCart: FC<PropsType> = ({ onClick }): JSX.Element => {
   return (
      <div className="flex gap-3">
         <ProductSelectCount />

         <Button onClick={onClick} bgColor="dark" py="py-2" className="w-2/3">
            Add to Cart
         </Button>
      </div>
   );
};

export default AddToCart;
