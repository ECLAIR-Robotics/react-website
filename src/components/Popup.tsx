import React, {ReactNode, FunctionComponent} from "react";
import '../styles/popup.css';
import styled, { keyframes, css } from 'styled-components'; 
import ImageSlider from '../components/ImageSlider';



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

    const SliderData = [
        {
          image:
            'https://images.unsplash.com/photo-1546768292-fb12f6c92568?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
        },
        {
          image:
            'https://images.unsplash.com/photo-1501446529957-6226bd447c46?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1489&q=80'
        },
        {
          image:
            'https://images.unsplash.com/photo-1483729558449-99ef09a8c325?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80'
        },
        {
          image:
            'https://images.unsplash.com/photo-1475189778702-5ec9941484ae?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1351&q=80'
        },
        {
          image:
            'https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80'
        }
      ];
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
  
    return (
    <div className={`entirePopup ${props.vis ? "isVis" : ""}`} onClick={props.onClose}>
      {/* <div className={`popupContent ${props.vis ? "isVis" : ""}`} > original */}
      {/* <div className={`popupContent ${props.vis ? "isVis" : ""}`} style={{position:'fixed', transform: `translateY(${props.vis ? "0" :  (props.cardInfo!.rect!.top - (props.cardInfo!.rect!.height / 2))}px)`, scale:`0.1`, transition:"transform 1s" }}> */}
      {/* <div className={`popupContent ${props.vis ? "isVis" : ""}`} style={{position:'fixed', transform: `translateX(calc(${props.cardInfo!.rect!.left}px - 50vw + 50%))`, scale:`1`, transition:"transform 0s" }}> */}
      {/* <div className={`popupContent ${props.vis ? "isVis" : ""}`} style={{position:'fixed', transformOrigin: "left",transform: `translateX(calc(${ props.cardInfo!.rect!.left}px - ${ "50"}vw + ${ "50"}%))`, scale:`${"1"}`, transition:"transform 10s , scale 1s" }}> */}
      {/* <div className={`popupContent ${props.vis ? "isVis" : ""}`} style={{position:'fixed', transformOrigin: `${props.vis ? "center" : "left"}`, transform: `translateX(calc(${props.vis ? "0" : props.cardInfo!.rect!.left}px - ${props.vis ? "0" : "50"}vw + ${props.vis ? "0" : "50"}%)) translateY(${props.vis ? "0" :  (props.cardInfo!.rect!.top - (props.cardInfo!.rect!.height / 2))}px)`, scale:`${ "0.9"}`, transition:"transform 0s , scale 0s, transformOrigin 1s"}}> */} {/* complete x AND y */}
      {/* <div className={`popupContent ${props.vis ? "isVis" : ""}`} data-x={`calc(${props.vis ? "0" : props.cardInfo!.rect!.left}px - ${props.vis ? "0" : "50"}vw + ${props.vis ? "0" : "50"}%)`} data-y={`${props.vis ? "0" :  (props.cardInfo!.rect!.top - (props.cardInfo!.rect!.height / 2))}px)`}> passing in data with ternaries */}
      {/* <div className={`popupContent ${props.vis ? "isVis" : ""}`} data-x={`calc(${ props.cardInfo!.rect!.left}px - ${ "50"}vw + ${ "50"}%)`} data-y={`${ (props.cardInfo!.rect!.top - (props.cardInfo!.rect!.height / 2))}`}> all ternaries removed */}

      {/* <div
        className={`popupContent ${props.vis ? "isVis" : ""}`}
        style={{
            animation: `${props.vis
              ? `${popupAnimation} 5s`
              : "none"}`
          }}
        > */}
      <StyledPopup onClose={props.onClose} vis={props.vis} cardInfo={props.cardInfo} className={`popupContent ${props.vis ? "isVis" : ""}`}>
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
                GitHub Repository: 
            </span>
            <span className= 'displayContent'>
                {props.cardInfo!.git}
            </span>
        </div>
        <div className='gantt'>
            {/* {props.cardInfo!.gantt} */}
            <span className='category'>
                Gantt Chart: 
            </span>
            <span className= 'displayContent'>
                {props.cardInfo!.gantt}
            </span>
        </div>
        {/* <div className="carHolder" > */}
        <div style={{paddingTop:'3rem'}}>
            <ImageSlider slides={SliderData}/>
        </div>
        {/* </div> */}
        {/* <div className='media'>
            <span className='category'>
                More photos: 
            </span>
            <span className= 'displayContent'>
                {props.cardInfo!.drive}
            </span>
        </div> */}
        
        
      {/* </div> */}
      </StyledPopup>
    </div>
  );
}

export default Popup;