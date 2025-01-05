import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./UserSlider.css"; 

function MySlider() {
  const settings = {
    dots: true, 
    infinite: true, 
    speed: 500, 
    slidesToShow: 1, 
    slidesToScroll: 1, 
    autoplay: true, 
    autoplaySpeed: 3000, 
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div className="slide">
          <img
            src="https://preview.colorlib.com/theme/florist/img/hero/hero-1.jpg"
            alt="Slide 1"
            className="slide-image"
          />
          <div className="content">
            <h4>FRESH FLOWER & GIFT SHOP</h4>
            <h2>Making beautiful flowers a <br />part of your life.</h2>
            <button className="shop-btn">Shop Now</button>
          </div>
        </div>
        <div className="slide">
          <img
            src="https://preview.colorlib.com/theme/florist/img/hero/hero-2.jpg"
            alt="Slide 2"
            className="slide-image"
          />
          <div className="content">
            <h4>FRESH FLOWER & GIFT SHOP</h4>
            <h2>Making beautiful flowers a <br />part of your life.</h2>
            <button className="shop-btn">Shop Now</button>
          </div>
        </div>

        
      </Slider>
    </div>
  );
}

export default MySlider;