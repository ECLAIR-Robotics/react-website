import React from 'react'
import '../styles/sponsors.css';

interface ContactInformationContainerProps {
    href?: string
    altTxt?: string
    title: string
    body: string
    img: string
}


function ContactInformationContainer(props : ContactInformationContainerProps) {
    return (
    <a href={props.href}>
        <div className='cgE' style={{marginLeft:'2rem'}}>
            <div className='cgPicHolder'>
                <img src={props.img} className='cgPic' alt={props.altTxt}></img>
            </div>
            <div className='cgText'>
                <div className='cgTitle'>
                {props.title}
                </div>
                <div className='cgData'>
                {props.body}
                </div>
            </div>
        </div>
    </a>
    )
}

export default ContactInformationContainer