import React from "react";
import './SpecialOffers.css'
import { Link } from "react-router-dom";
import Small from '../../CardBanner/Small';
import useLanguageFetch from "../../../Hooks/useLanguageFetch";
import { useTranslation } from "react-i18next";
import { Skeleton } from "antd";
const SpecialOffers = () => {
  const {t}=useTranslation()
  const { data, loading, error } = useLanguageFetch('main/best_offer',localStorage.getItem("lang"));
  if (loading) {
        return  <section className="special-offers">
                  <div className="container container-foreign">
                    <h3 className={"foreign-title"}>
                      {t("specialoffer")}
                    </h3>
                    <p className={"foreign-subtitle"}>
                    {t("specialoffer2")}
                    </p>
                  </div>
                  <div className="containerSliderSecond countriess">
                    <div className="slider-second-desktop-version slider-third-doctor">
                      <swiper-container 
                        navigation-next-el=".swiper-button-next"
                        navigation-prev-el=".swiper-button-prev"
                        slides-per-view={4} rewind={true} space-between={15} autoplay-delay={2500} autoplay-disable-on-interaction={false} stopOnLastSlide={false}
                      >
                        {[...Array(4)].map((_, index) => (
                            <swiper-slide  key={index}><Skeleton.Image active style={{height: '100%', width: '100%'}}/></swiper-slide>
                      ))}
                      </swiper-container>
                      <div className="swiper-button-prev"></div>
                      <div className="swiper-button-next"></div>
                  </div>
                  <div className="slider-second-mobile-version slider-third"> 
                  {[...Array(2)].map((_, index) => (
                            <Skeleton.Image key={index} active style={{height: '100%', width: '100%'}}/>
                      ))}
                  </div>
                  </div>
                </section>
    }
  if (error) {
    return console.log("BestOffers:",error)
  }
  return (
    <div>
          {data ? (
                <section className="special-offers"> 
                  <div className="container container-foreign">
                    <h3 className={"foreign-title"}>
                      {t("specialoffer")}
                    </h3>
                    <p className={"foreign-subtitle"}>
                    {t("specialoffer2")}
                    </p>
                  </div>
                  <div className="containerSliderSecond countriess">
                    <div className="slider-second-desktop-version slider-third-doctor">
                      <swiper-container 
                        navigation-next-el=".swiper-button-next"
                        navigation-prev-el=".swiper-button-prev"
                        slides-per-view={4} rewind={true} space-between={15} autoplay-delay={2500} autoplay-disable-on-interaction={false} stopOnLastSlide={false}
                      >
                        {data.map((item,index)=>{
                        return   <swiper-slide  key={index}><Link to={item.link} key={index}><Small image={item.image} title={item.title}/></Link></swiper-slide>
                      })}
                      </swiper-container>
                      <div className="swiper-button-prev"></div>
                      <div className="swiper-button-next"></div>
                  </div>
                  <div className="slider-second-mobile-version slide-special-offers slider-third"> 
                  {data.map((item,index)=>{
                        return     <Link to={item.link}  key={index}> <Small  key={index} image={item.image} title={item.title}/></Link>
                      })}
                  </div>
                  </div>
                </section>
            ) : (
                <div></div>
            )}
    </div>
    );
};

export default SpecialOffers;
