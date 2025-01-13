import React from 'react';
import Logo from '../static/images/logo/ECLAIR_logo2.png';
import '../styles/app.css';
import ECLAIRButton from '../components/ECLAIRButton';
import Loader from '../components/Loader';
import { Slide, Fade } from '@mui/material';
import YoutubeEmbed from '../components/YoutubeEmbed';
import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import wavesHeader from '../static/vectors/waves-header.svg';
import headerBackground from '../static/vectors/polygon-header.svg';
import headerImage_1 from '../static/images/drone_header.png';
import headerImage_2 from '../static/images/eclair_group.png';
import CalendarEmbed from '../components/CalendarEmbed';
import CurrentSponsorRow from '../components/CurrentSponsorRow';

function Homepage() {
  const [screenSize, setScreenSize] = useState(getCurrentDimension());

  function getCurrentDimension() {
    return {
      width: window.innerWidth,
      height: window.innerHeight
    }
  }

  useEffect(() => {
    const updateDimension = () => {
      
      setScreenSize(getCurrentDimension())
      console.log(screenSize.width);
    }
    window.addEventListener('resize', updateDimension);

    return (() => {
      window.removeEventListener('resize', updateDimension);
    })
  }, [])

  const handleClick = () => {
    navigate('/projects');
  }

  const navigate = useNavigate();

  const [hBGLoaded, setHBGLoaded] = useState(false);
  const hBGDivRef = useRef<HTMLDivElement>(null);
  const hElementRef = useRef<HTMLImageElement>(null);

  const [resize, isResized] = useState(false);

  useEffect(() => {
    if (hBGDivRef.current && hElementRef.current) {
      const divHeight = hBGDivRef.current.clientHeight;
      hElementRef.current.style.height = `${divHeight}px`;
    }
  }, [resize]);


  function handleResize() {
    // setHBGLoaded(false);
    isResized(!resize);
  }
  window.addEventListener('resize', handleResize);

  function wrapperFunction() {
    setHBGLoaded(true);
  }

  async function handleLoad() {
    setTimeout(wrapperFunction, 0)

  }
  return (

    <>

      {/* Section 1 */}
      <section >
        <div className='box2' style={{
          paddingTop: '15em',
          paddingBottom: '15em',
          background: `url(${headerBackground})  center center no-repeat `,
          backgroundSize: 'cover',
        }} >
          <img className='contactBackground' ref={hElementRef} src={headerBackground} onLoad={handleLoad}></img>

          <div className='box1-left'>
            <Fade in={true} timeout={2000}>
              <img className='left-img' src={Logo} alt='logo' />
            </Fade>
          </div>
          <div className='header-right'>
            <Fade in={true} timeout={1000}>
              <Slide direction="left" in={true} mountOnEnter unmountOnExit>
                <h2 className='header-text'>Our mission is to drive innovation in AI and robotics at the undergraduate level.</h2>
              </Slide>
            </Fade>
            <div className='eclairButton-container'>
              <ECLAIRButton handleClick={handleClick} text="PROJECTS" radius='1em' />
            </div>
          </div>

          <div className="custom-shape-divider-bottom-1684597940">
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M741,116.23C291,117.43,0,27.57,0,6V120H1200V6C1200,27.93,1186.4,119.83,741,116.23Z" className="shape-fill"></path>
            </svg>
          </div>
        </div>

      </section>

      {/* Section 2 */}
      <section className='box2 box2-override'>
        <div className='box1_5-textLeft' id="informationHeading"> Geared Toward Helping Students Pursue Their Passion for Robotics </div>
        <div className='box1_5-textRight' id="informationSubtext">
          The Engineering and Computational Learning of Artificial Intelligence in Robotics (ECLAIR) is a club at UT Austin dedicated to helping all robot-loving students to transform their passionate robotics ideas into reality. We provide the robotics parts and teach members state-of-the-art machine learning techiniques such as neural networks and reinforcement learning to give students the ability to pursue their robotics projects. If you have a cool robot you want to build, come join us!
        </div>
      </section>
      {/* Section 3*/}
      <section className='box2 box2-override2'>
        <div className='box1_5-textRight' id="infoImageContainer">
          <img className="infoImage" src={headerImage_1}></img>
        </div>
        <div className="box2-encloser">
          <div className='box1_5-textLeft' id='boldText'>
            Situated at the Gates-Dell Complex at UT Austin - A leading Robotics and AI Institution
          </div>
          <div className='box1_5-textRight' id="informationText">
            Come find us every Monday and Thursday from 6 to 8 PM at the Gates-Dell Complex at UT Austin. Here, there is a wide range of robotics research, from surgical robotics to autonomous driving to artificial assistants. In ECLAIR, students can take advantage of all the resources at UT to explore their interests in robotics.
          </div>

        </div>
      </section>

      {/* Section  4*/}
      <section className='box2 box2-override3'>
        <div className='box2-encloser'>
          <div className='box1_5-textLeft' id='boldText'>
            Our Members enjoy access to State of the Art Facilities!
          </div>
          <div className='box1_5-textRight' id="informationText">
            Partnering with the Anna Hiss Gymnasium and UT Austin Makerspace, ECLAIR helps provide resources that students need to create and test their AI algorithms on physical robots. Our members are free to pitch any project they want to build and get it financed by ECLAIR.
          </div>
        </div>
        <div className='box1_5-textRight' id="infoImageContainer">
          <img className="infoImage" src={headerImage_2}></img>
        </div>
      </section>
      {/* Section 5*/}
      <section className='box2 box2-override' style={{ marginTop: '-1px' }}>
        <div className='box1_5-textLeft' id="aboutus-howtoJoin"> How to join us! </div>
        <div className='joinInstructions'>
          <div>Feel free to drop in on one of our meetings!</div>
          <div>
            Or join our discord server to and reach out to one of our officers to get more information!
          </div>
          <div>
            <a href='https://discord.gg/tgbvpCjNgV' target={'_blank'}>
              {/* <img className='discordLogo' src={discordPng} /> */}
              <svg className='discordSVG'>
                <defs>
                  <style>{`.cls-1{fill:#fff;}`}</style>
                </defs>
                <path className="cls-1"
                  d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,32.65-1.71,56.6.54,80.21h0A105.73,105.73,0,0,0,32.71,96.36,77.7,77.7,0,0,0,39.6,85.25a68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2a75.57,75.57,0,0,0,64.32,0c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.1A105.25,105.25,0,0,0,126.6,80.22h0C129.24,52.84,122.09,29.11,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53s5-12.74,11.43-12.74S54,46,53.89,53,48.84,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.25,60,73.25,53s5-12.74,11.44-12.74S96.23,46,96.12,53,91.08,65.69,84.69,65.69Z" />
              </svg>
            </a>
          </div>
        </div>

      </section>
      {/* Section 6*/}
      <section className='box2 box2-override4'
        style={{
          background: `url(${wavesHeader})  center center no-repeat `,
          backgroundSize: 'cover',
        }}
      >
        <div className="custom-shape-divider-top-1681028846" style={{ marginTop: '-1px' }}>
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" className="shape-fill"></path>
            <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" className="shape-fill"></path>
            <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" className="shape-fill"></path>
          </svg>
        </div>
        <div className="animatedBlob"> {/* This entire div is just a vector that contains the blob, a rectangle, and text at the bottom of the homepage */}
          <svg id="visual" viewBox={`0 0 900 600`} width={`${(screenSize.width / 2) + 100}`} height={`${(screenSize.height / 1.5)+50}`} xmlns="http://www.w3.org/2000/svg"
            version="1.1">
            <defs>
              <linearGradient id="myGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#c675ff" />
                <stop offset="100%" stopColor="#0050c7" />
              </linearGradient>
            </defs>
            <defs>
              <filter id="shadow">
                <feDropShadow dx="2" dy="2" stdDeviation="2" floodOpacity="0.5" />
              </filter>
            </defs>
            <g transform="translate(425.17812071839586 297.4107165965745)">
              <path id='pathBefore'
                d="M140.5 -95C189.2 -50.9 240.9 7.9 239 69.9C237.1 131.9 181.7 197 118.2 216.5C54.7 236.1 -16.9 209.9 -56.2 170.4C-95.6 130.9 -102.6 78 -124.2 18.3C-145.8 -41.3 -182 -107.6 -163.7 -144.8C-145.4 -182 -72.7 -190 -13.4 -179.3C45.9 -168.6 91.7 -139.2 140.5 -95"
                transform='translate(20,0) scale(1.2)'
                fill="url(#myGradient)">
              </path>
              <rect x="-130" y="-50" rx="5" ry="5" width={270} height={65} fill='white' filter="url(#shadow)" />
              <text x="-130" y="10" fill="url(#myGradient)" className='vectorText'>
                ECLAIR
              </text>
            </g>
          </svg>
        </div>
        <div className='box2-right'>
          <YoutubeEmbed />
        </div>
      </section>
      
      {/* Section 7*/}
      <section className='box2 box2-override4'
        style={{
          backgroundSize: 'cover',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          paddingTop: '2px',
        }}
      >
        <div className='box1_5-textCenter' id='boldText'> Our Sponsors </div>
        <CurrentSponsorRow/>
      </section>


      {/*{/* Section 8 }
      <section className='box2 box2-override4'
        style={{
          background: `url(${wavesHeader})  center center no-repeat `,
          backgroundSize: 'cover',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',

        }}
      >
        <CalendarEmbed />
      </section> */}
      <Loader bGLoaded={hBGLoaded} />
    </>
  );
}

export default Homepage;
