import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import { purple, green } from '@mui/material/colors';

let theme = createTheme({
  palette: {
    primary: {
      main: "#F1F5F9",
    },
    secondary: {
      main: "#22C55E",
    },
    info: {
        main: "#38BDF8"
    },
  },
  typography: {
    fontFamily: "Helvetica Neue"
  }
});

theme = responsiveFontSizes(theme)

export default theme;