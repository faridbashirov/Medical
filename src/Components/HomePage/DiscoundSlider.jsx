import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import uuid from 'react-uuid';
import { Link } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import './DiscoundSlider.css'
 
const DiscountSlider = ({offer}) => {
  return (
    <div style={{ paddingTop: "10px" }} className="container discount-slider">
        <Swiper
          modules={[Navigation, A11y]}
          navigation
            spaceBetween={20}
            slidesPerView={2}
            breakpoints={{
          1024: {
            slidesPerView: 4,
          }
        }}
          >
            {offer.map((item,index)=>{
          return  <SwiperSlide><Link  to={item.link}> <div  className='slider-img trans' key={uuid()} style={{marginRight:"10px"}}>
          <img style={{width:"100%", height:"100%" ,borderRadius:"5%"}} src={item?.image} />
        </div></Link></SwiperSlide>
         })}
        </Swiper>
    </div>
  );
};

export default DiscountSlider;
