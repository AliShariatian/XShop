"use client";

import { FC, memo } from "react";
import cn from "@/utils/cn";

type PropsType = {
   children: React.ReactNode;
   className?: string;
   borderColor?: "border-grey-50" | "border-grey-100";
   bgColor?: "dark" | "white" | "grey";
   type?: "button" | "submit" | "reset";
   py?: "py-4" | "py-3" | "py-2";
   disable?: boolean;
   onClick?: (ev: React.MouseEvent<HTMLElement>) => void;
};

const Button: FC<PropsType> = ({
   children,
   className,
   borderColor,
   disable = false,
   onClick,
   type = "button",
   bgColor = "grey",
   py = "py-4",
}): JSX.Element => {
   return (
      <button
         onClick={onClick}
         type={type}
         className={` 
            ${bgColor === "dark" && "bg-dark text-light hover:bg-gray-900"} 
            ${bgColor === "white" && "bg-light text-dark hover:bg-gray-100"} 
            ${bgColor === "grey" && "bg-grey-50 text-dark hover:bg-gray-100"} 
            ${borderColor && `border ${borderColor}`} 
            ${py && py} 
            ${disable ? "cursor-not-allowed opacity-80" : ""}
            ${cn("rounded-full px-16 text-lg font-medium transition-all", className)}`}
      >
         {children}
      </button>
   );
};

export default memo(Button);
