import * as React from 'react';
import { useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import NavbarElement from './NavbarElement';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@emotion/react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);


  // TODO mkae a nav bar element that returns a highlighted element if the boolean value is true other wise it returns a regular element
  // TODO create another dropdown style menu for mobile users
   
  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };




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
    color: 'transparent'
  }
  return (
    <ThemeProvider theme={theme}>
      <AppBar position="static">
        <Container maxWidth="xl" sx={{
          paddingBottom: '0em',
        }}>
          <Toolbar disableGutters>
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
              {/* <Link to="/" style={{
                padding: '1em',
                color: 'inherit',
                paddingTop: '1em',
                textDecoration: 'none',
                fontFamily: 'sans-serif',
              }}> HOME </Link>

              <Link to="/about" style={{
                padding: '1em',
                color: 'inherit',
                paddingTop: '1em',
                textDecoration: 'none',
                fontFamily: 'sans-serif',
              }}> ABOUT </Link>
              <Link to="/sponsors" style={{
                padding: '1em',
                color: 'inherit',
                paddingTop: '1em',
                textDecoration: 'none',
                fontFamily: 'sans-serif',
              }}> SPONSORS </Link>
              <Link to="/projects" style={{
                padding: '1em',
                color: 'inherit',
                paddingTop: '1em',
                textDecoration: 'none',
                fontFamily: 'sans-serif',
              }}> WHAT WE DO </Link>
              <Link to="/contact" style={{
                padding: '1em',
                color: 'inherit',
                paddingTop: '1em',
                textDecoration: 'none',
                fontFamily: 'sans-serif',
              }}> CONTACT US </Link> */}
              <NavbarElement text="HOME" highlighted={false} href="/"/>
              <NavbarElement text="ABOUT" highlighted={false} href="/about"/>
              <NavbarElement text="SPONSORS" highlighted={false} href="/sponsors"/>
              <NavbarElement text="WHAT WE DO" highlighted={false} href="/projects"/>
              <NavbarElement text="CONTACT US" highlighted={false} href="/contact"/>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
}
export default ResponsiveAppBar;