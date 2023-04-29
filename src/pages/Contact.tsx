import React from 'react'
import Grid from '@mui/material/Grid'
function Contact() {
  return (
    <div>
      <Grid sx={{
        display: { xs: 'flex', md: 'flex' },
        backgroundColor: '#1f2532',
        minWidth: '100%',
        maxHeight: '100%',
        paddingTop: '10em',
        paddingBottom: '20em',
      }}
        container
        maxWidth='lg'
        justifyContent={'center'}
        direction={'row'}
        justifyItems={'center'} >
        <Grid item sx = {{
          width: '100%',
          height: '50em',
        }} >
          <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSf4r0lAeOMwzHBiRm1TkybQr9SQGj8WRGsI-cgt9b1JTjulgg/viewform?embedded=true"
            width="100%"
            height="100%" ></iframe>
        </Grid>
      </Grid>
    </div>
  )
}

export default Contact
