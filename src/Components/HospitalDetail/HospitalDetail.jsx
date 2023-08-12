import React, { useState,useEffect } from 'react';
import './HospitalDetail.css'
import Header from "../Header";
import Footer from "../Footer/index.js";
import BreadCrumbs from "./BreadCrumbs.jsx";
import {clinicButtons, infoButtons} from "./data.js";
import Detail from "./Detail.jsx";
import infoIcon from "../../assets/Svg/ambulans.svg"
import InfoContent from "./InfoContent.jsx";
import Categories from "./Categories.jsx";
import Reviews from "./Reviews.jsx";
import Questions from "./Questions.jsx";
import QualityRating from "./QualityRating.jsx";
import GetService from "./GetService.jsx";
import PaySection from "./PaySection.jsx";
import DetailFetch from '../api/hospitalDetailFetch';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';
import HospitalBookingModal from './HospitalBookingModal';
const HospitalDetail = () => {
  const {t}=useTranslation()
  const [openBooking, setOpenBooking] = useState(false)
  

 const {id}=useParams()
 const onOpenBookingModal = () => {
  console.log('1')
  setOpenBooking(true)
}
const onCloseBookingModal = () => {
  setOpenBooking(false)
}

const {hospital,services,advantages,discount,questions,reviews,images,loading,error}=DetailFetch(id,i18next.language)
console.log(reviews);
  if(error){
    return <div>Errorr</div>
  }
  if(!hospital){
    return <div>Loading .... </div>
  }

  console.log(hospital);




  return (
    <>
    {!loading &&  <div style={{background: "#f6f6f6"}}>
      
    
    <BreadCrumbs/>
    <div className={'container'}>
      <div className={'detail__info-btns'}>
        {infoButtons.map(item => (
          <button key={item.id} className={'detail__info-btn'}>{t(item.label)}</button>
        ))}
      </div>
      <Detail images={images} hospital={hospital}/>
      <div className={'detail__clinic-btns'}>
        {advantages.map(item => (
          <button key={item.id} className={'detail__clinic-btn'}>
            <img src={infoIcon} alt=""/>
            {item.text}
          </button>
        ))}
      </div>
    </div>
    <InfoContent open={onOpenBookingModal} discount={discount} hospital={hospital}/>
    <div className="container">
      <div className={"hospital-detail__hint"}>
        <h4 className={"hospital-detail__hint-title"}>{t("hint")}</h4>
        <p className={"hospital-detail__hint-subtitle"}>{t("hint2")}</p>
      </div>
    </div>
    <div className={"container"}>
      <Categories hospital={hospital}  services={services}/>
    </div>
    <Reviews id={id} reviews={reviews}/>
    <Questions questions={questions}/>
    <QualityRating/>
    <GetService hospital={hospital}/>
    <PaySection/>
    <HospitalBookingModal  openBooking={openBooking} onCloseBookingModal={onCloseBookingModal}/>
    <Footer/>
  </div>}
  </>
   
  );
};

export default HospitalDetail;
