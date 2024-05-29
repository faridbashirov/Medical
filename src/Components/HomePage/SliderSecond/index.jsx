import React from "react";
import CardsSecond from "../../CardsSecond/CardsSecond";
import './SlideSecond.css'
import { Button } from "antd";
import { Trans, useTranslation } from "react-i18next";
import useLanguageFetch from "../../../Hooks/useLanguageFetch";

const SliderSecond = () => {
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
        <div>
            {data ? (
                <>
                  <div className="container container-foreign"
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <div>
                      {" "}
                      <h3 className={"foreign-title"}>
                        <Trans i18nKey="discount">


                        </Trans>
                      </h3>
                      <p className={"foreign-subtitle"}>{t("discount2")}</p>
                    </div>
                    <Button className={"foreign-btn-lg"}>
                      Посмотреть категории
                    </Button>
                  </div>
                  <div className="containerSliderSecondsNew">
                    <div className="slider-second-desktop-version">
                    <swiper-container 
                    navigation-next-el=".swiper-button-next"
              navigation-prev-el=".swiper-button-prev"
                slides-per-view={3.3} space-between={15} autoplay-delay={2500} autoplay-disable-on-interaction={false} stopOnLastSlide={false}
                        >
                        {data.map((item,index)=>{
                      return     <swiper-slide><CardsSecond key={index} p={item.name} p2="-40%" /></swiper-slide>
                    })}
                    </swiper-container>
                    <div class="swiper-button-prev"></div>
                    <div class="swiper-button-next"></div>
                  </div>
                  <div className="slider-second-mobile-version"> 
                  {data.map((item,index)=>{
                        if (index <4) return     <CardsSecond key={index} p={item.name} p2="-40%" />
                    })}
                  </div>
                    <Button
                      className={"foreign-btn-sm"}
                      type={"primary"}
                    >
                      Посмотреть категории
                    </Button>
                  </div>
                </>
            ) : (
                <div></div>
            )}
        </div>
    );
};

export default SliderSecond;
