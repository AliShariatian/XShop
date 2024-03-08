import { FC } from "react";
import { ProductsType } from "@/types/products";
// COMPONENT
import Image from "next/image";
import Link from "next/link";

const ProductCard: FC<ProductsType> = ({ rate, slug, price, title, img, discount }): JSX.Element => {
   return (
      <div className="productCard group/productCard">
         {/* IMAGE */}
         <Link href={slug} title={title}>
            <div className="productImgWrapper">
               <Image
                  src={img}
                  width={1000}
                  height={1000}
                  draggable="false"
                  alt={title}
                  className="size-full transition-transform group-hover/productCard:scale-110"
               />
            </div>
         </Link>

         {/* TITLE */}
         <Link href={slug} title={title}>
            <h2 className="truncate font-sans text-xl font-bold capitalize">{title}</h2>
         </Link>

         {/* STAR */}
         <div className="flex gap-3">
            <div className="flex gap-[2px]">
               {/* Fill star */}
               {Array(Math.ceil(rate))
                  .fill(0)
                  .map((_, index) => (
                     <Image key={index} src="/img/icon/starFullRate.svg" width={50} height={50} alt="star" className="size-5" />
                  ))}
               {/* Empty star */}
               {Array(5 - Math.ceil(rate))
                  .fill(0)
                  .map((_, index) => (
                     <Image key={index} src="/img/icon/starEmptyRate.svg" width={50} height={50} alt="star" className="size-5" />
                  ))}
            </div>
            <div>
               <span>{Math.ceil(rate)}/</span>
               <span className="text-gray-400">5</span>
            </div>
         </div>

         <div className="flex items-center gap-3">
            {/* Price */}
            {discount === 100 ? (
               <span className="text-2xl font-bold">Free</span>
            ) : (
               <>
                  <span className="text-2xl font-bold">${discount ? price - (discount / 100) * price : price}</span>
                  {discount ? (
                     <>
                        {/* Price with Discount */}
                        <span className="text-2xl font-bold text-dark/40 line-through">${price}</span>
                        {/* DISCOUNT */}
                        <span className="rounded-full bg-discount/10 px-3 py-1 text-base font-semibold text-discount">-{discount}%</span>
                     </>
                  ) : null}
               </>
            )}
         </div>
      </div>
   );
};

export default ProductCard;
