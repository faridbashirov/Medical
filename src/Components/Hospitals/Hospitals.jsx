import React, {useEffect, useState} from "react";
import Filter from '../Filter'
import {
  Button,
  Breadcrumb,
  Pagination,
  Rate
} from "antd";
import uuid from "react-uuid";
import { FadeLoader } from "react-spinners";
import likeReview from "../../assets/Svg/reviewLike.svg";
import Sponsored from "../../assets/Svg/sponsored.svg";
import heart from "../../assets/Images/heart.png";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import {  EnvironmentOutlined } from "@ant-design/icons";
import { axiosPrivate } from "../../api/api";
import "../FavHospitals/FavHospitals.css";
import "./Hospitals.css"
import FilterButtons from "../FilterButtons/index.js";
import { mainFilterSearch } from "../api/mainFilterFetch";
import { allFilterSearch } from "../api/allFilterSearch";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { Trans } from "react-i18next";
import { allCountriesFetch } from "../api/allCountries";
import i18next from "i18next";
import { Helmet } from "react-helmet";

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
  console.log("hospitals:",hospitals)
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
              searchParams.get("position") || "",
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
    <Helmet>
      <meta charSet="utf-8" />
      <title>112MED.ru | Официальный сайт | Клиники, врачи, онлайн-сервис по поиску и бронированию медицинских услуг, выгодные цены </title>
    </Helmet>
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
          <div>
              <p className={"result-text result-mobile"}>
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
          <div className="displayGridReviewDr displayGridHospitals">
            <Filter handleCheckboxChange={handleCheckboxChange} country={country} location={true} t={t} selectedCountryValue={selectedCountryValue} CountryChange={CountryChange} checkedValue={checkedValue} selectedRaitingValue={selectedRaitingValue} raitingChange={raitingChange}/>
            <>{
              loading && !liked ?  <div> <FadeLoader
              color="black"
              className={"loading"}
              loading={true}
              // style={{top:"50px"}}
              size={150}
              aria-label="Loading Spinner"
              data-testid="loader"
            /> </div> : <div className="menuRight" style={{width:"100%"}}>
               
            <div>
              <p className={"result-text result-desktop"}>
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
                  return  <div key={uuid()} className={activeElement ===item.id ? "hospitals-card  cardReviewDoctors cardReviewDoctors-active" : "hospitals-card cardReviewDoctors"} >
                  <div   className="display_grid img-wrapper hospital-card-img">
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
                    className="card-body  card-bodyy card-content"
                  >
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "flex-start",
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
                        <p style={{ marginTop:"3px"  }} className="changed">Hеплохо</p>

                        <p
                          style={{
                            backgroundColor: "#FFC224",
                           
                            width: "29.16px",
                            height: "21.53px",
                            borderRadius: "5px",
                            textAlign: "center",
                            margin: "0px",
                            display:"flex",
                            alignItems:"center",
                            justifyContent:"center"
                          }}
                          className="changed rating-number"
                        >
                          {item.raiting.toFixed(1)}
                        </p>
                      </div>
                    </div>
                    <div className="header-card"
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "baseline",
                        position:"relative"
                      }}
                    >
                      <div className="card-section1"
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
                      <div className="card-section2">
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
                      <div className="card-button1"
                        style={{
                          backgroundColor: "#E9ECFF",
                          borderRadius: "5px",
                          width: "max-content",
                          height: "40px",
                          display:"flex",
                          padding:"0 20px",
                          alignItems:"center",
                          "justifyContent":"center"
                        }}
                      >
                        <p
                          style={{
                            color:"black",
                            fontSize: "12px",
                            textAlign: "left",
                          }}
                          
                        >
                             {/* <{t("hosbooking")}>  */}
                             <Trans i18nKey={"hosbooking"} >
                           
                             </Trans>
                               - 40%
                        </p>
                      </div>
                      <div className="card-button2 percentage"
                        style={{
                          backgroundColor: "#D8F5DD",
                          borderRadius: "5px",
                          width: "max-content",
                          height: "40px",
                          display:"flex",
                          padding:"0 20px",
                          alignItems:"center",
                          "justifyContent":"center"
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
                      className="card-descc"
                    >
                      <div
                        style={{
                          backgroundColor: "#FFFF",
                          borderRadius: "5px",
                          border: "1px solid #EFEFEF",
                          // width: "384px",
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
                          {item.short_description ? item.short_description : <Trans i18nKey="hoslistbooking3"></Trans>}
                        </p>
                      </div>
                      <div>
                        <Link to={`/hospital/${item.id}`}>
                        <Button
                           className={activeElement ===item.id ?"doctors-more-btn-active" : "doctors-more-btn"}
                          type="primary"
                         
                        >
                          {t("hoslistbooking4")}
                        </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div onClick={()=>handleClick(item.id)}
                    className="card-content-mobile"
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
                      <div className="card-header-inner" style={{ display: "flex", gap: "10px", alignItems:"center" }}>
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
                          {item?.raiting.toFixed(1)}
                        </p>
                        <div>
                        <Rate disabled={true} value={item?.raiting}/>
                        </div>
                        <p style={{ margin: "0px", color: "white" }}>Hеплохо</p>
                        <p
                          style={{ color: "#FFFF", textAlign: "right",margin:"0px" }}
                        >
                         
                          <Link className="changed" to={`/hospital-reviews/${item.id}`} style={{  }}  href="#">
                          {item.comment_count} {t("comments")}
                          </  Link>
                        </p>
                      </div>
                    </div>
                    <div className="hospitals-card-buttons"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent:"between"
                      }}
                    >
                      <div className="hospitals-card-button percentage"
                        style={{
                          backgroundColor: "#E9ECFF",
                          borderRadius: "5px",
                          width: "max-content",
                          padding:"0 20px",
                          height: "40px",
                          display:"flex",
                          alignItems:"center",
                          "justifyContent":"center"
                          
                        }}
                      >
                        <p
                          style={{
                            fontSize: "12px",
                            textAlign: "left",
                            margin: "8px",
                          }}
                        >
                         <Trans i18nKey="hosbooking"></Trans> - 40%
                        </p>
                      </div>
                      <div className="percentage"
                        style={{
                          backgroundColor: "#D8F5DD",
                          borderRadius: "5px",
                          width: "max-content",
                          height: "40px",
                          display:"flex",
                          padding:"0 20px",
                          alignItems:"center",
                          "justifyContent":"center",
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
      
     /> :  <h1> {t("nothingfound")} </h1> }
                
                  
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
    </>
  );
};

export default Hospitals;
