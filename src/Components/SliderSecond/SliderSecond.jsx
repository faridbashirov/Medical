import React from "react";
import CardsSecond from "../CardsSecond/CardsSecond";
import Carousel from 'react-multi-carousel';

const SliderSecond = ({position}) => {
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
    <>
      <Carousel responsive={responsive}>
        {position.map((item,index)=>{
          return     <CardsSecond p={item.name} p2="-40%" />
        })}
    
       
      </Carousel>
    </>
  );
};

export default SliderSecond;
