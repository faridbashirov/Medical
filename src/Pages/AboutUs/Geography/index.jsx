import React from 'react'
import './Geography.css';
import { useTranslation } from 'react-i18next';
import useLanguageFetch from '../../../Hooks/useLanguageFetch';

const Geography = () => {
  const {t} = useTranslation()
  const { data, loading, error } = useLanguageFetch('main/countries',localStorage.getItem("lang"));
  if(loading){
     return  <></>//<section className='bestSeller'>
    //               <div className="container">
    //                 <p className={"bestSeller-title"}>
    //                   {t("bestseller")}
    //                 </p>
    //               <div className='best-sellers-container'>
    //                 <div className='small-longes-container'>
    //                   <Skeleton.Image active style={{height: '100%', width: '100%'}}/>
    //                   <Skeleton.Image active style={{height: '100%', width: '100%'}}/>
    //                   <Skeleton.Image active style={{height: '100%', width: '100%'}}/>
    //                   <Skeleton.Image active style={{height: '100%', width: '100%'}}/>
    //                 </div>
    //                 <div className="mediums-container">
    //                 <swiper-container 
    //                   navigation-next-el=".swiper-button-next"
    //                   navigation-prev-el=".swiper-button-prev"
    //                   slides-per-view={2} space-between={15} autoplay-delay={2500} autoplay-disable-on-interaction={false} stopOnLastSlide={false}
    //                   rewind={true}
    //                   breakpoints="{&quot;1024&quot;:{&quot;slidesPerView&quot;:3,&quot;centeredSlides&quot;:false}}"
    //                   centered-slides={false}
    //                 >
    //                   {[...Array(4)].map((_, index) => (
    //                         <swiper-slide><Skeleton.Image active style={{height: '100%', width: '100%'}}/></swiper-slide>
    //                   ))}
    //                 </swiper-container>
    //                 </div>
    //               </div>
    //               </div>
    //         </section>
  }
  if(error){return console.log(error)}
  return (
    <div className='geography'>
      <div className='title'>
        <h4>{t("ourgeography")}</h4>
        <h5>Lorem ipsum dolor sit amet consectetur dolor sit amet.</h5>
      </div>
      <div className="country-partnerships">
        {data?.map((item,index)=>{
            return  <div key={index} className="country-partnership">
              <img src={item.flag} alt=""/>
              <h6>{item.name}</h6>
          </div>
          })}
      </div>
    </div>
  )
}

export default Geography