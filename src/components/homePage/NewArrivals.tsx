import { FC } from "react";
// COMPONENT
import { Section, ProductCard, Button } from "@/components";

const NewArrivals: FC = (): JSX.Element => {
   return (
      <Section parentClassName="py-[5.62rem]" sectionClassName="flex flex-col items-center gap-16">
         <h2 className="font-integralCF text-5xl">NEW ARRIVALS</h2>

         <div className="grid grid-cols-1 gap-x-4 gap-y-14 xl:grid-cols-4">
            <ProductCard imgSrc="/img/products/image7.png" title="T-SHIRT WITH TAPE DETAILS" rate={3} price={660} discount={20} href="/" />
            <ProductCard imgSrc="/img/products/image7.png" title="T-SHIRT WITH TAPE DETAILS" rate={5} price={260} discount={0} href="/" />
            <ProductCard imgSrc="/img/products/image7.png" title="T-SHIRT WITH TAPE DETAILS" rate={3} price={260} discount={50} href="/" />
            <ProductCard imgSrc="/img/products/image7.png" title="T-SHIRT WITH TAPE DETAILS" rate={0} price={260} discount={100} href="/" />
         </div>

         <Button bgColor="white" borderColor="border-grey-100" py="py-3">
            View All
         </Button>
      </Section>
   );
};

export default NewArrivals;
