import React from 'react';
import {useState, useRef, forwardRef, useEffect} from 'react';
import '../styles/imageprojectcard.css';
// import pcrP from '../static/images/pcrP.jpg';
// import chessP from '../static/images/chessP.jpg';
// import droneP from '../static/images/droneP.jpg';
// import fitnessP from '../static/images/fitnessP.jpg';
// import musicP from '../static/images/musicP.jpg';
// import Popup from './Popup';
import TestVid from '../static/videos/chessTest.gif';

interface Props {
    img: string;
    name: string;
    lName : String;
    members : String;
    desc : String;
    git : String;
    gantt : String;
    vid : string;

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
            <img src={props.vid} className='projectVideo'></img>
            {/* <video className='projectVideo' ref={videoRef} controls={false} muted={true}>
                <source src={TestVid}></source>
            </video> */}
        </div>
    )
});

export default ImageProjectCard