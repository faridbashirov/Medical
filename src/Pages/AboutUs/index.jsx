import React from 'react'
import './AboutUs.css'
import Geography from './Geography'
import Certificate from './Certificate'
import Hospitals from './Hospitals'
import Welcome from './Welcome'
import OurAdvantages from './OurAdvantages'
import { Helmet } from 'react-helmet'
import Breadcrumbs from '../../Components/BreadCrumbs'
import { useTranslation } from 'react-i18next'

const AboutUs = () => {
  const {t} = useTranslation();
  return (
    <>
    <Helmet>
      <meta charSet="utf-8" />
      <title>112MED.ru | Официальный сайт | Клиники, врачи, онлайн-сервис по поиску и бронированию медицинских услуг, выгодные цены </title>
    </Helmet>
    <section className='about-us'>
      <div className="about-us-breadcrumb">
          <Breadcrumbs pageItems={[
            {
              title: t("home"),
              href: "/",
            },
            {
              title: t("aboutus"),
              href: "/about-us"
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