import React from "react";
import "./style.css";
import heart from "../imgs/heart-fill.svg";

function Footer () {
    return (
        <div className="footer">
            <div className="footer-container">
                <div className="info-wrapper">
                    <div>
                        <div className="footer-title">About us</div>
                        <div id="footer-text">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                            Porro consectetur ut hic ipsum et veritatis corrupti. 
                            Itaque eius soluta optio dolorum temporibus in, atque, 
                            quos fugit sunt sit quaerat dicta.
                        </div>
                    </div>
                    <div>
                        <div className="footer-title">Links</div>
                        <div id="footer-links">
                            <div>Home</div>
                            <div>Projects</div>
                            <div>Process</div>
                            <div>Testimonials</div>
                            <div>Services</div>
                        </div>
                    </div>
                    <div>
                        <div className="footer-title">Subscribe</div>
                        <div id="footer-text">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                            Nesciunt incidunt iure iusto architecto? Numquam, natus?
                        </div>
                        <div>
                            <div id="form-wrapper">
                                <input id="footer-input" type="text" placeholder="Email" />
                                <input id="submit-button" type="submit" value="Subscribe" />
                            </div>
                        </div>
                    </div>
                </div>
                <hr />
                <div id="footer-desc">Copyright ©2022 All rights reserved | 
                This template is made with <img style={{width: "10px"}} src={heart} alt="heart-icon" /> by Colorlib</div>
            </div>
        </div>
    )
}

export default Footer;