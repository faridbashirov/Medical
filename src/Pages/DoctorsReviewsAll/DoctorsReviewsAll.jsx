import React,{useEffect,useState} from "react";
import { Button,Breadcrumb, Pagination, Rate } from "antd";
import { EnvironmentOutlined } from "@ant-design/icons";
import { FadeLoader } from "react-spinners";
import userIcon from "../../assets/Svg/userIcon.svg";
import userflag from "../../assets/Svg/userFlag.svg";
import check from "../../assets/Svg/check.svg";
import likeIcon from "../../assets/Svg/likeIcon.svg";
import unlikeIcon from "../../assets/Svg/unLikeIcon.svg";
import experience from "../../assets/Svg/staj.svg";
import DrFB from "../../assets/Svg/DrFB.svg";
import DrVK from '../../assets/Svg/DrVK.svg';
import DrLn from "../../assets/Svg/DrLn.svg";
import DoctorDetailFetch from "../../Components/api/doctorDetail";
import "../DoctorsReviewsAll/DoctorsReviewsAll.css";
import { useParams, useSearchParams } from "react-router-dom";
import { doctorReviewsFetch } from "../../Components/api/doctorReviews";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import ReviewModal from "./ReviewModal";
import { useTranslation } from 'react-i18next';
import i18next from "i18next";
import DoctorBookingModal from "../DoctorDetail/DoctorBookingModal";
import { Helmet } from "react-helmet";
import BreadCrumbs from "../../Components/BreadCrumbs";

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
  const [loading,setLoading]=useState(false)

  const onOpenBookingModal = () => {
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
  


  const {data,error,review}=DoctorDetailFetch(id,localStorage.getItem("lang")) 
  
  const reviewOpen=()=>{
    setOpenReview(true)

  }
  const onCloseReview = () =>{
    setOpenReview(false)
  }
  
   
   useEffect(()=>{

    
      setLoading(true)
      const getReviews= async(id)=>{
        const res=await doctorReviewsFetch(id,searchParams.get("page") || null)     
      setReviews(res.results)
      setCount(res.count)
      setLoading(false)

    }
    getReviews(id)
},[id,searchParams,add,i18next.language ])



if(error){
  return <div>error </div>
}


  
  return (

    <> 
    <Helmet>
      <meta charSet="utf-8" />
      <title>112MED.ru | Официальный сайт | Клиники, врачи, онлайн-сервис по поиску и бронированию медицинских услуг, выгодные цены </title>
    </Helmet>
     {
       
       <div style={{ backgroundColor: "#F4F4F4" }}>
        
      

      <div className="container">
        <div className='container'>
          <BreadCrumbs pageItems={[
              {
                title: t("home"),
                href: "/",
              },
              {
                title: t("Doctors"),
                href: "/doctors"
              },
              {
                title: t("comments"),
                href: ""
              },
          ]}/>
        </div>
        <div
          className=" doc-review-card"
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
                
                <Rate style={{fontSize:"16"}} disabled={true} value={data?.raiting}/>
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

                <p className="location-name"
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
                    <p className="doc-card-btn"
                      style={{
                        color: "#000",
                        backgroundColor: "#F4F4F4",
                        border: "1px solid #EFEFEF",
                        borderRadius: "30px",
                        fontSize: "12px",
                        padding: "10px 10px",
                        width: "max-content",
                        textAlign: "center",
                      }}
                    >
                      Сосудистая хирургия
                    </p>
                    {data.experience ? <p className="doc-card-btn"
                      style={{
                        color: "#000",
                        backgroundColor: "#F4F4F4",
                        border: "1px solid #EFEFEF",
                        borderRadius: "30px",
                        fontSize: "12px",
                        padding: "10px 10px",
                        width: "max-content",
                        textAlign: "center",
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                        marginTop:"19px"
                      }}
                    >
                      <img src={experience} style={{marginTop:"-5px"}}/>
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
                      onClick={onOpenBookingModal}
                      className={"doc-card-btn-1"}
                        type="primary"
                      >
                       {t("onlinebooking")}
                      </Button>
                      
                      {user ?
                      <Button  onClick={reviewOpen}
                      className={"doc-card-btn-1"}
                        type="primary"
                      >
                      {t("writecomment")}
                      </Button>
:""}
           
          </div>
        </div>
        
        { loading ? <div style={{padding:"50px"}}> <FadeLoader
          color="black"
          className={"loading"}
          loading={true}
          // style={{top:"50px"}}
          size={150}
          aria-label="Loading Spinner"
          data-testid="loader"
        /> </div>: <div> {reviews.map((item,index)=>{
          return <div key={index} className={"hospital-reviews-card"}>
          <div style={{ display: "flex",alignItems:"start"}}>
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
                <div style={{display:"flex",alignItems:"center"}}>
                <p className={'reviews-name'} style={{margin:"0"}}>
                 {item.user.first_name}
                </p>
                <img
                className="checkIcon"
                style={{ paddingTop: "0", marginRight: "8px" }}
                src={check}
              />
              <p className={"reviews-category"} style={{margin:"0"}}>
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
              <div className="review-average"
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
        <p className="review-content"> {item.text}</p> 
          <div className={"reviews-reacts"}>
            <p style={{ color: "#BCBCBC", marginRight: "auto" }}>
              {item.created_date}
            </p>
            <div className="review-icons">
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
        </div>
        })}
        </div>
        
        }
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
        
       /> : <div style={{marginTop:"10"}}>{t("nocomments")}</div>}
      </div>

    
      
      <ReviewModal add={add} setAdd={Setadd} id={id} openReview={openReview} onCloseReview={onCloseReview}/>
      <DoctorBookingModal openBooking={openBooking} onCloseBookingModal={onCloseBookingModal}/>
    </div>
    }</>
   
  );
};

export default DoctorsReviewsAll;
