import React,{useEffect, useState} from "react";
import {Link} from 'react-router-dom'
import { LogoutOutlined } from "@ant-design/icons";
import Vector from "../../assets/Images/Vector.svg";
import {Button, Dropdown, Space} from "antd";
import RUB from "../../assets/Svg/rub.svg";
import russianFlag from "../../assets/Images/russianFlagIcon.png";
import question from "../../assets/Images/question.png";
import heart from "../../assets/Images/heart.png";
import {ArrowRightOutlined} from "@ant-design/icons";
import USD from "../../assets/Svg/usdIcon.svg";
import EUO from "../../assets/Svg/GroupEuro.svg";
import POU from "../../assets/Svg/GroupPound.svg";
import azFlag from "../../assets/Svg/azFlag.svg";
import trFlag from "../../assets/Svg/trFlag.svg";
import absFlag from "../../assets/Svg/absFlag.svg";
import LoginModal from "../LoginModal/LoginModal";
import RegisterModal from "../RegisterModal/RegisterModal";
import userIcon from "../../assets/Svg/userlogin.svg"
import menu from "../../assets/Svg/menuIcon.svg"
import MobileMenu from "../MobileMenu/MobileMenu";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { logoutuser } from "../../store/reducers/userReducer";
import { useNavigate } from "react-router-dom";
import {toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useTranslation } from "react-i18next";
import { MenuOutlined } from "@ant-design/icons";
import {CloseOutlined } from "@ant-design/icons";
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
        RU
      </span>
    ),
    key: "2",
    icon: (
      <img
        style={{ width: "30px", objectFit: "cover", marginLeft: "20px" }}
        src={russianFlag}
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
        
        EN
      </span>
    ),
    key: "4 ",
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
  console.log(itemsFlag.find(item => item.key === e.key).label.props.children)
  localStorage.setItem("lang",itemsFlag.find(item => item.key === e.key).label.props.children.toLowerCase())
  i18n.changeLanguage(localStorage.getItem("lang"))
  

};

const menuProps = {
  items,
  onClick: handleMenuClick,
};

const menuPropsFlag = {
  items: itemsFlag,
  onClick: handleMenuFlagClick,
  
};

const Header = ({handleMenu,showMenu,setShowMenu}) =>{
  if(!localStorage.getItem("lang")){
    localStorage.setItem("lang","ru")
  }
  
 
  const handleMenuFlagClick = (e) => {
    console.log("click", e);
    console.log(itemsFlag.find(item => item.key === e.key).label.props.children)
    localStorage.setItem("lang",itemsFlag.find(item => item.key === e.key).label.props.children.toLowerCase())
    setActive(itemsFlag.find(item => item.key === e.key))
    i18n.changeLanguage(itemsFlag.find(item => item.key === e.key).label.props.children.toLowerCase())
    
    
  
  };
  const menuPropsFlag = {
    items: itemsFlag,
    onClick: handleMenuFlagClick,
    
  };

  const {t,i18n}=useTranslation()

  const [openLogin, setOpenLogin] = useState(false)
  const [openRegister, setOpenRegister] = useState(false)
  const [lang,setLang]=useState(localStorage.getItem("lang"))
 
  const [active,setActive] = useState(itemsFlag.find( item => item.label.props.children === localStorage.getItem("lang").toUpperCase()))
  const navigate=useNavigate()
  console.log(lang);
  const {user, errors}=useSelector((state)=> state.auth)
  const {authToken}=useSelector((state)=> state.auth)

  const state=useSelector((state)=>state.auth)
  console.log(state)
 
  const displayLogoutNotification = () => {
   
    toast(t("suclogout"));
  };
  const dispatch =useDispatch()

  
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

    return(
      <>
    <div className={showMenu ? "mobileMenu" : ""}>
      <header >
        <div id="bg">
          <div className="container container1">
          <Link to="/">  <div>
              <img  className="navbar-logo" src={Vector} />
            </div>
            </Link>
            <div className="mR">
              <h1 className="textMed">112 Med</h1>
              <p className="medMarket">{t("Medical marketplace")}</p>
            </div>
            <div className="dropdownBefore">
              <ul className="ul" id="ulList">
                <li style={{ paddingBottom: "15px" }}>
                  <Dropdown 
                       menu={menuProps}>
                    <Button type="text">
                      <Space>
                        <img id="rubl" src={RUB} />
                        <span
                          style={{
                            fontFamily: "Gilroy",
                            fontSize: "17.5px",
                            fontWeight: "500",
                            color: "white",
                          }}
                        >
                          RUB
                        </span>
                      </Space>
                    </Button>
                  </Dropdown>
                </li>
                <li style={{ paddingBottom: "15px" }}>
                  <Dropdown   menu={menuPropsFlag}>
                    <Button type="text">
                      <Space>
                        {active.icon}
                        

                        
                        <span
                          style={{  
                            fontFamily: "Gilroy",
                            fontSize: "17.5px",
                            fontWeight: "500",
                            color: "white",
                          }}
                        >
                        {active.label.props.children}
                        </span> 
                      </Space>
                    </Button>
                  </Dropdown>
                </li>
                <li onClick={()=> navigate("contact-us")}  style={{ paddingBottom: "15px",cursor:"pointer" }} className="dFlex">
                  <div className="question">
                    <img src={question} />
                  </div>
                  <div>
                    <p style={{color:"white"}}>{t("contact")} </p>
                  </div>
                </li>
                {user ?<li  onClick={()=>navigate("/profile")} style={{ paddingBottom: "15px",cursor:"pointer" }}>
                  <img   src={userIcon} />
                </li>:""}
                <li style={{ paddingBottom: "15px" }}>
                 {user ? <Button
                    className="button"
                    type="primary"
                    icon={<ArrowRightOutlined className="Arrow" />}
                    onClick={()=> logout()}
                  >
                    {t("logout")}
                  </Button> : <Button
                    className="button"
                    type="primary"
                    icon={<ArrowRightOutlined className="Arrow" />}
                    onClick={onOpenLogin}
                  >
                    {t("login")}
                  </Button>}

                </li>
              </ul>
            </div>
            <div style={{display:"flex",gap:"2px"}} className={"mobile-menu"}>
             {user ? <LogoutOutlined  onClick={()=> logout()} className="white userİconMobileMenu"/> :  
                <img className="userİconMobileMenu" onClick={onOpenLogin} src={userIcon} alt=""/>
              }
             
            
              { showMenu ? <CloseOutlined className="white userİconMobileMenu" onClick={handleMenu}/> : <MenuOutlined onClick={handleMenu} className="white userİconMobileMenu" />}
              
            </div>
          </div>
        </div>
      </header>
      <LoginModal openLogin={openLogin} onCloseLogin={onCloseLogin} onOpenRegister={onOpenRegister}/>
      <RegisterModal openRegister={openRegister} onCloseRegister={onCloseRegister}/>
      <MobileMenu setShowMenu={setShowMenu}  active={active} menuProps={menuProps} menuPropsFlag={menuPropsFlag} showMenu={showMenu} handleMenu={handleMenu}/>
     <Outlet/></div>
     </>
    )
}

export default Header