import React, { useEffect } from 'react';
import emailjs from '@emailjs/browser';
import '../styles/mailer.css'
import ECLAIRButton from './ECLAIRButton';
import { useState, useRef } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

const Mailer = () => {
    async function sendEmail(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        if(formSubmitted()) {
            emailjs.sendForm(
                'service_lf68y8i',
                'template_a7v3kjq',
                e.currentTarget,
                "NIC61fRJW1mmr-YPC"
            ).then(() => {
                console.log("Email sent successfully!")
            }).catch((error) => { console.log("Email failed to send."); console.log(error) });
            
            console.log(captchaRef.current.getValue())
            console.log(typeof(captchaRef.current.getValue()))
            e.currentTarget.reset()
        }
    };

    const captchaRef = useRef<any>(null);
    const [formClassName, setFormClassName] = useState('formContactUs');
    const [formTextClassName, setFormTextClassName] = useState('formTextHidden');
    const nameRef = useRef<HTMLInputElement>(null);
    const emailRef = useRef<HTMLInputElement>(null);

    const [isHuman, setIsHuman] = useState(false);
    const [token, setToken] = useState(" ");
    useEffect (() => {
        if (!token || token.length < 5) {
            setIsHuman(false);
        } else {
            setIsHuman(true);
        }
    
    }, [token]);

    function handleCaptchaChange() {
        setToken(captchaRef.current?.getValue());
    }

    const formSubmitted = () => {
        
        const name = nameRef.current?.value;
        const email = emailRef.current?.value;        
        // setToken(captchaRef.current?.getValue());
        if ( name === "" || email === "") {
            alert("Please fill out all fields.");
            return false;
        } else if (!isHuman) {
            alert("Please complete reCAPTCHA.");
            return false;
        }
        setFormClassName('formContactUsHidden');
        setFormTextClassName('boldText');
        return true;
    }

    return (
        <div className="border"
        >
            <div className={`${formTextClassName}`}>Your message has successfully been submitted!</div>
            <form
                name="contact-form"
                className={`${formClassName}`}
                style={{ margin: "5em 5em 5em 6em", justifyContent: 'center', marginTop: "3em" }}
                onSubmit={sendEmail} 
                >
                

                <label
                    style={{ display: 'flex', fontSize: '1.5em', }}
                    className="formText" >Name
                    <span className='reqAsterisk'>*</span>
                </label>
                <input
                    type="text"
                    name="name"
                    id="nameInput"
                    className="form-control"
                    ref={nameRef}
                    style={{
                        display: 'flex',
                        width: '96%',
                        height: '1em',
                        padding: '1em',
                        marginTop: "1em",
                        justifyContent: 'center',

                    }}
                />

                <label
                    style={{ display: 'flex', fontSize: '1.5em', marginTop: "20px" }}
                    className="formText" >Email
                    <span className='reqAsterisk'>*</span>
                </label>
                <input
                    type="email"
                    name="user_email"
                    id="emailInput"
                    className="form-control"
                    ref={emailRef}
                    style={{

                        display: 'flex',
                        width: '96%',
                        height: '1em',
                        padding: '1em',
                        marginTop: "1em"
                    }}
                />

                <label
                    className="formText"
                    style={{ display: 'flex', fontSize: '1.5em', marginTop: "0.5em" }} >Message</label>
                <textarea
                    name="message"
                    className="form-control"
                    style={{
                        display: 'flex',
                        marginTop: "1.5em",
                        width: '96%',
                        height: '20em',
                        padding: "1em 1em 1em 1em",
                    }} />

                <br />
                
                <div className='contactCapHolder'>
                    <ReCAPTCHA sitekey='6LeLRE8mAAAAAA7E4akd1Pysi5Nbr1DCKvF9mI-i' ref={captchaRef} onChange={handleCaptchaChange}/>
                </div>

                <ECLAIRButton radius='1em' type="submit" text="Send" />
            </form>

        </div>

    )
};

export default Mailer;
