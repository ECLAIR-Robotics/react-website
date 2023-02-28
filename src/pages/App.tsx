import React from 'react';
import ResponsiveAppBar from '../components/ResponsiveAppBar';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import Logo from '../static/images/logo/ECLAIR_logo2.png';
import '../styles/app.css';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@emotion/react';

// TODO : look up typography and popovers in the material-ui docs
// TODO : look up how to use the material-ui theme
// Copy the current eclair website and then make it responsive like Apple's website
interface PalleteColor {
  light?: string;
  main: string;
  dark?: string;
  contrastText?: string;
}

const theme = createTheme({
  palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
      main: '#ffffff',
    },
    secondary: {
      light: '#0066ff',
      main: '#0044ff',
      // dark: will be calculated from palette.secondary.main,
      contrastText: '#ffcc00',
    },
  },
});


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ResponsiveAppBar />
        <div className='box'>
          <ThemeProvider theme={theme}>
          <div className='header-left' >
            <img className='left-img' src={Logo} alt='logo' />
          </div>
          <div className='header-right' >
            <h2 className='header-text'>Our mission is to drive innovation in AI and robotics at the undergraduate level.</h2>
            <Button className='right-btn'>Projects</Button>
          </div>
          </ThemeProvider>
        </div>
      </header>
    </div>
  );
}

export default App;
