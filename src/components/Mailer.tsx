import React from 'react'
import emailjs from '@emailjs/browser'

const Mailer = () => {
    function sendEmail(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        emailjs.sendForm(
            'service_lf68y8i', 
            'template_a7v3kjq',
            e.currentTarget,
            "NIC61fRJW1mmr-YPC"
        ).then(()=>{
            console.log("Email sent successfully!")
        }).catch(() => { console.log("Email failed to send.")});
        e.currentTarget.reset()
    };
    return (
        <div className = "border"
        style = {{
            marginTop:"50px", 
            width: "50%",
            backgroundImage: "linear-gradient(135deg, #c675ff, #0050c7)",
            backgroundPosition: "center",
            backgroundSize: "cover",
        }}>
            <form 
                className = "margins" 
                style = {{margin:"25px 85px 75px 100px"}}
                onSubmit = {sendEmail} >
            
                <label>Name</label>
                <input type = "text" name = "name" className = "form-control"/>

                <label>Email</label>
                <input type = "email" name = "user_email" className = "form-control"/>

                <label>Message</label>
                <textarea name = "message" className = "form-control"/>
                
                <input 
                    type = "submit" 
                    value = "Send" 
                    className = "form-control"
                    style = {{marginTop: "30px"}}
                />
            </form>
        </div>

    )
};

export default Mailer;
