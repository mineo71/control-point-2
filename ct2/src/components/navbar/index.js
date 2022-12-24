import React from "react";
import { useState, useEffect} from "react";
import { Link } from "react-scroll";
import "./style.css";
import burger from "../imgs/list.svg"

function Navbar () {

const [navbar, setNavbar] = useState(false);

const changeHeight = () => {
    if(window.scrollY >= 70) {
        setNavbar(true);
    }
    else {
        setNavbar(false);
    }
}
useEffect(() => {
    changeHeight();
    window.addEventListener("scroll", changeHeight);
  })
    return (
        <div className={navbar ? "navbar active" : "navbar"}>
            <div>
                <div id="links-wrapper">
                    <div id="expert">Expert</div>
                    <div id="navbar-link"><Link activeClass="activelink" smooth spy to="purple-background">Home</Link></div>
                    <div id="navbar-link"><Link activeClass="activelink" smooth spy to="projects-main-container">Projects</Link></div>
                    <div id="navbar-link"><Link activeClass="activelink" smooth spy to="cards-main-container">Process</Link></div>
                    <div id="navbar-link"><Link activeClass="activelink" smooth spy to="testimonials-main-container">Testimonials</Link></div>
                    <div id="navbar-link"><Link activeClass="activelink" smooth spy to="services-main-container">Services</Link></div>
                </div>
            <div id="links-wrapper"> 
                <div id="navbar-link" style={{color: "black"}}><Link activeClass="activelink" smooth spy to="sub-main-container">Pricing</Link></div>
                <div id="navbar-button" style={{color: "white"}}><Link activeClass="activelink" smooth spy to="contact-main-container">Contact</Link></div>
                <div id="burger"><img src={burger} alt="burger"/></div>
            </div>
            </div>
        </div>
    )
}

export default Navbar;