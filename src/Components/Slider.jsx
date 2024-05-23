import React,{useState} from "react";
import Cards from "./Cards/Cards";
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
      <swiper-container 
        navigation-next-el=".swiper-button-next"
        navigation-prev-el=".swiper-button-prev"
        slides-per-view={1.7} space-between={15} autoplay-delay={2500} autoplay-disable-on-interaction={false} stopOnLastSlide={false}
        ref={swiperRef}
        rewind={true}
        breakpoints="{&quot;1024&quot;:{&quot;slidesPerView&quot;:3,&quot;centeredSlides&quot;:false}}"
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
