import React,{useEffect, useState} from 'react';
import {Button} from "antd";
import Carousel from 'react-multi-carousel';
import heart from "../../../assets/Svg/heart-sm.svg"
import heartOutlined from "../../../assets/Svg/heart-sm-outlined.svg"
import clinic1 from "../../../assets/Images/FavoriteHospitals.png"
import clinic2 from "../../../assets/Images/FavoriteHospitals-2.png"
import clinic3 from "../../../assets/Images/FavoriteHospitals-3.png"
import location from "../../../assets/Svg/Location.svg"
import singleStar from "../../../assets/Svg/SingleStar.svg"
import stars from "../../../assets/Svg/starIcon.svg"
import "./TopClinic.css"
import likeReview from "../../../assets/Svg/reviewLike.svg/"

import { Link } from 'react-router-dom';
import { useSelector,useDispatch } from "react-redux";
import { fetchHospitals } from '../../../store/thunk/hospitalsThunk';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from "react-i18next";
import { Trans } from "react-i18next";
import { axiosPrivate } from '../../../api/api';
import Slider from "react-slick";
import uuid from 'react-uuid';
const TopClinic = () => {

  const {hospitals}=useSelector((state)=>state.hospitals)
  const {authToken,user}=useSelector((state)=>state.auth)
  const [add,setAdd]=useState(false)
  console.log(hospitals);
  const {t}=useTranslation()
  const navigate=useNavigate()
  const dispatch=useDispatch()
 

  useEffect(()=>{
    dispatch(fetchHospitals(localStorage.getItem("lang")))
   },[add])

   const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots:false,
          autoplay: true,
          speed: 2000,
          autoplaySpeed: 4000,
        }
      }
    ]
  };

  const AddToFavorite= async(id)=>{

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
      <section className="top-clinic">
    <div className={"container"}>
        <div className="top-clinic__header" >
          <h3 className="top-clinic__header-title"><Trans i18nKey="tophospitals"></Trans></h3>

          <div className="top-clinic__header-btns" >
            <div className="top-clinic__header-right-btns">
            <Button className={"right-btn-primary"} type={"primary"}>топ 30</Button>
              <Button className={"right-btn-link"} type={"link"}><span>&#x2022;</span>топ 10</Button>
              <Button className={"right-btn-link"} type={"link"}><span>&#x2022;</span>топ 5</Button>
            
          
              
             
            </div>
            <Link to={"hospitals"}><Button className="top-clinic__header-left d-none" type={"primary"}>Посмотреть клиники </Button></Link> 
        
          </div>
        </div>
        <div className="top-clinic__carousel">
        <Slider {...settings}>
        <div className="top-clinic_item">
              <div className="top-clinic__item-top">
                <img src={clinic2} alt="clinic" className="top-clinic__item-img"/>
                <div className="top-clinic__item-num">50%</div>
                <div className="top-clinic__item-heart">
                  <img src={heartOutlined} alt="heart"/>
                </div>
              </div>
              <div className="clinic__item-footer">
                <div className="clinic__item-footer-subtitle">
                  <img src={location} alt=""/>
                  <span>Nişantaşı, İstanbul</span>
                </div>
                <h3 className="clinic__item-footer-title">Больница Американ</h3>
                <div className="clinic__item-footer-stars">
                  <span>8.4</span>
                  <img src={stars} alt=""/>
                </div>
              </div>
            </div>
            <div className="top-clinic_item">
              <div className="top-clinic__item-top">
                <img src={clinic1} alt="clinic" className="top-clinic__item-img"/>
                <div className="top-clinic__item-heart">
                  <img src={heartOutlined} alt="heart"/>
                </div>
              </div>
              <div className="clinic__item-footer">
                <div className="clinic__item-footer-subtitle">
                  <img src={location} alt=""/>
                  <span>Nişantaşı, İstanbul</span>
                </div>
                <h3 className="clinic__item-footer-title">Больница Американ</h3>
                <div className="clinic__item-footer-stars">
                  <span>8.4</span>
                  <img src={stars} alt=""/>
                </div>
              </div>
            </div>
            <div className="top-clinic_item">
              <div className="top-clinic__item-top">
                <img src={clinic3} alt="clinic" className="top-clinic__item-img"/>
                <div className="top-clinic__item-heart">
                  <img src={heartOutlined} alt="heart"/>
                </div>
              </div>
              <div className="clinic__item-footer">
                <div className="clinic__item-footer-subtitle">
                  <img src={location} alt=""/>
                  <span>Nişantaşı, İstanbul</span>
                </div>
                <h3 className="clinic__item-footer-title">Больница Американ</h3>
                <div className="clinic__item-footer-stars">
                  <span>8.4</span>
                  <img src={stars} alt=""/>
                </div>
              </div>
            </div>
            <div className="top-clinic_item">
              <div className="top-clinic__item-top">
                <img src={clinic1} alt="clinic" className="top-clinic__item-img"/>
                <div className="top-clinic__item-num">50%</div>
                <div className="top-clinic__item-heart">
                  <img src={heart} alt="heart"/>
                </div>
              </div>
              <div className="clinic__item-footer">
                <div className="clinic__item-footer-subtitle">
                  <img src={location} alt=""/>
                  <span>Nişantaşı, İstanbul</span>
                </div>
                <h3 className="clinic__item-footer-title">Больница Американ</h3>
                <div className="clinic__item-footer-stars">
                  <span>8.4</span>
                  <img src={stars} alt=""/>
                </div>
              </div>
            </div>
            <div className="top-clinic_item">
              <div className="top-clinic__item-top">
                <img src={clinic2} alt="clinic" className="top-clinic__item-img"/>
                <div className="top-clinic__item-num">50%</div>
                <div className="top-clinic__item-heart">
                  <img src={heartOutlined} alt="heart"/>
                </div>
              </div>
              <div className="clinic__item-footer">
                <div className="clinic__item-footer-subtitle">
                  <img src={location} alt=""/>
                  <span>Nişantaşı, İstanbul</span>
                </div>
                <h3 className="clinic__item-footer-title">Больница Американ</h3>
                <div className="clinic__item-footer-stars">
                  <span>8.4</span>
                  <img src={stars} alt=""/>
                </div>
              </div>
            </div>
            <div className="top-clinic_item">
              <div className="top-clinic__item-top">
                <img src={clinic1} alt="clinic" className="top-clinic__item-img"/>
                <div className="top-clinic__item-heart">
                  <img src={heartOutlined} alt="heart"/>
                </div>
              </div>
              <div className="clinic__item-footer">
                <div className="clinic__item-footer-subtitle">
                  <img src={location} alt=""/>
                  <span>Nişantaşı, İstanbul</span>
                </div>
                <h3 className="clinic__item-footer-title">Больница Американ</h3>
                <div className="clinic__item-footer-stars">
                  <span>8.4</span>
                  <img src={stars} alt=""/>
                </div>
              </div>
            </div>
            <div className="top-clinic_item">
              <div className="top-clinic__item-top">
                <img src={clinic3} alt="clinic" className="top-clinic__item-img"/>
                <div className="top-clinic__item-heart">
                  <img src={heartOutlined} alt="heart"/>
                </div>
              </div>
              <div className="clinic__item-footer">
                <div className="clinic__item-footer-subtitle">
                  <img src={location} alt=""/>
                  <span>Nişantaşı, İstanbul</span>
                </div>
                <h3 className="clinic__item-footer-title">Больница Американ</h3>
                <div className="clinic__item-footer-stars">
                  <span>8.4</span>
                  <img src={stars} alt=""/>
                </div>
              </div>
            </div>
            </Slider>
            
           
        </div>
      <div className="top-clinic__mobile-items">
        {hospitals.map((item,index)=>{
          return    <div key={uuid()} className="top-clinic_item">
          <div className="top-clinic__item-top">
            <img  onClick={()=> navigate(`/hospital/${item.id}`)} src={item.main_image} alt="clinic" className="top-clinic__item-img"/>
            <div className="top-clinic__item-num">50%</div>
            <div className="top-clinic__item-heart">
            { user ? (
                       
                       item.is_favorite ?  <img style={{cursor:"pointer"}}  onClick={()=> DeleteFromFavorite(item.id)}   className='top-clinic__item-heart' src={heart} />  :  <img style={{cursor:"pointer"}}  onClick={()=> AddToFavorite(item.id)}    className='top-clinic__item-heart' src={likeReview} />) : "" }
             
            </div>
          </div>
          <div className="clinic__item-footer">
            <div className="clinic__item-footer-subtitle">
              <img src={location} alt=""/>
              <span>{item.location}</span>
            </div>
            <h3 className="clinic__item-footer-title">{item.name}</h3>
            <div className="clinic__item-footer-stars">
              <span>8.4</span>
              <img src={stars} alt=""/>
            </div>
          </div>
        </div>
        })}
     
        {/* <div className="top-clinic_item">
          <div className="top-clinic__item-top">
            <img src={clinic2} alt="clinic" className="top-clinic__item-img"/>
            <div className="top-clinic__item-num">50%</div>
            <div className="top-clinic__item-heart">
              <img src={heartOutlined} alt="heart"/>
            </div>
          </div>
          <div className="clinic__item-footer">
            <div className="clinic__item-footer-subtitle">
              <img src={location} alt=""/>
              <span>Nişantaşı, İstanbul</span>
            </div>
            <h3 className="clinic__item-footer-title">Больница Американ</h3>
            <div className="clinic__item-footer-stars">
              <span>8.4</span>
              <img src={stars} alt=""/>
            </div>
          </div>
        </div>
        <div className="top-clinic_item">
          <div className="top-clinic__item-top">
            <img src={clinic1} alt="clinic" className="top-clinic__item-img"/>
            <div className="top-clinic__item-heart">
              <img src={heartOutlined} alt="heart"/>
            </div>
          </div>
          <div className="clinic__item-footer">
            <div className="clinic__item-footer-subtitle">
              <img src={location} alt=""/>
              <span>Nişantaşı, İstanbul</span>
            </div>
            <h3 className="clinic__item-footer-title">Больница Американ</h3>
            <div className="clinic__item-footer-stars">
              <span>8.4</span>
              <img src={stars} alt=""/>
            </div>
          </div>
        </div>
        <div className="top-clinic_item">
          <div className="top-clinic__item-top">
            <img src={clinic3} alt="clinic" className="top-clinic__item-img"/>
            <div className="top-clinic__item-heart">
              <img src={heartOutlined} alt="heart"/>
            </div>
          </div>
          <div className="clinic__item-footer">
            <div className="clinic__item-footer-subtitle">
              <img src={location} alt=""/>
              <span>Nişantaşı, İstanbul</span>
            </div>
            <h3 className="clinic__item-footer-title">Больница Американ</h3>
            <div className="clinic__item-footer-stars">
              <span>8.4</span>
              <img src={stars} alt=""/>
            </div>
          </div>
        </div> */}
        <Button onClick={()=> navigate({
      pathname: "/hospitals",
      search: `?type=clinic`,
    })} className="top-clinic__header-left d-mobile-block" type={"primary"}>{t("tophospitals2")} </Button>
      </div>
    </div>
      </section>
  );
};

export default TopClinic;
