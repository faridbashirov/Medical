import React from 'react'
// import plastic from '../../../assets/Images/best-sellers/def241ffe1 1.png'
import plastic from '../../../assets/Images/best-sellers/eac6ab1446 1.png'
import './Large.css'
import { Button } from 'antd'
import { useTranslation } from 'react-i18next'

const Large = ({image,discount,percantage,title}) => {
  const {t}=useTranslation()
  return (
    <div className={title==1 ? 'large largeTypeTwo' : 'large largeTypeOne'}>
      <div className='large-background-box'></div>
      {discount || percantage && <div className='large-box'>
        {discount && <p className='large-box-description'>{discount}</p>}
        {percantage && <p className='large-percantage'>{percantage}</p>}
      </div>}
      <div className='large-image-box'>
        {image && <img className='large-image' src={image} alt="" />}
      </div>
      {title!=1 ? 
        <div className='large-title-button'>
          <h3 className='title'>{title}</h3>
          <Button className='large-button'>
          {t("seemore")}
          </Button>
        </div> :
        <>
          <div className='large-box'>
            <p className='large-box-description'>скидка</p>
            <p className='large-percantage'>15%</p>
          </div>
          <div className='large-title-button'>
            <Button className='large-button'>
            {t("seemore")}
            </Button>
          </div>
        </>
      }
    </div>
  )
}

export default Large