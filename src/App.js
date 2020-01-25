import React from 'react';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import HomePage from './views/HomePage';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#4977AC',
    },
    secondary: {
      main: '#4A4A4A',
    },
  },
  typography: {
    htmlFontSize: 10,
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <HomePage />
    </ThemeProvider>
  );
}

export default App;
