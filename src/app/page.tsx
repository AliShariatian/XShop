import { FC } from "react";
// COMPONENT
import { HeroSection, Brands, Vitrine, Gallery, CustomersComment } from "@/components";

const HomePage: FC = (): JSX.Element => {
   return (
      <>
         <HeroSection />
         <Brands />
         <Vitrine title="new arrivals" sortBy="createdAt" order="descending" buttonHref="/" />
         <hr className="container opacity-70" />
         <Vitrine title="top selling" sortBy="saleCount" order="descending" buttonHref="/" />
         <Gallery />
         <CustomersComment />
      </>
   );
};

export default HomePage;
