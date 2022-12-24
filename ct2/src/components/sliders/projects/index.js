import React, { useState, useRef } from 'react';
import Slider from "react-slick";
import { projects_data } from "./projects_data";
import "./style.css";

function MultiSliderA () {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div className="projects-main-container">
      <div className="projects-info">
        <div className="multislider-title">Our projects</div>
        <div className="multislider-desc">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem possimus distinctio ex. 
          Natus totam voluptatibus animi aspernatur ducimus quas obcaecati mollitia quibusdam temporibus culpa dolore molestias blanditiis consequuntur sunt nisi.
        </div>
      </div>
      <div className="multislider-wrapper">
      <Slider {...settings}>
      {projects_data.map((slider) => (
        <div>
          <div>
            <img className="multi-slider-img" src={slider.image} />
          </div>
        </div>
      ))}
      </Slider>
      </div>
    </div>
  )
}

export default MultiSliderA;