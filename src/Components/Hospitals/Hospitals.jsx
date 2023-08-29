import React, {useEffect, useState,useRef} from "react";

import {
  Dropdown,
  Button,
  Space,
  Breadcrumb,
  Pagination,
  Collapse,
  Checkbox,
} from "antd";
import { FadeLoader } from "react-spinners";
import Vector from "../../assets/Images/Vector.svg";
import USD from "../../assets/Svg/usdIcon.svg";
import EUO from "../../assets/Svg/GroupEuro.svg";
import POU from "../../assets/Svg/GroupPound.svg";
import RUB from "../../assets/Svg/rub.svg";
import azFlag from "../../assets/Svg/azFlag.svg";
import trFlag from "../../assets/Svg/trFlag.svg";
import absFlag from "../../assets/Svg/absFlag.svg";
import likeReview from "../../assets/Svg/reviewLike.svg";
import Sponsored from "../../assets/Svg/sponsored.svg";
import russianFlag from "../../assets/Images/russianFlagIcon.png";
import question from "../../assets/Images/question.png";
import heart from "../../assets/Images/heart.png";
import facebook from "../../assets/Images/facebook.png";
import instagram from "../../assets/Images/instagram.png";
import vk from "../../assets/Images/vk.png";
import FavoriteHospitals from "../../assets/Images/FavoriteHospitals.png";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { ArrowRightOutlined, EnvironmentOutlined, FilterFilled } from "@ant-design/icons";
import { axiosPrivate } from "../../api/api";
import "../FavHospitals/FavHospitals.css";
import "./Hospitals.css"
import Iconstars from "../../assets/Svg/starIcon.svg";
import Header from "../Header/index.js";
import Footer from "../Footer/index.js";
import LoginModal from "../LoginModal/index.js";
import RegisterModal from "../RegisterModal/index.js";
import PageLoginBox from "../PageLoginBox/index.js";
import FilterButtons from "../FilterButtons/index.js";
import { useParams } from "react-router-dom";
import Search from "antd/es/transfer/search";
import { mainFilterSearch } from "../api/mainFilterFetch";
import { allhospitalFetch } from "../api/allhospitalsFetch";
import { useLocation } from "react-router-dom";
import { allFilterSearch } from "../api/allFilterSearch";
import { useSelector } from "react-redux";
import axios from "axios";
import { useTranslation } from "react-i18next";
import { Trans } from "react-i18next";
import { allCountriesFetch } from "../api/allCountries";
import i18next from "i18next";

import favoritesFetch from "../api/favoriteHospitalsFetch";

const { Panel } = Collapse;



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

const  Hospitals = () => {

  const navigate=useNavigate()
  

  const {t}=useTranslation()
  const [searchParams,setSearchParams] = useSearchParams()
  const [selectedCountryValue, setSelectedCountryValue] = useState(searchParams.get("country")? searchParams.get("country").split(",") : []);
  const [selectedRaitingValue, setSelectedRaitingValue] = useState(searchParams.get("raiting")? searchParams.get("raiting").split(",") : []);
  const [checkedValue, setCheckedValue] = useState(searchParams.get("type")? searchParams.get("type") : "clinic");
  const [hospitals,setHospitals]=useState([])
  const [country,setCountry]=useState([])
  const [name,setName]=useState(searchParams.get("name") ? searchParams.get("name") : "")
  const [count,setCount] = useState(0)
  const {user,authToken}=useSelector(state=> state.auth)
  const [add,setAdd] = useState(false)
  const [liked,setLiked] = useState(false)
  const [activeElement, setActiveElement] = useState(0);
  const [loading, setLoading] = useState(false)
  console.log(hospitals);
  
  const handleClick = (elementId) => {
    setActiveElement(elementId);
   
  };
  
  
  searchParams.set("type",checkedValue)




    
const AddToFavorite= async(id)=>{
  setLiked(true)

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
  const CountryChange = (value) => {
    console.log(value);
    setSelectedCountryValue(value);
    searchParams.delete("page");
    searchParams.delete("location")
    searchParams.delete("name")
     
    if (value.length === 0) {
      searchParams.delete("country");
    
    } else {
      searchParams.set("country", value);
    }
    
    const newSearch = `?${searchParams.toString()}`;
    navigate({ search: newSearch });
    };
  const raitingChange = (value) => {
    console.log(value);
    setSelectedRaitingValue(value);
    searchParams.delete("page");
    searchParams.delete("location")
    searchParams.delete("name")
     
    if (value.length === 0) {
      searchParams.delete("raiting");
    
    } else {
      searchParams.set("raiting", value);
    }
    
    const newSearch = `?${searchParams.toString()}`;
    navigate({ search: newSearch });
    };
  

    const handleCheckboxChange = (e) => {
      const { value } = e.target;
      setCheckedValue(value);
      searchParams.set("type", value);
      if(e.target.value ==="doctor"){
       
        searchParams.delete("name")
        searchParams.delete("location")
        searchParams.delete("page")
        searchParams.delete("country")
        searchParams.delete("raiting")
        const newSearch = `?${searchParams.toString()}`;
        navigate({ pathname:"/doctors",search: newSearch });
        
      }
      else{
        const { value } = e.target;
        setCheckedValue(value);
        searchParams.set("type",value)
        searchParams.delete("page");
        searchParams.delete("name");
        searchParams.delete("location")
        searchParams.delete("country")
        searchParams.delete("raiting")
        const newSearch = `?${searchParams.toString()}`;
        navigate({ search: newSearch });
      }

     
    };
    useEffect(() => {
      
      setSelectedCountryValue(searchParams.get("country")? searchParams.get("country").split(","):[])
      setSelectedRaitingValue(searchParams.get("raiting")? searchParams.get("raiting").split(","):[])
      setLoading(true)
      const getHospitals = async () => {
        
        
        const data = await (searchParams.has("country")|| searchParams.has("raiting") 
          ? allFilterSearch(
            checkedValue || "clinic",
            searchParams.get("country") || "",
            searchParams.get("raiting") || "",
            searchParams.get("page") || 0,
            i18next.language
          )
          : mainFilterSearch(
            checkedValue || "clinic",
              searchParams.get("location") || "",
              searchParams.get("name") || "",
              searchParams.get("page") || 0,
              i18next.language
            ));
            setHospitals(data.results);
            setCount(data.count)
            setLoading(false)
          
          
            // setSearchParams(searchParams);
          
      
      };
      getHospitals();

  
      
      
   
      
    }, [searchParams,add,i18next.language]);

    useEffect(()=>{
      const getCountries=async()=>{
        const data= await allCountriesFetch(localStorage.getItem("lang"))

        setCountry(data)



      }
      getCountries()

    },[i18next.language])

 
     
      



  return (
    <>
      {/* <Header/> */}

      <div className="hospitalbg" style={{ backgroundColor: "#F4F4F4" }}>
        <div style={{ paddingTop: "30px",paddingBottom:"20px" }} className="container">
          <div className={"breadcrumbs"}>
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
                  title:t("mainsearch"),
                },
              ]}
            />
          </div>
        </div>
        <div className="container">
        <FilterButtons country={country} />
              <div className="buttonsSort">
                <Button value="doctor" onClick={handleCheckboxChange}
                  className={checkedValue === "doctor" ? "doc-nav-btn-active" :"doc-nav-btn"}
                  type="primary"
                >
                   <Trans i18nKey="Doctors"></Trans>
                </Button>
                <Button value="clinic" onClick={handleCheckboxChange}
                 className={checkedValue === "clinic" ? "doc-nav-btn-active" :"doc-nav-btn"}
                  type="primary"
                >
                   <Trans i18nKey="Clinics"></Trans>
                </Button>
                <Button  value="service" onClick={handleCheckboxChange}
                  className={checkedValue === "service" ? "doc-nav-btn-active" :"doc-nav-btn"}
                  type="primary"
                >
                      <Trans i18nKey="Services"></Trans>
                </Button>
              </div>
          <div className="displayGridReviewDr">
            <div
              className="menuNav menuNav-hospitals"
            >
              <Collapse
                expandIconPosition="end"
                bordered={false}
                style={{
                  borderRadius: "0px",
                  border: "1px solid #F0F0F0",
                  backgroundColor: "#FBFBFB",
                }}
                accordion
              >
                <Panel
                  style={{ backgroundColor: "#FBFBFB", color: "#084BC2" }}
                  header={
                    <span
                      style={{
                        color: "#084BC2",
                        fontSize: "18px",
                        fontWeight: 500,
                        fontFamily: "Inter",
                        fontStyle: "normal",
                      }}
                    >
                      {t("search")}
                    </span>
                  }
                  key="1"
                >
                  <p style={{ margin: "0px", color: "#000", fontSize: "15px" }}>
                    {t("search2")}
                  </p>
                  <hr style={{ border: "1px solid #F0F0F0" }} />
                  <Checkbox.Group style={{display:"block"}} value={selectedCountryValue} onChange={ CountryChange}>
                   {country.map((item,index)=>{
                    return <> <Checkbox value={item.name} >
                    <p
                      style={{
                        margin: "6px 0",
                        color: "#000",
                        fontSize: "16px",
                      }}
                    >
                      {item.name}
                    </p>
                  </Checkbox>
                  <br />
                  </>
                  
                   })}
                    
                  {/* <Checkbox value={"Turkey"} >
                    <p
                      style={{
                        margin: "6px 0",
                        color: "#000",
                        fontSize: "16px",
                      }}
                    >
                      Турция
                    </p>
                  </Checkbox>
                  <br />
                  <Checkbox value={"Russia"} >
                    <p
                      style={{
                        margin: "6px 0",
                        color: "#000",
                        fontSize: "16px",
                      }}
                    >
                      Pоссия
                    </p>
                  </Checkbox>
                  <br />
                  <Checkbox value={"Azerbaijan"} >
                    <p
                      style={{
                        margin: "6px 0",
                        color: "#000",
                        fontSize: "16px",
                      }}
                    >
                      Aзербайджан
                    </p>
                  </Checkbox> */}
                  </Checkbox.Group>
                  <hr style={{ border: "1px solid #F0F0F0" }} />
                
             
                  <Checkbox  checked={checkedValue === 'doctor'}
        onChange={handleCheckboxChange}
        className={checkedValue === 'doctor' ? 'selected' : ''} value={"doctor"} >
                    <p
                      style={{
                        margin: "6px 0",
                        color: "#000",
                        fontSize: "16px",
                      }}
                    >
                     {t('Doctors')}
                    </p>
                  </Checkbox>
                  <br />
                  <Checkbox checked={checkedValue === 'clinic'}
        onChange={handleCheckboxChange}
        className={checkedValue === 'clinic' ? 'selected' : ''} value={"clinic"} >
                    <p
                      style={{
                        margin: "6px 0",
                        color: "#000",
                        fontSize: "16px",
                      }}
                    >
                      {t('Clinics')}
                    </p>
                  </Checkbox>
                  <br />
                  <Checkbox checked={checkedValue === 'service'}
        onChange={handleCheckboxChange}
        className={checkedValue === 'service' ? 'selected' : ''} value={"service"} >
                    <p
                      style={{
                        margin: "6px 0",
                        color: "#000",
                        fontSize: "16px",
                      }}
                    >
                      {t('Services')}
                    </p>
                  </Checkbox>
                  <br />
                 
                
                
                  <br />
                </Panel>
              </Collapse>
              <Collapse
                expandIconPosition="end"
                bordered={false}
                style={{
                  borderRadius: "0px",
                  border: "1px solid #F0F0F0",
                  backgroundColor: "#FBFBFB",
                  marginTop: "10px",
                }}
                accordion
              >
                <Panel
                  style={{ backgroundColor: "#FBFBFB" }}
                  header={
                    <span
                      style={{
                        color: "#084BC2",
                        fontSize: "18px",
                        fontWeight: 500,
                        fontFamily: "Inter",
                        fontStyle: "normal",
                      }}
                    >
                      Все фильтры
                    </span>
                  }
                  key="1"
                >
                  <p
                    style={{
                      margin: "0px",
                      color: "#084BC2",
                      fontSize: "18px",
                      fontWeight: 500,
                      fontFamily: "Inter",
                      fontStyle: "normal",
                    }}
                  >
                    Ваш бюджет
                  </p>
                  <hr style={{ border: "1px solid #F0F0F0" }} />
                  <Checkbox>
                    <p
                      style={{
                        margin: "6px 0",
                        color: "#000",
                        fontSize: "16px",
                      }}
                    >
                      Минимальный $
                    </p>
                  </Checkbox>
                  <br />
                  <Checkbox  >
                    <p
                      style={{
                        margin: "6px 0",
                        color: "#000",
                        fontSize: "16px",
                      }}
                    >
                      Средний $$
                    </p>
                  </Checkbox>
                  <br />
                  <Checkbox >
                    <p
                      style={{
                        margin: "6px 0",
                        color: "#000",
                        fontSize: "16px",
                      }}
                    >
                      Высокий $$$
                    </p>
                  </Checkbox>
                </Panel>
              </Collapse>
              <Collapse
                expandIconPosition="end"
                bordered={false}
                style={{
                  borderRadius: "0px",
                  border: "1px solid #F0F0F0",
                  backgroundColor: "#FBFBFB",
                }}
                accordion
              >
               
              </Collapse>
              <Collapse
                expandIconPosition="end"
                bordered={false}
                style={{
                  borderRadius: "0px",
                  border: "1px solid #F0F0F0",
                  backgroundColor: "#FBFBFB",
                }}
                accordion
              >
                <Panel
                  style={{ backgroundColor: "#FBFBFB" }}
                  header={
                    <span
                      style={{
                        color: "#084BC2",
                        fontSize: "18px",
                        fontWeight: 400,
                        fontFamily: "Inter",
                        fontStyle: "normal",
                      }}
                    >
                      {t("stars")}
                    </span>
                  }
                  key="1"
                >
                    <Checkbox.Group style={{display:"block"}} value={selectedRaitingValue} onChange={raitingChange}>
                  <Checkbox value={"1"} >
                    <p
                      style={{
                        margin: "6px 0",
                        color: "#000",
                        fontSize: "16px",
                      }}
                    >
                      1 звезды
                    </p>
                  </Checkbox>
                  <br />
                  <Checkbox value={"2"} >
                    <p
                      style={{
                        margin: "6px 0",
                        color: "#000",
                        fontSize: "16px",
                      }}
                    >
                         2 звезды
                    </p>
                  </Checkbox>
                  <br />
                  <Checkbox value={"3"} >
                    <p
                      style={{
                        margin: "6px 0",
                        color: "#000",
                        fontSize: "16px",
                      }}
                    >
                       3 звезды
                    </p>
                  </Checkbox>
                  <br />
                  <Checkbox value={"4"} >
                    <p
                      style={{
                        margin: "6px 0",
                        color: "#000",
                        fontSize: "16px",
                      }}
                    >
                       4 звезды
                    </p>
                  </Checkbox>
                  <br />
                  <Checkbox value={"5"} >
                    <p
                      style={{
                        margin: "6px 0",
                        color: "#000",
                        fontSize: "16px",
                      }}
                    >
                       5 звезды
                    </p>
                  </Checkbox>
                  </Checkbox.Group>
                
                  <br />
                </Panel>
              </Collapse>
              <Collapse
                expandIconPosition="end"
                bordered={false}
                style={{
                  borderRadius: "0px",
                  border: "1px solid #F0F0F0",
                  backgroundColor: "#FBFBFB",
                }}
                accordion
              >
               
              </Collapse>
              <Collapse
                expandIconPosition="end"
                bordered={false}
                style={{
                  borderRadius: "0px",
                  border: "1px solid #F0F0F0",
                  backgroundColor: "#FBFBFB",
                }}
                accordion
              >
                <Panel
                  style={{ backgroundColor: "#FBFBFB" }}
                  header={
                    <span
                      style={{
                        color: "#084BC2",
                        fontSize: "18px",
                        fontWeight: 500,
                        fontFamily: "Inter",
                        fontStyle: "normal",
                      }}
                    >
                      Оценка по отзывам
                    </span>
                  }
                  key="1"
                >
                  <Checkbox >
                    <p
                      style={{
                        margin: "6px 0",
                        color: "#000",
                        fontSize: "16px",
                      }}
                    >
                      Превосходно 9+
                    </p>
                  </Checkbox>
                  <br />
                  <Checkbox >
                    <p
                      style={{
                        margin: "6px 0",
                        color: "#000",
                        fontSize: "16px",
                      }}
                    >
                      Очень хорошо 8+
                    </p>
                  </Checkbox>
                  <br />
                  <Checkbox >
                    <p
                      style={{
                        margin: "6px 0",
                        color: "#000",
                        fontSize: "16px",
                      }}
                    >
                      Хороошо 7+
                    </p>
                  </Checkbox>
                  <br />
                  <Checkbox >
                    <p
                      style={{
                        margin: "6px 0",
                        color: "#000",
                        fontSize: "16px",
                      }}
                    >
                      Достаточно хорошо 6+
                    </p>
                  </Checkbox>
                  <br />
                </Panel>
              </Collapse>
              <div style={{ paddingTop: "10px" }} className="mapEmbed">
                <iframe
                  style={{ border: "none" }}
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d17439.59682519633!2d49.97557041806164!3d40.39300414904405!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x403063737e96e061%3A0x5b925e8db0b28d35!2sBaku%20Medical%20Plaza!5e0!3m2!1sen!2saz!4v1682591396345!5m2!1sen!2saz"
                  width="325"
                  height="179"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
            <>{
              loading && !liked ?  <div> <FadeLoader
              color="black"
              className={"loading"}
              loading={true}
              // style={{top:"50px"}}
              size={150}
              aria-label="Loading Spinner"
              data-testid="loader"
            /> </div> : <div className="menuRight">
           
            <div>
              <p className={"result-text"}>
                <span
                  style={{
                    color: "black",
                    paddingRight: "5px",
                    marginTop: "10px",
                  }}
                >
                  {name? `"${name}"`: t("found")}
                </span>
                {count} {t("variant")}
              </p>
            </div>
              {/* <div className="buttonsNav">
                <Button
                  className={"doc-nav-btn doc-nav-btn-active"}
                  type="primary"
                >
                 {t("filter")}
                </Button>
                <Button
                  className={"doc-nav-btn"}
                  type="primary"
                >
                 {t("filter1")}
                </Button>
                <Button
                  className={"doc-nav-btn"}
                  type="primary"
                >
                   {t("filter2")}
                </Button>
                <Button
                  className={"doc-nav-btn"}
                  type="primary"
                >
                  {t("filter3")}
                </Button>
              </div> */}
            

              <div>
                {hospitals?.map((item,index)=>{
                  return  <div key={index} className={activeElement ===item.id ? "cardReviewDoctors cardReviewDoctors-active" : "cardReviewDoctors"} >
                  <div   className="display_grid img-wrapper">
                    <img onClick={()=> navigate(`/hospital/${item.id}`)}
                      className={"cardFavHospitals-img"}
                      id="hospitalsImage"
                      src={item.main_image}
                    />
                    <img   id="sponsoredImage" src={Sponsored} />
                    
                    
                       { user ? (
                       
                       item.is_favorite ?  <img   onClick={()=> DeleteFromFavorite(item.id)}  id="likeImageFavHospitals" src={heart} />  :  <img onClick={()=> AddToFavorite(item.id)}   id="likeImageFavHospitals" src={likeReview} />) : "" }

                      
                        
                         

                        
                       

                        
                      
                      
                    
                   
               
                  </div>
                  <div  onClick={()=>handleClick(item.id)}
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
                        className="changed"
                      >
                       {item.name}
                      </h3>
                      <div style={{ display: "flex", gap: "10px" }} className="changed">
                        <p style={{ margin: "0px",  }} className="changed">Hеплохо</p>

                        <p
                          style={{
                            backgroundColor: "#FFC224",
                           
                            width: "29.16px",
                            height: "21.53px",
                            borderRadius: "2.5px",
                            textAlign: "center",
                            margin: "0px",
                          }}
                          className="changed"
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
                          className="changed"
                        >
                          <EnvironmentOutlined
                            style={{ marginRight: "6px",}}
                          />
                          {item.location}
                        </p>
                        <a  style={{ margin: "0px",  }} className="changed">
                        {t("map")}
                        </a>
                      </div>
                      <div>
                        <p
                          className="comment_hospitals"
                          style={{textAlign: "right" }}
                        >
                          <Link className="changed" to={`/hospital-reviews/${item.id}`} style={{  }} href="#">
                            {item.comment_count}    {t("comments").toLowerCase()}
                          </Link>
                        </p>
                        <p style={{  margin: "0px" }} className="changed">
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
                            color:"black",
                            fontSize: "12px",
                            textAlign: "center",
                            margin: "8px",
                            paddingLeft: "12px",
                          }}
                          
                        >
                             {/* <{t("hosbooking")}>  */}
                             <Trans i18nKey={"hosbooking"} >
                           
                             </Trans>
                               - 40%
                        </p>
                      </div>
                      <div
                        style={{
                          backgroundColor: "#D8F5DD",
                          borderRadius: "5px",
                          width: "143px",
                          height: "43px",
                          paddingLeft: "12px",
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
                         <Trans i18nKey="hoslistbooking3"></Trans>
                        </p>
                      </div>
                      <div>
                        <Link to={`/hospital/${item.id}`}>
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
                          {t("hoslistbooking4")}
                        </Button>
                        </Link>
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
                          color: "white",
                          fontSize: "14px",
                        }}
                      >
                        <EnvironmentOutlined
                          style={{ marginRight: "6px", color: "white" }}
                        />
                         {item.location}
                      </p>
                      <h3
                        style={{
                          margin: "0px",
                          color: "white",
                          paddingLeft: "15px",
                        }}
                      >
                         {item.name}
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
                        <p style={{ margin: "0px", color: "white" }}>Hеплохо</p>
                        <p
                          style={{ color: "#FFFF", textAlign: "right" }}
                        >
                          <a style={{ color: "#FFFF" }} href="#">
                          {item.comment_count} {t("comments")}
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
                         <Trans i18nKey="hosbooking"></Trans> - 40%
                        </p>
                      </div>
                      <div
                        style={{
                          backgroundColor: "#D8F5DD",
                          borderRadius: "5px",
                          width: "143px",
                          height: "43px",
                          paddingLeft: "12px",
                          color: "black",
                        }}
                      >
                        <p style={{ fontSize: "12px", textAlign: "center",  color: "black", }}>
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
                      <div
                        style={{
                          backgroundColor: "#FFFF",
                          borderRadius: "5px",
                          border: "1px solid #EFEFEF",
                          marginTop: "10px",
                          color: "black"
                        }}
                      >
                        <p
                          style={{
                            //   textAlign: "justify",
                            fontSize: "12px",
                            margin: "10px",
                            lineHeight: "18px",
                            color: "black"
                          }}
                        >
                          <Trans i18nKey="hoslistbooking3"></Trans>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                })}
               
               
                <div className={'hospitals-pagination'}>
                {<>
                {count?  <Pagination
      current={parseInt(searchParams.get("page")) || 1}  pageSize={2} onChange={(page)=>{
       // setCurrentValue(page)
       searchParams.set("page", page)
       // const newSearch = `?${searchParams.toString()}`;
      setSearchParams(searchParams)

     }}  total={count}
      
     /> :  <h1>Nothing Found !</h1> }
                
                  
                  </> }
                 
                </div>
                {/* <PageLoginBox/> */}
              </div>
            </div>
            }
            
            </>
          </div>
       
        </div>
      </div>
      <Footer/>
      
    </>
  );
};

export default Hospitals;
