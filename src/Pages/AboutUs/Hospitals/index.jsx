import React from 'react'
import './Hospitals.css'
import { useTranslation } from 'react-i18next';
import useLanguageFetch from '../../../Hooks/useLanguageFetch';

const Hospitals = () => {
  const { data, loading, error } = useLanguageFetch('main/corporate_hospitals',localStorage.getItem("lang"));
  const {t} = useTranslation();
  if(loading){
    return <></>
  }
  if(error){
    console.log(error)
  }
  return (
    <div className='sponsored-hospitals'>
      <div className='sponsored-hospitals-container'>
        <div className='title'>
          <h4>{t("professionalclinics")}</h4>
          <h5>Lorem ipsum dolor sit amet consectetur dolor sit amet.</h5>
        </div>
        <div className='sponsored-hospitals-list-box'>
          <div className='sponsored-hospitals-list'>
            {data?.map((item)=>(
              <img src={item?.logo} alt="" />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hospitals