import { FC } from "react";
import NextTopLoader from "nextjs-toploader";

const PageLoadingProgressBar: FC = (): JSX.Element => {
   return <NextTopLoader color="#4b5563" shadow={false} height={3} showSpinner={false} />;
};

export default PageLoadingProgressBar;
