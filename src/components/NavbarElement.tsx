import React from 'react'
import { useState, useEffect, useRef } from 'react'
import '../styles/navbarelement.css'
import { Link } from 'react-router-dom';

interface Props {
  text: string;
  highlighted?: boolean;
  href: string;
  ref?: any;
  onclick?: () => void;
}

function NavbarElement(props: Props) {

  const [highlighted, setHighlighted] = useState(false);
  const [elementClassName, setElementClassName] = useState('navElementContainer');
  useEffect(() => {
    if( highlighted) {
      setElementClassName('navElementContainerHighlighted');
    } else {
      setElementClassName('navElementContainer');
    }
  },[highlighted]);

  // console.log(props.highlighted);
  // console.log(highlighted);
  // console.log(elementClassName);
  const elementClicked = () => {
    props.onclick!();
    setHighlighted(true);
  }
  
  return (
    <Link ref= {props.ref} className={elementClassName} to={props.href} onClick={elementClicked}>
      {props.text}
    </Link>
  )
}

export default NavbarElement
