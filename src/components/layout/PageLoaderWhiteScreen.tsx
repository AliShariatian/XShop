import { FC } from "react";
import PulseLoader from "react-spinners/PulseLoader";

const PageLoaderWhiteScreen: FC = (): JSX.Element => {
   return (
      <div className="fixed left-0 top-0 z-[9999] flex h-full w-full items-center justify-center bg-grey-100">
         <PulseLoader size={12} margin={2} color="#656565" />
      </div>
   );
};

export default PageLoaderWhiteScreen;
