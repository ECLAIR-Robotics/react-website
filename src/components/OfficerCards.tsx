import React from 'react'
import '../styles/officerCard.css'
import { useState } from 'react';
interface Props {
  name?: string;
  position?: string;
  img?: string;
  linkedIn: string;
  email: string;
  bio: string;
}


function OfficerCards(props: Props) {

  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  const [drawerClass, setDrawerClass] = useState('cardDrawerInvisible')

  const handleClick = () => {
    if (!isDrawerOpen) {
      setDrawerClass('cardDrawerVisible')
      setIsDrawerOpen(true)
    } else {
      setDrawerClass('cardDrawerInvisible')
      setIsDrawerOpen(false)
    }
  }
  return (

    <div className={`baseOfficerCard ${isDrawerOpen ? 'open' : ''}`} onClick={handleClick}>
      <div className='officerCardOverlay'>
        <div className="imageContainer">
          <img src={props.img} className="officerImage"></img>
        </div>
        <div className="officerInformation">
          <div className="officerName">{props.name}</div>
          <div className="officerPosition">{props.position}</div>
          
        </div>
        
        <div className={drawerClass}>
        <div className='dividerOfficerCard'><span></span></div>
          <div className='cardDrawerContent'>
            {props.bio}
          </div>
          <div >
            <a href={props.linkedIn} target="_blank" rel="noreferrer">
              <img src="https://img.icons8.com/color/48/000000/linkedin.png" className="socialMediaIcon"></img>
            </a>
            <a href={`mailto:${props.email}`} target="_blank" rel="noreferrer">
              <img src="https://img.icons8.com/color/48/000000/gmail.png" className="socialMediaIcon"></img>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OfficerCards
