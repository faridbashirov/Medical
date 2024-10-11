import React from 'react'
import './Medium.css'
import { useTranslation } from 'react-i18next'

const Medium = ({discount,percentage,image}) => {
  const {t}=useTranslation()
  return (
    <div className='medium'>
      {percentage ? 
      <div className='medium-box'>
        {discount ?
        <>
          <p className='medium-box-description'>{t("discount-name")}</p>
          <p className='medium-percantage'>{percentage}%</p>
        </>
        :
        <>
          <p className='medium-box-description'>{t("only")}</p>
          <p className='medium-day'>{percentage} {t("day")}</p>
        </>}
      </div>
      : <></>}
      {image && <img className='medium-image' src={image} alt="" />}
    </div>
  )
}

export default Medium