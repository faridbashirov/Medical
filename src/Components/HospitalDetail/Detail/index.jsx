import React, { useState } from 'react';
import {Button, Checkbox, Divider,Rate} from "antd";
import location from "../../../assets/Svg/Location.svg"
import heart from "../../../assets/Svg/heart.svg"
import share from "../../../assets/Svg/share.svg"
import dollar from "../../../assets/Svg/Dollar.svg"
import { useTranslation } from 'react-i18next';
import { Swiper, SwiperSlide } from 'swiper/react';
import './Detail.css'

const Detail = ({images,hospital,open}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const {t}=useTranslation()
 const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.realIndex);
    console.log(activeIndex)
  };
  return (
    <section className='hospital-detail-content-section'>
      <div className='hospital-detail-content'>
        <div className='hospital-detail-content-header'>
          <div className='hospital-detail-content-header-left-area'>
            <div className='hospital-detail-content-header-title-area'>
            <div>
              <h6>{hospital.name}</h6>
              <Rate style={{color: "#FFC224"}} disabled={true} value={hospital?.raiting}/>
            </div>
            <p>{t("transport")}</p>
          </div>
          <div className='hospital-detail-content-header-footer-area'>
            <h1>{hospital.name}</h1>
            <div className='hospital-detail-content-location'>
              <img src={location} alt=""/>
              <h5>{hospital.location}</h5>
            </div>
            <p>{t("location")}  -  <span>{t("map2")}</span></p>
            <div className='hospital-detail-content-header-footer-area-raiting'>
              <span>9.5</span>
              <span>великолепно</span>
            </div>
          </div>
          </div>
          <div className='hospital-detail-content-header-right-area'>
            <span>
              <img className='hospital-detail-heart' src={heart} alt=""/>
              <img className='hospital-detail-share' src={share} alt=""/>
              <button onClick={()=> open()}>{t("bron")}</button>
            </span>
            <button>
              <div><img src={dollar} alt=""/></div>
              {t("refund")}
            </button>
          </div>
        </div>
        <div className='hospital-detail-content-slider-container'>
          <div className="hospital-detail-content-slider">
             <Swiper
                spaceBetween={15}
                slidesPerView={1}
                centeredSlides={true}
                loop={true}
              autoplay={{
                delay: 2500,
              }}
              navigation={{
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
              }}
              onSlideChange={handleSlideChange}
              breakpoints={{
                1024: {
                  slidesPerView: 3,
                  centeredSlides: false,
                  direction: 'vertical',
                },
              }}
            >
                {images.map((item, index) => (
                  <SwiperSlide key={index}>
                    <div className='hospital-detail-content-card'><img key={index} src={item.image} alt=""/></div>
                  </SwiperSlide>
                ))}
              </Swiper>
            <div class="swiper-button-prev"></div>
            <div class="swiper-button-next"></div>
          </div>
          <div className='hospital-detail-thumbnail'>
            <img src={images[activeIndex]?.image} alt="" />
          </div>
        </div>
      </div>
      <div className="hospital-detail-content-info">
        <div className={'content__search'}>
          <p>{t("search")}</p>
          <p>{t("search2")}</p>
          <Divider style={{background: "#fff"}}/>
          <p className={'content__search-checkbox'}><Checkbox>Турция</Checkbox></p>
          <p className={'content__search-checkbox'}><Checkbox>Услуги</Checkbox></p>
          <Button block style={{margin: "1rem", width: "90%"}}>Найти</Button>
        </div>
        {hospital?.map_url ? 
        <div className={'content__location'}>
          {<iframe
            style={{border: "none"}}
            src={hospital.map_url}
            width="100%"
            height="335"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>}
          <Button onClick={()=>window.open(hospital.map_url)} type="primary" block style={{margin: "1rem 0 0", height: "3.8rem", backgroundColor: "#5282ff"}}>{t("map")}
          </Button>
        </div>
         :
         <></>}
      </div>
    </section>
  );
};

export default Detail;
