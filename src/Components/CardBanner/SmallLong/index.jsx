import React from 'react'
import plastic from '../../../assets/Images/best-sellers/def241ffe1 1.png'
import './SmallLong.css'
import { useTranslation } from 'react-i18next'

const SmallLong = ({discount,percantage,image,title,description}) => {
  const {t}=useTranslation()
  return (
    <div className='small-long'>
      <div className='small-title-area'>
        {title && <div className='small-long-title'>{title}</div>}
      </div>
      {discount || percantage && <div className='small-long-box'>
        {discount && <p className='small-long-box-description'>{discount}</p>}
        {percantage && <p className='small-long-percantage'>{percantage}</p>}
      </div>}
      <div className='small-long-box'>
        <p className='small-long-box-description'>{t("discount-name")}</p>
        <p className='small-long-percantage'>15%</p>
      </div>
      <div className='small-long-image-box'>
        {image && <img className='small-long-image' src={image} alt="" />}
      </div>
    </div>
  )
}

export default SmallLong