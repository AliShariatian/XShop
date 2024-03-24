import { FC } from "react";
import dynamic from "next/dynamic";
import { PageLoaderWhiteScreen } from "@/components";
const HomeComponents = dynamic(() => import("@/components/forPages/home"), {
   loading: () => <PageLoaderWhiteScreen />,
});

const HomePage: FC = (): JSX.Element => {
   return <HomeComponents />;
};

export default HomePage;
