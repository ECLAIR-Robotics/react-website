import React from 'react';
import {useState, useRef, useEffect} from 'react';
import '../styles/projects/projects.css';
import ProjectCard from '../components/projects/ProjectCard';
import ProjectFilter from '../components/projects/ProjectFilter';
import ResourcesCard from '../components/projects/ResourcesCard';
import ProjectPopup from '../components/projects/ProjectPopup';
import Loader from '../components/Loader';

import pcrVid from '../static/videos/pcrTest.gif';


import { PROJECT_KEYS, PROJECT_NAMES, PROJECT_IMAGES, PROJECT_TEAM_PAGES, PROJECT_CODEBASES, PROJECT_DESCRIPTIONS, FINISHED_PROJECTS, ONGOING_PROJECTS, PROJECT_VIDEOS, PROJECT_SLIDESHOWS} from '../static/constants/Projects';
import { TECH_LEAD_NAMES } from '../static/constants/About';

import cv from '../static/images/lectures/cv.webp';
import deepLearning from '../static/images/lectures/deepLearning.webp';
import cvIntro from '../static/images/lectures/introToCV.webp';
import mlIntro from '../static/images/lectures/introToML.webp';
import rlIntro from '../static/images/lectures/introToRL.webp';
import qL from '../static/images/lectures/qL.webp';
import markov from '../static/images/lectures/markovModelFree.webp';


import projectTransHead from '../static/vectors/projectHeaderTransition.svg';
import temp from '../static/vectors/projectBackground.svg';



function Projects() {
  const [showPopup, setShowPopup] = useState(false);
  const [cardInfo, setCardInfo] = useState<{
    id: number;
    img: string;
    name: string;
    lName: string;
    members: string;
    desc?: string;
    git: string;
    gantt: string;
    SliderData ?: Array<string>;
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


  const handleOpenPopup = (info : {
    id: number;
    img: string;
    name: string;
    lName: string;
    members: string;
    desc?: string;
    git: string;
    gantt: string;
    SliderData ?: Array<string>;
    }, ClientRect : DOMRect | undefined) => {
    setCardInfo({...info, rect: ClientRect});
    setShowPopup(true);
    console.log(ClientRect);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

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

  const [curFilter, setCurFilter] = useState("inprogress");
  const [filteredKeys, setFilteredKeys] = useState<string[]>(ONGOING_PROJECTS);

  const cardLocations = useRef<Array<HTMLDivElement | null>>([]);

  useEffect(() => {
    console.log("Filter changed to: ", curFilter);
    if (curFilter === "all") {
      setFilteredKeys(PROJECT_KEYS);
      console.log("All keys: ", PROJECT_KEYS);
    } else if (curFilter === "inprogress") {
      setFilteredKeys(ONGOING_PROJECTS);
      console.log("Ongoing keys: ", ONGOING_PROJECTS);
    } else if (curFilter === "completed") {
      setFilteredKeys(FINISHED_PROJECTS);
      console.log("Finished keys: ", FINISHED_PROJECTS);
    }

    console.log("Filtered keys: ", filteredKeys);
    cardLocations.current = cardLocations.current.slice(0, filteredKeys.length);
    handleResize();
      
  }, [curFilter]);

  const [pBGLoaded, setPBGLoaded] = useState(false);
  const pBGDivRef = useRef<HTMLDivElement>(null);
  const pElementRef = useRef<HTMLImageElement>(null);
  
  const[resize, isResized] = useState(false);

  useEffect(() => {
    if (pBGDivRef.current && pElementRef.current) {
      const divHeight = pBGDivRef.current.clientHeight;
      pElementRef.current.style.height = `${divHeight}px`;
    }
  }, [resize]);

  
  function handleResize() {
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
      <div className='projectPageBelowHeader' ref={pBGDivRef}>
        <img className='projectBackground' ref={pElementRef}  src={temp} onLoad={handleLoad}></img>
        <h1 className = 'projectsTitle'>Projects</h1>
        <ProjectFilter curFilter={curFilter} setCurFilter={setCurFilter} handleResize={handleResize}/>
        <div className='gridContainer'>
          <div className='projectCards'>
            {filteredKeys.map((key, index) => {
              const techLeads = Object.entries(TECH_LEAD_NAMES)
                .filter(([leadKey]) => leadKey.startsWith(key))
                .map(([, name]) => name)
                .join(", ");

              return (
                <ProjectCard
                  key={key}
                  name={PROJECT_NAMES[key]}
                  img={PROJECT_IMAGES[key]}
                  vid={PROJECT_VIDEOS[key]}
                  ref={el => (cardLocations.current[index] = el)}
                  onOpenPopup={() =>
                    handleOpenPopup(
                      {
                        id: index,
                        name: PROJECT_NAMES[key],
                        img: PROJECT_IMAGES[key],
                        lName: techLeads,
                        members: "",
                        desc: PROJECT_DESCRIPTIONS[key],
                        git: PROJECT_CODEBASES[key],
                        gantt: PROJECT_TEAM_PAGES[key],
                        SliderData: PROJECT_SLIDESHOWS[key],
                      },
                      cardLocations.current[index]?.getBoundingClientRect()
                    )
                  }
                />
              );
            })}
          </div>
        </div>
        <ProjectPopup vis ={showPopup} onClose={handleClosePopup} cardInfo={cardInfo} />
      <div style = {{paddingBottom:"10%"}}/>
      </div> 
        <svg style={{ margin: 0, padding: 0, display:"block", fontSize:0, marginTop:'-5px' }} preserveAspectRatio="xMidYMax slice" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2000.4 78.7"><g fill="#2d3549"><rect width="2000.4" height="78.7" fill="#191e28" /><path d="M0 59V0h2000v61c-11-1-22-6-32-13-10-6-19-14-30-20a90 90 0 00-91 4c-10 6-18 15-28 21a80 80 0 01-68 8 80 80 0 01-68-8c-10-6-19-15-29-21a90 90 0 00-91-4l-29 20c-10 6-22 12-34 13a33 33 0 01-4-1v1c-12-1-23-6-32-13l-30-20a90 90 0 00-91 4c-10 6-18 15-28 21a80 80 0 01-69 8 80 80 0 01-68-8c-10-6-18-15-28-21a90 90 0 00-91-4c-11 6-20 14-30 20s-21 12-33 13a33 33 0 01-4-1v1c-12-1-23-6-33-13l-29-20a90 90 0 00-92 4c-9 6-18 15-28 21a80 80 0 01-68 8 80 80 0 01-68-8c-10-6-18-15-28-21a89 89 0 00-91-4c-11 6-20 14-30 20l-6 4c-8 5-17 8-27 9a33 33 0 01-5-1v1c-11-1-22-6-32-13-10-6-19-14-30-20l-3-1a87 87 0 00-35-10 90 90 0 00-43 9 81 81 0 00-10 6l-8 6-20 15a80 80 0 01-68 8 80 80 0 01-68-8l-20-15-8-6a82 82 0 00-11-6 90 90 0 00-44-8 87 87 0 00-35 9l-2 1-29 20A79 79 0 010 59z" opacity=".75"/><path d="M1523 0h454a33 33 0 01-16 20h-2a33 33 0 01-22 2 22 22 0 01-16 15 15 15 0 01-6 5 22 22 0 01-13 3 52 52 0 01-14-4l-11-5-35-17a75 75 0 00-51-2 157 157 0 00-41 27 151 151 0 00-46-28c-15-4-31-2-45 3-13 5-24 11-36 17l-11 5a52 52 0 01-13 4 22 22 0 01-14-3 15 15 0 01-6-5 22 22 0 01-16-15 33 33 0 01-22-2h-1a33 33 0 01-17-20z" opacity=".5"/><path d="M1496 0h504v13c-6 11-20 16-31 12a37 37 0 01-10-5c-7-5-14-13-24-15-12-3-24 4-34 12-8 6-15 14-24 19a43 43 0 01-7 3c-14 4-29 1-42-5-11-5-21-12-32-18l-5-3c-13-6-27-10-41-7-14-3-28 1-41 7l-5 3c-11 6-21 13-32 18-13 6-28 9-42 5a43 43 0 01-7-4c-9-4-16-12-24-18-10-8-22-15-34-12-10 2-17 10-24 15a37 37 0 01-10 5c-14 5-31-4-34-19l-1-6z"/><circle cx="1940.6" cy="49.4" r="8.5"/><circle cx="1841.1" cy="46.1" r="5.2"/><circle cx="1624.5" cy="46.1" r="5.2"/><circle cx="1564.4" cy="42" r="7.3"/><circle cx="1894" cy="72.9" r="5.8" opacity=".5"/><circle cx="1679.1" cy="72.9" r="5.8" opacity=".5"/><circle cx="1750" cy="72.9" r="2.8" opacity=".75"/><path d="M1019 0h454a33 33 0 01-17 20h-1a33 33 0 01-22 2 22 22 0 01-17 15 15 15 0 01-5 5 22 22 0 01-14 3 52 52 0 01-13-4l-11-5-36-17a75 75 0 00-50-2 157 157 0 00-41 27 151 151 0 00-46-28c-15-4-31-2-46 3l-35 17-11 5a52 52 0 01-14 4 22 22 0 01-13-3 15 15 0 01-6-5 22 22 0 01-17-15 33 33 0 01-22-2h-1a33 33 0 01-16-20z" opacity=".5"/><path d="M992 0h504v13c-6 11-20 16-32 12a37 37 0 01-9-5c-8-5-15-13-24-15-12-3-25 4-35 12-7 6-15 14-23 19a43 43 0 01-7 3c-14 4-29 1-42-5-11-5-21-12-32-18l-5-3c-13-6-27-10-41-7-14-3-29 1-41 7l-5 3c-11 6-21 13-33 18-13 6-28 9-41 5a43 43 0 01-7-4c-9-4-16-12-24-18-10-8-22-15-35-12-9 2-16 10-24 15a37 37 0 01-9 5c-14 5-31-4-34-19l-1-6z"/><circle cx="1436.3" cy="49.4" r="8.5"/><circle cx="1336.8" cy="46.1" r="5.2"/><circle cx="1120.3" cy="46.1" r="5.2"/><circle cx="1060.2" cy="42" r="7.3"/><circle cx="1389.7" cy="72.9" r="5.8" opacity=".5"/><circle cx="1174.8" cy="72.9" r="5.8" opacity=".5"/><circle cx="1245.7" cy="72.9" r="2.8" opacity=".75"/><path d="M514 0h455a33 33 0 01-17 20h-1a33 33 0 01-22 2 22 22 0 01-17 15 15 15 0 01-6 5 22 22 0 01-13 3 52 52 0 01-13-4l-12-5-35-17a75 75 0 00-50-2 157 157 0 00-41 27 150 150 0 00-46-28c-15-4-31-2-46 3l-36 16-11 5a52 52 0 01-13 4 22 22 0 01-14-2 15 15 0 01-5-5 22 22 0 01-17-15 33 33 0 01-22-2h-1a33 33 0 01-17-20z" opacity=".5"/><path d="M488 0h504v13c-6 11-20 16-32 12a37 37 0 01-9-5c-8-5-15-13-24-15-12-3-25 4-35 12-8 6-15 14-24 18a43 43 0 01-7 4c-13 4-28 1-41-5l-33-18-4-3c-13-6-28-10-42-7-13-3-28 1-41 7l-4 3-33 18c-13 6-28 9-41 5a43 43 0 01-8-4c-8-4-16-12-23-18-10-8-23-15-35-12-9 2-16 10-24 15a37 37 0 01-9 5c-14 5-31-4-35-19V0z"/><circle cx="932" cy="49.4" r="8.5"/><circle cx="832.6" cy="46.1" r="5.2"/><circle cx="616" cy="46.1" r="5.2"/><circle cx="555.9" cy="42" r="7.3"/><circle cx="885.4" cy="72.9" r="5.8" opacity=".5"/><circle cx="670.6" cy="72.9" r="5.8" opacity=".5"/><circle cx="741.4" cy="72.9" r="2.8" opacity=".75"/><path d="M10 0h454a33 33 0 01-16 20h-2a33 33 0 01-21 2 22 22 0 01-17 15 15 15 0 01-6 5 22 22 0 01-13 3 52 52 0 01-14-4l-11-5-35-17a75 75 0 00-50-2 157 157 0 00-41 27 150 150 0 00-47-28c-14-4-31-2-45 3l-36 16-11 5a52 52 0 01-13 4 22 22 0 01-14-2 15 15 0 01-5-5 22 22 0 01-17-15 33 33 0 01-22-2h-1A33 33 0 0110 0z" opacity=".5"/><path d="M0 24V0h488v13c-7 11-20 16-32 12a37 37 0 01-10-5c-7-5-14-13-23-15-13-3-25 4-35 12h-1c-7 7-14 14-23 18a43 43 0 01-7 4c-10 3-21 2-31-1a84 84 0 01-10-4c-12-5-22-12-33-18l-5-3c-12-6-27-10-41-7-14-3-28 1-41 7l-5 3c-11 6-21 13-32 18a83 83 0 01-9 4c-11 3-22 4-33 1a43 43 0 01-7-4c-8-4-15-11-23-18h-1C77 9 64 2 52 5c-9 2-16 10-24 15a37 37 0 01-10 5 26 26 0 01-18-1z"/><circle cx="427.8" cy="49.4" r="8.5"/><circle cx="328.3" cy="46.1" r="5.2"/><circle cx="111.7" cy="46.1" r="5.2"/><circle cx="51.6" cy="42" r="7.3"/><circle cx="381.1" cy="72.9" r="5.8" opacity=".5"/><circle cx="166.3" cy="72.9" r="5.8" opacity=".5"/><circle cx="237.2" cy="72.9" r="2.8" opacity=".75"/></g></svg>
      <div className='projectPageBelowHeader' style={{backgroundImage: `url(${temp})`, backgroundSize: "auto 100%", height: "fit-content", backgroundRepeat: "repeat-x", backgroundPosition: 'top left', marginTop:'-1px'}}>
        <h1 className = 'projectsTitle' style={{paddingTop:'7rem', paddingBottom:'5rem'}}>Machine Learning Resources</h1>
        <div className='gridContainer'>
          <div className='projectCards'>
            {MLData.map((card, index) => (
              <ResourcesCard
                key = {card.id}
                name = {card.name}
                img = {card.img}
                openSlides={() => handleSlideClick(card.link)}
              />
            ))}
          </div>
        </div>
        <ProjectPopup vis ={showPopup} onClose={handleClosePopup} cardInfo={cardInfo} />
        <div style = {{paddingBottom:"10%"}}/>
      </div> 
      <Loader bGLoaded={pBGLoaded}/>
    </div>
  )
}

export default Projects
