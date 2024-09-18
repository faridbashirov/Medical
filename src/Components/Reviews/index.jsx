import React from 'react';
import ruFlag from "../../assets/Svg/userFlag.svg";
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './Reviews.css';

const Reviews = ({ reviews, id }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  return (
    <section className="reviews-container">
      {reviews?.length !== 0 ? (
        <>
          <div className="container">
            <div className="reviews-title">
              <h4>{t("hosinfo3")}</h4>
              <div className="reviews-subtitle">
                <div className="reviews-subtitle-raiting">9,8</div>
                Великолепно &#x2022;
                <p>{reviews.length} {t("comments")}</p>
                <span onClick={() => navigate(`/doctor-reviews/${id}`)}>{t("allreviews")}</span>
              </div>
            </div>
          </div>
          <div className='reviews-carousel'>
            <div className="reviews__carousel">
              <Swiper
                spaceBetween={15}
                slidesPerView={3}
                centeredSlides={true}
                loop={true}
              autoplay={{
                delay: 2500,
              }}
              breakpoints={{
                1024: {
                  slidesPerView: 3,
                  centeredSlides: false,
                },
              }}
            >
                {reviews.map((item, index) => (
                  <SwiperSlide key={index}>
                    <div className="reviews">
                      <div className="reviews__carousel-item-content">
                        <p>{item.text}</p>
                        <a href="#">Читать больше</a>
                      </div>
                      <div className="reviews-footer">
                        <div className="reviews-left">
                          <span className="reviews-autor-first-character">H</span>
                          <span className="reviews-autor">{item.doctor.first_name}</span>
                          <img src={ruFlag} alt=""/>
                        </div>
                        <div className="reviews-right">8,8</div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
                {reviews.map((item, index) => (
                  <SwiperSlide key={index}>
                    <div className="reviews">
                      <div className="reviews__carousel-item-content">
                        <p>{item.text}</p>
                        <a href="#">Читать больше</a>
                      </div>
                      <div className="reviews-footer">
                        <div className="reviews-left">
                          <span className="reviews-autor-first-character">H</span>
                          <span className="reviews-autor">{item.doctor.first_name}</span>
                          <img src={ruFlag} alt=""/>
                        </div>
                        <div className="reviews-right">8,8</div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
              <div className="swiper-button-prev"></div>
              <div className="swiper-button-next"></div>
            </div>
          </div>
          <div className="container">
            <button 
              onClick={() => navigate(`/doctor-reviews/${id}`)} 
              className="reviews-button"
            >
              {t("allreviews")}
            </button>
          </div>
        </>
      ) : (
        <div className="container">
          <div className="reviews-title">
            <h4>{t("hosinfo3")}</h4>
            <h1>{t("nocomments")}</h1>
          </div> 
          <button 
            onClick={() => navigate(`/doctor-reviews/${id}`)} 
            className="reviews-button"
          >
            {t("allreviews")}
          </button>
        </div>
      )}
    </section>
  );
};

export default Reviews;
