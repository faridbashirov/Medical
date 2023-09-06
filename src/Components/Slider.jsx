import React,{useState} from "react";
import Cards from "./Cards/Cards";
import Carousel from "react-multi-carousel";
import "../Slider.css";
import BakuPic from "../../src/assets/Images/BakuPic.png";
import MoskovaPic from "../../src/assets/Images/MoskovaPic.png";
import 'react-multi-carousel/lib/styles.css';
import { useNavigate} from "react-router-dom";
import Slider from "react-slick";
import {ArrowRightOutlined} from "@ant-design/icons";
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
    className={className} 
    style={{ ...style, display: "block", background: "green" }}
    onClick={onClick}
  />
   
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "green" }}
      onClick={onClick}
    />
  );
}
const Sliders = ({countries}) => {
  
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,
    dots:false,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    
    slidesToScroll: 1,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: false
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2.5,
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
  
  return (
    <>


<Slider {...settings}>
{countries.map((item,index)=>{
          return     <Cards title={item.name} key={index} img={item.image} />
        })}
        </Slider>
       

    </>
  );
};

export default Sliders;
