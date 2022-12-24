import React from "react";
import "./style.css";

function Subscription () {
    return (
        <div className="sub-main-container">
            <div id="sub-purple-background"></div>
            <div className="sub-container">
                <div className="sub-info">
                    <div className="sub-title">Choose your plan</div>
                    <div className="sub-desc">
                        Natus totam voluptatibus animi aspernatur ducimus quas obcaecati mollitia quibusdam 
                        temporibus culpa dolore molestias blanditiis consequuntur sunt nisi.
                    </div>
                </div>
                <div className="subscriptions-wrapper">
                    <div className="item">
                        <div id="sub-type">Starters</div>
                        <div id="sub-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
                        <div id="sub-price">
                            Starting at
                            <div id="price">$7</div>
                            per month
                        </div>
                        <div id="sub-info">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                            Cum enim nobis aspernatur saepe dolores?
                        </div>
                        <div class="sub-button" id="purple">Get started</div>
                    </div>
                    <div className="item">
                        <div id="sub-type">Premium</div>
                        <div id="sub-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
                        <div id="sub-price">
                            Starting at
                            <div id="price">$75</div>
                            per month
                        </div>
                        <div id="sub-info">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                            Cum enim nobis aspernatur saepe dolores?
                        </div>
                        <div class="sub-button" id="red">Get started</div>
                    </div>
                    <div className="item">
                        <div id="sub-type">Enterprise</div>
                        <div id="sub-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
                        <div id="sub-price">
                            Starting at
                            <div id="price">$390</div>
                            per month
                        </div>
                        <div id="sub-info">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                            Cum enim nobis aspernatur saepe dolores?
                        </div>
                        <div class="sub-button" id="purple">Get started</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Subscription;