import React from 'react';
import {useState} from 'react';
import '../styles/imageprojectcard.css';
import Popup from './Popup';

interface Props {
    img: string;
    name: string;

    // onClick: () => void;

    lName : String;
    members : String;
    desc : String;
    git : String;
    gantt : String;

    onOpenPopup : () => void;

    key: number;
}

// lName="Sahil 'Cracked' Jain, Conrad the Condad" members="Elon Musk, Bill Gates, Michael Dell, Greg Tanyk, Shawarma Anjelika, Vi Herma" desc= 'By utilizing how cracked each of these individuals are, this project is a simple three step plan. The first step is curing cancer. The second is bringing about world peace. And the last is creating a new world order in which AI rules supreme.' git="apple.com" gantt="costco.com"

function ImageProjectCard(props : Props) {
    // const [showPopup, setShowPopup] = useState(false);

    // const togglePopup = () => {
    //     setShowPopup(!showPopup);
    // }
    
    return (
        <div className="entireCard" 
        onClick={props.onOpenPopup}
        >
            <div className="overlayText">
                <div className="projectName" data-text={props.name}>{props.name}</div>
                <hr className="divider" />
                <div className="clickText">Click to learn more!</div>
            </div>
            <img src={props.img} className="cardImage"></img>
            {/* {showPopup && <Popup closeFunction={togglePopup}>
                <h1 className='projectName'>{props.name}</h1>
                <div className='lead'>{props.lName}</div>
                <div className='members'>{props.members}</div>
                <p className='desc'>{props.desc}</p>
                <div className='git'>{props.git}</div>
                <div className='gantt'>{props.gantt}</div>
            </Popup>} */}
        </div>
    )
}

export default ImageProjectCard