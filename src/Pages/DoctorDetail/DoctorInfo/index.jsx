import { useState } from "react";
import React from 'react';
import { useTranslation } from "react-i18next";
import './DoctorInfo.css'

const DoctorInfo = ({doctor}) => {
  const  [active,setActive]=useState(true)
  const {t}=useTranslation()
  if(doctor?.doctor_workexperience?.length === 0){
    console.log(doctor?.doctor_workexperience);
  }
  else{
    console.log("her2");
  }
  return (
    <> 
   {(doctor?.doctor_workexperience?.length === 0 && doctor?.doctor_education?.length === 0 ) ? <div className={"container"}></div> :
    <div className={"container"}>
      <div className="doctor-info">
        <div className="doctor-info-buttons">
          <button onClick={()=> setActive(true)} className={!active ? "doctor-info-button-passive" : "doctor-info-button"}>{t("education")}</button>
          <button onClick={()=> setActive(false)} className={!active ? "doctor-info-button" : "doctor-info-button-passive"}>{t("experience")}</button>
        </div>
        {/* <div className="doctor-info__content">
          { active ? doctor?.doctor_education?.map((item,index)=>{
            return <div key={index} className="doctor-info__content-item-grid">
            <span className={"study-type-grid"}>{item.types}</span>
            <span className={"study-address-grid"}>{item.place_of_study}</span>
            <span className={"study-country-grid"}>{item.location}</span>
            <span className={"study-date-grid"}>{item.year_range}</span>
          </div>
          }) : doctor?.doctor_workexperience?.map((item,index)=>{
            return <div key={index} className="doctor-info__content-item-grid">
            <span className={"study-type-grid"}>{item.types}</span>
            <span className={"study-address-grid"}>{item.place_of_work}</span>
            <span className={"study-country-grid"}>{item.location}</span>
            <span className={"study-date-grid"}>{item.year_range}</span>
          </div> })}
        </div> */}
        <div className="doctor-info-content">
        { active ? doctor?.doctor_education?.map((item,index)=>{
          return <div className="doctor-info-content-item">
            <p className={"study-info line-large"}>
              <span className={"study-type"}>{item.types}</span>
              <span className={"study-address"}>{item.place_of_study}</span>
            </p>
            <p className={"study-country line-large"}>{item.location}</p>
            <div className={"study-date"}><p>{item.year_range} </p></div>
          </div>
        }) : doctor?.doctor_workexperience?.map((item,index)=>{
          return <div className="doctor-info-content-item">
            <p className={"study-info line-large"}>
              <span className={"study-type"}>{item.types}</span>
              <span className={"study-address"}>{item.place_of_work}</span>
            </p>
            <p className={"study-country line-large"}>{item.location}</p>
            <div className={"study-date"}><p>{item.year_range} </p></div>
          </div> })}
        
        </div>
      </div>
    </div>}
    </>
  );
};

export default DoctorInfo;
