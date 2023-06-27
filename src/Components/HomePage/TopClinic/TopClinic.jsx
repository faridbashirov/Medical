import React,{useEffect} from 'react';
import {Button} from "antd";
import Carousel from 'react-multi-carousel';
import heart from "../../../assets/Svg/heart-sm.svg"
import heartOutlined from "../../../assets/Svg/heart-sm-outlined.svg"
import clinic1 from "../../../assets/Images/FavoriteHospitals.png"
import clinic2 from "../../../assets/Images/FavoriteHospitals-2.png"
import clinic3 from "../../../assets/Images/FavoriteHospitals-3.png"
import location from "../../../assets/Svg/Location.svg"
import stars from "../../../assets/Svg/starIcon.svg"
import "./TopClinic.css"
import { Link } from 'react-router-dom';
import { useSelector,useDispatch } from "react-redux";
import { fetchHospitals } from '../../../store/thunk/hospitalsThunk';
import { useNavigate } from 'react-router-dom';

const TopClinic = () => {

  const {hospitals}=useSelector((state)=>state.hospitals)
  const navigate=useNavigate()
  const dispatch=useDispatch()
 

  useEffect(()=>{
    dispatch(fetchHospitals())
   },[])
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  return (
      <section className="top-clinic">
    <div className={"container"}>
        <div className="top-clinic__header">
          <h3 className="top-clinic__header-title">Клиники, <br/>
            которые нравятся пациентам</h3>
          <div className="top-clinic__header-btns">
            <div className="top-clinic__header-right-btns">
              <Button className={"right-btn-primary"} type={"primary"}>топ 30</Button>
              <Button className={"right-btn-link"} type={"link"}><span>&#x2022;</span>топ 10</Button>
              <Button className={"right-btn-link"} type={"link"}><span>&#x2022;</span>топ 5</Button>
            </div>
           <Button onClick={()=> navigate({
      pathname: "/hospitals",
      search: `?type=clinic`,
    })} className="top-clinic__header-left d-none" type={"primary"}>Посмотреть клиники </Button>
          </div>
        </div>
        <div className="top-clinic__carousel">
          <Carousel responsive={responsive}>
            {hospitals.map((item,index)=>{
              return <div key={index} onClick={()=> navigate(`/hospital/${item.id}`)}  className="top-clinic_item">
              <div className="top-clinic__item-top">
                <img src={item.main_image} alt="clinic" className="top-clinic__item-img"/>
                <div className="top-clinic__item-num">50%</div>
                <div className="top-clinic__item-heart">
                  <img src={heart} alt="heart"/>
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
            </div> */}
          </Carousel>
        </div>
      <div className="top-clinic__mobile-items">
        {hospitals.map((item,index)=>{
          return    <div key={index} className="top-clinic_item">
          <div className="top-clinic__item-top">
            <img src={item.main_image} alt="clinic" className="top-clinic__item-img"/>
            <div className="top-clinic__item-num">50%</div>
            <div className="top-clinic__item-heart">
              <img src={heart} alt="heart"/>
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
        <Button className="top-clinic__header-left d-mobile-block" type={"primary"}>Посмотреть клиники </Button>
      </div>
    </div>
      </section>
  );
};

export default TopClinic;
