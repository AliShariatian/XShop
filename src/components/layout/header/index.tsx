"use client";

import { FC, useState } from "react";
// ICON
import { searchIcon, basketIcon, accountIcon, hamburgerMenuIcon } from "@/public/img";
// COMPONENT
import Image from "next/image";
import Link from "next/link";
import TopNavbar from "./TopNavbar";
import { Logo, Section } from "@/components";
import { useSelector } from "react-redux";

const Header: FC = (): JSX.Element => {
   const [closeTopNavbar, setCloseTopNavbar] = useState<boolean>(false);
   const [searchInput, setSearchInput] = useState<string>("");

   const closeTopNavbarHandler = () => {
      setCloseTopNavbar(true);
   };

   // TODO: set valid type
   const cart = useSelector((state: any) => state.cart);
   const totalQuantity = (): number => {
      let total: number = 0;

      cart.forEach((item: any) => {
         total += item.quantity;
      });

      return total;
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
               <div className="hidden w-2/5 rounded-full bg-grey-100 p-3 lg:flex">
                  <Image
                     onClick={() => {}}
                     src={searchIcon}
                     alt="search"
                     width={20}
                     height={20}
                     className="ml-2 size-5 cursor-pointer opacity-40"
                  />
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
                     <Image
                        onClick={() => {}}
                        src={searchIcon}
                        alt="search"
                        width={30}
                        height={30}
                        className="size-5 xl:size-6"
                     />
                  </Link>

                  <Link href="/cart" title="Your Cart" className="relative">
                     {totalQuantity() > 0 && (
                        <span className="absolute -right-3 -top-3 z-40 flex size-6 items-center justify-center rounded-full bg-grey-100 font-bold shadow-md">
                           {totalQuantity()}
                        </span>
                     )}
                     <Image src={basketIcon} alt="basket" width={30} height={30} className="z-30 size-5 xl:size-6" />
                  </Link>

                  <Link href="/">
                     <Image src={accountIcon} alt="account" width={30} height={30} className="size-5 xl:size-6" />
                  </Link>
               </div>
            </Section>
         </header>
      </>
   );
};

export default Header;
