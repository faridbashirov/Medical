import React from 'react';
import uuid from 'react-uuid';
import { Link, useNavigate } from 'react-router-dom';
import './BestSeller.css'
import { Button } from 'antd';
import useLanguageFetch from '../../../Hooks/useLanguageFetch';
import { useTranslation } from 'react-i18next';

const BestSeller = () => {
  const {t}=useTranslation()
  const navigate = useNavigate();
  const { data, loading, error } = useLanguageFetch('main/best_seller',localStorage.getItem("lang"));
    if (loading) {
        return  <>
                </>
    }
    if (error) {
        return console.log("DiscoundSlider:",error)
    }
    return (
        <div>
            {data ? (
                <section className='bestSeller'>
                  <div className="container">
                    <p className={"bestSeller-title"}>
                      {t("bestseller")}
                    </p>
                    <div className="grid_3">
                      {data.map((item,index)=>{
                        return  <div className="trans" key={index}>
                      <Link to={item.link}> <img  src={item.image} /></Link>
                    </div>})}
                    </div>
                  </div>
                  <div style={{ paddingTop: "10px" }} className="container discount-slider">
                    <swiper-container 
                      navigation-next-el=".swiper-button-next"
                navigation-prev-el=".swiper-button-prev"
                  slides-per-view={2} rewind={true} space-between={15} autoplay-delay={2500} autoplay-disable-on-interaction={false} stopOnLastSlide={false}
                      breakpoints="{&quot;1024&quot;:{&quot;slidesPerView&quot;:4}}"
                          >
                          {data.map((item,index)=>{
                        return  <swiper-slide><Link  to={item.link}> <div  className='slider-img trans' key={uuid()}>
                        <img style={{width:"100%", height:"100%" ,borderRadius:"5%"}} src={item?.image} />
                      </div></Link></swiper-slide>
                      })}
                      </swiper-container>
                      <div class="swiper-button-prev"></div>
                      <div class="swiper-button-next"></div>
                  </div>
                  <div className="container">
                    <div className={"group18-section"}>
                      <img className={"group-18"} src={data[1]?.image} />
                      <Button onClick={()=> navigate({
                          pathname:data[1]?.link ,
                        })}
                            className={"group-18-btn"}
                            type="primary"
                          >
                              {t("seemore")}
                      </Button>
                    </div>
                  </div>
                </section>
            ) : (
                <div></div>
            )}
        </div>
    );
};

export default BestSeller;
