import * as React from "react";
import { CacheProvider, type EmotionCache } from "@emotion/react";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";

const theme = createTheme({
  // put your theme options here if you have any
});

export function MuiProvider({
  cache,
  children,
}: {
  cache: EmotionCache;
  children: React.ReactNode;
}) {
  return (
    <CacheProvider value={cache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </CacheProvider>
  );
}
