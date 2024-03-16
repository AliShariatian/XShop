import { FC } from "react";
import Link from "next/link";

const Logo: FC = (): JSX.Element => {
   return (
      <Link href="/" className="-mt-2" title="XShop">
         <h1 className="font-integralCF text-3xl uppercase">xshop</h1>
      </Link>
   );
};

export default Logo;
