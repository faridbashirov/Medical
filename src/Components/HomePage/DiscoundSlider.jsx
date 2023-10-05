import React from 'react';
import Slider from "react-slick";
import group15 from "../../assets/Images/Group15.png";
import group16 from "../../assets/Images/Group16.png";
import group17 from "../../assets/Images/Group17.png";
import uuid from 'react-uuid';
import { Link } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
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
        slidesToShow: 2,
        slidesToScroll: 1,
        dots:false,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 4000,
      }
    }
  ]
};
 
const DiscountSlider = ({offer}) => {
  return (
    <div style={{ paddingTop: "10px" }} className="container discount-slider">
        <Slider {...settings}>
         {offer.map((item,index)=>{
          return <Link  to={item.link}> <div  className='slider-img trans' key={uuid()} style={{marginRight:"10px"}}>
          <img style={{width:"100%", height:"100%" ,borderRadius:"5%"}} src={item?.image} />
        </div></Link>
         })}
       
        {/* <div style={{marginRight:"10px"}}>
          <img style={{width:"100%", height:"100%"}} src={group16} />
        </div>
        <div style={{marginRight:"10px"}}>
          <img style={{width:"100%", height:"100%"}} src={group17} />
        </div>
        <div style={{marginRight:"10px"}}>
          <img style={{width:"100%", height:"100%"}} src={group15} />
        </div>
        <div style={{marginRight:"10px"}}>
          <img style={{width:"100%", height:"100%"}} src={group16} />
        </div>
        <div style={{marginRight:"10px"}}>
          <img style={{width:"100%", height:"100%"}} src={group17} />
        </div> */}
      </Slider>
    </div>
  );
};

export default DiscountSlider;
