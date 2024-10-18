import React, { useState, useEffect, useRef } from 'react';
import { Button, Checkbox, Divider, Rate, message  } from "antd";
import location from "../../../assets/Svg/Location.svg";
import heart from "../../../assets/Svg/heart.svg";
import share from "../../../assets/Svg/share.svg";
import dollar from "../../../assets/Svg/Dollar.svg";
import { useTranslation } from 'react-i18next';
import { Swiper, SwiperSlide } from 'swiper/react';
import { getRatingComment } from '../../api/getRatingComment.js';
import './Detail.css';
import axios from "../../api/index.js";
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import i18next from 'i18next';
import Filter from "./Filter";
import FilterButtons from "./FilterButtons";
import { allCountriesFetch } from '../../api/allCountries.js';
const Detail = ({ images, hospital, open }) => {
  const [country, setCountry] = useState([])
  const [searchParams,setSearchParams] = useSearchParams()
  const [selectedCountryValue, setSelectedCountryValue] = useState(searchParams.get("country")? searchParams.get("country").split(",") : []);
  const [checkedValue, setCheckedValue] = useState(searchParams.get("type")? searchParams.get("type") : "clinic");
  const navigate = useNavigate();
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
    navigate({  pathname:"/hospitals", search: newSearch });
    };
  const copyToClip = () =>{
    const pageUrl = window.location.href;
    navigator.clipboard.writeText(pageUrl)
      .then(() => {
        message.success(t("link-copied"));
      })
      .catch(() => {
        message.error(t("link-copy-failed"));
      });
  }
  const { id } = useParams();
  const [activeIndex, setActiveIndex] = useState(0);
  const { t } = useTranslation();
  const [rating, setRating] = useState(hospital?.raiting_count);
  const [ratingName, setRatingName] = useState('');
  const [comment, setComment] = useState('');

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
        navigate({ pathname:"/hospitals",search: newSearch });
      }
     
  };
  const raitingName = (raiting_count) => {
    if (raiting_count === 0) {
      return t("no-rating");
    } else if (raiting_count > 0 && raiting_count <= 1) {
      return t("very-bad");
    } else if (raiting_count > 1 && raiting_count <= 2) {
      return t("bad");
    } else if (raiting_count > 2 && raiting_count <= 3) {
      return t("not-bad");
    } else if (raiting_count > 3 && raiting_count <= 4) {
      return t("good");
    } else {
      return t("excellent");
    }
  };

  useEffect(() => {
    setRatingName(raitingName(rating));
    const getCountries=async()=>{
      const data= await allCountriesFetch(localStorage.getItem("lang"))
      setCountry(data)
    }
    getCountries()
  }, [rating]);

  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.realIndex);
  };

  const handleRatingSubmit = async (value) => {
    const reviewData = {
      hospital: hospital?.id,
      text: comment,
      rate: value,
    };

    await getRatingComment(reviewData);
    const responseNew = await axios.get(`${i18next.language === "ru" ? "" : i18next.language + "/"}hospital/hospital/${id}`);
    let newRating = responseNew?.data?.raiting_count;
    setRating(newRating);
  };

  return (
    <section className='hospital-detail-content-section'>
      <div className='hospital-detail-content'>
        <div className='hospital-detail-content-header'>
          <div className='hospital-detail-content-header-left-area'>
            <div className='hospital-detail-content-header-title-area'>
              <div>
                <h6>{hospital.name}</h6>
                <Rate
                  style={{ color: "#FFC224" }}
                  defaultValue={0}
                  onChange={handleRatingSubmit}
                  allowHalf
                />
              </div>
              <p>{t("transport")}</p>
            </div>
            <div className='hospital-detail-content-header-footer-area'>
              <h1>{hospital.name}</h1>
              <div className='hospital-detail-content-location'>
                <img src={location} alt="" />
                <h5>{hospital.location}</h5>
              </div>
              <p>{t("location")}  -  <span>{t("map2")}</span></p>
              <div className='hospital-detail-content-header-footer-area-raiting'>
                <span>{rating}</span>
                <span>{ratingName}</span>
              </div>
            </div>
          </div>
          <div className='hospital-detail-content-header-right-area'>
            <span>
              <img className='hospital-detail-heart' src={heart} alt="" />
              <img className='hospital-detail-share' src={share} alt="" onClick={copyToClip}/>
              <button onClick={() => open()}>{t("bron")}</button>
            </span>
            <button>
              <div><img src={dollar} alt="" /></div>
              {t("refund")}
            </button>
          </div>
        </div>

        <div className='hospital-detail-content-slider-container'>
          <div className="hospital-detail-content-slider">
            <Swiper
              spaceBetween={15}
              slidesPerView={1}
              centeredSlides={true}
              loop={images.length > 2}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              allowSlidePrev={true}
              allowSlideNext={true}
              navigation={{
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
              }}
              onSlideChange={handleSlideChange}
              breakpoints={{
                1024: {
                  slidesPerView: 3,
                  centeredSlides: false,
                  direction: 'vertical',
                },
              }}
            >
              {images.map((item, index) => (
                <SwiperSlide v-slot="{ isNext }" key={index} onClick={() => setActiveIndex(index)}>
                  <div className='hospital-detail-content-card'>
                    <img key={index} src={item.image} alt="" />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="swiper-button-prev"></div>
            <div className="swiper-button-next"></div>
          </div>
          <div className='hospital-detail-thumbnail'>
            <img src={images[activeIndex]?.image} alt="" />
            <div className="swiper-button-prev"></div>
            <div className="swiper-button-next"></div>
          </div>
        </div>
      </div>

      <div className="hospital-detail-content-info">
        <FilterButtons country={country}/>
        <Filter handleCheckboxChange={handleCheckboxChange} country={country} location={true} t={t} selectedCountryValue={selectedCountryValue} CountryChange={CountryChange} checkedValue={checkedValue}/>
        {hospital?.map_url ?
          <div className={'content__location'}>
            <iframe
              style={{ border: "none" }}
              src={hospital.map_url}
              width="100%"
              height="335"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            <Button onClick={() => window.open(hospital.map_url)} type="primary" block style={{ margin: "1rem 0 0", height: "3.8rem", backgroundColor: "#5282ff" }}>{t("map")}
            </Button>
          </div>
          :
          <></>}
      </div>
    </section>
  );
};

export default Detail;
