import React from 'react';
import Carousel from 'react-multi-carousel';
import "./HomeReviews.css"
import author from "../../../assets/Images/author.png";
import stars from "../../../assets/Svg/starIcon.svg";
import quote from "../../../assets/Svg/quote.svg";
import allReviewsFetch from '../../api/allReviews';
const TabDoctors = () => {


  const {data,error,doctorreviews}=allReviewsFetch()
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2
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
  return (
    <>
      <div className={"home-reviews__items"} >
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
      </div>
    </>
  );
};

export default TabDoctors;
