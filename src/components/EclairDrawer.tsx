import React from 'react'
import { useState, useEffect, useRef } from 'react';
import { Drawer, Typography } from '@mui/material'
import { Link, useLocation } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { createTheme } from '@mui/material/styles';
import '../styles/eclairdrawer.css';
import { ThemeProvider } from 'styled-components';
function EclairDrawer() {

    const location = useLocation();
    const drawerRef = useRef<HTMLDivElement>(null);

    const handleOutSideClick = (event: MouseEvent) => {
        if (drawerRef.current && !drawerRef.current.contains(event.target as Node)) {
            setDrawerOpen(false);
        }
    }

    const [currentPath, setCurrentPath] = useState<{[key: string]: boolean}>({
        '/': false,
        '/about': false,
        '/sponsors': false,
        '/projects': false,
        '/contact': false,

    });

    const themeDrawer = createTheme({
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
        }
    })

    useEffect(() => {

        document.addEventListener('mousedown', handleOutSideClick);
        return () => {
            document.removeEventListener('mousedown', handleOutSideClick);
        };




    }, []);
    const currentUrl = location.pathname;
    useEffect(() => {

        console.log(currentUrl);

        setCurrentPath(
            (prevCurrentPath: {[key: string]: boolean}) => {
                const updatedPath : {[key: string] : boolean} = Object.keys(prevCurrentPath).reduce((acc : {[key : string] : boolean}, key : string) => {
                    if ( key === currentUrl) {
                        acc[key] = true;
                    } else {
                        acc[key] = false;
                    }
                    return acc;
                }, {})

                return updatedPath;
            }
        );
        
    }, [currentUrl]);

    useEffect(() => {
        console.log(currentPath);
    }, [currentPath]);

    const [drawerOpen, setDrawerOpen] = useState(false);
    const toggleDrawer = () => {
        setDrawerOpen(!drawerOpen);
        return drawerOpen;
    }

    const titleStyle = {
        background: 'linear-gradient(to right, #20c997, #ff77ff)',
        backgroundClip: 'text',
        WebkitBackgroundClip: 'text',
        color: 'transparent',
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'center',

    }

    return (

        <div style={{
            width: '50em',
        }}>
            <div style={{ padding: '1em' }}>
                {!drawerOpen && (<MenuIcon fontSize='large' color="secondary" onClick={toggleDrawer} />)}
            </div>
            <ThemeProvider theme={themeDrawer}>
                <Drawer
                    className="eclairDrawer"
                    anchor='left'
                    ref={drawerRef}
                    sx={{
                        width: 'fit-content',
                        '& .MuiPaper-root': {
                            background: 'linear-gradient(to right, #c675ff32, #0050c74e)',
                            borderTopRightRadius: '1em',
                            borderBottomRightRadius: '1em',
                            backdropFilter: 'blur(10px)',
                        },

                    }}
                    open={drawerOpen}
                    onClose={toggleDrawer}
                    hideBackdrop={true}
                >
                    <div style={{
                        width: '10em',
                        padding: '1em',
                    }}>
                        <CloseIcon fontSize='large' style={{ color: 'white' }} onClick={toggleDrawer} />
                    </div>
                    <div className='drawerContent'>
                        <div>
                            <span></span>
                        </div>
                        <div className='drawerElement'>
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
                        </div>
                        <div className='drawerElement'>
                            <Link to='/'>
                                Home
                            </Link>
                        </div>
                        { currentPath['/'] && (<span className="divierDrawer"></span>)}
                        <div className='drawerElement'>
                            <Link to='/about'>
                                About
                            </Link>
                        </div>
                        { currentPath['/about'] && (<span className="divierDrawer"></span>)}
                        <div className='drawerElement'>
                            <Link to='/sponsors'>
                                Sponsors
                            </Link>
                        </div>
                        { currentPath['/sponsors'] && (<span className="divierDrawer"></span>)}
                        <div className='drawerElement'>
                            <Link to='/projects'>
                                What We Do
                            </Link>
                        </div>
                        { currentPath['/projects'] && (<span className="divierDrawer"></span>)}
                        <div className='drawerElement'>
                            <Link to='/contact'>
                                Contact Us
                            </Link>
                        </div>
                        { currentPath['/contact'] && (<span className="divierDrawer"></span>)}
                    </div>



                </Drawer>
            </ThemeProvider>
        </div>
    )
}

export default EclairDrawer
