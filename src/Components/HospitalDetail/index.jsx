import React, { useState } from 'react';
import './HospitalDetail.css'
import BreadCrumbs from "../BreadCrumbs";
import {infoButtons} from "./data.js";
import Detail from "./Detail";
import infoIcon from "../../assets/Svg/ambulans.svg"
import HospitalInfoContent from "./HospitalInfoContent";
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
import { Helmet } from 'react-helmet';
import HospitalDetailHint from './HospitalDetailHint/index.jsx';
import HospitalDirections from './HospitalDirections/index.jsx';
import { useSelector } from 'react-redux';
import { FadeLoader } from 'react-spinners';
const HospitalDetail = () => {
 const {id}=useParams()
 const {hospital,services,advantages,discount,questions,reviews,images,loading,error}=DetailFetch(id,i18next.language)
 const {t}=useTranslation()
 const [openBooking, setOpenBooking] = useState(false)
 const {user,authToken}=useSelector(state=> state.auth)
 const onOpenBookingModal = () => {
  setOpenBooking(true)
}
const onCloseBookingModal = () => {
  setOpenBooking(false)
}
  if(loading){
    return <div className='hospital-detail-loading-area'> <FadeLoader
              color="black"
              className={"loading"}
              loading={true}
              size={150}
              aria-label="Loading Spinner"
              data-testid="loader"
            /> </div>
  }
  if(error){
    return <div>Errorr</div>
  }
  return (
    <>
    <div style={{background: "#f6f6f6"}} className='hospital-detail-container'>
    <Helmet>
      <meta charSet="utf-8" />
      <title>{hospital.name}</title>
    </Helmet>
    <div className={'container hospital-detail-container'}>
      <BreadCrumbs pageItems={[{
              title: t("home"),
              href: "/",
            },
            {
              title: t("Clinics"),
              href: "/hospitals"
            },
            {
              title: `${hospital.name}`,
              href: ""
            },
      ]}/>
      <div className={'detail__info-btns'}>
        {infoButtons.map(item => (
          <button key={item.id} className={'detail__info-btn'}>{t(item.label)}</button>
        ))}
      </div>
      <Detail user={user} open={onOpenBookingModal} images={images} hospital={hospital}/>
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
    <HospitalInfoContent open={onOpenBookingModal} discount={discount} hospital={hospital}/>
    <HospitalDetailHint t={t}/>
    <HospitalDirections services={services} hospital={hospital}/>
    {/* <Reviews id={id} reviews={reviews}/> */}
    {/* <Questions questions={questions}/> */}
    <QualityRating  hospital={hospital}  />
    <GetService hospital={hospital}/>
    {/* <PaySection/> */}
    <HospitalBookingModal  openBooking={openBooking} onCloseBookingModal={onCloseBookingModal}/>
  </div>
  </>
   
  );
};

export default HospitalDetail;
