import React from 'react';
import Slider from 'react-slick';
import { useTranslation } from 'react-i18next';
const Categories = ({services,hospital}) => {
  const {t}=useTranslation()
  const settings = {
    // className: "center",
    navigate: true,
    infinite: true,
    autoPlay: true,
    speed: 500,
    rows: 1,
    autoplay: true,
      autoplaySpeed: 2000,
    slidesPerRow: 2,
    slidesToShow: 2.3,
      slidesToScroll: 1,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 8,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2.3,
            slidesToScroll: 1
          }
        }
      ]
  };
  return (
    <div className="hospital-detail__categories">
      <h4 className="categories__title">{t("direction")} - {hospital?.name}</h4>
      <Slider {...settings}>
        {services.map((service,index) =>{
         return  <div className={"categories__carousel-item"} style={{marginBottom:"20px"}}>
         <button className={"categories__carousel-item-btn btn-left"}>{service.illness.name}</button>
         
        
       </div>
        })}
       
        <div className={"categories__carousel-item"} style={{marginBottom:"20px"}}>
          <button className={"categories__carousel-item-btn btn-left"}>Стоматология</button>
         
     </div>
        <div className={"categories__carousel-item"} style={{marginBottom:"20px"}}>
          <button className={"categories__carousel-item-btn btn-left"}>Стоматология</button>
          {/* <button className={"categories__carousel-item-btn"}>Репродуктология</button> */}
         </div>
         <div className={"categories__carousel-item"} style={{marginBottom:"20px"}}>
          <button className={"categories__carousel-item-btn btn-left"}>Стоматология</button>
           {/* <button className={"categories__carousel-item-btn"}>Репродуктология</button> */}
         </div>
         <div className={"categories__carousel-item"} style={{marginBottom:"20px"}}>
           <button className={"categories__carousel-item-btn btn-left"}>Стоматология</button>
           {/* <button className={"categories__carousel-item-btn"}>Репродуктология</button> */}
         </div>
         <div className={"categories__carousel-item"} style={{marginBottom:"20px"}}>
           <button className={"categories__carousel-item-btn btn-left"}>Стоматология</button>
           {/* <button className={"categories__carousel-item-btn"}>Репродуктология</button> */}
         </div>
       <div className={"categories__carousel-item"} style={{marginBottom:"20px"}}>
          <button className={"categories__carousel-item-btn btn-left"}>Стоматология</button>
        {/* <button className={"categories__carousel-item-btn"}>Репродуктология</button> */}
        </div>
        <div className={"categories__carousel-item"} style={{marginBottom:"20px"}}>
          <button className={"categories__carousel-item-btn btn-left"}>Стоматология</button>
        {/* <button className={"categories__carousel-item-btn"}>Репродуктология</button> */}
        </div>
        <div className={"categories__carousel-item"} style={{marginBottom:"20px"}}>
          <button className={"categories__carousel-item-btn btn-left"}>Стоматология</button>
        {/* <button className={"categories__carousel-item-btn"}>Репродуктология</button> */}
        </div>
        <div className={"categories__carousel-item"} style={{marginBottom:"20px"}}>
          <button className={"categories__carousel-item-btn btn-left"}>Стоматология</button>
        {/* <button className={"categories__carousel-item-btn"}>Репродуктология</button> */}
        </div>
          <div className={"categories__carousel-item"} style={{marginBottom:"20px"}}>
          <button className={"categories__carousel-item-btn btn-left"}>Стоматология</button>
        {/* <button className={"categories__carousel-item-btn"}>Репродуктология</button> */}
        </div>  <div className={"categories__carousel-item"} style={{marginBottom:"20px"}}>
          <button className={"categories__carousel-item-btn btn-left"}>Стоматология</button>
        {/* <button className={"categories__carousel-item-btn"}>Репродуктология</button> */}
        </div>

        <div className={"categories__carousel-item"} style={{marginBottom:"20px"}}>
          <button className={"categories__carousel-item-btn btn-left"}>Стоматология</button>
        {/* <button className={"categories__carousel-item-btn"}>Репродуктология</button> */}
        </div>
      </Slider>
    </div>
  );
};

export default Categories;
