import React, { useEffect, useState } from 'react';
import azFlagIcon from  "../../assets/Images/flags/azFlag.png"
import trFlagIcon from  "../../assets/Images/flags/trFlag.png"
import ruFlagIcon from  "../../assets/Images/flags/ruFlag.png"
import { allCountriesFetch } from '../api/allCountries';
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';
const OurGeography = () => {
  const {t,i18n} = useTranslation()

  const [country,setCountry]=useState([])
  useEffect(()=>{
    const getCountries=async()=>{
      const data= await allCountriesFetch(localStorage.getItem("lang"))
      setCountry(data)
    }
    getCountries()

  },[i18next.language])
  return (
    <section className={"container"}>
      <div className="geography">
        <div className="geography__header">
          <h4 className="geography__header-title">{t("ourgeography")}</h4>
          {/* <p className="geography__header-subtitle">Lorem ipsum dolor sit amet consectetur dolor sit amet.</p> */}
        </div>
        <div className="geography__items">
          {country.map((item,index)=>{
            return  <div className="geography__item">
            <img style={{
              borderRadius:50
            }} height={80} width={80} src={item.flag} alt=""/>
            <p className="geography__item-text ">{item.name}</p>
          </div>
          })}
         
          
        </div>
      </div>
    </section>
  );
};

export default OurGeography;
