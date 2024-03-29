import cn from "@/utils/cn";
import { FC } from "react";

type TProps = {
   className?: string;
};

const HorizontalLine: FC<TProps> = ({ className }): JSX.Element => {
   return <hr className={cn("mb-6 mt-16 border-dark/10", className)} />;
};

export default HorizontalLine;
