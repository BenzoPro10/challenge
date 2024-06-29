import { createTheme } from "@mui/material/styles";

const Theme = createTheme({
  palette: {
    primary: {
      main: "#5ACCCC",
      light: "#CFFAFA",
      dark: "#2B8B8B",
    },
    secondary: {
      main: "#335C6E",
    },
    error: {
      main: "#F76434",
    },
    warning: {
      main: "#FABD33",
    },
    info: {
      main: "#4AA088",
    },
    success: {
      main: "#53C2C2",
    },
    background: {
      default: "#FFFFFF",
      paper: "#FFE6DC",
    },
    text: {
      primary: "#335C6E",
      secondary: "#53C2C2",
    },
  },
});

export default Theme;
