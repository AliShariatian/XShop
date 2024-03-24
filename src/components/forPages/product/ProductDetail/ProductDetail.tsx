import { FC } from "react";
import { ProductsPropsType } from "@/components/product/type";
import { StarRate, Price, HorizontalLine } from "@/components";
import Colors from "./Colors";
import Size from "./Size";
import AddToCart from "./AddToCart";
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

      dispatch(
         addToCartAction({
            id,
            title,
            mainImage,
            price,
            colors,
            size,
            discount,
            slug,
         }),
      );
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
            <HorizontalLine className="my-5" />
            <Colors colors={colors} />

            <HorizontalLine className="my-5" />
            <Size size={size} />

            <HorizontalLine className="my-5" />
            <AddToCart onClick={addToCartHandler} />
         </div>
      </section>
   );
};

export default ProductDetail;
