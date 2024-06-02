"use client";

import { FC, PropsWithChildren } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
// import { ReactQueryDevtools } from "react-query/devtools";

const ReactQueryProvider: FC<PropsWithChildren> = ({ children }): JSX.Element => {
   const client = new QueryClient();

   return (
      <QueryClientProvider client={client}>
         {children}
         {/* <ReactQueryDevtools /> */}
      </QueryClientProvider>
   );
};

export default ReactQueryProvider;
