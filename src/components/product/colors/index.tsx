import { FC, memo } from "react";
import cn from "@/utils/cn";
import { singleVerified } from "@/public/img";
import Image from "next/image";

type PropsType = {
   colors: string[];
   state: string;
   setState: (item: string) => void;
   className?: string;
   sizeMini?: boolean;
};

const Colors: FC<PropsType> = ({ colors, className, sizeMini, state, setState }): JSX.Element => {
   return (
      <div className={cn("mt-2 flex flex-wrap gap-3", className)}>
         {colors.map((item) => (
            <button
               key={item}
               onClick={() => setState(item)}
               style={{ backgroundColor: item }}
               className={`${sizeMini ? "size-8" : "size-10"} flex items-center justify-center rounded-full border border-dark/50`}
            >
               {state === item && (
                  <Image
                     src={singleVerified}
                     alt="Selected"
                     width={10}
                     height={10}
                     className={`${sizeMini ? "size-4" : "size-5"} drop-shadow-[0px_0px_2px_rgba(0,0,0,0.7)]`}
                  />
               )}
            </button>
         ))}
      </div>
   );
};

export default memo(Colors);
