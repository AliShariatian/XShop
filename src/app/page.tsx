import { FC } from "react";
// COMPONENT
import { HeroSection, Brands, NewArrivals } from "@/components";

const HomePage: FC = (): JSX.Element => {
   return (
      <>
         <HeroSection />
         <Brands />
         <NewArrivals />
      </>
   );
};

export default HomePage;
