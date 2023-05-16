import React from 'react';
import {useState, useRef, RefObject, useEffect, createRef} from 'react';
import '../styles/projects.css';
// import ProjectCard from '../components/ProjectCard';
import ImageProjectCard from '../components/ImageProjectCard';
import ImageSlideCard from '../components/ImageSlideCard';
import Popup from '../components/Popup';
import { Box } from '@mui/material';

import pcrP from '../static/images/pcrP.jpg';
import chessP from '../static/images/chessP.jpg';
import droneP from '../static/images/droneP.jpg';
import fitnessP from '../static/images/fitnessP.jpg';
import musicP from '../static/images/musicP.jpg';
import robotarmP from '../static/images/robotarmP.jpg';

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
import robotarmVid from '../static/videos/robotarmTest.gif';

import projectTransHead from '../static/vectors/projectHeaderTransition.svg';
import projectNormalBG4 from '../static/vectors/projectNormalBG4.png';

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

  const [curFilter, setCurFilter] = useState([0, 1]);

  //@ts-ignore
  const handleFilterChange = (newFilters ) => {
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
    {
      id: 0,
      img : pcrP,
      name:'PCR', 
      lName:"Sahil Jain, Conrad the Condad", 
      members:"Pranav, David, Oscar, Nicky, Sarah, Angelica Shawarma, Anjali Agrawal, Emerald, Namila",
      desc: 'By utilizing how cracked each of these individuals are, this project is a simple three step plan. The first step is curing cancer. The second is bringing about world peace. And the last is creating a new world order in which AI rules supreme.',
      git:"apple.com", 
      gantt:"costco.com",
      finished:0,
      video: pcrVid,
    },
    {
      id: 1,
      img :chessP ,
      name:'Chess Teacher', 
      lName:"Vishal Kantharaju", 
      members:"Alan Tran, Hursh Jha, Savvy Chezhian, Siddharth Kolukuluri, Tanay Garg, Zach Li",
      desc: 'By utilizing how cracked each of these individuals are, this project is a simple three step plan. The first step is curing cancer. The second is bringing about world peace. And the last is creating a new world order in which AI rules supreme.',
      git:"apple.com", 
      gantt:"costco.com",
      finished:0,
      video: chessVid,
    },
    {
      id: 2,
      img :droneP ,
      name:'Autonomous Drone', 
      lName:"Carson", 
      members:"Elon Musk, Bill Gates, Michael Dell, Greg Tanyk, Shawarma Anjelika, Vi Herma",
      desc: 'By utilizing how cracked each of these individuals are, this project is a simple three step plan. The first step is curing cancer. The second is bringing about world peace. And the last is creating a new world order in which AI rules supreme.',
      git:"apple.com", 
      gantt:"costco.com",
      finished:0,
      video: droneVid,
    },
    {
      id: 3,
      img :musicP ,
      name:'Music Mood', 
      lName:"Sahana Ganapathy", 
      members:"Mehul Murali, Seungwon Lee, Nikhil Kalidasu, Nidhi Thippana, Jason Ren, Sarah Wang-Zhou",
      desc: 'By utilizing how cracked each of these individuals are, this project is a simple three step plan. The first step is curing cancer. The second is bringing about world peace. And the last is creating a new world order in which AI rules supreme.',
      git:"apple.com", 
      gantt:"costco.com",
      finished:1,
      video: musicVid,
    },
    {
      id: 4,
      img : robotarmP ,
      name:'Robotic Arm', 
      lName:"Sahil Jain", 
      members:"Elon Musk, Bill Gates, Michael Dell, Greg Tanyk, Shawarma Anjelika, Vi Herma",
      desc: 'By utilizing how cracked each of these individuals are, this project is a simple three step plan. The first step is curing cancer. The second is bringing about world peace. And the last is creating a new world order in which AI rules supreme.',
      git:"apple.com", 
      gantt:"costco.com",
      finished:1,
      video: chessVid,
    },
    {
      id: 5,
      img :fitnessP ,
      name:'Fitness Tracker', 
      lName:"Kyrylo", 
      members:"Elon Musk, Bill Gates, Michael Dell, Greg Tanyk, Shawarma Anjelika, Vi Herma",
      desc: 'By utilizing how cracked each of these individuals are, this project is a simple three step plan. The first step is curing cancer. The second is bringing about world peace. And the last is creating a new world order in which AI rules supreme.',
      git:"apple.com", 
      gantt:"costco.com",
      finished:0,
      video: fitnessVid,
    },
    {
      id: 6,
      img :"https://drive.google.com/uc?export=view&id=18k4112Of06u9Yb42pT8NL_o8Nk-GgEny" ,
      name:'Smart Mirror', 
      lName:"Sahil Jain", 
      members:"Elon Musk, Bill Gates, Michael Dell, Greg Tanyk, Shawarma Anjelika, Vi Herma",
      desc: 'By utilizing how cracked each of these individuals are, this project is a simple three step plan. The first step is curing cancer. The second is bringing about world peace. And the last is creating a new world order in which AI rules supreme.',
      git:"apple.com", 
      gantt:"costco.com",
      finished:1,
      video: chessVid,
    }
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

  return (
    <div className='everything'>
      <div className='projectPageHeading'>
        What We Do 
      </div>
      <div className='projectHeaderTrans' style={{backgroundImage: `url(${projectTransHead})`, height: '10rem', backgroundPosition: 'center', backgroundSize: '200vw'}}></div>
      <div className='projectPageBelowHeader' style={{backgroundImage: `url(${projectNormalBG4})`, backgroundSize: "200% 100%", height: "100%", backgroundRepeat: "no-repeat", backgroundPosition: 'center'}}>
        <h1 className = 'projectsTitle'>Projects</h1>
        <div className='filterContainer'>
          <ul className='filterOptions'>
            <li className={`filterOption ${(curFilter.length === 2) ? 'currentSetFilter' : ""}`} onClick={() => handleFilterChange([0, 1])}>All</li>
            <li className={`filterOption  ${((curFilter.length === 1) && curFilter.includes(0))? 'currentSetFilter' : ""}     `} onClick={() => handleFilterChange([0])}>In-Progress</li>
            <li className={`filterOption  ${((curFilter.length === 1) && curFilter.includes(1))? 'currentSetFilter' : ""}     `} onClick={() => handleFilterChange([1])}>Completed</li>
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
        <Box sx = {{paddingBottom:"10%"}}/>
      </div>
      <div className="shapedividers_com-7601" style={{ zIndex:'100'}}></div>
      <div style={{backgroundImage:`url(${projectNormalBG4})`,  backgroundSize: "200% 100%", height: "100%", backgroundRepeat: "no-repeat", backgroundPosition: 'center', zIndex: '0'}}>
      <div className='projectPageBelowHeader' style={{backgroundImage: `url(${projectNormalBG4})`, backgroundSize: "200% 100%", height: "100%", backgroundRepeat: "no-repeat", backgroundPosition: 'center'}}>
        <h1 className = 'projectsTitle' style={{paddingTop:'7rem', paddingBottom:'5rem'}}>Machine Learning Resources</h1>
        {/* <div className='popupDivider'></div> */}
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
        <Box sx = {{paddingBottom:"10%"}}/>
      </div>
      </div>
    </div>
  )
}

export default Projects
