import React from 'react'
import './OurAdvantages.css'
import { useTranslation } from 'react-i18next';
import useLanguageFetch from '../../../Hooks/useLanguageFetch';

const OurAdvantages = () => {
  const { data, loading, error } = useLanguageFetch('main/about_advantages',localStorage.getItem("lang"));
  const {t} = useTranslation();
  if(loading){
    return <></>
  }
  if(error){
    console.log('error')
  }
  return (
    <div className='our-advantages-container'>
      <div className='title'>
        <h4>{t("ouradvantages")}</h4>
      </div>
      <div className='our-advantages'>
        {data?.map((advantage) => (
          <div className='our-advantage' key={advantage.id}>
            <div><img src={advantage?.image} alt="" /></div>
            <h6>{advantage?.title}</h6>
            {advantage?.title ? <p>Lorem ipsum</p> : <></>}
          </div>
        ))}
        {/* <div className='our-advantage'>
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
        </div> */}
      </div>
    </div>
  )
}

export default OurAdvantages