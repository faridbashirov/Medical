import React from 'react'
import './Medium.css'
import { useTranslation } from 'react-i18next'

const Medium = ({discount,percantage,image}) => {
  const {t}=useTranslation()
  return (
    <div className='medium'>
      {discount || percantage && <div className='medium-box'>
        {discount && <p className='medium-box-description'>{discount}</p>}
        {percantage && <p className='medium-percantage'>{percantage}</p>}
      </div>}
      <div className='medium-box'>
        <p className='medium-box-description'>{t("discount-name")}</p>
        <p className='medium-percantage'>30%</p>
      </div>
      {image && <img className='medium-image' src={image} alt="" />}
    </div>
  )
}

export default Medium