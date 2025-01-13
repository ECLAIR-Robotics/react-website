
import '../styles/sponsors.css';
import spon from '../static/vectors/sponsorsDivider.svg';
import bg from '../static/vectors/sponsorsBackground.svg'; 

import Loader from '../components/Loader';

import phone from '../static/images/sponsor-images/phoneIcon1.png';
import email from '../static/images/sponsor-images/emailIcon1.png';
import form from '../static/images/sponsor-images/formIcon.png';
import React, { useEffect, useRef, useState } from 'react';
//import SponsorPackageRow from '../components/SponsorPackageRow';
import CurrentSponsorRow from '../components/CurrentSponsorRow';
import ContactInformationContainer from '../components/ContactInformationContainer';

function Sponsors() {
  
  // const [isVisible, setIsVisible] = useState(false);
  // const elementRef = useRef(null);

  // useEffect(() => {
  //   const observer = new IntersectionObserver((entries) => {
  //     const [entry] = entries;
  //     setIsVisible(entry.isIntersecting);

  //     if (entry.isIntersecting) {
  //       observer.unobserve(entry.target);
  //     }
  //   });
  //   if (elementRef.current) {
  //     observer.observe(elementRef.current);
  //   }
  //   return () => {
  //     if (elementRef.current) {
  //       observer.unobserve(elementRef.current);
  //     }
  //   };
  // }, []);
  
  const [isElementVisible, setElementVisible] = useState(false);
  const targetElementRef = useRef(null);


  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const [entry] = entries;
      setElementVisible(entry.isIntersecting);

      if (entry.isIntersecting) {
        observer.unobserve(entry.target);
      }
    });
    if (targetElementRef.current) {
      observer.observe(targetElementRef.current);
    }
    return () => {
      if (targetElementRef.current) {
        observer.unobserve(targetElementRef.current);
      }
    };
  }, []);

  const [sBGLoaded, setSBGLoaded] = useState(false);
  const bgDivRef = useRef<HTMLDivElement>(null);
  const sElementRef = useRef<HTMLImageElement>(null);
  
  const[resize, isResized] = useState(false);

  useEffect(() => {
    if (bgDivRef.current && sElementRef.current) {
      const divHeight = bgDivRef.current.clientHeight;
      sElementRef.current.style.height = `${divHeight}px`;
    }
  }, [resize]);

  
  function handleResize() {
    // setSBGLoaded(false);
    isResized(!resize);
  }
  window.addEventListener('resize', handleResize);
 
  function wrapperFunction() {
    setSBGLoaded(true);
  }

  async function handleLoad() {
    setTimeout(wrapperFunction, 0)
    
  }
  
  return (
    <div>
      <div className='projectPageHeading'>Current Sponsors</div>
      <div className='projectHeaderTrans' style={{backgroundImage: `url(${spon})`, height: '12rem', backgroundPosition: 'center', backgroundSize: '200vw', zIndex: '3', position: 'relative'}}></div>
      <div style={{marginTop: '-12rem', zIndex: '1', position: 'relative'}}>
        <img className='sponsorBackground' ref={sElementRef}  src={bg} onLoad={handleLoad} alt="load animation"></img>
        <div style = {{paddingBottom:"12rem"}}/>
          {/* <SponsorPackageRow isVisible={isVisible}/> */}
          <CurrentSponsorRow/>

          
          <div style = {{height:"5rem"}}></div>
          {/* <div style={{display:'flex', justifyContent:'center', alignContent:'center'}}> */}
          <div style={{display:'flex', justifyContent:'center', alignContent:'center', width:'100%'}}>
            <div className={`sponsorTextHolder ${isElementVisible ? 'vis' : ''}`} ref={targetElementRef} style={{}}>
              {/* <div className={`sponsorText`} style={{color:'black', fontFamily:'poppins', width:'50%', justifySelf:'center', alignSelf:'center', textAlign:'center'}}> */}
              <div className={`sponsorText`} style={{fontFamily:'montserrat', justifySelf:'center', alignSelf:'center', textAlign:'center'}}>
                We are always trying to provide our members with the most cutting-edge robotics hardware available and would greatly appreciate any potential sponsorships. If you are interested in sponsoring UT ECLAIR, please contact us at the email below and we can send you our sponsor packet!
              </div>
            </div>
          </div>

          

          <div style = {{paddingBottom:"5%"}}/>
          <div className='contactGrid'>
            <ContactInformationContainer
              href='mailto:eclairrobotics@gmail.com'
              altTxt='email button'
              title='Email'
              body='eclairrobotics@gmail.com'
              img={email}
            />
            <ContactInformationContainer
              altTxt='phone icon'
              title='Phone'
              body='+1 (513)-237-2165'
              img={phone}
            />
            <ContactInformationContainer
              href='/contact'
              title='Form'
              body='Contact Us Page'
              img={form}
            />
          </div>
        <div style = {{paddingBottom:"12%"}} />
      </div>
      <Loader bGLoaded={sBGLoaded}/>
    </div>
  );
}

export default Sponsors

