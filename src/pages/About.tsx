import React, {useState, useRef, useEffect} from 'react'
import Grid from '@mui/material/Grid';
import Loader from '../components/Loader'
import OfficerCards from '../components/OfficerCards'
import '../styles/about.css'
import aboutUsBackground from '../static/vectors/about-us-background.svg'
import foundersBackground from '../static/vectors/founders-background.svg'
import foundersBackground2 from '../static/vectors/founders-background-2.svg'
import tanayImg from '../static/images/officer/tanay.png'
import angelicaImg from '../static/images/officer/angelica.jpg'
import vishalImg from '../static/images/officer/vishal.png'
import conradImg from '../static/images/officer/conrad.jpg'
import sahilImg from '../static/images/officer/sahil.jpg'
import eclairLogo from '../static/images/logo/ECLAIR_logo3.png'
import sahanaImg from '../static/images/officer/sahana.jpeg'
import carsonImg from '../static/images/officer/carson.jpg'
import kyryloImg from '../static/images/officer/kyrylo.png'
import anjaliImg from '../static/images/officer/anjali.png'
import henryImg from '../static/images/officer/henry.jpg'
import nikhilImg from '../static/images/officer/nikhil.jpeg'
import abbhinavImg from '../static/images/officer/abbhinav.jpeg'
import annabelImg from '../static/images/officer/annabel.png'
import hurshImg from '../static/images/officer/hursh.jpeg'
import savvyImg from '../static/images/officer/savvy.jpg'
import rileyImg from '../static/images/officer/riley.jpg'
import cameronImg from '../static/images/officer/cameron.jpg'
import manasImg from '../static/images/officer/manas.jpg'
import nathanImg from '../static/images/officer/nathan.jpg'
import alexzanderImg from '../static/images/officer/alexzander.jpg'
import arnavImg from '../static/images/officer/arnav.jpg'
import thidaImg from '../static/images/officer/thida.jpg'
import zoeImg from '../static/images/officer/zoe.png'
import placeholderImg from '../static/images/officer/placeholder.png'

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

            <Grid className="cardContainer" item xs={12} sm={6} md={4}>
              <OfficerCards
                name='Tanay Garg'
                position='President'
                img={tanayImg} bio="Hi! I am Tanay, and I am a CS major at UT Austin. I love Formula 1, soccer, and playing the guitar! I want to use AI to revolutionize educational technology! "
                linkedIn='https://www.linkedin.com/in/tanay-garg-89004b184/'
                email='tanay.garg@utexas.edu' topAlignImage={false}/>
            </Grid>

            <Grid className="cardContainer" item xs={12} sm={6} md={4}>
              <OfficerCards
                name='Angelica Sharma'
                position='President'
                img={angelicaImg} bio="Hi I'm Angelica! I'm a computer science & pre-medical student with a love for music and entrepreneurship. I love ECLAIR for its vibes and amazing robotics projects and look foward to meeting you all!"
                linkedIn='https://www.linkedin.com/in/angelica-s-sharma/'
                email='angelicasharma@utexas.edu' topAlignImage={false}/>
            </Grid>

            <Grid className="cardContainer" item xs={12} sm={6} md={4}>
              <OfficerCards
                name='Vishal Kantharaju'
                position='Vice President'
                img={vishalImg} bio="Hi! I'm a computer science major at UT Austin, and some of my hobbies include playing the violin, running, and reading. I look forward to exploring innovative applications of AI and robotics."
                linkedIn='https://www.linkedin.com/in/vishal-kantharaju/'
                email='vishal.kantharaju@utexas.edu' topAlignImage={false}/>
            </Grid>

            <Grid className="cardContainer" item xs={12} sm={6} md={4}>
              <OfficerCards
                name='Cameron Cox'
                position='Corporate Director'
                img={cameronImg} bio="Hey y'all, I'm Cameron. I'm a computer Science Major with a passion for robotics and in my freetime I play D&D, piano and cook a lot."
                linkedIn='https://www.linkedin.com/in/cameron-cox-ut/'
                email='cameron.cox@utexas.edu' topAlignImage={false}/>
            </Grid>

            <Grid className="cardContainer" item xs={12} sm={6} md={4}>
              <OfficerCards
                name='Thida Lay-Sok'
                position='Outreach Director'
                img={thidaImg} bio="Hello, my name is Thida because my actual name is too long. I'm an Aerospace Engineering and Physics double major. But when I'm not struggling, I enjoy reading and drawing. My goal in life is to marry Zoe Vo <3...but too bad she doesn't want me back"
                linkedIn='https://www.linkedin.com/in/thidalaysok/'
                email='laysok@utexas.edu' topAlignImage={false}/>
            </Grid>

            <Grid className="cardContainer" item xs={12} sm={6} md={4}>
              <OfficerCards
                name='Arnav Joshi'
                position='Event Director'
                img={arnavImg} bio="Hi, my name is Arnav. I'm a Computer Science major with a Robotics minor. I've led hydroponics and currently lead the ball balancer subteam. I'm also an officer in Texas Aerial Robotics!"
                linkedIn='https://www.linkedin.com/in/arnavsjoshi/'
                email='arnavjoshi@utexas.edu' topAlignImage={false}/>
            </Grid>

            <Grid className="cardContainer" item xs={12} sm={6} md={4}>
              <OfficerCards
                name='Zoe Vo'
                position='Public Relations Director'
                img={zoeImg} bio="Hi I'm Zoe and I'm a pyschology major. My favorite book series, movie franchise, and religion is The Hunger Games. Please marry me Thida"
                linkedIn='https://www.linkedin.com/in/zoe-vo-b73b9b317/'
                email='zk4thyv@gmail.com' topAlignImage={true} />
            </Grid>

            <Grid className="cardContainer" item xs={12} sm={6} md={4}>
              <OfficerCards
                name='Manas Agrawal'
                position='Technology Director'
                img={manasImg} bio="Hi, my name is Manas! I'm a Computer Science and Mathematics double major. I enjoy chess, strategy video games, and am interested in Computer Vision applications in Robotics."
                linkedIn='https://www.linkedin.com/in/manas-agrawal-41231a245/'
                email='manas.agrawal2@utexas.edu' topAlignImage={true} />
            </Grid>

            <Grid className="cardContainer" item xs={12} sm={6} md={4}>
              <OfficerCards
                name='Nathan Chase'
                position='Financial Director'
                img={nathanImg} bio="Hey, the name is Nathan. I'm a double major in Computer Science and Asian Languages and Cultures. On my free time I enjoy engaging in community organizing, reading history, and cooking comfort food like Gumbo. And yes, it's okay to have tomatoes in your Gumbo!"
                linkedIn='https://www.linkedin.com/in/nathan-t-chase/'
                email='ntc477@utexas.edu' topAlignImage={true} />
            </Grid>

            <Grid className="cardContainer" item xs={12} sm={6} md={4}>
              <OfficerCards
                name='Alexzander Wilburr'
                position='Freshman Representative'
                img={alexzanderImg} bio="Wassup, everyone! It's Alexzander! I'm a computer science major who loves playing games and sports (especially baseball). I am an avid note-taker because I have an atrocious memory :D. "
                linkedIn=''
                email='alexzanderwilburn2424@outlook.com' topAlignImage={true} />
            </Grid>

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
        marginTop: '-1rem'
      }}>
        <div style={{paddingTop:"1em", paddingBottom:"1em"}}>
          <Grid container rowGap={10} spacing={2}>
            <Grid className="cardContainerFounder" item xs={12} sm={12} md={4}>
              <OfficerCards
                name='Savvy Chezhain'
                position='Tech Lead, Chess Teacher'
                img={savvyImg} bio="Hey, I'm Savvy! I'm a Computer Science major and I love donuts, robots, and artificial intelligence."
                linkedIn='https://www.linkedin.com/in/sarvesh-chezhian-4a598b217/'
                email='schezhian@utexas.edu' topAlignImage={true}/>
            </Grid>
            <Grid className="cardContainerFounder" item xs={12} sm={12} md={4}>
              <OfficerCards
                name='Hursh Jha'
                position='Tech Lead, Chess Teacher'
                img={hurshImg} bio="Hey there! I'm Hursh and I'm majoring in Computer Science and Math at UT. I'm interested in cryptography and AI and how we can apply math to these fields to get the most out of them. Outside of school, my hobbies include reading, TCG's, and swimming."
                linkedIn='https://www.linkedin.com/in/hursh-jha-713820220/'
                email='hursh.jha@gmail.com' topAlignImage={true}/>
            </Grid>
            <Grid className="cardContainerFounder" item xs={12} sm={12} md={4}>
              <OfficerCards
                name='Carson Stark'
                position='Tech Lead, Autonomous Drone'
                img={carsonImg} bio="I am studying computer science and business. I have always had a passion for technology, and I've been experimenting with game development, AI, and robotics for many years."
                linkedIn='https://www.linkedin.com/in/carson-s-869a531a7/'
                email='carsonstark@ymail.com' topAlignImage={true}/>
            </Grid>
            <Grid className="cardContainerFounder" item xs={12} sm={12} md={4}>
              <OfficerCards
                name='Angelica Sharma'
                position='Tech Lead, PCR'
                img={angelicaImg} bio="Hi! I'm a computer science major at UT Austin, and some of my hobbies include playing the violin, running, and reading. I look forward to exploring innovative applications of AI and robotics."
                linkedIn='https://www.linkedin.com/in/vishal-kantharaju/'
                email='vishal.kantharaju@utexas.edu' topAlignImage={false}/>
            </Grid>
            <Grid className="cardContainerFounder" item xs={12} sm={12} md={4}>
              <OfficerCards
                name='Vishal Kantharaju'
                position='Tech Lead, PCR'
                img={vishalImg} bio="Hi!! I’m a computer science & pre-medical student at UT. In my free time, I love to play the violin & piano, run, hike, and skateboard - I am also really passionate about edtech & biotech! "
                linkedIn='https://www.linkedin.com/in/vishal-kantharaju/'
                email='vishal.kantharaju@utexas.edu' topAlignImage={false}/>
            </Grid>
            <Grid className="cardContainerFounder" item xs={12} sm={12} md={4}>
              <OfficerCards
                name='Abbhinav Jayaraman'
                position='Tech Lead, Fitness Tracker'
                img={abbhinavImg} bio="I am a Computer Science major, I like pizza so much I learned how to make it healthier and from home so chain pizza joints are dead to me :) "
                linkedIn='https://www.linkedin.com/in/abbhinav-jayaraman/'
                email='aj29927@utexas.edu' topAlignImage={false}/>
            </Grid>
            <Grid className="cardContainerFounder" item xs={12} sm={12} md={4}>
              <OfficerCards
                name='Annabel To'
                position='Tech Lead, Fitness Tracker'
                img={annabelImg} bio="I'm Annabel, an integrated Master's student studying Computer Science; my focus is on modeling climate systems using machine learning. Outside of the labs, I enjoy cooking and playing rogue-likes, and you might see me rollerblading around campus."
                linkedIn='https://www.linkedin.com/in/annabelto/'
                email='att959@utexas.edu' topAlignImage={false}/>
            </Grid>
            <Grid className="cardContainerFounder" item xs={12} sm={12} md={4}>
              <OfficerCards
                name='Sahana Ganapaty'
                position='Tech Lead, Mood Detector'
                img={sahanaImg} bio="I’m Sahana and I’m majoring in computer science. I’m interested in cybersecurity and AI. My hobbies outside of school include reading, visual arts, and journaling."
                linkedIn='linkedin.com/in/sahana-ganapathy/'
                email='sahanagana@utexas.edu' topAlignImage={false}/>
            </Grid>
            <Grid className="cardContainerFounder" item xs={12} sm={12} md={4}>
              <OfficerCards
                name='Nikhil Kalidasu'
                position='Tech Lead, Mood Detector'
                img={nikhilImg} bio="I’m a CS major working to solve complex problems across domains using AI and ML. My areas of experience include computational biology, software engineering, and aerospace"
                linkedIn='https://www.linkedin.com/in/nikhil-kalidasu'
                email='srikarnikhil.kaidasu@gmail.com' topAlignImage={false}/>
            </Grid>
            
            
          </Grid>
        </div>
        <div className="custom-shape-divider-bottom-1684840350">
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
                email='sahil.jain.1@outlook.com' topAlignImage={false}/>
            </Grid>
            <Grid className="cardContainerFounder" item xs={12} sm={12} md={6}>
              <OfficerCards
                name='Conrad Li'
                position='Founder'
                img={conradImg} bio="I am a recently graduated computer science, neuroscience, and chemistry major from UT Austin. I aspire to be a physician working at this intersection of medicine and technology."
                linkedIn='https://www.linkedin.com/in/conradfli/'
                email='conradliste@utexas.edu' topAlignImage={true}/>
            </Grid>
          </Grid>

        </div>

      </section>
      <section className='box2 box2-override2'>
        <div className='box1_5-textRight' id="embeddedMapHolder">
          <iframe className="embeddedGoogleMap" src="https://www.google.com/maps/place/Gates+Dell+Complex,+2317+Speedway,+Austin,+TX+78712/@30.2860334,-97.739347,16.46z/data=!4m6!3m5!1s0x8644b59c98544379:0x1a0c2b90248ca2ed!8m2!3d30.2862723!4d-97.7365931!16s%2Fg%2F1s04fpwff?entry=ttu&g_ep=EgoyMDI1MDEwOC4wIKXMDSoASAFQAw%3D%3D" ></iframe>
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
