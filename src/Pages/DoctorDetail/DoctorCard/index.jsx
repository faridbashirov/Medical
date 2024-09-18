import React from 'react'
import './DoctorCard.css'
import { useTranslation } from 'react-i18next'
import location from "../../../assets/Svg/Location.svg";
import experience from "../../../assets/Svg/staj.svg";
import DrFB from "../../../assets/Svg/DrFB.svg";
import DrVK from "../../../assets/Svg/DrVK.svg";
import DrLn from "../../../assets/Svg/DrLn.svg";
import { Rate } from 'antd'

const DoctorCard = ({onOpenBookingModal,doctor}) => {
  console.log(doctor, "salama")
  const {t}=useTranslation()
  return (
    <div className='doctor-card-container'>
      <div className='doctor-card'>
        <div className='doctor-card-profile'>
          <div className='doctor-card-profile-photo'>
            <img src={doctor.profile_photo} alt="" />
            <div className='doctor-card-profile-photo-raiting'>{doctor?.raiting>=0 ? doctor?.raiting.toFixed(1) : 0 }</div>
          </div>
          <div className='doctor-card-profile-details'>
            <div className='doctor-card-profile-title-area'>
              {doctor?.position?.name.length>0 ?
              <div className='doctor-card-profile-title'><h5>{doctor.position?.name}</h5>
              <Rate disabled={true} value={doctor.raiting}/></div> :
              <div className='doctor-card-profile-title'><Rate disabled={true} value={doctor.raiting}/></div>}
              <div className="doctor-card-raiting-area">
                <h6>великолепно</h6>
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
                <button>контакт</button>
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