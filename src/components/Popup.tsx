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
    } | null;
    onClose : () => void;
}

function Popup(props : Props) {
  return (
    <div className="entirePopup">
      <div className="popupContent">
        <h1 className='pName'>{props.cardInfo!.name}</h1>
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
        <p className='desc'>
            {props.cardInfo!.desc}
            {/* <span className='category'>
                Members: 
            </span>
            <span className= 'displayContent'>
                {props.cardInfo!.desc}
            </span> */}
        </p>
        <div className='git'>{props.cardInfo!.git}</div>
        <div className='gantt'>{props.cardInfo!.gantt}</div>
        
        <button className="closeButton" onClick={props.onClose}>Close</button>
      </div>
    </div>
  );
}

export default Popup;