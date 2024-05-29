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
import "./FAQ.css"
import { ArrowRightOutlined} from "@ant-design/icons";
import Footer from "../Footer/index.js";
import faqFetch from "../api/Faqfetch";
import ContactInfoFetch from "../api/getContactInfo";
import i18next from "i18next";
import { useTranslation } from "react-i18next";
import faqContentFetch from "../api/FaqContentfetch";
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

const FAQ = () => {
  const [reload,setReload]=useState(false)
  const {t,i18n}=useTranslation()
  console.log(reload);
  console.log(i18next.language);


  const {data,error,loading}=faqFetch(localStorage.getItem("lang"))
  const {data1,error1,loading1}=ContactInfoFetch(localStorage.getItem("lang"))
  const {data2,error2,loading2}=faqContentFetch(localStorage.getItem("lang"))
  
  console.log(data,data1);

  // useEffect(()=>{
  //   console.log("here");
  //   setReload(!reload)
  // },[])
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
          <div  className="menuNav faq-nav-wrapper">
            <Collapse
              className={"faq-nav"}
              bordered={false}
              defaultActiveKey={[0]}
            >
              {/* {data} */}
              {data?.map((item,index)=>{
                return  <Panel
                style={{ border: "none" }}
                header={item.question}
               key={index}
              >
                {item.answer}
              </Panel>
              })}
             
          
            </Collapse>
            <div className={"faq-contact"}
            >
              <p style={{ color: "#FFF", fontSize: "24px" }}>{t("help")}</p>
              <hr style={{ marginBottom: "50px" }} />
              <p style={{ color: "#FFF" }}>{data1.number}</p>
              <p style={{ color: "#FFF" }}>{data1.number_second}</p>
              <p style={{ color: "#FFF" }}>{data1.email}</p>

              <div
                style={{
                  marginTop: "60px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <img
                  style={{ width: "24.66px", height: "24.66px" }}
                  src={facebook}
                />
                <img
                  style={{
                    width: "34.66px",
                    height: "34.66px",
                    margin: "0px 12px",
                  }}
                  src={vk}
                />
                <img
                  style={{ width: "24.66px", height: "24.66px" }}
                  src={instagram}
                />
              </div>
            </div>
          </div>

          <div className="menuRight">
            <p className={"faq-desc"} >
             {data2?.text}
            </p>
          </div>
        </div>
      </div>

      <Footer/>
    </div>
  );
};

export default FAQ;
