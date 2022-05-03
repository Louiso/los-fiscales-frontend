import { createTheme } from "@mui/material";

const primary = {
  50: "#fae8e7",
  100: "#f2c7c4",
  200: "#eaa19c",
  300: "#e17b74",
  400: "#da5f57",
  500: "#d44339",
  600: "#cf3d33",
  700: "#c9342c",
  800: "#c32c24",
  900: "#b91e17",
  A100: "#ffedec",
  A200: "#ffbbb9",
  A400: "#ff8a86",
  A700: "#ff716d",
  darkText: [50, 100, 200, 300, 400, "A100", "A200", "A400", "A700"]
};

const secondary = {
  50: "#fefdfa",
  100: "#fef9f3",
  200: "#fdf5eb",
  300: "#fcf1e3",
  400: "#fbeedd",
  500: "#faebd7",
  600: "#f9e9d3",
  700: "#f9e5cd",
  800: "#f8e2c7",
  900: "#f6ddbe",
  A100: "#ffffff",
  A200: "#ffffff",
  A400: "#ffffff",
  A700: "#ffffff",
  darkText: [
    50,
    100,
    200,
    300,
    400,
    500,
    600,
    700,
    800,
    900,
    "A100",
    "A200",
    "A400",
    "A700"
  ]
};

const theme = createTheme({
  palette: {
    primary: {
      main: primary[500]
    },
    secondary: {
      main: secondary[500]
    }
  }
});

export default theme;
