import React from 'react';
import Slider from "react-slick";
import { home_slider_data } from "./home_slider_data";
import "./style.css";

function SimpleSliderA () {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div className="slider-main-container">
      <div className="homeslider-wrapper">
      <Slider {...settings}>
      {home_slider_data.map((slider) => (
        <div>
          <div className='slider-main-info'>
            <div>
              <div className="home-slider-title">{slider.title}</div>
              <div className="home-slider-desc">{slider.description}</div>
            <div className="home-slider-button">{slider.button}</div>
          </div>
          <div><img className="home-slider-img" src={slider.image} alt="slider-img"/></div>
          </div>
        </div>
      ))}
      </Slider>
      </div>
    </div>
  )
}

export default SimpleSliderA;