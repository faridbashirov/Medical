import React from 'react';
import ruFlag from "../../../assets/Svg/userFlag.svg"
import { useNavigate } from 'react-router-dom';
import 'react-multi-carousel/lib/styles.css';
import { useTranslation } from 'react-i18next';

const Reviews = ({reviews,id}) => {
  const {t}=useTranslation()
   const navigate=useNavigate()
   if(reviews.length === 0){
    console.log("herex");
   }
  
  return (
    <>
    {reviews.length>0 ? <section className="hospital-detail__reviews">
      <div className="container">
        {reviews.length !== 0  ? <div>  <div className="reviews__header">
          <h4 className="reviews__header-title">{t("hosinfo3")}</h4>
          <p className="reviews__header-subtitle"><span className={"subtitle__rating"}>9,8</span>Великолепно <span>&#x2022;</span><span>{reviews.length} {t("comments")}</span> <a href="#" className='read-btn'>{t("allreviews")}</a></p>
        </div>
        <div className="reviews__carousel">
          <swiper-container 
                      navigation-next-el=".swiper-button-next"
                navigation-prev-el=".swiper-button-prev"
                  slides-per-view={1} rewind={true} space-between={15} autoplay-delay={2500} autoplay-disable-on-interaction={false} stopOnLastSlide={false} breakpoints="{&quot;1024&quot;:{&quot;slidesPerView&quot;:3}}"
                          >
                            {reviews.map((item, index) => (
          <swiper-slide><div className="reviews__carousel-item" key={index}>
            <div className="reviews__carousel-item-content">
              <p>{item.text}</p>
              <a href="#">Читать больше</a>
            </div>
            <div className="reviews__carousel-item-footer">
              <p>
                <span className="item__footer-icon">H</span>
                <span className="item__footer-autor">{item.user.first_name}</span>
                <img src={ruFlag} alt="" />
              </p>
              <span className="item__footer-rating">8,8</span>
            </div>
          </div>
          </swiper-slide>
        ))}
          </swiper-container>
          <div class="swiper-button-prev"></div>
          <div class="swiper-button-next"></div>
        </div>
        <button style={{
        marginTop:"10px",
      }} onClick={()=> navigate(`/hospital-reviews/${id}`)}  className="hospital-detail__reviews-btn">{t("allreviews")}</button></div> :<> <div className="reviews__header">
          <h4 className="reviews__header-title">{t("hosinfo3")}</h4>
           <h1>{t("nocomments")}</h1>
        </div> 
        <button style={{
          marginTop:"10px",
          marginLeft:"0"
        }} onClick={()=> navigate(`/hospital-reviews/${id}`)}  className="hospital-detail__reviews-btn">{t("allreviews")}</button></>}
      </div>
    </section>
    : <></>
    }
    </>
  );
};

export default Reviews;
