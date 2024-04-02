"use client";

import { FC, memo } from "react";
import { useSelector } from "react-redux";
import { basketIcon } from "@/public/img";
import { TRootState } from "@/services/redux/store";
import calculateCartSummary from "@/utils/calculateCartSummary";
// COMPONENT
import Link from "next/link";
import Image from "next/image";
import Badge from "@mui/material/Badge";

const Basket: FC = (): JSX.Element => {
   const cart = useSelector((state: TRootState) => state.cart);
   const { totalQuantity } = calculateCartSummary(cart);

   return (
      <Link href="/cart" title="Your Cart">
         <Badge color="success" badgeContent={totalQuantity}>
            <Image src={basketIcon} alt="basket" width={30} height={30} className="z-30 size-5 xl:size-6" />
         </Badge>
      </Link>
   );
};

export default memo(Basket);
