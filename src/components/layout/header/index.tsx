"use client";

import { FC, useState } from "react";
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

   const closeTopNavbarHandler = () => {
      setCloseTopNavbar(true);
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
               <SearchInput />

               {/* RIGHT ICONS */}
               <div className="flex gap-3">
                  <Link href="/" className="lg:hidden">
                     <Image
                        onClick={() => {}}
                        src={searchIcon}
                        alt="search"
                        width={30}
                        height={30}
                        className="size-5 xl:size-6"
                     />
                  </Link>

                  <Basket />
               </div>
            </Section>
         </header>
      </>
   );
};

export default Header;
