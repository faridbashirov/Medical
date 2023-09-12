import React from 'react';
import {Button} from "antd";
import { Link } from 'react-router-dom';
import Carousel from 'react-multi-carousel';
import tooth from "../../../assets/Svg/doctor-search/tooth.svg"
import surgery from "../../../assets/Svg/doctor-search/plastic-surgery.svg"
import eye from "../../../assets/Svg/doctor-search/eye.svg"
import boyrek from "../../../assets/Svg/doctor-search/boyrek.svg"
import { useTranslation } from 'react-i18next';
import { Trans } from 'react-i18next';
import "./DoctorSearch.css"

import Slider from "react-slick";

import { useNavigate } from 'react-router-dom';

const DoctorSearch = ({positions}) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4.5,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots:false,
          autoplay: true,
          speed: 2000,
          autoplaySpeed: 4000,
        }
      }
    ]
  };
  const {t}=useTranslation()
  const navigate=useNavigate()
  
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
        <div className="slider-second-desktop-version top-clinic__carousel">
        <Slider {...settings}>
        {positions.map((item,index)=>{
              return <div key={index} onClick={()=> navigate({
                pathname:"/doctors",
                search: `?type=doctor&position=${item?.name}`
                
              })} className="doctor-search_item">
              <img src={tooth} alt="tooth"/>
              <p className={"doctor-search_item-desc"}>{item.name}</p>
            </div>
            })}
        
      </Slider>
          
          
            
            {/* <div className="doctor-search_item">
              <img src={surgery} alt="tooth"/>
              <p className={"doctor-search_item-desc"}>Пластическая
                Хирургия </p>
            </div>
            <div className="doctor-search_item">
              <img src={eye} alt="tooth"/>
              <p className={"doctor-search_item-desc"}>офтальмология</p>
            </div>
            <div className="doctor-search_item">
              <img src={boyrek} alt="tooth"/>
              <p className={"doctor-search_item-desc"}>офтальмология</p>
            </div>
            <div className="doctor-search_item">
              <img src={tooth} alt="tooth"/>
              <p className={"doctor-search_item-desc"}>стоматология</p>
            </div>
            <div className="doctor-search_item">
              <img src={surgery} alt="tooth"/>
              <p className={"doctor-search_item-desc"}>Пластическая
                Хирургия </p>
            </div>
            <div className="doctor-search_item">
              <img src={eye} alt="tooth"/>
              <p className={"doctor-search_item-desc"}>офтальмология</p>
            </div>
            <div className="doctor-search_item">
              <img src={boyrek} alt="tooth"/>
              <p className={"doctor-search_item-desc"}>офтальмология</p>
            </div> */}
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
