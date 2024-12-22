import React,{useEffect, useState} from "react";
import {Link} from 'react-router-dom'
import { LogoutOutlined } from "@ant-design/icons";
import {Button, Dropdown, Space} from "antd";
import russianFlag from "../../assets/Svg/flags/RUS.svg";
import question from "../../assets/Images/question.png";
import azFlag from "../../assets/Svg/flags/AZE.svg";
import absFlag from "../../assets/Svg/flags/USA.svg";
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
if(!localStorage.getItem("currency")){
  localStorage.setItem("currency", "USD")
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
        style={{ width: "32px", objectFit: "cover" }}
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
        style={{ width: "32px", objectFit: "cover" }}
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
        style={{ width: "32px", objectFit: "cover" }}
        src={absFlag}
      />
    ),
  },
];

const Header = () =>{
  const [showMenu, setShowMenu] = useState(false)
  const { data } = useLanguageFetch('main/currencies',localStorage.getItem("lang"));
  const [currency, setCurrency] = useState("USD");
  const [itemsCurrency,setItemsCurrency] = useState([])
  const handleMenu = () =>{
    setShowMenu(!showMenu)
  }
  if(!localStorage.getItem("lang")){
    localStorage.setItem("lang","ru")
  }
  useEffect(() => {
    if (data) {
      const itemsCurrencyNew = Object.keys(data).map((item, index) => ({
        label: (
          <div className="currency-card">
            <span>{item}</span>
            <span>
              {data[item].rate.toLocaleString('en-US', {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </span>
          </div>
        ),
        key: index.toString(),
        icon: <div className="currency"><span>{data[item].symbol}</span></div>,
      }));
      const defaultCurrency = itemsCurrencyNew.find(
        (item) => item.label.props.children[0].props.children.toUpperCase() ===
        (localStorage.getItem("currency") || "USD").toUpperCase()
      ) || itemsCurrencyNew[0];

      setItemsCurrency(itemsCurrencyNew);
      setCurrency(defaultCurrency);
    }
    document.body.classList.toggle('overflowHidden', showMenu);
  }, [data, showMenu]);
 
  const handleMenuFlagClick = (e) => {
    localStorage.setItem("lang",itemsFlag.find(item => item.key === e.key).label.props.children.toLowerCase())
    setActive(itemsFlag.find(item => item.key === e.key))
    i18n.changeLanguage(itemsFlag.find(item => item.key === e.key).label.props.children.toLowerCase())
  };
  
  const handleMenuClick = (e) => {
  const selectedCurrency = itemsCurrency.find(item => item.key === e.key);
    localStorage.setItem("currency", selectedCurrency.label.props.children[0].props.children.toUpperCase());
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
  const [active,setActive] = useState(itemsFlag.find( item => item.label.props.children === localStorage.getItem("lang").toUpperCase()))
  const navigate=useNavigate()
  const {user, errors}=useSelector((state)=> state.auth)
  const {authToken}=useSelector((state)=> state.auth)
  const state=useSelector((state)=>state.auth)
 
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
                          {currency?.label?.props?.children[0]}
                        </span>
                        {/* {currency?.label && <span
                          style={{
                            fontFamily: "Gilroy",
                            fontSize: "17.5px",
                            fontWeight: "500",
                            color: "white",
                          }}
                        >
                          ({currency?.label?.props?.children[1]})
                        </span>} */}
                      </Space>
                    </Button>
                  </Dropdown>
                </li>
                <li className="language-dropdown">
                  <Dropdown style={{display:"flex"}} getPopupContainer={trigger => trigger.parentNode}  menu={menuPropsFlag}>
                    <Button type="text">
                      <Space className="currency-space">
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
                    <p style={{color:"white"}}>{t("contact header")} </p>
                  </div>
                </li>
                {user ?<li  onClick={()=>navigate("/profile")} style={{ cursor:"pointer" }}>
                  <img   src={userIcon} />
                </li>:""}
                <li>
                 {user ? <Button
                    className="button-header"
                    type="primary"
                    // icon={<ArrowRightOutlined className="Arrow" />}
                   
                    onClick={()=> logout()}
                  >
                    {t("logout")}
                  </Button> : <Button
                    className="button-header"
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