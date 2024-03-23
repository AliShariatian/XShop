import { FC } from "react";
import { ProductsPropsType } from "@/components/product/type";
import { StarRate, Price, HorizontalLine } from "@/components";
import Colors from "./Colors";
import Size from "./Size";
import AddToCart from "./AddToCart";

const ProductDetail: FC<ProductsPropsType> = ({ title, rate, discount, price, description, colors, size }): JSX.Element => {
   return (
      <section className="xl:w-1/2">
         <div className="flex flex-col gap-3">
            <h1 className="mb-3 font-integralCF text-2xl xl:text-[40px]">{title}</h1>
            <StarRate rate={rate} className="gap-1" />
            <Price discount={discount} price={price} textSize="text-3xl" />

            <p className="mt-5 text-dark/70 transition-colors hover:text-dark">{description}</p>
         </div>

         <div>
            <HorizontalLine className="my-5" />
            <Colors colors={colors} />

            <HorizontalLine className="my-5" />
            <Size size={size} />

            <HorizontalLine className="my-5" />
            <AddToCart />
         </div>
      </section>
   );
};

export default ProductDetail;
