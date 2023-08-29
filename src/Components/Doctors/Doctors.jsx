import React,{useState,useEffect,CSSProperties,useRef} from "react";

import {
  Dropdown,
  Button,
  Space,
  Breadcrumb,
  Pagination,
  Collapse,
  Checkbox,
} from "antd";
import ClipLoader from "react-spinners/ClipLoader";
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
import Iconstars from "../../assets/Svg/starIcon.svg";
import experience from "../../assets/Svg/staj.svg";
import { axiosPrivate } from "../../api/api";
import russianFlag from "../../assets/Images/russianFlagIcon.png";
import question from "../../assets/Images/question.png";
import heart from "../../assets/Images/heart.png";
import facebook from "../../assets/Images/facebook.png";
import instagram from "../../assets/Images/instagram.png";
import vk from "../../assets/Images/vk.png";
import reviewDoctor from "../../assets/Images/reviewDoctor.png";
import CheckDoctor from "../../assets/Images/checkdoctor.png";
import "./Doctors.css"
import { Link, useLocation, useSearchParams } from "react-router-dom";
import { ArrowRightOutlined, EnvironmentOutlined } from "@ant-design/icons";
import FavoriteHospitals from "../../assets/Images/FavoriteHospitals.png";
import Sponsored from "../../assets/Svg/sponsored.svg";
import Header from "../Header/index.js";
import Footer from "../Footer/index.js";
import PageLoginBox from "../PageLoginBox/index.js";
import FilterButtons from "../FilterButtons/index.js";
import { mainFilterSearch } from "../api/mainFilterFetch";
import { allFilterSearch } from "../api/allFilterSearch";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import favoritesDoctorsFetch from "../api/FavoriteDoctorsFetch";
import Hospitals from "../Hospitals/Hospitals";
import { useTranslation } from "react-i18next";
import { allCountriesFetch } from "../api/allCountries";
import { Trans } from "react-i18next";
import i18next from "i18next";
const { Panel } = Collapse;






const onChange = (e) => {
  console.log(`checked = ${e.target.checked}`);
};

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

const Doctors = () => {
  const navigate=useNavigate()
  const {t}=useTranslation()
  const ref=useRef()
  const [searchParams,setSearchParams] = useSearchParams()
  const [type,setType]=useState(searchParams.get("type") ? searchParams.get("type") :"doctor")
  const [name,setName]=useState(searchParams.get("name") ? searchParams.get("name") : "")
  const [doctors,setDoctors]=useState([])
  const [selectedCountryValue, setSelectedCountryValue] = useState(searchParams.get("country")? searchParams.get("country").split(",") : []);
  const [selectedRaitingValue, setSelectedRaitingValue] = useState(searchParams.get("raiting")? searchParams.get("raiting").split(",") : []);
  const [checkedValue, setCheckedValue] = useState(searchParams.get("type")? searchParams.get("type") :"doctor");
  const [loading, setLoading] = useState(false)
  const [country, setCountry] = useState([])
  const [add,setAdd] = useState(false)
  const [liked,setLiked]=useState(false)
  const [count,setCount] = useState(0)
  const {user,authToken}=useSelector(state=> state.auth)
  const [activeElement, setActiveElement] = useState(0);
  console.log(doctors);
  // console.log(ref.current);

   searchParams.set("type",checkedValue)
   const handleClick = (elementId) => {
    setActiveElement(elementId);
   
  };


 
   const AddToFavorite= async(id)=>{
    setLiked(true)

  axiosPrivate.post(`card/add_favorite_doctor/${id}`)
  .then((res) => {
      console.log(res);
      setAdd(!add)
  })
  .catch((err) => {
      setError(err);
  })
    
 
       
      
  }
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

  const CountryChange = (value) => {
    console.log(value);
    setSelectedCountryValue(value);
    searchParams.delete("page");
    
   
    searchParams.delete("location")
    searchParams.delete("name")
    setName("")
     
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
      setName("")
       
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
     
      if (value !== "doctor") {
        searchParams.delete("page");
        searchParams.delete("name");
        searchParams.delete("location")
        searchParams.delete("country")
        searchParams.delete("raiting")
        const newSearch = `?${searchParams.toString()}`;
        navigate({ pathname: "/hospitals", search: newSearch });
      } else {
        searchParams.delete("page");
        searchParams.delete("name");
        searchParams.delete("location")
        searchParams.delete("country")
        searchParams.delete("raiting")
        navigate({ search: `?${searchParams.toString()}` });
        
      }
    };

    const capitalizeWords = (str) => {
      return str
        .toLowerCase()
        .split(' ')
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
    };



  useEffect(() => {
    setSelectedCountryValue(searchParams.get("country")? searchParams.get("country").split(","):[])
    setSelectedRaitingValue(searchParams.get("raiting")? searchParams.get("raiting").split(","):[])
    console.log(name);

    setLoading(true)
    const getHospitals = async () => {
      


      const data = await (searchParams.has("country")|| searchParams.has("raiting") 
      ? allFilterSearch(
        checkedValue || "doctor",
        searchParams.get("country") || "",
        searchParams.get("raiting") || "",
        searchParams.get("page") || 0,
        i18next.language
      )
      : mainFilterSearch(
        checkedValue || "doctor",
          searchParams.get("location") || "",
          searchParams.get("name") || "",
          searchParams.get("page") || 0,
          i18next.language
        ));
     
          setDoctors(data.results);
          setCount(data.count)
          setLoading(false)
      
          
         
          
          
          
          
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
    <div style={{ backgroundColor: "#F4F4F4" }}>
      

      <div style={{ paddingTop: "30px", paddingBottom:"20px" }} className="container">
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
                title:  t("Doctors"),
                href: "",
              },
            
               
              {
                title:  t("mainsearch"),
              },
            ]}
          />
        </div>
      </div>

      <div className="container">
        <FilterButtons country={country}/>
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
          <div className="menuNav menuNav-hospitals">
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
               
                <hr style={{ border: "1px solid #F0F0F0" }} />
                <Checkbox.Group style={{display:"block"}} value={selectedCountryValue} onChange={CountryChange}>
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
                     {t("Doctors")}
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
                       {t("Clinics")}
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
                       {t("Services")}
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
                    Специльные предложения
                  </span>
                }
                key="1"
              >
                <Checkbox onChange={onChange}>
                  <p
                    style={{
                      margin: "6px 0",
                      color: "#000",
                      fontSize: "16px",
                    }}
                  >
                    Все предложения
                  </p>
                </Checkbox>
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
                <Checkbox onChange={onChange}>
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
                <Checkbox onChange={onChange}>
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
                <Checkbox onChange={onChange}>
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
                <Checkbox onChange={onChange}>
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
          </div>
          <>{loading & !liked ?  <div> <FadeLoader
          color="black"
          className={"loading"}
          loading={true}
          // style={{top:"50px"}}
          size={150}
          aria-label="Loading Spinner"
          data-testid="loader"
        /> </div> :
          <div className="menuRight">
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
            </div>

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
              </div> */}

            <div>
            
             {doctors.map((item,index)=>{
                return <div key={item.id}  className={activeElement ===item.id ?  "doctors-card doctors-card-active" : "doctors-card"}>
                <div className="doctors-img">
                  <img onClick={()=> navigate(`/doctor/${item.id}`)} className="doctors-img-lg" src={item.profile_photo}/>

                  { user ? (
                  
                  item.is_favorite ? <img  ref={ref} onClick={()=> DeleteFromFavorite(item.id)} 
    className={"doctors-heart"}
    id="likeImageFavHospitals"
    src={heart}
  />   :  <img ref={ref}  onClick={()=> AddToFavorite(item.id)} 
  className={"doctors-heart"}
  id="likeImageFavHospitals"
  src={likeReview}
  />   ): ""

  }
                 
                  
                 
                </div>
                <div onClick={()=> handleClick(item.id)}
                  className="doctors-card-body"
                >
                  <div className={"card-ratings"}>
                    <div>
                      <p
                        style={{
                          margin: "0 15px 0 0",
                          paddingTop: "0px !important",
                        }}
                        className="changed"
                      >
                        {item.position?.name}
                      </p>
                    </div>
                    <div className="" style={{ marginRight: "auto" }}>
                      <img src={Iconstars} />
                    </div>
                    <div>
                      <p className="changed"
                        style={{
                          margin: "0 !important",
                          fontSize: "16px",
                          fontWeight: "400",
                        }}
                      >
                        Bеликолепно
                      </p>
                    </div>
                    <div className="">
                      <p
                        style={{
                          backgroundColor: "#FFC224",
                          color: "#000",
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
                          fontSize: "24px !important",
                          margin: "0px",
                          paddingTop: "10px",
                        }}
                        className="changed"
                      >
                        Dr.{capitalizeWords(item.first_name)} {capitalizeWords(item.last_name)}
                      </h3>
                      <div style={{display:"flex",flexDirection:"column",alignItems:"flex-end" }} >
                        <p
                          className="comment d-none"
                          style={{  textAlign: "right" }}
                        >
                          <span>{item.comment_count}</span>       {t("comments").toLowerCase()}
                        </p>
                        <span className={"sort-text changed"} style={{marginTop:"10px"}}>
                        Соотношение цена/качество
                        </span>
                        <Link to={`/doctor-reviews/${item.id}`} className="changed">{item.comment_count}  {t("comments").toLowerCase()}</Link>
                      </div>
                    </div>

                    <p
                      style={{
                        fontSize: "14px",
                        margin: "0px",
                        paddingTop: "10px",
                      }}
                      className="changed"
                    >
                      <EnvironmentOutlined
                        style={{ marginRight: "6px", color: "#FFF" }}
                      />
                      {item.hospital?.name}
                    </p>
                    <div className={"doctors-card__ratings "}>
                      <p className={"doctors-card__ratings-num changed"}>9.0</p>
                      <img src={Iconstars} />
                      <p className="changed">Bеликолепно</p>
                      <p className="changed">{item.comment_count} {t("comments").toLowerCase()}</p>
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
                            borderRadius: "15px",
                            fontSize: "12px",
                            padding: "10px 10px",
                            width: "151px",
                            textAlign: "center",
                          }}
                        >
                          {item.position?.name}
                        </p>
                        {item.experience ?  <p
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
                          }}
                        >
                          
                          <img src={experience} />
                          {item.experience} лет опыта
                        </p> : "" }
                       
                      </div>
                      <div>
                        <Link to={`/doctor/${item.id}`}><Button
                          className={"doctors-more-btn"}
                          type="primary"
                        >
                          {t("doctorlist")}
                        </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              })}
             
              
             

              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  paddingTop: "25px",
                  paddingBottom: "50px",
                }}
              >
                  {<>
                  { count?  <Pagination
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

      <Footer/>
    </div>
  );
};

export default Doctors;
