import React from 'react';
import {Button, Skeleton} from "antd";
import { Link, useNavigate } from 'react-router-dom';
import tooth from "../../../assets/Svg/doctor-search/tooth.svg"
import { useTranslation } from 'react-i18next';
import "./DoctorSearch.css"
import useLanguageFetch from '../../../Hooks/useLanguageFetch';

const DoctorSearch = () => {
  const {t}=useTranslation()
  const navigate = useNavigate();
  // const swiperElRef = React.useRef(null);
  
  // React.useEffect(() => {
  //   swiperElRef.current.addEventListener('progress', (e) => {
  //     const [swiper, progress] = e.detail;
  //     console.log(progress);
  //   });

  //   swiperElRef.current.addEventListener('slidechange', (e) => {
  //     console.log('slide changed');
  //   });
  // }, []);
      const { data, loading, error } = useLanguageFetch('account/all_positions',localStorage.getItem("lang"));
    if (loading) {
        return  <>
                  <section className="doctor-search">
                    <div className={"container"}>
                      <div className="top-clinic__header">
                        <h3 className="top-clinic__header-title">{t("doctorsearch")}</h3>
                        <div className="top-clinic__header-btns">
                          <div className="doctor-search__header-subtitle" style={{fontWeight:"600"}}>
                          {t("doctorsearch2")}
                          </div>
                          <Link to={"doctors"} ><Button className="top-clinic__header-left d-none" type={"primary"}>{t("doctorsearch4")} </Button></Link>
                        </div>
                      </div>
                      <div className="slider-second-desktop-version top-clinic__carousel doctorcarousel">
                      <swiper-container 
                      navigation-next-el=".swiper-button-next"
                navigation-prev-el=".swiper-button-prev"
                  slides-per-view={4} rewind={true} space-between={20} autoplay-delay={2500} autoplay-disable-on-interaction={false} stopOnLastSlide={false}
                          >
                          {[1, 2,3,4].map((_, index) => (
                            <swiper-slide><div className="doctor-search_itemSkeleton trans"><Skeleton.Image active style={{height: '100%', width: '100%'}}/></div></swiper-slide>
                          ))
                          }
                      </swiper-container>
                      <div class="swiper-button-prev"></div>
                      <div class="swiper-button-next"></div>
                      </div>
                      <div className="top-clinic__mobile-items">
                        {[1, 2].map((_, index) => (
                          <div className="doctor-search_itemSkeleton"><Skeleton.Image active style={{height: '100%', width: '100%'}}/></div>
                        ))}
                      </div>
                      <div className={"doctor-search-footer"}>
                      <Link to={"doctors"} > <Button className="top-clinic__header-left d-mobile-block" type={"primary"}>{t("doctorsearch5")}</Button></Link>
                  
                        <div className="doctor-search__desc">
                        <p>{t("doctorsearch3")}</p>
                        <p>{t("doctorsearch4")}</p>
                        </div>
                      </div>

                    </div>
                  </section>
                </>
    }
    if (error) {
        return console.log("CategoryArea:",error)
    }
    return (
        <>
            {data ? (
              <>
                <section className="doctor-search">
                  <div className={"container"}>
                    <h3 className="doctor-search__header-title">{t("doctorsearch")}</h3>
                    <h4 className="doctor-search__header-subtitle">
                      {t("doctorsearch2")}
                    </h4>
                    <div className="slider-second-desktop-version top-clinic__carousel doctorcarousel">
                    <swiper-container 
                    navigation-next-el=".swiper-button-next"
              navigation-prev-el=".swiper-button-prev"
                slides-per-view={4} loop={true} space-between={20} autoplay-delay={2500} autoplay-disable-on-interaction={false} stopOnLastSlide={false}
                        >
                        {data.map((item,index)=>{
                          return <swiper-slide><div style={{cursor:"pointer"}}  key={index} onClick={()=> navigate({
                            pathname:"/doctors",
                            search: `?type=doctor&position=${item?.name}`
                            
                          })} className="doctor-search_item trans">
                          <img src={item.icon} alt="item.name"/>
                          <p className={"doctor-search_item-desc"}>{item.name}</p>
                        </div>
                        </swiper-slide>
                        })}
                    </swiper-container>
                    <div class="swiper-button-prev"></div>
                    <div class="swiper-button-next"></div>
                    </div>
                    <div className="doctor-search__mobile-items">
                      <div className='doctor-search__container'>
                        {data.map((item,index)=>{
                          return <div className="doctor-search_item" onClick={()=> navigate({
                            pathname:"/doctors",
                            search: `?type=doctor&position=${item?.name}`
                            
                          })}>
                          <img src={tooth} alt="tooth"/>
                          <p className={"doctor-search_item-desc"}>{item.name}</p>
                        </div>
                        })}
                      </div>
                    </div>
                    <div className='doctor-search__button_container'>
                      <Link to={"doctors"} ><Button className="doctor-search__button" type={"primary"}>{t("doctorsearch5")} </Button></Link>
                    </div>
                    <p className='doctor-search__desc_first'>{t("doctorsearch3")}</p>
                    <p className='doctor-search__desc_second'>{t("doctorsearch4")}</p>
                  </div>
                </section>
              </>
            ) : (
                <div></div>
            )}
        </>
    );
};

export default DoctorSearch;
