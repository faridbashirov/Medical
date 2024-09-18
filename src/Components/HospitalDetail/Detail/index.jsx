import React, { useState } from 'react';
import {Button, Checkbox, Divider,Rate} from "antd";
import location from "../../../assets/Svg/Location.svg"
import heart from "../../../assets/Svg/heart.svg"
import share from "../../../assets/Svg/share.svg"
import dollar from "../../../assets/Svg/Dollar.svg"
import detailImg1 from "../../../assets/Images/hospital-detail/hospital-detail-1.jpg"
import arrowLeft from "../../../assets/Svg/arrow-left.svg"
import arrowRight from "../../../assets/Svg/arrow-right.svg"
import { useTranslation } from 'react-i18next';
import Slider from "react-slick";
import './Detail.css'

const Detail = ({images,hospital,open}) => {
  const settings = {
    dots: false,
    navigate: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  const {t}=useTranslation()
  const [visibleImages, setVisibleImages] = useState(3);
  const handleShowMore = () => {
    setVisibleImages(prevVisibleImages => prevVisibleImages + 20);
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
            <swiper-container 
            navigation-next-el=".swiper-button-next"
            navigation-prev-el=".swiper-button-prev"
            slides-per-view={1} space-between={15} autoplay-delay={2500} autoplay-disable-on-interaction={false} stopOnLastSlide={false}
            breakpoints="{&quot;1024&quot;:{&quot;slidesPerView&quot;:1,&quot;centeredSlides&quot;:false}}"
            >
              {images.map((item,index)=>{
              return     <swiper-slide>
                  <div className='hospital-detail-content-card'><img key={index} src={item.image} alt=""/></div>
                </swiper-slide>
              })}
            </swiper-container>
            <div class="swiper-button-prev"></div>
            <div class="swiper-button-next"></div>
          </div>
          <div className='hospital-detail-thumbnail'>
            <img src={images[0]?.image} alt="" />
          </div>
        </div>
        {/* <div className={'hospital-detail_img-box'} >
          {images.slice(0,visibleImages).map((item,index)=>{
            if(index === 1){
              return  <div className={'hospital-detail_img-lg'}>
              <img src={item.image} alt=""/>
              <div className={'detail_img-lg--rating'}>
                <span>великолепно</span>
                <span className={'detail_img-lg--rating-num'}>9.5</span>
              </div>
              <div className={'detail_img-lg--desc'}>
                <p>“Great location with montain view. Helpful and responsive owners. Well equipped and nicely designed cottage / challenge. Playground for kids outside as well as toys inside...”</p>
                <button className={'img-lg-desc-btn'}>
                  <img src={arrowLeft} alt=""/>
                  <span>Radovan Yuliya</span>
                  <span className={'img-lg-desc-num'}>9.0</span>
                  <img src={arrowRight} alt=""/>
                </button>
              </div>
              <div className={'detail_img-lg--rating'}>
                <span>великолепно</span>
                <span className={'detail_img-lg--rating-num'}>9.5</span>
              </div>
              <div className={'detail_img-lg--desc'}>
                <p>“Great asda location with montain view. Helpful and responsive owners. Well equipped and nicely designed cottage / challenge. Playground for kids outside as well as toys inside...”</p>
                <button className={'img-lg-desc-btn'}>
                  <img src={arrowLeft} alt=""/>
                  <span>Radovan Yuliya</span>
                  <span className={'img-lg-desc-num'}>9.0</span>
                  <img src={arrowRight} alt=""/>
                </button>
              </div>
            </div>
            }
            return <div key={index}> 
            <img src={item.image} alt=""/>
          </div>
          })}
           {visibleImages < images.length && (
        
        <div onClick={handleShowMore} className={'hospital-detail_img-more'}>
        <img src={detailImg1} alt=""/>
<span className={'hospital-detail_img-more-text'}>+20 ФОТОГРАФИЙ</span>
      </div>
      )}
        </div>
        <div  className={'hospital-detail_img-slider'}>
        <Slider {...settings}>
          {images.map((item,index)=>{
            return     <img src={item.image} alt=""/>
          })}
        </Slider>
        </div> */}
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
        <div className={'content__location'}>
          <iframe
            style={{border: "none"}}
            src={hospital.map_url}
            width="100%"
            height="335"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          <Button onClick={()=>window.open(hospital.map_url)} type="primary" block style={{margin: "1rem 0 0", height: "3.8rem", backgroundColor: "#5282ff"}}>{t("map")}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Detail;
