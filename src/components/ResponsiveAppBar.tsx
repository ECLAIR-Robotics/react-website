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
import { initializeApp } from 'firebase/app';

function ResponsiveAppBar() {

  const location = useLocation();

  // TODO create another dropdown style menu for mobile users

  const homeLinkRef = useRef<HTMLDivElement>(null);
  const aboutLinkRef = useRef<HTMLDivElement>(null);
  const sponsorsLinkRef = useRef<HTMLDivElement>(null);
  const projectsLinkRef = useRef<HTMLDivElement>(null);
  const contactLinkRef = useRef<HTMLDivElement>(null);
  const spanRef = useRef<HTMLDivElement>(null);

  // hardcoded value for the span position
  const SPAN_POS = 532.765625;
  const SPAN_TOP = 57;
  const HOME_POS = 167;
  const ABOUT_POS = 260;
  const SPONSORS_POS = 359;
  const PROJECTS_POS = 496;
  const CONTACT_POS = 651;
  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty('--span-position-top', `${SPAN_TOP}px`);
    console.log(spanRef.current?.getBoundingClientRect().left);
    const currentPath = location.pathname;
    if ( currentPath === '/') {

      navbarGoHome();
    } else if ( currentPath === '/about') {
      navbarGoAbout();
    } else if ( currentPath === '/sponsors') {
      navbarGoSponsors();
    } else if ( currentPath === '/projects') {
      navbarGoProjects();
    } else if ( currentPath === '/contact') {
      navbarGoContact();
    }
    setInitialRender(false);
  }, [])


  const navbarGoHome = () => {
    const root = document.documentElement;
    const homeLink = homeLinkRef.current?.getBoundingClientRect();
    const span = spanRef.current?.getBoundingClientRect();
    if (homeLink && span) {
      const pos = homeLink.left - SPAN_POS;
      const width = homeLink?.width;
      root.style.setProperty('--span-position', `${HOME_POS}px`);
      root.style.setProperty('--span-width', `${width}px`);
    }
  }

  const navbarGoAbout = () => {
    const root = document.documentElement;
    const aboutLink = aboutLinkRef.current?.getBoundingClientRect();
    const span = spanRef.current?.getBoundingClientRect();
    if (aboutLink && span) {
      const pos = aboutLink.left - SPAN_POS;
      const width = aboutLink?.width;
      root.style.setProperty('--span-position', `${ABOUT_POS}px`);
      root.style.setProperty('--span-width', `${width}px`);
    }
  }

  const navbarGoSponsors = () => {
    const root = document.documentElement;
    const sponsorsLink = sponsorsLinkRef.current?.getBoundingClientRect();
    const span = spanRef.current?.getBoundingClientRect();
    if (sponsorsLink && span) {
      const width = sponsorsLink?.width;
      root.style.setProperty('--span-position', `${SPONSORS_POS}px`);
      root.style.setProperty('--span-width', `${width}px`);
    }
  }

  const navbarGoProjects = () => {
    const root = document.documentElement;
    const projectsLink = projectsLinkRef.current?.getBoundingClientRect();
    const span = spanRef.current?.getBoundingClientRect();
    if (projectsLink && span) {
      const pos = projectsLink.left - SPAN_POS;
      const width = projectsLink?.width;
      root.style.setProperty('--span-position', `${PROJECTS_POS}px`);
      root.style.setProperty('--span-width', `${width}px`);
    }
  }

  const navbarGoContact = () => {
    const root = document.documentElement;
    const contactLink = contactLinkRef.current?.getBoundingClientRect();
    const span = spanRef.current?.getBoundingClientRect();
    if (contactLink && span) {
      const pos = contactLink.left - SPAN_POS;
      const width = contactLink?.width;
      root.style.setProperty('--span-position', `${CONTACT_POS}px`);
      root.style.setProperty('--span-width', `${width}px`);
    }
  }

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
                  <div ref={homeLinkRef} onClick={navbarGoHome} style={{ height: 'fit-content', width: 'fit-content' }}>
                    <NavbarElement text="HOME" highlighted={false} href="/" />
                  </div>
                  <div ref={aboutLinkRef} onClick={navbarGoAbout}>
                    <NavbarElement ref={aboutLinkRef} text="ABOUT" highlighted={false} href="/about" />
                  </div>
                  <div ref={sponsorsLinkRef} onClick={navbarGoSponsors} >
                    <NavbarElement ref={sponsorsLinkRef} text="SPONSORS" highlighted={false} href="/sponsors" />
                  </div>
                  <div ref={projectsLinkRef} onClick={navbarGoProjects}>
                    <NavbarElement ref={projectsLinkRef} text="WHAT WE DO" highlighted={false} href="/projects" />
                  </div>
                  <div ref={contactLinkRef} onClick={navbarGoContact}>
                    <NavbarElement ref={contactLinkRef} text="CONTACT US" highlighted={false} href="/contact" />
                  </div>
                </Box>
              </div>

              <span ref={spanRef} className={`navbarSpan ${inititalRender ? 'initial' : ''}`}></span>

            </div>
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
}
export default memo(ResponsiveAppBar);