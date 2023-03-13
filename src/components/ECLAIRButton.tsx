import { Typography } from '@mui/material';
import React from 'react'
import '../styles/eclairbutton.css'
interface Props {
    text?: string;
}
function ECLAIRButton(props: Props) {

  const style = {
    "--eclair-button-color-1": 'hsl(275, 100%, 73%)',
    "--eclair-button-color-2": 'hsl(216, 100%, 39%)',
    
    background: 'linear-gradient(to right, var(--magic-rainbow-color-1), var(--magic-rainbow-color-2))',
    transition: '--eclair-button-color-1 0.5s, --eclair-button-color-2 0.5s linear',

    padding: '1rem',
    borderRadius: '1rem',
    color: 'white',
    fontSize: '1.5rem',
    fontFamily: 'titillium web',
    textAlign: 'center',
  } as React.CSSProperties

  return (
    <button style = {style} className =  'fancybutton'>
        {props.text}
    </button>
  )
}

export default ECLAIRButton
