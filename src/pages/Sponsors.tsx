import { Grid } from '@mui/material'
import '../styles/sponsors.css'
import spon from '../static/vectors/sponsors9.svg';
// import bg from '../static/vectors/sponsors10.svg'; 
import bg from '../static/vectors/sponsors12.svg'; 

import phone from '../static/images/phoneIcon1.png'
import email from '../static/images/emailIcon1.png'

import React, { useEffect, useRef, useState } from 'react';
import { isElement } from 'react-dom/test-utils';

function Sponsors() {
  
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const [entry] = entries;
      setIsVisible(entry.isIntersecting);

      if (entry.isIntersecting) {
        // Remove the observer if the element becomes visible
        observer.unobserve(entry.target);
      }
    });

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, []);

  
  const [isElementVisible, setElementVisible] = useState(false);
  const targetElementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const [entry] = entries;
      setElementVisible(entry.isIntersecting);

      if (entry.isIntersecting) {
        // Remove the observer if the element becomes visible
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

  
  
  return (
    <div>
      <div className='projectPageHeading'>
        Sponsors
      </div>
      <div className='projectHeaderTrans' style={{backgroundImage: `url(${spon})`, height: '12rem', backgroundPosition: 'center', backgroundSize: '200vw', zIndex: '3', position: 'relative'}}></div>
      <div style={{backgroundImage: `url(${bg})`, height: "fit-content", width: '100%',backgroundPosition:'top', backgroundSize:'100vw', marginTop: '-12rem', zIndex: '1', position: 'relative'}}>
      <div style = {{paddingBottom:"12rem"}} ref ={elementRef}/>
        <div className={`tierHolder ${isVisible ? 'vi' : ''}`} >
          <div className={`tierCard`} >
            <div className='tierTitle diamond' > Diamond </div>
            
            <div style={{display:'flex', justifyContent:'center'}}>
              <div className="divHolder" style={{width:'70%', paddingTop:'0.5rem', paddingBottom:'0.6rem'}}>
                <span className='popupDivider'></span>
              </div>
            </div>

            <ul className='perkList'>
              <li style={{color:'#ffd700'}}>All Gold Perks</li>
              <li>Robot demo at company events</li>
              <li>Eligible to recruit memebrs</li>
              <li>Invitation to see demo days</li>
              <li>Filler</li>
              <li>Filler</li>
              <li>Filler</li>
              <li>Filler</li>
              <li>Filler</li>
              <li>Filler</li>
              <li>Filler</li>
            </ul>
          </div>
          <div className='tierCard'>
            <div className='tierTitle gold' > Gold </div>
            <div style={{display:'flex', justifyContent:'center'}}>
              <div className="divHolder" style={{width:'70%', paddingTop:'0.5rem', paddingBottom:'0.6rem'}}>
                <span className='popupDivider'></span>
              </div>
            </div>
            <ul className='perkList'>
              <li style={{color:'#c7c7c7'}}>All Silver Perks</li>
              <li>Filler</li>
              <li>Filler</li>
              <li>Filler</li>
              <li>Filler</li>
              <li>Filler</li>
              <li>Filler</li>
              <li>Filler</li>
              <li>Filler</li>
              <li>Filler</li>
              <li>Filler</li>
              <li>Filler</li>
            </ul>
          </div>
          <div className='tierCard'>
            <div className='tierTitle silver' > Silver </div>
            <div style={{display:'flex', justifyContent:'center'}}>
              <div className="divHolder" style={{width:'70%', paddingTop:'0.5rem', paddingBottom:'0.6rem'}}>
                <span className='popupDivider'></span>
              </div>
            </div>
            <ul className='perkList'>
              <li>Filler</li>
              <li>Filler</li>
              <li>Filler</li>
              <li>Filler</li>
              <li>Filler</li>
              <li>Filler</li>
              <li>Filler</li>
              <li>Filler</li>
              <li>Filler</li>
              <li>Filler</li>
              <li>Filler</li>
              <li>Filler</li>
            </ul>
          </div>
        </div>
        <div style={{display:'flex', justifyContent:'center', alignContent:'center'}}>
          <div className={`sponsorText ${isElementVisible ? 'vis' : ''}`} ref={targetElementRef} style={{color:'white', fontFamily:'poppins', width:'50%', justifySelf:'center', alignSelf:'center', textAlign:'center'}}>
            We are always trying to provide our members with the most cutting-edge robotics hardware available and would greatly appreciate any potential sponsorships. If you are interested in sponsoring UT ECLAIR, please contact us at the email below and we can send you our sponsor packet!
          </div>
        </div>

        <div style = {{paddingBottom:"5%"}}/>

        <div className='contactGrid'>
          <div className='cgE'>
            <img src={email} className='cgPic'></img>
            <div className='cgText'>
              <div className='cgTitle'>
                Email
              </div>
              <div className='cgData'>
                eclairrobotics@gmail.com
              </div>
            </div>
          </div>            
          <div className='cgE'>
            <img src={phone} className='cgPic'></img>
            <div className='cgText'>
              <div className='cgTitle'>
                Phone
              </div>
              <div className='cgData'>
                +1 (513)-237-2165
              </div>
            </div>
          </div>
        </div>


        <div style = {{paddingBottom:"7%"}}/>
      </div>
    </div>
  )
}

export default Sponsors
