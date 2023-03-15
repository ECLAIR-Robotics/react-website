import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { colors, Grid } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@emotion/react';
export default function SimpleBottomNavigation() {

    const theme = createTheme({
        palette: {
            primary: {
                // light: will be calculated from palette.primary.main,
                main: '#1f2532',
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
            <BottomNavigation>
            <Grid sx={{
                bottom: 0,
                background: '#1f2532',
                fontFamily: 'sans-serif',
                paddingTop: 5,
                paddingBottom: 10,
                textDecorationColor: 'white'

            }}
                container spacing={2}
            >
                <Grid item xs={1.5}></Grid>
                <Grid item xs={3} color='white' alignItems={'center'}> Contact us</Grid>
                <Grid item xs={3} color='white' alignItems={'center'}> Follow us</Grid>
                <Grid item xs={3} color='white' alignItems={'center'}> Join us</Grid>
                <Grid item xs={1.5} color='white' alignItems={'center'}> COPYRIGHT 2023. ALL RIGHTS RESERVED</Grid>
            </Grid>
            </BottomNavigation>
        </ThemeProvider>
    );
}