import React,{useState,useEffect} from "react";

import {
  Dropdown,
  Button,
  Space,
  Breadcrumb,
  Pagination,
  Collapse,
  Checkbox,
} from "antd";
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

import russianFlag from "../../assets/Images/russianFlagIcon.png";
import question from "../../assets/Images/question.png";
import heart from "../../assets/Images/heart.png";
import facebook from "../../assets/Images/facebook.png";
import instagram from "../../assets/Images/instagram.png";
import vk from "../../assets/Images/vk.png";
import reviewDoctor from "../../assets/Images/reviewDoctor.png";
import CheckDoctor from "../../assets/Images/checkdoctor.png";
import "./Doctors.css"
import { useLocation, useSearchParams } from "react-router-dom";
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
    const [searchParams,setSearchParams] = useSearchParams()
  const [type,setType]=useState(searchParams.get("type") ? searchParams.get("type") :"doctor")
  const [name,setName]=useState(searchParams.get("name") ? searchParams.get("name") : "")
  const [doctors,setDoctors]=useState([])
  const [selectedCountryValue, setSelectedCountryValue] = useState(searchParams.get("country")? searchParams.get("country").split(",") : []);
  const [selectedRaitingValue, setSelectedRaitingValue] = useState(searchParams.get("raiting")? searchParams.get("raiting").split(",") : []);
  const [checkedValue, setCheckedValue] = useState(searchParams.get("type")? searchParams.get("type") :"doctor");
  const [count,setCount] = useState(0)
  const [currentValue, setCurrentValue] = useState(searchParams.get("page") ? searchParams.get("page") : 1)
  console.log(currentValue);
  console.log(doctors)
  
  searchParams.set("type",checkedValue)
  const CountryChange = (value) => {
    console.log(value);
    setSelectedCountryValue(value);
    searchParams.delete("page");
    searchParams.delete("page");
    setCurrentValue(1)
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

   
    searchParams.set("page",currentValue)

    if(searchParams.get("country")){
      searchParams.set("country",selectedCountryValue)
      
    }
    else{
      searchParams.delete("country")
      setSelectedCountryValue([])

    }
    if(searchParams.get("raiting")){
      searchParams.set("raiting",selectedRaitingValue)

    }
    else{
      searchParams.delete("raiting")
      setSelectedRaitingValue([])

    }
    
    const getHospitals = async () => {


      const data = await (searchParams.has("country")|| searchParams.has("raiting") 
      ? allFilterSearch(
        checkedValue || "clinic",
        searchParams.get("country") || "",
        searchParams.get("raiting") || "",
        searchParams.get("page") || 0,
      )
      : mainFilterSearch(
        checkedValue || "clinic",
          searchParams.get("location") || "",
          searchParams.get("name") || "",
          searchParams.get("page") || 0,
        ));
     
          setDoctors(data.results);
          setCount(data.count)

          
         
          
          
          navigate({ search: `?${searchParams.toString()}` });
          
    };
  
    getHospitals();
  }, [searchParams]);



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
                title: "Home",
                href: "",
              },
              {
                title: "Profile",
              },
            ]}
          />
        </div>
      </div>

      <div className="container">
        <FilterButtons/>
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
                    Найти
                  </span>
                }
                key="1"
              >
                <p style={{ margin: "0px", color: "#000", fontSize: "15px" }}>
                  Место / название клиники / врач
                </p>
                <hr style={{ border: "1px solid #F0F0F0" }} />
                <Checkbox.Group style={{display:"block"}} value={selectedCountryValue} onChange={CountryChange}>
                  <Checkbox value={"Turkey"} >
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
                  </Checkbox>
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
                      Врачи
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
                      Клиники
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
                      Услуги
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
                <Checkbox onChange={onChange}>
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
                <Checkbox onChange={onChange}>
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
                <Checkbox onChange={onChange}>
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
                    Популярные фильтры
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
                    Лабораторные анализы
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
                    5 звезд 112MED
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
                    Специализированные{" "}
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
                    клиники Многопрофильные
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
                    клиники
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
                    Реабилитация Бесплатное
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
                    проживание
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
                    check up
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
                    Центр города
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
                    Аппаратные исследования
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
                      fontWeight: 400,
                      fontFamily: "Inter",
                      fontStyle: "normal",
                    }}
                  >
                    Количество звезд 112MED
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
                  {name? `"${name}"`: " Hайден"}
                </span>
                {count} вариант
              </p>
            </div>
            <div className="buttonsNav">
              <Button
                className={"doc-nav-btn doc-nav-btn-active"}
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
                className={"doc-nav-btn"}
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
            </div>

            <div>
              {doctors.map((item,index)=>{
                return <div className="doctors-card doctors-card-active">
                <div className="doctors-img">
                  <img className="doctors-img-lg" src={"asd"}/>
                  <img
                    className={"doctors-heart"}
                    id="likeImageFavHospitals"
                    src={likeReview}
                  />
                </div>
                <div
                  className="doctors-card-body"
                >
                  <div className={"card-ratings"}>
                    <div>
                      <p
                        style={{
                          margin: "0 15px 0 0",
                          paddingTop: "0px !important",
                          color: "#FFF",
                        }}
                      >
                        {item.position.name}
                      </p>
                    </div>
                    <div className="d-none" style={{ marginRight: "auto" }}>
                      <img src={Iconstars} />
                    </div>
                    <div>
                      <p className="d-none"
                        style={{
                          margin: "0 !important",
                          fontSize: "16px",
                          fontWeight: "400",
                          color: "#FFF",
                        }}
                      >
                        Bеликолепно
                      </p>
                    </div>
                    <div className="d-none">
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
                          color: "#FFF",
                          fontSize: "24px !important",
                          margin: "0px",
                          paddingTop: "10px",
                        }}
                      >
                        Dr.{capitalizeWords(item.first_name)} {capitalizeWords(item.last_name)}
                      </h3>
                      <div style={{ color: "#FFF" }} >
                        <p
                          className="comment d-none"
                          style={{ color: "#FFF", textAlign: "right" }}
                        >
                          <span>23</span> отзыва
                        </p>
                        <span className={"sort-text"}>
                        Соотношение цена/качество
                        </span>
                      </div>
                    </div>

                    <p
                      style={{
                        color: "#FFF",
                        fontSize: "14px",
                        margin: "0px",
                        paddingTop: "10px",
                      }}
                    >
                      <EnvironmentOutlined
                        style={{ marginRight: "6px", color: "#FFF" }}
                      />
                      Больница Американ
                    </p>
                    <div className={"doctors-card__ratings white"}>
                      <p className={"doctors-card__ratings-num"}>9.0</p>
                      <img src={Iconstars} />
                      <p>Bеликолепно</p>
                      <p><span>23</span> отзыва</p>
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
                          Сосудистая хирургия
                        </p>
                        <p
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
                          20 лет опыта
                        </p>
                      </div>
                      <div>
                        <Button
                          className={"doctors-more-btn"}
                          type="primary"
                        >
                          Посмотреть Врачи
                        </Button>
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
                {count ?  <Pagination
                   current={currentValue}  pageSize={2} onChange={(page)=>{
                    setCurrentValue(page)
                    searchParams.set("page", page)
                    const newSearch = `?${searchParams.toString()}`;
                    navigate({ search: newSearch });
  
                  }}  total={count}
                   
                  /> : <h1>Nothing Found !</h1>}
              </div>
              {/* <PageLoginBox/> */}
            </div>
          </div>
        </div>
      </div>

      <Footer/>
    </div>
  );
};

export default Doctors;
