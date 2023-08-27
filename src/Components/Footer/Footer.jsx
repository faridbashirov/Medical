import React from 'react';
import facebook from "../../assets/Images/facebook.png";
import vk from "../../assets/Images/vk.png";
import instagram from "../../assets/Images/instagram.png";
import {Button} from "antd";
import footerArrow from "../../assets/Svg/footer-arrow.svg"
import { useTranslation } from 'react-i18next';
import { Trans } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import SocialsFetch from '../api/socialsFetch';
const Footer = () => {

  const navigate=useNavigate();
  const {t}=useTranslation()
  const {data,error,loading}=SocialsFetch()
  return (
    <footer className="bgFooter">
      <div className="container footer-wrapper">
        <div className="rowGrid">
          <div id="textFooterid" className={"textFooterid"}>
            <ul style={{ listStyle: "none" }} className={"footer-med"}>
              <li className={"footer-title"}
              >
                112 Med
              </li>
              <li className={"footer-subtitle"} >
               <Trans i18nKey="footer"></Trans>
              </li>
            </ul>
          </div>
          <div>
            <ul style={{ listStyle: "none" }} >
              <li   className={"footer-nav-title"}>
                {t("footerh1")}
              </li>
              <li style={{
                cursor:"pointer"
              }} onClick={()=> {navigate("/doctors")}} className={"footer-nav-link"}>
              {t("Doctors")}
              </li>
              <li  style={{
                cursor:"pointer"
              }} onClick={()=> {navigate("/hospitals")}} className={"footer-nav-link"}>
              {t("Clinics")}
              </li>
              <li  style={{
                cursor:"pointer"
              }} onClick={()=> {navigate("/hospitals")}} className={"footer-nav-link"}>
              {t("Services")}
              </li>
            </ul>
          </div>
          <div>
            <ul style={{ listStyle: "none" }}>
              <li className={"footer-nav-title"}>
              {t("footerh2")}
              </li>
              <li  style={{
                cursor:"pointer"
              }} onClick={()=> {navigate("/privacy-policy")}} className={"footer-nav-link"}>
              {t("footerh2.1")}
              </li>
              <li className={"footer-nav-link"}>
                {" "}
                {t("footer2.2")}
              </li>
              <li  style={{
                cursor:"pointer"
              }} onClick={()=> {navigate("/about-us")}} className={"footer-nav-link"}>
                О «112 мед».
              </li>
              <li  style={{
                cursor:"pointer"
              }} onClick={()=> {navigate("/faq")}} className={"footer-nav-link"}>
                FAQ
              </li>
            </ul>
          </div>
          <div>
            <ul style={{ listStyle: "none" }}>
              <li className={"footer-nav-title"}>
              {t("footerh3")}
              </li>
              <li className={"footer-nav-link"}>
              {t("footer3.1")}
              </li>
              <li className={"footer-nav-link"}>
                {" "}
                {t("footer3.2")}
              </li>
              <li className={"footer-nav-link"}>
              {t("footer3.3")}
              </li>
            </ul>
          </div>
        </div>
        <div className="footerIcons-header">
          <h4>Свяжись с нами</h4>
          <a href={"mailto:info@112med.com"}>
            <img src={footerArrow} alt=""/>
            info@112med.com
          </a>
        </div>
        <div  className="footerIcons">
          <div style={{display:"flex", gap:"16px",marginTop:"10px"}}>
            <div >
              <img onClick={()=>window.open(data.facebook)} className={"footer-social"} src={facebook} />
            </div>
            <div>
              <img onClick={()=>window.open(data.linkedin)} className={"footer-social"} src={vk} />
            </div>
            <div>
              <img onClick={()=>window.open(data.instagram)} className={"footer-social"} src={instagram} />
            </div>
          </div>

          <div className="pad-wrapper" >
            <Button onClick={()=> navigate("/contact-us")}  className="pad">
             {t("contact1").toUpperCase()}
            </Button>
          </div>
        </div>
      </div>
      <p className="footer-copy">
        © All rights reserved 2023. 112 Med
      </p>
    </footer>
  );
};

export default Footer;
