"use client";

import { FC } from "react";
// ICON
import { closeIcon } from "@/utils/icons";
// COMPONENT
import Link from "next/link";
import Image from "next/image";
import { Section } from "@/components";

type TopNavbarPropsType = {
   close: boolean;
   onClick: () => void;
};

const TopNavbar: FC<TopNavbarPropsType> = ({ onClick, close }): JSX.Element | false => {
   return (
      <Section
         parentClass={`${!close ? "mt-0" : "-mt-9"} flex h-9 w-full items-center justify-between bg-dark transition-[margin]`}
         sectionClass="flex items-center justify-center"
      >
         {/* WHITE SPACE */}
         <div className="hidden w-1/6 lg:block" />

         {/* CENTER */}
         <div className="text-center lg:w-4/6">
            <p className="text-sm text-light lg:text-base">
               Sign up and get 20% off to your first order.
               <Link href="/" className="ml-1 font-medium underline">
                  Sign Up Now
               </Link>
            </p>
         </div>

         {/* CLOSE ICON */}
         <div className="hidden cursor-pointer justify-end lg:flex lg:w-1/6 ">
            <Image onClick={onClick} src={closeIcon} width={13} height={13} alt="close" />
         </div>
      </Section>
   );
};

export default TopNavbar;
