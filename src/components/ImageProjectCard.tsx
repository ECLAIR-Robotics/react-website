import React from 'react';
import {useState, useRef, forwardRef} from 'react';
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

const ImageProjectCard = forwardRef<HTMLDivElement, Props>((props : Props, ref) => {

    
    return (
        <div className="entireCard" onClick={props.onOpenPopup} ref ={ref}>
            <div className="overlayText">
                <div className="projectName" data-text={props.name}>{props.name}</div>
                <hr className="divider" />
                <div className="clickText">Click to learn more!</div>
            </div>
            <img src={props.img} className="cardImage"></img>
        </div>
    )
});

export default ImageProjectCard