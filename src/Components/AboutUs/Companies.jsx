import React from 'react';
import avrasiyaHospitalLogo from "../../assets/Svg/about-us/avrasiya-hospital.svg"
import livHospitalLogo from "../../assets/Svg/about-us/liv-hospital.svg"
import medipolHospitalLogo from "../../assets/Svg/about-us/medipol-logo.svg"
import anadoluHospitalLogo from "../../assets/Svg/about-us/anadolu.svg"
import CompanyFetch from '../api/companyFetch';
import { useTranslation } from 'react-i18next';
const Companies = () => {

  const {data,error,loading}=CompanyFetch()
  const {t,i18n} = useTranslation()
  console.log(data);
  return (
    <section className={"container"}>
      <div className="aboutUs-companies">
        <div className="aboutUs-companies__header">
          <h4 className="aboutUs-companies__header-title">{t("professionalclinics")}</h4>
          <p className="aboutUs-companies__header-subtitle">Lorem ipsum dolor sit amet consectetur dolor sit amet.</p>
        </div>
        {/* feed.filter((item, index) => index < 5).map((filteredItem) */}
        <div className="aboutUs-companies__items">
        {data.filter((item,index)=> index <3).map((item,index)=>{
          return  <div className="aboutUs-companies__item">
          <img height={60} width={200} src={`https://hospitalbackend.efgroup.az/`+item.logo} alt=""/>
        </div>
        })}
          
          
        </div>
        <div className="aboutUs-companies__items">
        {data.filter((item,index)=> index>2).map((item,index)=>{
          return  <div className="aboutUs-companies__item">
          <img height={60} width={200} src={`https://hospitalbackend.efgroup.az/`+item.logo} alt=""/>
        </div>
        })}
        </div>
      </div>
    </section>
  );
};

export default Companies;
