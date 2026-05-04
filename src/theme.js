import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: { main: "#FF0000" },
    secondary: { main: "#FFD700" },
    background: {
      default: "#000000",
      paper: "#0a0a0a",
    },
    text: {
      primary: "#ffffff",
      secondary: "#9ca3af",
    },
  },
  typography: {
    fontFamily: "Inter, sans-serif",
  },
  shape: {
    borderRadius: 14,
  },
});

export default theme;