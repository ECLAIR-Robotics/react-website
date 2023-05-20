import React from 'react'
import Grid from '@mui/material/Grid'
import OfficerCards from '../components/OfficerCards'
import '../styles/about.css'
import placeholderImg from '../static/images/officer/placeholder.png'
import aboutUsBackground from '../static/vectors/about-us-background.svg'
import DiscordLogo from '../static/images/social-icons/Discord-Logo-White.png';
import foundersBackground from '../static/vectors/founders-background.svg'

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

      <section className='aboutContainer' style={{
        background: `url(${aboutUsBackground})  center center no-repeat `,
        backgroundSize: 'cover',
      }} >
        <div>
          <Grid container spacing={2} sx={{ paddingTop: '3em' }}>
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
                name='TBD'
                position='Corporate Officer'
                img={placeholderImg} bio="Hi I like to do random stuff. Lore Ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface "
                linkedIn='https://www.linkedin.com/in/tanay-garg-89004b184/'
                email='tanay.garg@utexas.edu' />
            </Grid>

            <Grid className="cardContainer" item xs={12} sm={6} md={4}>
              <OfficerCards
                name='TBD'
                position='Historian'
                img={placeholderImg} bio="Hi I like to do random stuff. Lore Ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface "
                linkedIn='https://www.linkedin.com/in/tanay-garg-89004b184/'
                email='tanay.garg@utexas.edu' />
            </Grid>

            <Grid className="cardContainer" item xs={12} sm={6} md={4}>
              <OfficerCards
                name='TBD'
                position='Freshman Representative'
                img={placeholderImg} bio="Hi I like to do random stuff. Lore Ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface "
                linkedIn='https://www.linkedin.com/in/tanay-garg-89004b184/'
                email='tanay.garg@utexas.edu' />
            </Grid>

          </Grid>
          <div className="custom-shape-divider-bottom-1684594327">
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" className="shape-fill"></path>
              <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" className="shape-fill"></path>
              <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" className="shape-fill"></path>
            </svg>
          </div>
        </div>

      </section >

      <section className='aboutUsFoundersSection' style={{
        background: `url(${foundersBackground})  center center no-repeat `,
        backgroundSize: 'cover',
      }}>
        <div>
          <Grid container spacing={2}>
            <Grid className="cardContainer" item xs={12} sm={6} md={6}>
              <OfficerCards
                name='Sahil Jain'
                position='Founder'
                img={placeholderImg} bio="Hi I like to do random stuff. Lore Ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface "
                linkedIn='https://www.linkedin.com/in/tanay-garg-89004b184/'
                email='tanay.garg@utexas.edu' />
            </Grid>
            <Grid className="cardContainer" item xs={12} sm={6} md={6}>
              <OfficerCards
                name='Conrad Li'
                position='Founder'
                img={placeholderImg} bio="Hi I like to do random stuff. Lore Ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface "
                linkedIn='https://www.linkedin.com/in/tanay-garg-89004b184/'
                email='tanay.garg@utexas.edu' />
            </Grid>
          </Grid>
        </div>
      </section>

      <section className='box2 box2-override'>
        <div className='box1_5-textLeft'> How to join us! </div>
        <div className='joinInstructions'>
          <div>Feel free to drop in on one of our meetings!</div>
          <div>
            Or join our discord server to and reach out to one of our officers to get more information!
          </div>
          <div>
            <a href='https://discord.gg/tgbvpCjNgV' target={'_blank'}>
              <img className='discordLogo' src={DiscordLogo}></img>
            </a>
          </div>
        </div>

      </section>

      <section className='box2 box2-override2'>
        <div className='box1_5-textRight'>
          <iframe className="embeddedGoogleMap" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1347.6239260786679!2d-97.73857918622161!3d30.288576376509805!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8644b583399f9331%3A0x4c1b35a5244fc3a7!2sAnna%20Hiss%20Gymnasium!5e0!3m2!1sen!2sin!4v1684598907576!5m2!1sen!2sin" ></iframe>
        </div>
        <div className="box2-encloser">
          <div className='box1_5-textLeft' id='boldText'>
            Where to find us!
          </div>
          <div className='locationInstructions' id="informationText">
            We meet in the Anna Hiss Gymnasium, home of Texas Robotics!
          </div>

        </div>
      </section>

    </>
  )
}

export default About
