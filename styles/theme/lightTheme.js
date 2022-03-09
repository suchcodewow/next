import { amber, deepPurple } from '@mui/material/colors';
import { createTheme, responsiveFontSizes } from '@mui/material/styles';

let lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: deepPurple,
    secondary: amber,
  },
});

lightTheme = responsiveFontSizes(lightTheme);
export default lightTheme;