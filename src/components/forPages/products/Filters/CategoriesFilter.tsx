import { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import { downArrowIcon } from "@/public/img";

const categories: {
   label: string;
   href: string;
}[] = [
   { label: "t-shirt", href: "/" },
   { label: "shoe", href: "/" },
   { label: "trousers", href: "/" },
];

const CategoriesFilter: FC = (): JSX.Element => {
   return (
      <div className="flex flex-col gap-3">
         {categories.map(({ href, label }) => (
            <Link key={label} href={href} title={label} className="group/filterCategoriesHover flex items-center justify-between">
               <span className="capitalize">{label}</span>
               <Image
                  src={downArrowIcon}
                  alt={label}
                  width={10}
                  height={10}
                  className="mr-1 size-3 -rotate-90 opacity-40 transition-[margin] group-hover/filterCategoriesHover:mr-0"
               />
            </Link>
         ))}
      </div>
   );
};

export default CategoriesFilter;
