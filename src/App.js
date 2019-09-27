import React from 'react';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Header from './Header';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#4977AC'
    },
    secondary: {
      main: '#4A4A4A'
    }
  }
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
    </ThemeProvider>
  );
}

export default App;
