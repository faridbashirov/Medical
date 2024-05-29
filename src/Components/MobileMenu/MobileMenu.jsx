import {Button, Dropdown, Space} from "antd";
import RUB from "../../assets/Svg/rub.svg";
import question from "../../assets/Images/question.png";
import React from "react";
import facebook from "../../assets/Images/facebook.png";
import vk from "../../assets/Images/vk.png";
import instagram from "../../assets/Images/instagram.png";
import './MobileMenu.css'
import userIcon from "../../assets/Svg/userlogin.svg"

import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
const MobileMenu = ({menuProps, showMenu, menuPropsFlag,active,setShowMenu}) => {
  const {t,i18n}=useTranslation()
  const navigate=useNavigate()
  console.log(showMenu)
  return (
    <div className={`menu  ${showMenu && 'show'}`}>
      <div style={{width:"100%"}}>
        <div className={"divider"}></div>
        <ul className={"menuList"}>
          <div className={"menuListItem"} style={{ marginLeft:'-15px'}}>
            <li style={{ paddingBottom: "15px" }}>
              <Dropdown menu={menuProps}>
                <Button type="text">
                  <Space>
                    <img id="rubl" src={RUB} />
                    <span
                      style={{
                        fontFamily: "Gilroy",
                        fontSize: "14px",
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
                            fontSize: "14px",
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
          </div>
          <li style={{
            cursor:"pointer"
          }}  onClick={()=> {navigate("contact-us");setShowMenu(!showMenu)}} className={"menuListItem"}>
            <div className="question">
              <img src={question} />
            </div>
            <div>
              <p className="question-text">{t("contact")} </p>
            </div>
          </li>
          <li style={{
            cursor:"pointer"
          }} className={"menuListItem"} onClick={()=> {navigate("profile");setShowMenu(!showMenu)}}>
            <img
              style={{ objectFit: "cover !important" }}
             
              src={userIcon}

            />
            <p className="profile-text">{t("profile")}</p>
          </li>
        </ul>
      </div>

      <div className={"menuFooter"}>
        <div  className="footerIcons reverse">
          <div style={{display:"flex", gap: "10px"}}>
            <li><img  src={facebook} /></li>
            <li><img  src={vk} /></li>
            <li><img  src={instagram} /></li>
          </div>

          <div style={{ paddingLeft: "30px" }}>
            <Button
            onClick={()=> {navigate("contact-us");setShowMenu(!showMenu)}}
              style={{
                fontFamily: "Gilroy",
                fontSize: "20px",
                fontWeight: "600",
              }}
              className="pad contact-btn"
            >
              {t("contact1")}
            </Button>
          </div>
        </div>

        <p
          className="white profile-text"
          style={{
            textAlign: "center",
            paddingBottom: "30px",
            margin: "0px",
          }}
        >
          © All rights reserved 2023. 112 Med
        </p>
      </div>
    </div>
  );
};

export default MobileMenu;
