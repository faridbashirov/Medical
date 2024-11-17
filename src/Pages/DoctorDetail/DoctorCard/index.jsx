import React, { useEffect, useState } from 'react'
import './DoctorCard.css'
import { useTranslation } from 'react-i18next'
import location from "../../../assets/Svg/Location.svg";
import experience from "../../../assets/Svg/staj.svg";
import DrFB from "../../../assets/Svg/DrFB.svg";
import DrVK from "../../../assets/Svg/DrVK.svg";
import DrLn from "../../../assets/Svg/DrLn.svg";
import doctorMale from "../../../assets/Images/User/doctor-male.png"
import doctorFemale from "../../../assets/Images/User/doctor-female.png"
import { Rate } from 'antd'
import { postRatingDoctor } from '../../../Components/api/postRaitingDoctor';
import i18next from 'i18next';
import { useParams } from 'react-router-dom';
import axios from "../../../Components/api";

const DoctorCard = ({onOpenBookingModal,doctor}) => {
  const {id}=useParams()
  let [rating, setRating] = useState(0);
  useEffect(() => {
    if (doctor?.raiting_count) {
      setRating(doctor.raiting_count);
    }
  }, [doctor]);
  const [comment, setComment] = useState("");
  const handleRatingSubmit = async (value) => {
  const reviewData = {
    doctor: doctor?.id,
    text: comment,
    rate: value,
  }; 

  const response = await postRatingDoctor(reviewData);
  const responseNew = await axios.get(`${i18next.language === "ru" ? "" : i18next.language + "/"}account/doctor_detail/${id}`)
  let newRating = responseNew?.data?.raiting_count
  setRating(newRating)
};
  const raitingName = (raiting_count) => {
    if(raiting_count==0){
      return t("no-rating");
    }else if(raiting_count>0 && raiting_count<=1){
      return t("very-bad");
    }else if(raiting_count>1 && raiting_count<=2){
      return t("bad");
    }
    else if(raiting_count>2 && raiting_count<=3){
      return t("not-bad");
    }else if(raiting_count>3 && raiting_count<=4){
      return t("good");
    }else{
      return t("excellent");
    }
  };
  
  const {t}=useTranslation()
  return (
    <div className='doctor-card-container'>
      <div className='doctor-card'>
        <div className='doctor-card-profile'>
          <div className='doctor-card-profile-photo'>
            {doctor?.profile_photo!=="https://hospitalbackend.efgroup.az/media/default.png" ?
              <img src={doctor?.profile_photo || doctorMale} alt="" />
              :
              <img src={doctorMale} alt="" />
            }
            <div className='doctor-card-profile-photo-raiting'>{rating>=0 ? rating.toFixed(1) : 0 }</div>
          </div>
          <div className='doctor-card-profile-details'>
            <div className='doctor-card-profile-title-area'>
              {doctor?.position?.name.length>0 ?
              <div className='doctor-card-profile-title'><h5>{doctor.title?.title}</h5>
              <Rate
                style={{ color: "#FFC224"}}
                defaultValue={0}
                onChange={handleRatingSubmit}
              /></div> :
              <div className='doctor-card-profile-title'><Rate value={doctor.raiting_count}/></div>}
              <div className="doctor-card-raiting-area">
                <h6>{raitingName(rating)}</h6>
                <div className='doctor-card-raiting'>{rating>=0 ? rating.toFixed(1) : 0 }</div>
              </div>
            </div>
            <h1>Dr. {doctor.first_name} {doctor.last_name}</h1>
            {doctor?.hospital_name?.length>0 ? 
            <div className='doctor-card-profile-hospital'>
              <img src={location}/>
              <h6>{doctor.hospital_name}</h6>
            </div>
            : <></>}
            {doctor?.position?.name ? 
            <div className='doctor-card-profile-position'>{doctor.position?.name}</div> : <></>}
            {doctor?.experience ? 
            <div className='doctor-card-profile-experience'>
              <img src={experience}/>{t('experiment', { years: doctor?.experience})}
            </div> : <></>}
            <div className='doctor-card-buttons-area'>
              <div className='doctor-card-buttons-desktop'>
                <button onClick={onOpenBookingModal}>{t("onlinebooking")}</button>
                <button><a href={`tel:${doctor?.phone_number}`}>{doctor?.phone_number}</a></button>
              </div>
              <div className="doctor-card-social">
                <img src={DrFB}/>
                <img src={DrVK}/>
                <img src={DrLn}/>
              </div>
            </div>
          </div>
        </div>
        <div className='doctor-card-buttons'>
          <button onClick={onOpenBookingModal}>{t("onlinebooking")}</button>
          <button><a href={`tel:${doctor?.phone_number}`}>{t('contact-doctor')}</a></button>
        </div>
      </div>
    </div>
  )
}

export default DoctorCard