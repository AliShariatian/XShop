"use client";

import { FC, memo, useRef, useState } from "react";
// ICON
import { searchIcon, hamburgerMenuIcon } from "@/public/img";
// COMPONENT
import Image from "next/image";
import Link from "next/link";
import Basket from "./Basket";
import TopNavbar from "./TopNavbar";
import SearchInput from "./SearchInput";
import { Logo, Section } from "@/components";

const Header: FC = (): JSX.Element => {
   const [closeTopNavbar, setCloseTopNavbar] = useState<boolean>(false);
   const [isShowSearchInput, setIsShowSearchInput] = useState<boolean>(false);

   const searchInputRef = useRef<HTMLInputElement>(null);

   // onClick
   const closeTopNavbarHandler = () => {
      setCloseTopNavbar(true);
   };

   // onClick
   const searchIconClickHandler = () => {
      setIsShowSearchInput((prev) => !prev);
      searchInputRef.current?.focus();
   };

   return (
      <>
         {/* TOP NAVBAR */}
         <TopNavbar onClick={closeTopNavbarHandler} close={closeTopNavbar} />

         {/* HEADER */}
         <header className="sticky top-0 z-40 shadow-sm">
            <Section
               parentClassName="w-full flex h-20 items-center justify-between bg-light lg:h-24"
               sectionClassName="flex items-center justify-between"
            >
               {/* Hamburger Menu Icon */}
               <div className="flex gap-4">
                  <Image src={hamburgerMenuIcon} alt="open" width={20} height={20} className="mt-1 size-5 lg:hidden" />

                  {/* LOGO */}
                  <Logo />
               </div>

               {/* NAVBAR ITEMS */}
               <nav className="hidden lg:block">
                  <ul className="flex gap-5">
                     <li className="flex items-center gap-2">
                        <Link href="/products">Products</Link>
                     </li>
                     <li>
                        <Link href="/#top-selling">Top Sale</Link>
                     </li>
                     <li>
                        <Link href="/#new-arrivals">New Arrivals</Link>
                     </li>
                     <li>
                        <Link href="/#brands">Brands</Link>
                     </li>
                  </ul>
               </nav>

               {/* SEARCH BAR */}
               <div
                  className={`${isShowSearchInput ? "show" : "hide"} lg:show left-0 z-40 w-full transition-all max-lg:absolute max-lg:top-[4.5rem] max-lg:px-4 lg:w-2/5`}
               >
                  <SearchInput ref={searchInputRef} />
               </div>

               {/* RIGHT ICONS */}
               <div className="flex items-end gap-4 max-lg:mb-1">
                  <Image
                     onClick={searchIconClickHandler}
                     src={searchIcon}
                     alt="search"
                     width={30}
                     height={30}
                     className="size-5 lg:hidden lg:size-6"
                  />

                  <Basket />
               </div>
            </Section>
         </header>
      </>
   );
};

export default memo(Header);
