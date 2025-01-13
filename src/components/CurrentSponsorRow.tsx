import React from 'react'
import '../styles/sponsors.css';
import texelArts from '../static/images/sponsor-images/texelArts.png'
import texasRobotics from '../static/images/sponsor-images/texasRobotics.jpg'
import serviceNow from '../static/images/sponsor-images/serviceNow.png'
import CurrentSponsorCard from './CurrentSponsorCard';
function CurrentSponsorRow() {

  return (
    <div className='currentSponsorRow'>
      <CurrentSponsorCard img={serviceNow} color='rgb(30, 59, 61)'/>
      <CurrentSponsorCard img={texasRobotics} color='white'/>
      <CurrentSponsorCard img={texelArts} color='white'/>
    </div>
  )
}

export default CurrentSponsorRow