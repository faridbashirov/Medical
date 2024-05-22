import React from 'react';
import {Button} from "antd";
import { Link } from 'react-router-dom';
import tooth from "../../../assets/Svg/doctor-search/tooth.svg"
import { useTranslation } from 'react-i18next';
import { Trans } from 'react-i18next';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, A11y,Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import "./DoctorSearch.css"


import { useNavigate } from 'react-router-dom';

const DoctorSearch = ({positions}) => {

  const {t}=useTranslation()
  const navigate=useNavigate()
  const swiperRef = React.useRef(null);

  React.useEffect(() => {
    if (swiperRef.current) {
      console.log(swiperRef.current);
    }
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
          <Swiper
          modules={[Navigation, A11y,Autoplay]}
          autoplay={{
          delay: 5000,
          disableOnInteraction: false,
          stopOnLastSlide: false,
        }}
          navigation
          onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            spaceBetween={20}
            slidesPerView={4}
          >
            {positions.map((item,index)=>{
              return <SwiperSlide><div style={{cursor:"pointer"}}  key={index} onClick={()=> navigate({
                pathname:"/doctors",
                search: `?type=doctor&position=${item?.name}`
                
              })} className="doctor-search_item trans">
              <img src={tooth} alt="tooth"/>
              <p className={"doctor-search_item-desc"}>{item.name}</p>
            </div>
            </SwiperSlide>
            })}
            {positions.map((item,index)=>{
              return <SwiperSlide><div style={{cursor:"pointer"}}  key={index} onClick={()=> navigate({
                pathname:"/doctors",
                search: `?type=doctor&position=${item?.name}`
                
              })} className="doctor-search_item trans">
              <img src={tooth} alt="tooth"/>
              <p className={"doctor-search_item-desc"}>{item.name}</p>
            </div>
            </SwiperSlide>
            })}
            {positions.map((item,index)=>{
              return <SwiperSlide><div style={{cursor:"pointer"}}  key={index} onClick={()=> navigate({
                pathname:"/doctors",
                search: `?type=doctor&position=${item?.name}`
                
              })} className="doctor-search_item trans">
              <img src={tooth} alt="tooth"/>
              <p className={"doctor-search_item-desc"}>{item.name}</p>
            </div>
            </SwiperSlide>
            })}
            {positions.map((item,index)=>{
              return <SwiperSlide><div style={{cursor:"pointer"}}  key={index} onClick={()=> navigate({
                pathname:"/doctors",
                search: `?type=doctor&position=${item?.name}`
                
              })} className="doctor-search_item trans">
              <img src={tooth} alt="tooth"/>
              <p className={"doctor-search_item-desc"}>{item.name}</p>
            </div>
            </SwiperSlide>
            })}
        </Swiper>
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
