import React from  'react';
import infoIcon from '../../../assets/Svg/info-green.svg'
import { useTranslation } from 'react-i18next';
import './HospitalInfoContent.css'

const InfoContent = ({hospital,discount,open}) => {
 const {t}=useTranslation()
   return (
    <section className='hospital-info-section'>
      <div className="hospital-info-container">
        <div className="hospital-info-left-side">
          {discount.map((item)=>{
            return <h4 key={item.id}>{item.text}</h4>
          })}
          <p>{hospital?.description ? hospital?.description : ''}</p>
        </div>
        <div className='hospital-info-right-side'>
          <div className='hospital-info-right-side-card'>
            <div className='hospital-info-right-side-card-header'>
              <h4>{t("benefit")}</h4>
              <p>идемьно подходит</p>
            </div>
            <ul>
              <li><span>{t("location")}</span></li>
              <li><span>{t("ecenomic")}</span></li>
              <li><span>{t("comission")}</span></li>
              <li><span>{t("bron2")}</span></li>
              <li><span>{t("bron3")}</span></li>
            </ul>
            <button onClick={open}>{t("bron4")}</button>
          </div>
          <div className='hospital-info-right-side-card hospital-info-right-side-second-card'>
            <h4>
              <img src={infoIcon} alt=""/>
              {t("maininformation")}
            </h4>
            <p>{t("maininformation2")} </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoContent;
