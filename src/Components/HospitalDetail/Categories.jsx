import React from 'react';
import Carousel from 'react-multi-carousel';

const Categories = () => {
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
    <div className="hospital-detail__categories">
      <h4 className="categories__title">Направления - LuviMed</h4>
      <Carousel responsive={responsive}>
        <div className={"categories__carousel-item"}>
          <button className={"categories__carousel-item-btn"}>Гинекология</button>
          <button className={"categories__carousel-item-btn btn-first"}>Офтальмология</button>
        </div>
        <div className={"categories__carousel-item"}>
          <button className={"categories__carousel-item-btn btn-left"}>Стоматология</button>
          <button className={"categories__carousel-item-btn"}>Репродуктология</button>
        </div>
        <div className={"categories__carousel-item"}>
          <button className={"categories__carousel-item-btn btn-left"}>Стоматология</button>
          <button className={"categories__carousel-item-btn"}>Репродуктология</button>
        </div>
        <div className={"categories__carousel-item"}>
          <button className={"categories__carousel-item-btn btn-left"}>Стоматология</button>
          <button className={"categories__carousel-item-btn"}>Репродуктология</button>
        </div>
        <div className={"categories__carousel-item"}>
          <button className={"categories__carousel-item-btn btn-left"}>Стоматология</button>
          <button className={"categories__carousel-item-btn"}>Репродуктология</button>
        </div>
        <div className={"categories__carousel-item"}>
          <button className={"categories__carousel-item-btn btn-left"}>Стоматология</button>
          <button className={"categories__carousel-item-btn"}>Репродуктология</button>
        </div>
        <div className={"categories__carousel-item"}>
          <button className={"categories__carousel-item-btn btn-left"}>Стоматология</button>
          <button className={"categories__carousel-item-btn"}>Репродуктология</button>
        </div>
      </Carousel>
    </div>
  );
};

export default Categories;
