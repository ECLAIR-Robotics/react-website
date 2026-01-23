import React from 'react';
import {forwardRef} from 'react';
import '../../styles/projects/resourcescard.css';


interface Props {
    img: string;
    name: string;

    openSlides : () => void;

    key: number;
}

const ResourcesCard = forwardRef<HTMLDivElement, Props>((props : Props, ref) => {
    
    return (
        <div className="entireCard1" onClick={props.openSlides} ref ={ref} >
            <div className="overlayText">
                <div className="projectName" data-text={props.name}>{props.name}</div>
                <hr className="divider" />
                <div className="clickText">Click to view slides!</div>
            </div>
            <img src={props.img} className="cardImage"></img>
        </div>
    )
});

export default ResourcesCard