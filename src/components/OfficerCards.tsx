import React from 'react'
import '../styles/officerCard.css'

interface Props {
  name?: string;
  position?: string;
  img?: string;
}
function OfficerCards(props: Props) {
  return (
    <div className='baseOfficerCard'> 
      <img src={props.img} className="officerImage"></img>
      <div className="officerName">{props.name}</div>
      <div className="officerPosition">{props.position}</div>
    </div>
  )
}

export default OfficerCards
