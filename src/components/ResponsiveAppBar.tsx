import * as React from 'react';
import { useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
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
    navigate('/homepage');
  }

  const goToAbout = () => {
    navigate('/about');
  }

  const goToMembers = () => {
    navigate('/members');
  }

  const goToProjects = () => {
    navigate('/projects');
  }


  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
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
        main: '#865DFF',
      },
      secondary: {
        light: '#0066ff',
        main: '#0044ff',
        // dark: will be calculated from palette.secondary.main,
        contrastText: '#ffcc00',
      },
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography
              variant="h5"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}

              onClick={goToHome}
            >
              ECLAIR
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none' },
                }}
              >
              </Menu>
            </Box>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              <Link to="/homepage" style={{
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
              <Link to="/members" style={{
                padding: '1em',
                color: 'inherit',
                paddingTop: '1em',
                textDecoration: 'none',
                fontFamily: 'sans-serif',
              }}> MEMBERS </Link>
              <Link to="/projets" style={{
                padding: '1em',
                color: 'inherit',
                paddingTop: '1em',
                textDecoration: 'none',
                fontFamily: 'sans-serif',
              }}> PROJECTS </Link>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
}
export default ResponsiveAppBar;