import React from 'react'
import "./Small.css"

const Small = ({image,title,discount,percantage,description}) => {
  return (
    <>
    <div className='TypeFour'>
      <div className='small-title-area'>
        {description && <div className='small-description'>{description}</div>}
        {title && <div className='small-title'>{title}</div>}
      </div>
      <div className='small-background-box'></div>
      {discount || percantage && <div className='small-box'>
        {discount && <p className='small-box-description'>{discount}</p>}
        {percantage && <p className='small-percantage'>{percantage}</p>}
      </div>}
      {image && <img className='small-image' src={image} alt="" />}
    </div>
    </>
  )
}

export default Small