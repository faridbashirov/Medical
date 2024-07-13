import React from 'react'
import { Link } from 'react-router-dom'
import useLanguageFetch from '../../../Hooks/useLanguageFetch';
import { useTranslation } from 'react-i18next';
import typeOneImage from '../../../CardBanner/eac6ab1446 2-1.png'
import typeTwoImage from '../../../CardBanner/a7fbac63bb 1.png'
import typeThreeImage from '../../../CardBanner/def241ffe1 2.png'
import typeFourImage from '../../../CardBanner/Rectangle 318.png'
import './BestOffers.css'
import Small from '../../CardBanner/Small';
const BestOffers = () => {
  const {t}=useTranslation()
  const { data, loading, error } = useLanguageFetch('main/best_offer',localStorage.getItem("lang"));
  if (loading) {
        return  <>
                 <section>Loading....</section>
                </>
    }
  if (error) {
    return console.log("BestOffers:",error)
  }
  return (
    <section>
          {data ? (
                <section className='bestOffer'>
                  <div className="container">
                    <p className={"bestOffer-title"}>
                        {t("offer")}
                    </p>
                    <div className="bestOffer-box">
                      {/* <div className='TypeOne'>
                        <div className='small-title-area'>
                          <div className='small-title'>Пластическая Хирургия</div>
                        </div>
                        <div className='small-background-box'></div>
                        <div className='small-description'></div>
                        <div className='small-box'>
                          <p className='small-box-description'>скидка</p>
                          <p className='small-percantage'>15%</p>
                        </div>
                        <img className='small-image' src={typeOneImage} alt="" />
                      </div>
                      <div className='TypeTwo'>
                        <div className='small-title-area'>
                          <div className='small-title'>Нейрохирургия</div>
                        </div>
                        <div className='small-background-box'></div>
                        <div className='small-description'></div>
                        <div className='small-box'>
                          <p className='small-box-description'>скидка</p>
                          <p className='small-percantage'>15%</p>
                        </div>
                        <img className='small-image' src={typeTwoImage} alt="" />
                      </div>
                      <div className='TypeThree'>
                        <div className='small-title-area'>
                          <div className='small-description'>lorem ipsum</div>
                          <div className='small-title'>Хирургия Снижен Веса</div>
                        </div>
                        <div className='small-background-box'></div>
                        <div className='small-box'>
                          <p className='small-box-description'>только</p>
                          <p className='small-percantage'>3 дня</p>
                        </div>
                        <img className='small-image' src={typeThreeImage} alt="" />
                      </div>
                      <div className='TypeFour'>
                        <div className='small-title-area'>
                          <div className='small-title'>офтальмология</div>
                        </div>
                        <div className='small-background-box'></div>
                        <div className='small-box'>
                          <p className='small-box-description'>скидка</p>
                          <p className='small-percantage'>30%</p>
                        </div>
                        <img className='small-image' src={typeFourImage} alt="" />
                      </div> */}
                      {data.map((item,index)=>{
                        return   <Link to={item.link} key={index}><Small image={item.image} title={item.title}/></Link>
                      })}
                    </div>
                  </div>
                </section>
            ) : (
                <div></div>
            )}
    </section>
    );
}

export default BestOffers