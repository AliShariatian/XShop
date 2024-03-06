import { FC } from "react";
// IMAGE
import { brands } from "@/utils/img";
// COMPONENT
import Image from "next/image";
import { Section } from "@/components";

const Brands: FC = (): JSX.Element => {
   return (
      <Section parentClass="h-32 bg-dark w-full" sectionClass="flex w-full h-full items-center justify-between">
         {brands.map((item) => (
            <div key={item.title}>
               <Image src={item.src} width={150} height={150} alt={item.title} title={item.title} className="h-9 opacity-95" />
            </div>
         ))}
      </Section>
   );
};

export default Brands;
