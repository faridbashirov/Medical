import React from 'react';
import {Button} from "antd";
import { Link } from 'react-router-dom';
import Carousel from 'react-multi-carousel';
import tooth from "../../../assets/Svg/doctor-search/tooth.svg"
import surgery from "../../../assets/Svg/doctor-search/plastic-surgery.svg"
import eye from "../../../assets/Svg/doctor-search/eye.svg"
import boyrek from "../../../assets/Svg/doctor-search/boyrek.svg"
import "./DoctorSearch.css"

const DoctorSearch = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
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
          <h3 className="top-clinic__header-title">Поиск по врачам</h3>
          <div className="top-clinic__header-btns">
            <div className="doctor-search__header-subtitle">
              Выберите себе лучшего врача и бронируйте услуги легко
            </div>
            <Link to={"doctors"} ><Button className="top-clinic__header-left d-none" type={"primary"}>Посмотреть врачей </Button></Link>
          </div>
        </div>
        <div className="top-clinic__carousel">
          <Carousel responsive={responsive}>
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
            </div>
          </Carousel>
        </div>
        <div className="top-clinic__mobile-items">
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
          </div>
        </div>
        <div className={"doctor-search-footer"}>
          <Button className="top-clinic__header-left d-mobile-block" type={"primary"}>Посмотреть клиники </Button>
          <div className="doctor-search__desc">
            <p>Бронируйте сейчас, платите на месте</p>
            <p><span>Бесплатная</span> отмена бронирования</p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default DoctorSearch;
