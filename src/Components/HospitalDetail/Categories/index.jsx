import React from 'react';
import { useTranslation } from 'react-i18next';
const Categories = ({services,hospital}) => {
  const {t}=useTranslation()

  return (
    <>
    {services.length>0 ? <div className="hospital-detail__categories">
      <h4 className="categories__title">{t("direction")} - {hospital?.name}</h4>
      <div className='categories_swiper'>
        <swiper-container 
          navigation-next-el=".swiper-button-next"
          navigation-prev-el=".swiper-button-prev"
          slides-per-view={3} rows={2} space-between={5} autoplay-delay={2500} autoplay-disable-on-interaction={false} stopOnLastSlide={false} breakpoints="{&quot;1024&quot;:{&quot;slidesPerView&quot;:6}}"
        >
        {services.map((service,index) =>{
          return  <swiper-slide><div className={"categories__carousel-item"}>
          <button className={"categories__carousel-item-btn btn-left"}>{service.illness.name}</button>
        </div></swiper-slide>
        })}            
        </swiper-container>
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>
      </div>
    </div> :
    <></>
    }
    </>
  );
};

export default Categories;
