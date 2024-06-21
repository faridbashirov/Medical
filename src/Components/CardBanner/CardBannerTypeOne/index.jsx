import React from 'react'
import "./CardBannerTypeOne.css"

const CardBannerTypeOne = ({image,title}) => {
  return (
    <div className='CardBannerTypeOne'>
        <div className='CardBannerTypeOne-title'>{title}</div>
        <img src={image} alt="" />
    </div>
  )
}

export default CardBannerTypeOne