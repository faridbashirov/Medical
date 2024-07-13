import React from 'react'
import './Medium.css'
import plastic from '../../../assets/Images/best-sellers/5327664118 1.png'
const Medium = ({discount,percantage,image}) => {
  return (
    <div className='medium'>
      {discount || percantage && <div className='medium-box'>
        {discount && <p className='medium-box-description'>{discount}</p>}
        {percantage && <p className='medium-percantage'>{percantage}</p>}
      </div>}
      <div className='medium-box'>
        <p className='medium-box-description'>скидка</p>
        <p className='medium-percantage'>30%</p>
      </div>
      {image && <img className='medium-image' src={image} alt="" />}
    </div>
  )
}

export default Medium