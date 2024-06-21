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
  const {hospitals,error}=useSelector((state)=>state.hospitals);
  const {authToken,user}=useSelector((state)=>state.auth)
  const [add,setAdd]=useState(false)
  const {t}=useTranslation()
  const navigate=useNavigate()
  const dispatch=useDispatch()
 
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
          <h3 className="top-clinic__header-title"><Trans i18nKey="tophospitals"></Trans></h3>
          {/* <div className="top-clinic__header-btns" >
            <div className="top-clinic__header-right-btns">
              <Button className={"top-button__active"} type={"primary"}>{t("tophospitals2")} 30</Button>
              <Button className={"top-button__passive"} type={"link"}>{t("tophospitals2")} 10</Button>
              <Button className={"top-button__passive"} type={"link"}>{t("tophospitals2")} 5</Button>
            </div>
          </div> */}
            <div className="top-clinic__carousel">
                <swiper-container 
            navigation-next-el=".swiper-button-next"
      navigation-prev-el=".swiper-button-prev"
        slides-per-view={4} space-between={23} autoplay-delay={2500} autoplay-disable-on-interaction={false} stopOnLastSlide={false}
                >
                {hospitals.map((item,index)=>{
              return    <swiper-slide><div key={uuid()} className="top-clinic_item">
              <div className="top-clinic__item-top">
                <img  onClick={()=> navigate(`/hospital/${item.id}`)} src={item.main_image} alt="clinic" className="top-clinic__item-img"/>
                <div className="top-clinic__item-num">50%</div>
                <div className="top-clinic__item-heart">
                { user ? (
                          
                          item.is_favorite ?  <img style={{cursor:"pointer",width:"19px"}}  onClick={()=> DeleteFromFavorite(item.id)}   className='top-clinic__item-heart' src={heart} />  :  <img style={{cursor:"pointer",width:"19px"}}  onClick={()=> AddToFavorite(item.id)}    className='top-clinic__item-heart' src={heartOutlined} />) : "" }
                
                </div>
              </div>
              <div className="top-clinic__item-footer">
                <div className="top-clinic__item-footer-subtitle">
                  <div className='top-clinic__location'><img src={location} alt=""/></div>
                  <span>{item.location}</span>
                </div>
                <h3 className="top-clinic__item-footer-title">{item.name}</h3>
                <div className="top-clinic__item-footer-stars">
                  <span>{item?.raiting ? item?.raiting.toFixed(1) : 0}</span>
                  <Rate className='top-clinic-stars' disabled={true} value={item?.raiting}/>
                </div>
              </div>
            </div></swiper-slide>
            })}
            </swiper-container>
            <div class="swiper-button-prev"></div>
            <div class="swiper-button-next"></div>
            </div>
          <div className="top-clinic__mobile-items">
            {hospitals.map((item,index)=>{
              return    <div key={uuid()} className="top-clinic_item">
              <div className="top-clinic__item-top">
                <img  onClick={()=> navigate(`/hospital/${item.id}`)} src={item.main_image} alt="clinic" className="top-clinic__item-img"/>
                <div className="top-clinic__item-num">50%</div>
                <div className="top-clinic__item-heart">
                { user ? (
                          
                          item.is_favorite ?  <img style={{cursor:"pointer",width:"19px"}}  onClick={()=> DeleteFromFavorite(item.id)}   className='top-clinic__item-heart' src={heart} />  :  <img style={{cursor:"pointer",width:"19px"}}  onClick={()=> AddToFavorite(item.id)}    className='top-clinic__item-heart' src={heartOutlined} />) : "" }
                
                </div>
              </div>
              <div className="top-clinic__item-footer">
                <div className="top-clinic__item-footer-subtitle">
                  <div className='top-clinic__location'><img src={location} alt=""/></div>
                  <span>{item.location}</span>
                </div>
                <h3 className="top-clinic__item-footer-title">{item.name}</h3>
                <div className="top-clinic__item-footer-stars">
                  <span>{item?.raiting ? item?.raiting.toFixed(1) : 0}</span>
                  <Rate className='top-clinic-stars' disabled={true} value={item?.raiting}/>
                </div>
              </div>
            </div>
            })}
          </div>
          <div className='top-clinic__button_container'>
            <Link to={"hospitals"}><Button className="top-clinic__button" type={"primary"}>{t("tophospitalbutton")}</Button></Link> 
          </div>
        </div>
      </section>
  );
};

export default TopClinic;
