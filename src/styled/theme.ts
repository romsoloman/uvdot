import { createTheme } from "@mui/material/styles";
import { blue, grey } from "@mui/material/colors";

const theme = createTheme({
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
