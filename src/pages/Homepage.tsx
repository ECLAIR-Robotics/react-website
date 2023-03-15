import React from 'react';
import ResponsiveAppBar from '../components/ResponsiveAppBar';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import Logo from '../static/images/logo/ECLAIR_logo2.png';
import '../styles/app.css';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@emotion/react';
import { padding } from '@mui/system';
import ECLAIRButton from '../components/ECLAIRButton';
import { Slide, Fade } from '@mui/material';
import placeholder from '../static/images/placeholder.png';
import YoutubeEmbed from '../components/YoutubeEmbed';
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


function Homepage() {
  return (
    <div>
      <header className="App-header">
        <div className='box'>
          <ThemeProvider theme={theme}>
            <div className='header-left' >
              <img className='left-img' src={Logo} alt='logo' />
            </div>
            <div className='header-right' >
              <Fade in={true} timeout={1000}>
                <Slide direction="left" in={true} mountOnEnter unmountOnExit>
                  <h2 className='header-text'>Our mission is to drive innovation in AI and robotics at the undergraduate level.</h2>
                </Slide>
              </Fade>
              <ECLAIRButton text="PROJECTS" />
            </div>
          </ThemeProvider>
        </div>
      </header>

      <div className='box2'>
        <div className="box2-left">
          <h3>LoreIpsum is not placeholder text. This placeholder text is placeholder text more than placeholder text.</h3>
        </div>
        <div className='box2-right'>
          <YoutubeEmbed/>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
