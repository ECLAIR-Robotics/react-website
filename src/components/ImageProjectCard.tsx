import React from 'react';
import {useState} from 'react';
import '../styles/imageprojectcard.css';
import Popup from './Popup';

interface Props {
    img: string;
    name: string;
    lName : String;
    members : String;
    desc : String;
    git : String;
    gantt : String;

    onOpenPopup : () => void;

    key: number;
}

function ImageProjectCard(props : Props) {

    
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
        </div>
    )
}

export default ImageProjectCard