import { FC } from "react";
import { Section, Breadcrumb, AllProductsList, Filters } from "@/components";

const AllProductsPage: FC = (): JSX.Element => {
   return (
      <Section>
         <div>
            <Breadcrumb />
         </div>

         <div className="flex gap-5">
            <Filters />
            <AllProductsList />
         </div>
      </Section>
   );
};

export default AllProductsPage;
