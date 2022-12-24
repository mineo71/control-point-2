import React from "react";
import "./style.css";
import photo1 from "../imgs/img_1.jpg";
import vector from "../imgs/bezier.svg";

function AboutCompany () {
    return (
        <div className="about-company">
            <div className="about-company-container">
                <div id="left-container">
                    <div className="about-company-title">Love our works</div>
                    <div className="about-company-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem possimus distinctio ex.
                    Natus totam voluptatibus animi aspernatur ducimus quas obcaecati mollitia quibusdam temporibus culpa dolore molestias 
                    blanditiis consequuntur sunt nisi.</div>
                    <div className="about-company-text">
                    Aperiam neque id, illum laudantium autem vero quae debitis tempora modi. Ipsa molestias enim in rem et incidunt beatae 
                    fugit, ab quam optio atque maiores facere est quidem, veritatis commodi.
                    </div>
                    <div>
                        <ul>
                            <li>Aperiam neque id illum laudantium</li>
                            <li>Maiores facere est quidem</li>
                            <li>Laudantium autem vero</li>
                        </ul>
                    </div>
                </div>
                <div id="right-container">
                    <div><img src={photo1} alt="photo1" /></div>
                    <div id="purple-box">
                        <span><img src={vector} alt="vector" /></span>
                        <div id="purple-box-subtitle">Pixel perfect templates</div>
                        <div id="purple-box-desc">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati commodi aspernatur eum eius inventore facilis.
                        </div>
                        <div id="purple-box-desc">Visit <span style={{color: "#dc3545"}}>Colorlib</span></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutCompany;