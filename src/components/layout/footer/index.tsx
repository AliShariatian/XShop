import { FC } from "react";

// COMPONENT
import BelowFooter from "./BelowFooter";
import { Section } from "@/components";

const Footer: FC = (): JSX.Element => {
   return (
      <Section>
         Footer
         <BelowFooter />
      </Section>
   );
};

export default Footer;
