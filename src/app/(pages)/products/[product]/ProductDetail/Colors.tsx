import { singleVerified } from "@/public/img";
import Image from "next/image";
import { FC } from "react";

type PropsType = {
   colors: string[];
};

const Colors: FC<PropsType> = ({ colors }): JSX.Element => {
   return (
      <div>
         <span>Select Colors</span>

         <div className="mt-2 flex gap-3">
            {colors.map((item) => (
               <button
                  key={item}
                  style={{ backgroundColor: item }}
                  className="flex size-10 items-center justify-center rounded-full border border-dark/50"
               >
                  <Image src={singleVerified} alt="Selected" width={10} height={10} className="size-4" />
               </button>
            ))}
         </div>
      </div>
   );
};

export default Colors;
