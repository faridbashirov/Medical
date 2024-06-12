import React from 'react';
import "./AboutUs.css"
import BreadCrumbs from "../BreadCrumbs";
import WelcomeSection from "./WelcomeSection.jsx";
import Stats from "./Stats.jsx";
import Discount from "./Discount.jsx";
import AboutUsInfo from "./AboutUsInfo.jsx";
import Companies from "./Companies.jsx";
import CertifiedClinics from "./CertifiedClinics.jsx";
import OurGeography from "./OurGeography.jsx";
import { Helmet } from 'react-helmet';

const AboutUs = () => {
  return (
    <>
    <Helmet>
      <meta charSet="utf-8" />
      <title>112MED.ru | Официальный сайт | Клиники, врачи, онлайн-сервис по поиску и бронированию медицинских услуг, выгодные цены </title>
    </Helmet>
    <div style={{background: "#f6f6f6"}}>
      
      <div style={{background: "#fff"}}>
        <BreadCrumbs/>
        <WelcomeSection/>
        <Stats/>
        <Discount/>
        <AboutUsInfo/>
        <Companies/>
      </div>
      <CertifiedClinics/>
      <div style={{background: "#fff"}}>
        <OurGeography/>
      </div>
    </div>
    </>
  );
};

export default AboutUs;
