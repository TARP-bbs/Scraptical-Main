import { createTheme, Shadows } from "@mui/material";

export const scrapeTheme = createTheme({
  shadows: Array(25).fill("none") as Shadows,
  palette: {
    primary: {
      main: "#000000",
    },
    secondary: {
      main: "#6b705c",
    },
  },
  typography: {
    fontFamily: [
      "Josefin Sans",
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    button: {
      textTransform: "none",
      borderRadius: "0",
    },
  },
});
