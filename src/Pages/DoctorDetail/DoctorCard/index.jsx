import React from 'react'
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

const DoctorCard = ({onOpenBookingModal,doctor}) => {
  const raitingName = (raiting) => {
    switch (raiting) {
      case 0:
        return t("no-rating");
      case 1:
        return t("very-bad");
      case 2:
        return t("bad");
      case 3:
        return t("not-bad");
      case 4:
        return t("good");
      case 5:
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
            <div className='doctor-card-profile-photo-raiting'>{doctor?.raiting>=0 ? doctor?.raiting.toFixed(1) : 0 }</div>
          </div>
          <div className='doctor-card-profile-details'>
            <div className='doctor-card-profile-title-area'>
              {doctor?.position?.name.length>0 ?
              <div className='doctor-card-profile-title'><h5>{doctor.position?.name}</h5>
              <Rate disabled={true} value={doctor.raiting}/></div> :
              <div className='doctor-card-profile-title'><Rate disabled={true} value={doctor.raiting}/></div>}
              <div className="doctor-card-raiting-area">
                <h6>{raitingName(doctor?.raiting)}</h6>
                <div className='doctor-card-raiting'>{doctor?.raiting>=0 ? doctor?.raiting.toFixed(1) : 0 }</div>
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
              <img src={experience}/>{doctor?.experience} лет опыта
            </div> : <></>}
            <div className='doctor-card-buttons-area'>
              <div className='doctor-card-buttons-desktop'>
                <button onClick={onOpenBookingModal}>{t("onlinebooking")}</button>
                <button>{doctor?.phone_number}</button>
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
          <button>контакт</button>
        </div>
      </div>
    </div>
  )
}

export default DoctorCard