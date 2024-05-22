import React from "react";
import CardsSecond from "../CardsSecond/CardsSecond";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './SlideSecond.css'

const SliderSecond = ({position}) => {

  console.log(position)
  return (
    <>
      <div className="slider-second-desktop-version">
        <Swiper
        modules={[Navigation, A11y]}
        navigation
          spaceBetween={20}
          slidesPerView={3.3}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {position.map((item,index)=>{
          return     <SwiperSlide><CardsSecond key={index} p={item.name} p2="-40%" /></SwiperSlide>
        })}
        </Swiper>
      </div>
      <div className="slider-second-mobile-version"> 
      {position.map((item,index)=>{
            if (index <4) return     <CardsSecond key={index} p={item.name} p2="-40%" />
        })}
      </div>
      
    </>
  );
};

export default SliderSecond;
