import React from 'react';
import uuid from 'react-uuid';
import { Link, useNavigate } from 'react-router-dom';
import './BestSeller.css'
import { Skeleton } from 'antd';
import useLanguageFetch from '../../../Hooks/useLanguageFetch';
import { useTranslation } from 'react-i18next';
import ExtraLarge from '../../CardBanner/ExtraLarge';
import Large from '../../CardBanner/Large';
import Medium from '../../CardBanner/Medium';
import SmallLong from '../../CardBanner/SmallLong';
const BestSeller = () => {
  const {t}=useTranslation()
  const navigate = useNavigate();
  const { data, loading, error } = useLanguageFetch('main/best_seller',localStorage.getItem("lang"));
    if (loading) {
        return  <section className='bestSeller'>
                  <div className="container">
                    <p className={"bestSeller-title"}>
                      {t("bestseller")}
                    </p>
                  <div className='best-sellers-container'>
                    <div className='small-longes-container'>
                      <Skeleton.Image active style={{height: '100%', width: '100%'}}/>
                      <Skeleton.Image active style={{height: '100%', width: '100%'}}/>
                      <Skeleton.Image active style={{height: '100%', width: '100%'}}/>
                      <Skeleton.Image active style={{height: '100%', width: '100%'}}/>
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
                      {[...Array(4)].map((_, index) => (
                            <swiper-slide  key={index}><Skeleton.Image active style={{height: '100%', width: '100%'}}/></swiper-slide>
                      ))}
                    </swiper-container>
                    </div>
                  </div>
                  </div>
                </section>
    }
    if (error) {
        return console.log(error)
    }
    return (
        data ? (
                <section className='bestSeller'>
                  <div className="container">
                    <p className={"bestSeller-title"}>
                      {t("bestseller")}
                    </p>
                  <div className='best-sellers-container'>
                    <div className='small-longes-container'>
                      {data?.map((item, index) => {
                        if (item?.first_section) {
                          return <Link to={item.link} key={index}><SmallLong title={item?.title} image={item?.image} percentage={item?.percentage} discount={item?.is_discount}/></Link>;
                        }
                        return null;
                      })}
                    </div>
                    <div className='larges-container'>
                      {data?.map((item, index) => {
                        if (item?.second_section) {
                          return <Large key={index} title={item?.title} image={item?.image} discount={item?.is_discount} percentage={item?.percentage} linkName={item?.link}/>;
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
                          return <swiper-slide key={index}><Link to={item.link}><Medium key={index} image={item?.image} discount={item?.is_discount} percentage={item?.percentage}/></Link></swiper-slide>;
                        }
                        return null;
                      })}
                    </swiper-container>
                    </div>
                    <div className='extra-larges-container'>
                      {data?.map((item, index) => {
                        if (item?.four_section) {
                          return <ExtraLarge key={index} image={item?.image} percentage={item?.percentage} discount={item?.is_discount} linkName={item?.link}/>;
                        }
                        return null;
                      })}
                    </div>
                  </div>
                  </div>
                </section>
            ) : (
                <div></div>
            )
    );
};

export default BestSeller;
