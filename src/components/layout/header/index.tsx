"use client";

import { FC, memo, useCallback, useState } from "react";
import { navMenuItems } from "./navMenuItems";
// ICON
import { searchIcon, hamburgerMenuIcon } from "@/public/img";
// COMPONENT
import Image from "next/image";
import Link from "next/link";
import Basket from "./Basket";
import TopNavbar from "./TopNavbar";
import SearchInput from "./SearchInput";
import { Logo, Section } from "@/components";
import MobileNavMenu from "./MobileNavMenu";

const Header: FC = (): JSX.Element => {
   const [closeTopNavbar, setCloseTopNavbar] = useState<boolean>(false);
   const [isMobileNavMenuClose, setIsMobileNavMenuClose] = useState<boolean>(true);
   const [isShowSearchInput, setIsShowSearchInput] = useState<boolean>(false);

   // onClick
   const closeTopNavbarHandler = () => {
      setCloseTopNavbar(true);
   };

   // onClick
   const searchIconClickHandler = useCallback(() => {
      setIsShowSearchInput((prev) => !prev);
   }, []);

   const toggleMobileNavMenuHandler = useCallback(() => {
      setIsMobileNavMenuClose((prev) => !prev);
   }, []);

   return (
      <>
         {/* TOP NAVBAR */}
         <TopNavbar onClick={closeTopNavbarHandler} close={closeTopNavbar} />
         <MobileNavMenu onClose={toggleMobileNavMenuHandler} isClose={isMobileNavMenuClose} />
         {/* HEADER */}
         <header className="sticky top-0 z-40 shadow-sm">
            <Section
               parentClassName="w-full flex h-20 items-center justify-between bg-light xl:h-24"
               sectionClassName="flex items-center justify-between"
            >
               {/* Hamburger Menu Icon */}
               <div className="flex gap-4">
                  <Image
                     onClick={toggleMobileNavMenuHandler}
                     src={hamburgerMenuIcon}
                     alt="open"
                     width={20}
                     height={20}
                     className="mt-1 size-5 xl:hidden"
                  />

                  {/* LOGO */}
                  <Logo />
               </div>

               {/* NAVBAR ITEMS */}
               <nav className="hidden xl:block">
                  <ul className="flex gap-5">
                     {navMenuItems.map(({ href, label }) => (
                        <li key={label}>
                           <Link
                              href={href}
                              className={`${href === "/products" ? "animate-pulse font-bold" : "font-medium"} text-dark/60 transition-colors hover:text-dark`}
                           >
                              {label}
                           </Link>
                        </li>
                     ))}
                  </ul>
               </nav>

               {/* SEARCH BAR */}
               <div
                  className={`${isShowSearchInput ? "show" : "hide"} xl:show left-0 z-40 w-full transition-all max-xl:absolute max-xl:top-[4.5rem] max-xl:px-4 xl:w-2/5`}
               >
                  <SearchInput />
               </div>

               {/* RIGHT ICONS */}
               <div className="flex items-end gap-4 max-xl:mb-1">
                  <label htmlFor="searchInput">
                     <Image
                        onClick={searchIconClickHandler}
                        src={searchIcon}
                        alt="search"
                        width={30}
                        height={30}
                        className="size-5 xl:hidden xl:size-6"
                     />
                  </label>

                  <Basket />
               </div>
            </Section>
         </header>
      </>
   );
};

export default memo(Header);
