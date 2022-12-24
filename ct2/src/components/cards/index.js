import React from "react";
import "./style.css";
import cardicon1 from "../imgs/eyeglasses.svg";
import cardicon2 from "../imgs/bezier.svg";
import cardicon3 from "../imgs/display.svg";

function Cards () {
    return (
        <div className="cards-main-container">
            <div>
                <div className="cards-main-title">Our approach</div>
                <div className="cards-main-desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem possimus distinctio ex. Natus totam voluptatibus 
                    animi aspernatur ducimus quas obcaecati mollitia quibusdam temporibus culpa dolore 
                    molestias blanditiis consequuntur sunt nisi.</div>
                <div className="cards-container">
                    <div id="card-wrapper">
                        <div><img src={cardicon1} alt="" /></div>
                        <div id="card-title">Data gathering</div>
                        <div id="card-desc">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem possimus distinctio ex. Natus totam voluptatibus animi aspernatur ducimus quas obcaecati mollitia 
                            quibusdam temporibus culpa dolore molestias blanditiis consequuntur sunt nisi.
                        </div>
                    </div>
                    <div id="card-wrapper">
                        <div><img src={cardicon2} style={{rotate: "-45deg"}} alt="" /></div>
                        <div id="card-title">Implementation</div>
                        <div id="card-desc">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem possimus distinctio ex. Natus totam voluptatibus animi aspernatur ducimus quas obcaecati mollitia 
                            quibusdam temporibus culpa dolore molestias blanditiis consequuntur sunt nisi.
                        </div>
                    </div>
                    <div id="card-wrapper">
                        <div><img src={cardicon3} alt="" /></div>
                        <div id="card-title">Launch</div>
                        <div id="card-desc">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem possimus distinctio ex. Natus totam voluptatibus animi aspernatur ducimus quas obcaecati mollitia 
                            quibusdam temporibus culpa dolore molestias blanditiis consequuntur sunt nisi.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cards;