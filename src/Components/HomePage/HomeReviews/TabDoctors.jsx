import React from 'react';
import Carousel from 'react-multi-carousel';
import "./HomeReviews.css"
import author from "../../../assets/Images/author.png";
import stars from "../../../assets/Svg/starIcon.svg";
import quote from "../../../assets/Svg/quote.svg";
import allReviewsFetch from '../../api/allReviews';
import Slider from "react-slick";
import { useTranslation } from 'react-i18next';
import { Rate } from 'antd';
import { Link } from 'react-router-dom';
const TabDoctors = () => {

  const {t,i18n}=useTranslation()
  const {data,error,doctorreviews}=allReviewsFetch()
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
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
    <>
      <div className={"home-reviews__items"}>
      <Slider {...settings}>
   
          {doctorreviews.map((item,index)=>{
            return <div key={index} className="home-reviews__item">
            <div className="reviews-item__header">
              <div className="reviews-item__author">
                <img src={author} alt={""} className="reviews-item__author-img"/>
                <div className="reviews-item__author-name">{item.user?.first_name} <br/>{item.user?.last_name} </div>
              </div>
              <div className="reviews-item__rating">
                <p className={"reviews-item__rating-name"}>{t("doctor")}<Link style={{paddingLeft:"3px"}} to={`/doctor/${item.doctor}`}><span>{item?.name}</span></Link></p>
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
          {/* <div className="home-reviews__item">
            <div className="reviews-item__header">
              <div className="reviews-item__author">
                <img src={author} alt={""} className="reviews-item__author-img"/>
                <div className="reviews-item__author-name">Алина <br/>Леонидовна </div>
              </div>
              <div className="reviews-item__rating">
                <p className={"reviews-item__rating-name"}>Клиника <span>POLYmed</span> </p>
                <img className={"reviews-item__rating-stars"} src={stars} alt=""/>
              </div>
            </div>
            <div className="divider"></div>
            <div className="reviews-item__content">
              <p className="reviews-item__content-desc">Здравствуйте! Хочу пожаловаться на врача клиники, Очень благодарен врачам клиники, Спасибо огромное! </p>
              <div className="reviews-item__content-footer">
                <span className="reviews-item__content-date">23.07.2022</span>
                <img className="reviews-item__content-quote" src={quote} alt=""/>
              </div>
            </div>
          </div>
          <div className="home-reviews__item">
            <div className="reviews-item__header">
              <div className="reviews-item__author">
                <img src={author} alt={""} className="reviews-item__author-img"/>
                <div className="reviews-item__author-name">Алина <br/>Леонидовна </div>
              </div>
              <div className="reviews-item__rating">
                <p className={"reviews-item__rating-name"}>Клиника <span>POLYmed</span> </p>
                <img className={"reviews-item__rating-stars"} src={stars} alt=""/>
              </div>
            </div>
            <div className="divider"></div>
            <div className="reviews-item__content">
              <p className="reviews-item__content-desc">Здравствуйте! Хочу пожаловаться на врача клиники, Очень благодарен врачам клиники, Спасибо огромное! </p>
              <div className="reviews-item__content-footer">
                <span className="reviews-item__content-date">23.07.2022</span>
                <img className="reviews-item__content-quote" src={quote} alt=""/>
              </div>
            </div>
          </div>
          <div className="home-reviews__item">
            <div className="reviews-item__header">
              <div className="reviews-item__author">
                <img src={author} alt={""} className="reviews-item__author-img"/>
                <div className="reviews-item__author-name">Алина <br/>Леонидовна </div>
              </div>
              <div className="reviews-item__rating">
                <p className={"reviews-item__rating-name"}>Клиника <span>POLYmed</span> </p>
                <img className={"reviews-item__rating-stars"} src={stars} alt=""/>
              </div>
            </div>
            <div className="divider"></div>
            <div className="reviews-item__content">
              <p className="reviews-item__content-desc">Здравствуйте! Хочу пожаловаться на врача клиники, Очень благодарен врачам клиники, Спасибо огромное! </p>
              <div className="reviews-item__content-footer">
                <span className="reviews-item__content-date">23.07.2022</span>
                <img className="reviews-item__content-quote" src={quote} alt=""/>
              </div>
            </div>
          </div>
          <div className="home-reviews__item">
            <div className="reviews-item__header">
              <div className="reviews-item__author">
                <img src={author} alt={""} className="reviews-item__author-img"/>
                <div className="reviews-item__author-name">Алина <br/>Леонидовна </div>
              </div>
              <div className="reviews-item__rating">
                <p className={"reviews-item__rating-name"}>Клиника <span>POLYmed</span> </p>
                <img className={"reviews-item__rating-stars"} src={stars} alt=""/>
              </div>
            </div>
            <div className="divider"></div>
            <div className="reviews-item__content">
              <p className="reviews-item__content-desc">Здравствуйте! Хочу пожаловаться на врача клиники, Очень благодарен врачам клиники, Спасибо огромное! </p>
              <div className="reviews-item__content-footer">
                <span className="reviews-item__content-date">23.07.2022</span>
                <img className="reviews-item__content-quote" src={quote} alt=""/>
              </div>
            </div>
          </div> */}
        </Slider>
      </div>
      <div className="home-reviews__items-mobile">
      {doctorreviews.map((item,index)=>{
            return <div key={index} className="home-reviews__item">
            <div className="reviews-item__header">
              <div className="reviews-item__author">
                <img src={author} alt={""} className="reviews-item__author-img"/>
                <div className="reviews-item__author-name">{item.user?.first_name} <br/>{item.user?.last_name} </div>
              </div>
              <div className="reviews-item__rating">
              <p className={"reviews-item__rating-name"}> {t("doctor")}  <Link to={`/doctor/${item.doctor}`}> <span>{item?.name}</span></Link></p>
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

      {/* <div className={"home-reviews__items"} >
        <Carousel  itemClass='dsad'  responsive={responsive}>
          {doctorreviews.map((item,index)=>{
            return <div key={index} className="home-reviews__item">
            <div className="reviews-item__header">
              <div className="reviews-item__author">
                <img src={author} alt={""} className="reviews-item__author-img"/>
                <div className="reviews-item__author-name">{item.user?.first_name} <br/>{item.user?.last_name} </div>
              </div>
              <div className="reviews-item__rating">
                <p className={"reviews-item__rating-name"}>Клиника <span>POLYmed</span> </p>
                <img className={"reviews-item__rating-stars"} src={stars} alt=""/>
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
          })}
          
          
        </Carousel>
      </div>
      <div className="home-reviews__items-mobile">
      {doctorreviews.map((item,index)=>{
            return <div key={index} className="home-reviews__item">
            <div className="reviews-item__header">
              <div className="reviews-item__author">
                <img src={author} alt={""} className="reviews-item__author-img"/>
                <div className="reviews-item__author-name">{item.user?.first_name} <br/>{item.user?.last_name} </div>
              </div>
              <div className="reviews-item__rating">
                <p className={"reviews-item__rating-name"}>Клиника <span>POLYmed</span> </p>
                <img className={"reviews-item__rating-stars"} src={stars} alt=""/>
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
          })}
          
       
      </div> */}
    </>
  );
};

export default TabDoctors;
