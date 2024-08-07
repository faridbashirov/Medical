import React from 'react'
import { useTranslation } from 'react-i18next';
import './Welcome.css'
const Welcome = () => {
  const {t} = useTranslation();
  return (
    <div className='welcome-area'>
      <div className='welcome-container'>
        <div className='welcome-box'>
          <h3>Добро пожаловать на 112 MED</h3>
          <p>Мы стремимся, чтобы вы получили качественные, удобные и доступные медицинские услуги по всему миру!</p>
        </div>
        <div className="welcome-statistics">
          <div className='welcome-statistic'>
            <h3>5+</h3>
            <h6>{t("Countries")}</h6>
          </div>
          <div className='welcome-statistic'>
            <h3>40+</h3>
            <h6>{t("Clinics")}</h6>
          </div>
          <div className='welcome-statistic'>
            <h3>70+</h3>
            <h6>{t("Doctors")}</h6>
          </div>
          <div className='welcome-statistic'>
            <h3>10+</h3>
            <h6>{t("Services")}</h6>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Welcome