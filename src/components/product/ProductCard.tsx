import { FC } from "react";
// COMPONENT
import Image from "next/image";
import Link from "next/link";

type PropsType = {
   rate: number;
   href: string;
   price: number;
   title: string;
   imgSrc: string;
   discount: number;
};

const ProductCard: FC<PropsType> = ({ rate, href, price, title, imgSrc, discount }): JSX.Element => {
   return (
      <div className="productCard">
         {/* IMAGE */}
         <Link href={href} title={title}>
            <div className="productImgWrapper">
               <Image src={imgSrc} width={500} height={500} alt={title} className="size-full" />
            </div>
         </Link>

         {/* TITLE */}
         <Link href={href}>
            <h2 className="truncate font-sans text-xl font-bold">{title}</h2>
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
                        <span className="bg-discount/10 text-discount rounded-full px-3 py-1 text-base font-semibold">-{discount}%</span>
                     </>
                  ) : null}
               </>
            )}
         </div>
      </div>
   );
};

export default ProductCard;
