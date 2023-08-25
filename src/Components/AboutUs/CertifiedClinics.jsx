import React from 'react';
import Carousel from 'react-multi-carousel';
import isoLogo from "../../assets/Images/certified-clinics/iso.png"
import isapsLogo from "../../assets/Images/certified-clinics/isaps.png"
import adaLogo from "../../assets/Images/certified-clinics/ada.png"
import dkgLogo from "../../assets/Images/certified-clinics/dkg.png"
import efqmLogo from "../../assets/Images/certified-clinics/efqm.png"
import CertificatedHospitalsFetch from '../api/certificatedHospitals';
import { useTranslation } from 'react-i18next';
const CertifiedClinics = () => {
  const {t,i18n} =useTranslation()
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


  const {data,error,loading}=CertificatedHospitalsFetch(localStorage.getItem("lang"))


  return (
    <section className={"container"}>
      <div className="certified">
        <div className="certified__header">
          <h4 className="certified__header-title">{t("sertificateclinics")}</h4>
          
        </div>
        <div className="certified__items">
          <Carousel responsive={responsive}>
          {data.map((item,index)=>{
            return <div className="certified__item">
            <img src={`https://hospitalbackend.efgroup.az/`+item.logo} alt={item.title}/>
         
          </div>
          })}
            
            
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default CertifiedClinics;
