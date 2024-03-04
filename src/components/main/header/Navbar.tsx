"use client";

import { FC, useState } from "react";
// COMPONENT
import { TopNavbar } from "@/components";

const Navbar: FC = (): JSX.Element => {
   const [closeTopNavbar, setCloseTopNavbar] = useState(false);

   const closeTopNavbarHandler = () => {
      setCloseTopNavbar(true);
   };

   return (
      <header>
         <TopNavbar onClick={closeTopNavbarHandler} close={closeTopNavbar} />
      </header>
   );
};

export default Navbar;
