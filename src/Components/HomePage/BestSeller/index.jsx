import React from 'react';
import uuid from 'react-uuid';
import { Link, useNavigate } from 'react-router-dom';
import './BestSeller.css'
import { Button } from 'antd';
import useLanguageFetch from '../../../Hooks/useLanguageFetch';
import { useTranslation } from 'react-i18next';
import typeOneImage from '../../../CardBanner/eac6ab1446 2-1.png'
import typeTwoImage from '../../../CardBanner/a7fbac63bb 1.png'
import typeThreeImage from '../../../CardBanner/def241ffe1 2.png'
import typeFourImage from '../../../CardBanner/Rectangle 318.png'
import ExtraLarge from '../../CardBanner/ExtraLarge';
import Large from '../../CardBanner/Large';
import Medium from '../../CardBanner/Medium';
import SmallLong from '../../CardBanner/SmallLong';
const BestSeller = () => {
  const {t}=useTranslation()
  const navigate = useNavigate();
  const { data, loading, error } = useLanguageFetch('main/best_seller',localStorage.getItem("lang"));
    if (loading) {
        return  <></>
    }
    if (error) {
        return console.log(error)
    }
    return (
        <div>
            {data ? (
                <section className='bestSeller'>
                  <div className="container">
                    <p className={"bestSeller-title"}>
                      {t("bestseller")}
                    </p>
                  <div className='best-sellers-container'>
                    <div className='small-longes-container'>
                      {data?.map((item, index) => {
                        if (item?.first_section) {
                          return <SmallLong key={index} title={item?.title} image={item?.image}/>;
                        }
                        return null;
                      })}
                    </div>
                    <div className='larges-container'>
                      {data?.map((item, index) => {
                        if (item?.second_section) {
                          return <Large key={index} title={item?.title} image={item?.image}/>;
                        }
                        return null;
                      })}
                    </div>
                    <div className="mediums-container">
                    <swiper-container 
                      navigation-next-el=".swiper-button-next"
                      navigation-prev-el=".swiper-button-prev"
                      slides-per-view={2} space-between={15} autoplay-delay={2500} autoplay-disable-on-interaction={false} stopOnLastSlide={false}
                      rewind={true}
                      breakpoints="{&quot;1024&quot;:{&quot;slidesPerView&quot;:3,&quot;centeredSlides&quot;:false}}"
                      centered-slides={false}
                    >
                      {data?.map((item, index) => {
                        if (item?.three_section) {
                          return <swiper-slide><Medium key={index} image={item?.image}/></swiper-slide>;
                        }
                        return null;
                      })}
                    </swiper-container>
                    </div>
                    <div className='extra-larges-container'>
                      {data?.map((item, index) => {
                        if (item?.four_section) {
                          return <ExtraLarge key={index} image={item?.image}/>;
                        }
                        return null;
                      })}
                    </div>
                  </div>
                  </div>
                </section>
            ) : (
                <div></div>
            )}
        </div>
    );
};

export default BestSeller;
