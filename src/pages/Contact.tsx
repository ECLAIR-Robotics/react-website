import React, { useEffect, useRef, useState } from 'react';
import '../styles/contact.css';
import divider from '../static/vectors/contactDivider.svg';
import cBG from '../static/vectors/contactBackground.svg';
import Mailer from '../components/Mailer';
import Loader from '../components/Loader';


function Contact() {
  const [cBGLoaded, setCBGLoaded] = useState(false);
  const cBGDivRef = useRef<HTMLDivElement>(null);
  const sElementRef = useRef<HTMLImageElement>(null);
  
  const[resize, isResized] = useState(false);

  useEffect(() => {
    if (cBGDivRef.current && sElementRef.current) {
      const divHeight = cBGDivRef.current.clientHeight;
      sElementRef.current.style.height = `${divHeight}px`;
    }
  }, [resize]);

  
  function handleResize() {
    // setCBGLoaded(false);
    isResized(!resize);
  }
  window.addEventListener('resize', handleResize);
 
  function wrapperFunction() {
    setCBGLoaded(true);
  }

  async function handleLoad() {
    setTimeout(wrapperFunction, 0)
    
  }
  
  return (
    <>
      <div className='projectPageHeading'>
        Contact Us 
      </div>
      <div className='projectHeaderTrans' style={{backgroundImage: `url(${divider})`, height: '10rem', backgroundPosition: 'center', backgroundSize: '200vw'}}></div>
      <div style={{backgroundImage: `url(${cBG})`, height: "fit-content", width: '100%',backgroundPosition:'top', backgroundSize:'100vw'}}>
        <img className='contactBackground' ref={sElementRef}  src={cBG} onLoad={handleLoad}></img>
        <div className='contactContent' style={{width:'100%', height:'100%'}}>
          <div className='contactFormContainer'>
            { <Mailer/> }
          </div>
          <div style = {{paddingBottom:"7%"}}/>
        </div>
        <Loader bGLoaded={cBGLoaded}/>
      </div>
    </>
  )
}

export default Contact
