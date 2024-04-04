import { FC } from "react";
import Button from "@/components/layout/Button";

type TProps = {
   resetFilterOnClick: () => void;
};

const ResetFilters: FC<TProps> = ({ resetFilterOnClick }): JSX.Element => {
   return (
      <Button onClick={resetFilterOnClick} py="py-3" bgColor="dark" className="w-full">
         Reset Filter
      </Button>
   );
};

export default ResetFilters;
