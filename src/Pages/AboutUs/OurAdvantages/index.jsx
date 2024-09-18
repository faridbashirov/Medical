import React from 'react'
import './OurAdvantages.css'
import { useTranslation } from 'react-i18next';

const OurAdvantages = () => {
  const {t} = useTranslation();
  return (
    <div className='our-advantages-container'>
      <div className='title'>
        <h4>{t("ouradvantages")}</h4>
      </div>
      <div className='our-advantages'>
        <div className='our-advantage'>
          <div><p>?</p></div>
          <h6>до 50% скидки</h6>
          <p>Lorem ipsum</p>
        </div>
        <div className='our-advantage'>
          <div><p>?</p></div>
          <h6>до 50% скидки</h6>
          <p>Lorem ipsum</p>
        </div>
        <div className='our-advantage'>
          <div><p>?</p></div>
          <h6>до 50% скидки</h6>
          <p>Lorem ipsum</p>
        </div>
        <div className='our-advantage'>
          <div><p>?</p></div>
          <h6>до 50% скидки</h6>
          <p>Lorem ipsum</p>
        </div>
      </div>
    </div>
  )
}

export default OurAdvantages