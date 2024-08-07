import React from 'react'
import './AboutUs.css'
import Geography from './Geography'
import Certificate from './Certificate'
import Hospitals from './Hospitals'
import Welcome from './Welcome'
import OurAdvantages from './OurAdvantages'
import { Helmet } from 'react-helmet'
import { Breadcrumb } from 'antd'
import { useTranslation } from 'react-i18next'

const AboutUs = () => {
  const {t} = useTranslation();
  return (
    <>
    <Helmet>
      <meta charSet="utf-8" />
      <title>112MED.ru | Официальный сайт | Клиники, врачи, онлайн-сервис по поиску и бронированию медицинских услуг, выгодные цены </title>
    </Helmet>
    <div style={{ backgroundColor: "#F4F4F4" }}></div>
    <section className='about-us'>
      <div className="about-us-breadcrumb">
          <Breadcrumb
            separator={
              <span
                style={{
                  color: "#5282FF",
                  paddingLeft: "5px",
                  paddingRight: "10px",
                }}
              >
                {" "}
                {">"}{" "}
              </span>
            }
            items={[
              {
                title: t("home"),
                href: "/",
              },
              {
                title: t("aboutus"),
              },
            ]}
          />
        </div>
      <Welcome/>
      <OurAdvantages/>
      <Hospitals/>
      <Certificate/>
      <Geography/>
    </section>
    </>
  )
}

export default AboutUs