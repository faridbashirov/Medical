import React, { useEffect, useState } from "react";

import { Dropdown, Button, Space, Breadcrumb, Collapse } from "antd";
import Vector from "../../assets/Images/Vector.svg";
import USD from "../../assets/Svg/usdIcon.svg";
import EUO from "../../assets/Svg/GroupEuro.svg";
import POU from "../../assets/Svg/GroupPound.svg";
import RUB from "../../assets/Svg/rub.svg";
import azFlag from "../../assets/Svg/azFlag.svg";
import trFlag from "../../assets/Svg/trFlag.svg";
import absFlag from "../../assets/Svg/absFlag.svg";

import russianFlag from "../../assets/Images/russianFlagIcon.png";
import question from "../../assets/Images/question.png";
import heart from "../../assets/Images/heart.png";
import facebook from "../../assets/Images/facebook.png";
import instagram from "../../assets/Images/instagram.png";
import vk from "../../assets/Images/vk.png";
import "./PrivacyPolicy.css"
import privacyFetch from "../api/privacyFetch";
import { ArrowRightOutlined} from "@ant-design/icons";
import Header from "../Header/index.js";
import Footer from "../Footer/index.js";
import { useRef } from "react";
import i18next from "i18next";
import { useTranslation } from "react-i18next";
const { Panel } = Collapse;

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
        EN
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

const handleMenuClick = (e) => {
  console.log("click", e);
};

const handleMenuFlagClick = (e) => {
  console.log("click", e);
};

const menuProps = {
  items,
  onClick: handleMenuClick,
};

const menuPropsFlag = {
  items: itemsFlag,
  onClick: handleMenuFlagClick,
};

const PrivacyPolicy = () => {

  const {t,i18n}=useTranslation()
  const {data,loading,error}=privacyFetch(localStorage.getItem("lang"))

  const [active,setActive]=useState(data[0]?.id)
  
  const handlechange=(id)=>{
    setActive(id)
    console.log("here",id)
  }
  useEffect(()=>{
    console.log(data);
    setActive(data[0]?.id)
  },[data,i18next.language])




  return (
    <div style={{ backgroundColor: "#F4F4F4" }}>
     
      <div style={{ paddingTop: "30px" }} className="container">
        <div style={{ borderBottom: "1px solid #E7E7E7", padding: "20px 0" }}>
          <Breadcrumb
            separator={
              <span
                style={{
                  color: "#5282FF",
                  paddingLeft: "5px",
                  paddingRight: "10px",
                }}
              >
                {" "}
                {">"}{" "}
              </span>
            }
            items={[
              {
                title: t("home"),
                href: "/",
              },
              {
                title: "FAQ",
              },
            ]}
          />
        </div>
      </div>

      <div className="container">
        <div className="displayGridReviewDr">
          <div className="menuNav faq-nav-wrapper mb-20">
            <Collapse
            accordion
            
             onChange={handlechange}
              className={"faq-nav"}
              bordered={false}
              defaultActiveKey={["1"]}
              
            >
              <ul>
              {data.map((item,index)=>{
                return <li key={index} onClick={()=>handlechange(item.id)} style={{
                  marginTop:"10px",cursor:"pointer"
                }}
                className={active ===item.id ? "faq-active": ""}
          >

{item.category}
          </li>
              })}

              </ul>
             
              
              {/* <Panel
                style={{ border: "none" }}
                header="Политика отзывов"
                key="2"
              ></Panel>
              <Panel
                style={{ border: "none" }}
                header="Политика ранжирования"
                key="3"
              ></Panel>
              <Panel
                style={{ border: "none" }}
                header="Сколько я экономлю?"
                key="4"
              ></Panel>
              <Panel
                style={{ border: "none" }}
                header="Безопасен ли медицинский туризм?"
                key="5"
              ></Panel>
              <Panel
                style={{ border: "none" }}
                header="Какие процедуры доступны?"
                key="6"
              ></Panel>
              <Panel
                style={{ border: "none" }}
                header="Сколько я экономлю?"
                key="7"
              ></Panel> */}
            </Collapse>
          </div>

          <div className="menuRight">
            <p className={"privacy-desc"}>
           {(data?.find((item) => item.id === active ))?.text}
             
            </p>
          </div>
        </div>
      </div>

      <Footer/>
    </div>
  );
};

export default PrivacyPolicy;
