import React,{useEffect, useState} from 'react';
import {Button,Rate} from "antd";
import heart from "../../../assets/Svg/heart-sm.svg"
import heartOutlined from "../../../assets/Svg/heart-sm-outlined.svg"
import location from "../../../assets/Svg/Location.svg"
import "./TopClinic.css"
import { Link } from 'react-router-dom';
import { useSelector,useDispatch } from "react-redux";
import { fetchHospitals } from '../../../store/thunk/hospitalsThunk';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from "react-i18next";
import { Trans } from "react-i18next";
import { axiosPrivate } from '../../../api/api';
import uuid from 'react-uuid';
const TopClinic = () => {
  const swiperNelRef = React.useRef(null);
  
  React.useEffect(() => {
    swiperNelRef.current.addEventListener('progress', (e) => {
      const [swiper, progress] = e.detail;
      console.log(progress);
    });

    swiperNelRef.current.addEventListener('slidechange', (e) => {
      console.log('slide changed');
    });
  }, []);
  const {hospitals,error}=useSelector((state)=>state.hospitals);
  const {authToken,user}=useSelector((state)=>state.auth)
  const [add,setAdd]=useState(false)
  console.log(hospitals);
  const {t}=useTranslation()
  const navigate=useNavigate()
  const dispatch=useDispatch()
  console.log(error,"+++++");
 

  useEffect(()=>{
    dispatch(fetchHospitals(localStorage.getItem("lang")))
   },[add])

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
            <swiper-container 
        navigation-next-el=".swiper-button-next"
  navigation-prev-el=".swiper-button-prev"
    slides-per-view={4} rewind={true} spaceBetween={20} autoplay-delay={2500} autoplay-disable-on-interaction={false} stopOnLastSlide={false}
        ref={swiperNelRef}
            >
            {hospitals?.map((item,index)=>{
          return    <swiper-slide><div className="top-clinic_item">
          <div className="top-clinic__item-top">
            <img  onClick={()=> navigate(`/hospital/${item.id}`)} src={item.main_image} alt="clinic" className="top-clinic__item-img"/>
            <div className="top-clinic__item-num">50%</div>
            <div className="top-clinic__item-heart">
            { user ? (
                       
                       item.is_favorite ?  <img style={{cursor:"pointer",width:"19px"}}  onClick={()=> DeleteFromFavorite(item.id)}   className='top-clinic__item-heart' src={heart} />  :  <img style={{cursor:"pointer",width:"19px"}}  onClick={()=> AddToFavorite(item.id)}    className='top-clinic__item-heart' src={heartOutlined} />) : "" }
             
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
              <Rate disabled={true} value={item?.raiting}/>
            </div>
          </div>
        </div>
        </swiper-slide>
        })}
        </swiper-container>
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>
        </div>
      <div className="top-clinic__mobile-items">
        
     
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
