import React, { useEffect, useState } from "react";

import { Dropdown, Button, Space, Breadcrumb, Pagination,Rate } from "antd";
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
import experience from "../../assets/Svg/staj.svg";

import russianFlag from "../../assets/Images/russianFlagIcon.png";
import question from "../../assets/Images/question.png";
import heart from "../../assets/Images/heart.png";
import facebook from "../../assets/Images/facebook.png";
import instagram from "../../assets/Images/instagram.png";
import vk from "../../assets/Images/vk.png";
import reviewDoctor from "../../assets/Images/reviewDoctor.png";
import { ArrowRightOutlined, EnvironmentOutlined,StarFilled } from "@ant-design/icons";
import "../FavDoctors/FavDoctors.css";
import FilterButtons from "../FilterButtons/index.js";
import { useSearchParams } from "react-router-dom";
import favoritesDoctorsFetch from "../api/FavoriteDoctorsFetch";
import { useNavigate,Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { axiosPrivate } from "../../api/api";
import { useTranslation } from "react-i18next";
import { FadeLoader } from "react-spinners";
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

const  FavDoctors = () => {
  const {t}=useTranslation()
  const navigate=useNavigate()
  const [searchParams,setSearchParams]=useSearchParams()
  const {user,authToken}=useSelector(state=> state.auth)
  const [activeElement, setActiveElement] = useState(null);
  const [liked,setLiked] = useState(false)
  // const [loading,setLoading]=useState(false)
 

  const {data,setAdd,add,count,loading}=favoritesDoctorsFetch(searchParams.get("page") || null)
  console.log(loading,count);



  const handleClick = (elementId) => {
    setActiveElement(elementId);
   
  };
  const DeleteFromFavorite= async(id)=>{
    setLiked(true)
    axiosPrivate.delete(`card/remove_favorite_doctor/${id}`)
  .then((res) => {
      console.log(res);
      setAdd(!add)
  })
  .catch((err) => {
      setError(err);
  })
      
      
  }

  



  return (
    <>
    <Helmet>
      <meta charSet="utf-8" />
      <title>112MED.ru | Официальный сайт | Клиники, врачи, онлайн-сервис по поиску и бронированию медицинских услуг, выгодные цены </title>
    </Helmet>
      

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
        <div className="displayGridReviewDr doctorss">
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
                  zIndex:1,
                  backgroundColor:"#F2F5FF"
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

          <div className="menuRight">
          
            
            <>{
              loading && !liked ?  <div> <FadeLoader
              color="black"
              className={"loading"}
              loading={true}
              // style={{top:"50px"}}
              size={150}
              aria-label="Loading Spinner"
              data-testid="loader"
            /> </div> : 
           
            <div>
              
             { data?.map((item,index)=>{
                return  <div   className={activeElement ===item.id ? "cardFavDoctors cardFavDoctors-active" : "cardFavDoctors cardFavDoctors"}>
                <div className="display_grid doctor-fav">
                  <img
                    id="favDoctorImage"
                    src={item.doctor.profile_photo}
                  />
                  <img onClick={()=>DeleteFromFavorite(item.doctor.id)}
                    style={{
                      gridColumn: "12/13",
                      gridRow: "1/2",
                      paddingTop: "15px",
                      objectFit: "cover",
                      width: "30px",
                      transform: "translateX(-40px)",
                      zIndex:1,
                      cursor:"pointer"
                    }}
                    id="likeImage"
                    src={heart}
                  />
                </div>
                <div onClick={()=>handleClick(item.id)} className="card-body fav-card-body">
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
                        className="changed favdoctor-position"
                      >
                        {item.doctor.position?.name}
                      </p>
                    </div>
                    <div className="rating-sec" style={{ marginRight: "auto" }}>
                      {" "}
                      <div>
                      <Rate style={{fontSize:"16"}} disabled={true} value={item.hospital?.raiting}/>
                        </div>
                    </div>
                    <div>
                      <p
                        style={{
                          margin: "0 !important",
                          fontSize: "16px",
                          fontWeight: "400",
                        }}
                        className="changed"
                      >
                        Bеликолепно{" "}
                      </p>
                    </div>
                    <div>
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
                        className="changed"
                      >
                        Dr. {item.doctor.first_name} {item.doctor.last_name}
                      </h3>
                      <div className="changed comment-text">
                        <p
                          className="comment changed"
                          style={{ color: "#5282FF", textAlign: "right" }}

                        >
                         <Link className="changed" to={`/doctor-reviews/${item.doctor.id}`} style={{cursor:"pointer"}}><span>{item.doctor.comment_count}</span> отзыва</Link> 
                        </p>
                        Соотношение цена/качество
                      </div>
                    </div>

                    <p
                      style={{
                        color: "#5282FF",
                        fontSize: "14px",
                        margin: "0px",
                        paddingTop: "10px",
                      }}
                    >
                      <EnvironmentOutlined
                        style={{ marginRight: "6px", color: "#5282FF" }}
                      />
                      {item.doctor.hospital?.name}
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
                            borderRadius: "30px",
                            fontSize: "12px",
                            padding: "8px 20px",
                            width: "max-content",
                            textAlign: "center",
                          }}
                        >
                          {item.doctor.position?.name}
                        </p>
                        {item.doctor?.experience ?
                        <p
                          style={{
                            color: "#000",
                            backgroundColor: "#F4F4F4",
                            border: "1px solid #EFEFEF",
                            borderRadius: "30px",
                            fontSize: "12px",
                            padding: "8px 20px",
                            width: "max-content",
                            textAlign: "center",
                            display: "flex",
                            alignItems: "center",
                            gap: "10px",
                          }}
                        >
                          <img src={experience} />
                          {item.doctor.experience}
                        </p>
              : ""}
                      </div>
                      <div>
                        <Button onClick={()=>navigate(`/doctor/${item.doctor.id}`)}
                          style={{
                            width: "max-content",
                            height: "40px",
                            marginBottom: "10px",
                          }}
                          type="primary"
                        >
                       {t("doctorlist")}
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-body fav-card-mob">
                  <div>
                    <div>
                      {" "}
                      <p
                        style={{
                          margin: "0 15px 0 0",
                          paddingTop: "0px !important",
                        }}
                      >
                         {item.doctor.position?.name}
                      </p>
                      <h3
                        style={{
                          color: "#000",
                          fontSize: "24px !important",
                          margin: "0px",
                          paddingTop: "10px",
                        }}
                      >
                        Dr. {item.doctor.first_name} {item.doctor.last_name}
                      </h3>
                      <p
                        style={{
                          color: "#5282FF",
                          fontSize: "14px",
                          margin: "0px",
                          paddingTop: "10px",
                        }}
                        className="hospital-location"
                      >
                        <EnvironmentOutlined
                          style={{ marginRight: "6px", color: "#5282FF" }}
                        />
                        {item.doctor.hospital?.name}
                      </p>
                    </div>
                    <div style={{display:"flex", alignItems:"center",gap:"9px",fontSize:"12px"}}>
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
                      <div>
                      <Rate style={{fontSize:"16"}} disabled={true} value={item.hospital?.raiting}/>
                        </div>
                      <p
                        style={{
                          margin: "0 !important",
                          fontSize: "16px",
                          fontWeight: "400",
                        }}
                      >
                        Bеликолепно{" "}
                      </p>
                      <p
                        style={{ color: "#5282FF", textAlign: "right" }}
                      >
                          <Link className="changed" to={`/doctor-reviews/${item.doctor.id}`} style={{cursor:"pointer"}}><span>{item.doctor.comment_count}</span> отзыва</Link> 
                      </p>
                    </div>
                  </div>
                  <div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}>
                      <div className="comment-text">Соотношение цена/качество</div>
                    </div>
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
                            borderRadius: "30px",
                            fontSize: "12px",
                            padding: "8px 20px",
                            width: "max-content",
                            textAlign: "center",
                          }}
                        >
                           {item.doctor.position?.name}
                        </p>
                        <p
                          style={{
                            color: "#000",
                            backgroundColor: "#F4F4F4",
                            border: "1px solid #EFEFEF",
                            borderRadius: "30px",
                            fontSize: "12px",
                            padding: "8px 10px",
                            width: "max-content",
                            textAlign: "center",
                            display: "flex",
                            alignItems: "center",
                            gap: "10px",
                          }}
                        >
                          <img src={experience} />
                          20 лет опыта
                        </p>
                      </div>
                    </div>
                  </div>
                </div>  
              </div>
              })}
             
             
              

              <div className={'review-doctors-pagination'}>
              {count ? <Pagination
        current={parseInt(searchParams.get("page")) || 1}  pageSize={2} onChange={(page)=>{
         searchParams.set("page", page)
         // const newSearch = `?${searchParams.toString()}`;
        setSearchParams(searchParams)

       }}  total={count}
        
       /> :  <div style={{textAlign:"center"}}> {t("nothingfound")} </div>}
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

export default FavDoctors;
