import { createTheme } from "@mui/material/styles";
import { blue, grey } from "@mui/material/colors";

const theme = createTheme({
  direction: "rtl",
  typography: {
    h1: { fontSize: "56px" },
    h2: { fontSize: "38px" },
    h3: { fontSize: "28px" },
    h4: { fontSize: "24px" },
    h5: { fontSize: "20px" },
    h6: { fontSize: "14px" },
    subtitle1: { fontSize: "18px" },
    subtitle2: { fontSize: "16px" },
  },
  palette: {
    primary: {
      main: "#1F7CFF",
    },
    secondary: {
      main: "#ff6666",
    },
    background: {
      default: grey[400],
      paper: grey[300],
    },
  },
});

export default theme;
