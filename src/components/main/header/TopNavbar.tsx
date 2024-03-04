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
         <div className="flex h-9 w-full items-center justify-center bg-dark">
            <div className="container relative flex items-center justify-center">
               <p className="text-sm text-light md:text-base">
                  Sign up and get 20% off to your first order.
                  <Link href="/" className="ml-1 font-medium underline">
                     Sign Up Now
                  </Link>
               </p>
               <Image onClick={onClick} src={closeIcon} width={13} height={13} alt="close" className="absolute right-0 hidden cursor-pointer md:block" />
            </div>
         </div>
      )
   );
};

export default TopNavbar;
