import '../styles/sponsors.css'
import React from 'react';

interface CurrentSponsorCardProps {
  img: string,
  color: string,
  link: string,
}

function CurrentSponsorCard(props: CurrentSponsorCardProps) {

  return (
    <a className='currentSponsorCard' href={props.link}>
      <img className='currentSponsorImg' src={props.img} style={{backgroundColor: props.color}}/>    
    </a>
  )
}

export default CurrentSponsorCard