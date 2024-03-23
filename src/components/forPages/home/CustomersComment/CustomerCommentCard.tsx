import { FC } from "react";
import { dataType } from "./data";
import { verified } from "@/public/img";
// COMPONENT
import Image from "next/image";
import { StarRate } from "@/components";

const CustomerCommentCard: FC<dataType> = ({ name, content, rate }): JSX.Element => {
   return (
      <div className="flex h-full flex-col gap-4 rounded-20 border px-7 py-5">
         <StarRate rate={rate} showEmptyStar={false} showRateNumber={false} className="gap-1" />

         <div className="flex flex-col gap-1">
            <div className="flex gap-2">
               <span className="text-lg font-bold xl:text-xl">{name}</span>
               <Image src={verified} alt="verified" width={20} height={20} />
            </div>

            <p className="max-xl:text-base">&quot;{content}”</p>
         </div>
      </div>
   );
};

export default CustomerCommentCard;
