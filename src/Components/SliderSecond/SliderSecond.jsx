import React from "react";
import CardsSecond from "../CardsSecond/CardsSecond";
import './SlideSecond.css'

const SliderSecond = ({position}) => {

  const swiperTRef = React.useRef(null);
  
  React.useEffect(() => {
    swiperTRef.current.addEventListener('progress', (e) => {
      const [swiper, progress] = e.detail;
      console.log(progress);
    });

    swiperTRef.current.addEventListener('slidechange', (e) => {
      console.log('slide changed');
    });
  }, []);
  return (
    <>
      <div className="slider-second-desktop-version">
         <swiper-container 
        navigation-next-el=".swiper-button-next"
  navigation-prev-el=".swiper-button-prev"
    slides-per-view={3.3} space-between={15} autoplay-delay={2500} autoplay-disable-on-interaction={false} stopOnLastSlide={false}
        ref={swiperTRef}
            >
            {position.map((item,index)=>{
          return     <swiper-slide><CardsSecond key={index} p={item.name} p2="-40%" /></swiper-slide>
        })}
        </swiper-container>
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>
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
