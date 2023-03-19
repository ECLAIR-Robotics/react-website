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
import { Grid, Box } from '@mui/material';
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

      <Grid item sx={{
        display: { xs: 'block', md: 'flex' },
        backgroundColor: '#1f2532',
        minWidth: '100%',
        paddingTop: '10em',
        paddingBottom: '10em',
      }}
        container
        maxWidth='lg'
        justifyContent={'center'}
        direction={'row'}
        justifyItems={'center'}
      >
        <ThemeProvider theme={theme}>

          <Grid item
            sx={{
              paddingTop: '5em',
            }}
            xs = {12}
            md = {12}
            xl = {3}
          >
            <img className='left-img' src={Logo} alt='logo' />
          </Grid>

          <Grid item className='header-right'
           xs = {12}
           md = {12}
           xl = {9} >
            <Fade in={true} timeout={1000}>
              <Slide direction="left" in={true} mountOnEnter unmountOnExit>
                <h2 className='header-text'>Our mission is to drive innovation in AI and robotics at the undergraduate level.</h2>
              </Slide>
            </Fade>
            <Box  sx = {{
              
            }}>
              <ECLAIRButton text="PROJECTS" />
            </Box>
          </Grid>

        </ThemeProvider>
      </Grid>


      <div className='box2'>

        <div className="box2-left">
          <div className='small-line-thingy'></div>
          <h3>The Engineering and Computational Learning of Artificial Intelligence in Robotics (ECLAIR)
            is a club at UT Austin dedicated to helping all robot-loving students to transform their passionate
            robotics ideas into reality. We provide the robotics parts and teach members state-of-the-art machine
            learning techiniques such as neural networks and reinforcement learning to give students the ability to
            pursue their robotics projects. If you have a cool robot you want to build, come join us!</h3>
        </div>
        <div className='box2-right'>
          <YoutubeEmbed />
        </div>
      </div>
    </div>
  );
}

export default Homepage;
