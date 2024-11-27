import React from 'react'
import '../styles/sponsors.css';
import texelArts from '../static/images/sponsor-images/texelArts.png'
import texasRobotics from '../static/images/sponsor-images/texasRobotics.jpg'
import serviceNow from '../static/images/sponsor-images/serviceNow.jpg'
import CurrentSponsorCard from './CurrentSponsorCard';
function CurrentSponsorRow() {

  return (
    <div className='currentSponsorRow'>
      <CurrentSponsorCard img={serviceNow}/>
      <CurrentSponsorCard img={texasRobotics}/>
      <CurrentSponsorCard img={texelArts}/>
    </div>
  )
}

export default CurrentSponsorRow