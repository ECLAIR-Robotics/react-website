import React from 'react';
import {useState, useRef, forwardRef, useEffect} from 'react';
import '../styles/imageprojectcard.css';
import Popup from './Popup';
import TestVid from '../static/videos/testvid.mp4'

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

    const videoRef = useRef<HTMLVideoElement>(null);
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        if (isHovering) {
        videoRef.current?.play();
        } else {
        videoRef.current?.pause();
        }
    }, [isHovering]);
    
    return (
        <div className="entireCard" onClick={props.onOpenPopup} ref ={ref} onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)} >
            <div className="overlayText">
                <div className="projectName" data-text={props.name}>{props.name}</div>
                <hr className="divider" />
                <div className="clickText">Click to learn more!</div>
            </div>
            <img src={props.img} className="cardImage"></img>
            <video className='projectVideo' ref={videoRef} controls={false}>
                <source src={TestVid}></source>
            </video>
        </div>
    )
});

export default ImageProjectCard