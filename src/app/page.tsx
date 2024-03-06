import { FC } from "react";
// COMPONENT
import { HeroSection, Brands } from "@/components";

const HomePage: FC = (): JSX.Element => {
   return (
      <>
         <HeroSection />
         <Brands />
      </>
   );
};

export default HomePage;
