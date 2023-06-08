import React, {ReactNode, FunctionComponent, useRef} from "react";
import '../styles/popup.css';
import styled, { keyframes, css,  } from 'styled-components'; 
import ImageSlider from '../components/ImageSlider';

interface Image {
  image: string;
}

interface Props {
    cardInfo : {
        id: number;
        img: string;
        name: string;
        lName: string;
        members: string;
        desc: string;
        git: string;
        gantt: string;
        rect ?: DOMRect;
        SliderData ?: Array<Image>;
    } | null;
    // cardInfo : {
    //     id: number | null;
    //     img: string | null;
    //     name: string | null;
    //     lName: string | null;
    //     members: string | null;
    //     desc: string | null;
    //     git: string | null;
    //     gantt: string | null;
    // } | null;
    onClose : () => void;
    vis : boolean;
}

function Popup(props : Props) {
    // const popupAnimation = {
    //     '@keyframes popupAnimation': {
    //       from: { transform: "translateY(100)" },
    //       to: { transform: "translateY(0)" },
    //     },
    //   };
    const popupAnimation = (rect ?: DOMRect) => keyframes`
    0% { transform: translateY(${ props.cardInfo!.rect!.top + 'px' }) translateX(calc(${props.cardInfo!.rect!.left}px - 50vw + 50%)); transform-origin: ${props.cardInfo!.rect!.left > (window.innerWidth * 0.6) ? 'right' : (props.cardInfo!.rect!.left < (window.innerWidth * 0.4) ? 'left' : '')}  ${props.cardInfo!.rect!.top < (window.innerHeight * 0.3) ? 'top' : (props.cardInfo!.rect!.top > (window.innerHeight * 0.6) ? 'bottom' : '')}; scale: 0.1;} 
    100% { transform: translateY(0)  translateX(0px); transform-origin: center; scale: 1;}
    `;
    // 0% { transform: translateY(${ props.cardInfo!.rect!.top + 'px' }) translateX(calc(${props.cardInfo!.rect!.left}px - 50vw + 50%)); transform-origin: ${props.cardInfo!.rect!.left > (window.innerWidth * 0.6) ? 'right' : (props.cardInfo!.rect!.left < (window.innerWidth * 0.4) ? 'left' : 'center')} ; scale: 0.1;} 
    const StyledPopup = styled.div<Props>`
        animation: ${({ cardInfo }) => popupAnimation(cardInfo?.rect)} 1s ease-in-out; 
    `;

    const backgroundRef = useRef<HTMLDivElement>(null);

    const handleClick: React.MouseEventHandler<HTMLDivElement> = (event) => {
        if (backgroundRef.current && event.target == backgroundRef.current) {
          // clicked on component
          props.onClose();
        } else {
          // clicked outside component
          // console.log('hi')
        }
      };
  
    return (
    <div className={`entirePopup ${props.vis ? "isVis" : ""}`} onClick={handleClick} ref={backgroundRef} style={{zIndex:'101'}}>
      <StyledPopup onClose={props.onClose} vis={props.vis} cardInfo={props.cardInfo} className={`popupContent ${props.vis ? "isVis" : ""}`} >
      <div className="popupCloseButtonHolder">
        <button className="closeButton" onClick={props.onClose}>X</button>
      </div>
        <h1 className='pName'>{props.cardInfo!.name}</h1>
        <h3 className= 'subHeadings'>Contributors:</h3>
        <div className='lead'> 
            {/* {props.cardInfo!.lName} */}
            <span className='category'>
                Engineering Lead: 
            </span>
            <span className= 'displayContent'>
                {props.cardInfo!.lName}
            </span>
        </div>
        <div className='members'>
            <span className='category'>
                Members: 
            </span>
            <span className= 'displayContent'>
                {props.cardInfo!.members}
            </span>
        </div>
        <div className="divHolder">
            <span className='popupDivider'></span>
        </div>
        <h3 className= 'subHeadings'>Purpose:</h3>
        <div className='desc'>
            <span className= 'displayContent'>
                {props.cardInfo!.desc}
            </span>
        </div>
        <div className="divHolder">
            <span className='popupDivider'></span>
        </div>
        <h3 className= 'subHeadings'>Project Management:</h3>
        <div className='git'>
            {/* {props.cardInfo!.git} */}
            <span className='category'>
                Codebase: 
            </span>
            <a className='displayContentLink' href={props.cardInfo!.git} target="_blank">
              GitHub
            </a>
        </div>
        <div className='gantt'>
            {/* {props.cardInfo!.gantt} */}
            <span className='category'>
                Project Planning: 
            </span>
            <a className='displayContentLink' href={props.cardInfo!.gantt} target='_blank'>
              Gantt Chart
            </a>
        </div>
        {props.cardInfo!.SliderData && (<div style={{paddingTop:'3rem'}}>
            <ImageSlider slides={props.cardInfo!.SliderData}/>
        </div>)}
      </StyledPopup>
    </div>
  );
}

export default Popup;