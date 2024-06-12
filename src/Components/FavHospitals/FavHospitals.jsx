import React,{useState} from "react";
import { Dropdown, Button, Space, Breadcrumb, Pagination,Rate} from "antd";
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
import Sponsored from "../../assets/Svg/sponsored.svg";
import { axiosPrivate } from "../../api/api";
import russianFlag from "../../assets/Images/russianFlagIcon.png";
import question from "../../assets/Images/question.png";
import heart from "../../assets/Images/heart.png";
import facebook from "../../assets/Images/facebook.png";
import instagram from "../../assets/Images/instagram.png";
import vk from "../../assets/Images/vk.png";
import FavoriteHospitals from "../../assets/Images/FavoriteHospitals.png";
import { ArrowRightOutlined, EnvironmentOutlined,StarFilled } from "@ant-design/icons";
import "../FavHospitals/FavHospitals.css";
import FilterButtons from "../FilterButtons/index.js";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import favoritesFetch from "../api/favoriteHospitalsFetch";
import I18nextBrowserLanguageDetector from "i18next-browser-languagedetector";
import { useTranslation } from "react-i18next";
import { FadeLoader } from "react-spinners";
import { Trans } from "react-i18next";
import { Helmet } from "react-helmet";

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

const FavHospitals = () => {
  const {t}=useTranslation()
  const navigate=useNavigate()
  const {user,authToken}=useSelector(state=> state.auth)
  const [activeElement, setActiveElement] = useState(null);
  console.log(authToken?.access);
  const [searchParams,setSearchParams] = useSearchParams()
  const [liked,setLiked]=useState(false)
  const handleClick = (elementId) => {
    setActiveElement(elementId);
   
  };

  const {data,setAdd,add,loading,count}=favoritesFetch(searchParams.get("page") || null)
  console.log(data,count);

  const DeleteFromFavorite= async(id)=>{
    
    setLiked(true)
    axiosPrivate.delete(`card/remove_favorite/${id}`)
    .then((res) => {
        console.log(res);
        setAdd(!add)
    })
    .catch((err) => {
       console.log(err);
    })

   
      
  }



  return (
    <>
      <Helmet>
      <meta charSet="utf-8" />
      <title>112MED.ru | Официальный сайт | Клиники, врачи, онлайн-сервис по поиску и бронированию медицинских услуг, выгодные цены </title>
    </Helmet>

      <div style={{ paddingTop: "30px" }} className="container">
        <div className={'breadcrumbs'}>
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
        <div className="displayGridReviewDr displaygridhospital">
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
                  cursor:"pointer",
                  backgroundColor:"#F2F5FF"
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

          <div className="menuRight" style={{width:"100%"}}>
          <>
          {loading && !liked ?  <div> <FadeLoader
              color="black"
              className={"loading"}
              loading={true}
              // style={{top:"50px"}}
              size={150}
              aria-label="Loading Spinner"
              data-testid="loader"
            /> </div> : 
           
            
          
            <div style={{width:"100%"}}>
              { data.map((item,index)=>{
                return  <div    className={activeElement ===item.id ? "hospitalcard hospital-card-active cardReviewDoctors cardReviewDoctors-active" : "cardReviewDoctors cardReviewDoctors hospitalcard"} >
                <div className="display_grid img-wrapper">
                  <img
                    className={"cardFavHospitals-img"}
                    id="hospitalsImage"
                    src={item.hospital.main_image}
                  />
                  <img id="sponsoredImage" src={Sponsored} />
                  <img onClick={()=> DeleteFromFavorite(item.hospital.id)}   id="likeImageFavHospitals" src={heart} />
                </div>
                <div onClick={()=>handleClick(item.id)}
                  style={{ width: "769px", paddingLeft: "167px" }}
                  className="card-body hospitalcardbody card-content"
                >
                  <div className="card-headerrr"
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "flex-start",
                      paddingTop: "10px",
                    }}
                  >
                    <h3
                      style={{
                        margin: "0px",
                        paddingLeft: "15px",
                      }}
                      className="changed"
                    >
                      {item.hospital.name}
                    </h3>
                    <div style={{ display: "flex", gap: "10px" }}>
                      
                      <p style={{ margin: "0px", color: "white" }}>Hеплохо</p>
                      
                      <p className="review-average"
                        style={{
                          backgroundColor: "#FFC224",
                          color: "#000",
                          width: "29.16px",
                          height: "21.53px",
                          borderRadius: "2.5px",
                          textAlign: "center",
                          margin: "0px",
                        }}
                      >
                        6.0
                      </p>
                    </div>
                  </div>
                  <div className="header-card"
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      width:"100%",
                      position: "relative",
                      alignItems: "baseline",
                    }}
                  >
                    <div  className="card-section1" 
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                        paddingLeft: "15px",
                      }}
                    >
                      <p
                        style={{
                          fontSize: "14px",
                          margin: "0px",
                        }}
                        className="changed"
                      >
                        <EnvironmentOutlined
                         className="" style={{ marginRight: "6px",  }}
                        />
                        {item.hospital.location}
                      </p>
                      <a   className="changed" href={item.hospital.map_url} style={{ margin: "0px"}}>
                        {t("map")}
                      </a>
                    </div>
                    <div className="card-section2">
                      <p
                        className="comment_hospitals"
                        style={{ color: "#FFFF", textAlign: "right" }}
                      >
                        <Link   className="changed" to={`/hospital-reviews/${item.hospital.id}`} style={{  }} href="#">
                        {item.hospital.comment_count} {t("comments")}
                        </Link>
                      </p>
                      <p   className="changed" style={{ margin: "0px" }}>
                        Соотношение цена/качество
                      </p>
                    </div>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                      paddingLeft: "15px",
                    }}
                    className="card-buttons"
                  >
                    <div className="card-buttonn1"
                      style={{
                        backgroundColor: "#E9ECFF",
                        borderRadius: "5px",
                        width: "143px",
                        height: "43px",
                      }}
                    >
                      <p className="card-buttonn1"
                        style={{
                          fontSize: "12px",
                          textAlign: "center",
                          margin: "8px",
                          paddingLeft: "12px",
                        }}
                      >
                          <Trans i18nKey="hosbooking"></Trans> - 40%
                      </p>
                    </div>
                    <div className="card-buttonn2"
                      style={{
                        backgroundColor: "#D8F5DD",
                        borderRadius: "5px",
                        width: "143px",
                        height: "40px",
                        paddingLeft: "12px",
                      }}
                    >
                      <p style={{ fontSize: "12px", textAlign: "center" }}>
                      {t("hoslistbooking2")} 100%
                      </p>
                    </div>
                  </div>
                  <div className="card-desc-section"
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "flex-end",
                    }}
                  >
                    <div className="desc-section"
                      style={{
                        backgroundColor: "#FFFF",
                        borderRadius: "5px",
                        border: "1px solid #EFEFEF",
                        width: "384px",
                        marginTop: "10px",
                      }}
                    >
                      <p
                        style={{
                          //   textAlign: "justify",
                          fontSize: "12px",
                          margin: "10px",
                          lineHeight: "18px",
                        }}
                      >
                         <Trans i18nKey="hoslistbooking3"></Trans>
                      </p>
                    </div>
                    <div>
                      <Button on onClick={()=> navigate(`/hospital/${item.hospital.id}`)}
                        
                        style={{
                          backgroundColor: "#FFFF",
                          borderRadius: "5px",
                          width: "155px",
                          height: "40px",
                          color: "black",
                        }}
                        type="primary"
                      >
                       {t("hoslistbooking4")}
                      </Button>
                    </div>
                  </div>
                </div>
                <div
                  className="card-content-mobile"
                  onClick={()=>handleClick(item.id)}
                >
                  <div className="card-header"
                    style={{
                      paddingTop: "10px",
                    }}
                  >
                    <p
                      style={{
                        color: "white",
                        fontSize: "14px",
                      }}
                    >
                      <EnvironmentOutlined
                        style={{ marginRight: "6px"}}
                      />
                      {item.hospital.location}
                    </p>
                    <h3
                      style={{
                        margin: "0px",
                        color: "white",
                        paddingLeft: "15px",
                      }}
                    >
                      {item.hospital.name}
                    </h3>
                    <div className="rating-section" style={{ display: "flex", gap: "10px", alignItems:"center" }}>
                      <p className="review-average"
                        style={{
                          backgroundColor: "#FFC224",
                          color: "#000",
                          width: "29.16px",
                          height: "21.53px",
                          borderRadius: "2.5px",
                          textAlign: "center",
                          margin: "0px",
                        }}
                      >
                        6.0
                      </p>
                      <div>
                      <Rate style={{fontSize:"16"}} disabled={true} value={item.hospital?.raiting}/>
                        </div>
                      <p style={{ margin: "0px", color: "white" }}>Hеплохо</p>
                      <p
                        style={{ color: "#FFFF", textAlign: "right" }}
                      >
                        <a style={{ color: "#FFFF" }} href="#">
                        {item.hospital.comment_count} {t("comments")}
                        </a>
                      </p>
                    </div>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent:"space-between"
                    }}
                    className="card-buttons"
                  >
                    <div
                      style={{
                        backgroundColor: "#E9ECFF",
                        borderRadius: "5px",
                        width: "143px",
                        height: "40px",
                      }}
                    >
                      <p className="card-buttonn1"
                        style={{
                          fontSize: "12px",
                          textAlign: "center",
                          margin: "8px",
                        }}
                      >
                         <Trans i18nKey="hosbooking"></Trans> - 40%
                      </p>
                    </div>
                    <div className="card-buttonn2"
                      style={{
                        backgroundColor: "#D8F5DD",
                        borderRadius: "5px",
                        width: "143px",
                        height: "40px",
                      }}
                    >
                      <p style={{ fontSize: "12px", textAlign: "center" }}>
                      {t("hoslistbooking2")} 100%
                      </p>
                    </div>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "flex-end",
                    }}
                  >
                    <div className="card-desc-mobile"
                      style={{
                        backgroundColor: "#FFFF",
                        borderRadius: "5px",
                        border: "1px solid #EFEFEF",
                        marginTop: "10px",
                      }}
                    >
                      <p
                        style={{
                          //   textAlign: "justify",
                          fontSize: "12px",
                          margin: "10px",
                          lineHeight: "18px",
                        }}
                      >
                        <Trans i18nKey="hoslistbooking3"></Trans>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              })}
             
              {/* <div className="cardReviewDoctors">
                <div className="display_grid img-wrapper">
                  <img
                    className={"cardFavHospitals-img"}
                    id="hospitalsImage"
                    src={FavoriteHospitals}
                  />
                  <img id="sponsoredImage" src={Sponsored} />
                  <img id="likeImageFavHospitals" src={likeReview} />
                </div>
                <div
                  style={{ width: "769px", paddingLeft: "110px" }}
                  className="card-body card-content"
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "flex-start",
                      paddingTop: "10px",
                    }}
                  >
                    <h3
                      style={{
                        margin: "0px",
                        paddingLeft: "15px",
                      }}
                    >
                      LuviMed
                    </h3>
                    <div style={{ display: "flex", gap: "10px" }}>
                      <p style={{ margin: "0px"}}>Hеплохо</p>

                      <p
                        style={{
                          backgroundColor: "#FFC224",
                          color: "#000",
                          width: "29.16px",
                          height: "21.53px",
                          borderRadius: "2.5px",
                          textAlign: "center",
                          margin: "0px",
                        }}
                      >
                        6.0
                      </p>
                    </div>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "baseline",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                        paddingLeft: "15px",
                      }}
                    >
                      <p
                        style={{
                          fontSize: "14px",
                          margin: "0px",
                        }}
                      >
                        <EnvironmentOutlined
                          style={{ marginRight: "6px" }}
                        />
                        Бейоглу, Стамбул
                      </p>
                      <a href="#" style={{ margin: "0px" }}>
                        Показать на карте
                      </a>
                    </div>
                    <div>
                      <p
                        className="comment_hospitals"
                        style={{ textAlign: "right" }}
                      >
                        <a style={{ color: "#000" }} href="#">
                          45 отзыва
                        </a>
                      </p>
                      <p style={{ margin: "0px" }}>
                        Соотношение цена/качество
                      </p>
                    </div>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                      paddingLeft: "15px",
                    }}
                  >
                    <div
                      style={{
                        backgroundColor: "#E9ECFF",
                        borderRadius: "5px",
                        width: "143px",
                        height: "43px",
                      }}
                    >
                      <p
                        style={{
                          fontSize: "12px",
                          textAlign: "center",
                          margin: "8px",
                          paddingLeft: "12px",
                        }}
                      >
                        При бронировании <br /> на сайте - 40%
                      </p>
                    </div>
                    <div
                      style={{
                        backgroundColor: "#E9ECFF",
                        borderRadius: "5px",
                        width: "143px",
                        height: "43px",
                        paddingLeft: "12px",
                      }}
                    >
                      <p style={{ fontSize: "12px", textAlign: "center" }}>
                        B клинике 100%
                      </p>
                    </div>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "flex-end",
                    }}
                  >
                    <div
                      style={{
                        backgroundColor: "#FFFF",
                        borderRadius: "5px",
                        border: "1px solid #EFEFEF",
                        width: "384px",
                        marginTop: "10px",
                      }}
                    >
                      <p
                        style={{
                          //   textAlign: "justify",
                          fontSize: "12px",
                          margin: "10px",
                          lineHeight: "18px",
                        }}
                      >
                        Дешевле, чем в клинике <br /> Бронируйте сейчас по
                        фиксированной цене, платитe потом Без предоплаты
                        БЕСПЛАТНАЯ отмена бронирования. Клиника подписала
                        договор и обязана соблюдать условия
                      </p>
                    </div>
                    <div>
                      <Button
                        style={{
                          backgroundColor: "#FFFF",
                          borderRadius: "5px",
                          width: "155px",
                          height: "40px",
                          color: "black",
                        }}
                        type="primary"
                      >
                        Посмотреть услуги
                      </Button>
                    </div>
                  </div>
                </div>
                <div
                  className="card-content-mobile"
                >
                  <div
                    style={{
                      paddingTop: "10px",
                    }}
                  >
                    <p
                      style={{
                        fontSize: "14px",
                      }}
                    >
                      <EnvironmentOutlined
                        style={{ marginRight: "6px", }}
                      />
                      Бейоглу, Стамбул
                    </p>
                    <h3
                      style={{
                        margin: "0px",
                        paddingLeft: "15px",
                      }}
                    >
                      LuviMed
                    </h3>
                    <div style={{ display: "flex", gap: "10px", alignItems:"center" }}>
                      <p
                        style={{
                          backgroundColor: "#FFC224",
                          color: "#000",
                          width: "29.16px",
                          height: "21.53px",
                          borderRadius: "2.5px",
                          textAlign: "center",
                          margin: "0px",
                        }}
                      >
                        6.0
                      </p>
                      <img src={Iconstars} />
                      <p style={{ margin: "0px", }}>Hеплохо</p>
                      <p
                        style={{ textAlign: "right" }}
                      >
                        <a style={{ color: "#000" }} href="#">
                          45 отзыва
                        </a>
                      </p>
                    </div>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent:"space-between"
                    }}
                  >
                    <div
                      style={{
                        backgroundColor: "#E9ECFF",
                        borderRadius: "5px",
                        width: "143px",
                        height: "43px",
                      }}
                    >
                      <p
                        style={{
                          fontSize: "12px",
                          textAlign: "center",
                          margin: "8px",
                          paddingLeft: "12px",
                        }}
                      >
                        При бронировании <br /> на сайте - 40%
                      </p>
                    </div>
                    <div
                      style={{
                        backgroundColor: "#E9ECFF",
                        borderRadius: "5px",
                        width: "143px",
                        height: "43px",
                        paddingLeft: "12px",
                      }}
                    >
                      <p style={{ fontSize: "12px", textAlign: "center" }}>
                        B клинике 100%
                      </p>
                    </div>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "flex-end",
                    }}
                  >
                    <div
                      style={{
                        backgroundColor: "#FFFF",
                        borderRadius: "5px",
                        border: "1px solid #EFEFEF",
                        marginTop: "10px",
                      }}
                    >
                      <p
                        style={{
                          //   textAlign: "justify",
                          fontSize: "12px",
                          margin: "10px",
                          lineHeight: "18px",
                        }}
                      >
                        Дешевле, чем в клинике <br /> Бронируйте сейчас по
                        фиксированной цене, платитe потом Без предоплаты
                        БЕСПЛАТНАЯ отмена бронирования. Клиника подписала
                        договор и обязана соблюдать условия
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="cardReviewDoctors">
                <div className="display_grid img-wrapper">
                  <img
                    className={"cardFavHospitals-img"}
                    id="hospitalsImage"
                    src={FavoriteHospitals}
                  />
                  <img id="sponsoredImage" src={Sponsored} />
                  <img id="likeImageFavHospitals" src={likeReview} />
                </div>
                <div
                  style={{ width: "769px", paddingLeft: "110px" }}
                  className="card-body card-content"
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "flex-start",
                      paddingTop: "10px",
                    }}
                  >
                    <h3
                      style={{
                        margin: "0px",
                        paddingLeft: "15px",
                      }}
                    >
                      LuviMed
                    </h3>
                    <div style={{ display: "flex", gap: "10px" }}>
                      <p style={{ margin: "0px"}}>Hеплохо</p>

                      <p
                        style={{
                          backgroundColor: "#FFC224",
                          color: "#000",
                          width: "29.16px",
                          height: "21.53px",
                          borderRadius: "2.5px",
                          textAlign: "center",
                          margin: "0px",
                        }}
                      >
                        6.0
                      </p>
                    </div>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "baseline",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                        paddingLeft: "15px",
                      }}
                    >
                      <p
                        style={{
                          fontSize: "14px",
                          margin: "0px",
                        }}
                      >
                        <EnvironmentOutlined
                          style={{ marginRight: "6px" }}
                        />
                        Бейоглу, Стамбул
                      </p>
                      <a href="#" style={{ margin: "0px" }}>
                        Показать на карте
                      </a>
                    </div>
                    <div>
                      <p
                        className="comment_hospitals"
                        style={{ textAlign: "right" }}
                      >
                        <a style={{ color: "#000" }} href="#">
                          45 отзыва
                        </a>
                      </p>
                      <p style={{ margin: "0px" }}>
                        Соотношение цена/качество
                      </p>
                    </div>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                      paddingLeft: "15px",
                    }}
                  >
                    <div
                      style={{
                        backgroundColor: "#E9ECFF",
                        borderRadius: "5px",
                        width: "143px",
                        height: "43px",
                      }}
                    >
                      <p
                        style={{
                          fontSize: "12px",
                          textAlign: "center",
                          margin: "8px",
                          paddingLeft: "12px",
                        }}
                      >
                        При бронировании <br /> на сайте - 40%
                      </p>
                    </div>
                    <div
                      style={{
                        backgroundColor: "#E9ECFF",
                        borderRadius: "5px",
                        width: "143px",
                        height: "43px",
                        paddingLeft: "12px",
                      }}
                    >
                      <p style={{ fontSize: "12px", textAlign: "center" }}>
                        B клинике 100%
                      </p>
                    </div>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "flex-end",
                    }}
                  >
                    <div
                      style={{
                        backgroundColor: "#FFFF",
                        borderRadius: "5px",
                        border: "1px solid #EFEFEF",
                        width: "384px",
                        marginTop: "10px",
                      }}
                    >
                      <p
                        style={{
                          //   textAlign: "justify",
                          fontSize: "12px",
                          margin: "10px",
                          lineHeight: "18px",
                        }}
                      >
                        Дешевле, чем в клинике <br /> Бронируйте сейчас по
                        фиксированной цене, платитe потом Без предоплаты
                        БЕСПЛАТНАЯ отмена бронирования. Клиника подписала
                        договор и обязана соблюдать условия
                      </p>
                    </div>
                    <div>
                      <Button
                        style={{
                          backgroundColor: "#FFFF",
                          borderRadius: "5px",
                          width: "155px",
                          height: "40px",
                          color: "black",
                        }}
                        type="primary"
                      >
                        Посмотреть услуги
                      </Button>
                    </div>
                  </div>
                </div>
                <div
                  className="card-content-mobile"
                >
                  <div
                    style={{
                      paddingTop: "10px",
                    }}
                  >
                    <p
                      style={{
                        fontSize: "14px",
                      }}
                    >
                      <EnvironmentOutlined
                        style={{ marginRight: "6px", }}
                      />
                      Бейоглу, Стамбул
                    </p>
                    <h3
                      style={{
                        margin: "0px",
                        paddingLeft: "15px",
                      }}
                    >
                      LuviMed
                    </h3>
                    <div style={{ display: "flex", gap: "10px", alignItems:"center" }}>
                      <p
                        style={{
                          backgroundColor: "#FFC224",
                          color: "#000",
                          width: "29.16px",
                          height: "21.53px",
                          borderRadius: "2.5px",
                          textAlign: "center",
                          margin: "0px",
                        }}
                      >
                        6.0
                      </p>
                      <img src={Iconstars} />
                      <p style={{ margin: "0px", }}>Hеплохо</p>
                      <p
                        style={{ textAlign: "right" }}
                      >
                        <a style={{ color: "#000" }} href="#">
                          45 отзыва
                        </a>
                      </p>
                    </div>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent:"space-between"
                    }}
                  >
                    <div
                      style={{
                        backgroundColor: "#E9ECFF",
                        borderRadius: "5px",
                        width: "143px",
                        height: "43px",
                      }}
                    >
                      <p
                        style={{
                          fontSize: "12px",
                          textAlign: "center",
                          margin: "8px",
                          paddingLeft: "12px",
                        }}
                      >
                        При бронировании <br /> на сайте - 40%
                      </p>
                    </div>
                    <div
                      style={{
                        backgroundColor: "#E9ECFF",
                        borderRadius: "5px",
                        width: "143px",
                        height: "43px",
                        paddingLeft: "12px",
                      }}
                    >
                      <p style={{ fontSize: "12px", textAlign: "center" }}>
                        B клинике 100%
                      </p>
                    </div>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "flex-end",
                    }}
                  >
                    <div
                      style={{
                        backgroundColor: "#FFFF",
                        borderRadius: "5px",
                        border: "1px solid #EFEFEF",
                        marginTop: "10px",
                      }}
                    >
                      <p
                        style={{
                          //   textAlign: "justify",
                          fontSize: "12px",
                          margin: "10px",
                          lineHeight: "18px",
                        }}
                      >
                        Дешевле, чем в клинике <br /> Бронируйте сейчас по
                        фиксированной цене, платитe потом Без предоплаты
                        БЕСПЛАТНАЯ отмена бронирования. Клиника подписала
                        договор и обязана соблюдать условия
                      </p>
                    </div>
                  </div>
                </div>
              </div> */}
        <div className={'review-doctors-pagination'}>
{count ? <Pagination style={{textAlign:"center"}}
        current={parseInt(searchParams.get("page")) || 1}  pageSize={2} onChange={(page)=>{
         searchParams.set("page", page)
         
        setSearchParams(searchParams)

       }}  total={count}
        
       />  : <div style={{textAlign:"center"}}> {t("nothingfound")} </div>}
             </div>
              
            </div>
            
            
          
}
          </>
        </div>
          
        </div>
      </div>
    </>
  );
};

export default FavHospitals;
