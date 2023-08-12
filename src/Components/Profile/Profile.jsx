import React, { useState,useEffect } from "react";
import Vector from "../../assets/Images/Vector.svg";
import USD from "../../assets/Svg/usdIcon.svg";
import EUO from "../../assets/Svg/GroupEuro.svg";
import POU from "../../assets/Svg/GroupPound.svg";
import RUB from "../../assets/Svg/rub.svg";
import russianFlag from "../../assets/Images/russianFlagIcon.png";
import question from "../../assets/Images/question.png";
import heart from "../../assets/Images/heart.png";
import peopleIcon from "../../assets/Svg/peopleIcon.svg";
import favDoctors from "../../assets/Svg/favDoctors.svg";
import favHospital from "../../assets/Svg/favHospital.svg";
import messageDoctor from "../../assets/Svg/messageDoc.svg";
import messageHospital from "../../assets/Svg/messageHos.svg";
import help112 from "../../assets/Svg/ambulans.svg";
import azFlag from "../../assets/Svg/azFlag.svg";
import trFlag from "../../assets/Svg/trFlag.svg";
import absFlag from "../../assets/Svg/absFlag.svg";
import facebook from "../../assets/Images/facebook.png";
import instagram from "../../assets/Images/instagram.png";
import vk from "../../assets/Images/vk.png";
import mailIcon from "../../assets/Svg/mailIcon.svg";
import passwordIcon from "../../assets/Svg/passwordIcon.svg";
import { useNavigate } from "react-router-dom";
import "../Profile/Profile.css";
import getUserFetch from "../api/getUser";
import Password from "./Password";
import Info from "./Info";
import {
  Button,
  Dropdown,
  Space,
  Breadcrumb,
  Col,
  Row,
  Form,
  Input,
  DatePicker,
  Select,
  Tabs,
} from "antd";

import { ArrowRightOutlined } from "@ant-design/icons";
import Header from "../Header/index.js";
import Footer from "../Footer/index.js";
import { useTranslation } from "react-i18next";


const handleMenuClick = (e) => {
  console.log("click", e);
};

const handleMenuFlagClick = (e) => {
  console.log("click", e);
};





// const items = [
//   {
//     label: (
//       <span
//         style={{
//           fontFamily: "Gilroy",
//           fontSize: "16px",
//           fontWeight: "600",
//           color: "black",
//           paddingLeft: "10px",
//         }}
//       >
//         USD
//       </span>
//     ),
//     key: "1",
//     icon: (
//       <img
//         style={{ width: "30px", objectFit: "cover", marginLeft: "20px" }}
//         src={USD}
//       />
//     ),
//   },
//   {
//     label: (
//       <span
//         style={{
//           fontFamily: "Gilroy",
//           fontSize: "16px",
//           fontWeight: "600",
//           color: "black",
//           paddingLeft: "10px",
//         }}
//       >
//         EUR
//       </span>
//     ),
//     key: "2",
//     icon: (
//       <img
//         style={{ width: "30px", objectFit: "cover", marginLeft: "20px" }}
//         src={EUO}
//       />
//     ),
//   },
//   {
//     label: (
//       <span
//         style={{
//           fontFamily: "Gilroy",
//           fontSize: "16px",
//           fontWeight: "600",
//           color: "black",
//           paddingLeft: "10px",
//         }}
//       >
//         {" "}
//         GBP
//       </span>
//     ),
//     key: "3",
//     icon: (
//       <img
//         style={{ width: "30px", objectFit: "cover", marginLeft: "20px" }}
//         src={POU}
//       />
//     ),
//   },
// ];

// const itemsFlag = [
//   {
//     label: (
//       <span
//         style={{
//           fontFamily: "Gilroy",
//           fontSize: "16px",
//           fontWeight: "600",
//           color: "black",
//           paddingLeft: "10px",
//         }}
//       >
//         AZ
//       </span>
//     ),
//     key: "1",
//     icon: (
//       <img
//         style={{ width: "30px", objectFit: "cover", marginLeft: "20px" }}
//         src={azFlag}
//       />
//     ),
//   },
//   {
//     label: (
//       <span
//         style={{
//           fontFamily: "Gilroy",
//           fontSize: "16px",
//           fontWeight: "600",
//           color: "black",
//           paddingLeft: "10px",
//         }}
//       >
//         TR
//       </span>
//     ),
//     key: "2",
//     icon: (
//       <img
//         style={{ width: "30px", objectFit: "cover", marginLeft: "20px" }}
//         src={trFlag}
//       />
//     ),
//   },
//   {
//     label: (
//       <span
//         style={{
//           fontFamily: "Gilroy",
//           fontSize: "16px",
//           fontWeight: "600",
//           color: "black",
//           paddingLeft: "10px",
//         }}
//       >
//         {" "}
//         EN
//       </span>
//     ),
//     key: "3",
//     icon: (
//       <img
//         style={{ width: "30px", objectFit: "cover", marginLeft: "20px" }}
//         src={absFlag}
//       />
//     ),
//   },
// ];

// const menuProps = {
//   items,
//   onClick: handleMenuClick,
// };
// const menuPropsFlag = {
//   items: itemsFlag,
//   onClick: handleMenuFlagClick,
// };

const MyFormItemContext = React.createContext([]);
function toArr(str) {
  return Array.isArray(str) ? str : [str];
}
// const MyFormItemGroup = ({ prefix, children }) => {
//   const prefixPath = React.useContext(MyFormItemContext);
//   const concatPath = React.useMemo(
//     () => [...prefixPath, ...toArr(prefix)],
//     [prefixPath, prefix]
//   );
//   return (
//     <MyFormItemContext.Provider value={concatPath}>
//       {children}
//     </MyFormItemContext.Provider>
//   );
// };
const MyFormItem = ({ name, ...props }) => {
  const prefixPath = React.useContext(MyFormItemContext);
  const concatName =
    name !== undefined ? [...prefixPath, ...toArr(name)] : undefined;
  return <Form.Item  name={concatName} {...props} />;
};

const handleChange = (value) => {
  console.log(`selected ${value}`);
};

const Profile = () => {
  const {t}=useTranslation()
  const items = [
    {
      key: '1',
      label: t("info"),
      children: <Info/>,
    },
    {
      key: '2',
      label: t("password"),
      children: <Password/>,
    },
  ];

  

  const navigate=useNavigate()
  const onFinish = (value) => {
    console.log(value);
  };
 

  const onChange = (date, dateString) => {
   
  };
  

  return (
    <>
     
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
                title: t("profile"),
              },
            ]}
          />
        </div>
      </div>

      <div style={{ paddingBottom: "50px" }} className="container">
        <div className="displayGrid">
          <div style={{ height: "320px" }} className="menuNav">
            <ul>
              <li
                style={{
                  listStyle: "none",
                  padding: "10px 20px",
                  fontSize: "16px !important",
                  fontWeight: "500 !important",
                  color: "#2A353D !important",
                }}
              >
                <img style={{ paddingRight: "27px" }} src={peopleIcon} />
                {t("profileinfo")}
              </li>
              <li onClick={()=> navigate("/profile/fav-doctors")}
                style={{
                  listStyle: "none",
                  padding: "10px 20px",
                  fontSize: "16px !important",
                  fontWeight: "500 !important",
                  color: "#2A353D !important",
                  cursor:"pointer"
                }}
              >
                <img style={{ paddingRight: "20px" }} src={favDoctors} />
                {t("favoritedoctor")}
              </li>
              <li onClick={()=> navigate("/profile/fav-hospitals")}
                style={{
                  listStyle: "none",
                  padding: "10px 20px",
                  fontSize: "16px !important",
                  fontWeight: "500 !important",
                  color: "#2A353D !important",
                  cursor:"pointer"
                }}
              >
                <img style={{ paddingRight: "20px" }} src={favHospital} />
                {t("favoritehospital")}
              </li>
              <li onClick={()=> navigate("/profile/doctor-reviews")}
                style={{
                  listStyle: "none",
                  padding: "10px 20px",
                  fontSize: "16px !important",
                  fontWeight: "500 !important",
                  color: "#2A353D !important",
                  cursor:"pointer"
                }}
              >
                <img style={{ paddingRight: "27px" }} src={messageDoctor} />
                {t("commentdoctor")}
              </li>
              <li onClick={()=> navigate("/profile/hospital-reviews")}
                style={{
                  listStyle: "none",
                  padding: "10px 20px",
                  fontSize: "16px !important",
                  fontWeight: "500 !important",
                  color: "#2A353D !important",
                  cursor:"pointer"
                }}
              >
                <img style={{ paddingRight: "27px" }} src={messageHospital} />
                {t("commenthospital")}
              </li>
              <li
                style={{
                  listStyle: "none",
                  padding: "10px 20px",
                  fontSize: "16px !important",
                  fontWeight: "500 !important",
                  color: "#2A353D !important",
                }}
              >
                <img style={{ paddingRight: "27px" }} src={help112} />
                {t("help")}
              </li>
            </ul>
          </div>

          <div className="userForm">
            <div
              style={{
                borderBottom: "1px solid #E7E7E7",
                paddingBottom: "30px",
              }}
            >
              <p
                style={{
                  color: "#5282FF",
                  fontSize: "20px",
                  fontWeight: "500",
                }}
              >
               {t("profileinfo")}
              </p>
              <p
                style={{
                  color: "#5F5F5F",
                  fontSize: "16px",
                  fontWeight: "500",
                  paddingTop: "10px",
                }}
              >
               {t("profileinfo2")}
              </p>
            </div>

            <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Profile;
