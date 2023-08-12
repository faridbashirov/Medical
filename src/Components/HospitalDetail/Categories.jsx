import React from 'react';
import Carousel from 'react-multi-carousel';
import { useTranslation } from 'react-i18next';
const Categories = ({services,hospital}) => {
  const {t}=useTranslation()
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 2
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2
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
      <h4 className="categories__title">{t("direction")} - {hospital?.name}</h4>
      <Carousel responsive={responsive}>
        {services.map((service,index) =>{
         return  <div className={"categories__carousel-item"}>
         <button className={"categories__carousel-item-btn"}>{service.illness.name}</button>
         <button className={"categories__carousel-item-btn"}>{service.illness.name}</button>
        
       </div>
        })}
       
        {/* <div className={"categories__carousel-item"}>
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
        </div> */}
      </Carousel>
    </div>
  );
};

export default Categories;
