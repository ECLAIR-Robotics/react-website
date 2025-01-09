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

      {/* section 1 */}
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

      <section className='box2 box2-override2'>
        <div className='box1_5-textRight' id="infoImageContainer">
          <img className="infoImage" src={headerImage_1}></img>
        </div>
        <div className="box2-encloser">
          <div className='box1_5-textLeft' id='boldText'>
            Situated at the Anna Hiss Gym at UT Austin - A leading Robotics and AI Institution
          </div>
          <div className='box1_5-textRight' id="informationText">
            AT UT Austin, there is wide range of robotics research from surgical robotics to autonomous driving to artifical assistants. In ECLAIR, students can take advantage of all the resources UT Austin to explore their interests in robotics.
          </div>

        </div>
      </section>

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

      {/* Section 3 */}
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
      {/* <section className='box2 box2-override4'
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
