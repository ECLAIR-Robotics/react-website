import React from 'react';
import emailjs from '@emailjs/browser';
import '../styles/mailer.css'
import ECLAIRButton from './ECLAIRButton';
import { useState, useRef } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

const Mailer = () => {
    async function sendEmail(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        if(captchaRef.current && formSubmitted()) {
            // emailjs.sendForm(
            //     'service_lf68y8i',
            //     'template_a7v3kjq',
            //     e.currentTarget,
            //     "NIC61fRJW1mmr-YPC"
            // ).then(() => {
            //     console.log("Email sent successfully!")
            // }).catch(() => { console.log("Email failed to send.") });
            verifyResponse(captchaRef.current.getValue())
            console.log(captchaRef.current.getValue())
            console.log(typeof(captchaRef.current.getValue()))
            e.currentTarget.reset()
        }
    };

    const verifyResponse = async (key : string) => {
        var requestOptions = {
            method: 'POST',
            // redirect: 'follow'
          };
          
          fetch(`https://www.google.com/recaptcha/api/siteverify?secret=6LeLRE8mAAAAAA4eH4Ciuj5LdiAs0K55cywLQ4RT&reponse=${key}`, requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));
        // const ver = await fetch(`https://www.google.com/recaptcha/api/siteverify?secret=6LeLRE8mAAAAAA4eH4Ciuj5LdiAs0K55cywLQ4RT&response=` + key,
        // {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json',
        //         'Host' : 'localhost',

        //     },
            // body : JSON.stringify(
            //     {
            //         "event": {
            //             "token": key,
            //             "siteKey": "6LeLRE8mAAAAAA7E4akd1Pysi5Nbr1DCKvF9mI-i",
            //             "expectedAction": "submit"
            //         }
                    
            //     }
            // )
        // });
        // console.log(ver);
    }
    const captchaRef = useRef<any>(null);

    const [formClassName, setFormClassName] = useState('formContactUs');
    const [formTextClassName, setFormTextClassName] = useState('formTextHidden');
    const nameRef = useRef<HTMLInputElement>(null);
    const emailRef = useRef<HTMLInputElement>(null);
    const formSubmitted = () => {
        
        const name = nameRef.current?.value;
        const email = emailRef.current?.value;
        if ( name === "" || email === "") {
            alert("Please fill out all fields.");
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
                
                <ReCAPTCHA sitekey='6LeLRE8mAAAAAA7E4akd1Pysi5Nbr1DCKvF9mI-i' ref={captchaRef}  />
                {/* <script type="text/javascript">
                    var onloadCallback = function() {
                        alert("grecaptcha is ready!");
                    };
                    </script> <script type="text/javascript">
                    var onloadCallback = function() {
                        alert("grecaptcha is ready!");
                    };
                    </script>
                <script async src="https://www.google.com/recaptcha/api.js"></script> */}

                <ECLAIRButton radius='1em' type="submit" text="Send" />
            </form>

        </div>

    )
};

export default Mailer;
