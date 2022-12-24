import React from 'react';
import Slider from "react-slick";
import { services_data } from "./services_data";
import "./style.css";

function Services () {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
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
    <div className="services-main-container">
      <div className="services-info">
        <div className="services-title">Services</div>
        <div className="services-desc">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
        Rem possimus distinctio ex. Natus totam voluptatibus animi aspernatur ducimus quas obcaecati mollitia quibusdam temporibus culpa dolore molestias blanditiis consequuntur sunt nisi.
        </div>
      </div>
      <div className="services-wrapper">
      <Slider {...settings}>
      {services_data.map((slider) => (
        <div className="service-slide">
          <div id="purple-border"></div>
          <div id="service-icon">
            <img src={slider.icon} />
          </div>
          <div id="service-slide-title">{slider.title}</div>
          <div id="service-slide-desc">{slider.description}</div>
        </div>
      ))}
      </Slider>
      </div>
    </div>
  )
}

export default Services;