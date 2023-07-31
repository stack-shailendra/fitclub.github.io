import React from "react";
import './Join.css'
import emailjs from '@emailjs/browser'
import { useRef } from "react";



const Join = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_a62nvqe', 'template_yv1k7bp', form.current, '4rySg_HMv2g_p4h1M')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

        }

        return (
            <div className="Join" id="join-us">
                <div className="left-j">
                    <hr />
                    <div>
                        <span className="stroke-text">READY TO</span>
                        <span>LEVEL UP</span>
                    </div>
                    <div>
                        <span>YOUR BODY</span>
                        <span className="stroke-text">WITH US?</span>
                    </div>
                </div>
                <div className="right-j">
                    <form className="email-container" onSubmit={sendEmail} >
                        <input type="email" name="user_email" placeholder="Enter your email address to join" />
                        <button className="btn-j" type="submit">Join Now</button>
                    </form>
                </div>

            </div>
        );

    
    
}
export default Join