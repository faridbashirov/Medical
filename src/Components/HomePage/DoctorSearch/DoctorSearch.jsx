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
import { useNavigate } from 'react-router-dom';

const DoctorSearch = ({positions}) => {
  const {t}=useTranslation()
  const navigate=useNavigate()
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  return (
    <section className="top-clinic">
      <div className={"container"}>
        <div className="top-clinic__header">
          <h3 className="top-clinic__header-title">{t("doctorsearch")}</h3>
          <div className="top-clinic__header-btns">
            <div className="doctor-search__header-subtitle">
            {t("doctorsearch2")}
            </div>
            <Link to={"doctors"} ><Button className="top-clinic__header-left d-none" type={"primary"}>{t("doctorsearch4")} </Button></Link>
          </div>
        </div>
        <div className="top-clinic__carousel">
          <Carousel responsive={responsive}>
            {positions.map((item,index)=>{
              return <div key={index} onClick={()=> navigate({
                pathname:"/doctors",
                search: `?type=doctor&position=${item?.name}`
                
              })} className="doctor-search_item">
              <img src={tooth} alt="tooth"/>
              <p className={"doctor-search_item-desc"}>{item.name}</p>
            </div>
            })}
            
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
          </Carousel>
        </div>
       
        <div className="top-clinic__mobile-items">
        {positions.map((item,index)=>{
              return <div key={index} onClick={()=> navigate({
                pathname:"/doctors",
                search: `?type=doctor&position=${item?.name}`
                
              })}  className="doctor-search_item">
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
