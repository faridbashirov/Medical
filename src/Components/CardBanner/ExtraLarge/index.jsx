import React from 'react'
import ballFirst from '../../../assets/Images/best-sellers/3 10.png'
import ballSecond from '../../../assets/Images/best-sellers/2 12.png'
import ballThird from '../../../assets/Images/best-sellers/1 13.png'
import './ExtraLarge.css'
import { Button } from 'antd'
import { useTranslation } from 'react-i18next'

const ExtraLarge = ({image,discount,percentage}) => {
  const {t}=useTranslation()
  return (
    <div className='extraLarge'>
      <div className='extra-large-background-box'></div>
      {percentage ? 
      <div className='extra-large-box'>
        {discount 
        ? 
        <>
          <p className='extra-large-box-description'>{t("discount-name")}</p>
          <p className='extra-large-percantage'>{percentage}%</p>
        </>
        :
        <>
          <p className='extra-large-box-description'>{t("only")}</p>
          <p className='extra-large-percantage'>{percentage} {t("day")}</p>
        </>
        }
      </div>
      : <></>}

      <img className='ballFirst' src={ballFirst} alt="" />
      <img className='ballSecond' src={ballSecond} alt="" />
      <img className='ballThird' src={ballThird} alt="" />
      <div className='extra-large-image-box'>
        {image && <img className='extra-large-image' src={image} alt="" />}
      </div>
      <Button className='extra-large-button'>
      {t("seemore")}
      </Button>
    </div>
  )
}

export default ExtraLarge