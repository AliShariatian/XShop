// IMAGE
import { bannerImg, starIcon } from "@/public/img";
// COMPONENT
import Image from "next/image";
import { Section, Button, BigHeading } from "@/components";
import Link from "next/link";

const HeroSection = () => {
   return (
      <Section parentClassName="bg-grey-50 relative" sectionClassName="flex h-auto flex-col xl:flex-row">
         {/* LEFT */}
         <div className="mt-9 flex flex-col items-start gap-6 xl:w-1/2">
            <BigHeading tag="h2" title="FIND CLOTHES THAT MATCHES YOUR STYLE" className="text-left text-4xl xl:text-7xl" />

            <p className="max-xl:leading-5 xl:w-11/12">
               Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and
               cater to your sense of style.
            </p>
            <Link href="products">
               <Button bgColor="dark" className="max-xl:w-full">
                  Shop New
               </Button>
            </Link>

            <div className="mb-16 mt-9 grid grid-cols-2 gap-3 *:grid *:gap-1 max-xl:mx-auto max-xl:text-center xl:flex xl:grid-cols-3 xl:gap-5 xl:*:px-6">
               <div className="max-xl:border-r max-xl:pr-5 xl:!pl-0">
                  <span className="text-2xl font-extrabold xl:text-4xl xl:font-bold">200+</span>
                  <span className="max-xl:text-xs">International Brands</span>
               </div>
               <div className="xl:border-x">
                  <span className="text-2xl font-extrabold xl:text-4xl xl:font-bold">2,000+</span>
                  <span className="max-xl:text-xs">High-Quality Products</span>
               </div>
               <div className="max-xl:col-span-2 max-xl:justify-center">
                  <span className="text-2xl font-extrabold xl:text-4xl xl:font-bold">30,000+</span>
                  <span className="max-xl:text-xs">Happy Customers</span>
               </div>
            </div>
         </div>

         {/* RIGHT */}
         <div className="relative flex justify-end max-xl:-mt-10 xl:w-1/2">
            {/* BANNER */}
            <Image
               src={bannerImg}
               alt="Banner"
               width={999}
               height={999}
               draggable={false}
               className="bottom-0 xl:absolute xl:size-[37.5rem]"
            />

            {/* STAR ICON */}
            <Image
               src={starIcon}
               alt="star"
               width={100}
               height={100}
               draggable={false}
               className="absolute top-7 aspect-square max-xl:right-4 max-xl:size-16 xl:top-24"
            />
            <Image
               src={starIcon}
               alt="star"
               width={50}
               height={50}
               draggable={false}
               className="absolute left-6 top-28 aspect-square max-xl:size-9 xl:left-20 xl:top-72"
            />
         </div>
      </Section>
   );
};

export default HeroSection;
