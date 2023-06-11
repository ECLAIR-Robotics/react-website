import React, { useEffect } from 'react'
import '../styles/eclairbutton.css'


interface Props {
  type?: 'submit' | 'reset' | 'button';
  text?: string;
  something?: string;
  radius?: string;
  handleClick?: () => void;
}
function ECLAIRButton(props: Props) {

  useEffect(() => {
    const btn = document.getElementById('main-eclair-button');
    if (btn) {
      btn.style.borderRadius = props.radius!;
    }
    
  }, [])

  return (
    <button id="main-eclair-button" type={props.type} onClick={props.handleClick} className='fancybutton' data-text={props.text}>
      <span className='fancytext'>
        {props.text}
      </span>
    </button>
  )
}

export default ECLAIRButton
