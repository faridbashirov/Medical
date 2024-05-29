import React from 'react'
import { Link } from 'react-router-dom'
import useLanguageFetch from '../../../Hooks/useLanguageFetch';
import { useTranslation } from 'react-i18next';

const BestOffers = () => {
  const {t}=useTranslation()
  const { data, loading, error } = useLanguageFetch('main/best_offer',localStorage.getItem("lang"));
  if (loading) {
        return  <>
                 <div>Loading....</div>
                </>
    }
  if (error) {
    return console.log("BestOffers:",error)
  }
  return (
    <div>
          {data ? (
                <>
                  <div className="container">
                    <p className={"deals-title"}>
                        {t("offer")}
                    </p>
                    <div className="grid_2">
                      {data.map((item,index)=>{
                        return   <div className="trans" key={index}>
                      <Link to={item.link}> <img src={item.image}/></Link>
                      </div>
                      })}
                    </div>
                  </div>
                </>
            ) : (
                <div></div>
            )}
    </div>
    );
}

export default BestOffers