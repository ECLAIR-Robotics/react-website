import '../styles/sponsors.css'
import React from 'react';

interface CurrentSponsorCardProps {
  img: string,
  color: string,
}

function CurrentSponsorCard(props: CurrentSponsorCardProps) {

  return (
    <img className='currentSponsorCard' src={props.img} style={{backgroundColor: props.color}}/>
  )
}

export default CurrentSponsorCard