import React from 'react'
import '../styles/imageprojectcard.css'

interface Props {
    img: string;
    name: string;
}

function ImageProjectCard(props : Props) {
    return (
        <div className="entireCard">
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