import React from 'react'
import { Link } from 'react-router-dom'
import useLanguageFetch from '../../../Hooks/useLanguageFetch';
import { useTranslation } from 'react-i18next';
import './BestOffers.css'
import CardBannerTypeOne from '../../CardBanner/CardBannerTypeOne';
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
                      {data.map((item,index)=>{
                        return   <Link to={item.link} key={index}><CardBannerTypeOne image={item.image} title={item.title}/></Link>
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