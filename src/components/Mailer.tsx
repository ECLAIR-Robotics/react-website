import React from 'react';
import emailjs from '@emailjs/browser';


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
        ).then(()=>{
            console.log("Email sent successfully!")
        }).catch(() => { console.log("Email failed to send.")});
        e.currentTarget.reset()
    };
    return (
        <div className = "border"
        style = {{
            marginTop:"50px", 
            width: "45%",
            backgroundColor: '#424868',
            backgroundPosition: "center",
            backgroundSize: "cover",
        }}>
            <form 

                className = "margins" 
                style = {{margin:"25px 85px 75px 100px", justifyContent:'center', marginTop: "70px"}}
                onSubmit = {sendEmail} >
            
                <label 
                    style = {{display: 'flex', fontSize: '26px', }} 
                    id = "boldText" >Name</label>
                <input 
                    type = "text" 
                    name = "name" 
                    className = "form-control"
                    style = {{
                        display: 'flex', 
                        width: '96%',
                        height: '30px',
                        marginTop: "10px",
                        justifyContent:'center'}} 
                />

                <label 
                    style = {{display: 'flex', fontSize: '26px', marginTop: "20px"}}
                    id = "boldText" >Email</label>
                <input 
                    type = "email" 
                    name = "user_email" 
                    className = "form-control"
                    style = {{
                        display: 'flex', 
                        width: '96%',
                        height: '30px',
                        marginTop: "10px"}} 
                    />

                <label 
                    id='boldText' 
                    style = {{display: 'flex', fontSize: '26px', marginTop: "20px"}} >Message</label>
                <textarea 
                    name = "message" 
                    className = "form-control"
                    style = {{
                        display: 'flex', 
                        marginTop: "10px",
                        width: '96%', 
                        height: '200px'}} />

                <input 
                    type = "submit" 
                    className = "form-control"
                    style = {{marginTop: "30px", width: '100px',
                    height: '40px', fontSize: '20px'}}
                />
            </form>
            
        </div>

    )
};

export default Mailer;
