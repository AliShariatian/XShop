import { FC } from "react";
import Link from "next/link";
import { Button, Section } from "@/components";

const NotFound404Components: FC = (): JSX.Element => {
   return (
      <Section>
         <div className="my-11 flex w-full flex-col items-center justify-center gap-9 py-36">
            <div className="flex flex-col gap-5 *:text-center">
               <h4 className="text-6xl font-black capitalize">Oops 404!</h4>
               <span className="text-lg capitalize text-dark/70">
                  This page does not exist or you may have entered it incorrectly!
               </span>
            </div>

            <Link href="/products">
               <Button bgColor="dark">Return To Shopping</Button>
            </Link>
         </div>
      </Section>
   );
};

export default NotFound404Components;
