import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import Image from "next/image";
import { downArrowIcon } from "@/public/img";
import { FC } from "react";

type PropsType = {
   pages: string[];
};

const Breadcrumb: FC<PropsType> = ({ pages }): JSX.Element => {
   const separator = <Image src={downArrowIcon} height={9} width={9} alt="arrow" className="mx-2 size-[0.7rem] -rotate-90" />;

   return (
      <Breadcrumbs separator={separator} className="my-7">
         <Link underline="hover" href="/" title={"Home"} className="!text-dark">
            Home
         </Link>

         {pages.map((item) =>
            item === pages.at(-1) ? (
               <span key={item} className="cursor-default !text-dark">
                  {item}
               </span>
            ) : (
               <Link key={item} title={item} underline="hover" href="/" className="!text-dark">
                  {item}
               </Link>
            ),
         )}
      </Breadcrumbs>
   );
};

export default Breadcrumb;
