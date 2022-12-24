import React from 'react';
import Slider from "react-slick";
import { testimonials_data } from "./testimonials_data";
import "./style.css";

function Testimonials () {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div className="testimonials-main-container">
      <div className="testimonials-info">
        <div className="testimonials-title">Testimonials</div>
        <div className="testimonials-desc">
        Natus totam voluptatibus animi aspernatur ducimus quas obcaecati mollitia quibusdam temporibus culpa dolore molestias blanditiis consequuntur sunt nisi.
        </div>
        </div>
      <div className="slider-wrapper">
      <Slider {...settings}>
      {testimonials_data.map((slider) => (
        <div>
          <div className='person-info'>
            <div>
              <div id="person-text">{slider.description}</div>
              <div id='person-credits'>{slider.credits}</div>
            </div>
            <div><img className="person-img" src={slider.image} alt="person-img"/></div>
          </div>
        </div>
      ))}
      </Slider>
      </div>
    </div>
  )
}

export default Testimonials;