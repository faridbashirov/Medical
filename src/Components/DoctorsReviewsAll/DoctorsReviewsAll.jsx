import React,{useEffect,useState} from "react";
import { Dropdown, Button, Space, Breadcrumb, Pagination, Input } from "antd";

import { ArrowRightOutlined, EnvironmentOutlined } from "@ant-design/icons";

import Vector from "../../assets/Images/Vector.svg";
import USD from "../../assets/Svg/usdIcon.svg";
import EUO from "../../assets/Svg/GroupEuro.svg";
import POU from "../../assets/Svg/GroupPound.svg";
import RUB from "../../assets/Svg/rub.svg";
import azFlag from "../../assets/Svg/azFlag.svg";
import trFlag from "../../assets/Svg/trFlag.svg";
import absFlag from "../../assets/Svg/absFlag.svg";
import Iconstars from "../../assets/Svg/starIcon.svg";
import userIcon from "../../assets/Svg/userIcon.svg";
import userflag from "../../assets/Svg/userFlag.svg";
import check from "../../assets/Svg/check.svg";
import likeIcon from "../../assets/Svg/likeIcon.svg";
import unlikeIcon from "../../assets/Svg/unLikeIcon.svg";
import experience from "../../assets/Svg/staj.svg";
import DrFB from "../../assets/Svg/DrFB.svg";
import DrVK from '../../assets/Svg/DrVK.svg';
import DrLn from "../../assets/Svg/DrLn.svg";
import SingleStar from "../../assets/Svg/singleStar.svg";

import russianFlag from "../../assets/Images/russianFlagIcon.png";
import question from "../../assets/Images/question.png";
import heart from "../../assets/Images/heart.png";
import facebook from "../../assets/Images/facebook.png";
import instagram from "../../assets/Images/instagram.png";
import vk from "../../assets/Images/vk.png";
import DrReviewAll from "../../assets/Images/DrRwAll.png";
import DoctorDetailFetch from "../api/doctorDetail";
import "../DoctorsReviewsAll/DoctorsReviewsAll.css";
import { useParams, useSearchParams } from "react-router-dom";
import { doctorReviewsFetch } from "../api/doctorReviews";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import ReviewModal from "./ReviewModal";
import Header from "../Header/index.js";
import Footer from "../Footer/index.js";
import { object } from "yup";
import { useTranslation } from 'react-i18next';
import i18next from "i18next";
import DoctorBookingModal from "../DoctorDetail/DoctorBookingModal";

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

const  DoctorsReviewsAll = () => {
  const {t}=useTranslation()
 const {user}=useSelector((state) => state.auth)
  const {id}=useParams()
  const [reviews,setReviews]=useState([])
  const [searchParams,setSearchParams]=useSearchParams()
  const navigate=useNavigate()
  const [openReview, setOpenReview] = useState(false)
  const [count,setCount] = useState(null)
  const [add,Setadd]=useState(false)
  const [openBooking, setOpenBooking] = useState(false)
  console.log(reviews);
  console.log(id);

  const onOpenBookingModal = () => {
    console.log('1')
    setOpenBooking(true)
  }
  const onCloseBookingModal = () => {
    setOpenBooking(false)
  }


  const capitalizeWords = (str) => {
    return str
       .toLowerCase()
      .split(' ')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };
  


  const {data,error,loading,review}=DoctorDetailFetch(id,localStorage.getItem("lang")) 
  console.log(data);
  

 



  const reviewOpen=()=>{
    setOpenReview(true)

  }
  const onCloseReview = () =>{
    setOpenReview(false)
  }
  
   
   useEffect(()=>{

    
    
      const getReviews= async(id)=>{
        console.log(searchParams.get("page"),"++++++++");
        const res=await doctorReviewsFetch(id,searchParams.get("page") || null)
        console.log(res);
    
     
      setReviews(res.results)
      setCount(res.count)

    }
    getReviews(id)
},[id,searchParams,add,i18next.language ])



if(error){
  return <div>error </div>
}


  
  return (

    <> 
     {
       
       <div style={{ backgroundColor: "#F4F4F4" }}>
        
      

      <div className="container">
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
                {">"}
              </span>
            }
           
            items={[
              {
                title: t("home"),
                href: "/",
              },
              {
                title: t("Doctors"),
                href: "/doctors",
              },

              {
                title: t("comments"),
             },
            ]}
          />
        </div>
        <div
          className="doc-card"
        >
          <div className="doc-card-body-wrapper">
            <div className="doc-card-img-wrapper">
              <img
                className="doc-card-img"
                src={data.profile_photo}
              />
            </div>
            <div className="doc-card-body">
              <div
                style={{
                  display: "flex",
                  alignItems: "baseline",
                  gap: "10px",
                  height: "30px",
                }}
              >
                <div>
                  {" "}
                  <p
                    style={{
                      margin: "0 15px 0 0",
                      paddingTop: "0px !important",
                    }}
                  >
                    {data.position?.name}
                  </p>
                </div>
                <div style={{ marginRight: "auto" }}>

                {(()=>{
                let star=[]
                for(let index = 0; index < data.raiting; index++) {
                 star.push( <img
                  className={'reviews-stars'}
                  src={SingleStar}
                />)
                
              }
              return star
              })()}
                </div>
                <div className={"doc-card-ratings"}>
                  <p
                    style={{
                      margin: "0 !important",
                      fontSize: "16px",
                      fontWeight: "400",
                    }}
                  >
                    Bеликолепно{" "}
                  </p>
                </div>
                <div className={"doc-card-ratings"}>
                  <p
                    style={{
                      backgroundColor: "#5282FF",
                      color: "white",
                      width: "30px",
                      height: "24.71px",
                      borderRadius: "4.41px",
                      margin: "0 0 0 0",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    9.0
                  </p>
                </div>
              </div>

              <div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <h3
                    style={{
                      color: "#000",
                      fontSize: "24px !important",
                      margin: "0px",
                      paddingTop: "10px",
                    }}
                  >
                   Dr. {data?.first_name && capitalizeWords(data?.first_name)} {data?.last_name && capitalizeWords(data?.last_name)}
                  </h3>
                </div>

                <p
                  style={{
                    color: "#5282FF",
                    fontSize: "14px",
                    margin: "0px",
                    paddingTop: "10px",
                    marginTop:"19px"
                  }}
                >
                  <EnvironmentOutlined
                    style={{ marginRight: "6px", color: "#5282FF" }}
                  />
                  {data?.hospital_name}
                </p>

                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-end",
                  }}
                >
                  <div>
                    <p
                      style={{
                        color: "#000",
                        backgroundColor: "#F4F4F4",
                        border: "1px solid #EFEFEF",
                        borderRadius: "15px",
                        fontSize: "12px",
                        padding: "10px 10px",
                        width: "151px",
                        textAlign: "center",
                      }}
                    >
                      Сосудистая хирургия
                    </p>
                    {data.experience ? <p
                      style={{
                        color: "#000",
                        backgroundColor: "#F4F4F4",
                        border: "1px solid #EFEFEF",
                        borderRadius: "15px",
                        fontSize: "12px",
                        padding: "10px 10px",
                        width: "124px",
                        textAlign: "center",
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                        marginTop:"19px"
                      }}
                    >
                      <img src={experience} />
                      {data?.experience} {t("experienceyear")}
                    </p> : "" } 
                    
                    <div className={"doc-card-btns"} style={{marginTop:"20px"}}>
                   
                      <Button
                      onClick={onOpenBookingModal}
                        style={{
                          color: "#FFF",
                          backgroundColor: "#5282FF",
                          borderRadius: "5.55728px",
                          width: "151.16px",
                          height: "48.9px",
                          marginRight: "15px",
                        }}
                        type="primary"
                      >
                       {t("onlinebooking")}
                      </Button>
                      <Space.Compact>
                        <Input
                          style={{
                            border: "1.66718px solid #5282FF",
                            width: "187.84px",
                            height: "47.79px",
                          }}
                          defaultValue="26888888"
                        />
                      </Space.Compact>
                      {user ?
                      <Button  onClick={reviewOpen}
                        style={{
                          color: "#FFF",
                          backgroundColor: "#5282FF",
                          borderRadius: "5.55728px",
                          width: "151.16px",
                          height: "48.9px",
                          marginLeft: "15px",
                        }}
                        type="primary"
                      >
                      {t("writecomment")}
                      </Button>
:""}
                    </div>
                  </div>
                  <div className="socialIconDr" style={{backgroundColor:"#F0F0F0",width:"160px",height:"48px",textAlign:"center"}}>
                    <img style={{paddingTop:"13px",marginRight:"10px"}} src={DrFB}/>
                    <img style={{marginRight:"10px"}} src={DrVK}/>
                    <img src={DrLn}/>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={"doc-card-btns-mobile"} style={{marginTop:"20px"}}>
            <Button
              className={"doc-card-btn-1"}

              type="primary"
            >
             {t("onlinebooking")}
            </Button>
           
          </div>
        </div>
        
        {reviews.map((item,index)=>{
          return <div key={index} className={"hospital-reviews-card"}>
          <div style={{ display: "flex" }}>
            <div className="userIconOrFlag">
              <img src={userIcon} />
              <img className="userFlag" src={userflag} />
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "baseline",
                gap: "5px",
                marginRight: "auto",
              }}
            >
              <div>
                <p className={'reviews-name'}>
                 {item.user.first_name}
                </p>
                {(()=>{
                let star=[]
                for(let index = 0; index < item.rate; index++) {
                 star.push( <img
                  className={'reviews-stars'}
                  src={SingleStar}
                />)
                
              }
              return star
              })()}
               
              </div>
              <img
                className="checkIcon"
                style={{ paddingTop: "5px", marginRight: "8px" }}
                src={check}
              />
              <p className={"reviews-category"}>
                Травмотология
              </p>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <p className={'reviews-rating'}>Великолепно </p>
              <div
                style={{
                  backgroundColor: "#FFC224",
                  borderRadius: "3.52262px",
                  color: "#000",
                  textAlign: "center",
                  width: "39.92px",
                  height: "30.53px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                9.9
              </div>
            </div>
          </div>
        <p> {item.text}</p> 
          <div className={"reviews-reacts"}>
            <p style={{ color: "#BCBCBC", marginRight: "auto" }}>
              {item.created_date}
            </p>
            <p style={{ color: "#2A353D", margin: "0px" }}>
              <img className="likeIcon" src={likeIcon} />
              полезно
            </p>
            <p style={{ color: "#2A353D", margin: "0px" }}>
              <img className="unlikeIcon" src={unlikeIcon} />
              Бесполезно
            </p>
          </div>
        </div>
        })}
        
        {/* <div className={"hospital-reviews-card"}>
          <div style={{ display: "flex" }}>
            <div className="userIconOrFlag">
              <img src={userIcon} />
              <img className="userFlag" src={userflag} />
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "baseline",
                gap: "5px",
                marginRight: "auto",
              }}
            >
              <div>
                <p className={'reviews-name'}>
                  Надежда Р.
                </p>
                <img
                  style={{ width: "67px", height: "11px" }}
                  src={Iconstars}
                />
              </div>
              <img
                className="checkIcon"
                style={{ paddingTop: "5px", marginRight: "8px" }}
                src={check}
              />
              <p className={"reviews-category"}>
                Травмотология
              </p>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <p className={'reviews-rating'}>Великолепно </p>
              <div
                style={{
                  backgroundColor: "#FFC224",
                  borderRadius: "3.52262px",
                  color: "#000",
                  textAlign: "center",
                  width: "39.92px",
                  height: "30.53px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                9.9
              </div>
            </div>
          </div>
          <p className={"reviews-body-title"} style={{ marginBottom: "5px" }}>Oтлично! Bсем Cоветую</p>
          <p className={"reviews-body-desc"} style={{ marginTop: "5px" }}>
            “Great location with montain view. Helpful and responsive owners.
            Well equipped and nicely designed cottage / challenge. <br />{" "}
            Playground for kids outside as well as toys inside...”
          </p>
          <div className={"reviews-reacts"}>
            <p style={{ color: "#BCBCBC", marginRight: "auto" }}>
              29 июля - 2022 г.
            </p>
            <p style={{ color: "#2A353D", margin: "0px" }}>
              <img className="likeIcon" src={likeIcon} />
              полезно
            </p>
            <p style={{ color: "#2A353D", margin: "0px" }}>
              <img className="unlikeIcon" src={unlikeIcon} />
              Бесполезно
            </p>
          </div>
        </div>
        <div className={"hospital-reviews-card"}>
          <div style={{ display: "flex" }}>
            <div className="userIconOrFlag">
              <img src={userIcon} />
              <img className="userFlag" src={userflag} />
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "baseline",
                gap: "5px",
                marginRight: "auto",
              }}
            >
              <div>
                <p className={'reviews-name'}>
                  Надежда Р.
                </p>
                <img
                  style={{ width: "67px", height: "11px" }}
                  src={Iconstars}
                />
              </div>
              <img
                className="checkIcon"
                style={{ paddingTop: "5px", marginRight: "8px" }}
                src={check}
              />
              <p className={"reviews-category"}>
                Травмотология
              </p>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <p className={'reviews-rating'}>Великолепно </p>
              <div
                style={{
                  backgroundColor: "#FFC224",
                  borderRadius: "3.52262px",
                  color: "#000",
                  textAlign: "center",
                  width: "39.92px",
                  height: "30.53px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                9.9
              </div>
            </div>
          </div>
          <p className={"reviews-body-title"} style={{ marginBottom: "5px" }}>Oтлично! Bсем Cоветую</p>
          <p className={"reviews-body-desc"} style={{ marginTop: "5px" }}>
            “Great location with montain view. Helpful and responsive owners.
            Well equipped and nicely designed cottage / challenge. <br />{" "}
            Playground for kids outside as well as toys inside...”
          </p>
          <div className={"reviews-reacts"}>
            <p style={{ color: "#BCBCBC", marginRight: "auto" }}>
              29 июля - 2022 г.
            </p>
            <p style={{ color: "#2A353D", margin: "0px" }}>
              <img className="likeIcon" src={likeIcon} />
              полезно
            </p>
            <p style={{ color: "#2A353D", margin: "0px" }}>
              <img className="unlikeIcon" src={unlikeIcon} />
              Бесполезно
            </p>
          </div>
        </div> */}
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          paddingTop: "25px",
          paddingBottom: "50px",
        }}
      >
      {count ? <Pagination
        current={parseInt(searchParams.get("page")) || 1}  pageSize={2} onChange={(page)=>{
         searchParams.set("page", page)
         // const newSearch = `?${searchParams.toString()}`;
        setSearchParams(searchParams)

       }}  total={count}
        
       /> : ""}
      </div>
      <ReviewModal add={add} setAdd={Setadd} id={id} openReview={openReview} onCloseReview={onCloseReview}/>

      <Footer/>
      <DoctorBookingModal openBooking={openBooking} onCloseBookingModal={onCloseBookingModal}/>
    </div>
    }</>
   
  );
};

export default DoctorsReviewsAll;
