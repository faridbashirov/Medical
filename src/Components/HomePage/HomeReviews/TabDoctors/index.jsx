import React from 'react';
import "../HomeReviews.css"
import author from "../../../../assets/Images/author.png";
import quote from "../../../../assets/Svg/quote.svg";
import { useTranslation } from 'react-i18next';
import { Rate,Skeleton } from 'antd';
import { Link } from 'react-router-dom';
import useFetch from '../../../../Hooks/useFetch';
const TabDoctors = () => {
  const {t,i18n}=useTranslation()
  const { data, loading, error } = useFetch('main/all_reviews');
    if (loading) {
        return  <>
                <div className={"home-reviews__items"}>
                            <swiper-container 
                            navigation-next-el=".swiper-button-next"
                      navigation-prev-el=".swiper-button-prev"
                        slides-per-view={2} rewind={true} space-between={15} autoplay-delay={2500} autoplay-disable-on-interaction={false} stopOnLastSlide={false}
                                >
                              {
                                [1, 2].map((_, index) => (
                    <swiper-slide><div key={index} className="home-reviews__item">
                      <Skeleton avatar paragraph={{ rows: 2 }} active />
                    </div></swiper-slide>
                  ))
                              }
                            </swiper-container>
                            <div class="swiper-button-prev"></div>
                            <div class="swiper-button-next"></div>
                </div>
                <div className="home-reviews__items-mobile">
                  {[1, 2].map((_, index) => (
                    <div key={index} className="home-reviews__item">
                      <Skeleton avatar paragraph={{ rows: 2 }} active />
                    </div>
                  ))
                  }
                  </div>
                </>
    }

    if (error) {
        console.log("TopDoctorsReview",error)
    }
    
    return (
        <div>
            {data ? (
                <>
      <div className={"home-reviews__items"}>
        <swiper-container 
        navigation-next-el=".swiper-button-next"
  navigation-prev-el=".swiper-button-prev"
    slides-per-view={2} rewind={true} space-between={15} autoplay-delay={2500} autoplay-disable-on-interaction={false} stopOnLastSlide={false}
            >
            {data?.doctor.map((item,index)=>{
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
      {data?.doctor.map((item,index)=>{
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
    </>
            ) : (
                <div></div>
            )}
        </div>
    );
};

export default TabDoctors;