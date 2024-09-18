import React from 'react'
import './Hospitals.css'
import { useTranslation } from 'react-i18next';
import avrasiyaHospitalLogo from "../../../assets/Svg/about-us/avrasiya-hospital.svg"
import livHospitalLogo from "../../../assets/Svg/about-us/liv-hospital.svg"
import medipolHospitalLogo from "../../../assets/Svg/about-us/medipol-logo.svg"
import anadoluHospitalLogo from "../../../assets/Svg/about-us/anadolu.svg"

const Hospitals = () => {
  const {t} = useTranslation();
  return (
    <div className='sponsored-hospitals'>
      <div className='sponsored-hospitals-container'>
        <div className='title'>
          <h4>{t("professionalclinics")}</h4>
          <h5>Lorem ipsum dolor sit amet consectetur dolor sit amet.</h5>
        </div>
        <div className='sponsored-hospitals-list-box'>
          <div className='sponsored-hospitals-list'>
            <img src={avrasiyaHospitalLogo} alt="" />
            <img src={livHospitalLogo} alt="" />
            <img src={medipolHospitalLogo} alt="" />
            <img src={anadoluHospitalLogo} alt="" />
            <img src={medipolHospitalLogo} alt="" />
            <img src={livHospitalLogo} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hospitals