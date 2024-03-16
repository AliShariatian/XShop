"use client";

import { FC, useRef } from "react";
import { mail } from "@/public/img";
import cn from "@/utils/cn";
import Image from "next/image";

type PropsType = {
   value: string;
   placeholder: string;
   type: "email" | "text";
   onChange: (ev: React.ChangeEvent<HTMLInputElement>) => void;
   icon?: boolean;
   maxLength?: number;
   className?: string;
};

const Input: FC<PropsType> = ({ icon, placeholder, onChange, value, type, maxLength = 20, className }): JSX.Element => {
   const inputRef = useRef<HTMLInputElement>(null);

   return (
      <div
         onClick={() => inputRef.current?.focus()}
         className={cn("flex items-center justify-start rounded-full bg-light px-10 py-4", className)}
      >
         {icon && <Image src={mail} alt="main" width={30} height={30} className="mt-[2px] size-5" />}

         <input
            ref={inputRef}
            onChange={onChange}
            type={type}
            value={value}
            maxLength={maxLength}
            placeholder={placeholder}
            className="ml-3 h-full w-full text-xl outline-none placeholder:text-lg"
         />
      </div>
   );
};

export default Input;
