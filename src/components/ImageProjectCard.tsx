import React from 'react';
import {useState, useRef, forwardRef, useEffect} from 'react';
import '../styles/imageprojectcard.css';

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

}

const ImageProjectCard = forwardRef<HTMLDivElement, Props>((props : Props, ref) => {
    const [imgLoaded, setImgLoaded] = useState(false);
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        if (isHovering) {
        videoRef.current?.play();
        } else {
        videoRef.current?.pause();
        }
    }, [isHovering]);

    function loadComplete() {
        setImgLoaded(true);
    }
    
    return (
        <div className={`entireCard ${imgLoaded ? "" : "loading"}`} onClick={props.onOpenPopup} ref ={ref} onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)} >
            <div className="overlayText">
                <div className="projectName" data-text={props.name}>{props.name}</div>
                <hr className="divider" />
                <div className="clickText">Click to learn more!</div>
            </div>
            <img src={props.img} onLoad={loadComplete} className="cardImage"></img>
            <img src={props.vid} className='projectVideo'></img>
            {/* <video className='projectVideo' ref={videoRef} controls={false} muted={true}>
                <source src={TestVid}></source>
            </video> */}
        </div>
    )
});

export default ImageProjectCard