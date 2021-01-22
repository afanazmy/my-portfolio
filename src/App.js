import React, { useState, useEffect } from "react";
import useDarkMode from "use-dark-mode";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import { ConfigProvider } from "antd";

import { themes } from "./theme/themes";

import Home from "./containers/Home/Home";

const GlobalStyle = createGlobalStyle`
  html {
    scrollbar-face-color: #646464;
    scrollbar-base-color: #646464;
    scrollbar-3dlight-color: #646464;
    scrollbar-highlight-color: #646464;
    scrollbar-track-color: rgba(0, 0, 0, 0.432);
    scrollbar-arrow-color: rgba(0, 0, 0, 0.432);
    scrollbar-shadow-color: #646464;
  }

  ::-webkit-scrollbar {
    width: 6px;
    height: 3px;
  }
  ::-webkit-scrollbar-button {
    background-color: #666;
  }
  ::-webkit-scrollbar-track {
    background-color: #646464;
  }
  ::-webkit-scrollbar-track-piece {
    background-color: rgba(0, 0, 0, 0.24);
  }
  ::-webkit-scrollbar-thumb {
    height: 50px;
    background-color: #666;
    border-radius: 3px;
  }
  ::-webkit-scrollbar-corner {
    background-color: #646464;
  }
  ::-webkit-resizer {
    background-color: #666;
  }

  body {
    background-color: ${({ colors }) => colors.background};
  }
`;

function App() {
  const [isMounted, setIsMounted] = useState(false);
  const { value, enable, disable } = useDarkMode(false, { storageKey: null });
  const theme = value ? "dark" : "light";

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const body = (
    <>
      <GlobalStyle colors={themes[theme]["colors"]} />
      <ThemeProvider theme={themes[theme]}>
        <ConfigProvider>
          <Home enableDarkTheme={enable} disableDarkTheme={disable} />
        </ConfigProvider>
      </ThemeProvider>
    </>
  );

  // prevents ssr flash for mismatched dark mode
  return !isMounted ? <div style={{ visibility: "hidden" }}>{body}</div> : body;
}

export default App;
