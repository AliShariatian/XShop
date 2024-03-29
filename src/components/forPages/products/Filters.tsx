import { FC } from "react";
import { filter } from "@/public/img";
import Image from "next/image";

const Filters: FC = (): JSX.Element => {
   return (
      <div className="top-32 h-full w-1/4 rounded-20 border p-5 max-xl:hidden xl:sticky">
         {/* Title */}
         <div className="flex items-center justify-between">
            <h4 className="text-xl font-bold">Filters</h4>
            <Image src={filter} alt="filter" width={20} height={20} className="size-5" />
         </div>

         <hr className="my-5" />

         {/* TODO: add filtering options */}
      </div>
   );
};

export default Filters;
