import { FC } from "react";
import { navMenuItems } from "./navMenuItems";
import { CloseButton, Social } from "@/components";
import Link from "next/link";
import Logo from "../Logo";

type TProps = {
   onClose: () => void;
   isClose: boolean;
};

const MobileNavMenu: FC<TProps> = ({ onClose, isClose }): JSX.Element => {
   return (
      <div
         className={`${isClose ? "right-full" : "right-0"} fixed top-0 z-[999] flex h-full w-full flex-col justify-between bg-light shadow transition-[right] duration-300`}
      >
         <CloseButton onClick={onClose} className="absolute right-9 top-9" />

         <nav className="p-14 xl:hidden">
            <ul className="flex flex-col gap-5 text-xl font-bold">
               {navMenuItems.map(({ href, label }) => (
                  <li key={label} onClick={onClose}>
                     <Link href={href}>{label}</Link>
                  </li>
               ))}
            </ul>
         </nav>

         <div onClick={onClose} className="mb-12 flex w-full flex-col items-center justify-center gap-4">
            <Logo />
            <Social />
         </div>
      </div>
   );
};

export default MobileNavMenu;
