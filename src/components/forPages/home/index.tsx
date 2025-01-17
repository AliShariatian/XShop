import { FC } from "react";
import { HeroSection, Brands, Vitrine, Gallery, CustomersComment } from "@/components";

const HomeComponents: FC = (): JSX.Element => {
   return (
      <>
         <HeroSection />
         <Brands />
         <Vitrine
            id="new-arrivals"
            title="new arrivals"
            productShowCount={4}
            sortBy="createdAt"
            order="descending"
            buttonHref="/products"
         />
         <hr className="container opacity-70" />
         <Vitrine
            id="top-selling"
            title="top selling"
            productShowCount={4}
            sortBy="saleCount"
            order="descending"
            buttonHref="/products"
         />
         <Gallery />
         <CustomersComment />
      </>
   );
};

export default HomeComponents;
