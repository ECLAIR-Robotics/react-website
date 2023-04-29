import React from 'react';
import Logo from '../static/images/logo/ECLAIR_logo2.png';
import '../styles/app.css';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@emotion/react';
import { padding } from '@mui/system';
import ECLAIRButton from '../components/ECLAIRButton';
import { Slide, Fade } from '@mui/material';
import YoutubeEmbed from '../components/YoutubeEmbed';
import { Grid, Box } from '@mui/material';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import polyHeader from '../static/vectors/polygon-header.svg';
import wavesHeader from '../static/vectors/waves-header.svg';
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

// const tween = KUTE.fromTo('#blob1', 
// { path: '#blob1' }, 
// { path: '#blob2' },
//  { repeat: 999, duration: 2000, yoyo: true });


function Homepage() {

  useEffect(() => {
    // tween.start();
  }, []);
  const handleClick = () => {
    navigate('/projects');
  }
  const navigate = useNavigate();
  return (

    <>

      <Grid sx={{
        display: { xs: 'flex', md: 'flex' },
        background: `url(${polyHeader})  right no-repeat`,
        backgroundSize: 'cover',
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
              padddingLeft: '5em',
              paddingRight: '5em',
            }}
            xs={12}
            md={12}
            xl={5}
          >
            <Fade in={true} timeout={2000}>
              <img className='left-img' src={Logo} alt='logo' />
            </Fade>
          </Grid>

          <Grid item className='header-right'
            xs={12}
            md={12}
            xl={7} >
            <Fade in={true} timeout={1000}>
              <Slide direction="left" in={true} mountOnEnter unmountOnExit>
                <h2 className='header-text'>Our mission is to drive innovation in AI and robotics at the undergraduate level.</h2>
              </Slide>
            </Fade>
            <Box sx={{

            }}>
              <ECLAIRButton handleClick={handleClick} text="PROJECTS" />
            </Box>
          </Grid>

        </ThemeProvider >
      </Grid >

      <section className='box2'
        style={{
          background: `url(${wavesHeader})  center center no-repeat `,
          backgroundSize: 'cover',
        }}
      >
        <div className="custom-shape-divider-top-1681028846">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" className="shape-fill"></path>
            <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" className="shape-fill"></path>
            <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" className="shape-fill"></path>
          </svg>
        </div>
        <div className="box2-left">
          <h3>The Engineering and Computational Learning of Artificial Intelligence in Robotics (ECLAIR)
            is a club at UT Austin dedicated to helping all robot-loving students to transform their passionate
            robotics ideas into reality. We provide the robotics parts and teach members state-of-the-art machine
            learning techiniques such as neural networks and reinforcement learning to give students the ability to
            pursue their robotics projects. If you have a cool robot you want to build, come join us!</h3>
        </div>
        <div className='box2-right'>
          <YoutubeEmbed />
        </div>
      </section>
    </>
  );
}

export default Homepage;
