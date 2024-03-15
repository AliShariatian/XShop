import { FC } from "react";

// COMPONENT
import { Logo, Section } from "@/components";
import Subscribe from "./Subscribe";
import Link from "next/link";
import BelowFooter from "./BelowFooter";
import { company, faq, help, resources, social } from "./items";
import Image from "next/image";

const Footer: FC = (): JSX.Element => {
   return (
      <footer className="relative mt-56">
         <Subscribe className="absolute -top-40 left-1/2 w-full -translate-x-1/2 xl:-top-32" />
         <Section parentClassName="bg-grey-100 pt-52">
            <section className="flex">
               {/* Info */}
               <div className="w-1/3">
                  <div className="flex w-2/3 flex-col gap-5">
                     <Logo />
                     <p className="cursor-default text-base text-dark/60 transition-[color] hover:text-dark">
                        We have clothes that suits your style and which you’re proud to wear. From women to men.
                     </p>

                     {/* Socials */}
                     <div className="mt-5 flex gap-2">
                        {social.map((item) => (
                           <Link
                              href={item.href}
                              key={item.title}
                              target="_blank"
                              className="rounded-full border-2 bg-light p-2 transition-[filter] hover:invert"
                           >
                              <Image
                                 src={item.src}
                                 width={20}
                                 height={20}
                                 alt={item.title}
                                 title={item.title}
                                 className="size-4"
                              />
                           </Link>
                        ))}
                     </div>
                  </div>
               </div>

               {/* Links */}
               <div className="grid w-2/3 grid-cols-2 gap-20 *:flex *:flex-col *:gap-6 xl:grid-cols-4">
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

            <hr className="mb-6 mt-10 border border-dark/10" />

            <BelowFooter />
         </Section>
      </footer>
   );
};

export default Footer;
