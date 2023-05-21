import * as React from 'react';
import { useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@emotion/react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
const pages = ['Home', 'Projects', 'Members', 'About'];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const goToHome = () => {
    navigate('/');
  }

  interface PalleteColor {
    light?: string;
    main: string;
    dark?: string;
    contrastText?: string;
  }

  const navigate = useNavigate();

  useEffect(() => {
    // This function will be called only once when the component is created
    goToHome();
  }, []);

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

              onClick={goToHome}
            >
              ECLAIR
            </Typography>
            <Box sx={{
              flexGrow: 1, 
              paddingLeft: '2em',
              display: { xs: 'block', md: 'flex' },
              alignItems: 'flex-start',

            }}>
              <Link to="/" style={{
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
              }}> CONTACT US </Link>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
}
export default ResponsiveAppBar;