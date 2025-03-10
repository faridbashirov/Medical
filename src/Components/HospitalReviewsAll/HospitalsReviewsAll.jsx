import React from "react";
import { Button, Breadcrumb, Pagination,Rate } from "antd";
import { EnvironmentOutlined } from "@ant-design/icons";
import { FadeLoader } from "react-spinners";
import Iconstars from "../../assets/Svg/starIcon.svg";
import SingleStar from "../../assets/Svg/singleStar.svg";
import userIcon from "../../assets/Svg/userIcon.svg";
import userflag from "../../assets/Svg/userFlag.svg";
import check from "../../assets/Svg/check.svg";
import likeIcon from "../../assets/Svg/likeIcon.svg";
import unlikeIcon from "../../assets/Svg/unLikeIcon.svg";
import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import "../HospitalReviewsAll/HospitalsReviewsAll.css";
import { hospitalReviewsFetch } from "../api/hospitalReviews";
import DetailFetch from "../api/hospitalDetailFetch";
import ReviewModal from "./ReviewModal";
import { useSearchParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import { Helmet } from "react-helmet";


const HospitalsReviewsAll = () => {
  const {t}=useTranslation()
    const {id}=useParams()   
    const {user}=useSelector((state) => state.auth)
    const [reviews,setReviews]=useState([])
    const [loading,setLoading]=useState(false)
    const [searchParams,setSearchParams]=useSearchParams()
    const [openReview, setOpenReview] = useState(false)
    const [add,setAdd] = useState(false)
    const [count,setCount] = useState(null)


   const {hospital,error}=DetailFetch(id,i18next.language)
    const reviewOpen=()=>{
      setOpenReview(true)

    }
    const onCloseReview = () =>{
      setOpenReview(false)
    }
    
     
     useEffect(()=>{
      setLoading(true)
        const getReviews= async(id)=>{
        const data=await hospitalReviewsFetch(id,searchParams.get("page") || null,localStorage.getItem("lang"))
      
       
        setReviews(data.results)
        setCount(data.count)
        setLoading(false)

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
    <>
    <Helmet>
      <meta charSet="utf-8" />
      <title>112MED.ru | Официальный сайт | Клиники, врачи, онлайн-сервис по поиску и бронированию медицинских услуг, выгодные цены </title>
    </Helmet>
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
                    <div className="rating-stars-section" style={{ display: "flex", justifyContent: "center" }}>
                      <img className="rating-stars"
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
          {user ?
                  <Button onClick={()=>  reviewOpen()}
                    className={"featured-btn-review"}
                    type="primary"
                  >
                    {t("writecomment")}
                  </Button>
                  : ""}
            <Button  onClick={()=>window.open(hospital.map_url)}
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
          {loading ? <div style={{padding:"50px"}}> <FadeLoader
          color="black"
          className={"loading"}
          loading={true}
          // style={{top:"50px"}}
          size={150}
          aria-label="Loading Spinner"
          data-testid="loader"
        /> </div> :<div> { reviews.map((item,index)=>{
            return <> <div key={index} className={"hospital-reviews-card"}>
            <div style={{ display: "flex",alignItems:"start" }}>
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
                <div style={{display:"flex",alignItems:"center"}}>
                  <p className={'reviews-name'} style={{marginTop:"0"}}>
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
              <img
                  className="checkIcon"
                  src={check}
                />
                <p  className={"reviews-category"} style={{margin:"0"}}>
                  Травмотология
                </p>
              </div>
                     <Rate style={{fontSize:"16"}} disabled={true} value={item?.rate}/>
              
                 
                </div>
                
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
           </>
          })}
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
           
          /> : <div style={{marginTop:"10"}}>{t("nocomments")}</div>}
            
         </div>
          </div>
        
        /* <div className={"hospital-reviews-card"}>
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
      <ReviewModal add={add} setAdd={setAdd} id={id} openReview={openReview} onCloseReview={onCloseReview}/>
    </div>
    </>
  );
};

export default HospitalsReviewsAll;
