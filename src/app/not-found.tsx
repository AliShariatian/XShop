import { FC } from "react";
import dynamic from "next/dynamic";

import { PageLoaderWhiteScreen } from "@/components";
const NotFound404Components = dynamic(() => import("@/components/forPages/not-found"), {
   loading: () => <PageLoaderWhiteScreen />,
});

const NotFound404Page: FC = (): JSX.Element => {
   return <NotFound404Components />;
};

export default NotFound404Page;
