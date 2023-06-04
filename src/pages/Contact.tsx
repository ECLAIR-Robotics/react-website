import React from 'react'
import '../styles/contact.css';
import divider from '../static/vectors/contactDivider.svg';
import cBG from '../static/vectors/contactBackground.svg';
import Mailer from '../components/Mailer';
function Contact() {
  return (
    <>
      <div className='projectPageHeading'>
        Contact Us 
      </div>
      <div className='projectHeaderTrans' style={{backgroundImage: `url(${divider})`, height: '10rem', backgroundPosition: 'center', backgroundSize: '200vw'}}></div>
      <div style={{backgroundImage: `url(${cBG})`, height: "fit-content", width: '100%',backgroundPosition:'top', backgroundSize:'100vw'}}>
        <div className='contactContent' style={{width:'100%', height:'100%'}}>
          <div className='contactFormContainer'>
            { <Mailer/> }
          </div>
          <div style = {{paddingBottom:"7%"}}/>
        </div>
      </div>
    </>
  )
}

export default Contact
