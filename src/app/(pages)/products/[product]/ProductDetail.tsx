import { FC } from "react";
import { ProductsPropsType } from "@/components/product/type";
import { StarRate } from "@/components";

const ProductDetail: FC<ProductsPropsType> = ({ title, rate, discount, id, img, price, saleCount, slug }): JSX.Element => {
   return (
      <section className="w-1/2 border">
         <div>
            <h1 className="font-integralCF text-[40px]">{title}</h1>
            <StarRate rate={rate} className="gap-1" />
         </div>
      </section>
   );
};

export default ProductDetail;
