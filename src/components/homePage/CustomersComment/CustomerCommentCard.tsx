import { FC } from "react";
import { dataType } from "./data";
import { verified } from "@/public/img";
// COMPONENT
import Image from "next/image";
import { StarRate } from "@/components";

const CustomerCommentCard: FC<dataType> = ({ name, content, rate }): JSX.Element => {
   return (
      <div className="rounded-20 flex h-full flex-col gap-2 border p-9">
         <StarRate rate={rate} showEmptyStar={false} showRateNumber={false} className="gap-2" />

         <div className="flex gap-2">
            <span className="text-xl font-bold">{name}</span>
            <Image src={verified} alt="verified" width={20} height={20} />
         </div>

         <p>&quot;{content}”</p>
      </div>
   );
};

export default CustomerCommentCard;
