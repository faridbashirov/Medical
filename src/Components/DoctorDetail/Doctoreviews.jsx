import React from 'react';
import Carousel from 'react-multi-carousel';
import ruFlag from "../../assets/Svg/userFlag.svg"
import trFlag from "../../assets/Svg/trFlag.svg"
import azFlag from "../../assets/Svg/azFlag.svg"
import Link from 'antd/es/typography/Link';
import { useNavigate } from 'react-router-dom';
import 'react-multi-carousel/lib/styles.css';
import { useTranslation } from 'react-i18next';
const DoctorReviews = ({reviews,id}) => {
  const {t}=useTranslation()
    
   const navigate=useNavigate()
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 100, min: 500 },
      items: 1
    },
    desktop: {
      breakpoint: { max: 2500, min: 1200 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 768, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  
  return (
    <section className="hospital-detail__reviews">
      <div className="container">
        <div className="reviews__header">
          <h4 className="reviews__header-title">{t("hosinfo3")}</h4>
          <p className="reviews__header-subtitle"><span className={"subtitle__rating"}>9,8</span>Великолепно <span>&#x2022;</span><span>{reviews.length} {t("comments")}</span> <Link onClick={()=> navigate(`/doctor-reviews/${id}`)} >{t("allreviews")}</Link></p>
        </div>
        <div className="reviews__carousel">
          <Carousel responsive={responsive} >
            {reviews.map((item,index)=>{
              return   <div className="reviews__carousel-item">
              <div className="reviews__carousel-item-content">
                <p>{item.text}</p>
                <a href="#">Читат больше</a>
              </div>
              <div className="reviews__carousel-item-footer">
                <p><span className="item__footer-icon">H</span>
                  <span className="item__footer-autor">{item.first_name}</span>
                  <img src={ruFlag} alt=""/></p>
                <span className="item__footer-rating">8,8</span>
              </div>
            </div>
            })}
           
            
          </Carousel>
        </div>
      <button style={{
        marginTop: '10px',
      }} onClick={()=> navigate(`/doctor-reviews/${id}`)}  className="hospital-detail__reviews-btn">{t("allreviews")}</button>
      </div>
    </section>
  );
};

export default DoctorReviews;
