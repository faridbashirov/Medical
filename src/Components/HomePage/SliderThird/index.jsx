import React from "react";
import CardThird from "../../CardThird/CardThird";
import './SliderThird.css'
import { Link } from "react-router-dom";
import useLanguageFetch from "../../../Hooks/useLanguageFetch";
import { useTranslation } from "react-i18next";
const SliderThird = () => {
  const {t}=useTranslation()
  const { data, loading, error } = useLanguageFetch('main/best_offer',localStorage.getItem("lang"));
  if (loading) {
        return  <>
        <div>Loading....</div>
                </>
    }
  if (error) {
    return console.log("BestOffers:",error)
  }
  return (
    <div>
          {data ? (
                <> 
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
                          return      <swiper-slide><Link to={item.link}> <CardThird ird key={index} image={item.image}/></Link></swiper-slide>
                        })}
                      </swiper-container>
                      <div class="swiper-button-prev"></div>
                      <div class="swiper-button-next"></div>
                  </div>
                  <div className="slider-second-mobile-version slider-third"> 
                  {data.map((item,index)=>{
                        return     <Link to={item.link}> <CardThird  key={index} image={item.image}/></Link>
                      })}
                  </div>
                  </div>
                </>
            ) : (
                <div></div>
            )}
    </div>
    );
};

export default SliderThird;
