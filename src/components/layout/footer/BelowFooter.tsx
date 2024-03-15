import { FC } from "react";
import { cards } from "./items";
import Image from "next/image";

const BelowFooter: FC = (): JSX.Element => {
   return (
      <section className="flex items-center justify-between pb-20">
         <div>
            <p className="cursor-default text-base text-dark/60 transition-[color] hover:text-dark">
               XShop © 1997 - 2024, All Rights Reserved
            </p>
         </div>

         {/* Cards */}
         <div className="flex items-center gap-3">
            {cards.map((item) => (
               <span key={item.title} title={item.title} className="rounded-md bg-light px-3 py-1 shadow">
                  <Image src={item.src} alt={item.title} width={50} height={50} className="size-7 object-scale-down" />
               </span>
            ))}
         </div>
      </section>
   );
};

export default BelowFooter;
