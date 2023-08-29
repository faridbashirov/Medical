import React from "react";
import Carousel from "react-multi-carousel";
import CardThird from "../CardThird/CardThird";

const SliderThird = ({offer}) => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 4
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4
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
        {offer.map((item,index)=>{
          return      <CardThird ird key={index} image={item.image}/>
        })}
   
       
      </Carousel>
    </>
  );
};

export default SliderThird;
