import React,{useState} from "react";
import Cards from "./Cards/Cards";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, A11y,Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import "../Slider.css";

const Sliders = ({countries}) => {

  return (
    <>
      <Swiper
      modules={[Navigation, A11y,Autoplay]}
          autoplay={{
          delay: 2000,
          disableOnInteraction: false,
          stopOnLastSlide: false,
        }}
        spaceBetween={10}
        slidesPerView={1.7}
        initialSlide={1}
        centeredSlides={true}
        loop={true}
        navigation
        breakpoints={{
          1024: {
            slidesPerView: 3,
          }
        }}
          >{countries.length>2 ? (
          countries.map((item, index) => (
            <SwiperSlide key={index}>
              <Cards flag={item.flag} title={item.name} img={item.image} />
            </SwiperSlide>
          ))
         ) : (
        <>
          {countries.map((item, index) => (
            <SwiperSlide key={index}>
              <Cards flag={item.flag} title={item.name} img={item.image} />
            </SwiperSlide>
          ))}
          {countries.map((item, index) => (
            <SwiperSlide key={index}>
              <Cards flag={item.flag} title={item.name} img={item.image} />
            </SwiperSlide>
          ))}
          {countries.map((item, index) => (
            <SwiperSlide key={index}>
              <Cards flag={item.flag} title={item.name} img={item.image} />
            </SwiperSlide>
          ))}
        </>
      )
         }
      </Swiper>
    </>
  );
};

export default Sliders;
