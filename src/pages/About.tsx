import React from 'react'
import Grid from '@mui/material/Grid'
import OfficerCards from '../components/OfficerCards'
import '../styles/about.css'
import placeholderImg from '../static/images/officer/placeholder.png'
import aboutUsBackground from '../static/vectors/about-us-background-outline.svg'

function About() {
  return (
    <>
      <section className="aboutSectionHeader">
        <div>About Us </div>
        <div className="custom-shape-divider-bottom-1684440846">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M600,112.77C268.63,112.77,0,65.52,0,7.23V120H1200V7.23C1200,65.52,931.37,112.77,600,112.77Z" className="shape-fill"></path>
          </svg>
        </div>
      </section>

      <section className='aboutContainer' style = {{
        background: `url(${aboutUsBackground})  center center no-repeat `,
        backgroundSize: 'cover',
        }} >

        <Grid container spacing={2}>
          <Grid className="cardContainer" item xs={12} sm={6} md={4}>
            <OfficerCards
              name='Tanay Garg'
              position='President'
              img={placeholderImg} bio="Hi I like to do random stuff. Lore Ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface "
              linkedIn='https://www.linkedin.com/in/tanay-garg-89004b184/'
              email='tanay.garg@utexas.edu' />
          </Grid>

          <Grid className="cardContainer" item xs={12} sm={6} md={4}>
            <OfficerCards
              name='Angelica Sharma'
              position='President'
              img={placeholderImg} bio="Hi I like to do random stuff. Lore Ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface "
              linkedIn='https://www.linkedin.com/in/tanay-garg-89004b184/'
              email='tanay.garg@utexas.edu' />
          </Grid>

          <Grid className="cardContainer" item xs={12} sm={6} md={4}>
            <OfficerCards
              name='Vishal Kantharaju'
              position='Vice President'
              img={placeholderImg} bio="Hi I like to do random stuff. Lore Ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface "
              linkedIn='https://www.linkedin.com/in/tanay-garg-89004b184/'
              email='tanay.garg@utexas.edu' />
          </Grid>

          <Grid className="cardContainer" item xs={12} sm={6} md={4}>
            <OfficerCards
              name='Tanay Garg'
              position='President'
              img={placeholderImg} bio="Hi I like to do random stuff. Lore Ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface "
              linkedIn='https://www.linkedin.com/in/tanay-garg-89004b184/'
              email='tanay.garg@utexas.edu' />
          </Grid>

          <Grid className="cardContainer" item xs={12} sm={6} md={4}>
            <OfficerCards
              name='Tanay Garg'
              position='President'
              img={placeholderImg} bio="Hi I like to do random stuff. Lore Ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface "
              linkedIn='https://www.linkedin.com/in/tanay-garg-89004b184/'
              email='tanay.garg@utexas.edu' />
          </Grid>

          <Grid className="cardContainer" item xs={12} sm={6} md={4}>
            <OfficerCards
              name='Tanay Garg'
              position='President'
              img={placeholderImg} bio="Hi I like to do random stuff. Lore Ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface "
              linkedIn='https://www.linkedin.com/in/tanay-garg-89004b184/'
              email='tanay.garg@utexas.edu' />
          </Grid>

        </Grid>
      </section>
    </>
  )
}

export default About
