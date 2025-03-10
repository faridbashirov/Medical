import React from "react";
import CardsSecond from "../../CardsSecond/CardsSecond";
import './MedicalServiceDiscount.css'
import { Button } from "antd";
import { Trans, useTranslation } from "react-i18next";
import useLanguageFetch from "../../../Hooks/useLanguageFetch";
import { Link } from "react-router-dom";

const MedicalServiceDiscount = () => {
  const {t}=useTranslation()
    const { data, loading, error } = useLanguageFetch('account/all_positions',localStorage.getItem("lang"));
    if (loading) {
        return  <>
                </>
    }
    if (error) {
        return console.log("CategoryArea:",error)
    }
    return (
            data ? (
                <section className="medicalServiceDiscount">
                  <div className="medicalServiceDiscount-container">
                    <h3 className={"foreign-title"}>
                        <Trans i18nKey="discount">
                        </Trans>
                      </h3>
                    <p className={"medical-service-subtitle"}>{t("discount2")}</p>
                  </div>
                  <div className="slider-second-desktop-version">
                    <swiper-container 
                    navigation-next-el=".swiper-button-next"
              navigation-prev-el=".swiper-button-prev"
                slides-per-view={3.3} space-between={30} autoplay-delay={2500} autoplay-disable-on-interaction={false} stopOnLastSlide={false}
                        >
                        {data.map((item,index)=>{
                          if (item.discount!==null){
                      return     <swiper-slide  key={index}><CardsSecond key={index} position={item.name} discount={item.discount}/></swiper-slide>
                    }})}
                    </swiper-container>
                    <div className="swiper-button-prev"></div>
                    <div className="swiper-button-next"></div>
                  </div>
                  <div className="slider-second-mobile-version"> 
                    {data.map((item,index)=>{
                      if (index <4 && item.discount!==null) return     <CardsSecond key={index} position={item.name} discount={item.discount}/>
                    })}
                  </div>
                  <div className="medical-service__button_container">
                    <Link  to={"doctors"}>
                    <Button
                        className={"medical-service__button"}
                      >
                        {t("view-categories")}
                    </Button>
                    </Link>
                  </div>
                  
                </section>
            ) : (
                <div></div>
            )
    );
};

export default MedicalServiceDiscount;
