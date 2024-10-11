import React from 'react'
import './SmallLong.css'
import { useTranslation } from 'react-i18next'

const SmallLong = ({discount,percentage,image,title}) => {
  const {t}=useTranslation()
  return (
    <div className='small-long'>
      <div className='small-title-area'>
        {title && <div className='small-long-title'>{title}</div>}
      </div>
      {percentage!==null ? <div className='small-long-box'>
        {discount 
        ? 
        <>
          <p className='small-long-box-description'>{t("discount-name")}</p>
          <p className='small-long-percantage'>{percentage}%</p>
        </>
        :
        <>
          <p className='small-long-box-description'>{t("only")}</p>
          <p className='small-long-day'>{percentage} {t("day")}</p>
        </>
        }
      </div>
      :
      <></>
      }
      {/* <div className='small-long-box'>
        <p className='small-long-box-description'>{t("discount-name")}</p>
        <p className='small-long-percantage'>15%</p>
      </div> */}
      <div className='small-long-image-box'>
        {image && <img className='small-long-image' src={image} alt="" />}
      </div>
    </div>
  )
}

export default SmallLong