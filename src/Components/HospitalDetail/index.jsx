import React, { useState } from 'react';
import './HospitalDetail.css'
import Footer from "../Footer/index.js";
import BreadCrumbs from "../BreadCrumbs";
import {infoButtons} from "./data.js";
import Detail from "./Detail";
import infoIcon from "../../assets/Svg/ambulans.svg"
import InfoContent from "./InfoContent";
import Categories from "./Categories";
import Reviews from "./Reviews";
import Questions from "./Questions";
import QualityRating from "./QualityRating";
import GetService from "./GetService";
import PaySection from "./PaySection";
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
    {!loading &&  <div style={{background: "#f6f6f6"}} className='hospital-detail-container'>
      
    
    <BreadCrumbs/>
    <div className={'container '}>
      <div className={'detail__info-btns'}>
        {infoButtons.map(item => (
          <button key={item.id} className={'detail__info-btn'}>{t(item.label)}</button>
        ))}
      </div>
      <Detail open={onOpenBookingModal} images={images} hospital={hospital}/>
      {advantages.length>0 ? <div className={'detail__clinic-btns'}>
        {advantages.map(item => (
          <button key={item.id} className={'detail__clinic-btn'}>
            <img src={infoIcon} alt=""/>
            {item.text}
          </button>
        ))}
      </div> :
      <></>}
    </div>
    <InfoContent open={onOpenBookingModal} discount={discount} hospital={hospital}/>
    <div className="container ">
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
    <QualityRating  hospital={hospital}  />
    <GetService hospital={hospital}/>
    <PaySection/>
    <HospitalBookingModal  openBooking={openBooking} onCloseBookingModal={onCloseBookingModal}/>
    <Footer/>
  </div>}
  </>
   
  );
};

export default HospitalDetail;
