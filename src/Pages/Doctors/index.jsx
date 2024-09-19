import React,{useState,useEffect,useRef} from "react";
import Filter from '../../Components/Filter/index.jsx';
import {
  Button,
  Pagination,
} from "antd";
import { FadeLoader } from "react-spinners";
import "./Doctors.css"
import { Link, useSearchParams } from "react-router-dom";
import FilterButtons from "../../Components/FilterButtons/index.js";
import { mainFilterSearch } from "../../Components/api/mainFilterFetch.js";
import { allFilterSearch } from "../../Components/api/allFilterSearch.js";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { allCountriesFetch } from "../../Components/api/allCountries.js";
import { Trans } from "react-i18next";
import i18next from "i18next";
import { Helmet } from "react-helmet";
import DoctorsCard from './DoctorsCard'
import BreadCrumbs from "../../Components/BreadCrumbs";

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
  
  const DeleteFromFavorite = async(id)=>{
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
    searchParams.delete("position")
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
      searchParams.delete("position")
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
        searchParams.delete("position")
        const newSearch = `?${searchParams.toString()}`;
        navigate({ pathname: "/hospitals", search: newSearch });
      } else {
        searchParams.delete("page");
        searchParams.delete("name");
        searchParams.delete("location")
        searchParams.delete("country")
        searchParams.delete("raiting")
        searchParams.delete("position")
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
          searchParams.get("position") || "",
          searchParams.get("page") || 0,
          i18next.language
        ));
        console.log('doctor:', data)
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
    <>
    <Helmet>
      <meta charSet="utf-8" />
      <title>112MED.ru | Официальный сайт | Клиники, врачи, онлайн-сервис по поиску и бронированию медицинских услуг, выгодные цены </title>
    </Helmet>
    <main className="doctors-main">
      <div className='container'>
        <BreadCrumbs pageItems={[
            {
              title: t("home"),
              href: "/",
            },
            {
              title: t("Doctors"),
              href: ""
            }
        ]}/>
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
          <Filter handleCheckboxChange={handleCheckboxChange} country={country} t={t} selectedCountryValue={selectedCountryValue} CountryChange={CountryChange} checkedValue={checkedValue} selectedRaitingValue={selectedRaitingValue} raitingChange={raitingChange}/>
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
            <div>
            <div className="doctors-cards">
              {doctors.map((doctor)=>{
                return <DoctorsCard key={doctor.id} doctor={doctor} t={t} user={user}/>
              })}
            </div>
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
        current={parseInt(searchParams.get("page")) || 1}  pageSize={5} onChange={(page)=>{
        searchParams.set("page", page)
        setSearchParams(searchParams)
      }}  total={count}
        
      /> :  <h1>Nothing Found !</h1> }
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

export default Doctors;
