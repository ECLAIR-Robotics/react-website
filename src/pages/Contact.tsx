import React from 'react'
import '../styles/contact.css';
import idk from '../static/vectors/contact1.svg';
import cBG2 from '../static/vectors/contactBG2.svg';
function Contact() {
  return (
    <>
      <div className='projectPageHeading'>
        Contact Us 
      </div>
      <div className='projectHeaderTrans' style={{backgroundImage: `url(${idk})`, height: '10rem', backgroundPosition: 'center', backgroundSize: '200vw'}}></div>
      <div style={{backgroundImage: `url(${cBG2})`, height: "fit-content", width: '100%',backgroundPosition:'top', backgroundSize:'100vw'}}>
        <div className='hiii' style={{width:'100%', height:'100%'}}>
          <div style={{width: '100%', height: 'fit-content', display:'flex', justifyContent:'center'}}>
            {/* <Mailer/> */}
          </div>
          
          <div style={{display:'flex', justifyContent:'center'}}>
            <div className="divHolder" style={{width:'25%', paddingTop:'3rem'}}>
              <span className='popupDivider'></span>
            </div>
          </div>
          <div style = {{paddingBottom:"7%"}}/>
        </div>
      </div>
    </>
  )
}

export default Contact
