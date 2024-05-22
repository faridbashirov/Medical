import React from 'react';
import stars from "../../../assets/Svg/starIcon.svg"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import "./HomeReviews.css"
import author from "../../../assets/Images/author.png"
import quote from "../../../assets/Svg/quote.svg"
import allReviewsFetch from '../../api/allReviews';
import Slider from "react-slick";
import { useTranslation } from 'react-i18next';
import { Rate } from 'antd';
import { Link } from 'react-router-dom';

const TabClinics = () => {

  const [doctorReviews,setDoctorReviews] =React.useState([])
  const [hospitalReviews,setHospitalReviews] =React.useState([])
  const {t,i18n}=useTranslation()
 

  const {data,error,hospitalreviews}=allReviewsFetch()
  console.log(hospitalreviews);
  const onChange = (key) => {
    console.log(key);
  };

  return (
    <>
      <div className={"home-reviews__items"}>
        <Swiper
          modules={[Navigation, A11y]}
          navigation
            spaceBetween={20}
            slidesPerView={2}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
          >
              {hospitalreviews.map((item,index)=>{
            return <SwiperSlide><div key={index} className="home-reviews__item">
            <div className="reviews-item__header">
              <div className="reviews-item__author">
                <img src={author} alt={""} className="reviews-item__author-img"/>
                <div className="reviews-item__author-name">{item.user?.first_name} <br/>{item.user?.last_name} </div>
              </div>
              <div className="reviews-item__rating">
                <p className={"reviews-item__rating-name"}>{t("hospital")} <Link to={`/hospital/${item.hospital}`}><span>{item?.name}</span></Link> </p>
                <Rate disabled={true} value={item.rate}/>
              </div>
            </div>
            <div className="divider"></div>
            <div className="reviews-item__content">
              <p className="reviews-item__content-desc">{item?.text} </p>
              <div className="reviews-item__content-footer">
                <span className="reviews-item__content-date">{item.created_date}</span>
                <img className="reviews-item__content-quote" src={quote} alt=""/>
              </div>
            </div>
          </div>
          </SwiperSlide>
          })
          }
        </Swiper>

      </div>
      <div className="home-reviews__items-mobile">
      {hospitalreviews.map((item,index)=>{
            return <div key={index} className="home-reviews__item">
            <div className="reviews-item__header">
              <div className="reviews-item__author">
                <img src={author} alt={""} className="reviews-item__author-img"/>
                <div className="reviews-item__author-name">{item.user?.first_name} <br/>{item.user?.last_name} </div>
              </div>
              <div className="reviews-item__rating">
                <p className={"reviews-item__rating-name"}> {t("hospital")}<Link style={{paddingLeft:"2px"}} to={`/hospital/${item.hospital}`}><span>{item?.name}</span></Link></p>
                <Rate disabled={true} value={item.rate}/>
              </div>
            </div>
            <div className="divider"></div>
            <div className="reviews-item__content">
              <p className="reviews-item__content-desc">{item?.text} </p>
              <div className="reviews-item__content-footer">
                <span className="reviews-item__content-date">{item.created_date}</span>
                <img className="reviews-item__content-quote" src={quote} alt=""/>
              </div>
            </div>
          </div>
          })
          }
      </div>
    </>
  );
};

export default TabClinics;
