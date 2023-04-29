import React from 'react'
import Grid from '@mui/material/Grid'
import OfficerCards from '../components/OfficerCards'
import '../styles/about.css'
import placeholderImg from '../static/images/placeholder.png'
import unoReverse from '../static/images/uno_reverse.png'
import circleBackground from '../static/vectors/circle-outline-background.svg'
function About() {  
  return (
    <div className='aboutContainer'>
      <Grid container spacing={2}>
        <Grid className = "cardContainer" item xs={12} sm={6} md={4}>
          <OfficerCards name='Right Airpod' position='President' img={unoReverse} />
        </Grid>
        <Grid className = "cardContainer" item xs={12} sm={6} md={4}>
          <OfficerCards name='Case' position='President' img={placeholderImg} />
        </Grid>
        <Grid className = "cardContainer" item xs={12} sm={6} md={4}>
          <OfficerCards name='Left Airpod' position='Left Airpod' img={unoReverse} />
        </Grid>
      </Grid>
    </div>
  )
}

export default About
