import { createTheme, responsiveFontSizes } from '@mui/material/styles';

let theme = createTheme({
  palette: {
    primary: {
      main: "#38BDF8",
    },
    secondary: {
      main: "#39FF14",
    },
    info: {
        main: "#10B981",
    }
  },
  typography: {
    fontFamily: "Helvetica Neue"
  }
});

theme = responsiveFontSizes(theme)

export default theme;