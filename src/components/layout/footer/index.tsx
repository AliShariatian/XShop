import { FC } from "react";
import { company, faq, help, resources, social } from "./items";

// COMPONENT
import { HorizontalLine, Logo, Section, Social } from "@/components";
import BelowFooter from "./BelowFooter";
import Subscribe from "./Subscribe";
import Image from "next/image";
import Link from "next/link";

const Footer: FC = (): JSX.Element => {
   return (
      <footer className="relative mt-56">
         <Subscribe className="absolute -top-40 left-1/2 w-full -translate-x-1/2 xl:-top-32" />
         <Section parentClassName="bg-grey-100 pt-52">
            <section className="flex max-xl:flex-col">
               {/* Info */}
               <div className="xl:w-1/3">
                  <div className="flex flex-col gap-5 xl:w-2/3">
                     <Logo />
                     <p className="cursor-default text-base text-dark/60 transition-[color] hover:text-dark">
                        We have clothes that suits your style and which you’re proud to wear. From women to men.
                     </p>

                     <Social />
                  </div>
               </div>

               {/* Links */}
               <div className="grid grid-cols-2 gap-y-9 *:flex *:flex-col *:gap-6 max-xl:mt-9 max-xl:*:gap-4 xl:w-2/3 xl:grid-cols-4 xl:gap-20">
                  <div>
                     <span className="font-bold uppercase tracking-widest">company</span>
                     <ul className="flex flex-col gap-4 text-dark/60 *:w-fit *:transition-[color] hover:*:text-dark">
                        {company.map((item) => (
                           <li key={item.label}>
                              <Link href={item.href}>{item.label}</Link>
                           </li>
                        ))}
                     </ul>
                  </div>
                  <div>
                     <span className="font-bold uppercase tracking-widest">help</span>
                     <ul className="flex flex-col gap-4 text-dark/60 *:w-fit *:transition-[color] hover:*:text-dark">
                        {help.map((item) => (
                           <li key={item.label}>
                              <Link href={item.href}>{item.label}</Link>
                           </li>
                        ))}
                     </ul>
                  </div>
                  <div>
                     <span className="font-bold uppercase tracking-widest">faq</span>
                     <ul className="flex flex-col gap-4 text-dark/60 *:w-fit *:transition-[color] hover:*:text-dark">
                        {faq.map((item) => (
                           <li key={item.label}>
                              <Link href={item.href}>{item.label}</Link>
                           </li>
                        ))}
                     </ul>
                  </div>
                  <div>
                     <span className="font-bold uppercase tracking-widest">resources</span>
                     <ul className="flex flex-col gap-4 text-dark/60 *:w-fit *:transition-[color] hover:*:text-dark">
                        {resources.map((item) => (
                           <li key={item.label}>
                              <Link href={item.href}>{item.label}</Link>
                           </li>
                        ))}
                     </ul>
                  </div>
               </div>
            </section>

            <HorizontalLine />

            <BelowFooter />
         </Section>
      </footer>
   );
};

export default Footer;
