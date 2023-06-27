import React, {useState,useEffect} from "react";
import {
  ArrowRightOutlined,
  SearchOutlined,
  EnvironmentOutlined, CloseOutlined,
} from "@ant-design/icons";
import { Button, Dropdown, Space, Input, Row, Col } from "antd";

import Slider from "../Slider";
import SliderSecond from "../SliderSecond/SliderSecond";
import SliderThird from "../SliderThird/SliderThird";

import russianFlag from "../../assets/Images/russianFlagIcon.png";
import question from "../../assets/Images/question.png";
import heart from "../../assets/Images/heart.png";
import group from "../../assets/Images/Group1.png";
import group2 from "../../assets/Images/Group2.png";
import group3 from "../../assets/Images/Group3.png";
import group4 from "../../assets/Images/Group4 (2).png";
import group5 from "../../assets/Images/Group5.png";
import group6 from "../../assets/Images/Group6.png";
import group7 from "../../assets/Images/Group7.png";
import group8 from "../../assets/Images/Group8.png";
import group9 from "../../assets/Images/Group9.png";
import group10 from "../../assets/Images/Group10.png";
import group11 from "../../assets/Images/Group11.png";
import group12 from "../../assets/Images/Group12.png";
import group13 from "../../assets/Images/Group13.png";
import group14 from "../../assets/Images/Group14.png";
import group15 from "../../assets/Images/Group15.png";
import group16 from "../../assets/Images/Group16.png";
import group17 from "../../assets/Images/Group17.png";
import group18 from "../../assets/Images/Group18.png";
import facebook from "../../assets/Images/facebook.png";
import instagram from "../../assets/Images/instagram.png";
import vk from "../../assets/Images/vk.png";

import Vector from "../../assets/Images/Vector.svg";
import USD from "../../assets/Svg/usdIcon.svg";
import EUO from "../../assets/Svg/GroupEuro.svg";
import POU from "../../assets/Svg/GroupPound.svg";
import RUB from "../../assets/Svg/rub.svg";
import azFlag from "../../assets/Svg/azFlag.svg";
import trFlag from "../../assets/Svg/trFlag.svg";
import absFlag from "../../assets/Svg/absFlag.svg";
import userLogin from "../../assets/Svg/userlogin.svg";
import menuIcon from "../../assets/Svg/menuIcon.svg";

import "../HomePage/HomePage.css";
import MobileMenu from "../MobileMenu/index.js";
import LoginModal from "../LoginModal/index.js";
import RegisterModal from "../RegisterModal/index.js";
import Header from "../Header/index.js";
import Footer from "../Footer/index.js";
import DiscoundSlider from "./DiscoundSlider.jsx";
import TopClinic from "./TopClinic/index.js";
import DoctorSearch from "./DoctorSearch/index.js";
import HomeReviews from "./HomeReviews/index.js";
import MobileLogin from "../MobileLogin/MobileLogin";
import axios from "axios";
import { BestoffersFetch } from "../api/bestoffersFetch";
import { LikedoffersFetch } from "../api/likedOffers";
import { BestsellersFetch } from "../api/bestsellersFetch";
import { allCountriesFetch } from "../api/allCountries";
import { useNavigate } from "react-router-dom";
import { PopularSearchFetch } from "../api/popularSearchs";
const handleMenuClick = (e) => {
  console.log("click", e);
};

const handleMenuFlagClick = (e) => {
  console.log("click", e);
};

const changeStyleButton = () => {}


const items = [
  {
    label: (
      <span
        style={{
          fontFamily: "Gilroy",
          fontSize: "16px",
          fontWeight: "600",
          color: "black",
          paddingLeft: "10px",
        }}
      >
        USD
      </span>
    ),
    key: "1",
    icon: (
      <img
        style={{ width: "30px", objectFit: "cover", marginLeft: "20px" }}
        src={USD}
      />
    ),
  },
  {
    label: (
      <span
        style={{
          fontFamily: "Gilroy",
          fontSize: "16px",
          fontWeight: "600",
          color: "black",
          paddingLeft: "10px",
        }}
      >
        EUR
      </span>
    ),
    key: "2",
    icon: (
      <img
        style={{ width: "30px", objectFit: "cover", marginLeft: "20px" }}
        src={EUO}
      />
    ),
  },
  {
    label: (
      <span
        style={{
          fontFamily: "Gilroy",
          fontSize: "16px",
          fontWeight: "600",
          color: "black",
          paddingLeft: "10px",
        }}
      >
        {" "}
        GBP
      </span>
    ),
    key: "3",
    icon: (
      <img
        style={{ width: "30px", objectFit: "cover", marginLeft: "20px" }}
        src={POU}
      />
    ),
  },
];

const itemsFlag = [
  {
    label: (
      <span
        style={{
          fontFamily: "Gilroy",
          fontSize: "16px",
          fontWeight: "600",
          color: "black",
          paddingLeft: "10px",
        }}
      >
        AZ
      </span>
    ),
    key: "1",
    icon: (
      <img
        style={{ width: "30px", objectFit: "cover", marginLeft: "20px" }}
        src={azFlag}
      />
    ),
  },
  {
    label: (
      <span
        style={{
          fontFamily: "Gilroy",
          fontSize: "16px",
          fontWeight: "600",
          color: "black",
          paddingLeft: "10px",
        }}
      >
        TR
      </span>
    ),
    key: "2",
    icon: (
      <img
        style={{ width: "30px", objectFit: "cover", marginLeft: "20px" }}
        src={trFlag}
      />
    ),
  },
  {
    label: (
      <span
        style={{
          fontFamily: "Gilroy",
          fontSize: "16px",
          fontWeight: "600",
          color: "black",
          paddingLeft: "10px",
        }}
      >
        {" "}
        en
      </span>
    ),
    key: "3",
    icon: (
      <img
        style={{ width: "30px", objectFit: "cover", marginLeft: "20px" }}
        src={absFlag}
      />
    ),
  },
];

const menuProps = {
  items,
  onClick: handleMenuClick,
};
const menuPropsFlag = {
  items: itemsFlag,
  onClick: handleMenuFlagClick,
};

const HomePage = ({}) => {
  const [bestoffer,setBestoffer] =useState([])
  const [likedoffer,setLikedoffer] =useState([])
  const[bestseller,setBestseller] =useState([])
  const [countries,setCountries] = useState([])
  const [show,setShow] = useState(true)
  const [show2,setShow2] = useState(false)
  const [show3,setShow3] = useState(false)
  const [value,setValue] = useState("")
  const [search,setSearch] = useState({
    type:"service",
    path:"/hospitals"
  })
  const [popularSearchs,setPopularSearchs] = useState([])
  const [type,setType]=useState("")
  const [location,setLocation] = useState("")
  
  console.log(popularSearchs);
  const navigate = useNavigate();
  
  const searchForm = (e) =>{
     navigate({
      pathname: search.path,
      search: `?type=${search.type}&location=${location}&name=${type}`,
    });
  }
  
  const onToggleClick = () => {
    
    if(show === false){
      setShow(!show)

      setSearch({
        path:"/hospitals",
        type:"service"
      })
     
    }
    
    setShow2(false);
    setShow3(false);
    
  };
  
  const onToggleClick2 = () => {
    setShow(false)
    if(show2 === false){
      setShow2(!show2);
      setSearch({
        path:"/hospitals",
        type:"clinic"
      })

    }
    
    setShow3(false);
  };
  
  const onToggleClick3 = () => {
    setShow(false)
    setShow2(false);
    if(show3 === false){
      setShow3(!show3);
      setSearch({
        path:"/doctors",
        type:"doctor"
      })

    }
    
  };
  

 useEffect(()=>{
  console.log("++++++");
  const getPopularSearchs =(async()=>{
    const data=await PopularSearchFetch()
    setPopularSearchs(data)
    
   })
   getPopularSearchs()

 },[])

  useEffect(()=>{
     const getBestoffer =(async()=>{
      const data=await BestoffersFetch()
      setBestoffer(data)
     })
     getBestoffer()


  },[])

  useEffect(()=>{
     const getlikedOffer =(async()=>{
      const data=await LikedoffersFetch()
      setLikedoffer(data)
     })
     getlikedOffer()


  },[])
  useEffect(()=>{
     const getbestSellers =(async()=>{
      const data=await BestsellersFetch()
      setBestseller(data)
     })
     getbestSellers()


  },[])
  useEffect(()=>{
     const getCountries =(async()=>{
      const data=await allCountriesFetch()
      setCountries(data)
     })
     getCountries()


  },[])
  
 const onChange = (e) => {
  
  setType(e.target.value)
}
const onChange2 = (e) => {
  setLocation(e.target.value)

}
 
  

  return (
    <>
      


      <div id="bgHome">
        <div className="container heroTitle">
          <p className="fontMed">
            Бронируйте <br /> Mедицинскую услугу
          </p>
          <p className="text">Ищите клинику, врачей по всему миру</p>
        </div>
        <div id="marginBTN" className="container">
          <Space>
            <Button
            onClick={onToggleClick}
              className={show ? "btn_ activeBtn " :  "btn_ " }
            >
              Услуги
            </Button>
            <Button
            onClick={onToggleClick2}
              className={show2 ? "btn_ activeBtn " :  "btn_ " }
            >
              Клиники
            </Button>
            <Button
             onClick={onToggleClick3}
            
               className={show3 ? "btn_ activeBtn " :  "btn_ " }
             
             
            >
              Врачи{" "}
            </Button>
          </Space>
        </div>
        <div id="inputDiv" className="container">
          <div>
            <Row gutter={12}>
              <Col lg={12} xs={24} style={{marginBottom:"10px"}}>
                <Input
                onInput={onChange}
                 value={type}
                  size="large"
                  placeholder="Процедура, заболевание, клинка, врач"
                  prefix={
                    <SearchOutlined
                      style={{ fontSize: "23px", color: "#5282FF" }}
                    />
                  }
                  id="inputSearch"
                />
              </Col>
              <Col lg={8} xs={12}>
                <Input
                 onInput={onChange2}
                 value={location}
                
                  size="large"
                  placeholder="Москва, Россия"
                  
                  
                  prefix={
                    <EnvironmentOutlined
                      style={{ fontSize: "23px", color: "#5282FF" }}
                    />
                  }
                  id="inputEnviroment"
                />
              </Col>
              <Col lg={4} xs={12}>
                <Button onClick={()=>searchForm()} className="inputBtn" type="primary">
                  Yзнать цены
                </Button>
              </Col>
            </Row>
          </div>
          <div className="textFlex">
          {popularSearchs.map(item => (
              item.name ==search.type ?
               item.category.map(innerItem => (
               <Button style={{ backgroundColor: "#F4F4F4" }} type="text">
                   {innerItem.search}
                  </Button>
                   )    )  : null
                
                  )   )} 
            {/* {popularSearchs.map((item,index)=>{
              if(item.name == search.type){
                //  item.category.map((d,index)=>{
                  return <Button style={{ backgroundColor: "#F4F4F4" }} type="text">
                   {item.name}
                  </Button>
                // })   
              }
            })} */}
            {/* <Button style={{ backgroundColor: "#F4F4F4" }} type="text">
              Клиники сети Медикал Парк
            </Button>
            <Button style={{ backgroundColor: "#F4F4F4" }} type="text">
              Больница Американ
            </Button>
            <Button style={{ backgroundColor: "#F4F4F4" }} type="text">
              Клиники сети Аджибадем
            </Button>
            <Button style={{ backgroundColor: "#F4F4F4" }} type="text">
              Университетская клиник Бируни
            </Button>
            <Button style={{ backgroundColor: "#F4F4F4" }} type="text">
              Университетская больница Коч
            </Button> */}
          </div>
        </div>
      </div>

      <div style={{ paddingTop: "200px" }} className="container">
        <Space wrap>
          <p style={{ fontWeight: "600", fontSize: "20px", color: "#000" }}>
            Поиск по:
          </p>
         <div>
           <Button
             className={"sortBtn sortActive"}
             type="primary"
           >
             Hаправлениям
           </Button>
           <Button
             onClick={changeStyleButton}
             className={"sortBtn"}
             type="link"
           >
             Tипам
           </Button>
           <Button
             className={"sortBtn"}
             type="link"
           >
             Pейтингу
           </Button>
           <Button
             className={"sortBtn"}
             type="link"
           >
             Бюджету
           </Button>
         </div>
        </Space>
      </div>

      <div style={{ paddingTop: "40px" }} className="container">
        <div className="grid">
          <div className="box1">
            <div className="box1_2">
              <p className={"box1-text"}>
                Пластическая Хирургия
              </p>
            </div>
            <div
              className="box1_3"
            >
              <Button
                className={"box1-btn"}
                type="primary"
              >
                Смотреть еще
              </Button>
            </div>
          </div>
          <div id="_box2" className="box2">
            <p>Нейрохирургия</p>
          </div>
          <div id="_box2_2" className="box2">
            <p>Хирургия Снижен Веса </p>
          </div>
          <div id="_box2_3" className="box2">
            <p>Офтальмология</p>
          </div>
          <div id="_box2_4" className="box2">
            <p>Офтальмология</p>
          </div>
        </div>
      </div>

      <div className="container">
        <div style={{ paddingTop: "30px" }} className="grid">
          <div className="box1">
            <div className="box1_2">
              <p className={"box1-text"}>
                Пластическая Хирургия
              </p>
            </div>
            <div className="box1_3">
              <Button className={"box1-btn"}
                type="primary"
              >
                Смотреть еще
              </Button>
            </div>
          </div>
          <div className="box1">
            <div className="box1_2">
              <p className={"box1-text"}>
                Пластическая Хирургия
              </p>
            </div>
            <div className="box1_3">
              <Button className={"box1-btn"}
                type="primary"
              >
                Смотреть еще
              </Button>
            </div>
          </div>
          <div className="box1">
            <div className="box1_2">
              <p className={"box1-text"}>
                Пластическая Хирургия
              </p>
            </div>
            <div className="box1_3">
              <Button
                className={"box1-btn"}
                type="primary"
              >
                Смотреть еще
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div style={{ paddingTop: "30px" }} className="container">
        <div className="bgDoctor">
          <span>Нейрохирургия</span>
        </div>
      </div>

      <div className="container">
        <p
          className={"deals-title"}
        >
          Лучшие предложения
        </p>
        <div className="grid_2">
          {bestoffer.map((item,index)=>{
            return   <div key={index}>
            <img src={item.image} />
          </div>
          })}
         
          {/* <div>
            <img src={group2} />
          </div>
          <div>
            <img src={group3} />
          </div>
          <div>
            <img src={group4} />
          </div>
          <div>
            <img src={group5} />
          </div>
          <div>
            <img src={group6} />
          </div>
          <div>
            <img src={group7} />
          </div>
          <div>
            <img src={group8} />
          </div> */}
        </div>
      </div>

      <div className="container">
        <p className={"deals-title"}>
          Baм понравится
        </p>
        <div className="grid_3">
          {likedoffer.map((item,index)=>{
            return  <div key={index}>
            <img src={item.image} />
          </div>
          })}
         
          
        </div>
        <div style={{ paddingTop: "15px" }} className="grid_4">
          <div>
            <img style={{ width: "615px" }} src={group13} />
          </div>
          <div>
            <img style={{ width: "615px" }} src={group14} />
          </div>
        </div>
      </div>

      <div className="container">
        <p className={"deals-title"}>
          Хиты продаж
        </p>
        <div className="grid_3">
          {bestseller.map((item,index)=>{
            return  <div key={index}>
            <img src={item.image} />
          </div>
})}
          
          {/* <div>
            <img src={group10} />
          </div>
          <div>
            <img src={group11} />
          </div>
          <div>
            <img src={group12} />
          </div> */}
        </div>
      </div>
      <DiscoundSlider/>

      <div style={{ paddingTop: "10px" }} className="container">
        <div>
          <img className={"group-18"} src={group18} />
        </div>
      </div>

      <div className="container">
        <h3 className={"foreign-title"} >
          Выберите клинику в другой стране дешевле
        </h3>
        <p className={"foreign-subtitle"}>
          Поиск по странам, популярные направления
        </p>
      </div>

      <div className="containerSliderSecond">
        {" "}
        <Slider countries={countries} />

      </div>

      <div
        className="container"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
        }}
      >
        <div>
          {" "}
          <h3 className={"foreign-title"}>
            Бронируйте медицинскую услугу <br /> со скидкой до - 50%
          </h3>
          <p className={"foreign-subtitle"}>Поиск по бюджетy</p>
        </div>
        <Button className={"foreign-btn-lg"}>
          Посмотреть категории
        </Button>
      </div>

      <div className="containerSliderSecond" style={{ paddingTop: "50px" }}>
        <SliderSecond />
        <Button
          className={"foreign-btn-sm"}
          type={"primary"}
        >
          Посмотреть категории
        </Button>
      </div>

      <div className="container">
        <h3 className={"foreign-title"}>
          Спецпредложения
        </h3>
        <p className={"foreign-subtitle"}>
          Акции, скидки и специалные предложения для вас.
        </p>
      </div>
      <div className="containerSliderSecond">
        <SliderThird />
      </div>

      <TopClinic/>
      <DoctorSearch/>
      <HomeReviews/>
      

      <Footer/>

    
    </>
  );
};

export default HomePage;
