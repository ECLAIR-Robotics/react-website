import { Typography } from '@mui/material';
import React from 'react'
import '../styles/eclairbutton.css'
interface Props {
    text?: string;
}

const handleClick = () => {
  
}

function ECLAIRButton(props: Props) {

  

  return (
    <button onClick={ handleClick } className =  'fancybutton'>
        {props.text}
    </button>
  )
}

export default ECLAIRButton
