import React from 'react';
import Carousel from 'react-multi-carousel';
import ruFlag from "../../assets/Svg/userFlag.svg"
import trFlag from "../../assets/Svg/trFlag.svg"
import azFlag from "../../assets/Svg/azFlag.svg"
import Link from 'antd/es/typography/Link';
import { useNavigate } from 'react-router-dom';
import 'react-multi-carousel/lib/styles.css';
import { useTranslation } from 'react-i18next';

import Slider from "react-slick";
const DoctorReviews = ({reviews,id}) => {
  const {t}=useTranslation()
  console.log(reviews.length,reviews  );
    
   const navigate=useNavigate()
 
   const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2.5,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1.3,
          slidesToScroll: 1,
          dots:false,
          autoplay: true,
          speed: 2000,
          autoplaySpeed: 4000,
        }
      }
    ]
  };
  return (
    <section className="hospital-detail__reviews">
      <div className="container">
        {reviews?.length !== 0  ? <>  <div className="reviews__header">
          <h4 className="reviews__header-title">{t("hosinfo3")}</h4>
          <p className="reviews__header-subtitle"><span className={"subtitle__rating"}>9,8</span>Великолепно <span>&#x2022;</span><span>{reviews.length} {t("comments")}</span> <a href="#">{t("allreviews")}</a></p>
        </div>
        <div className="reviews__carousel">
        <Slider {...settings}>
            {reviews.map((item,index)=>{
            
              return   <div key={index} className="reviews__carousel-item">
              <div className="reviews__carousel-item-content">
                <p>{item.text}</p>
                <a href="#">Читат больше</a>
              </div>
              <div className="reviews__carousel-item-footer">
                <p><span className="item__footer-icon">H</span>
                  <span className="item__footer-autor">{item.doctor.first_name}</span>
                  <img src={ruFlag} alt=""/></p>
                <span className="item__footer-rating">8,8</span>
              </div>
            </div>
            })}
           
            
          </Slider>
        </div>
        <button style={{
        marginTop:"10px",
      }} onClick={()=> navigate(`/doctor-reviews/${id}`)}   className="hospital-detail__reviews-btn">{t("allreviews")}</button></> :
        <> <div className="reviews__header">
          <h4 className="reviews__header-title">{t("hosinfo3")}</h4>
           <h1>{t("nocomments")}</h1>
        </div> 
        <button style={{
          marginTop:"10px",
          marginLeft:"0"
        }} onClick={()=> navigate(`/doctor-reviews/${id}`)}  className="hospital-detail__reviews-btn">{t("allreviews")}</button></>}
     
      </div>
    </section>
  );
};

export default DoctorReviews;
