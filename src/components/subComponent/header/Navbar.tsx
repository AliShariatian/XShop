"use client";

import { FC, useState } from "react";
// COMPONENT
import Image from "next/image";
import Link from "next/link";
import { TopNavbar } from "@/components";
// ICON
import downArrowIcon from "../../../../public/img/icon/down-arrow.svg";
import searchIcon from "../../../../public/img/icon/search.svg";
import basketIcon from "../../../../public/img/icon/basket.svg";
import accountIcon from "../../../../public/img/icon/account.svg";
import hamburgerMenuIcon from "../../../../public/img/icon/hamburgerMenu.svg";

const Navbar: FC = (): JSX.Element => {
   const [closeTopNavbar, setCloseTopNavbar] = useState<boolean>(false);
   const [searchInput, setSearchInput] = useState<string>("");

   const closeTopNavbarHandler = () => {
      setCloseTopNavbar(true);
   };

   return (
      <header className="shadow-sm">
         {/* TOP NAVBAR */}
         <TopNavbar onClick={closeTopNavbarHandler} close={closeTopNavbar} />

         <div className="flex h-20 items-center justify-between bg-light lg:h-24">
            <div className="container flex items-center justify-between">
               {/* Hamburger Menu Icon */}
               <Image src={hamburgerMenuIcon} alt="open" width={20} height={20} className="mt-1 size-5 lg:hidden" />

               {/* TITLE */}
               <div className="-ml-16 -mt-1 lg:ml-0">
                  <h1 className="font-integralCF text-3xl uppercase">xshop</h1>
               </div>

               {/* NAVBAR ITEMS */}
               <nav className="hidden lg:block">
                  <ul className="flex gap-5">
                     <li className="flex items-center gap-2">
                        <Link href="/">Shop</Link>
                        <Image src={downArrowIcon} alt="open" width={10} height={10} className="size-[10px]" />
                     </li>
                     <li>
                        <Link href="/">On Sale</Link>
                     </li>
                     <li>
                        <Link href="/">New Arrivals</Link>
                     </li>
                     <li>
                        <Link href="/">Brands</Link>
                     </li>
                  </ul>
               </nav>

               {/* SEARCH BAR */}
               <div className="hidden w-2/5 rounded-full bg-grey-100 p-3 lg:flex">
                  <Image onClick={() => {}} src={searchIcon} alt="search" width={20} height={20} className="ml-2 size-5 cursor-pointer opacity-40" />
                  <input
                     type="search"
                     value={searchInput}
                     onChange={(ev: React.ChangeEvent<HTMLInputElement>) => setSearchInput(ev.target.value)}
                     className="ml-4 w-full bg-transparent pr-2 outline-none"
                     maxLength={40}
                     placeholder="Search for products..."
                  />
               </div>

               {/* RIGHT ICONS */}
               <div className="flex gap-3">
                  <Link href="/" className="lg:hidden">
                     <Image onClick={() => {}} src={searchIcon} alt="search" width={20} height={20} />
                  </Link>
                  <Link href="/">
                     <Image src={basketIcon} alt="basket" width={20} height={20} className="size-5" />
                  </Link>
                  <Link href="/">
                     <Image src={accountIcon} alt="account" width={20} height={20} className="size-5" />
                  </Link>
               </div>
            </div>
         </div>
      </header>
   );
};

export default Navbar;
