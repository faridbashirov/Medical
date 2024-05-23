import React from "react";
import CardThird from "../CardThird/CardThird";
import './SliderThird.css'
import { Link } from "react-router-dom";
const SliderThird = ({offer}) => {
   const swiperFRef = React.useRef(null);
  
  React.useEffect(() => {
    swiperFRef.current.addEventListener('progress', (e) => {
      const [swiper, progress] = e.detail;
      console.log(progress);
    });

    swiperFRef.current.addEventListener('slidechange', (e) => {
      console.log('slide changed');
    });
  }, []);
  return (
    <> <div className="slider-second-desktop-version slider-third-doctor">
       <swiper-container 
        navigation-next-el=".swiper-button-next"
  navigation-prev-el=".swiper-button-prev"
    slides-per-view={4} rewind={true} space-between={15} autoplay-delay={2500} autoplay-disable-on-interaction={false} stopOnLastSlide={false}
        ref={swiperFRef}
            >
              {offer.map((item,index)=>{
          return      <swiper-slide><Link to={item.link}> <CardThird ird key={index} image={item.image}/></Link></swiper-slide>
        })}
        </swiper-container>
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>
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
