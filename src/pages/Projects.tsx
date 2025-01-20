import React from 'react';
import {useState, useRef, useEffect} from 'react';
import '../styles/projects.css';
import ImageProjectCard from '../components/ImageProjectCard';
import ImageSlideCard from '../components/ImageSlideCard';
import Popup from '../components/Popup';
import Loader from '../components/Loader';

import pcrP from '../static/images/pcrP.jpg';
import chessP from '../static/images/chessP.jpg';
import droneP from '../static/images/droneP.jpg';
import fitnessP from '../static/images/fitnessP.jpg';
import musicP from '../static/images/musicP.jpg';
// import robotarmP from '../static/images/robotarmP.jpg';
import carP from '../static/images/carP.jpg'
import crackleP from '../static/images/crackleP.jpg'
import robotarmP from '../static/images/robotic_arm.png'
import texelArtsP from '../static/images/texelArtsP.png'
import traceP from '../static/images/traceP.png'
import placeholder from '../static/images/placeholder.png'


import pcr1 from '../static/images/slideshows/pcrSPic1.jpg';
import pcr2 from '../static/images/slideshows/pcrSPic2.jpg';
import pcr3 from '../static/images/slideshows/pcrSPic3.jpg';
import drone1 from '../static/images/slideshows/droneSPic1.jpg';
import drone2 from '../static/images/slideshows/droneSPic2.jpg';
import drone3 from '../static/images/slideshows/droneSPic3.jpg';
import chess1 from '../static/images/slideshows/chessSPic1.jpg';
import chess2 from '../static/images/slideshows/chessSPic2.jpg';
import chess3 from '../static/images/slideshows/chessSPic3.jpg';
import fitness1 from '../static/images/slideshows/fitnessSPic1.jpg';
import fitness2 from '../static/images/slideshows/fitnessSPic2.jpg';
import fitness3 from '../static/images/slideshows/fitnessSPic3.jpg';
import music1 from '../static/images/slideshows/musicSPic1.jpg';
import music2 from '../static/images/slideshows/musicSPic2.jpg';
import music3 from '../static/images/slideshows/musicSPic3.jpg';

import cv from '../static/images/cv.png';
import deepLearning from '../static/images/deepLearning.png';
import cvIntro from '../static/images/introToCV.png';
import mlIntro from '../static/images/introToML.png';
import rlIntro from '../static/images/introToRL.png';
import qL from '../static/images/qL.png';
import markov from '../static/images/markovModelFree.png';

import pcrVid from '../static/videos/pcrTest.gif';
import chessVid from '../static/videos/chessTest.gif';
import droneVid from '../static/videos/droneTest.gif';
import fitnessVid from '../static/videos/fitnessTest.gif';
import musicVid from '../static/videos/musicTest.gif';
// import robotarmVid from '../static/videos/robotarmTest.gif';
import robotArmVid from '../static/videos/arm_project.gif';
import smartMirrorVid from '../static/videos/smartMirrorVid.gif';
import carVid from '../static/videos/carVid.gif'


import projectTransHead from '../static/vectors/projectHeaderTransition.svg';
import temp from '../static/vectors/projectBackground.svg';
import { finished } from 'stream';

function Projects() {
  const [showPopup, setShowPopup] = useState(false);
  const [cardInfo, setCardInfo] = useState<{
    id: number;
    img: string;
    name: string;
    lName: string;
    members: string;
    desc: string;
    git: string;
    gantt: string;
    rect?: DOMRect;
  }>({
    id: 0,
    img: "",
    name: "Dummy Name",
    lName: "Dummy Last Name",
    members: "Dummy Members",
    desc: "Dummy Description",
    git: "https://github.com/dummy",
    gantt: "https://dummy.com/gantt",
    rect: new DOMRect(10, 20, 30, 40)
  });

  const [curFilter, setCurFilter] = useState([0]);

  //@ts-ignore
  const handleFilterChange = (newFilters ) => {
    handleResize();
    setCurFilter(newFilters);
    
  };

  const handleOpenPopup = (info : {
    id: number;
    img: string;
    name: string;
    lName: string;
    members: string;
    desc: string;
    git: string;
    gantt: string;
    }, ClientRect : DOMRect | undefined) => {
    setCardInfo({...info, rect: ClientRect});
    setShowPopup(true);
    console.log(ClientRect);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  const cardData =[
    {//PCR
      id: 0,
      img : pcrP,
      name:'PCR', 
      lName:"Angelica Sharma, Vishal Kantahraju", 
      members:"Pranav, David, Oscar, Nicky, Sarah, Anjali, Emerald, Namila",
      desc: 'We are automating PCR, a medical technique used to duplicate DNA. We have most individual components working, so this semester, we will focus on putting it all together, testing it with PCR, and writing a research paper to publish our robot',
      git:"https://github.com/ECLAIR-Robotics/PCR_Automation", 
      gantt:"https://docs.google.com/spreadsheets/d/1qEEfA078V_SaOaCuu-pih-EUJhn9BdbRNVKUYMlfKlY/edit?usp=sharing",
      finished:0,
      video: pcrVid,
      SliderData : [
        {
          image:
            pcr1
        },
        {
          image:
            pcr2
        },
        {
          image:
            pcr3
        }
      ] 
    },
    {//chess
      id: 1,
      img :chessP ,
      name:'Chess Teacher', 
      lName:"Savvy Chezhian, Hursh Jha, Anik Patel", 
      members:"Alan Tran, Hursh Jha, Savvy Chezhian, Siddharth Kolukuluri, Tanay Garg, Zach Li",
      desc: 'Chess Teacher is a robot that is designed to not only play a game of chess, but also teach the player how to improve, and adjust its style to allow the player to maximize their learning opportunities. We use an overhead camera coupled with computer vision to enable the robot to have an accurate understanding of the game, while using our own in house chess engine to play the game - enabling the robot to have a comprehensive understanding over every position.',
      git:"https://github.com/ECLAIR-Robotics/Chess_Teacher", 
      gantt:"https://docs.google.com/spreadsheets/d/1CbTH5hqcQgmXZnDkoqhe9yYVnaWjdlhSyqxfz_0mcEA/edit?usp=sharing",
      finished:0,
      video: chessVid,
      SliderData : [
        {
          image:
            chess1
        },
        {
          image:
            chess2
        },
        {
          image:
            chess3
        }
      ] 
    },
    {//autonomous drone
      id: 2,
      img :droneP ,
      name:'Autonomous Drone', 
      lName:"Carson Stark", 
      members:"Justin Sasek",
      desc: 'For our project, we’re programming a hexacopter drone to navigate and preform tasks autonomously using a suite of cameras and sensors. Missions may include indoor navigation and mapping, trash pickup, or military-style search and destroy. We use the python programming language, Robot Operating System, and ArduCopter firmware. No experience is necessary.',
      git:"https://github.com/ECLAIR-Robotics/Drone_Prooject", 
      gantt:"https://docs.google.com/spreadsheets/d/1HXZt8AaNJ8NgtD4zdfVyAx9iu88J-shJCg4XmMV2MSs/edit?usp=sharing",
      finished:1,
      video: droneVid,
      SliderData : [
        {
          image:
            drone1
        },
        {
          image:
            drone2
        },
        {
          image:
            drone3
        }
      ] 
    },
    {//music
      id: 3,
      img :musicP ,
      name:'Music Mood', 
      lName:"Sahana Ganapathy", 
      members:"Mehul Murali, Seungwon Lee, Nikhil Kalidasu, Nidhi Thippana, Jason Ren, Sarah Wang-Zhou",
      desc: 'We trained and fine tuned a large language model to associate emotions with a song given  it’s lyrics, and used the model to gather emotion data on Spotify profiles/playlists. Our next steps are integrating this model into a usable application and further exploring its capabilities.',
      git:"https://github.com/ECLAIR-Robotics/Song-Analysis", 
      gantt:"https://docs.google.com/spreadsheets/d/1X8J35_nY-nvYd4q41Xf4_2WzTLX5uL0LTaCeWgZsZ2c/edit?usp=sharing",
      finished:1,
      video: musicVid,
      SliderData : [
        {
          image:
            music1
        },
        {
          image:
            music2
        },
        {
          image:
            music3
        }
      ] 
    },
    {//robot arm
      id: 4,
      img : robotarmP ,
      name:'Robotic Arm', 
      lName:"Sahil Jain", 
      members:"Conrad Li",
      desc: 'By utilizing a simple robotic arm, we aim to implement inverse kinematics and more advanced software features to further our understanding of robotic arm construction.',
      git:"https://github.com/ECLAIR-Robotics/RoboticArm-", 
      gantt:"https://github.com/ECLAIR-Robotics/RoboticArm555-",
      finished:1,
      video: robotArmVid,
    },
    {//fitness tracker
      id: 5,
      img :fitnessP ,
      name:'Fitness Tracker', 
      lName:"Kyrylo Boiko", 
      members:"Abbhinav Jayaraman and Annabel To",
      desc: 'We worked on creating a smart fitness band that would assist gym goers with tracking reps and measuring their form. We used positional & movement data from an IMU sensor and an ML model to transfer findings. It can be further developed to provide real-time suggestions based on most common form errors that are similar to user’s movement patterns.',
      git:"https://github.com/ECLAIR-Robotics/fitness-tracker", 
      gantt:"https://docs.google.com/spreadsheets/d/19foBPCCLEiLqI4vJ4cUKgb43mY644ruY5lhwpawIxis/edit?usp=sharing",
      finished:1,
      video: fitnessVid,
      SliderData : [
        {
          image:
            fitness1
        },
        {
          image:
            fitness2
        },
        {
          image:
            fitness3
        }
      ] 
    },
    {//smart mirror
      id: 6,
      img :"https://drive.google.com/uc?export=view&id=18k4112Of06u9Yb42pT8NL_o8Nk-GgEny" ,
      name:'Smart Mirror', 
      lName:"Sahil Jain", 
      members:"Conrad Li",
      desc: 'We aim to modify a Samsung infrared TV in order to make a functional smart mirror capable of interacting with a user and performing basic utility functions.',
      git:"https://github.com/ECLAIR-Robotics/Smart-Mirror", 
      gantt:"https://docs.google.com/spreadsheets/d/1cCVkAxT6YRqcerKprb5HxVsnR_jYmP8Ai7Nvbnz0M0I/edit?usp=sharing",
      finished:1,
      video: smartMirrorVid,
    },
    {//TRACE
      id: 10,
      img : traceP,
      name: "TRACE",
      lName: "Arnav Joshi, Rizky Pratama",
      members: "",
      desc: "TRACE is a project to track and control control the position of a ball on a tilting platform. The goals of this project are to exhibit a basic control system with two degrees of freedom that also implements computer vision. This will help develop member skills with CV, controls, simulation, and hardware design.",
      git: "",
      gantt: "",
      finished: 0,
      video: "",
      SliderData : []
    },
    {//autonomous car
      id: 7,
      img : carP,
      name:'Autonomous Car', 
      lName:"Sahana Ganapathy, Nikhil Kalidasu", 
      members:"Alekxander, Marcus, Diego, Jana, Masamu, Jerry, Noah",
      desc: 'The goal of the autonomous car project is to build a fully autonomous RC car that has support for natural language intake and feedback. Overall, we are trying to establish a greater bond of trust between the user and the car, something that the industry is still working on today.',
      git: "https://github.com/ECLAIR-Robotics/nlp-car", 
      gantt:"",
      finished:0,
      video: carVid,
      SliderData : [] 

    },
    
    {//CRACKLE
      id: 8,
      img : crackleP,
      name:'CRACKLE', 
      lName:"Tanay Garg", 
      members:"",
      desc: "Crackle's goal is to emulate DUM-E from Iron Man. This means fully resolving voice commands spoken into dynamically generated plans using GPT. The finished product will be able to perform any physically possible task requested by a user",
      git:"https://github.com/ECLAIR-Robotics/crackle", 
      gantt:"",
      finished:0,
      video: "",
      SliderData : [] 

    },
    {//Texel Arts
      id: 9,
      img : texelArtsP,
      name:'Texel Arts', 
      lName:"Umer Khan",
      members:"",
      desc: 'The goal of the texel arts project is to create an animation library that takes in normal video input and converts them to GLTF animation files. We currently have a successfully implemented model that produces 3D points in space, and our next steps are using blender in which we can make smoother animations. This usage can one day be used for smoother video game interactivity, such as the Wii or Kinect interfaces',
      git:"", 
      gantt:"",
      finished:0,
      video: "",
      SliderData : [] 
    },
    
    // {//Hydroponics

    // },
  ];

  const MLData = [
    {
      id: 100,
      name : 'Computer Vision and Deep Q Learning',
      img : cv ,
      link: 'https://docs.google.com/presentation/d/1E0I_jpDuo3InZgVY09Y_CuMULSV6ivXKMwIHtpYaibI/edit?usp=sharing'
    },
    {
      id : 99,
      name : 'Deep Learning',
      img : deepLearning ,
      link: 'https://docs.google.com/presentation/d/14xJvQWdyEbCfhtOw9rDB0D9fre4sfTTEozrbnPKXTdQ/edit?usp=sharing'
    },
    {
      id : 98,
      name : 'Intro to Computer Vision',
      img : cvIntro ,
      link: 'https://docs.google.com/presentation/d/13ZllB7QOsSzvGN76JujV0NKRovjCL5EI1GnVKJK1Bss/edit?usp=sharing'
    },
    {
      id : 97,
      name : 'Intro to Machine Learning',
      img : mlIntro,
      link : 'https://docs.google.com/presentation/d/1faTl-GikKtQH4NQ8ZQqSYvJYA-5l-EdlEbioTP6G0kI/edit?usp=sharing'
    },
    {
      id : 96,
      name : 'Intro to Reinforcement Learning',
      img : rlIntro,
      link : 'https://docs.google.com/presentation/d/1z2ItVMJxIbRFmlTMc_EnbV_Rkl_XM0YXgNn0G_MD-FY/edit?usp=sharing'
    },
    {
      id : 95,
      name : 'Q-Learning',
      img : qL,
      link : 'https://docs.google.com/presentation/d/1VEJUk3_Sf1wC-RRmQxsi5HooLLMD0V_doVKPRyrr9W0/edit?usp=sharing'
    },
    {
      id : 94,
      name : 'Markov Decision Processes & Model-Free Methods',
      img : markov ,
      link: 'https://docs.google.com/presentation/d/1mCNnuxMEcQ9zPQJO4LZ14VRzMCkMAqkjmGqCErXx26s/edit?usp=sharing'
    }
  ];

  function handleSlideClick(link : string | URL | undefined): void {
    window.open(link, '_blank');
  }

  const filteredCardData = cardData.filter(card => curFilter.includes(card.finished));
  const cardLocations = useRef<Array<HTMLDivElement | null>>([]);

  useEffect(() => {
    cardLocations.current = cardLocations.current.slice(0, cardData.length);
  }, [cardData]);

  const [pBGLoaded, setPBGLoaded] = useState(false);
  const pBGDivRef = useRef<HTMLDivElement>(null);
  const pElementRef = useRef<HTMLImageElement>(null);
  
  const[resize, isResized] = useState(false);

  useEffect(() => {
    // const bgDiv : HTMLDivElement | null = document.querySelector('.projectPageBelowHeader');
    // bgDiv?.addEventListener('load', pBGLateLoadWrapper);
    if (pBGDivRef.current && pElementRef.current) {
      const divHeight = pBGDivRef.current.clientHeight;
      pElementRef.current.style.height = `${divHeight}px`;
    }
    // setPBGLoaded(true);
    // if (bgDiv && bgDiv.style.backgroundImage !== "") {
    //   setPBGLoaded(true);
    // } else {
      
    // }
  }, [resize]);

  
  function handleResize() {
    // setPBGLoaded(false);
    isResized(!resize);
  }
  window.addEventListener('resize', handleResize);
 
  function wrapperFunction() {
    setPBGLoaded(true);
  }

  async function handleLoad() {
    setTimeout(wrapperFunction, 200)
    
  }

  return (
    <div className={`everything `}>
      <div className='projectPageHeading'>
        What We Do 
      </div>
      <div className='projectHeaderTrans' style={{backgroundImage: `url(${projectTransHead})`, height: '10rem', backgroundPosition: 'center', backgroundSize: '200vw'}}></div>
      {/* <div className='projectPageBelowHeader' style={{backgroundSize: "auto 100%", height: "fit-content", backgroundRepeat: "repeat-x", backgroundPosition: 'top left', marginTop:'-1px'}} ref={pBGDivRef}> */}
      <div className='projectPageBelowHeader' ref={pBGDivRef}>
        <img className='projectBackground' ref={pElementRef}  src={temp} onLoad={handleLoad}></img>
        <h1 className = 'projectsTitle'>Projects</h1>
        <div className='filterContainer'>
          <ul className='filterOptions'>
            <li className={`filterOption  ${((curFilter.length === 1) && curFilter.includes(0))? 'currentSetFilter' : ""}     `} onClick={() => handleFilterChange([0])}>In-Progress</li>
            <li className={`filterOption  ${((curFilter.length === 1) && curFilter.includes(1))? 'currentSetFilter' : ""}     `} onClick={() => handleFilterChange([1])}>Completed</li>
            <li className={`filterOption ${(curFilter.length === 2) ? 'currentSetFilter' : ""}`} onClick={() => handleFilterChange([0, 1])}>All</li>
          </ul>
        </div>
        <div className='gridContainer'>
          <div className='projectCards'>
            {filteredCardData.map((card, index) => (
              <ImageProjectCard
                key = {card.id}
                name = {card.name}
                img = {card.img}
                lName  ={card.lName}
                members = {card.members}
                desc = {card.desc}
                git = {card.git}
                gantt = {card.gantt}
                vid = {card.video}
                ref={el => cardLocations.current[index] = el}
                onOpenPopup={() => handleOpenPopup(card, cardLocations.current[index]?.getBoundingClientRect())}
              />
            ))}
          </div>
        </div>
        <Popup vis ={showPopup} onClose={handleClosePopup} cardInfo={cardInfo} />
      <div style = {{paddingBottom:"10%"}}/>
      </div> 
        <svg style={{ margin: 0, padding: 0, display:"block", fontSize:0, marginTop:'-5px' }} preserveAspectRatio="xMidYMax slice" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2000.4 78.7"><g fill="#2d3549"><rect width="2000.4" height="78.7" fill="#191e28" /><path d="M0 59V0h2000v61c-11-1-22-6-32-13-10-6-19-14-30-20a90 90 0 00-91 4c-10 6-18 15-28 21a80 80 0 01-68 8 80 80 0 01-68-8c-10-6-19-15-29-21a90 90 0 00-91-4l-29 20c-10 6-22 12-34 13a33 33 0 01-4-1v1c-12-1-23-6-32-13l-30-20a90 90 0 00-91 4c-10 6-18 15-28 21a80 80 0 01-69 8 80 80 0 01-68-8c-10-6-18-15-28-21a90 90 0 00-91-4c-11 6-20 14-30 20s-21 12-33 13a33 33 0 01-4-1v1c-12-1-23-6-33-13l-29-20a90 90 0 00-92 4c-9 6-18 15-28 21a80 80 0 01-68 8 80 80 0 01-68-8c-10-6-18-15-28-21a89 89 0 00-91-4c-11 6-20 14-30 20l-6 4c-8 5-17 8-27 9a33 33 0 01-5-1v1c-11-1-22-6-32-13-10-6-19-14-30-20l-3-1a87 87 0 00-35-10 90 90 0 00-43 9 81 81 0 00-10 6l-8 6-20 15a80 80 0 01-68 8 80 80 0 01-68-8l-20-15-8-6a82 82 0 00-11-6 90 90 0 00-44-8 87 87 0 00-35 9l-2 1-29 20A79 79 0 010 59z" opacity=".75"/><path d="M1523 0h454a33 33 0 01-16 20h-2a33 33 0 01-22 2 22 22 0 01-16 15 15 15 0 01-6 5 22 22 0 01-13 3 52 52 0 01-14-4l-11-5-35-17a75 75 0 00-51-2 157 157 0 00-41 27 151 151 0 00-46-28c-15-4-31-2-45 3-13 5-24 11-36 17l-11 5a52 52 0 01-13 4 22 22 0 01-14-3 15 15 0 01-6-5 22 22 0 01-16-15 33 33 0 01-22-2h-1a33 33 0 01-17-20z" opacity=".5"/><path d="M1496 0h504v13c-6 11-20 16-31 12a37 37 0 01-10-5c-7-5-14-13-24-15-12-3-24 4-34 12-8 6-15 14-24 19a43 43 0 01-7 3c-14 4-29 1-42-5-11-5-21-12-32-18l-5-3c-13-6-27-10-41-7-14-3-28 1-41 7l-5 3c-11 6-21 13-32 18-13 6-28 9-42 5a43 43 0 01-7-4c-9-4-16-12-24-18-10-8-22-15-34-12-10 2-17 10-24 15a37 37 0 01-10 5c-14 5-31-4-34-19l-1-6z"/><circle cx="1940.6" cy="49.4" r="8.5"/><circle cx="1841.1" cy="46.1" r="5.2"/><circle cx="1624.5" cy="46.1" r="5.2"/><circle cx="1564.4" cy="42" r="7.3"/><circle cx="1894" cy="72.9" r="5.8" opacity=".5"/><circle cx="1679.1" cy="72.9" r="5.8" opacity=".5"/><circle cx="1750" cy="72.9" r="2.8" opacity=".75"/><path d="M1019 0h454a33 33 0 01-17 20h-1a33 33 0 01-22 2 22 22 0 01-17 15 15 15 0 01-5 5 22 22 0 01-14 3 52 52 0 01-13-4l-11-5-36-17a75 75 0 00-50-2 157 157 0 00-41 27 151 151 0 00-46-28c-15-4-31-2-46 3l-35 17-11 5a52 52 0 01-14 4 22 22 0 01-13-3 15 15 0 01-6-5 22 22 0 01-17-15 33 33 0 01-22-2h-1a33 33 0 01-16-20z" opacity=".5"/><path d="M992 0h504v13c-6 11-20 16-32 12a37 37 0 01-9-5c-8-5-15-13-24-15-12-3-25 4-35 12-7 6-15 14-23 19a43 43 0 01-7 3c-14 4-29 1-42-5-11-5-21-12-32-18l-5-3c-13-6-27-10-41-7-14-3-29 1-41 7l-5 3c-11 6-21 13-33 18-13 6-28 9-41 5a43 43 0 01-7-4c-9-4-16-12-24-18-10-8-22-15-35-12-9 2-16 10-24 15a37 37 0 01-9 5c-14 5-31-4-34-19l-1-6z"/><circle cx="1436.3" cy="49.4" r="8.5"/><circle cx="1336.8" cy="46.1" r="5.2"/><circle cx="1120.3" cy="46.1" r="5.2"/><circle cx="1060.2" cy="42" r="7.3"/><circle cx="1389.7" cy="72.9" r="5.8" opacity=".5"/><circle cx="1174.8" cy="72.9" r="5.8" opacity=".5"/><circle cx="1245.7" cy="72.9" r="2.8" opacity=".75"/><path d="M514 0h455a33 33 0 01-17 20h-1a33 33 0 01-22 2 22 22 0 01-17 15 15 15 0 01-6 5 22 22 0 01-13 3 52 52 0 01-13-4l-12-5-35-17a75 75 0 00-50-2 157 157 0 00-41 27 150 150 0 00-46-28c-15-4-31-2-46 3l-36 16-11 5a52 52 0 01-13 4 22 22 0 01-14-2 15 15 0 01-5-5 22 22 0 01-17-15 33 33 0 01-22-2h-1a33 33 0 01-17-20z" opacity=".5"/><path d="M488 0h504v13c-6 11-20 16-32 12a37 37 0 01-9-5c-8-5-15-13-24-15-12-3-25 4-35 12-8 6-15 14-24 18a43 43 0 01-7 4c-13 4-28 1-41-5l-33-18-4-3c-13-6-28-10-42-7-13-3-28 1-41 7l-4 3-33 18c-13 6-28 9-41 5a43 43 0 01-8-4c-8-4-16-12-23-18-10-8-23-15-35-12-9 2-16 10-24 15a37 37 0 01-9 5c-14 5-31-4-35-19V0z"/><circle cx="932" cy="49.4" r="8.5"/><circle cx="832.6" cy="46.1" r="5.2"/><circle cx="616" cy="46.1" r="5.2"/><circle cx="555.9" cy="42" r="7.3"/><circle cx="885.4" cy="72.9" r="5.8" opacity=".5"/><circle cx="670.6" cy="72.9" r="5.8" opacity=".5"/><circle cx="741.4" cy="72.9" r="2.8" opacity=".75"/><path d="M10 0h454a33 33 0 01-16 20h-2a33 33 0 01-21 2 22 22 0 01-17 15 15 15 0 01-6 5 22 22 0 01-13 3 52 52 0 01-14-4l-11-5-35-17a75 75 0 00-50-2 157 157 0 00-41 27 150 150 0 00-47-28c-14-4-31-2-45 3l-36 16-11 5a52 52 0 01-13 4 22 22 0 01-14-2 15 15 0 01-5-5 22 22 0 01-17-15 33 33 0 01-22-2h-1A33 33 0 0110 0z" opacity=".5"/><path d="M0 24V0h488v13c-7 11-20 16-32 12a37 37 0 01-10-5c-7-5-14-13-23-15-13-3-25 4-35 12h-1c-7 7-14 14-23 18a43 43 0 01-7 4c-10 3-21 2-31-1a84 84 0 01-10-4c-12-5-22-12-33-18l-5-3c-12-6-27-10-41-7-14-3-28 1-41 7l-5 3c-11 6-21 13-32 18a83 83 0 01-9 4c-11 3-22 4-33 1a43 43 0 01-7-4c-8-4-15-11-23-18h-1C77 9 64 2 52 5c-9 2-16 10-24 15a37 37 0 01-10 5 26 26 0 01-18-1z"/><circle cx="427.8" cy="49.4" r="8.5"/><circle cx="328.3" cy="46.1" r="5.2"/><circle cx="111.7" cy="46.1" r="5.2"/><circle cx="51.6" cy="42" r="7.3"/><circle cx="381.1" cy="72.9" r="5.8" opacity=".5"/><circle cx="166.3" cy="72.9" r="5.8" opacity=".5"/><circle cx="237.2" cy="72.9" r="2.8" opacity=".75"/></g></svg>
      <div className='projectPageBelowHeader' style={{backgroundImage: `url(${temp})`, backgroundSize: "auto 100%", height: "fit-content", backgroundRepeat: "repeat-x", backgroundPosition: 'top left', marginTop:'-1px'}}>
        <h1 className = 'projectsTitle' style={{paddingTop:'7rem', paddingBottom:'5rem'}}>Machine Learning Resources</h1>
        <div className='gridContainer'>
          <div className='projectCards'>
            {MLData.map((card, index) => (
              <ImageSlideCard
                key = {card.id}
                name = {card.name}
                img = {card.img}
                openSlides={() => handleSlideClick(card.link)}
              />
            ))}
          </div>
        </div>
        <Popup vis ={showPopup} onClose={handleClosePopup} cardInfo={cardInfo} />
        <div style = {{paddingBottom:"10%"}}/>
      </div> 
      <Loader bGLoaded={pBGLoaded}/>
    </div>
  )
}

export default Projects
