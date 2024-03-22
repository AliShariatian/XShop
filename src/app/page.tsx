import { FC } from "react";
// COMPONENT
import { HeroSection, Brands, Vitrine, Gallery, CustomersComment } from "@/components";

const HomePage: FC = (): JSX.Element => {
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
            buttonHref="/"
         />
         <hr className="container opacity-70" />
         <Vitrine
            id="top-selling"
            title="top selling"
            productShowCount={4}
            sortBy="saleCount"
            order="descending"
            buttonHref="/"
         />
         <Gallery />
         <CustomersComment />
      </>
   );
};

export default HomePage;
