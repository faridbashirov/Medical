import React from 'react'
import './Large.css'
import { Button } from 'antd'
import { useTranslation } from 'react-i18next'
import { Link } from "react-router-dom";

const Large = ({image,discount,percentage,title,linkName}) => {
  const {t}=useTranslation()
  return (
    <div className={percentage ? 'large largeTypeTwo' : 'large largeTypeOne'}>
      <div className='large-background-box'></div>
      <div className='large-image-box'>
        {image && <img className='large-image' src={image} alt="" />}
      </div>
      {percentage===null ? 
        <div className='large-title-button'>
          <h3 className='title'>{title}</h3>
          <Link to={linkName}>
          <Button className='large-button'>
          {t("seemore")}
          </Button>
          </Link>
        </div> :
        <>
        {discount 
        ? 
        <div className='large-box'>
            <p className='large-box-description'>{t("discount-name")}</p>
            <p className='large-percantage'>{percentage}%</p>
          </div>
        : 
        <div className='large-box'>
            <p className='large-box-description'>{t("only")}</p>
            <p className='large-percantage'>{percentage} {t("day")}</p>
          </div>
        }
          <div className='large-title-button'>
            <Link to={linkName}>
            <Button className='large-button'>
            {t("seemore")}
            </Button>
            </Link>
          </div>
        </>
      }
    </div>
  )
}

export default Large