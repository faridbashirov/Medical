import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import CardThird from "../CardThird/CardThird";
import './SliderThird.css'
import { Link } from "react-router-dom";
const SliderThird = ({offer}) => {

  return (
    <> <div className="slider-second-desktop-version slider-third-doctor">
      <Swiper
          modules={[Navigation, A11y]}
          navigation
            spaceBetween={20}
            slidesPerView={4}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
          >
            {offer.map((item,index)=>{
          return      <SwiperSlide><Link to={item.link}> <CardThird ird key={index} image={item.image}/></Link></SwiperSlide>
        })}
        </Swiper>
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
