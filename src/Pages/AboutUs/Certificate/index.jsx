import React from 'react'
import './Certificate.css'
import { useTranslation } from 'react-i18next';
import useLanguageFetch from '../../../Hooks/useLanguageFetch';
const Certificate = () => {
  const {t} = useTranslation();
  const { data, loading, error } = useLanguageFetch('main/certificated_hospitals',localStorage.getItem("lang"));
  if (loading) {
        return  <section className='certificate'>
                </section>
  }
  if (error) {
    return console.log("Hospital_certificated:",error)
  }
  return (
    data ? 
    <section className='certificate'>
      <div className='certificate-container'>
        <div className='title'>
          <h4>{t("sertificateclinics")}</h4>
          <h5>Lorem ipsum dolor sit amet consectetur dolor sit amet.</h5>
        </div>
        <div className="certificates">
          <swiper-container 
          navigation-next-el=".swiper-button-next" navigation-prev-el=".swiper-button-prev"
          slides-per-view={4} space-between={18} autoplay-delay={2500} autoplay-disable-on-interaction={false} stopOnLastSlide={false}
          breakpoints="{&quot;1024&quot;:{&quot;slidesPerView&quot;:5,&quot;centeredSlides&quot;:false}}"
          >
            {data?.map((certificate, index)=> (
              <swiper-slide key={index}><div className='certificate-logo'><img src={certificate?.logo} alt={certificate?.title} /></div></swiper-slide>
            )
            )}
          </swiper-container>
          <div className="swiper-button-prev"></div>
          <div className="swiper-button-next"></div>
        </div>
      </div>
    </section>
    : <></>
  )
}

export default Certificate