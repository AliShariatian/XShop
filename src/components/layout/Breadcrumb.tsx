"use client";

import { FC } from "react";
import { usePathname } from "next/navigation";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import Image from "next/image";
import { downArrowIcon } from "@/public/img";

const Breadcrumb: FC = (): JSX.Element => {
   const currentPath = usePathname();
   const pages = currentPath
      .split("/")
      .slice(1) // Remove first item
      .map((item) => item.replaceAll("-", " "));

   const separator = (
      <Image src={downArrowIcon} height={9} width={9} alt="arrow" className="mx-0 size-[0.7rem] -rotate-90 xl:mx-2" />
   );

   return (
      <Breadcrumbs separator={separator} className="my-7 *:max-xl:text-base">
         <Link underline="hover" href="/" title={"Home"} className="!text-dark">
            Home
         </Link>

         {pages.map((item) =>
            // If item is last element, remove link
            item === pages.at(-1) ? (
               <span key={item} className="cursor-default capitalize !text-dark">
                  {item}
               </span>
            ) : (
               <Link key={item} title={item} underline="hover" href={`/${item}`} className="capitalize !text-dark">
                  {item}
               </Link>
            ),
         )}
      </Breadcrumbs>
   );
};

export default Breadcrumb;
