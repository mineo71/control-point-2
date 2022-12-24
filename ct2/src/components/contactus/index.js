import React from "react";
import "./style.css";
import contactimage from "../imgs/about_1.jpg.webp"

function ContactUs () {
    return (
        <div className="contact-main-container">
            <div className="contact-container">
                <div>
                    <div className="contact-title">Contact us</div>
                    <div className="contact-desc">
                        Natus totam voluptatibus animi aspernatur ducimus quas obcaecati 
                        mollitia quibusdam temporibus culpa dolore molestias blanditiis consequuntur sunt nisi.
                    </div>
            
                <form className="contact-form-container">
                    <div>
                        <input id="field-name" type="text" name="name" placeholder="First Name" required></input>
                        <input id="field-name" type="text" name="name" placeholder="Last Name" required></input>
                    </div>
                    <input id="field" type="text" name="name" placeholder="Subject" required></input>
                    <input id="field" type="text" name="name" placeholder="Email" required></input>
                    <textarea id="field" type="text" name="name" placeholder="Write your message here." required></textarea>
                    <input id="submit-button" type="submit" value="Send Message"></input>
                </form>
            
                </div>
            <div>
                <img src={contactimage} alt="" />
            </div>
            </div>
        </div>
    )
}

export default ContactUs;