import { useState } from "react";
import React from 'react';
import {Button} from "antd";
import { useTranslation } from "react-i18next";

const DoctorInfo = ({doctor}) => {
  const  [active,setActive]=useState(true)
  const {t}=useTranslation()
  console.log(doctor);

  return (
    <div className={"container"}>
      <div className="doctor-info">
        <div className="doctor-info__btns">
          <Button onClick={()=> setActive(true)} type={!active ? "link" : "primary"} >{t("education")}</Button>
          <Button onClick={()=> setActive(false)}  type={!active ? "primary" : "link"}>{t("experience")}</Button>
        </div>
        <div className="doctor-info__content">
          { active ? doctor?.doctor_education?.map((item,index)=>{
            return <div key={index} className="doctor-info__content-item">
            <span className={"study-type"}>{item.types}</span>
            <span className={"study-address"}>{item.place_of_study}</span>
            <span className={"study-country"}>{item.location}</span>
            <span className={"study-date"}>{item.year_range}</span>
          </div>
          }) : doctor?.doctor_workexperience?.map((item,index)=>{
            return <div key={index} className="doctor-info__content-item">
            <span className={"study-type"}>{item.types}</span>
            <span className={"study-address"}>{item.place_of_work}</span>
            <span className={"study-country"}>{item.location}</span>
            <span className={"study-date"}>{item.year_range}</span>
          </div> })}
          
        
        </div>
        <div className="doctor-info__content-mobile">
        { active ? doctor?.doctor_education?.map((item,index)=>{
          return <div className="doctor-info__content-mobile-item">
            <p className={"study-info line-large"}>
              <span className={"study-type-mobile"}>{item.types}</span>
              <span className={"study-address-mobile"}>{item.place_of_study}</span>
            </p>
            <p className={"study-country-mobile line"}>{item.location}</p>
            <p className={"study-date-mobile"}>{item.year_range} </p>
          </div>
        }) : doctor?.doctor_workexperience?.map((item,index)=>{
          return <div className="doctor-info__content-mobile-item">
            <p className={"study-info line-large"}>
              <span className={"study-type-mobile"}>{item.types}</span>
              <span className={"study-address-mobile"}>{item.place_of_work}</span>
            </p>
            <p className={"study-country-mobile line"}>{item.location}</p>
            <p className={"study-date-mobile"}>{item.year_range} </p>
          </div> })}
        
        </div>
      </div>
    </div>
  );
};

export default DoctorInfo;
