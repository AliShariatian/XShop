"use client";

import { FC } from "react";
import { useSelector } from "react-redux";
import { basketIcon } from "@/public/img";
import Link from "next/link";
import Image from "next/image";
import Badge from "@mui/material/Badge";

const Basket: FC = (): JSX.Element => {
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
      <Link href="/cart" title="Your Cart">
         <Badge color="success" badgeContent={totalQuantity()}>
            <Image src={basketIcon} alt="basket" width={30} height={30} className="z-30 size-5 xl:size-6" />
         </Badge>
      </Link>
   );
};

export default Basket;
