"use client";

import { FC, PropsWithChildren } from "react";
import { Provider } from "react-redux";
import store from "@/services/redux/store";

const ReduxProvider: FC<PropsWithChildren> = ({ children }): JSX.Element => {
   return <Provider store={store}>{children}</Provider>;
};

export default ReduxProvider;
