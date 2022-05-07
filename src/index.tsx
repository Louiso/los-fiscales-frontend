import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import "index.css";
import Root from "routes";
import { ThemeProvider } from "@mui/material";
import theme from "config/theme";
import { SWRConfig } from "swr";

import { fetcher, serialize } from "app/fetchers";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <SWRConfig
          value={{
            // refreshInterval: 3000,
            provider: () => new Map(),
            fetcher,
            revalidateOnFocus: false,
            use: [serialize]
          }}
        >
          <Root />
        </SWRConfig>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
