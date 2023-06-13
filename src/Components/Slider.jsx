import React from "react";
import Cards from "./Cards/Cards";
import Carousel from "react-multi-carousel";
import "../Slider.css";
import BakuPic from "../../src/assets/Images/BakuPic.png";
import MoskovaPic from "../../src/assets/Images/MoskovaPic.png";

const Slider = () => {
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
        <Cards img={BakuPic} />
        <Cards img={BakuPic} />
        <Cards img={MoskovaPic} />
        <Cards img={BakuPic} />
        <Cards img={BakuPic} />
        <Cards img={MoskovaPic} />
      </Carousel>
    </>
  );
};

export default Slider;
