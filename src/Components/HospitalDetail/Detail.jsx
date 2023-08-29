import React, { useState,useMemo,memo } from 'react';

import {Button, Checkbox, Divider} from "antd";
import singleStar from "../../assets/Svg/singleStar.svg"
import location from "../../assets/Svg/Location.svg"
import heart from "../../assets/Svg/heart.svg"
import share from "../../assets/Svg/share.svg"
import dollar from "../../assets/Svg/Dollar.svg"
import detailImg1 from "../../assets/Images/hospital-detail/hospital-detail-1.jpg"
import detailImg2 from "../../assets/Images/hospital-detail/hospital-detail-2.jpg"
import detailImg3 from "../../assets/Images/hospital-detail/hospital-detail-3.jpg"
import arrowLeft from "../../assets/Svg/arrow-left.svg"
import arrowRight from "../../assets/Svg/arrow-right.svg"
import { useTranslation } from 'react-i18next';
import { Navigate, useNavigate } from 'react-router-dom';

import Carousel from 'react-multi-carousel';
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 3
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};
const Detail = ({images,hospital,open}) => {
  
  const {t}=useTranslation()
  const [visibleImages, setVisibleImages] = useState(3);
  const navigate=useNavigate()
  const handleShowMore = () => {
    setVisibleImages(prevVisibleImages => prevVisibleImages + 20);
  };
 

 
  return (
    <div className={'hospital-detail_content'}>
      <div className={'hospital-detail_content--search'}>
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
      <div className={'hospital-detail_content--info'}>
        <div className={'content__info-header'}>
          <div className={'content__info-header-left'}>
            <p>
              {hospital.name}
              
              {(()=>{
                let star=[]
                for(let index = 0; index < hospital.raiting; index++) {
                 star.push(<img style={{marginLeft: "4px"}} src={singleStar} alt="singleStar"/>)
                
              }
              return star
              })()}
              
             
              {/* <img style={{marginLeft: "4px"}} src={singleStar} alt="singleStar"/>
              <img style={{marginLeft: "4px"}} src={singleStar} alt="singleStar"/> */}
            </p>
            <p>{t("transport")}</p>
            <Divider/>

            <h3>{hospital.name}</h3>
            <p style={{display: "flex", gap: "10px", alignItems: "center", color: "#5282ff"}}>
              <img src={location} alt="Бейоглу, Стамбул, Турция "/>
              {hospital.location} </p>
            <p>{t("location")} - <span style={{color: "#5282ff"}}>{t("map2")}</span></p>
          </div>
          <div className={'content__info-header-right'}>
            <div className={'right__share'}>
              <img src={heart} alt=""/>
              <img className={'right__share--btn'} src={share} alt=""/>
              <Button onClick={()=> open()} style={{color:"#5282ff", borderColor:"#5282ff"}}>{t("bron")} </Button>
            </div>
            <button className={'right__share--price-btn'}>
              <img src={dollar} alt=""/>
              {t("refund")}
            </button>
          </div>
        </div>
        <div className={'hospital-detail_img-box'} >
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
            </div>
            }
            return <div key={index}> 
            <img src={item.image} alt=""/>
          </div>
          })}
          {/* <div>
            <img src={detailImg1} alt=""/>
          </div>
         
          <div>
            <img src={detailImg2} alt=""/>
          </div> */}
           {visibleImages < images.length && (
        
        <div onClick={handleShowMore} className={'hospital-detail_img-more'}>
        <img src={detailImg1} alt=""/>
<span className={'hospital-detail_img-more-text'}>+20 ФОТОГРАФИЙ</span>
      </div>
      )}
         
        </div>
       
        <div  className={'hospital-detail_img-slider'}>
        <Carousel responsive={responsive}  >
          {images.map((item,index)=>{
            return     <img src={item.image} alt=""/>
          })}
      
          
        </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Detail;
