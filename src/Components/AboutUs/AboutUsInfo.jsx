import React, { useState } from 'react';
import mainLogo from "../../assets/Svg/main-logo-sm.svg"
import secondLogo from "../../assets/Images/Vector.svg"
import {Button} from "antd";
import MainAboutBanner from '../api/aboutMain';
import { useTranslation } from 'react-i18next';
const AboutUsInfo = () => {
  const {t,i18n} = useTranslation()
 const [show,setShow]=useState(false)
  const {data,loading,error}=MainAboutBanner()
  return (
    <section className={"container"}>
      <div className="aboutUs-info">
        <div style={{
            backgroundImage:`url("${data.image}")`,
            backgroundSize:"cover",
            backgroundPosition:"center",
          }} className="aboutUs-info__img-wrapper">
          <div  className="aboutUs-info__img">
           
          </div>
          <div className="aboutUs-info__img-header">
            <div>
              <img className="aboutUs-info__img-header-logo" src={secondLogo} alt=""/>
            </div>
            <div>
              <h4 className="aboutUs-info__img-header-title">112 Med</h4>
              <p className="aboutUs-info__img-header-subtitle">{t("Medical marketplace")}</p>
            </div>
          </div>
        </div>
        <div className="aboutUs-info__content">
          <div className="aboutUs-info__content-header">
            <div className="aboutUs__content-header-logo">
              <img src={mainLogo} alt=""/>
            </div>
            <div className="aboutUs__content-header-inner">
              <h4 className="aboutUs__content-header-title">112 Med</h4>
              <p className="aboutUs__content-header-subtitle">{t("Medical marketplace")}</p>
            </div>
          </div>
          <div  className={show ?"aboutUs-info__content-textt" : "aboutUs-info__content-text" }>
            {show ? data.text?.replace('<p>', '').replace('</p>','') : data.text?.replace('<p>', '').replace('</p>','').substring(0,450)}
          </div>
          <Button onClick={()=> setShow(!show)} className="aboutUs-info__btn">Show more</Button>
        </div>
      </div>
    </section>
  );
};

export default AboutUsInfo;
