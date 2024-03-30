import { FC } from "react";
import { closeIcon } from "@/public/img";
import { Button } from "@/components";
import Image from "next/image";
import cn from "@/utils/cn";

type TProps = {
   onClick: () => void;
   className?: string;
};

const CloseButton: FC<TProps> = ({ onClick, className }): JSX.Element => {
   return (
      <Button onClick={onClick} bgColor="white" className={cn("!p-0 xl:hidden", className)}>
         <Image src={closeIcon} alt="close" width={20} height={20} className="size-3 invert" />
      </Button>
   );
};

export default CloseButton;
