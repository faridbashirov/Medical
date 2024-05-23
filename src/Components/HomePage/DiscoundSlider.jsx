import React from 'react';
import uuid from 'react-uuid';
import { Link } from 'react-router-dom';
import './DiscoundSlider.css'
 
const DiscountSlider = ({offer}) => {
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
    <div style={{ paddingTop: "10px" }} className="container discount-slider">
      <swiper-container 
        navigation-next-el=".swiper-button-next"
  navigation-prev-el=".swiper-button-prev"
    slides-per-view={2} rewind={true} space-between={15} autoplay-delay={2500} autoplay-disable-on-interaction={false} stopOnLastSlide={false}
        ref={swiperTRef}
        breakpoints="{&quot;1024&quot;:{&quot;slidesPerView&quot;:4}}"
            >
            {offer.map((item,index)=>{
          return  <swiper-slide><Link  to={item.link}> <div  className='slider-img trans' key={uuid()} style={{marginRight:"10px"}}>
          <img style={{width:"100%", height:"100%" ,borderRadius:"5%"}} src={item?.image} />
        </div></Link></swiper-slide>
         })}
        </swiper-container>
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>
    </div>
  );
};

export default DiscountSlider;
