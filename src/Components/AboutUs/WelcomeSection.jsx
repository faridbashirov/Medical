import React from 'react';
import logoBlue from "../../assets/Svg/logo-blue.svg"
import AboutBanner from '../api/aboutBanner';
const WelcomeSection = () => {


  const {data,error,loading}=AboutBanner()
  return (
    <section className={"container"}>
      <div className={"welcome"}>
  <div className="welcome__content">
    <h3 className="welcome__content-title">{data.title}</h3>
    <p className="welcome__content-subtitle">
    {data.description}
    </p>
  </div>
  <div className="welcome__logo">
    <img src={logoBlue} alt=""/>
  </div>
      </div>
    </section>
  );
};

export default WelcomeSection;
