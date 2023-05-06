import React, {ReactNode} from "react";
import '../styles/popup.css';

interface Props {
    // pName : String;
    // lName : String;
    // members : String;
    // desc : String;
    // git : String;
    // gantt : String;
    // onClose : () => void;
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
  return (
    <div className={`entirePopup ${props.vis ? "isVis" : ""}`}>
      {/* <div className={`popupContent ${props.vis ? "isVis" : ""}`} style={{position:'fixed', top:`${props.cardInfo!.rect!.top}px` }}> */} 
      {/* <div className={`popupContent ${props.vis ? "isVis" : ""}`} style={{position:'fixed', transform: `translateY(${props.vis ? "0" :  (props.cardInfo!.rect!.top - (props.cardInfo!.rect!.height / 2))}px)`, scale:`0.1`, transition:"transform 1s" }}> */}
      {/* <div className={`popupContent ${props.vis ? "isVis" : ""}`} style={{position:'fixed', transform: `translateX(calc(${props.cardInfo!.rect!.left}px - 50vw + 50%))`, scale:`1`, transition:"transform 0s" }}> */}
      <div className={`popupContent ${props.vis ? "isVis" : ""}`} style={{position:'fixed', transform: `translateX(calc(${props.vis ? "0" : props.cardInfo!.rect!.left}px - ${props.vis ? "0" : "50"}vw + ${props.vis ? "0" : "50"}%))`, scale:`${"0.1"}`, transition:"transform 10s , scale 1s" }}>
      {/* <div className={`popupContent ${props.vis ? "isVis" : ""}`} style={{position:'fixed', transform: `translateX(calc(${props.vis ? "0" : props.cardInfo!.rect!.left}px - ${props.vis ? "0" : "50"}vw + ${props.vis ? "0" : "50"}%)) translateY(${props.vis ? "0" :  (props.cardInfo!.rect!.top - (props.cardInfo!.rect!.height / 2))}px)`, scale:`${"0.1"}`, transition:"transform 10s , scale 1s" }}> */}
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
            {/* {props.cardInfo!.members} */}
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
            {/* {props.cardInfo!.desc} */}
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
        {/* <div className='media'>
            <span className='category'>
                More photos: 
            </span>
            <span className= 'displayContent'>
                {props.cardInfo!.drive}
            </span>
        </div> */}
        
        <button className="closeButton" onClick={props.onClose}>X</button>
      </div>
    </div>
  );
}

export default Popup;