import React from 'react';
import './HospitalCard.css';
import location from "../../../../assets/Svg/Location.svg";
import locationSponsored from '../../../../assets/Svg/Location-sponsored.svg';
import heart from "../../../../assets/Svg/heart-sm.svg";
import heartDeactive from '../../../../assets/Svg/heart-deactive.svg'
import doctorMale from "../../../../assets/Images/User/doctor-male.png"
import { Rate } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import { axiosPrivate } from '../../../../api/api';
import { Trans } from 'react-i18next';

const HospitalCard = ({ hospital, t, user }) => {
  console.log(hospital, 'salam')
  const [liked, setLiked] = React.useState(hospital?.is_favorite || false);
  const navigate=useNavigate()
  const [add, setAdd] = React.useState(false);

  const DeleteFromFavorite= async(id)=>{
    setLiked(true)
    axiosPrivate.delete(`card/remove_favorite/${id}`)
    .then((res) => {
        console.log(res);
        setAdd(!add)
    })
    .catch((err) => {
       console.log(err);
    })
  }
  return (
    <div className={`hospital-card-new ${hospital?.is_sponsored ? "hospital-card-new-sponsor" : ""}`}>
      <div className='hospital-card-new-container'>
        <div className='hospital-card-new-profile-photo-area'>
          {hospital?.main_image!=="https://hospitalbackend.efgroup.az/media/default.png" ?
          <img className='hospital-card-new-profile-photo' src={hospital?.main_image} alt="" />
           :
           <img className='hospital-card-new-profile-photo' src={doctorMale} alt="" />
           }
           {user ?
           <div 
             onClick={() => DeleteFromFavorite(hospital?.id)}
            className={'hospital-card-new-profile-heart'}
          >
            <img src={heart} alt="" />
          </div>
           :
           <></>
           }
          {hospital?.is_sponsored ?
          <div className='hospital-card-new-profile-sponsor'>sponsored</div>
          :
          <></>}
        </div>
        <div className='hospital-card-new-profile-detail-area'>
          <div className='hospital-card-new-profile-detail-header-area'>
            <div className='hospital-card-new-profile-name-and-work'>
              {hospital?.location && (
                <Link className='hospital-card-new-profile-detail-hospital'>
                  <img className='hospital-card-new-profile-detail-hospital-icon' 
                       src={hospital?.is_sponsored ? locationSponsored : location} 
                       alt="" 
                  />
                  <p>{hospital?.location}</p>
                </Link>
              )}
              {hospital?.name && (
                <h3>{hospital?.name}</h3>
              )}
            </div>
            <div className='hospital-card-new-profile-detail-footer-area'>
              <span className='hospital-card-new-profile-detail-raitings'>
                <span className='hospital-card-new-profile-detail-raiting'>{hospital?.raiting >= 0 ? hospital?.raiting.toFixed(1) : 0}</span>
                <span className='hospital-card-new-profile-detail-stars'>
                  <Rate style={{ color: '#FFC224' }} disabled={true} value={hospital?.raiting >= 0 ? hospital?.raiting.toFixed(1) : 0} />
                </span>
                <span className='hospital-card-new-profile-detail-raiting-name'>неплохо</span>
              </span>
              <div className='hospital-card-new-profile-detail-reviews'>
                <a href="">{hospital?.comment_count} отзыва</a>
                <p>Соотношение цена/качество</p>
              </div>
            </div>
          </div>
          <div className='hospital-card-new-profile-buttons'>
            <div className='hospital-card-new-profile-left-buttons'>
              <div className='hospital-card-new-profile-left-buttons-header'>
                <div className="hospital-card-percantage">
                  <p><Trans i18nKey="hosbooking" values={{ percantage: "40" }}></Trans></p>
                </div>
                <div className="hospital-card-percantage-second">
                  <p>{t("hoslistbooking2")} 100%</p>
                </div>
              </div>
              <div className='hospital-card-new-profile-left-buttons-description'>
                <p><Trans i18nKey="hoslistbooking3"></Trans></p>
              </div>
            </div>
            <div className='hospital-card-new-profile-right-buttons'>
              <Link to={`/hospital/${hospital?.id}`}>
                <button className='hospital-card-new-profile-right-button'>{t("hoslistbooking4")}</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HospitalCard;
