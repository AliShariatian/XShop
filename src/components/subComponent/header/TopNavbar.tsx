"use client";

import { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import closeIcon from "../../../../public/img/icon/close.svg";

type TopNavbarPropsType = {
   close: boolean;
   onClick: () => void;
};

const TopNavbar: FC<TopNavbarPropsType> = ({ onClick, close }): JSX.Element | false => {
   return (
      !close && (
         <div className="flex h-9 w-full items-center justify-between bg-dark">
            <div className="container flex items-center justify-center">
               {/* WHITE SPACE */}
               <div className="hidden w-1/3 lg:block" />

               {/* CENTER */}
               <div className="lg:w-1/3">
                  <p className="text-sm text-light lg:text-base">
                     Sign up and get 20% off to your first order.
                     <Link href="/" className="ml-1 font-medium underline">
                        Sign Up Now
                     </Link>
                  </p>
               </div>

               {/* CLOSE ICON */}
               <div className="hidden cursor-pointer justify-end lg:flex lg:w-1/3">
                  <Image onClick={onClick} src={closeIcon} width={13} height={13} alt="close" />
               </div>
            </div>
         </div>
      )
   );
};

export default TopNavbar;
