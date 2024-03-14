import { FC } from "react";
import { main } from "@/public/img";
import Image from "next/image";
import { cn } from "@/utils";

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
   return (
      <div className={cn("flex items-center justify-start rounded-full bg-light px-10 py-4", className)}>
         {icon && <Image src={main} alt="main" width={30} height={30} className="size-5" />}

         <input
            value={value}
            onChange={onChange}
            type={type}
            maxLength={maxLength}
            placeholder={placeholder}
            className="ml-3 h-full w-full text-xl outline-none placeholder:text-lg"
         />
      </div>
   );
};

export default Input;
