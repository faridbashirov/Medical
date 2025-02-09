import React, { useEffect, useState } from 'react';
import facebook from "../../assets/Svg/facebook.svg";
import vk from "../../assets/Svg/Vkontakte.svg";
import instagram from "../../assets/Svg/Instagram.svg";
import {Button} from "antd";
import footerArrow from "../../assets/Svg/footer-arrow.svg"
import { useTranslation } from 'react-i18next';
import { Trans } from 'react-i18next';
import { Link, useNavigate } from 'react-router-dom';
import './Footer.css'
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllSocials } from '../../store/reducers/socialsReducer';
import {toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import LoginModal from "../LoginModal/LoginModal";
import RegisterModal from "../RegisterModal/RegisterModal";

const Footer = () => {
  const [openLogin, setOpenLogin] = useState(false)
  const [openRegister, setOpenRegister] = useState(false)
  const navigate=useNavigate();
  const {t}=useTranslation()
  const dispatch = useDispatch();
  const { socials } = useSelector((state) => state.socials);
  const {user, errors}=useSelector((state)=> state.auth)
  const {authToken}=useSelector((state)=> state.auth)
  const state=useSelector((state)=>state.auth)
  const displayLogoutNotification = () => {
    toast(t("suclogout"));
  };


  
 const logout =()=>{
    dispatch(logoutuser())
    displayLogoutNotification()
 }
 
  const onOpenLogin = () => {
    setOpenLogin(true)
  }

  const onCloseLogin = () =>{
    
    setOpenLogin(false)
  }

  const onCloseRegister= () =>{
    setOpenRegister(false)
  }

  const onOpenRegister = () => {
    setOpenRegister(true)
    setOpenLogin(false)
  }
  useEffect(()=>{
    dispatch(fetchAllSocials())
  },[])
  return (
    <footer className="bgFooter">
      <div className="container footer-wrapper">
        <div className="rowGrid">
          <div id="textFooterid" className={"textFooterid"} style={{display:"flex"}}>
            <Link><h1 className="footer-textMed">112MED.COM</h1></Link>
          </div>
          <div>
            <LoginModal openLogin={openLogin} onCloseLogin={onCloseLogin} onOpenRegister={onOpenRegister}/>
            <RegisterModal openRegister={openRegister} onCloseRegister={onCloseRegister}/>
            <ul style={{ listStyle: "none" }}>
              <li  className={"footer-nav-title"}>
              {t("footerHeader1")}
              </li>
              {!user && <li  style={{
                cursor:"pointer"
              }}  onClick={() => { onOpenRegister(); window.scrollTo(0, 0); }}  className={"footer-nav-link"}>
              {t("footerTitle1-1")}
              </li>}
              <li style={{
                cursor:"pointer"
              }}  onClick={()=> {navigate("/contact-us")}} className={"footer-nav-link"}>
              {t("footerTitle1-2")}
              </li>
              <li  style={{
                cursor:"pointer"
              }}  onClick={()=> {navigate("/about-us")}} className={"footer-nav-link"}>
              {t("footerTitle1-3")}
              </li>
              <li  style={{
                cursor:"pointer"
              }}  onClick={()=> {navigate("/faq")}} className={"footer-nav-link"}>
              {t("footerTitle1-4")}
              </li>
            </ul>
          </div>
          <div className='footer-center-area'>
            <ul style={{ listStyle: "none" }} >
              <li   className={"footer-nav-title"}>
                {t("footerHeader2")}
              </li>
              <li  style={{
                cursor:"pointer"
              }}  onClick={()=> {navigate("/hospitals")}} className={"footer-nav-link"}>
              {t("footerTitle2-1")}
              </li>
              <li style={{
                cursor:"pointer"
              }}  onClick={()=> {navigate("/doctors")}} className={"footer-nav-link"}>
              {t("footerTitle2-2")}
              </li>
              <li  style={{
                cursor:"pointer"
              }}  onClick={()=> {navigate("/hospitals")}} className={"footer-nav-link"}>
              {t("footerTitle2-3")}
              </li>
            </ul>
          </div>
          <div>
            <ul style={{ listStyle: "none" }}>
              <li className={"footer-nav-title"}>
              {t("footerHeader3")}
              </li>
              <li   style={{
                cursor:"pointer"
              }} onClick={()=> {navigate("/privacy-policy")}} className={"footer-nav-link"}>
              {t("footerTitle3-1")}
              </li>
              <li  style={{
                cursor:"pointer"
              }}  onClick={()=> {navigate("/terms")}} className={"footer-nav-link"}>
                {t("footerTitle3-2")}
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
          {(socials?.instagram || socials?.linkedin || socials.facebook) && <div style={{display:"flex", gap:"16px",marginTop:"10px"}}>
            {socials.facebook && <div>
              <img onClick={()=>window.open(socials.facebook)} className={"footer-social"} src={facebook} />
            </div>}
            {socials.linkedin && <div>
              <img onClick={()=>window.open(socials.linkedin)} className={"footer-social"} src={vk} />
            </div>}
            {socials.instagram && <div>
              <img onClick={()=>window.open(socials.instagram)} className={"footer-social"} src={instagram} />
            </div>}
          </div>}
          <div className="pad-wrapper" >
            <Button onClick={()=> navigate("/contact-us")}  className="pad">
             {t("contact1").toUpperCase()}
            </Button>
          </div>
        </div>
      </div>
      <div className="footer-copy">
        <div className='footerArea'>
        <div className="footerDescription">
          <div style={{ display: "flex", gap: "16px", marginTop: "10px" }}></div>
          <p>{t("footer-description.description1")}</p>
          <br />
          <p>{t("footer-description.description2")}</p>
          <br />
          <p className='footer-description'>
            <Trans i18nKey="footer-description.description3">
              {" "}<Link to="/terms">Пользовательским соглашением</Link>
              {" "}<Link to="/privacy-policy">Политикой конфиденциальности</Link>
              {" "}<Link to="/terms">политикой</Link>
            </Trans>
          </p>
        </div>
        <p><Trans i18nKey="footer-title"></Trans></p>
        <p><Trans i18nKey="copyright"></Trans></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
