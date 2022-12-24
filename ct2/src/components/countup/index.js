import React from "react";
import "./style.css";
import CountUp from 'react-countup';
import reload from "../imgs/arrow-clockwise.svg";
import display from "../imgs/display.svg";
import message from "../imgs/chat-text.svg";
import download from "../imgs/download.svg";

function Count() {
    return(
        <div className="countup">
            <div className="countup-container">
                <div>
                    <div><img src={reload} alt=""/></div>
                    <div>
                        <div className="countup-numbers"><CountUp end={360} duration={5} /></div>
                        <div id="countup-tag">Creativity</div>
                    </div>
                </div>
                <div>
                    <div><img src={download} alt=""/></div>
                    <div>
                        <div className="countup-numbers"><CountUp end={4500} duration={5} /></div>
                        <div id="countup-tag">WordPress Themes</div>
                    </div>
                </div>
                <div>
                    <div><img src={display} alt=""/></div>
                    <div>
                        <div className="countup-numbers"><CountUp end={120} duration={5} /></div>
                        <div id="countup-tag">HTML5 / CSS3</div>
                    </div>
                </div>
                <div>
                    <div><img src={message} alt=""/></div>
                    <div>
                        <div className="countup-numbers"><CountUp end={3913} duration={5} /></div>
                        <div id="countup-tag">Bootstrap</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Count;