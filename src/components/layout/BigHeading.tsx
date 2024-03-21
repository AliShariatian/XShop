import { FC } from "react";
import cn from "@/utils/cn";

type propsType = {
   title: string;
   className?: string;
   tag: "h2" | "h3" | "h4";
};

const BigHeading: FC<propsType> = ({ title, className, tag: TagType }): JSX.Element => {
   return (
      <TagType className={cn("text-center font-integralCF text-3xl max-xl:leading-8 xl:text-5xl", className)}>{title}</TagType>
   );
};

export default BigHeading;