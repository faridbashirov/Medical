import React,{useEffect, useState} from "react";
import {Link} from 'react-router-dom'
import { LogoutOutlined } from "@ant-design/icons";
import {Button, Dropdown, Space} from "antd";
import russianFlag from "../../assets/Images/russianFlagIcon.png";
import question from "../../assets/Images/question.png";
import USD from "../../assets/Svg/usdIcon.svg";
import EUO from "../../assets/Svg/GroupEuro.svg";
import POU from "../../assets/Svg/GroupPound.svg";
import azFlag from "../../assets/Svg/azFlag.svg";
import absFlag from "../../assets/Svg/absFlag.svg";
import LoginModal from "../LoginModal/LoginModal";
import RegisterModal from "../RegisterModal/RegisterModal";
import userIcon from "../../assets/Svg/userlogin.svg"
import MobileMenu from "../MobileMenu/MobileMenu";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { logoutuser } from "../../store/reducers/userReducer";
import { useNavigate } from "react-router-dom";
import {toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useTranslation } from "react-i18next";
import { MenuOutlined } from "@ant-design/icons";
import {CloseOutlined } from "@ant-design/icons";
import './Header.css'
import useLanguageFetch from "../../Hooks/useLanguageFetch";
if (!localStorage.getItem("lang")) {
  localStorage.setItem("lang", "ru");
}

const itemsFlag = [
  {
    label: (
      <span
        style={{
          fontFamily: "Gilroy",
          fontSize: "16px",
          fontWeight: "600",
          color: "black"
        }}
      >
        AZ
      </span>
    ),
    key: "1",
    icon: (
      <img
        style={{ width: "30px", objectFit: "cover" }}
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
          color: "black"
        }}
      >
        RU
      </span>
    ),
    key: "2",
    icon: (
      <img
        style={{ width: "30px", objectFit: "cover" }}
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
          color: "black"
        }}
      >
        
        EN
      </span>
    ),
    key: "4 ",
    icon: (
      <img
        style={{ width: "30px", objectFit: "cover" }}
        src={absFlag}
      />
    ),
  },
];

const Header = () =>{
  const [showMenu, setShowMenu] = useState(false)
  const { data } = useLanguageFetch('main/currencies',localStorage.getItem("lang"));
  const [itemsCurrency,setItemsCurrency] = useState([])
  const handleMenu = () =>{
    setShowMenu(!showMenu)
  }
  if(!localStorage.getItem("lang")){
    localStorage.setItem("lang","ru")
  }
  if(!localStorage.getItem("currency")){
    localStorage.setItem("currency","RUB")
  }
  useEffect(() => {
  if(data){
    const itemsCurrencyNew = Object.keys(data).map((item, index) => ({
        label: (
          <span
            style={{
              fontFamily: "Gilroy",
              fontSize: "16px",
              fontWeight: "600",
              color: "black",
            }}
          >
            {item}
          </span>
        ),
        key: index.toString(),
        icon: (
          <span
            style={{
              fontFamily: "Gilroy",
              fontSize: "14px",
              fontWeight: "600",
              color: "black",
              width: '30px',
              height: '30px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'center',
              border: '1,5px solid #F6F6F6',
              borderRadius: '50%',
              backgroundColor: '#F6F6F6',
            }}
          >
            {data[item].symbol}
          </span>
        )
      }));
    setItemsCurrency(itemsCurrencyNew)
    const defaultCurrency = itemsCurrencyNew.find(item => item.label.props.children.toString().toUpperCase() === localStorage.getItem("currency").toUpperCase()) || itemsCurrencyNew[0];
    setCurrency(defaultCurrency);
  }
  if (showMenu) {
    document.body.classList.add('overflowHidden');
  } else {
    document.body.classList.remove('overflowHidden');
  }
}, [showMenu,data]);
 
  const handleMenuFlagClick = (e) => {
    console.log("click", e);
    console.log(itemsFlag.find(item => item.key === e.key).label.props.children)
    localStorage.setItem("lang",itemsFlag.find(item => item.key === e.key).label.props.children.toLowerCase())
    setActive(itemsFlag.find(item => item.key === e.key))
    i18n.changeLanguage(itemsFlag.find(item => item.key === e.key).label.props.children.toLowerCase())
  };
  
  const handleMenuClick = (e) => {
  const selectedCurrency = itemsCurrency.find(item => item.key === e.key);
    localStorage.setItem("currency", selectedCurrency.label.props.children.toString().toUpperCase());
    setCurrency(selectedCurrency);
};
  const menuPropsFlag = {
    items: itemsFlag,
    onClick: handleMenuFlagClick,
  };
  const menuProps = {
    items: itemsCurrency,
    onClick: handleMenuClick,
  };
  
  const {t,i18n}=useTranslation()

  const [openLogin, setOpenLogin] = useState(false)
  const [openRegister, setOpenRegister] = useState(false)
   const [currency, setCurrency] = useState({});
  const [active,setActive] = useState(itemsFlag.find( item => item.label.props.children === localStorage.getItem("lang").toUpperCase()))
  const navigate=useNavigate()
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
    <div className={showMenu ? "overflowHidden" : ""}>
      <header >
        <div id="bg">
          <div className="container header">
          <Link to="/">  
            <div className="site-name">
              <h1 className="textMed">112MED.COM</h1>
            </div>
            </Link>
            <div className="dropdownBefore">
              <ul className="ul" id="ulList">
                <li className="currency-dropdown">
                  <Dropdown style={{display:"flex"}} getPopupContainer={trigger => trigger.parentNode} menu={menuProps}>
                    <Button type="text">
                      <Space style={{display:"flex"}}>
                        {currency?.icon}
                        <span
                          style={{
                            fontFamily: "Gilroy",
                            fontSize: "17.5px",
                            fontWeight: "500",
                            color: "white",
                          }}
                        >
                          {currency?.label?.props?.children}
                        </span>
                      </Space>
                    </Button>
                  </Dropdown>
                </li>
                <li className="language-dropdown">
                  <Dropdown style={{display:"flex"}} getPopupContainer={trigger => trigger.parentNode}  menu={menuPropsFlag}>
                    <Button type="text">
                      <Space style={{display:"flex"}}>
                        {active?.icon}
                        {/* <span
                          style={{  
                            fontFamily: "Gilroy",
                            fontSize: "17.5px",
                            fontWeight: "500",
                            color: "white",
                          }}
                        >
                        {active.label.props.children}
                        </span>  */}
                      </Space>
                    </Button>
                  </Dropdown>
                </li>
                <li onClick={()=> navigate("contact-us")}  style={{ cursor:"pointer" }} className="dFlex">
                  <div className="question">
                    <img src={question} />
                  </div>
                  <div className="contact-header">
                    <p style={{color:"white"}}>{t("contact")} </p>
                  </div>
                </li>
                {user ?<li  onClick={()=>navigate("/profile")} style={{ cursor:"pointer" }}>
                  <img   src={userIcon} />
                </li>:""}
                <li>
                 {user ? <Button
                    className="button"
                    type="primary"
                    // icon={<ArrowRightOutlined className="Arrow" />}
                   
                    onClick={()=> logout()}
                  >
                    {t("logout")}
                  </Button> : <Button
                    className="button"
                    type="primary"
                    // icon={<ArrowRightOutlined className="Arrow" />}
                    
                    onClick={onOpenLogin}
                  >
                    {t("login")}
                  </Button>}

                </li>
              </ul>
            </div>
            <div className={"mobile-menu"}>
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
      <MobileMenu setShowMenu={setShowMenu} currency={currency} active={active} menuProps={menuProps} menuPropsFlag={menuPropsFlag} showMenu={showMenu} handleMenu={handleMenu}/>
     <Outlet/></div>
     </>
    )
}

export default Header