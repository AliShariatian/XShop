import { FC } from "react";
import { Section, Breadcrumb, BigHeading } from "@/components";

const CartComponents: FC = (): JSX.Element => {
   return (
      <Section>
         <div>
            <Breadcrumb />
            <BigHeading tag="h1" title="Your cart" className="text-left" />
         </div>

         <main></main>
      </Section>
   );
};

export default CartComponents;
