import React, { useEffect, useState } from "react";

import { Breadcrumb, Collapse } from "antd";
import "./PrivacyPolicy.css"
import privacyFetch from "../../Components/api/privacyFetch";
import i18next from "i18next";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet";

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
    <>
    <Helmet>
      <meta charSet="utf-8" />
      <title>112MED.ru | Официальный сайт | Клиники, врачи, онлайн-сервис по поиску и бронированию медицинских услуг, выгодные цены </title>
    </Helmet>
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
    </div>
    </>
  );
};

export default PrivacyPolicy;
