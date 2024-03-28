"use client";

import React, { FC, PropsWithChildren } from "react";
import { createTheme, ThemeProvider } from "@mui/material";

const theme = createTheme({
   palette: {
      primary: {
         main: "#000000",
      },
   },
});

const MaterialUIThemeProvider: FC<PropsWithChildren> = ({ children }): JSX.Element => {
   return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default MaterialUIThemeProvider;
