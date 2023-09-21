import React from "react";
import Carousel from "react-multi-carousel";
import CardThird from "../CardThird/CardThird";

import Slider from "react-slick";
import { Link } from "react-router-dom";
const SliderThird = ({offer}) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots:false,
          autoplay: true,
          speed: 2000,
          autoplaySpeed: 4000,
        }
      }
    ]
  };
  return (
    <> <div className="slider-second-desktop-version">
    <Slider {...settings}>
    {offer.map((item,index)=>{
          return     <Link to={item.link}> <CardThird ird key={index} image={item.image}/></Link>
        })}
        
      </Slider>
    </div>
    <div className="slider-second-mobile-version slider-third"> 
    {offer.map((item,index)=>{
          return     <Link to={item.link}> <CardThird  key={index} image={item.image}/></Link>
        })}
    </div>
    
    </>
  );
};

export default SliderThird;
