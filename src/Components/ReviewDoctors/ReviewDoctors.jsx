import React from "react";
import { Dropdown, Button, Space, Breadcrumb, Pagination } from "antd";
import Vector from "../../assets/Images/Vector.svg";
import USD from "../../assets/Svg/usdIcon.svg";
import EUO from "../../assets/Svg/GroupEuro.svg";
import POU from "../../assets/Svg/GroupPound.svg";
import RUB from "../../assets/Svg/rub.svg";
import azFlag from "../../assets/Svg/azFlag.svg";
import trFlag from "../../assets/Svg/trFlag.svg";
import absFlag from "../../assets/Svg/absFlag.svg";
import peopleIcon from "../../assets/Svg/peopleIcon.svg";
import favDoctors from "../../assets/Svg/favDoctors.svg";
import favHospital from "../../assets/Svg/favHospital.svg";
import messageDoctor from "../../assets/Svg/messageDoc.svg";
import messageHospital from "../../assets/Svg/messageHos.svg";
import help112 from "../../assets/Svg/ambulans.svg";
import likeReview from "../../assets/Svg/reviewLike.svg";
import Iconstars from "../../assets/Svg/starIcon.svg";

import russianFlag from "../../assets/Images/russianFlagIcon.png";
import question from "../../assets/Images/question.png";
import heart from "../../assets/Images/heart.png";
import facebook from "../../assets/Images/facebook.png";
import instagram from "../../assets/Images/instagram.png";
import vk from "../../assets/Images/vk.png";
import reviewDoctor from "../../assets/Images/reviewDoctor.png";

import { ArrowRightOutlined } from "@ant-design/icons";

import "../ReviewDoctors/ReviewDoctors.css";
import Header from "../Header/index.js";
import Footer from "../Footer/index.js";
import FilterButtons from "../FilterButtons/index.js";
import { useSelector } from "react-redux";
import profileDoctorReviews from "../api/profileDoctorReviews";
import { useNavigate } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
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

const  ReviewDoctors = () => {
  const {t}=useTranslation()
  const navigate=useNavigate()
  const [searchParams,setSearchParams] = useSearchParams()

  const {user,authToken}=useSelector(state=> state.auth)
 


  const {data,error,count}=profileDoctorReviews(searchParams.get("page") || null)
  console.log(data);
  if(error) {
    return <div>Page Not Found</div>
  }
  return (
    <>
      

      {/*breadcrumbs*/}
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

      <div className="container">
        <div className="displayGridReviewDr">
          <div style={{ height: "320px" }} className="menuNav">
            <ul>
            <li  onClick={()=> navigate("/profile")}
                style={{
                  listStyle: "none",
                  padding: "10px 20px",
                  fontSize: "16px !important",
                  fontWeight: "500 !important",
                  color: "#2A353D !important",
                  cursor:"pointer"
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
                  cursor:"pointer",
                  zIndex:1
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
                  cursor:"pointer",
                  backgroundColor:"#F2F5FF"
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

          <div className="menuRight">
        
            
            
            <div>
              { data?.length !== 0 ? data.map((item,index)=>{
                return  <div className="cardReviewDoctors-main">
                <div className="card-head display_grid">
                  <img id="doctorImage"  src={item.doctor?.profile_photo}/>
                  
                </div>
                <div className="card-body">
                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <img src={Iconstars} />
                    <p
                      style={{
                        backgroundColor: "#FFC224",
                        color: "#000",
                        width: "29.16px",
                        height: "21.53px",
                        borderRadius: "2.5px",
                        textAlign: "center",
                      }}
                    >
                      9,9
                    </p>
                  </div>
                  <div>
                    <h3
                      className={"card-title changed"}
                    >
                     
                    </h3>
                    <p
                      className={"card-text changed"}
                    >
                     {item.text}
                    </p>
                  </div>
                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <p  className="changed" style={{ color: "#464646", fontSize: "11.15px" }}>
                      Review To{" "}
                      <span onClick={()=> navigate(`/doctor/${item.doctor.id}`)} className="changed" style={{ color: "#5282FF", fontSize: "11.15px",cursor:"pointer" }}>
                        Dr. {item.doctor?.first_name}
                      </span>
                    </p>
                    <p className="changed" style={{ color: "#BCBCBC", fontSize: "12px" }}>
                      29 июля - 2022 г.
                    </p>
                  </div>
                </div>
              </div>
              }) : <div style={{textAlign:"center"}}> {t("nothingfound")}</div>}
             
             
              <div className={'review-doctors-pagination'}
              >
                  {count ? <Pagination
        current={parseInt(searchParams.get("page")) || 1}  pageSize={2} onChange={(page)=>{
         searchParams.set("page", page)
         // const newSearch = `?${searchParams.toString()}`;
        setSearchParams(searchParams)

       }}  total={count}
        
       /> : ""}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer/>
    </>
  );
};

export default ReviewDoctors;
