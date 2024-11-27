import '../styles/sponsors.css'
import React from 'react';

interface CurrentSponsorCardProps {
  img: string,
}

function CurrentSponsorCard(props: CurrentSponsorCardProps) {

  return (
    <img className='currentSponsorCard' src={props.img}/>
  )
}

export default CurrentSponsorCard