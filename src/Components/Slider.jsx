import React from "react";
import Cards from "./Cards/Cards";
import Carousel from "react-multi-carousel";
import "../Slider.css";
import BakuPic from "../../src/assets/Images/BakuPic.png";
import MoskovaPic from "../../src/assets/Images/MoskovaPic.png";
import 'react-multi-carousel/lib/styles.css';
import { useNavigate} from "react-router-dom";

const Slider = ({countries}) => {
 const navigate=useNavigate()
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
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  return (
    <>
      <Carousel responsive={responsive}>
        {countries.map((item,index)=>{
          return     <Cards title={item.name} key={index} img={item.image} />
        })}
    
      </Carousel>
    </>
  );
};

export default Slider;
