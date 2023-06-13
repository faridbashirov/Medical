import React from 'react';
import Carousel from 'react-multi-carousel';
import group15 from "../../assets/Images/Group15.png";
import group16 from "../../assets/Images/Group16.png";
import group17 from "../../assets/Images/Group17.png";
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
const DiscountSlider = () => {
  return (
    <div style={{ paddingTop: "10px" }} className="container">
      <Carousel responsive={responsive}>
        <div style={{marginRight:"10px"}}>
          <img style={{width:"100%", height:"100%"}} src={group15} />
        </div>
        <div style={{marginRight:"10px"}}>
          <img style={{width:"100%", height:"100%"}} src={group16} />
        </div>
        <div style={{marginRight:"10px"}}>
          <img style={{width:"100%", height:"100%"}} src={group17} />
        </div>
        <div style={{marginRight:"10px"}}>
          <img style={{width:"100%", height:"100%"}} src={group15} />
        </div>
        <div style={{marginRight:"10px"}}>
          <img style={{width:"100%", height:"100%"}} src={group16} />
        </div>
        <div style={{marginRight:"10px"}}>
          <img style={{width:"100%", height:"100%"}} src={group17} />
        </div>
      </Carousel>
    </div>
  );
};

export default DiscountSlider;
