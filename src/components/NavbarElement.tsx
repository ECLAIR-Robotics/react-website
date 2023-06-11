import React from 'react'
import { useState, useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom';
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
  const location = useLocation();
  const [currentUrl, setCurrentUrl] = useState<string>('');
  const elementRef = useRef<HTMLAnchorElement>(null);
 
  useEffect(() => {
    
    
    const elementBounds = elementRef.current?.getBoundingClientRect();
    console.log(elementBounds?.width);
    const width = elementBounds?.width;
  }, []); 

  useEffect(() => {

    setCurrentUrl(location.pathname);

  }, [location.pathname]);
  
  return (
    <div   className={`navContainer ${currentUrl==props.href ? 'highlighted' : ''}`}>
    <Link ref= {elementRef}  className="navElementContainer" to={props.href}>
      <div  style={{
      }}
      
      >
      {props.text}
      </div>
    </Link>
    { props.href===currentUrl &&(<span className="navbarSpan"></span>)}
    </div>
  )
}

export default NavbarElement
