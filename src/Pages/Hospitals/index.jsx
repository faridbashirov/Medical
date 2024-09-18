import React, {useEffect, useState} from "react";
import Filter from '../../Components/Filter'
import {
  Button,
  Breadcrumb,
  Pagination,
  Rate
} from "antd";
import { FadeLoader } from "react-spinners";
import { useNavigate, useSearchParams,Link } from "react-router-dom";
import { axiosPrivate } from "../../api/api.js";
import "../Profile/FavoriteHospitals/FavoriteHospitals.css";
import "./Hospitals.css"
import FilterButtons from "../../Components/FilterButtons/index.js";
import { mainFilterSearch } from "../../Components/api/mainFilterFetch";
import { allFilterSearch } from "../../Components/api/allFilterSearch";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { Trans } from "react-i18next";
import { allCountriesFetch } from "../../Components/api/allCountries";
import i18next from "i18next";
import { Helmet } from "react-helmet";
import HospitalCard from "./HospitalCard/index.jsx";

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
      <main className="hospital-main">
        <div className="container">
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
              <div>
                <div className="all-hospitals">
                  {hospitals?.map((hospital)=>{
                    return <HospitalCard key={hospital.id} hospital={hospital} t={t} user={user}/>
                  })}
                </div>
                <div className={'hospitals-pagination'}>
                {<>
                {count?  <Pagination
      current={parseInt(searchParams.get("page")) || 1}  pageSize={5} onChange={(page)=>{
       searchParams.set("page", page)
      setSearchParams(searchParams)
     }}  total={count}
     /> :  <h1> {t("nothingfound")} </h1> }                
                  </> }
                </div>
              </div>
            </div>
            }
            </>
          </div>
        </div>
      </main>
    </>
  );
};

export default Hospitals;