import React from 'react';
import {useState, useRef, forwardRef, useEffect} from 'react';
import '../styles/imageprojectcard.css';


interface Props {
    img: string;
    name: string;

    openSlides : () => void;

    key: number;
}

const ImageSlideCard = forwardRef<HTMLDivElement, Props>((props : Props, ref) => {
    
    return (
        <div className="entireCard" onClick={props.openSlides} ref ={ref} >
            <div className="overlayText">
                <div className="projectName" data-text={props.name}>{props.name}</div>
                <hr className="divider" />
                <div className="clickText">Click to view slides!</div>
            </div>
            <img src={props.img} className="cardImage"></img>
            {/* <img src={props.vid} className='projectVideo'></img> */}
            {/* <video className='projectVideo' ref={videoRef} controls={false} muted={true}>
                <source src={TestVid}></source>
            </video> */}
        </div>
    )
});

export default ImageSlideCard