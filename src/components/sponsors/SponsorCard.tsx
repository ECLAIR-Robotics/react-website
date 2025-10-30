import '../../styles/sponsors/sponsors.css'
import React from 'react';

interface SponsorCardProps {
  img: string,
  color: string,
  link: string,
}

function SponsorCard(props: SponsorCardProps) {

  return (
    <a className='currentSponsorCard' href={props.link}>
      <img className='currentSponsorImg' src={props.img} style={{backgroundColor: props.color}}/>    
    </a>
  )
}

export default SponsorCard