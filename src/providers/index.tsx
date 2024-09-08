import { FC, PropsWithChildren } from "react";

import ReactQueryProvider from "@/providers/ReactQueryProvider";
import ReduxProvider from "@/providers/ReduxProvider";
import MaterialUIThemeProvider from "./MaterialUIThemeProvider";

const Providers: FC<PropsWithChildren> = ({ children }): JSX.Element => {
   return (
      <ReduxProvider>
         <ReactQueryProvider>
            <MaterialUIThemeProvider>{children}</MaterialUIThemeProvider>
         </ReactQueryProvider>
      </ReduxProvider>
   );
};

export default Providers;
