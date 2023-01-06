import { createTheme } from "@mui/material/styles";
import { blue, grey } from "@mui/material/colors";

const theme = createTheme({
  direction: "rtl",
  typography: {
    h1: { fontSize: "56px" },
    h2: { fontSize: "24px" },
    h3: { fontSize: "20px" },
    h4: { fontSize: "18px" },
    h5: { fontSize: "16px" },
    h6: { fontSize: "14px" },
  },
  palette: {
    primary: {
      main: "#1F7CFF",
    },
    secondary: {
      main: "#ff6666",
    },
    background: {
      default: grey[100],
    },
  },
});

export default theme;
