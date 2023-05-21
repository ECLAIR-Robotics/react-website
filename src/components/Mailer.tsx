import React from 'react';
import emailjs from '@emailjs/browser';
import '../styles/mailer.css'
import ECLAIRButton from './ECLAIRButton';

/*
    THINGS TO DO:
        * Make fields required
        * Make the fields disappear once email has been successfully sent
*/

const Mailer = () => {
    function sendEmail(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        emailjs.sendForm(
            'service_lf68y8i',
            'template_a7v3kjq',
            e.currentTarget,
            "NIC61fRJW1mmr-YPC"
        ).then(() => {
            console.log("Email sent successfully!")
        }).catch(() => { console.log("Email failed to send.") });
        e.currentTarget.reset()
    };
    return (
        <div className="border"
            style={{
                marginTop: "50px",
                width: "45%",
                // backgroundColor: '#424868',
                backgroundPosition: "center",
                backgroundSize: "cover",

            }}>
            <form

                className="margins"
                style={{ margin: "5em 5em 5em 6em", justifyContent: 'center', marginTop: "3em" }}
                onSubmit={sendEmail} >

                <label
                    style={{ display: 'flex', fontSize: '2em', }}
                    id="boldText" >Name</label>
                <input
                    type="text"
                    name="name"
                    className="form-control"
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
                    style={{ display: 'flex', fontSize: '2em', marginTop: "20px" }}
                    id="boldText" >Email</label>
                <input
                    type="email"
                    name="user_email"
                    className="form-control"
                    style={{
                        
                        display: 'flex',
                        width: '96%',
                        height: '1em',
                        padding: '1em',
                        marginTop: "1em"
                    }}
                />

                <label
                    id='boldText'
                    style={{ display: 'flex', fontSize: '2em', marginTop: "0.5em" }} >Message</label>
                <textarea
                    name="message"
                    className="form-control"
                    style={{
                        display: 'flex',
                        marginTop: "1.5em",
                        width: '96%',
                        height: '20em',
                        padding:"1em 1em 1em 1em",
                    }} />

                <br />
                <ECLAIRButton radius='1em' type="submit" text="Send" />

            </form>

        </div>

    )
};

export default Mailer;
