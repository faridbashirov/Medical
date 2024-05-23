import React from 'react';
import {Button} from "antd";
import { Link } from 'react-router-dom';
import tooth from "../../../assets/Svg/doctor-search/tooth.svg"
import { useTranslation } from 'react-i18next';
import { Trans } from 'react-i18next';
import "./DoctorSearch.css"
import { useNavigate } from 'react-router-dom';

const DoctorSearch = ({positions}) => {
  const {t}=useTranslation()
  const navigate=useNavigate()
  const swiperElRef = React.useRef(null);
  
  React.useEffect(() => {
    swiperElRef.current.addEventListener('progress', (e) => {
      const [swiper, progress] = e.detail;
      console.log(progress);
    });

    swiperElRef.current.addEventListener('slidechange', (e) => {
      console.log('slide changed');
    });
  }, []);
  
  return (
    <section className="top-clinic">
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
    slides-per-view={4} rewind={true} spaceBetween={20} autoplay-delay={2500} autoplay-disable-on-interaction={false} stopOnLastSlide={false}
        ref={swiperElRef}
            >
            {positions.map((item,index)=>{
              return <swiper-slide><div style={{cursor:"pointer"}}  key={index} onClick={()=> navigate({
                pathname:"/doctors",
                search: `?type=doctor&position=${item?.name}`
                
              })} className="doctor-search_item trans">
              <img src={tooth} alt="tooth"/>
              <p className={"doctor-search_item-desc"}>{item.name}</p>
            </div>
            </swiper-slide>
            })}
        </swiper-container>
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>
        <script>
          
        </script>
        </div>
        <div className="top-clinic__mobile-items">
        {positions.map((item,index)=>{
              return <div className="doctor-search_item">
              <img src={tooth} alt="tooth"/>
              <p className={"doctor-search_item-desc"}>{item.name}</p>
            </div>
            })}
          
         
        </div>
        <div className={"doctor-search-footer"}>
        <Link to={"doctors"} > <Button className="top-clinic__header-left d-mobile-block" type={"primary"}>{t("doctorsearch4")}</Button></Link>
     
          <div className="doctor-search__desc">
          <p><Trans i18nKey="doctorsearch3"></Trans></p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default DoctorSearch;
