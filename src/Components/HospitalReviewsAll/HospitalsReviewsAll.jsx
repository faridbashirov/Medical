import React from "react";
import { Dropdown, Button, Space, Breadcrumb, Pagination,Rate } from "antd";

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
import SingleStar from "../../assets/Svg/singleStar.svg";
import likeReview from "../../assets/Svg/reviewLike.svg";
import newRed from "../../assets/Svg/newred.svg";
import userIcon from "../../assets/Svg/userIcon.svg";
import userflag from "../../assets/Svg/userFlag.svg";
import check from "../../assets/Svg/check.svg";
import likeIcon from "../../assets/Svg/likeIcon.svg";
import unlikeIcon from "../../assets/Svg/unLikeIcon.svg";

import russianFlag from "../../assets/Images/russianFlagIcon.png";
import question from "../../assets/Images/question.png";
import heart from "../../assets/Images/heart.png";
import facebook from "../../assets/Images/facebook.png";
import instagram from "../../assets/Images/instagram.png";
import vk from "../../assets/Images/vk.png";
import FavoriteHospitals from "../../assets/Images/FavoriteHospitals.png";
import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import "../HospitalReviewsAll/HospitalsReviewsAll.css";
import Header from "../Header/index.js";
import Footer from "../Footer/index.js";
import { hospitalReviewsFetch } from "../api/hospitalReviews";
import DetailFetch from "../api/hospitalDetailFetch";
import ReviewModal from "./ReviewModal";
import { useSearchParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { axiosPrivate } from "../../api/api";
import i18next from "i18next";

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

const HospitalsReviewsAll = () => {
  const {t}=useTranslation()
    const {id}=useParams()   
    const {user}=useSelector((state) => state.auth)
    const [reviews,setReviews]=useState([])
    const [searchParams,setSearchParams]=useSearchParams()
    const [openReview, setOpenReview] = useState(false)
    const [add,setAdd] = useState(false)
    const [count,setCount] = useState(null)
    console.log(reviews);
    console.log(id);

    
    const AddToFavorite= async(id)=>{

      axiosPrivate.post(`card/add_favorite/${id}`)
      .then((res) => {
          console.log(res);
          setAdd(!add)
      })
      .catch((err) => {
          console.log(err);
      })
     
        
      // fetch(`https://hospitalbackend.efgroup.az/card/add_favorite/${id}`, {
      //   method: 'POST',
      //    headers: {
      //     'Content-type': 'application/json',
      //     "Authorization":`Bearer ${authToken.access}`
      //   },
      // })
      //    .then((response) => response.json())
      //    .then((data) => {
      //       console.log(data);
      //       setAdd(!add)
           
           
            
      //    })
      //    .catch((err) => {
      //       console.log(err.message);
      //    });
         
        
    }
    const DeleteFromFavorite= async(id)=>{
    
      axiosPrivate.delete(`card/remove_favorite/${id}`)
      .then((res) => {
          console.log(res);
          setAdd(!add)
      })
      .catch((err) => {
          console.log(err);
      })
        
        
    }

   const {hospital,error}=DetailFetch(id,i18next.language)
   console.log(hospital);



    const reviewOpen=()=>{
      setOpenReview(true)

    }
    const onCloseReview = () =>{
      setOpenReview(false)
    }
    
     
     useEffect(()=>{
        const getReviews= async(id)=>{
        const data=await hospitalReviewsFetch(id,searchParams.get("page") || null,localStorage.getItem("lang"))
      
       
        setReviews(data.results)
        setCount(data.count)

      }
      getReviews(id)
 },[id,searchParams,add,i18next.language ])



 if(error){
  return <div>Errorr</div>
}
if(!hospital){
  return <div>Loading .... </div>
}
    

     






  


  return (
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
                title: t("Clinics"),
                href: "/hospitals",
              },

              {
                title: t("comments"),
              },
              
            ]}
          />
        </div>
        <div className={"featured-hospital"}>
          <div className={"featured-hospital-inner"}>
            <div className="HospitalReviewsDisplayGrid">
              <img
                className={"featured-img"}
                id="hospitalReviewImage"
                src={ hospital && hospital?.main_image}
                
              />
        

            </div>
            <div className={"featured-body"}>
              <div className={"featured-body-title-wrapper"}>
            
               
                <p className={"featured-body-title"}>
                  {hospital.name}
                </p>
                <p
                  className={"featured-location"}
                >
                  <EnvironmentOutlined className={"featured-location-icon"}/>
                 {hospital.location}
                </p>
                <div className={"featured__ratings"}>
                  <div className={'reviews__rating-num'}>6.6</div>
                  <img className={"featured-body-stars-sm"} src={Iconstars} />
                </div>
                <div className={"featured-btns"}>
                {user ?
                  <Button onClick={()=>  reviewOpen()}
                    className={"featured-btn-review"}
                    type="primary"
                  >
                    {t("writecomment")}
                  </Button>
                  : ""}
                  <Button
                  onClick={()=>window.open(hospital.map_url)}
                    style={{
                      backgroundColor: "#FFC224",
                      borderRadius: "5px",
                      color: "#000",
                      width: "200px",
                      height: "44px",
                      fontSize: "18px",
                      marginTop: "10px",
                    }}
                    type="primary"
                  >
                  { t("map")}
                  </Button>
                </div>
              </div>
              <div
                className={"rating-wrapper"}
              >
                <div
                  className={"rating-inner"}
                >
                  <div
                    className={"rating-nums"}
                  >
                <span
                  className={"rating-nums-lg"}
                >
                  3
                </span>
                    <img className="singleStarIcon" src={SingleStar} />
                    <span className={"rating-nums-slash"}
                    >
                  /
                </span>

                    <span className={"rating-nums-sm"}
                    >
                  5
                </span>
                  </div>
                  <div>
                    <div style={{ display: "flex", justifyContent: "center" }}>
                      <img
                        style={{ width: "83px", height: "13px" }}
                        src={Iconstars}
                      />
                    </div>
                    <p className={"ratings-text"}>
                      112MED <br /> оценил качество
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={"featured-btns-mobile"}>
            <Button  onClick={reviewOpen}
              className={"button-1"}
              type="primary"
            >
               {t("writecomment")}
            </Button>
            <Button 
              className={"button-2"}
              type="primary"
            >
               {t("map")}
            </Button>
          </div>
        </div>
        {/* <div
          style={{ marginTop: "40px" }}
          className="buttonsNav"
        >
          <Button
            className={"doc-nav-btn"}
            type="primary"
          >
            Наши рекомендации
          </Button>
          <Button
            className={"doc-nav-btn"}
            type="primary"
          >
            Самая низкая цена в начале
          </Button>
          <Button
            className={"doc-nav-btn doc-nav-btn-active"}
            type="primary"
          >
            Количество звезд и цена
          </Button>
          <Button
            className={"doc-nav-btn"}
            type="primary"
          >
            Оценка + кол-во отзывов
          </Button>
        </div> */}
          {reviews.map((item,index)=>{
            return <div key={index} className={"hospital-reviews-card"}>
            <div style={{ display: "flex" }}>
              <div className="userIconOrFlag">
                <img className="userIconOrFlag-flag" src={userIcon} />
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
                  {/* {(()=>{
                let star=[]
                for(let index = 0; index < item.rate; index++) {
                 star.push( <img
                  className={'reviews-stars'}
                  src={Iconstars}
                />)
                
              }
              return star
              })()} */}
                     <Rate style={{fontSize:"16"}} disabled={true} value={item?.rate}/>
              
                 
                </div>
                <img
                  className="checkIcon"
                  src={check}
                />
                <p  className={"reviews-category"}>
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
                <div className={'reviews__rating-num'}>
                  9.9
                </div>
              </div>
            </div>
            
            <p className={"reviews-body-desc"} style={{ marginTop: "5px" }}>
             {item.text}
            </p>
            <div className={"reviews-reacts"}>
              <p style={{ color: "#BCBCBC", marginRight: "auto" }}>
                {item.created_date}
              </p>
              <p style={{ color: "#2A353D", margin: "0px" }}>
                <img className="likeIcon" src={likeIcon} />
                <span className="likeIcon-desc">полезно</span>
              </p>
              <p style={{ color: "#2A353D", margin: "0px" }}>
                <img className="unlikeIcon" src={unlikeIcon} />
                <span className="likeIcon-desc">Бесполезно</span>
              </p>
            </div>
          </div>
          })}
        
        {/* <div className={"hospital-reviews-card"}>
          <div style={{ display: "flex" }}>
            <div className="userIconOrFlag">
              <img className="userIconOrFlag-flag" src={userIcon} />
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
                  className={'reviews-stars'}
                  src={Iconstars}
                />
              </div>
              <img
                className="checkIcon"
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
              <div className={'reviews__rating-num'}>
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
              <span className="likeIcon-desc">полезно</span>
            </p>
            <p style={{ color: "#2A353D", margin: "0px" }}>
              <img className="unlikeIcon" src={unlikeIcon} />
              <span className="likeIcon-desc">Бесполезно</span>
            </p>
          </div>
        </div>
        <div className={"hospital-reviews-card"}>
          <div style={{ display: "flex" }}>
            <div className="userIconOrFlag">
              <img className="userIconOrFlag-flag" src={userIcon} />
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
                  className={'reviews-stars'}
                  src={Iconstars}
                />
              </div>
              <img
                className="checkIcon"
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
              <div className={'reviews__rating-num'}>
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
              <span className="likeIcon-desc">полезно</span>
            </p>
            <p style={{ color: "#2A353D", margin: "0px" }}>
              <img className="unlikeIcon" src={unlikeIcon} />
              <span className="likeIcon-desc">Бесполезно</span>
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
      >{count ? <Pagination
        current={parseInt(searchParams.get("page")) || 1}  pageSize={2} onChange={(page)=>{
         searchParams.set("page", page)
         // const newSearch = `?${searchParams.toString()}`;
        setSearchParams(searchParams)

       }}  total={count}
        
       /> : ""}
         
      </div>
  
      <Footer/>
      <ReviewModal add={add} setAdd={setAdd} id={id} openReview={openReview} onCloseReview={onCloseReview}/>
    </div>
  );
};

export default HospitalsReviewsAll;
