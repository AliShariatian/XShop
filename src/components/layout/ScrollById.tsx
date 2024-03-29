import { FC } from "react";

type TProps = {
   id: string;
   className?: string;
};
import cn from "@/utils/cn";

const ScrollById: FC<TProps> = ({ id, className }): JSX.Element => {
   return <div id={id} className={cn("absolute -mt-32", className)} />;
};

export default ScrollById;
