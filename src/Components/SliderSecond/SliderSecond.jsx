import React from "react";
import CardsSecond from "../CardsSecond/CardsSecond";
import Carousel from 'react-multi-carousel';
import Slider from "react-slick";


const SliderSecond = ({position}) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
  };
  return (
    <>
      {/* <Carousel responsive={responsive}>
        
    
       
      </Carousel> */}
      <div className="slider-second-desktop-version">
      <Slider {...settings}>
      {position.map((item,index)=>{
          return     <CardsSecond key={index} p={item.name} p2="-40%" />
        })}
          
        </Slider>
      </div>
      <div className="slider-second-mobile-version"> 
      {position.map((item,index)=>{
          return     <CardsSecond key={index} p={item.name} p2="-40%" />
        })}
      </div>
      
    </>
  );
};

export default SliderSecond;
