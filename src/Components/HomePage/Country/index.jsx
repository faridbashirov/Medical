import React from "react";
import Cards from "../../Cards/Cards";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import "./Country.css";
import useLanguageFetch from "../../../Hooks/useLanguageFetch";
import { useTranslation } from "react-i18next";
import { Skeleton } from "antd";

const Country = () => {
  const {t}=useTranslation()
  const { data, loading, error } = useLanguageFetch('main/countries',localStorage.getItem("lang"));
  if (loading) {
        return  <section className="country-section">
                  <div className="container container-foreign">
                    <h3 className={"foreign-title"} >
                      {t("cheaphospital")}
                    </h3>
                    <p className={"foreign-subtitle"}>
                      {t("cheaphospital2")}
                    </p>
                  </div>
                  <div className="containerSliderSecond countryy">
                    <div className="slider-center">
                    <swiper-container 
                      navigation-next-el=".swiper-button-next"
                      navigation-prev-el=".swiper-button-prev"
                      slides-per-view={1.7} space-between={15} autoplay-delay={2500} autoplay-disable-on-interaction={false} stopOnLastSlide={false}
                      rewind={true}
                      breakpoints="{&quot;1024&quot;:{&quot;slidesPerView&quot;:3,&quot;centeredSlides&quot;:false}}"
                      centered-slides={true}
                    >
                      {[...Array(5)].map((_, index) => (
                            <swiper-slide><Skeleton.Image active style={{height: '100%', width: '100%'}}/></swiper-slide>
                      ))}
                      </swiper-container>
                      <div class="swiper-button-prev"></div>
                      <div class="swiper-button-next"></div>
                    </div>
                  </div>
                </section>
    }
    if (error) {
        return console.log("Slider:",error)
    }
    return (
            data ? (
                <section className="country-section">
                  <div className="container container-foreign">
                    <h3 className={"country-title"} >
                      {t("cheaphospital")}
                    </h3>
                    <p className={"country-subtitle"}>
                      {t("cheaphospital2")}
                    </p>
                  </div>
                  <div className="containerSliderSecond countryy">
                    <div className="slider-center">
                    <swiper-container 
                      navigation-next-el=".swiper-button-next"
                      navigation-prev-el=".swiper-button-prev"
                      slides-per-view={1.7} space-between={15} autoplay-delay={2500} autoplay-disable-on-interaction={false} stopOnLastSlide={false}
                      rewind={true}
                      breakpoints="{&quot;1024&quot;:{&quot;slidesPerView&quot;:3,&quot;centeredSlides&quot;:false}}"
                      centered-slides={true}
                    >
                        {data?.map((item, index) => (
                                <swiper-slide>
                                  <Cards flag={item.flag} title={item.name} img={item.image} key={index}/>
                                </swiper-slide>
                              ))}
                      </swiper-container>
                      <div class="swiper-button-prev"></div>
                      <div class="swiper-button-next"></div>
                    </div>
                  </div>
                </section>
            ) : (
                <div></div>
            )
    );
};

export default Country;
