import React from 'react';
import './DoctorsCard.css';
import location from "../../../../assets/Svg/Location.svg";
import locationSponsored from '../../../../assets/Svg/Location-sponsored.svg';
import experience from "../../../../assets/Svg/staj.svg";
import heart from "../../../../assets/Svg/heart-sm.svg";
import doctorMale from "../../../../assets/Images/User/doctor-male.png";
import { Rate } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import { axiosPrivate } from '../../../../api/api';

const DoctorsCard = ({ doctor, t, user, add, setAdd }) => {
  const [liked, setLiked] = React.useState(true);
  const navigate = useNavigate();
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
  const DeleteFromFavorite = async (id) => {
    try {
      setLiked(false);
      await axiosPrivate.delete(`card/remove_favorite_doctor/${id}`);
      setAdd(!add);
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div className={`doctors-card-new ${doctor?.is_sponsored ? "doctors-card-new-sponsor" : ""}`}>
      <div className='doctors-card-new-container'>
        <div className='doctors-card-new-profile-photo-area'>
          {doctor?.profile_photo!=="" &&
            <img className='doctors-card-new-profile-photo' src={doctor?.profile_photo || doctorMale} alt="" />
          }
          {user && (
            <div 
              onClick={() => DeleteFromFavorite(doctor?.id)}
              className={'doctors-card-new-profile-heart'}
            >
              <img src={heart} alt="" />
            </div>
          )}
          {doctor?.is_sponsored && (
            <div className='doctors-card-new-profile-sponsor'>sponsored</div>
          )}
        </div>
        <div className='doctors-card-new-profile-detail-area'>
          <div className='doctors-card-new-profile-detail-header-area'>
            <h6>{doctor?.title?.title}</h6>
            <div className='doctor-card-new-profile-name-and-work'>
              {doctor?.first_name && (
                <h3>Dr. {doctor?.first_name} {doctor?.last_name}</h3>
              )}
              {doctor?.hospital?.name && (
                <Link className='doctors-card-new-profile-detail-hospital' to={`/hospital/${doctor?.hospital?.id}`}>
                  <img 
                    className='doctors-card-new-profile-detail-hospital-icon' 
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
              <button className='doctors-card-new-profile-left-button'>{doctor?.position?.name}</button>
              <button className='doctors-card-new-profile-left-button'>
                <img src={experience} alt="" />{t('experiment', { years: doctor?.experience !== null ? `${doctor?.experience}` : "0"})}
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
