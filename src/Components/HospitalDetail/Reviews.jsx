import React from 'react';
import Carousel from 'react-multi-carousel';
import ruFlag from "../../assets/Svg/userFlag.svg"
import trFlag from "../../assets/Svg/trFlag.svg"
import azFlag from "../../assets/Svg/azFlag.svg"

const Reviews = () => {
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
    <section className="hospital-detail__reviews">
      <div className="container">
        <div className="reviews__header">
          <h4 className="reviews__header-title">Отзывы пациентов</h4>
          <p className="reviews__header-subtitle"><span className={"subtitle__rating"}>9,8</span>Великолепно <span>&#x2022;</span><span>23 отзыва</span> <a href="#">Читать все отзывы</a></p>
        </div>
        <div className="reviews__carousel">
          <Carousel responsive={responsive} itemPadding={[10, 10]}>
            <div className="reviews__carousel-item">
              <div className="reviews__carousel-item-content">
                <p>“Peaceful mountain view right from the terrace/window. Fireplace in the salon, cozy atmosphere of the house, toys for kids, playground for kids (and even sleds).”</p>
                <a href="#">Читат больше</a>
              </div>
              <div className="reviews__carousel-item-footer">
                <p><span className="item__footer-icon">H</span>
                  <span className="item__footer-autor">Надежда Р.</span>
                  <img src={ruFlag} alt=""/></p>
                <span className="item__footer-rating">8,8</span>
              </div>
            </div>
            <div className="reviews__carousel-item">
              <div className="reviews__carousel-item-content">
                <p>“Peaceful mountain view right from the terrace/window. Fireplace in the salon, cozy atmosphere of the house, toys for kids, playground for kids (and even sleds).”</p>
                <a href="#">Читат больше</a>
              </div>
              <div className="reviews__carousel-item-footer">
                <p><span className="item__footer-icon">H</span>
                  <span className="item__footer-autor">Buhra Ulker</span>
                  <img src={trFlag} alt=""/></p>
                <span className="item__footer-rating">9,9</span>
              </div>
            </div>
            <div className="reviews__carousel-item">
              <div className="reviews__carousel-item-content">
                <p>“Peaceful mountain view right from the terrace/window. Fireplace in the salon, cozy atmosphere of the house, toys for kids, playground for kids (and even sleds).”</p>
                <a href="#">Читат больше</a>
              </div>
              <div className="reviews__carousel-item-footer">
                <p><span className="item__footer-icon">H</span>
                  <span className="item__footer-autor">Vagif Huseyn</span>
                  <img src={azFlag} alt=""/></p>
                <span className="item__footer-rating">7,8</span>
              </div>
            </div>
            <div className="reviews__carousel-item">
              <div className="reviews__carousel-item-content">
                <p>“Peaceful mountain view right from the terrace/window. Fireplace in the salon, cozy atmosphere of the house, toys for kids, playground for kids (and even sleds).”</p>
                <a href="#">Читат больше</a>
              </div>
              <div className="reviews__carousel-item-footer">
                <p><span className="item__footer-icon">H</span>
                  <span className="item__footer-autor">Надежда Р.</span>
                  <img src={ruFlag} alt=""/></p>
                <span className="item__footer-rating">8,8</span>
              </div>
            </div>
            <div className="reviews__carousel-item">
              <div className="reviews__carousel-item-content">
                <p>“Peaceful mountain view right from the terrace/window. Fireplace in the salon, cozy atmosphere of the house, toys for kids, playground for kids (and even sleds).”</p>
                <a href="#">Читат больше</a>
              </div>
              <div className="reviews__carousel-item-footer">
                <p><span className="item__footer-icon">H</span>
                  <span className="item__footer-autor">Buhra Ulker</span>
                  <img src={trFlag} alt=""/></p>
                <span className="item__footer-rating">9,9</span>
              </div>
            </div>
            <div className="reviews__carousel-item">
              <div className="reviews__carousel-item-content">
                <p>“Peaceful mountain view right from the terrace/window. Fireplace in the salon, cozy atmosphere of the house, toys for kids, playground for kids (and even sleds).”</p>
                <a href="#">Читат больше</a>
              </div>
              <div className="reviews__carousel-item-footer">
                <p><span className="item__footer-icon">H</span>
                  <span className="item__footer-autor">Vagif Huseyn</span>
                  <img src={azFlag} alt=""/></p>
                <span className="item__footer-rating">7,8</span>
              </div>
            </div>
          </Carousel>
        </div>
        <button className="hospital-detail__reviews-btn">Читать все отзывы</button>
      </div>
    </section>
  );
};

export default Reviews;
