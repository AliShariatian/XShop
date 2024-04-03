import { FC, memo } from "react";
import cn from "@/utils/cn";
import { singleVerified } from "@/public/img";
import Image from "next/image";

type TProps = {
   colors: string[];
   selectedColor: string;
   setSelectedColor: (item: string) => void;
   className?: string;
   sizeMini?: boolean;
};

const Colors: FC<TProps> = ({ colors, className, sizeMini, selectedColor, setSelectedColor }): JSX.Element => {
   return (
      <div className={cn("mt-2 flex flex-wrap gap-3", className)}>
         {colors.map((item) => (
            <button
               key={item}
               title={item}
               onClick={() => setSelectedColor(item)}
               style={{
                  background:
                     item === "Multi Color" ? "-webkit-linear-gradient(left,  #ff00ff, #00ff00)" : item.replaceAll(" ", ""),
               }}
               className={`${sizeMini ? "size-8" : "size-10"} flex items-center justify-center rounded-full border border-dark/50`}
            >
               {selectedColor === item && (
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
