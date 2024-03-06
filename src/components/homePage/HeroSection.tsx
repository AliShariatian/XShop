import bannerImg from "../../../public/img/banner/hero.png";
// COMPONENT
import Image from "next/image";
import { Section, Button } from "@/components";

const HeroSection = () => {
   return (
      <Section parentClass="bg-grey-50" sectionClass="flex">
         {/* LEFT */}
         <div className="mt-9 flex w-1/2 flex-col items-start gap-6">
            <h2 className="font-integralCF text-7xl">FIND CLOTHES THAT MATCHES YOUR STYLE</h2>
            <p className="w-11/12">
               Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.
            </p>
            <Button bgColor="dark">Shop New</Button>

            <div className="mt-9 flex *:flex *:flex-col *:gap-1 *:px-5">
               <div>
                  <span className="text-4xl font-bold">200+</span>
                  <span>International Brands</span>
               </div>
               <div className="border-x">
                  <span className="text-4xl font-bold">2,000+</span>
                  <span>High-Quality Products</span>
               </div>
               <div>
                  <span className="text-4xl font-bold">30,000+</span>
                  <span>Happy Customers</span>
               </div>
            </div>
         </div>

         {/* RIGHT */}
         <div className="flex w-1/2 justify-end">
            <Image src={bannerImg} alt="Banner" width={700} height={600} quality={100} className="aspect-square" />
         </div>
      </Section>
   );
};

export default HeroSection;
