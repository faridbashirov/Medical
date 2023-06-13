import React from 'react';
import Carousel from 'react-multi-carousel';
import isoLogo from "../../assets/Images/certified-clinics/iso.png"
import isapsLogo from "../../assets/Images/certified-clinics/isaps.png"
import adaLogo from "../../assets/Images/certified-clinics/ada.png"
import dkgLogo from "../../assets/Images/certified-clinics/dkg.png"
import efqmLogo from "../../assets/Images/certified-clinics/efqm.png"

const CertifiedClinics = () => {
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
    <section className={"container"}>
      <div className="certified">
        <div className="certified__header">
          <h4 className="certified__header-title">Только сертифицированные клиники</h4>
          <p className="certified__header-subtitle">Lorem ipsum dolor sit amet consectetur dolor sit amet.</p>
        </div>
        <div className="certified__items">
          <Carousel responsive={responsive}>
            <div className="certified__item">
              <img src={isoLogo} alt=""/>
            </div>
            <div className="certified__item">
              <img src={isapsLogo} alt=""/>
            </div>
            <div className="certified__item">
              <img src={adaLogo} alt=""/>
            </div>
            <div className="certified__item">
              <img src={dkgLogo} alt=""/>
            </div>
            <div className="certified__item">
              <img src={efqmLogo} alt=""/>
            </div>
            <div className="certified__item">
              <img src={efqmLogo} alt=""/>
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default CertifiedClinics;
