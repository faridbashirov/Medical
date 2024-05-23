import React from 'react';
import "./HomeReviews.css"
import author from "../../../assets/Images/author.png";
import quote from "../../../assets/Svg/quote.svg";
import allReviewsFetch from '../../api/allReviews';
import { useTranslation } from 'react-i18next';
import { Rate } from 'antd';
import { Link } from 'react-router-dom';
const TabDoctors = () => {
  const swiperQRef = React.useRef(null);
  
  React.useEffect(() => {
    swiperQRef.current.addEventListener('progress', (e) => {
      const [swiper, progress] = e.detail;
      console.log(progress);
    });

    swiperQRef.current.addEventListener('slidechange', (e) => {
      console.log('slide changed');
    });
  }, []);
  const {t,i18n}=useTranslation()
  const {data,error,doctorreviews}=allReviewsFetch()

  return (
    <>
      <div className={"home-reviews__items"}>
        <swiper-container 
        navigation-next-el=".swiper-button-next"
  navigation-prev-el=".swiper-button-prev"
    slides-per-view={2} rewind={true} space-between={15} autoplay-delay={2500} autoplay-disable-on-interaction={false} stopOnLastSlide={false}
        ref={swiperQRef}
            >
            {doctorreviews.map((item,index)=>{
            return <swiper-slide><div key={index} className="home-reviews__item">
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
          </swiper-slide>
          })}
        </swiper-container>
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>
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
