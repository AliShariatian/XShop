import { FC } from "react";
import { ProductCardType } from "./type";
// COMPONENT
import Image from "next/image";
import Link from "next/link";
import { Price, StarRate } from "@/components";

const ProductCard: FC<ProductCardType> = ({ rate, slug, price, title, imgs, discount }): JSX.Element => {
   return (
      <div className="productCard group/productCard ">
         {/* IMAGE */}
         <Link href={slug} title={title}>
            <div className="productImgWrapper">
               <Image
                  src={imgs[0]}
                  width={1000}
                  height={1000}
                  draggable="false"
                  alt={title}
                  className="size-full transition-transform group-hover/productCard:scale-110"
               />
            </div>
         </Link>

         <Link href={slug} title={title} className="mt-2">
            <h2 className="line-clamp-1 w-fit text-xl font-bold capitalize">{title}</h2>
         </Link>

         <StarRate rate={rate} />
         <Price price={price} discount={discount} />
      </div>
   );
};

export default ProductCard;
