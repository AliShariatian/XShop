import { FC } from "react";
import { social } from "./footer/items";
import Link from "next/link";
import Image from "next/image";
import cn from "@/utils/cn";

type TProps = {
   className?: string;
};

const Social: FC<TProps> = ({ className }): JSX.Element => {
   return (
      <div className={cn("flex gap-2 xl:mt-4", className)}>
         {social.map((item) => (
            <Link
               href={item.href}
               key={item.title}
               target="_blank"
               className="rounded-full border-2 bg-light p-2 transition-[filter] hover:invert"
            >
               <Image src={item.src} width={20} height={20} alt={item.title} title={item.title} className="size-4" />
            </Link>
         ))}
      </div>
   );
};

export default Social;
