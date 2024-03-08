import { FC } from "react";
// COMPONENT
import { HeroSection, Brands, Vitrine } from "@/components";

const HomePage: FC = (): JSX.Element => {
   return (
      <>
         <HeroSection />
         <Brands />
         <Vitrine title="NEW ARRIVALS" sortBy="createdAt" order="descending" buttonHref="/" />
         <hr className="container opacity-70" />
         <Vitrine title="top selling" sortBy="saleCount" order="descending" buttonHref="/" />
      </>
   );
};

export default HomePage;
