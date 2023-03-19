import React from 'react'
import '../styles/projectcard.css'

interface Props {
    img: string;
    h2: string;
}

function ProjectCard(props : Props) {
    
    const projectInfo = [
        
    ];
    
    return (
        <div className="entireCard">
            <img src={props.img} className="cardImage"></img>
            <div className="cardText">
                <h2 className="cardTitle">{props.h2}</h2>
                {/* <p className="cardDesc">{props.p}</p> */}
            </div>
            <div className="buttonHolder">
                <button className="moreButton">
                    <span className="buttonText">
                        Learn More
                    </span>
                </button>
            </div>
        </div>
    )
}

export default ProjectCard