import * as React from 'react';
import { memo, useState, useRef, useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import NavbarElement from './NavbarElement';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@emotion/react';
import { useNavigate, useLocation } from 'react-router-dom';
import '../styles/navbar.css';


function ResponsiveAppBar() {





 


  interface PalleteColor {
    light?: string;
    main: string;
    dark?: string;
    contrastText?: string;
  }

  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [navigate]);

  const theme = createTheme({
    palette: {
      primary: {
        // light: will be calculated from palette.primary.main,
        main: '#2d3549',
      },
      secondary: {
        light: '#0066ff',
        main: '#0044ff',
        // dark: will be calculated from palette.secondary.main,
        contrastText: '#ffcc00',
      },
    },
  });

  const titleStyle = {
    background: 'linear-gradient(to right, #20c997, #ff77ff)',
    backgroundClip: 'text',
    WebkitBackgroundClip: 'text',
    color: 'transparent',
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',

  }

  const [inititalRender, setInitialRender] = useState(true);

  return (
    <ThemeProvider theme={theme}>
      <AppBar position="static">
        <Container maxWidth="xl" sx={{
          paddingBottom: '0em',
        }}>
          <Toolbar disableGutters>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <Typography
                  variant="h5"
                  style={titleStyle}
                  noWrap
                  component="a"
                  href="/"
                  sx={{
                    mr: 2,
                    display: { xs: 'flex', md: 'flex' },
                    fontFamily: 'Titilium Web, sans-serif',
                    fontWeight: 700,
                    letterSpacing: '.3rem',
                    color: 'inherit',
                    textDecoration: 'none',
                    overflow: 'visible',
                  }}
                >
                  ECLAIR
                </Typography>
                <Box sx={{
                  flexGrow: 1,
                  paddingLeft: '2em',
                  display: { xs: 'block', md: 'flex' },
                  alignItems: 'flex-start',
                }}>
                  <div style={{ height: 'fit-content', width: 'fit-content' }}>
                    <NavbarElement text="HOME" highlighted={false} href="/" />
                  </div>
                  <div>
                    <NavbarElement text="ABOUT" highlighted={false} href="/about" />
                  </div>
                  <div>
                    <NavbarElement text="SPONSORS" highlighted={false} href="/sponsors" />
                  </div>
                  <div>
                    <NavbarElement text="WHAT WE DO" highlighted={false} href="/projects" />
                    
                  </div>

                  <div>
                    <NavbarElement text="CONTACT US" highlighted={false} href="/contact" />

                  </div>
                </Box>
              </div>



            </div>
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
}
export default memo(ResponsiveAppBar);