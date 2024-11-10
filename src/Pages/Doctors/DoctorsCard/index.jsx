import React, { useEffect } from 'react';
import './DoctorsCard.css';
import location from "../../../assets/Svg/Location.svg";
import locationSponsored from '../../../assets/Svg/Location-sponsored.svg';
import experience from "../../../assets/Svg/staj.svg";
import heart from "../../../assets/Svg/heart-sm.svg";
import heartDeactive from '../../../assets/Svg/heart-deactive.svg'
import doctorMale from "../../../assets/Images/User/doctor-male.png"
import doctorFemale from "../../../assets/Images/User/doctor-female.png"
import { Rate } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import { axiosPrivate } from '../../../api/api';

const DoctorsCard = ({ doctor, t, user }) => {
  console.log('doctor:',doctor)
  const [liked, setLiked] = React.useState(doctor?.is_favorite);
  const navigate=useNavigate()
  const [add, setAdd] = React.useState(false);
  const AddToFavorite = async (id) => {
    try {
      await axiosPrivate.post(`card/add_favorite_doctor/${id}`);
      setLiked(true);
      setAdd(!add);
    } catch (err) {
      console.error('Failed to add to favorites:', err);
    }
  };

  const DeleteFromFavorite = async (id) => {
    try {
      await axiosPrivate.delete(`card/remove_favorite_doctor/${id}`);
      setLiked(false);
      setAdd(!add);
    } catch (err) {
      console.error('Failed to remove from favorites:', err);
    }
  };

  useEffect(()=>{
    DeleteFromFavorite()
  })
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

  return (
    <div className={`doctors-card-new ${doctor?.is_sponsored ? "doctors-card-new-sponsor" : ""}`}>
      <div className='doctors-card-new-container'>
        <Link to={`/doctor/${doctor?.id}`}>
          <div className='doctors-card-new-profile-photo-area'>
            {doctor?.profile_photo!=="" &&
            <img className='doctors-card-new-profile-photo' src={doctor?.profile_photo || doctorMale} alt="" />
            }
            {user ?
            <div 
              onClick={(e) => {
                e.preventDefault();
                liked ? DeleteFromFavorite(doctor?.id) : AddToFavorite(doctor?.id);
              }}
              className={'doctors-card-new-profile-heart'}
            >
              {liked ? <img src={heart} alt="" /> : <img src={heartDeactive} alt="" />}
            </div>
            :
            <></>
            }
            {doctor?.is_sponsored ?
            <div className='doctors-card-new-profile-sponsor'>sponsored</div>
            :
            <></>}
          </div>
        </Link>
        <div className='doctors-card-new-profile-detail-area'>
          <div className='doctors-card-new-profile-detail-header-area'>
            <h6>главный врач</h6>
            <div className='doctor-card-new-profile-name-and-work'>
              {doctor?.first_name && (
                <h3>Dr. {doctor?.first_name} {doctor?.last_name}</h3>
              )}
              {doctor?.hospital?.name && (
                <Link className='doctors-card-new-profile-detail-hospital' to={`/hospital/${doctor?.hospital?.id}`}>
                  <img className='doctors-card-new-profile-detail-hospital-icon' 
                       src={doctor?.is_sponsored ? locationSponsored : location} 
                       alt="" 
                  />
                  <p>{doctor?.hospital?.name}</p>
                </Link>
              )}
            </div>
            <span className='doctors-card-new-profile-detail-raitings'>
              <span className='doctors-card-new-profile-detail-raiting'>{doctor?.raiting_count >= 0 ? doctor?.raiting_count.toFixed(1) : 0}</span>
              <span className='doctors-card-new-profile-detail-stars'>
                <Rate style={{ color: '#FFC224' }} disabled={true} value={doctor?.raiting_count >= 0 ? doctor?.raiting_count.toFixed(1) : 0} />
              </span>
              <span className='doctors-card-new-profile-detail-raiting-name'>{raitingName(doctor?.raiting_count)}</span>
            </span>
            <div className='doctors-card-new-profile-detail-reviews'>
              {/* <a href="">{doctor?.comment_count} отзыва</a>
              <p>Соотношение цена/качество</p> */}
            </div>
          </div>
          <div className='doctors-card-new-profile-buttons'>
            <div className='doctors-card-new-profile-left-buttons'>
              <button className='doctors-card-new-profile-left-button'>Сосудистая хирургия</button>
              <button className='doctors-card-new-profile-left-button'>
                <img src={experience} alt="" />{doctor?.experience !== null ? `${doctor?.experience}` : "0"} лет опыта
              </button>
            </div>
            <div className='doctors-card-new-profile-right-buttons'>
              <Link to={`/doctor/${doctor?.id}`}>
                <button className='doctors-card-new-profile-right-button'>{t("doctorlist")}</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorsCard;
