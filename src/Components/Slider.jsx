import React,{useState} from "react";
import Cards from "./Cards/Cards";
import{ Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, A11y,Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import "../Slider.css";

const Sliders = ({countries}) => {
  const swiperRef = React.useRef(null);
  
  React.useEffect(() => {
    swiperRef.current.addEventListener('progress', (e) => {
      const [swiper, progress] = e.detail;
      console.log(progress);
    });

    swiperRef.current.addEventListener('slidechange', (e) => {
      console.log('slide changed');
    });
  }, []);

  return (
    <>
      <div className="slider-center">
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
        onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
        breakpoints={{
          1024: {
            slidesPerView: 3,
            centeredSlides: true,
          }
        }}
          >
      </Swiper>
      <swiper-container 
        navigation-next-el=".swiper-button-next"
        navigation-prev-el=".swiper-button-prev"
        slides-per-view={1.7} rewind={true} space-between={15} autoplay-delay={2500} autoplay-disable-on-interaction={false} stopOnLastSlide={false}
        ref={swiperRef}
        breakpoints="{&quot;1024&quot;:{&quot;slidesPerView&quot;:3}}"
        centered-slides={true}
      >
          {countries.map((item, index) => (
                  <swiper-slide>
                    <Cards flag={item.flag} title={item.name} img={item.image} key={index}/>
                  </swiper-slide>
                ))}
        </swiper-container>
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>
      </div>
    </>
  );
};

export default Sliders;
