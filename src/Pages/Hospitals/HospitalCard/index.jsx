import React from 'react';
import './HospitalCard.css';
import profile from '../../../assets/Delete/Rectangle 178.png';
import location from "../../../assets/Svg/Location.svg";
import locationSponsored from '../../../assets/Svg/Location-sponsored.svg';
import heart from "../../../assets/Svg/heart-sm.svg";
import heartDeactive from '../../../assets/Svg/heart-deactive.svg'
import { Rate } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import { axiosPrivate } from '../../../api/api';
import { Trans } from 'react-i18next';

const HospitalCard = ({ hospital, t, user }) => {  
  const [liked, setLiked] = React.useState(hospital?.is_favorite || false);
  const navigate=useNavigate()
  const [add, setAdd] = React.useState(false);
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
  const AddToFavorite = async (id) => {
    try {
      await axiosPrivate.post(`card/add_favorite/${id}`);
      setLiked(true);
      setAdd(!add);
    } catch (err) {
      console.error('Failed to add to favorites:', err);
    }
  };

  const DeleteFromFavorite = async (id) => {
    try {
      await axiosPrivate.delete(`card/remove_favorite/${id}`);
      setLiked(false);
      setAdd(!add);
    } catch (err) {
      console.error('Failed to remove from favorites:', err);
    }
  };

  return (
    <div className={`hospital-card-new ${hospital?.is_sponsored ? "hospital-card-new-sponsor" : ""}`}>
      <div className='hospital-card-new-container'>
        <div className='hospital-card-new-profile-photo-area'>
          {hospital?.main_image!=="" &&
          <img className='hospital-card-new-profile-photo' src={hospital?.main_image || profile} alt="" />
           }
           {user ?
           <div 
            onClick={(e) => {
              e.preventDefault()
              liked ? DeleteFromFavorite(hospital?.id) : AddToFavorite(hospital?.id)
            }} 
            className={'hospital-card-new-profile-heart'}
          >
            {liked ? <img src={heart} alt="" /> : <img src={heartDeactive} alt="" />}
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
                <span className='hospital-card-new-profile-detail-raiting-name'>{raitingName(hospital?.raiting)}</span>
              </span>
              {/* <div className='hospital-card-new-profile-detail-reviews'>
                <a href="">{hospital?.comment_count} отзыва</a>
                <p>Соотношение цена/качество</p>
              </div> */}
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
