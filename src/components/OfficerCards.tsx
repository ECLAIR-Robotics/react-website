import React from 'react'
import '../styles/officerCard.css'
import { useState, useEffect } from 'react';
import {useRef} from 'react'
import {useHover} from 'usehooks-ts'

interface Props {
  name?: string;
  position?: string;
  img?: string;
  linkedIn?: string;
  email?: string;
  bio: string;
}


function OfficerCards(props: Props) {

  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  const [drawerClass, setDrawerClass] = useState('cardDrawerInvisible')

  const hoverRef = useRef(null);
  const isHovering = useHover(hoverRef);

  useEffect(() => {
    if (isHovering){
      openDrawer()
    } else {
      closeDrawer()
    } 
  },[isHovering]);

  const handleClick = () => {
    if (!isDrawerOpen) {
      openDrawer()
    } else {
      closeDrawer()
    }
  }

  const openDrawer = () => {
    setDrawerClass('cardDrawerVisible')
      setIsDrawerOpen(true)
  }

  const closeDrawer = () => {
    setDrawerClass('cardDrawerInvisible')
    setIsDrawerOpen(false)
  }
  return (

    <div ref={hoverRef} className={`baseOfficerCard ${isDrawerOpen ? 'open' : ''}`} onClick={handleClick}>
      <div className='officerCardOverlay'>
        <div className="imageContainer">
          <img src={props.img} className="officerImage"/>
        </div>
        <div className="officerInformation">
          <div className="officerName">{props.name}</div>
          <div className="officerPosition">{props.position}</div>
          
        </div>
        
        <div className={drawerClass}>
        <div className='dividerOfficerCard'><span></span></div>
          <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            height: '20rem',
          }}>
            <div className='cardDrawerContent'>
              {props.bio}
            </div>
            <div 
            style={{
              display:'flex',
              gap: '0.2em',
              justifyContent:'center'
            }}>
              {props.linkedIn && (<a href={props.linkedIn} target="_blank" rel="noreferrer">
                <img src="https://img.icons8.com/color/48/000000/linkedin.png" className="socialMediaIcon"></img>
              </a>)}
              {props.email && (<a href={`mailto:${props.email}`} target="_blank" rel="noreferrer">
                <img src="https://img.icons8.com/color/48/000000/gmail.png" className="socialMediaIcon"></img>
              </a>)}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OfficerCards
