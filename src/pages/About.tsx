import React, {useState, useRef, useEffect} from 'react'
import Grid from '@mui/material/Grid';
import Loader from '../components/Loader'
import OfficerCards from '../components/OfficerCards'
import '../styles/about.css'
import aboutUsBackground from '../static/vectors/about-us-background.svg'
import foundersBackground from '../static/vectors/founders-background.svg'
import foundersBackground2 from '../static/vectors/founders-background-2.svg'
import {
  OFFICER_KEYS,
  OFFICER_NAMES,
  OFFICER_POSITIONS,
  OFFICER_EMAILS,
  OFFICER_LINKED_INS,
  OFFICER_DESCS,
  OFFICER_FUN_IMAGES,
  TECH_LEAD_KEYS,
  TECH_LEAD_NAMES,
  TECH_LEAD_EMAILS,
  TECH_LEAD_LINKED_INS,
  TECH_LEAD_DESCS,
  TECH_LEAD_FUN_IMAGES,
} from "../static/constants/About";

import {
  PROJECT_NAMES
} from "../static/constants/Projects"

import conradImg from '../static/images/officer/conrad.webp'
import sahilImg from '../static/images/officer/sahil.webp'
import JoinUs from '../components/JoinUs';

function About() {
  const [aBGLoaded, setABGLoaded] = useState(false);
  const aBGDivRef = useRef<HTMLDivElement>(null);
  const aElementRef = useRef<HTMLImageElement>(null);
  
  const[resize, isResized] = useState(false);

  useEffect(() => {
    if (aBGDivRef.current && aElementRef.current) {
      const divHeight = aBGDivRef.current.clientHeight;
      aElementRef.current.style.height = `${divHeight}px`;
    }
  }, [resize]);

  
  function handleResize() {
    // setABGLoaded(false);
    isResized(!resize);
  }
  window.addEventListener('resize', handleResize);
 
  function wrapperFunction() {
    setABGLoaded(true);
  }

  async function handleLoad() {
    setTimeout(wrapperFunction, 0)
    
  }
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
        marginTop: '-1px'
      }} >
        <img className='contactBackground' ref={aElementRef}  src={aboutUsBackground} onLoad={handleLoad}></img>
        <div className="officerGridHolder">
            <Grid container rowSpacing={10} columnSpacing={0} sx={{ paddingTop: '8em', paddingBottom: '8em' }}>
              {OFFICER_KEYS.map((key) => (
                <Grid key={key} className="cardContainer" item xs={12} sm={6} md={4}>
                  <OfficerCards
                    name={OFFICER_NAMES[key]}
                    position={OFFICER_POSITIONS[key]}
                    img={OFFICER_FUN_IMAGES[key]}
                    bio={OFFICER_DESCS[key]}
                    linkedIn={OFFICER_LINKED_INS[key]}
                    email={OFFICER_EMAILS[key]}
                  />
                </Grid>
              ))}
            </Grid>
          <div className="custom-shape-divider-bottom-1684603760">
            <svg id="dividerVisual" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path id="wave1" d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" className="shape-fill"></path>
              <path id="wave2" d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,95.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" className="shape-fill"></path>
              <path id="wave3" d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" className="shape-fill"></path>
            </svg>
          </div>
        </div>

      </section >



      <section className='aboutUsFoundersSection' style={{
        background: `url(${foundersBackground})  center center no-repeat `,
        backgroundSize: 'cover',
        marginTop: '-1px'
      }}>
        <div className="officerGridHolder">
          <Grid container rowSpacing={10} columnSpacing={0} sx={{ paddingTop: '8em', paddingBottom: '8em' }}>
          {TECH_LEAD_KEYS.map((key) => {
            // remove trailing numbers from key
            const projectKey = key.replace(/[0-9]/g, "");
            const projectName = PROJECT_NAMES[projectKey];

            return (
              <Grid key={key} className="cardContainer" item xs={12} sm={6} md={4}>
                <OfficerCards
                  name={TECH_LEAD_NAMES[key]}
                  position={`Tech Lead, ${projectName}`}
                  img={TECH_LEAD_FUN_IMAGES[key]}
                  bio={TECH_LEAD_DESCS[key]}
                  linkedIn={TECH_LEAD_LINKED_INS[key]}
                  email={TECH_LEAD_EMAILS[key]}
                />
              </Grid>
            );
          })}
        </Grid>

        </div>
        <div className="custom-shape-divider-bottom-168484035ab0">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M600,112.77C268.63,112.77,0,65.52,0,7.23V120H1200V7.23C1200,65.52,931.37,112.77,600,112.77Z" className="shape-fill"></path>
          </svg>
        </div>
      </section>

      <section className='aboutUsFoundersSection foundersSectionOverride ' style={{
        background: `url(${foundersBackground2})  center center no-repeat `,
        backgroundSize: 'cover',
      }}>
        <div>
          <Grid container spacing={2}>
            <Grid className="cardContainerFounder" item xs={12} sm={12} md={6}>
              <OfficerCards
                name='Sahil Jain'
                position='Founder'
                img={sahilImg} bio="Alo, I'm Sahil! I'm a software developer interested in robotics, creative writing, and pandas (especially those that know kung fu) "
                linkedIn='https://www.linkedin.com/in/sahil-jain-ab012614b/'
                email='sahil.jain.1@outlook.com'/>
            </Grid>
            <Grid className="cardContainerFounder" item xs={12} sm={12} md={6}>
              <OfficerCards
                name='Conrad Li'
                position='Founder'
                img={conradImg} bio="I am a recently graduated computer science, neuroscience, and chemistry major from UT Austin. I aspire to be a physician working at this intersection of medicine and technology."
                linkedIn='https://www.linkedin.com/in/conradfli/'
                email='conradliste@utexas.edu'/>
            </Grid>
          </Grid>

        </div>

      </section>

      
      <JoinUs/>


      <section className='box2 box2-override2'>
        <div className='box1_5-textRight' id="embeddedMapHolder">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3445.273583027798!2d-97.73916802475219!3d30.286272274802734!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8644b59c98544379%3A0x1a0c2b90248ca2ed!2sGates%20Dell%20Complex%2C%202317%20Speedway%2C%20Austin%2C%20TX%2078712!5e0!3m2!1sen!2sus!4v1737357273958!5m2!1sen!2sus" width="600" height="450" ></iframe>
        </div>
        <div className="joiningInstructionsEncloser">
          <div className='locationInstructionsTitle' id='boldText'>
            Where to find us!
          </div>
          <div className='locationInstructions' id="informationText">
            We meet in the Gates-Dell Complex, home of UT CS!
          </div>

        </div>
      </section>
      <Loader bGLoaded={aBGLoaded}/>

    </>
  )
}

export default About
