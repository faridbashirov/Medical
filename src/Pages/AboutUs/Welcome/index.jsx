import React from 'react'
import { useTranslation } from 'react-i18next';
import './Welcome.css'
import useLanguageFetch from '../../../Hooks/useLanguageFetch';
const Welcome = () => {
  const {t} = useTranslation();
  const country = useLanguageFetch('main/countries',localStorage.getItem("lang"));
  const doctors = useLanguageFetch('account/doctors',localStorage.getItem("lang"));
  const hospitals = useLanguageFetch('hospital/hospitals',localStorage.getItem("lang"));
  const services = useLanguageFetch('account/all_positions',localStorage.getItem("lang"));
  const about_banner = useLanguageFetch('main/about_banner',localStorage.getItem("lang"));
  console.log(about_banner?.data, "sslslssslls")
  return (
    <div className='welcome-area'>
      <div className='welcome-container'>
        <div className='welcome-box'>
          <h3>{about_banner?.data?.title}</h3>
          <p>{about_banner?.data?.description}</p>
        </div>
        <div className="welcome-statistics">
          <div className='welcome-statistic'>
            <h3>{country?.data?.length}</h3>
            <h6>{t("Countries")}</h6>
          </div>
          <div className='welcome-statistic'>
            <h3>{hospitals?.data?.length}</h3>
            <h6>{t("Clinics")}</h6>
          </div>
          <div className='welcome-statistic'>
            <h3>{doctors?.data?.count}</h3>
            <h6>{t("Doctors")}</h6>
          </div>
          <div className='welcome-statistic'>
            <h3>{services?.data?.length}</h3>
            <h6>{t("Services")}</h6>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Welcome