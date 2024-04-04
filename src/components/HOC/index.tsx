import { FC, PropsWithChildren } from "react";
// HOC
import ReactQueryProvider from "@/components/HOC/ReactQueryProvider";
import ReduxProvider from "@/components/HOC/ReduxProvider";
import MaterialUIThemeProvider from "./MaterialUIThemeProvider";

const HOCProvider: FC<PropsWithChildren> = ({ children }): JSX.Element => {
   return (
      <ReduxProvider>
         <ReactQueryProvider>
            <MaterialUIThemeProvider>{children}</MaterialUIThemeProvider>
         </ReactQueryProvider>
      </ReduxProvider>
   );
};

export default HOCProvider;
