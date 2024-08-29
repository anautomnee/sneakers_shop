import { createTheme, ThemeProvider } from "@mui/material";
import { MainRoute } from "./routes";

const theme = createTheme({
  typography: {
    fontFamily: '"Montserrat", system- ui',
    footer: {
      palette: {
        primary: "#FFFFFF80",
        header: "#FFFFFF"
      }
    }
  },
});

function App() {

  return <ThemeProvider theme={theme}>
    <MainRoute />
  </ThemeProvider>;
}

export default App;
