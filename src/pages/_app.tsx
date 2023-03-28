import type { AppProps } from "next/app";
import "../style/global.css";
import "@fontsource/josefin-sans";

import { scrapeTheme } from "../../theme/scrapeTheme";
import { ThemeProvider } from "@mui/material";
import { RecoilRoot } from "recoil";

export default function App({ pageProps, Component }: AppProps) {
  return (
    <RecoilRoot>
      <ThemeProvider theme={scrapeTheme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </RecoilRoot>
  );
}
