import React from 'react';
import facebook from "../../assets/Svg/facebook.svg";
import vk from "../../assets/Svg/Vkontakte.svg";
import instagram from "../../assets/Svg/Instagram.svg";
import {Button} from "antd";
import footerArrow from "../../assets/Svg/footer-arrow.svg"
import { useTranslation } from 'react-i18next';
import { Trans } from 'react-i18next';
import { Link, useNavigate } from 'react-router-dom';
import SocialsFetch from '../api/socialsFetch';
import './Footer.css'
const Footer = () => {

  const navigate=useNavigate();
  const {t}=useTranslation()
  const {data,error,loading}=SocialsFetch()
  return (
    <footer className="bgFooter">
      <div className="container footer-wrapper">
        <div className="rowGrid">
          <div id="textFooterid" className={"textFooterid"} style={{display:"flex"}}>
            <Link><h1 className="footer-textMed">112MED.COM</h1></Link>
          </div>
          <div>
            <ul style={{ listStyle: "none" }} >
              <li   className={"footer-nav-title"}>
                {t("footerh1")}
              </li>
              <li style={{
                cursor:"pointer"
              }}  onClick={()=> {navigate("/doctors")}} className={"footer-nav-link"}>
              {t("Doctors")}
              </li>
              <li  style={{
                cursor:"pointer"
              }}  onClick={()=> {navigate("/hospitals")}} className={"footer-nav-link"}>
              {t("Clinics")}
              </li>
              <li  style={{
                cursor:"pointer"
              }}  onClick={()=> {navigate("/hospitals")}} className={"footer-nav-link"}>
              {t("Services")}
              </li>
            </ul>
          </div>
          <div>
            <ul style={{ listStyle: "none" }}>
              <li className={"footer-nav-title"}>
              {t("footerh2")}
              </li>
              <li   style={{
                cursor:"pointer"
              }} onClick={()=> {navigate("/privacy-policy")}} className={"footer-nav-link"}>
              {t("footerh2.1")}
              </li>
              <li  className={"footer-nav-link"}>
                {" "}
                {t("footer2.2")}
              </li>
              <li  style={{
                cursor:"pointer"
              }}  onClick={()=> {navigate("/about-us")}} className={"footer-nav-link"}>
                {t("about-112Med")}
              </li>
              <li  style={{
                cursor:"pointer"
              }}  onClick={()=> {navigate("/faq")}} className={"footer-nav-link"}>
                {t("faq")}
              </li>
            </ul>
          </div>
          <div>
            <ul style={{ listStyle: "none" }}>
              <li  className={"footer-nav-title"}>
              {t("footerh3")}
              </li>
              
              <li style={{
                "cursor":"pointer"
              }}  onClick={()=>window.open('tel:900300400')} className={"footer-nav-link"}>
              {t("footer3.3")}
              </li>
            </ul>
          </div>
        </div>
        <div className="footerIcons-header">
          <h4>{t("contact-us1")}</h4>
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
        {t("copyright")}
      </p>
    </footer>
  );
};

export default Footer;
