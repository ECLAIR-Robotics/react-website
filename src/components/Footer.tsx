import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import { Grid } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@emotion/react';
import DiscordLogo from '../static/images/footer-icons/Discord-Logo-White.png';
import GithubLogo from '../static/images/footer-icons/GitHub-Mark-Light-32px.png';
import InstaIcon from '../static/images/footer-icons/insta_icon.png';
import EmailIcon from '../static/images/footer-icons/emailIcon2.png'
import '../styles/footer.css'
// import EmailIcon from '@mui/icons-material/Email';

export default function SimpleBottomNavigation() {

    const theme = createTheme({
        palette: {
            primary: {
                // light: will be calculated from palette.primary.main,
                main: '#ffffff',
                // dark: will be calculated from palette.primary.main,
                // contrastText: will be calculated to contrast with palette.primary.main
            },
            secondary: {
                light: '#0066ff',
                main: '#0044ff',
                // dark: will be calculated from palette.secondary.main,
                contrastText: '#ffcc00',
            },

        }
    });
    return (
        <ThemeProvider theme={theme}>
            <BottomNavigation style={{height:'fit-content', overflow:'hidden'}}>
                <Grid sx={{
                    bottom: 0,
                    background: '#1f2532',
                    fontFamily: 'sans-serif',
                    paddingTop: 5,
                    textDecorationColor: 'white'

                }}
                    container spacing={2}
                >
                    <Grid item ></Grid>
                    <Grid item xs={3} color='white' alignItems={'center'}>
                        <Grid item xs={12}  paddingLeft={2}>
                            Contact us
                        </Grid>
                        <Grid item xs={12}>
                            <a href='mailto:eclairrobotics@gmail.com' className='social-icon' target={'_blank'}>
                            <img className='social-icons' src={EmailIcon}></img>
                            </a>
                        </Grid>
                    </Grid>
                    <Grid item xs={3} color='white' alignItems={'center'}>
                        <Grid item xs={12} paddingLeft={2}>
                            Follow us
                        </Grid>
                        <Grid item xs={12}>
                           
                            <a href='https://www.instagram.com/eclairrobotics/' className='social-icon'target={'_blank'}>
                                <img className='social-icons' src={InstaIcon}></img>
                            </a>
                            <a href='https://github.com/ECLAIR-Robotics' target={'_blank'} className='social-icon' >
                                <img className='social-icons' src={GithubLogo}></img>
                            </a>
                            
                        </Grid>
                        
                    </Grid>
                    <Grid item xs={3} color='white' alignItems={'center'}>
                        <Grid item xs={12} paddingLeft={1}>
                            Join us
                        </Grid>
                        <Grid item xs={12}>
                            <a href='https://discord.gg/tgbvpCjNgV' target={'_blank'}>
                                <img className='social-icons' src={DiscordLogo}></img>
                            </a>
                        </Grid>
                    </Grid>
                    <Grid item xs={1.5} color='white' alignItems={'center'}> <Grid item xs={12}>
                        COPYRIGHT 2023.
                    </Grid>
                        <Grid item xs={12}>
                            ALL RIGHTS RESERVED.
                        </Grid>
                    </Grid>
                </Grid>
            </BottomNavigation>
        </ThemeProvider>
    );
}